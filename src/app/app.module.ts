import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherInformationModule } from './weather-information/weather-information.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherInformationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
