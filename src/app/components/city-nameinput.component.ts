import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-nameinput',
  templateUrl: './city-nameinput.component.html',
  styleUrls: ['./city-nameinput.component.css']
})

export class CityNameinputComponent implements OnInit {
  private result = {};
  desc = '';
  searchform  = new FormGroup ({
      city: new FormControl(''),
  });

constructor (private httpClient: HttpClient) {
}

  ngOnInit() {
    const cityField = this.searchform.get('city');
    console.log(cityField);
    const debounce = cityField.valueChanges.pipe (
      debounceTime(1000), // delay 1000 msec
      distinctUntilChanged() // only for changed value
    );
    debounce.subscribe(changes => {
      console.log(changes);
      this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?appID=759d9c49eb0ad836d7e2b983098f955f&q=${changes}`)
        .subscribe((data: any) => {
          console.log (data);
         this.result = data.main;
         this.desc = data.weather[0].description;
        });

        }

      );

    }
  }
