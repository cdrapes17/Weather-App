import { WeatherModel } from './search.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface WeatherModel {
  city: string;
  temperature: string;
  weather: string;
}

@Injectable()
export class SearchService {

  weatherStorage;
  weatherStorage$ = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
  }

  getWeather(city: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=164b4792bbb9d92dde20e42d2a6cebac&units=metric`)
      .map((res) => {
        const weather: WeatherModel = {
          city: res['name'],
          temperature: res['main']['temp'],
          weather: res['weather'][0]['main']
        };
        return weather;
      })
      .combineLatest(this.weatherStorage$)
      .take(1)
      .do(([weatherInfo, weatherStorage]) => {
        const combined = [...weatherStorage, weatherInfo];
        this.weatherStorage$.next(combined);
      })
      .subscribe();
  }

  getAllWeather() {
    return this.weatherStorage$;
  }

}
