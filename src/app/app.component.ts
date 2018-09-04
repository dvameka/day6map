import { Component , OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 /*
  (F-32)*5/9 = Celcius
  */
 title = 'day6map';

ngOnInit () { }
  constructor( ) { }
}
