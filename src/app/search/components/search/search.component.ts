import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { WeatherInformationService } from '../../../weather-information/services/weather-information.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public SearchForm: FormGroup;
  @ViewChild('cityInput') cityInput: ElementRef;
  constructor(private _fb: FormBuilder, private searchService: SearchService) { }
  

  ngOnInit() {
    this.SearchForm = this._fb.group({
      searchCity: []
    });
  }

  getWeatherFromCity(payload) {
    this.searchService.getWeather(payload.searchCity);
    this.clearInput(this.cityInput)
  }

  clearInput(element: ElementRef){
    element.nativeElement.value = '';
  }

}
