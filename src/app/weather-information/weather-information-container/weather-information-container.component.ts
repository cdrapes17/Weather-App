import { Component, OnInit, Input } from '@angular/core';
import { WeatherInformationService } from '../services/weather-information.service';
import { Weather } from '../../shared/models/weather.model';

@Component({
  selector: 'app-weather-information-container',
  templateUrl: './weather-information-container.component.html',
  styleUrls: ['./weather-information-container.component.scss']
})
export class WeatherInformationContainerComponent implements OnInit {

  constructor(private weatherService: WeatherInformationService) { }

  weather;
  @Input()
  cityToSearch;

  ngOnInit() {
    this.getCityTemperature();
  }

  getCityTemperature() {
    this.weatherService.getCityTemperature(this.cityToSearch).subscribe(
      data => this.weather = data
    )}

}
