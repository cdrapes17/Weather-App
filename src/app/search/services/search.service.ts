import { WeatherModel } from './search.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

export interface WeatherModel {
  city: string;
  temperature: number;
  weather: string;
  country: string;
}

@Injectable()
export class SearchService {

  weatherStorage$ = new BehaviorSubject([]);

  constructor(private http: HttpClient, public toastr: ToastsManager) {
  }

  getWeather(city: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=164b4792bbb9d92dde20e42d2a6cebac&units=metric`)
      .map((res) => {
        const weather: WeatherModel = {
          city: res['name'],
          temperature: Math.round(res['main']['temp']),
          weather: res['weather'][0]['main'],
          country: res['sys']['country']
        };
        return weather;
      })
      .combineLatest(this.weatherStorage$)
      .take(1)
      .do(([weatherInfo, weatherStorage]) => {
        const combined = [...weatherStorage, weatherInfo];
        this.weatherStorage$.next(combined);
      })
      .catch((err) => {
        this.toastr.error(`Please check spelling and try again.`, `City: '${city}'  not found`);
        return Observable.of(err)
      })
      .subscribe()

  }

  getAllWeather() {
    return this.weatherStorage$;
  }

}
