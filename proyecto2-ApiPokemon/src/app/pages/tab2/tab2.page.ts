import { Component } from '@angular/core';
import { TcgService } from '../../services/tcg.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cards:any[]=[];
  

  tipos:string[]=
  [
    'Colorless',
    'Darkness',
    'Dragon',
    'Fairy',
    'Fighting',
    'Fire',
    'Grass',
    'Lightining',
    'Metal',
    'Psychic',
    'Water'
  ]

  typeSelected=this.tipos[1];

  constructor(private tcgs:TcgService, private loadCtr:LoadingController) {
    this.presentLoading();
    this.tcgs.getCardsByType(this.typeSelected).subscribe(
      (data:any)=>{
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

  segmentChanged(evento:any){
    this.presentLoading();
    console.log(evento.detail.value);
    this.tcgs.getCardsByType(evento.detail.value).subscribe(
      (data:any)=>{
        if(data){
          this.loadCtr.dismiss();
        }
        console.log(data);
        this.cards=data.data;
      }
    )
  }

  

  

}
