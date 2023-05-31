import { Component } from '@angular/core';
import { Subscriber } from 'src/app/models/subscriber';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  
  constructor(private apiService: ApiService) {}

  subscribers : Subscriber[] = [];
  

  displayedColumns: string[] = ['email', 'full_name', 'plan', 'product'];

  fetchSubscribers() {
    this.apiService.getAccountProducts().subscribe((subsccribers: any)=> {
      this.subscribers = subsccribers;
    })
  }
}
