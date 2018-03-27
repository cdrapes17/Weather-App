import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherModel } from '../../../search/services/search.service';
import { trigger, transition, query, useAnimation, style, state } from '@angular/animations';
import { fadeAnimation, bounce, rightToLeft, fadeRight } from '../../../shared/animations/animations';
import { fadeOutRight, fadeOutLeft, slideOutRight } from '../../../shared/animations/fade-animations';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss'],
  animations: [
    trigger('fade-in', [
      transition(':enter', useAnimation(fadeAnimation)),
      transition(':leave', useAnimation(slideOutRight))
    ]
    )]
})
export class WeatherInformationComponent implements OnInit {

  @Input() weather: WeatherModel;
  @Output() weatherEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  displayWeatherText(weather) {
    return weather.weather === 'Clouds' || weather.weather === 'Rain' || weather.weather === 'Clear';
  }

  removeWeather(id) {
    this.weatherEventEmitter.emit(id);
  }

}
