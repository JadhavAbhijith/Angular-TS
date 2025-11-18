import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jsondemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jsondemo.component.html',
  styleUrl: './jsondemo.component.css'
})
export class JSONDemoComponent {

  r:number|undefined
  n:string|undefined
  e:number|undefined
  m:number|undefined
  s:number|undefined
  t:number|undefined
  p:number|undefined
  res:string|undefined

  stud:any=[]

  st:any|undefined


  AddStud(s1:any,s2:any,s3:any,s4:any,s5:any)
  {
    this.r = s1
    this.n = s2
    this.e = s3
    this.m = s4
    this.s = s5
    this.st = {'rno':this.r, 'name':this.n, 'eng':this.e, 'math':this.m, 'sci':this.s, 'tot':this.t, 'per':this.p, 'res':this.res}
    this.stud.push(this.st)
  }


  TotalM(s3:any, s4:any, s5:any)
  {
    this.t = parseInt(s3)+parseInt(s4)+parseInt(s5)
  }




  Percent(s3:any, s4:any, s5:any)
  {
    this.p = ((parseInt(s3)+parseInt(s4)+parseInt(s5))/3)
  }



  Result(s3:any, s4:any, s5:any)
  {
    if(parseInt(s3)+parseInt(s4)+parseInt(s5) < 35)
    {
      this.res = "Fail"
    }
    else
    {
      this.res = "Pass"
    }
  }
}
