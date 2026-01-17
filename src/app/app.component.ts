import { Component } from '@angular/core';

import { DialogOption, dialogs } from './dialogs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  FINAL_PAGE = 9;
  dialogs = [...dialogs];
  showTextTranslation = false;
  totalMoney = 0;
  roundMoney = 0;
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
      this.roundMoney = option.money || 0;
      this.totalMoney += this.roundMoney;
      this.resultPage = true;
      this.optionResult = option.result || '';
    } else {
      this.resultPage = false;
    }

    this.page = option.nextPage;
    this.currentDialog = this.dialogs.find(dialog => dialog.page === this.page);
  }

  onResetPage(): void {
    this.totalMoney = 0;
    this.roundMoney = 0;
    this.page = 0;
    this.currentDialog = this.dialogs.find(dialog => dialog.page === this.page);
    this.resultPage = false;
    this.scorePage = false;
  }
}
