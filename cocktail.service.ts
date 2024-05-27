import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { cocktail } from './models/cocktail';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {
private http= inject(HttpClient);

  constructor() { }
  getCocktails():Observable<cocktail[]>{
    return this.http.get<cocktail[]>("assets/cocktails.json") }
}
