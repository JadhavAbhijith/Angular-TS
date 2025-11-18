import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactServiceComponent } from './contact-service.component';

describe('ContactServiceComponent', () => {
  let component: ContactServiceComponent;
  let fixture: ComponentFixture<ContactServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
