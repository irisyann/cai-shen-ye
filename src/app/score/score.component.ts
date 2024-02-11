import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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
  displayLoader = true;

  ngOnInit() {
    setTimeout(() => {
      this.displayLoader = false;
    }, 3000);

    if (this.points === 6) {
      this.message = "👏👏👏 Cai Shen Ye is impressed! You are well-prepared for CNY! Gong Xi Fa Cai! 🧧"
    } else if (this.points === 0) {
      this.message = "🫣 Better dont step out of the house this year, you are not ready for the world yet.";
    } else {
      this.message = "👍 Ok la, but you need more practice. You can do it!";
    }

    this.scorePercentage = Math.round(((this.points || 0) / 6) * 100);
  }
}
