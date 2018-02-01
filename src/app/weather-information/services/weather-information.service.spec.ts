import { TestBed, inject } from '@angular/core/testing';

import { WeatherInformationService } from './weather-information.service';

describe('WeatherInformationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherInformationService]
    });
  });

  it('should be created', inject([WeatherInformationService], (service: WeatherInformationService) => {
    expect(service).toBeTruthy();
  }));
});
