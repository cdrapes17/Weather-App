import { Component, OnInit, Input } from '@angular/core';
import { WeatherModel } from '../../../search/services/search.service';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnInit {

  @Input() weather: WeatherModel;

  constructor() { }

  ngOnInit() {
  }

  displayWeatherText(weather){
    return weather.weather === 'Clouds' || weather.weather === 'Rain' || weather.weather === 'Clear';
  }

}
