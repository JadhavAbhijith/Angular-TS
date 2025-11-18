import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-mainapp',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './mainapp.component.html',
  styleUrl: './mainapp.component.css'
})
export class MainappComponent {

}
