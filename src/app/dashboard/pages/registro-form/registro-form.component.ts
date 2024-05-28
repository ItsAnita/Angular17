import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, PatternValidator, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';
import { emailPattern, fullName, noAnita, validarMatricula, validarPass,} from '../../../validators/common.validators';


@Component({
  selector: 'app-registro-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './registro-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegistroFormComponent {
  private fb=inject(FormBuilder);
  formResgister!:FormGroup



  constructor(){
    this.formResgister=this.fb.group({
      fullname:[,[Validators.required, Validators.pattern(fullName)]],
      email:[,[Validators.required,Validators.pattern(emailPattern)]],
      username:[,[Validators.required,]], //validator personalizado
      password:[,Validators.required],
      confirmPass:[,[Validators.required,]],
      matricula:[,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    },{validators:[noAnita,validarPass, validarMatricula, ]},

    );
  }
  //para mostrar error de que todos los campos son requeridos
  validaControl (control:string){
    return !!this.formResgister.get(control)?.errors && this.formResgister.get(control)?.touched;
  }
  //que no se repida un username
  validaUsername(control:string){
    return !!this.formResgister.controls[control].errors?.['mierror']; 
  }
  //que se inf=grese nombre y apellido
  validaFullname(control:string){
    return !!this.formResgister?.controls[control].errors?.['pattern']
  }
  validaEmail(){
    return !!this.formResgister.controls['email'].errors?.['pattern'];
   }
  validaPassword(){
    return !!this.formResgister.controls['confirmPass'].errors?.['errorValidacion'];
  }

  validaMatricula(){
    return !!this.formResgister.controls['matricula'].errors?.['errorMatricula'];
  }




  saveRegister(){

    if(this.formResgister.invalid){
      this.formResgister.markAllAsTouched(); //marca error si no se han rellenado los campos
    }else{
      console.log(this.formResgister.value);
      this.formResgister.reset();
 }
}
}
