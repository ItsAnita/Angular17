import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlowComponent } from '../../../shared/slow-component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, SlowComponent], //importar commonModule y el slow
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.css'
})
export default class DeferViewsComponent {

}
