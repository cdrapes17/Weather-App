import { Component, OnInit } from '@angular/core';
import { WeatherInformationService } from '../services/weather-information.service';

@Component({
  selector: 'app-weather-information-container',
  templateUrl: './weather-information-container.component.html',
  styleUrls: ['./weather-information-container.component.scss']
})
export class WeatherInformationContainerComponent implements OnInit {

  constructor(private weatherService: WeatherInformationService) { }

  weather;

  ngOnInit() {
    this.getCityTemperature();
  }

  getCityTemperature() {
    this.weatherService.getCityTemperature().subscribe(
      data => this.weather = data
    )}
}
