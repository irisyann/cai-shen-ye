import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-alert',
  templateUrl: './result-alert.component.html',
  styleUrl: './result-alert.component.css'
})
export class ResultAlertComponent {
  @Input() result: string | undefined;
}
