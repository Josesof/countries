import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { Name } from '../interfaces/name';
import { Region } from '../interfaces/region';
import { cacheStore } from '../interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: cacheStore = {
    byCapital: {term: '', countries:[]},
    byCountries: {term: '', countries:[]},
    byRegion: {reginon: '', countries:[]},
  }
  constructor(private http: HttpClient) { 
    this.loadFromLocaleStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem( 'cacheStorage', JSON.stringify( this.cacheStore));
  }

  private loadFromLocaleStorage() {
    if(!localStorage.getItem('cacheStorage')) return;
    this.cacheStore = JSON.parse( localStorage.getItem('cacheStorage')!);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(2000),
      
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.getCountriesRequest(url)
    .pipe(
       tap( countries => this.cacheStore.byCapital = {term, countries}) ,
       tap(() => this.saveToLocalStorage())
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe(
      tap( countries => this.cacheStore.byCountries = {term, countries} ),
      tap(() => this.saveToLocalStorage()) 
    )
      .pipe(catchError(error => of([]))
      );
  }

  searchRegion(term: string): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.apiUrl}/region/${term}`)
      .pipe(catchError(error => of([]))
      );
  }
}
