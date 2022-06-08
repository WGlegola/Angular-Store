import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  private igChangeSub: Subscription
  ingredients : Ingredient[];
  
  constructor(private shoppingListService:ShoppingListService) {

   }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients:Ingredient[]) => {this.ingredients = ingredients;});
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  onEditItem(i: number){
    this.shoppingListService.startedEditing.next(i)
  }
}
