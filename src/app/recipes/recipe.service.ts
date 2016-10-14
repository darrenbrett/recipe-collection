import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Diavora', 'When you need a delish snack!', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZIYR2xtyZ0oLbVvUaLRshEBLcjnDUb9aiDWRIPttFKAnCLLBs', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Tisavola', 'A great Russian delicacy!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0whL95_P_WBUuZ3sDUWV398PSWUT1zKZ5roqufZAXgadXe-bDZQ', [
      new Ingredient('Backaman', 3),
      new Ingredient('Peppered Beef', 2)
    ])
  ];


  constructor() { }

  getRecipes(id: number) {
    return this.recipes[id];
  }

}
