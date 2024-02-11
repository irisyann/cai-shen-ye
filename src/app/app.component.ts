import { Component } from '@angular/core';

import { DialogOption, dialogs } from './dialogs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  FINAL_PAGE = 6;
  dialogs = [...dialogs];
  showTextTranslation = false;
  points = 0;
  optionResult = '';
  resultPage = false;
  scorePage = false; /// change
 
  page = 0; /// change
  currentDialog = this.dialogs.find(dialog => dialog.page === this.page);

  goToNextPage(): void {
    this.resultPage = false
    if (this.page === this.FINAL_PAGE) {
      this.scorePage = true;
    }  
  }

  onOptionSelect(option: DialogOption): void {
    if (this.page === 2) {
      this.showTextTranslation = true;
    }

    if (option.result) {
      this.points += option.points || 0;
      this.resultPage = true;
      this.optionResult = option.result || '';
    } else {
      this.resultPage = false;
    }

    this.page = option.nextPage;
    this.currentDialog = this.dialogs.find(dialog => dialog.page === this.page);
  }

  onResetPage(): void {
    this.points = 0;
    this.page = 0;
    this.currentDialog = this.dialogs.find(dialog => dialog.page === this.page);
    this.resultPage = false;
    this.scorePage = false;
  }
}
