import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountProfile } from 'src/app/models/account';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent {

  accountProfile$: Observable<AccountProfile> | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.accountProfile$.subscribe((x: AccountProfile) => {
      console.log(x.user.last_name);
    });
    this.accountProfile$ = this.apiService.accountProfile$;
  }
  companyTypes = [
    { name: "IT", icon: "cloud" },
    { name: "E-commerce", icon: "shopping_cart" },
    { name: "Education", icon: "local_library" },
    { name: "Publishing", icon: "publish" },
    { name: "Entertainment", icon: "movie" },
    { name: "Others", icon: "queue_play_next" }
  ]

  companyForm = new FormGroup({
    companyName: new FormControl("", Validators.required),
    companyWebsite: new FormControl(""),
  })

  selectedCompanyType = "";

  selectCompanyType(companyType: string) {
    this.selectedCompanyType = companyType;
  }

  submitCompanyDetails() {
    this.apiService.setupAccountDetails({
      company_name: this.companyForm.value.companyName || "",
      website: this.companyForm.value.companyWebsite || "",
      company_sector: this.selectedCompanyType,
      company_address: ""
    },
    () => {
      this.router.navigate(["dashboard"])
    }
    );

    console.log(this.companyForm.value);

  }
}
