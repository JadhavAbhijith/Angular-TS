import { CommonModule, DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {

  title = 'app works!';
  jd = new Date(1990, 4, 15);
  a:number = 0.259;
  b:number = 12.3495;
  num1:number = 2.5;
  num2:number = 0.5;
}
