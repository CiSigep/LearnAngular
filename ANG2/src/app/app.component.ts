import { Component, OnInit } from '@angular/core';
import { Warrior } from './warrior';
import { WarriorService } from './warrior.service';
import './rxjs-operators';

const warr: Warrior[] = 
  [{
    name: "Vaxton",
    age: 24,
    weapon: "Dual Swords"
  }]; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  

  
export class AppComponent implements OnInit {
  errorMessage: string;
  title = 'Warriors!';
  warriors = warr;
  selected:Warrior = null;
  
  constructor(private wars: WarriorService) {}
  
  ngOnInit() {
    this.getWarriors();
  }
  
 getWarriors(){
    this.wars.getWarriors().subscribe(
      warriors => this.warriors = warriors,
      error => this.errorMessage = <any> error
    );
  }
  
  isSelected(value){
    return value === this.selected;
  }
  
  select(value){
    this.selected = value;
  }
  
}