import { Component, ViewChild } from '@angular/core';
import { ApiInfoService } from '../api-info.service';
import { MapComponent } from '../map/map.component';
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss'
})
export class WorldComponent{
  countries: any[] = [];
  country: String = 'Default';
  incomeLevel: String = 'Default';
  countryName: String = 'Default';
  countryRegion: String = 'Default';
  countryCapital: String = 'Default';
  longitude: String = 'Default';
  latitude: String = 'Default';

  constructor(
    private worldBankService: ApiInfoService,
    private api: ApiInfoService
  ) {}

  @ViewChild(MapComponent) map!: MapComponent;

  // When the country is clicked, change api url to the right country
  // Update local variables to the right country information
  countryClicked(){
    this.api.countryChange(this.map.idAttribute);
    this.getData();
  }

  // Gets data from api and assigns it to local variables to be used in the world.component.html file
  getData(){
    this.api.getCountries().subscribe(
      (data) => {
        this.incomeLevel    = data[1][0].incomeLevel.value;
        this.countryName    = data[1][0].name;
        this.countryCapital = data[1][0].capitalCity;
        this.countryRegion  = data[1][0].region.value;
        this.longitude      = data[1][0].longitude;
        this.latitude       = data[1][0].latitude;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
