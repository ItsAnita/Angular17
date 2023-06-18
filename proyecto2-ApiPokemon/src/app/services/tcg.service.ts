import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TcgService {

  constructor(private http:HttpClient) { }

  obtenerCards(){
    //return this.http.get('https://api.pokemontcg.io/v2/cards')
    return this.http.get('https://api.pokemontcg.io/v2/cards?page=1&pageSize=50')
  }

  getCardsByType(tipo:string){
    return this.http.get(`https://api.pokemontcg.io/v2/cards?q=types:${tipo}`)
  }
  getCardsByName(nombre:string){
    return this.http.get(`https://api.pokemontcg.io/v2/cards?q=name:${nombre}`);
  }

  getCard(id:string){
    return this.http.get(`https://api.pokemontcg.io/v2/cards/${id}`);
  }

}
