import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Name } from '../../interfaces/name';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit{

  public names: Country[] = [];
  public initialValue: string = '';
  public city: string = ''
  private countriesService = inject(CountriesService);

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
    this.names = this.countriesService.cacheStore.byCountries.countries;
   }

  searcByCapital(term: string): void {
    this.countriesService.searchCountry(term)
    .subscribe(names => {
     this.names = names;
    })
  }

}
