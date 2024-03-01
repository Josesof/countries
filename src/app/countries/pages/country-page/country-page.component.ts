import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{

public country?: Country;
  private activateRoute = inject(ActivatedRoute);
  private countriesService = inject(CountriesService);
  private router = inject(Router);

  ngOnInit(): void {

    this.activateRoute.params
     .pipe(
      switchMap(({id})=> this.countriesService.searchCountryByAlphaCode( id)),
     )
     .subscribe( country => {
      if( !country)
      return this.router.navigateByUrl('');     
      return this.country = country;
      
     });
  }


}
