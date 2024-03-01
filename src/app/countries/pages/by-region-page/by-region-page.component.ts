import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region';
import { RegionsWordlC } from '../../interfaces/regions.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  public regions: Region[] = [];
  public regionsWorld: RegionsWordlC[] = ['Africa','Americas','Asia','europe','Oceania'];
  public selecteRegion?:RegionsWordlC;
  private countriesService = inject(CountriesService);

  searcByRegion(term: RegionsWordlC): void {

    this.selecteRegion = term;
    
    this.countriesService.searchRegion(term)
    .subscribe(regions => {
      this.regions = regions;
      console.log(this.regions)
    })
  }

}
