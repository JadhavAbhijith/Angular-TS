import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesDemoService {

  contactList:any=[]
  GetContact()
  {
    this.contactList=[{'ContactId':1, 'contactname':'ABC', 'contactno':1234567890},
                      {'ContactId':2, 'contactname':'PQR', 'contactno':5467286469},
                      {'ContactId':3, 'contactname':'STU', 'contactno':2749365473},
                      {'ContactId':4, 'contactname':'XYZ', 'contactno':6362859645},
                      {'ContactId':5, 'contactname':'MNO', 'contactno':8787544759}
    ]

    return this.contactList;
  }
}
