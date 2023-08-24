import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import countryWords from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;
  countries = '';

  handleSlideChange(newLimit: number){
    this.limit = newLimit;
  }
  randomnum = 10;
  generateCountries(){
    this.randomnum= Math.floor(Math.random() * 196) + 1;
    this.limit = this.randomnum;
    this.countries = countryWords.slice(0, this.randomnum).join(' ');
  }
  generate(){
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
}
