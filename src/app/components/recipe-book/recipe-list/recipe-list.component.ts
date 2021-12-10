import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Testytest", "Issa test", "https://upload.wikimedia.org/wikipedia/en/c/ce/Goomba.PNG"),
    new Recipe("Testytest2", "Issa second test", "https://www.mariowiki.com/images/thumb/9/94/MushroomMarioKart8.png/1200px-MushroomMarioKart8.png")
  ];

  @Output() onUserSelectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(recipe){
    this.onUserSelectedRecipe.emit(recipe);
  }

}
