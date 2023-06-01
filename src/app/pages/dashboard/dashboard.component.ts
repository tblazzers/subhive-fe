import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from 'src/app/services/api/api.service';
import { Observable } from 'rxjs';
import { AccountProfile } from 'src/app/models/account';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  accountProfile$: Observable<AccountProfile> | null = null;


  expanded = true;

  ngOnInit() {
    this.accountProfile$ = this.apiService.accountProfile$;
  }

  constructor(private observer: BreakpointObserver, private router: Router, private apiService: ApiService) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
     
      .subscribe((res: any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      // .pipe(
      //   untilDestroyed(this),
      //   filter((e) => e instanceof NavigationEnd)
      // )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });

      //this.apiService.getUserProfile();
  }
}
