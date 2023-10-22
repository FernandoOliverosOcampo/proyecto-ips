import { Component, OnInit } from '@angular/core';

interface Disease {
  disease: string;
  code: string;
}

@Component({
  selector: 'app-modal-reminder',
  templateUrl: './modal-reminder.component.html',
  styleUrls: ['./modal-reminder.component.scss']
})
export class ModalReminderComponent implements OnInit{
  reminderDialogVisible = false;

  showReminderDialog(){
    this.reminderDialogVisible = true;
  }

  closeReminderDialog(){
    this.reminderDialogVisible = false;
  }

  diseases: Disease[] | undefined;

    selectedDisease: Disease | undefined;

    ngOnInit() {
        this.diseases = [
            { disease: 'Acetaminofen', code: 'ACE' },
            { disease: 'Atamel', code: 'ATA' },
            { disease: 'Ibuprofeno', code: 'IBU' },
            { disease: 'Dolex', code: 'DOL' },
            { disease: 'Quetafina', code: 'QUE' }
        ];
    }
}

