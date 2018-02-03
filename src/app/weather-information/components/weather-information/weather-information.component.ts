import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnInit {

  @Input() weather;

  constructor() { }

  ngOnInit() {

  }

}
