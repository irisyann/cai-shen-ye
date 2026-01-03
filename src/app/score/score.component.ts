import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { dialogs } from '../dialogs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{
  @Input() points: number | undefined;
  @Output() resetPage = new EventEmitter();

  message = '';
  scorePercentage = 0;
  maxPoints = 0;
  displayLoader = true;

  ngOnInit() {
    setTimeout(() => {
      this.displayLoader = false;
    }, 3000);

    // For each dialog page, take the highest points value among its options (default 0) and sum them.
    this.maxPoints = dialogs.reduce((sum, page) => {
      const options = (page as any).options || [];
      const maxForPage = options.reduce((m: number, o: any) => Math.max(m, o.points || 0), 0);
      return sum + maxForPage;
    }, 0);

    // Messages based on performance. Use dynamic maxPoints for perfect score.
    const pts = this.points || 0;
    if (this.maxPoints > 0 && pts >= this.maxPoints) {
      this.message = `👏👏👏 Cai Shen Ye is impressed! You are well-prepared for CNY! Gong Xi Fa Cai! 🧧`;
    } else if (pts === 0) {
      this.message = `🫣 Better dont step out of the house this year, you are not ready for the world yet.`;
    } else {
      this.message = `👍 Ok la, but you need more practice. You can do it!`;
    }

    // Guard against division by zero and clamp percentage between 0 and 100.
    if (this.maxPoints > 0) {
      const raw = (pts / this.maxPoints) * 100;
      this.scorePercentage = Math.round(Math.max(0, Math.min(100, raw)));
    } else {
      this.scorePercentage = 0;
    }
  }
}
