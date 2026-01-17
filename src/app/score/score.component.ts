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
  isPerfectScore = false;

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
    const percentage = this.maxMoney > 0 ? (this.totalMoney / this.maxMoney) * 100 : 0;
    this.isPerfectScore = this.totalMoney >= this.maxMoney;

    if (this.isPerfectScore) {
      this.message = `PEAK 👏 BEHAVIOUR 👏 99.999% Chinese DNA verified 🏅`;
    } else if (percentage >= 80) {
      this.message = `PEAK 👏 BEHAVIOUR 👏 99.999% Chinese DNA verified 🏅`;
    } else if (percentage >= 60) {
      this.message = `IMPRESSIVE! Your aunties and uncles wish their children are more like you 🫵🏽`;
    } else if (percentage >= 40) {
      this.message = `Not bad 👍 You can survive CNY with your dignity intact.`;
    } else if (percentage >= 30) {
      this.message = `Ok la 😐 Your relatives are not impressed but at least you got some $$$ out of it.`;
    } else if (percentage >= 10) {
      this.message = `ABSOLUTE SKILL ISSUE👎🏽`;
    } else {
      this.message = `Please don't leave your house this CNY ❌`;
    }
  }
}
