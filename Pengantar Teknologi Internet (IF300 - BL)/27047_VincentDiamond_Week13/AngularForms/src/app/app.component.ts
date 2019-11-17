import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  dataForm: FormGroup; //deklarasi form group
  submitted = false;
  check = false;
  tab = 1;

  constructor(private formBuilder: FormBuilder) { } // parameter constructor ini akan digunakan untuk get

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lame: ['', Validators.required],
      nimm: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', [Validators.required]]
    }, {validator: this.checkPasswords});
  }
  checkPasswords(fg: FormGroup) {
    const pass = fg.controls.password.value;
    const cpass = fg.controls.cpassword.value;
    const control = fg.controls.password;
    const matchcontrol = fg.controls.cpassword;
    if (pass===cpass) {
      matchcontrol.setErrors(null);
      return true;
    } else {
      matchcontrol.setErrors({mustMatch: true});
      return false;
    }
  }
  get f() {
    return this.dataForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.dataForm.invalid) {
      alert('Input data error');
      return;
    } else {
      alert('Data has been set');
      localStorage.setItem('fname', this.f.fname.value);
    }
  }
}
