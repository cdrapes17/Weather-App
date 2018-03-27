import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDayForecastContainerComponent } from './five-day-forecast-container.component';

describe('FiveDayForecastContainerComponent', () => {
  let component: FiveDayForecastContainerComponent;
  let fixture: ComponentFixture<FiveDayForecastContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveDayForecastContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveDayForecastContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
