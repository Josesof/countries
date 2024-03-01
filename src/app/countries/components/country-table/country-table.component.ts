import { Component, Input } from '@angular/core';
import { Region } from '../../interfaces/region';
import { Country } from '../../interfaces/country';
import { Name } from '../../interfaces/name';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];
  
}
