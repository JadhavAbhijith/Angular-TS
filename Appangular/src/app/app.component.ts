import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondCompComponent } from './second-comp/second-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Appangular';
}
