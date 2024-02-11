import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dialog } from '../dialogs';

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
}
