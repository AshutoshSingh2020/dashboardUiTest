import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  constructor(
    private fb: FormBuilder,
  ) { validator: this.ConfirmedValidator('password', 'confirm_password') }

  password = true;
  confrimPassword = true;
  ngOnInit(): void { }

  customerAddForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')]],
    last_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    date_of_birth: ['', [Validators.required]],
    gender_id: ['', [Validators.required]],
    mobilePhone: ["", [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]{10}$")]],
    newPassword: ['', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]],
    confrimPassword: ['', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]]
  });

  gender: any = [
    { id: 'M', name: 'Male' },
    { id: 'F', name: 'Female' },
    { id: 'uni', name: 'Unisex' }
  ]

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  createUser() {
    console.log(this.customerAddForm.value)
  }
}
