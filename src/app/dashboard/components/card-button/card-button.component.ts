import { CommonModule, } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input  } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardButtonComponent {

  @Input({
    required:true
  })
contadorN:number=0;

  aumentar(){
    this.contadorN++;
    console.log('Si funciona', this.contadorN)
  }

}
