import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Weather } from '../../shared/models/weather.model';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WeatherInformationService {

  constructor(private http: HttpClient) { }

  getCityTemperature(city) :Observable<Weather> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=164b4792bbb9d92dde20e42d2a6cebac`)
    .switchMap((res) => {
      let weather: Weather;
      weather = {
        city: res['name'],
        country: res['sys']['country'],
        weather: res['weather'][0]['main'],
        temperature: res['main']['temp']
      }
      return Observable.of(weather);
  })
  }

  
}
