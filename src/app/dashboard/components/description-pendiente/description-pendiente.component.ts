import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-pendiente',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './description-pendiente.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionPendienteComponent {
  @Input({required:true}) mySignal!:any;

 }
