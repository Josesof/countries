import { Component, Input } from '@angular/core';
import { Name } from '../../interfaces/name';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent {

  @Input()
  public names: Country[] = [];

}
