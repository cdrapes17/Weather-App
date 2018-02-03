import { SearchComponent } from './search/components/search/search.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherInformationModule } from './weather-information/weather-information.module';
import { SearchModule } from './search/search.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule, ToastOptions } from 'ng2-toastr/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomToastrOption } from './custom-toastr-options';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherInformationModule,
    SearchModule,
    HttpClientModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [{provide: ToastOptions, useClass: CustomToastrOption}],
  bootstrap: [AppComponent]
})
export class AppModule { }
