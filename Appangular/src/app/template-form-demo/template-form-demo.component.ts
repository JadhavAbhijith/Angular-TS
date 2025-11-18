import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form-demo.component.html',
  styleUrl: './template-form-demo.component.css'
})
export class TemplateFormDemoComponent {

  user: User = {
    username: '',
    email: ''
  };

  onSubmit(form: any)
  {
    if(form.valid)
    {
      console.log("Form Submitted!", this.user);
      //You can send this user.data to a backend service here
      form.reset();  //Reset the form after submission
    }
    else
    {
      console.log('Form is Invalid');
    }
  }
}


class User
{
  username:string|undefined
  email:string|undefined

  constructor(username:string, email:string)
  {
    this.username=username
    this.email=email
  }


}
