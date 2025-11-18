import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-demo.component.html',
  styleUrl: './two-way-demo.component.css'
})
export class TwoWayDemoComponent {

  str:string|undefined
}
