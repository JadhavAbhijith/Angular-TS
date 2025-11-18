import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structure-directive.component.html',
  styleUrl: './structure-directive.component.css'
})
export class StructureDirectiveComponent {

  //Check number is odd or even take user input
  st:boolean|undefined

 
  EvenOdd(s1:any)
  {
    if(parseInt(s1)%2==0)
    {
      this.st=true
    }
    else
    {
      this.st=false
    }
  }
  
//Check year is leap year or not using user input
  ly:boolean|undefined

   Leap(y2:any)
   {
      if(parseInt(y2)%4 == 0 && parseInt(y2)%100 != 0 || parseInt(y2)% 400 == 0)
      {
        this.ly = true
      }
      else 
      {
        this.ly = false
      }
   }
}

