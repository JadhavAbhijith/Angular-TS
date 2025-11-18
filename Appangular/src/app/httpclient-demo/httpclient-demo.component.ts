import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-httpclient-demo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `<h1>User List</h1>
              <ul><li *ngFor="let user of users">{{user.name}}  ({{user.email}})</li>
              </ul>
            `,
  styleUrl: './httpclient-demo.component.css',
  providers:[UserService]
})



export class HTTPClientDemoComponent implements OnInit{

  users: User[] = [];

  constructor(private userService: UserService) {}


  ngOnInit(): void {
      this.userService.getUsers().subscribe
      (
        (data: User[]) => {
          this.users = data;
        },

      );
  }

}

export class User
{
  name: string|undefined
  email: string|undefined
}
