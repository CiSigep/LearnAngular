import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test Recipe', 'Test me', 'https://www.maxpixel.net/static/photo/2x/Uni-Learn-Test-Board-Work-Aptitude-Test-School-361516.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
