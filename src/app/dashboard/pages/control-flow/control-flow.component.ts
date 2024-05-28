import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class ControlFlowComponent {
  verContent:boolean=false;
  changeContent(){
    this.verContent=!this.verContent;
  }
  calificacion:number=10;
  misCanciones=[
    {
      nombre:'Daylight'
    },
    {
      nombre:'This is me trying'
    },
    {
      nombre:'Willow'
    },
  ]

  antojitos=[
    'Tlayudas',
    'Garnachas',
    'Memelas',
    'Molotes'
  ];

  antojitos2=[];


 }

