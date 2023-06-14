import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Plan } from 'src/app/models/plan';
import { ApiService } from 'src/app/services/api/api.service';




@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  plans: Plan[];
  active_filter : string = "this_week";
  displayedColumns: string[] = ["name", "billing_frequency", "billing_cycle", "price"];

  filters = [
    { name: "This Week", key: "this_week" },
    { name: "This Month", key: "this_month" },
    { name: "3 Months", key: "3_month" },
    { name: "6 Month", key: "6_month" },
    { name: "This Year", key: "this_year" },
  ];

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
  
  chartOption: EChartsOption = {
    title: { text: "Week's Subscriptions", show: true },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [4, 0, 3, 1, 2, 0, 3],
        type: 'line',
      },
    ],
  };

  churnOption: EChartsOption = {
    title: { text: "Churn Rate", show: true },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      data: [0, 0 ,0 ,0, 0, 0],
      type: 'line'
    }]
  }

  onFilterClick(filter: string) {
    this.active_filter = filter;
  }
}
