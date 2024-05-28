import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendienteCardComponent } from '../../components/pendiente-card/pendiente-card.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pendientes-principal',
  standalone: true,
  imports: [
    CommonModule, RouterModule, PendienteCardComponent, ReactiveFormsModule
  ],
  templateUrl: './pendientes-principal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PendientesPrincipalComponent {
  private fb=inject(FormBuilder);
  formPendientes!:FormGroup;

  constructor(){
    this.formPendientes=this.fb.group({
      title:[,[Validators.required, Validators.minLength(4)]],
      description:[, [Validators.required,Validators.minLength(8)]],
    })
  }

  validaControl(control:string){
    return !!this.formPendientes.get(control)?.errors && this.formPendientes.get(control)?.touched;
  }
  validaNameMin(control:string){
    return !!this.formPendientes.get(control)?.errors?.['minlength'];
  }

  listaPendientes:any[]=[
    {
      title:"Comer",
      description:"A las 2",
      //status:false
    }
  ]

  public counterSignal=signal(this.listaPendientes); //se le asigna el valor del array

  saveTask(){
    if(this.formPendientes.invalid){
      this.formPendientes.markAllAsTouched();
    }else{
      let pendienteNuevo={
        title:this.formPendientes.get('title')?.value,
        description:this.formPendientes.get('description')?.value,
        //status:false
      }
      this.counterSignal.set(
        [... this.counterSignal(),pendienteNuevo]
      )
      console.log(pendienteNuevo)
      this.formPendientes.reset();
    }

  }



 }
