import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { OverviewComponent } from './fragments/overview/overview.component';
import { CustomersComponent } from './fragments/customers/customers.component';
import { NewPlanComponent } from './modals/new-plan/new-plan.component';
import { ProductsComponent } from './fragments/products/products.component';
import { NewProductComponent } from './modals/new-product/new-product.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorInterceptor } from './shared/interceptors/http-interceptor.interceptor';
import { PlansComponent } from './fragments/plans/plans.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    OnboardingComponent,
    OverviewComponent,
    CustomersComponent,
    NewPlanComponent,
    ProductsComponent,
    NewProductComponent,
    HomeComponent,
    RegisterComponent,
    PlansComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
