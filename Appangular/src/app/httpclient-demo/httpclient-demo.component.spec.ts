import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPClientDemoComponent } from './httpclient-demo.component';

describe('HTTPClientDemoComponent', () => {
  let component: HTTPClientDemoComponent;
  let fixture: ComponentFixture<HTTPClientDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HTTPClientDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HTTPClientDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
