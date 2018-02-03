
import { SearchComponent } from './search/components/search/search.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherInformationModule } from './weather-information/weather-information.module';
import { SearchModule } from './search/search.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherInformationModule,
    SearchModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
