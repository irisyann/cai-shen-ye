import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { dialogs } from '../dialogs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{
  @Input() totalMoney: number = 0;
  @Output() resetPage = new EventEmitter();

  message = '';
  maxMoney = 0;
  displayLoader = true;

  ngOnInit() {
    setTimeout(() => {
      this.displayLoader = false;
    }, 3000);

    // For each dialog page, take the highest money value among its options (default 0) and sum them.
    this.maxMoney = dialogs.reduce((sum, page) => {
      const options = (page as any).options || [];
      const maxForPage = options.reduce((m: number, o: any) => Math.max(m, o.money || 0), 0);
      return sum + maxForPage;
    }, 0);

    // Messages based on performance
    if (this.maxMoney > 0 && this.totalMoney >= this.maxMoney) {
      this.message = `PEAK 👏 BEHAVIOUR👏 Get that bread, 99.999% Chinese DNA verified.`;
    } else if (this.totalMoney === 0) {
      this.message = `TERRIBLE. ABSOLUTE SKILL ISSUE. Please don't leave your house this CNY.`;
    } else {
      this.message = `👍 Your skills are still kinda mid. Try again???`;
    }
  }
}
