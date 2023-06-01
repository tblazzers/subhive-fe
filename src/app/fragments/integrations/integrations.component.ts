import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { KeyIntegrationComponent } from 'src/app/modals/key-integration/key-integration.component';
import { NewProductComponent } from 'src/app/modals/new-product/new-product.component';
import { Gateway } from 'src/app/models/gateway';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent {
  gateways: Gateway[] = [];

  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPaymentGateway().subscribe((response) => {
      this.gateways = response;
    })
  }

  openIntegrationDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(KeyIntegrationComponent, {
      width: '400px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        submitFn: () => {         
          // this.dialog.closeAll();
        }
      }
    });
  }
}
