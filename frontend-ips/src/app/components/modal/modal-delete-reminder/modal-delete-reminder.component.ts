import { Component, OnInit } from '@angular/core';

interface Disease {
  disease: string;
  code: string;
}

@Component({
  selector: 'app-modal-delete-reminder',
  templateUrl: './modal-delete-reminder.component.html',
  styleUrls: ['./modal-delete-reminder.component.scss']
})
export class ModalDeleteReminderComponent implements OnInit{
  deleteDialogVisible = false;

  showDeleteDialog(){
    this.deleteDialogVisible = true;
  }

  closeDeleteDialog(){
    this.deleteDialogVisible = false;

  }

  diseases: Disease[] | undefined;

    selectedDisease: Disease | undefined;

    ngOnInit() {
        this.diseases = [
            { disease: 'Dolor de cabeza', code: 'DOL' },
            { disease: 'Malestar general', code: 'MAL' },
            { disease: 'Vomitos', code: 'VOM' },
            { disease: 'Diarrea', code: 'DIA' },
            { disease: 'Cancer', code: 'CAN' }
        ];
    }
}
