import { WeatherInformationService } from './../../services/weather-information.service';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../search/services/search.service';


@Component({
  selector: 'app-weather-information-container',
  templateUrl: './weather-information-container.component.html',
  styleUrls: ['./weather-information-container.component.scss']
})
export class WeatherInformationContainerComponent implements OnInit {
  weather$;

  constructor(private weatherService: WeatherInformationService, private searchService: SearchService) { }

  ngOnInit() {
    this.weather$ = this.searchService.getAllWeather();
  }

}
