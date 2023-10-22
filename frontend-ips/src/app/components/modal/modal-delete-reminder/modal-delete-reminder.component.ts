import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-delete-reminder',
  templateUrl: './modal-delete-reminder.component.html',
  styleUrls: ['./modal-delete-reminder.component.scss']
})
export class ModalDeleteReminderComponent {
  deleteDialogVisible = false;

  showDeleteDialog(){
    this.deleteDialogVisible = true;
  }

  closeDeleteDialog(){
    this.deleteDialogVisible = false;

  }
}
