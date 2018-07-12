import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('gameNumber') emitter:EventEmitter<number> = new EventEmitter<number>();
  eventObj = { value: 0, emitObj: this.emitter};
  intervalRef;
  running: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    if(!this.running){
        this.running = true;
        this.intervalRef = setInterval(function(intervalObj){
        intervalObj.emitObj.emit(++intervalObj.value);
      }, 1000, this.eventObj);
    }
  }

  onPauseGame() {
    clearInterval(this.intervalRef);
    this.running = false;
  }

}
