import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['Custom form control', Validators.required],
      summary: [{ value: 'Create custom form control using ControlValueAccessor', disabled: false }]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
  }

}
