import { Component, OnInit } from '@angular/core';
import { TcgService } from '../../services/tcg.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
buscador:any=[];
  constructor(private tcs:TcgService) { }

  ngOnInit() {
  }

  buscar(ev:any){
    console.log(ev.detail.value);
    if (ev.detail.value===""){ //este if lo agregue nomas para que no de un error al no ingresar algo
    }else{
    this.tcs.getCardsByName(ev.detail.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.buscador=data.data;
      },
    )
  }}

}
