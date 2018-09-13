import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipesService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pancake', 'A pancake',
      'http://pngimg.com/uploads/pancake/pancake_PNG93.png'),
    new Recipe('Another Pancake', 'A pancake',
      'http://pngimg.com/uploads/pancake/pancake_PNG93.png')
  ];

  getRecipes() {
    return this.recipes.slice(); // returns a copy of the array
  }
}
