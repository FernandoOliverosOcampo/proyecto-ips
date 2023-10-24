import { Component, OnInit } from '@angular/core';

interface Disease {
  disease: string;
  code: string;
}
interface Medication{
  medication: string;
  code: string
}

@Component({
  selector: 'app-modal-reminder',
  templateUrl: './modal-reminder.component.html',
  styleUrls: ['./modal-reminder.component.scss'],
})
export class ModalReminderComponent implements OnInit {
  startDate: Date | undefined;
  reminderDialogVisible = false;
  selectedDisease: Disease | undefined;
  selectedMedication: Disease | undefined;
  selectedCategories: any[] = [];
  diseases: Disease[] = [];
  medications: Medication[] = [];

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

  constructor() {}

  ngOnInit() {
    this.loadDiseases();
    this.loadMedications();
  }

  showReminderDialog() {
    this.reminderDialogVisible = true;
  }

  closeReminderDialog() {
    this.reminderDialogVisible = false;
  }

  private loadDiseases() {
    this.diseases = [
      { disease: 'Acetaminofen', code: 'ACE' },
      { disease: 'Atamel', code: 'ATA' },
      { disease: 'Ibuprofeno', code: 'IBU' },
      { disease: 'Dolex', code: 'DOL' },
      { disease: 'Quetafina', code: 'QUE' }
    ];
  }

  private loadMedications() {
    this.medications = [
      { medication: 'Acetaminofen', code: 'ACE' },
      { medication: 'Atamel', code: 'ATA' },
      { medication: 'Ibuprofeno', code: 'IBU' },
      { medication: 'Dolex', code: 'DOL' },
      { medication: 'Quetafina', code: 'QUE' }
    ];
  }
}
