import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export default class ReactiveFormsComponent {

  //constructor(
    //private fb:FormBuilder
 // )

 categories=['Japonesa','Coreana','Italiana']
  private fb= inject(FormBuilder);
  formFood!:FormGroup; //agregar ! para que ya no marque error

  constructor(){
    this.formFood=this.fb.group({
      name:[,Validators.required],
      description:[, [Validators.required,Validators.maxLength(15)]],
      urlImg:[,Validators.required],
      price:[,Validators.required],
      category:[,Validators.required]
    });
  }

  validaControl(control:string){
    return !!this.formFood.get(control)?.errors && this.formFood.get(control)?.touched; //esto para evitar usar tantos if en el html
  }

validarLongitud(){
  console.log(this.formFood);
 console.log(this.formFood.get('description')?.errors?.['maxLength']);
  return this.formFood.get('description')?.errors?.['max.length'];
}


  saveFood(){
    //console.log(this.formFood.errors);
    //console.log(this.formFood.get('urlImg')?.errors);
    console.log(this.formFood.get('description')?.errors);
    if(this.formFood.invalid) return;
    //console.log(this.formFood)

  }
}
