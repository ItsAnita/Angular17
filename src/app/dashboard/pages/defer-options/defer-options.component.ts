import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FastComponent } from '../../../shared/fast-component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule, FastComponent
  ],
  templateUrl: './defer-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent { }
