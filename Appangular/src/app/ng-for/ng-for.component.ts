import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  student = [{"Name": 'Anirudh', "Rollno": 101, "Marks": 85},
             {"Name": 'Sahil', "Rollno": 102, "Marks": 78},
             {"Name": 'Rohith', "Rollno": 103, "Marks": 65},
             {"Name": 'Swayam', "Rollno": 104, "Marks": 83},
             {"Name": 'Tejas', "Rollno": 105, "Marks": 91} 
            ]
}
