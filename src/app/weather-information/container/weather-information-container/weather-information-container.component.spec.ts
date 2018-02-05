import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformationContainerComponent } from './weather-information-container.component';
import { WeatherInformationComponent } from '../../components/weather-information/weather-information.component';
import { SearchService } from '../../../search/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'ng2-toastr';

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
    fixture = TestBed.createComponent(WeatherInformationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
