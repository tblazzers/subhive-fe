import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Plan } from 'src/app/models/plan';
import { ApiService } from 'src/app/services/api/api.service';
import { NewPlanComponent } from '../../modals/new-plan/new-plan.component';
import { NewProductComponent } from 'src/app/modals/new-product/new-product.component';
import { Product } from 'src/app/models/product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  plans: Plan[];
  isFilter: boolean = false;
  products: {id: number, name: string }[] = [];
  displayedColumns: string[] = ["name", "billing_frequency", "billing_cycle", "price"];

  filterFormGroup = new FormGroup({
    filter: new FormControl("")
  })

  constructor(public dialog: MatDialog, private apiService: ApiService) {
    this.plans = [];
  }

  ngOnInit() {
    this.fetchPlans();
    this.fetchProducts();
  }

  filterPlan() {
    this.fetchPlans(this.filterFormGroup.value.filter || "");
    this.isFilter = true;
  }

  private fetchPlans(productId: string = "") {
    this.apiService.getAccountProductPlans(productId).subscribe((plans: any)=> {
      this.plans = plans;
    });
  }

  private fetchProducts() {
    this.apiService.getAccountProducts().subscribe((products: any) => {
      this.products = products.map((x: Product)=> ({ id: x.id, name: x.name }));
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NewPlanComponent, {
      width: '700px',
      height: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        submitFn: () => {
    
            this.dialog.closeAll();
            this.fetchPlans();
        }
      }
    });
  }


}
