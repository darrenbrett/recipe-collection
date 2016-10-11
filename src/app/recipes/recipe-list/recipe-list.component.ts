import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Diavora', 'When you need a delish snack!', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZIYR2xtyZ0oLbVvUaLRshEBLcjnDUb9aiDWRIPttFKAnCLLBs', []),
    new Recipe('Tisasvoa', 'A great Russian delicacy!', 'http://desiappetite.com/recipeAdmin/assets/images/thumbnails/6285209385-food.jpg', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
