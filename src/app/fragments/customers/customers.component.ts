import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from 'src/app/models/subscriber';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  
  constructor(private apiService: ApiService) {
    this.activeProductId = this.apiService.activeProductId;
  }

  subscribers : Subscriber[] = [];

  activeProductId: Observable<string>;
  

  displayedColumns: string[] = ['email', 'full_name', 'plan', 'product'];

  ngOnInit() {
    this.fetchSubscribers();
  }

  fetchSubscribers() {
    this.activeProductId.subscribe(val=> {
      this.apiService.fetchAccountSubscribers(val).subscribe((subsccribers: any)=> {
        this.subscribers = subsccribers;
      })
    })
   
  }
}
