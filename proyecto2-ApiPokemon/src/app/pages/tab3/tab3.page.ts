import { Component, OnInit } from '@angular/core';
import { TcgService } from 'src/app/services/tcg.service';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 misFavoritos:any=[];

  constructor(private favS:FavoritosService) {
    this.misFavoritos=this.favS.cargarFavoritos();
  }

  get localFavs(){
    return this.favS.localFavs;
  }
 
    

}
