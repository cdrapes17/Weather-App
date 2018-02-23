import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { WeatherModel } from '../../../search/services/search.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss'],
  animations: [
    trigger('animation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(200, keyframes([
          style({opacity: 0, transform: 'translateX(-200px)', offset: 0}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
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
  }

  removeWeather(id) {
    this.weatherEventEmitter.emit(id);
  }

}
