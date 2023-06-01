import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-key-integration',
  templateUrl: './key-integration.component.html',
  styleUrls: ['./key-integration.component.scss']
})
export class KeyIntegrationComponent {

  keyIntegrationForm = new FormGroup({
    publicKey: new FormControl("", Validators.required),
    privateKey: new FormControl("", Validators.required)
  })
  
  submitKeyIntegration() {

  }
}
