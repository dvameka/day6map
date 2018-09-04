import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityNameinputComponent } from './components/city-nameinput.component';
import { WeatherOutputComponent } from './components/weather-output.component';
import { MaterialModule } from './material.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    CityNameinputComponent,
    WeatherOutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
