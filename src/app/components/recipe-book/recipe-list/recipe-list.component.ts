import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Testytest", "Issa test", "https://upload.wikimedia.org/wikipedia/en/c/ce/Goomba.PNG")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
