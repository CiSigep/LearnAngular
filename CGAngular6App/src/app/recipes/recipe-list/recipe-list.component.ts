import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output('sItem') itemSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>()
  recipes:Recipe[] = [
    new Recipe('Test Recipe', 'Test me', 'https://www.maxpixel.net/static/photo/2x/Uni-Learn-Test-Board-Work-Aptitude-Test-School-361516.jpg'),
    new Recipe('Another Test Recipe', 'Test me', 'https://www.maxpixel.net/static/photo/2x/Uni-Learn-Test-Board-Work-Aptitude-Test-School-361516.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  selectedItem(item:Recipe){
    this.itemSelected.emit(item);
  }

}
