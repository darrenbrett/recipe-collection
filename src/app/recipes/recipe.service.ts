import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
private recipes: Recipe[] = [
    new Recipe('Diavora', 'When you need a delish snack!', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZIYR2xtyZ0oLbVvUaLRshEBLcjnDUb9aiDWRIPttFKAnCLLBs', []),
    new Recipe('Tisasvoa', 'A great Russian delicacy!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0whL95_P_WBUuZ3sDUWV398PSWUT1zKZ5roqufZAXgadXe-bDZQ', []),
    new Recipe('Croan Sliders', 'A northern Irish specialty!', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeCj1UFAwjU-lY1_CT9Vhqg3AaG65rkRyA_HFP4F7zVgc_7d4SyQ', []),
    new Recipe('Vinti Soup', 'Something spicy!', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRriEWt0_JnqqI38GSVVA2tEAgoh_4ajUbbESrsn8IOZ743KW9o', [])
  ];


  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
