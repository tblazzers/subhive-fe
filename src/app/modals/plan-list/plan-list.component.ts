import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Plan } from 'src/app/models/plan';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService) {}

  plans: Plan[] = []

  ngOnInit() {
    this.apiService.getAccountProductPlans(this.data.productId).subscribe((plans: any) => {
      this.plans = plans;
      console.log(plans)
    })
  }
  
}
