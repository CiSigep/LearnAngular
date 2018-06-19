import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p class="warningAlert">This is the WarningAlertComponent</p>',
  styles: ['.warningAlert{ background-color: #FFFF76; padding: 10px; border: 1px solid yellow; }']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
