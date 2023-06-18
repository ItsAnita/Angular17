import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController, Platform, ToastController } from '@ionic/angular';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card:any;

  constructor(private asc:ActionSheetController, private fS:FavoritosService, private tCtrl:ToastController, private plat:Platform, private route:Router) { }

  ngOnInit() {}

  async presentAsc(card:any){
    const v=this.fS.verificarFav(card);
    console.log(v);
    const asheet = await this.asc.create({
      backdropDismiss: false,
      header:'Opciones',
      mode:'md',
      buttons:[
        {
          text:v?'Remover de Favoritos':'Agregar a favoritos',
          icon:v? 'heart':'heart-outline',
          handler:()=>{
            this.fS.addFavorito(card);
            if(v){
              this.presentToast('Eliminado');
            }else{
              this.presentToast('Agregado');
            }
          }
        },
        {
          text:'Compartir',
          icon:'share',
          handler:()=>{
            this.compartir();
          }
        },
        {
          text:'Cancelar',
          icon:'infinite',
          role:'cancel'
        },
        {
          icon:'cart',
          text:'Comprar tarjeta',
          handler:()=>{this.openBrowser();}
        }
      ]
    });
    await asheet.present();
  }

  async presentToast(msn:string){//msn significa mensaje
    const toast= await this.tCtrl.create({
      message:msn+' correctamente',
      duration:1500,
      position:'top',
      icon:'balloon'
    });
    toast.present();
  }

  async openBrowser(){
    if(this.plat.is('ios')|| this.plat.is('android')){
      await Browser.open({url:this.card.cardmarket.url});
    }else{
      console.log('Solo para celulares');
      window.open(this.card.cardmarket.url,'_blank'); //el blank hace que se abra en una nueva pestania
    }
  }

  async compartir(){
    await Share.share({
      title:'this.card.name',
      text:'Te comparto esta tarjeta',
      url:this.card.cardmarket.url,
      files:[this.card.images.small],
      dialogTitle:'Compartiendo tarjetas'
    });
  }

  verDetalles(id:string){
    this.route.navigate(['/detalles',id]);
  }
}
