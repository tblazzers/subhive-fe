import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss']
})
export class ProductSelectComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.products$ = this.apiService.getAccountProducts();
  }

  products$: Observable<Product[]> | null = null;

  selectedProduct: string = 'all';

  setActiveProduct(event: any) {
    this.apiService.setActiveProductId(this.selectedProduct);
  }
}
