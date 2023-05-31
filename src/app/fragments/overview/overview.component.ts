import { Component } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { ApiService } from 'src/app/services/api/api.service';




@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  plans: Plan[];
  displayedColumns: string[] = ["name", "billing_frequency", "billing_cycle", "price"];

  constructor(private apiService: ApiService) {
    this.plans = [];
  }

  ngOnInit() {
    this.fetchPlans();
  }

  private fetchPlans(productId: string = "") {
    this.apiService.getAccountProductPlans(productId).subscribe((plans: any)=> {
      this.plans = plans;
    });
  }
  
}
