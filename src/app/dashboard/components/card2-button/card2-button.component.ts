import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card2-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card2-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card2ButtonComponent {
  @Input({required:true}) mySignal!:any;

  aumentar(){
    this.mySignal.set(this.mySignal()+1)
    console.log('si funcion signal')
  }
 } 
