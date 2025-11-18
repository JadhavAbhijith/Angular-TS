import { Component, OnInit } from '@angular/core';
import { ServicesDemoService } from '../services-demo.service';

@Component({
  selector: 'app-contact-service',
  standalone: true,
  imports: [],
  templateUrl: './contact-service.component.html',
  styleUrl: './contact-service.component.css',
  providers:[ServicesDemoService]
})
 
export class ContactServiceComponent implements OnInit {

  condata:any=[]

  constructor(public d:ServicesDemoService){}

  ngOnInit():void {
    this.condata = this.d.GetContact()
  }

}
