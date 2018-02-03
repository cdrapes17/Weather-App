import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformationContainerComponent } from './weather-information-container.component';

describe('WeatherInformationContainerComponent', () => {
  let component: WeatherInformationContainerComponent;
  let fixture: ComponentFixture<WeatherInformationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInformationContainerComponent ]
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
