import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { cocktail } from '../models/cocktail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  cocktails:cocktail[]=[];
private cocktailService= inject(CocktailService);
ngOnInit(): void {
  this.cocktailService.getCocktails().subscribe(x=>{this.cocktails=x});
}
}
