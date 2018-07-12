import { Component } from '@angular/core';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddElements = [];
  evenElements = [];

  onNumberEmitted(emittedNumber: number){
    if(emittedNumber % 2 === 1) {
      this.oddElements.push(emittedNumber);
    }
    else {
      this.evenElements.push(emittedNumber);
    }
  }
}
