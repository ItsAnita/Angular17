import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CardComponent //yo lo impors
  ],
  imports: [
    CommonModule,
    IonicModule //se agrega esto para que acepte etiquetas de ionic
  ],
  exports:[
    CardComponent //esto tambien lo mport'e yo
  ]
})
export class ComponentsModule { }
