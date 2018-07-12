import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName:string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{ serverName:string, serverContent: string}>();
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  //newServerName = '';
  //newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  // onAddServer() {
  //   this.serverCreated.emit({ 
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddServer(serverNameInput:HTMLInputElement) {
    this.serverCreated.emit({ 
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({ 
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({ 
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
