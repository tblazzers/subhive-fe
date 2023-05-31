import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProductComponent } from 'src/app/modals/new-product/new-product.component';
import { Product } from 'src/app/models/product';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[];
  displayedColumns: string[] = ['name', 'description'];

  constructor(public dialog: MatDialog, private apiService: ApiService) {
    this.products = [];
  }

  ngOnInit() {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.apiService.getAccountProducts().subscribe((products: any)=> {
      this.products = products;
    })
  }
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NewProductComponent, {
      width: '400px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        submitFn: () => {         
          this.dialog.closeAll();
          this.fetchProducts();
        }
      }
    });
  }
}
