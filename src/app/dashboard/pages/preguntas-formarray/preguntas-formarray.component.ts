import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-preguntas-formarray',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  templateUrl: './preguntas-formarray.component.html',
  styleUrl:'./preguntas-formarray.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PreguntasFormarrayComponent {
  examForm !: FormGroup;
  private fb = inject(FormBuilder);

  constructor(){
    this.examForm=this.fb.group({
      examQuestions:this.fb.array([])
    });

    const examNewForm = this.fb.group({
      pregunta:['En que Aldea vivia Naruto',[Validators.required]],
      respuesta:['Aldea de la Hoja',[Validators.required]]
    });
    this.examQuestions.push(examNewForm)
  }
  question:FormControl=new FormControl('',[Validators.required, Validators.minLength(10)]);
  answer:FormControl=new FormControl('',[Validators.required]);

  get examQuestions(){
    return this.examForm.controls["examQuestions"] as FormArray;
  }

  addQuestion(){
    if(this.question.invalid || this.answer.invalid){
      this.question.markAsTouched();
      this.answer.markAsTouched();
      return;
    }
    const nuevaPregunta = this.question.value;
    const nuevaRespuesta = this.answer.value;

    const examNewForm = this.fb.group({
      pregunta:[nuevaPregunta,[Validators.required]],
      respuesta:[nuevaRespuesta,[Validators.required]],
    });
    this.examQuestions.push(examNewForm);
    this.question.reset()
    this.answer.reset()
  }

  onDelete(index:number){
    this.examQuestions.removeAt(index);
  }

  validateCreator(input:FormControl){
    return !!input?.errors && input?.touched;
  }

  getFieldErrors(field:FormControl){
    if(!field) return null;
    const erros = field.errors||{};
    for(const key of Object.keys(erros)){
      switch(key){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return 'Minimo 10 caracteres'
      }
    }
    return null;
  }

  invalidArrayControl(FormArray:FormArray,index:number){
    let data = this.examQuestions.controls[index] as FormGroup;
    return !!data.controls['respuesta']?.errors;
  }

  onSubmit(){
    if(this.examForm.invalid) return null;
    console.log(this.examForm.value());
    return null;
  }



 }
