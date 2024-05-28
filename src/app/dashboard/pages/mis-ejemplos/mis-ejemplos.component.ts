import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mis-ejemplos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './mis-ejemplos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MisEjemplosComponent { 
  verEstado:boolean=false;

  cambiarEstado(){
    this.verEstado=!this.verEstado;
}

valoracion:number=10;

canciones=[
  'Our song',
  'Cornelia Street',
  'Now that we dont talk',
  'Afterglow',
  'Style',
  'Lover',
  'New Romantics',
  'Me',
  'Slut!',
  'Daylight',
  'Enchanted'
]
series=[];
}
