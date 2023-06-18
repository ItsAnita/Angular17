import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
misFavoritos:any[]=[];
existe:any; //nos ava a yudar a saber si ya existe una card en nuestros favs
  constructor() { }

  cargarFavoritos(){
    //this.misFavoritos=await JSON.parse(localStorage.getItem('favoritos'))||[];
    const favs= localStorage.getItem('favoritos')||null;
    if(favs){
      this.misFavoritos=JSON.parse(favs);
    }else{
      this.misFavoritos = []
    }
    return this.misFavoritos
  }
  

  addFavorito(card:any){
    const favs= localStorage.getItem('favoritos')||null;
    if(favs){
      this.misFavoritos=JSON.parse(favs);
    }
    if(this.misFavoritos){
      this.existe=this.misFavoritos.find((c:any)=>c.id===card.id) //find sole se le aplica a los arreglos
      console.log('Existe?', this.existe);
    }
    if(this.existe){
      console.log('Eliminado');
      this.misFavoritos=this.misFavoritos.filter(c=>c.id!==card.id); //revisa todos y quita los que coincidan
    }else{
      this.misFavoritos.unshift(card); //agrega un elemento al principio del array
    }
    localStorage.setItem('favoritos',JSON.stringify (this.misFavoritos)); //coloca 
  }

  verificarFav(card:any){
    return !!this.misFavoritos.find(c=>c.id===card.id); //find busca 
  }

  get localFavs(){
   return [...this.misFavoritos]; //los 3 puntos se llaman spread separa los elementos en objetos
  }
}
