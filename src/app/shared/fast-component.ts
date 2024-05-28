import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector:'app-fast',
    standalone: true,
    imports: [CommonModule],
    template: `<section [ngClass]="['w-full h-[600px]',  clase]">  Fast Component <ng-content></ng-content> </section>`
})

export class FastComponent{
    @Input({required:true})clase!:string; //input para mandar datos de una componente padre una hija

   
}