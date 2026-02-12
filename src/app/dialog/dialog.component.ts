import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Dialog, DialogOption } from '../dialogs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})

export class DialogComponent {
  @Input() dialog: Dialog | undefined;
  @Input() page: number | undefined;
  @Input() showTextTranslation: boolean | undefined;
  @Output() optionSelect = new EventEmitter();

  constructor(private gaService: GoogleAnalyticsService) {}

  onOptionClick(option: DialogOption, index: number): void {
    // Track the option click in GA4
    const pageNumber = this.dialog?.page ?? this.page ?? 0;
    const eventData = {
      page: pageNumber,
      option_text: option.text,
    };

    this.gaService.gtag('event', 'dialog_option_click', eventData);

    // Emit the original event
    this.optionSelect.emit(option);
  }
}
