import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit, OnChanges {
  @Input()
  weather;

  city: string;
  country: string;
  temperature: string;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.weather) {
      this.city = this.weather.city;
      this.country = this.weather.country;
      this.temperature = this.weather.temperature;
    }
  }

}
