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
    new Recipe('Tisasvoa', 'A great Russian delicacy!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0whL95_P_WBUuZ3sDUWV398PSWUT1zKZ5roqufZAXgadXe-bDZQ', []),
    new Recipe('Shanvoa', 'A middle eastern specialty!', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQMri1XvCoZcGjLNYuq3QXoI_Yw4Ho-rzmmpvKV88GGGoqwNcxXTA', []),
    new Recipe('Vinti Soup', 'Something spicy!', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRriEWt0_JnqqI38GSVVA2tEAgoh_4ajUbbESrsn8IOZ743KW9o', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
