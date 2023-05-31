import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  productForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  })

  constructor(private dialogRef: MatDialogRef<NewProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService) {}

  submitProduct() {
    this.apiService.createAccountProduct({
      name: this.productForm.value.name || "",
      description: this.productForm.value.description || ""
    }, () => {
      this.data.submitFn();
    });
    
    //this.dialogRef.close();
    return false;
  }
}
