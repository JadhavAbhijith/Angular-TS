import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style-demo.component.html',
  styleUrl: './ng-style-demo.component.css'
})
export class NgStyleDemoComponent implements OnInit {

  str:string = "Welcome to Seed Infotech!!!"

  col:string|undefined
  sz:number|undefined
  bgcol:string|undefined

  ngOnInit():void {
    this.col = "red"
    this.sz = 25
    this.bgcol = "yellowgreen"
  }

}
