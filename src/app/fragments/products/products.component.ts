import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProductComponent } from 'src/app/modals/new-product/new-product.component';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NewProductComponent, {
      width: '400px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
