import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorInterceptor } from './shared/interceptors/http-interceptor.interceptor';
import { PlansComponent } from './fragments/plans/plans.component';
import { HeaderComponent } from './core/header/header.component';
import { SettingsComponent } from './fragments/settings/settings.component';
import { IntegrationsComponent } from './fragments/integrations/integrations.component';
import { KeyIntegrationComponent } from './modals/key-integration/key-integration.component';
import { PlanListComponent } from './modals/plan-list/plan-list.component';

import * as echarts from 'echarts';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { ProductComponent } from './fragments/product/product.component';
import { RetrySettingsComponent } from './fragments/retry-settings/retry-settings.component';
import { TemplateEditorComponent } from './modals/template-editor/template-editor.component';
import { EmailEditorModule } from 'angular-email-editor';
import { ProductSelectComponent } from './core/product-select/product-select.component';


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
    HeaderComponent,
    SettingsComponent,
    IntegrationsComponent,
    KeyIntegrationComponent,
    PlanListComponent,
    ProductComponent,
    RetrySettingsComponent,
    TemplateEditorComponent,
    ProductSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    EmailEditorModule,
    MatFormFieldModule,
    MatTabsModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
