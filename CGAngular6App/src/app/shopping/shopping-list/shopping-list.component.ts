import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/igredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Potatoes', 2),
    new Ingredient('Tomatoes', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

}
