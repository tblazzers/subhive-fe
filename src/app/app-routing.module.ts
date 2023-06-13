import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { OverviewComponent } from './fragments/overview/overview.component';
import { CustomersComponent } from './fragments/customers/customers.component';
import { NewPlanComponent } from './modals/new-plan/new-plan.component';
import { ProductsComponent } from './fragments/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';
import { LoggedInGuardGuard } from './shared/guards/logged-in-guard.guard';
import { PlansComponent } from './fragments/plans/plans.component';
import { SettingsComponent } from './fragments/settings/settings.component';
import { ProductComponent } from './fragments/product/product.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "", component: OverviewComponent },
      { path: "overview", component: OverviewComponent },
      { path: "customers", component: CustomersComponent },
      { path: "plans", component: PlansComponent },
      { path: "products", component: ProductsComponent },
      { path: "products/:id", component: ProductComponent },
      { path: "settings", component: SettingsComponent }
    ],
    canActivate: [AuthGuardGuard]
  },
  { path: "login", component: LoginComponent, canActivate: [LoggedInGuardGuard] },
  { path: "register", component: RegisterComponent },

  { path: "onboarding", component: OnboardingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
