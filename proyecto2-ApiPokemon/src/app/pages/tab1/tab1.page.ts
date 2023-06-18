import { Component } from '@angular/core';
import { TcgService } from 'src/app/services/tcg.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cards:any=[];
  weaknesses:any[]=[];
  resistances:any[]=[];



  constructor(private tcgS:TcgService, private loadCtr:LoadingController) {
    this.presentLoading();
    this.tcgS.obtenerCards().subscribe(
      (data:any) =>{
        if(data){
          this.loadCtr.dismiss();
        }
        console.log(data);
        this.cards=data.data;

      }
    )
  }

  async presentLoading(){
    const loading=await this.loadCtr.create({
      message:'Cargando tarjetas',
      translucent:true,
      spinner:'bubbles'
    });
    await loading.present();
  }

}
