import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-pendiente-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pendiente-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PendienteCardComponent {
  @Input({required:true}) mySignal!:any;

 }



 /*
  sendMessage(message: string) {
    this.messageSignal.set(message);
  }
*/
