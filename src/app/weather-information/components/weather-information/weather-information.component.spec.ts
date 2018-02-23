import { mockWeather } from './../../../tests/mock-weather';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformationComponent } from './weather-information.component';
import { SearchService } from '../../../search/services/search.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'ng2-toastr';

describe('WeatherInformationComponent', () => {
  let component: WeatherInformationComponent;
  let fixture: ComponentFixture<WeatherInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInformationComponent ],
      imports: [HttpClientModule, ToastModule.forRoot()],
      providers: [SearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a weather object when a search has been made', async(() => {
    fixture = TestBed.createComponent(WeatherInformationComponent);
    component = fixture.debugElement.componentInstance;
    // inject service
    const service = fixture.debugElement.injector.get(SearchService);
    const weather = mockWeather;
    // return the mock weather
    const spy = spyOn(service, 'getAllWeather')
      .and.returnValue(weather);
    fixture.detectChanges();
    // wait for fake async to perform test
    fixture.whenStable().then(() => {
      expect(component.weather).toBe(weather);
    });
  }));
});
