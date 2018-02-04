import { Component, OnInit } from '@angular/core';
import { SearchService, WeatherModel } from '../../../search/services/search.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-weather-information-container',
  templateUrl: './weather-information-container.component.html',
  styleUrls: ['./weather-information-container.component.scss']
})
export class WeatherInformationContainerComponent implements OnInit {
  weather$: BehaviorSubject<WeatherModel[]>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.weather$ = this.searchService.getAllWeather();
  }

}
