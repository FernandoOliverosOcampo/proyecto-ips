import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteReminderComponent } from './modal-delete-reminder.component';

describe('ModalDeleteReminderComponent', () => {
  let component: ModalDeleteReminderComponent;
  let fixture: ComponentFixture<ModalDeleteReminderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeleteReminderComponent]
    });
    fixture = TestBed.createComponent(ModalDeleteReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
