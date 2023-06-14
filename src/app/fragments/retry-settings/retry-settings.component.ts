import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TemplateEditorComponent } from 'src/app/modals/template-editor/template-editor.component';

@Component({
  selector: 'app-retry-settings',
  templateUrl: './retry-settings.component.html',
  styleUrls: ['./retry-settings.component.scss']
})
export class RetrySettingsComponent {
  retrySettingsForm = new FormGroup({
    paySuccessTemplate: new FormControl("", Validators.required),
    payFailTemplate: new FormControl("", Validators.required),
    firstRetryDays: new FormControl(0, Validators.required),
    firstRetryTemplate: new FormControl("", Validators.required),
    secondRetryDays: new FormControl(0, Validators.required),
    secondRetryTemplate: new FormControl("", Validators.required),
    thirdRetryDays: new FormControl(0, Validators.required),
    thirdRetryTemplate: new FormControl("", Validators.required),
    finalSetting: new FormControl("", Validators.required)
  })

  constructor(private dialog: MatDialog) {}

  openTemplateEditorDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(TemplateEditorComponent, {
      width: '1300px',
      height: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        submitFn: () => {         
          this.dialog.closeAll();
        }
      }
    });
  }
}
