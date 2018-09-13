import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pancake',
      'A pancake',
      'http://pngimg.com/uploads/pancake/pancake_PNG93.png',
      [
        new Ingredient('Flour', 15),
        new Ingredient('Milk', 2)
      ]),
    new Recipe('Another Pancake',
      'A pancake',
      'http://pngimg.com/uploads/pancake/pancake_PNG93.png',
      [
        new Ingredient('Flour', 23),
        new Ingredient('Eggs', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // returns a copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
