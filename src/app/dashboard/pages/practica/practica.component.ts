import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { serieProducto, validarPhone} from '../../../validators/common.validators';

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './practica.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PracticaComponent {
  private fb=inject(FormBuilder)
  formProduct!:FormGroup;

  categoria=[
    'Electrodomestico',
    'Electronica',
    'Despensa',
    'Blancos',
    'Sala'
  ]

  constructor(){
    this.formProduct=this.fb.group({
      product:[,[Validators.required, Validators.minLength(5)]],
      description:[, [Validators.required,Validators.minLength(8), Validators.maxLength(50)]],
      category:[null,Validators.required],
      phone:['',[Validators.required, ]], //Validators.pattern("^\\d{10}$")
      serie:[,Validators.required], //marca
    },
    {validators:[
      validarPhone,
      serieProducto
    ]}
    )
  }
  validaControl(controlName:string){
    return !!this.formProduct.get(controlName)?.errors?.['required'] && this.formProduct.get(controlName)?.touched; //esto para evitar usar tantos if en el html
  }

  validaDescriptionMin(controlMin:string){
    return !!this.formProduct.get(controlMin)?.errors?.['minlength'];
  }
  validaPhone(){
    return !!this.formProduct.get('phone')?.errors?.['errorPhone']&& this.formProduct.get('phone')?.touched;
  }
  validarSerie(){
    return !!this.formProduct.get('serie')?.errors?.['errorSerie'];
  }
 }
