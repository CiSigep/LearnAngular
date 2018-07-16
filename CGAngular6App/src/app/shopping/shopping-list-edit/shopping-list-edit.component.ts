import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/igredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameIn:ElementRef;
  @ViewChild("amountInput") amountIn:ElementRef;
  @Output() ingredientCreate:EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    this.ingredientCreate.emit(new Ingredient(this.nameIn.nativeElement.value, parseInt(this.amountIn.nativeElement.value)));
  }
}
