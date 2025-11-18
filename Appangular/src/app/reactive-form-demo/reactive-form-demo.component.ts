import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-demo.component.html',
  styleUrl: './reactive-form-demo.component.css'
})
export class ReactiveFormDemoComponent {

      loginForm:any;


      constructor() { }

      ngOnInit():void {
        this.loginForm = new FormGroup({
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
      }


      onSubmit():void {
        if (this.loginForm.valid)
        {
          console.log("Form Submitted!", this.loginForm.value);
          //Here you would typically send the data to backend service
        }
        else
        {
          console.log("Form is Invalid");
        }
      }


      get email()
      {
        return this.loginForm.get('email');
      }


      get password()
      {
        return this.loginForm.get('password');
      }
}
