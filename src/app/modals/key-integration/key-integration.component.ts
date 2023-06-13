import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { ApiService } from 'src/app/services/api/api.service';
import { Observable } from 'rxjs';
import { AccountProfile } from 'src/app/models/account';

@Component({
  selector: 'app-key-integration',
  templateUrl: './key-integration.component.html',
  styleUrls: ['./key-integration.component.scss']
})
export class KeyIntegrationComponent {


  readonly webHookUrl: string = `${environment.apiUrl}webhooks/paystack/`;
  accountProfile$: Observable<AccountProfile>;

  keyIntegrationForm = new FormGroup({
    publicKey: new FormControl("", Validators.required),
    privateKey: new FormControl("", Validators.required)
  })

  constructor(private apiService: ApiService) {
    this.accountProfile$ = this.apiService.accountProfile$;
  }

  ngOnInit() {
    
  }
  
  submitKeyIntegration() {

  }
}
