import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-switch-demo.component.html',
  styleUrl: './ng-switch-demo.component.css'
})
export class NgSwitchDemoComponent {

  Person =[{'Pid':100, 'Pname':'ABC', 'Country':'India'},
           {'Pid':101, 'Pname':'DEF', 'Country':'Australia'},
           {'Pid':102, 'Pname':'GHI', 'Country':'Russia'},
           {'Pid':103, 'Pname':'JKL', 'Country':'South Africa'},
           {'Pid':104, 'Pname':'MNO', 'Country':'England'},
           {'Pid':105, 'Pname':'PQR', 'Country':'New Zealand'},
  ]
}
