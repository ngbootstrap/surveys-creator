import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  form: FormGroup | any

  constructor (
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.setForm()
  }

  setForm() {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      questions: this.fb.array([])
    })
  }

  async create() {
    this.form.markAllAsTouched()

    if (this.form.invalid) {
      return alert('Ingresa los datos como se indica.')
    }

    alert('Encuesta creada exitosamente.')

    console.log('Data', this.form.value)

    this.setForm()
  }

  addQuestion() {
    const questions: FormArray = this.form.get('questions') as FormArray

    questions.push(this.fb.group({
      title: [null, [Validators.required]],
      type: [1, [Validators.required]],
      options: this.fb.array([])
    }))

    const question: FormGroup = questions.controls[(questions.length - 1)] as FormGroup

    question.get('type')?.valueChanges.subscribe(type => {
      const options: FormArray = question.get('options') as FormArray

      while (options.length !== 0) {
        options.removeAt(0)
      }

      switch (type) {
        case '2':
          options.push(this.fb.group({
            title: [null, [Validators.required]]
          }))

          question.get('options')?.setValidators([Validators.required])
          question.get('options')?.updateValueAndValidity()
          break

        case '3':
          options.push(this.fb.group({
            title: 1
          }))
          
          options.push(this.fb.group({
            title: 2
          }))
          
          options.push(this.fb.group({
            title: 3
          }))
          
          options.push(this.fb.group({
            title: 4
          }))
          
          options.push(this.fb.group({
            title: 5
          }))
          
          options.push(this.fb.group({
            title: 6
          }))
          
          options.push(this.fb.group({
            title: 7
          }))
          
          options.push(this.fb.group({
            title: 8
          }))
          
          options.push(this.fb.group({
            title: 9
          }))
          
          options.push(this.fb.group({
            title: 10
          }))

          question.get('options')?.setValidators([Validators.required])
          question.get('options')?.updateValueAndValidity()
          break

        case '4':
          options.push(this.fb.group({
            title: 1
          }))
          
          options.push(this.fb.group({
            title: 2
          }))
          
          options.push(this.fb.group({
            title: 3
          }))
          
          options.push(this.fb.group({
            title: 4
          }))
          
          options.push(this.fb.group({
            title: 5
          }))

          question.get('options')?.setValidators([Validators.required])
          question.get('options')?.updateValueAndValidity()
          break

        case '5':
          options.push(this.fb.group({
            title: 'Si'
          }))
          
          options.push(this.fb.group({
            title: 'No'
          }))

          question.get('options')?.setValidators([Validators.required])
          question.get('options')?.updateValueAndValidity()
          break

        default:
          question.get('options')?.clearValidators()
          question.get('options')?.updateValueAndValidity()
          break
      }
    })
  }

  removeQuestion(qI: number) {
    const questions: FormArray = this.form.get('questions') as FormArray

    questions.removeAt(qI)
  }

  addOption(qI: number) {
    const questions: FormArray = this.form.get('questions') as FormArray
    const options: FormArray = questions.controls[qI].get('options') as FormArray

    options.push(this.fb.group({
      title: [null, [Validators.required]]
    }))
  }

  removeOption(qI: number, oI: number) {
    const questions: FormArray = this.form.get('questions') as FormArray
    const options: FormArray = questions.controls[qI].get('options') as FormArray

    options.removeAt(oI)
  }

}
