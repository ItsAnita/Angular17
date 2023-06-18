import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TcgService } from './../../services/tcg.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  id:any=[];
  tarjeta:any={};

  constructor(private ar:ActivatedRoute, private tcg:TcgService) {
    this.ar.params.subscribe(
      (data:any)=>{
        console.log(data)
        this.id=data.id;
        this.tcg.getCard(data.id).subscribe(
          (info:any)=>{
            this.tarjeta=info.data; //la info de la card
            console.log(this.tarjeta);
          })
        })
      };
   

  ngOnInit() {
  }


  

}
