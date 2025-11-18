import { Component } from '@angular/core';
import { CustomPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-customized-pipe',
  standalone: true,
  imports: [CustomPipePipe],
  templateUrl: './customized-pipe.component.html',
  styleUrl: './customized-pipe.component.css'
})
export class CustomizedPipeComponent {

}
