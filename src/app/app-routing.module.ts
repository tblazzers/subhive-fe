import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { OverviewComponent } from './fragments/overview/overview.component';
import { CustomersComponent } from './fragments/customers/customers.component';
import { NewPlanComponent } from './fragments/new-plan/new-plan.component';
import { ProductsComponent } from './fragments/products/products.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "overview", component: OverviewComponent },
      { path: "customers", component: CustomersComponent },
      { path: "new-plan", component: NewPlanComponent },
      { path: "product", component: ProductsComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "onboarding", component: OnboardingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
