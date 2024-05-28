import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-ropa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms-ropa.component.html',
  styleUrl: './forms-ropa.component.css'
})
export default class  FormsRopaComponent {
  clasificacion=['Adulto','Niño','Dama','Juvenil','Deportivo']
  private fb= inject(FormBuilder);
  formRopa!:FormGroup; //agregar ! para que ya no marque error

  marca=[
    'Nike',
    'Puma',
    'Bershka',
    'Adidas',
    'Gap',
    'Nautica'
  ]

  constructor(){
    this.formRopa=this.fb.group({
      name:[,Validators.required],
      description:[, [Validators.required,Validators.minLength(20), Validators.maxLength(50)]],
      price:[null,[Validators.required, Validators.min(1), Validators.max(5000)]],
      stock:[,[Validators.required, Validators.min(0), Validators.max(500)]],
      brand:[,Validators.required], //marca
      classification:[,Validators.required], //clasiificacion
    });
  }

  validaControl(controlName:string){
    return !!this.formRopa.get(controlName)?.errors?.['required'] && this.formRopa.get(controlName)?.touched; //esto para evitar usar tantos if en el html
  }


  validaDescriptionMin(controlMin:string){
    return !!this.formRopa.get(controlMin)?.errors?.['minlength'];
  }

  validaDescriptionMax(controlMax:string){
    return !!this.formRopa.get(controlMax)?.errors?.['maxlength'];
  }

  validaPriceMax(controlPrice:string) {
  return !!this.formRopa.get(controlPrice)?.errors?.['max'];
  }

  validaPriceMin(controlPrice:string) {
    return !!this.formRopa.get(controlPrice)?.errors?.['min'];
  }

  validaStockMin(controlStock:string){
    return !!this.formRopa.get(controlStock)?.errors?.['min'];
  }
  validaStockMax(controlStock:string){
    return !!this.formRopa.get(controlStock)?.errors?.['max'];
  }

  saveRopa(){

    if(this.formRopa.invalid){
      this.formRopa.markAllAsTouched(); //marca error si no se han rellenado los campos
    }else{
      console.log(this.formRopa.value);
      this.formRopa.reset({ //resetea el form para agregar un nuevo producto, cuando resetea asigna los valores del objeto, si reset se queda en blanco reset() el form se queda en blanco
        name:'Camisa',
        price:300,
        stock:20,
        description:'bkdjhdsbhcjbdsbcbchbhfbvhfbvhf'
    });

    //if(this.formRopa.invalid){
      //console.log('No se rellenaron todos los campos')
     // return;
    //}
    //console.log(this.formRopa.value);
  }

}}
