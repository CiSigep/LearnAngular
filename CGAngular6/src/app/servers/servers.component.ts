import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  //template: '<app-server></app-server><app-server></app-server>',

  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No Server Created."
  serverName: string = "";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server Created! The name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
