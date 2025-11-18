import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {

  s1:any|undefined
  Submit(n:any)
  {
    this.s1=n.toUpperCase()
  }
}
