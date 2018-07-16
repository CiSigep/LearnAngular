import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("item") recipeItem: Recipe;
  @Output("selectedItem") selItem:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectItem(item:Recipe){
    this.selItem.emit(item);
  }
}
