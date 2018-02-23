import { mockWeather } from './../../../tests/mock-weather';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformationContainerComponent } from './weather-information-container.component';
import { WeatherInformationComponent } from '../../components/weather-information/weather-information.component';
import { SearchService } from '../../../search/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'ng2-toastr';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('WeatherInformationContainerComponent', () => {
  let component: WeatherInformationContainerComponent;
  let fixture: ComponentFixture<WeatherInformationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastModule.forRoot()
      ],
      declarations: [WeatherInformationContainerComponent, WeatherInformationComponent],
      providers: [SearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    fixture = TestBed.createComponent(WeatherInformationContainerComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should receive a weather object when search is called', async(() => {
    fixture = TestBed.createComponent(WeatherInformationContainerComponent);
    component = fixture.debugElement.componentInstance;
    // create mock of weather storage and store dummy data
    const weather = new BehaviorSubject([]);
    weather.next([mockWeather]);
    // inject service
    const service = fixture.debugElement.injector.get(SearchService);
    // return the mock weather
    const spy = spyOn(service, 'getAllWeather')
      .and.returnValue(weather);
    fixture.detectChanges();
    // wait for fake async to perform test
    fixture.whenStable().then(() => {
      expect(component.weather$).toBe(weather);
    });
  }));
});
