import { Component, Inject } from '@angular/core';
import { NewProductComponent } from '../new-product/new-product.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';
import { Product } from 'src/app/models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.scss']
})
export class NewPlanComponent {
  products: {id: number, name: string }[] = [];

  planFormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    product_id: new FormControl(0, Validators.required),
    price: new FormControl(0, Validators.required),
    billing_frequency: new FormControl(0, Validators.required),
    currency: new FormControl("", Validators.required),
    billing_cycle: new FormControl("", Validators.required)
  })

  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit() {
    this.apiService.getAccountProducts().subscribe((products: any) => {
      this.products = products.map((x: Product)=> ({ id: x.id, name: x.name }));
    })
  }

  submitProductPlan() {
    this.apiService.createProductPlan({
      name: this.planFormGroup.value.name || "",
      description: this.planFormGroup.value.description || "",
      billing_cycle: this.planFormGroup.value.billing_cycle || "",
      billing_frequency: this.planFormGroup.value.billing_frequency || 0,
      price: this.planFormGroup.value.price || 0,
      currency: this.planFormGroup.value.currency || "",
      product_id: this.planFormGroup.value.product_id || 0
    }, () => {
      this.data.submitFn();
    })
    return false;
  }
  
}
