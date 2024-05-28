import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import ReactiveFormsComponent from '../reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-dinamic-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dinamic-form.component.html',
  styleUrl: './dinamic-form.component.css'
})
export default class DinamicFormComponent {

  private fb= inject(FormBuilder)

  formPlaylist:FormGroup=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    songs:this.fb.array([
      ['Daylight',Validators.required],
      ['Ready for It?',Validators.required],
      ['Lover',Validators.required],
      ['Style',Validators.required]
    ])
  })

  public newSong:FormControl=new FormControl('',Validators.required);


  get favoriteSongs(){
     return this.formPlaylist.get('songs') as FormArray
  }

  addSong(){
    console.log(this.newSong);

    if(this.newSong.invalid)return;

    const newSong=this.newSong.value;

    this.favoriteSongs.push(
      this.fb.control(newSong,Validators.required)
    );//este agrega la nueva cancion a la lista

    this.newSong.reset()
  }

  isValidControl(control:string){
    return this.formPlaylist.controls[control].errors && this.formPlaylist.controls[control].touched
  }

  isValidInArray(formarray:FormArray,index:number){
    return formarray.controls[index].errors && this.formPlaylist.controls[index].touched
  }

  onDeleteSong(index:number){
   this.favoriteSongs.removeAt(index);
  }

  getFieldError(field:string){
    if(!this.formPlaylist.controls[field]) return null;
    const errors=this.formPlaylist.controls[field].errors||{}; //obtiene el objeto de errores
    for(const key of Object.keys(errors)){//key hace referencia a cada una de las propiedades
      switch(key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return 'Minimo 3 caracateres';
      }
    }
    return null; //cuando no hay nada
  }

  savePlaylist(){
  }

}
