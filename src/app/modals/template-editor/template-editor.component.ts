import { Component, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.scss']
})
export class TemplateEditorComponent {
  templateName = "";
  @ViewChild(EmailEditorComponent)
  private emailEditor!: EmailEditorComponent;

  constructor(private apiService: ApiService) {}

  editorLoaded() {
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  onSave() {
    this.emailEditor.saveDesign((data) => {
      this.apiService.createAccountEmailTemplate(this.templateName, data);
    })
  }
}
