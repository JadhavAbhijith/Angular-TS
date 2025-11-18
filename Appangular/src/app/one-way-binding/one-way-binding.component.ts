import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.css'
})
export class OneWayBindingComponent {

  flag = true;
  website = {
    name: 'TechnoSolutions',
    url: 'www.google.com',
    logo: 'favicon.ico',
    description: 'This website is used for searching data'
  };
}
