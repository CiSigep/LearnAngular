import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html'
})
export class UsernameComponent implements OnInit {
  username: string = "";

  constructor() { }

  ngOnInit() {
  }

  isUsernameEmpty(): boolean {
    return this.username.length === 0;
  }

  clearUsername(): void {
    this.username = "";
  }
}
