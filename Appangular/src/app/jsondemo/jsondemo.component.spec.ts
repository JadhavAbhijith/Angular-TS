import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONDemoComponent } from './jsondemo.component';

describe('JSONDemoComponent', () => {
  let component: JSONDemoComponent;
  let fixture: ComponentFixture<JSONDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JSONDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JSONDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
