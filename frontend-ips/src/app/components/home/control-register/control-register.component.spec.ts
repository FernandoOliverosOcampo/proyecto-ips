import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRegisterComponent } from './control-register.component';

describe('ControlRegisterComponent', () => {
  let component: ControlRegisterComponent;
  let fixture: ComponentFixture<ControlRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlRegisterComponent]
    });
    fixture = TestBed.createComponent(ControlRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
