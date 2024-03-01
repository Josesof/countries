import { Component, Input } from '@angular/core';
import { Region } from '../../interfaces/region';

@Component({
  selector: 'region-table',
  templateUrl: './region-table.component.html',
  styleUrls: ['./region-table.component.css']
})
export class RegionTableComponent {

  @Input()
  public regions: Region[] = [];

}
