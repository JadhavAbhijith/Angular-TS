import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // res:number = 0
  // Addition(s1:any, s2:any)
  // {
  //   this.res=parseInt(s1)+parseInt(s2)  //parseInt converts String to integer data type; user Input's data is by default = String
  // }


  // a:number = 0
  // b:number = 0
  // c:number = 0
  // d:number = 0
  // e:number = 0
  // AllOpr(s1:any, s2:any)
  // {
  //   this.a=parseInt(s1)+parseInt(s2)
  //   this.b=parseInt(s1)-parseInt(s2)
  //   this.c=parseInt(s1)*parseInt(s2)
  //   this.d=parseInt(s1)/parseInt(s2)
  //   this.e=parseInt(s1)%parseInt(s2)
  // }

  add:number=0
  sub: number=0;
  mul:number=0;
  div:number=0;
  mod:number=0;

 Allop(a: string, b: string, op: string) {
    let n1 = Number(a);
    let n2 = Number(b);

    switch(op) {
      case "add": 
        this.add = n1 + n2; 
        break;
      case "sub": 
        this.sub = n1 - n2; 
        break;
      case "mul": 
        this.mul = n1 * n2; 
        break;
      case "div": 
        this.div = n1 / n2 ; 
        break;
      case "mod": 
        this.mod= n1 % n2; 
        break;
    }
 }
}