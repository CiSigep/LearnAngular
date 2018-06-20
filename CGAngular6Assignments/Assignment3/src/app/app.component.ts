import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedClicks = [];
  display: boolean = false;

  displayDetailsToggle(): void {
    this.display = !this.display;
    this.loggedClicks.push('The button was clicked at ' + new Date());
  }

  indexColor(i): string {
    return i >= 4 ? 'white' : 'black';
  }
}
