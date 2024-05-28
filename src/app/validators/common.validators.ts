import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn,  } from "@angular/forms";


//PATRONES

//export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
export const emailPattern: string = "^[a-z0-9._%+-]+@[utvco]+\\.[edu]+\\.[mx]{2,4}$";
//export const emailPattern: string = "^utti[0-9]{6}@utvco.edu.mx$";;

export const fullName:string='([a-zA-Z]+) ([a-zA-Z]+)';  //se repiten dos veces uno para el nombre y otro para el apellido


//validators personalizado
export function noAnita(control:AbstractControl):
ValidationErrors | null {
  const user= control?.get('username')?.value;
  console.log(user);
  if(user==='anita'||user==='anita '){
    console.log('Este username ya esta en uso')
    control.get('username')?.setErrors({'mierror':true})
  }
  return (null);
}

export function validarPass(control:AbstractControl):
ValidationErrors|null{
  const pass=control?.get('password')?.value;
  const confirmPass=control?.get('confirmPass')?.value;
  if(confirmPass !== pass){
    console.log('La contraseña no coincide')
    control.get('confirmPass')?.setErrors({'errorValidacion':true})
  }
  return(null);
}

const matriculasRegistradas: string[]=[
  'UTTI212009',
  'UTTI212008',
  'UTTI212020',
  'UTTI212028',
  'UTTI212036',
  'UTTI212001',
  'UTTI212040'

];

export function validarMatricula(control:AbstractControl):
ValidationErrors|null{
  const matriculaNueva=control?.get('matricula')?.value;
  const matriculaNormalizada=matriculaNueva?.toLowerCase();
  console.log(matriculaNormalizada);
  for (let i = 0; i < matriculasRegistradas.length; i++) {
    //if (i < matriculasRegistradas.length) {
      const matriculaRegistrada = matriculasRegistradas[i]?.toLowerCase().trim();
      if (matriculaNormalizada === matriculaRegistrada) {
        control.get('matricula')?.setErrors({'errorMatricula': true });
        break; //salir del ciclo
      }
    //}
  }
  return(null)
}

//PRACTICA
//Valida solo un numero de 10 digitos
export function validarPhone(control:AbstractControl):
ValidationErrors|null{
  const phone=control?.get('phone')?.value;
  const numPhone=phone.length;
  if(numPhone !== 10){
    console.log('Solo 10 digitos')
    control.get('phone')?.setErrors({'errorPhone':true})
  }return (null)
}
//validar serie de producto
export function serieProducto(control: AbstractControl):
ValidationErrors | null {
  const serie= control?.get('serie')?.value;
  //const regex = /^ULT\d{7}$/;
  const regex = /^[a-zA-Z0-9]{7}ULT$/;
  if (!regex.test(serie)) {
    control.get('serie')?.setErrors({'errorSerie':true});
  }
  return null;
}
