import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormBuilder,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')!.value === g.get('passwordConfirm')!.value
      ? null
      : { mismatch: true };
  }

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        passwordConfirm: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
      },
      { validators: this.passwordMatchValidator as null | ValidatorFn }
    );
  }

  onRegister() {
    console.log(this.registerForm);
  }
}
