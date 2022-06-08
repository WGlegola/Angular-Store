
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>()
    private recipes: Recipe[] = [
        new Recipe(
            'Burger',
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient("buns",1),
                new Ingredient("meat",2)
            ]),
        new Recipe(
            'spagetti', 
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient("pasta",500),
                new Ingredient("chicken",1)
            ])
      ];
      getRecipe(){
          return this.recipes.slice();
      }
      getRecipeById(id:number): Recipe{
          return this.recipes[id]
      }

      addRecipe(recipe:Recipe){
          this.recipes.push(recipe)
          this.recipesChanged.next(this.recipes.slice())
      }
      updateRecipe(index: number, newRecipe:Recipe){
          this.recipes[index] = newRecipe
          this.recipesChanged.next(this.recipes.slice())
      }
      deleteRecipe(index:number){
        this.recipes.splice(index,1)
        this.recipesChanged.next(this.recipes.slice())
      }
}