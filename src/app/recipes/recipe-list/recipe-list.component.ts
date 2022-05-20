import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [new Recipe("Test","A TestXD", "https://imgs.search.brave.com/kFuOJitvW3VfteX4w3DFI9-Ck2IW2MRhil6lrK3B2Lg/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/NGlwa2wtUEtHcGVU/ZDhkQ2xuRGxnSGFE/NCZwaWQ9QXBp")];
  constructor() { }

  ngOnInit(): void {
  }

}
