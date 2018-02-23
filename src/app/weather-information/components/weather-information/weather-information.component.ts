import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { WeatherModel } from '../../../search/services/search.service';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnInit, OnChanges {


  @Input() weather: WeatherModel;
  @Output() weatherEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  displayWeatherText(weather) {
    return weather.weather === 'Clouds' || weather.weather === 'Rain' || weather.weather === 'Clear';
  }

  ngOnChanges(): void {
    // console.log(this.weather);
  }

  removeWeather(id) {
    this.weatherEventEmitter.emit(id);
  }

}
