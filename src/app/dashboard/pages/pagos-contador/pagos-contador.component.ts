import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card2ButtonComponent } from '../../components/card2-button/card2-button.component';
import { CardButtonComponent } from '../../components/card-button/card-button.component';

@Component({
  selector: 'app-pagos-contador',
  standalone: true,
  imports: [
    CommonModule,RouterModule, Card2ButtonComponent, CardButtonComponent
  ],
  templateUrl: './pagos-contador.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PagosContadorComponent {
  contadorNormal=0;

  public counterSignal=signal(0);
}
 