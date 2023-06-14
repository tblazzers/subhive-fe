import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Registration } from "../../models/registration";
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Login } from 'src/app/models/login';
import { Account, AccountProfile } from 'src/app/models/account';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { shareReplay } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Plan } from 'src/app/models/plan';
import { Gateway } from 'src/app/models/gateway';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = environment.apiUrl;

  constructor(
    private httpService: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {

  }

  readonly accountProfile$ = this.fetchAccountProfile().pipe(shareReplay(1));

  private aProductId: BehaviorSubject<string> = new BehaviorSubject<string>('all');

  get activeProductId() {
    return this.aProductId.asObservable();
  }

  setActiveProductId(productId: string) {
    this.aProductId.next(productId);
  }

  // private aProductId: string = 'all';

  // get activeProductId() {
  //   return this.aProductId;
  // }

  // setActiveProductId(productId: string) {
  //   this.aProductId = productId;
  // }

  registerUser(registerUser: Registration, cb: () => void = () => {}) {
    const registerUrl = "register"
    this.httpService.post(`${this.BASE_URL}${registerUrl}`, {
      user: {
        first_name: registerUser.firstName,
        last_name: registerUser.lastName,
        email: registerUser.email,
        password: registerUser.password
      }
    }).subscribe((response: any) => {
      this.localStorageService.saveAuthToken(response.token);
      cb();
    })
  }

  loginUser(loginUser: Login, cb: () => void = () => {}) {
    const loginUrl = "login"
    this.httpService.post(`${this.BASE_URL}${loginUrl}`, loginUser).subscribe((response: any) => {
      this.localStorageService.saveAuthToken(response.token);
      cb();
    })
  }

  fetchAccountProfile() {
    const profileUrl = "accounts/profile";
    return this.httpService.get<AccountProfile>(`${this.BASE_URL}${profileUrl}`);
  }

  setupAccountDetails(account: Partial<Account>, cb: () => void = () => {}) {
    const accountSetupUrl = "accounts";
    this.httpService.post(`${this.BASE_URL}${accountSetupUrl}`, { account: account }).subscribe((response: any) => {
      cb();
    })
  }

  createAccountProduct(product: Partial<Product>, cb: () => void = () => {}) {
    const productsUrl = "products";
    this.httpService.post(`${this.BASE_URL}${productsUrl}`, { product: product }).subscribe((Response: any) => {
      cb();
    })
  }

  getAccountProducts() {
    const productsUrl = "products";
    return this.httpService.get<Product[]>(`${this.BASE_URL}${productsUrl}`);
  }

  createProductPlan(plan: Plan, cb: () => void = () => {}) {
    const productPlanUrl = "product_plans";
    this.httpService.post(`${this.BASE_URL}${productPlanUrl}`, {plan: plan}).subscribe((response: any) => {
      cb();
    })
  }


  getAccountProductPlans(productId: string = "") {
    let productPlanUrl = "product_plans";
    if (productId) {
      productPlanUrl = `product_plans?product_id=${productId}`;
    }
    return this.httpService.get(`${this.BASE_URL}${productPlanUrl}`);
  }

  fetchAccountSubscribers(productId: string) {
    let subscribersUrl = "subscriptions";
    return this.httpService.get(`${this.BASE_URL}${subscribersUrl}?product_id=${productId}`);
  }

  getPaymentGateway() {
    const getwayUrl = "gateways";
    return this.httpService.get<Gateway[]>(`${this.BASE_URL}${getwayUrl}`);
  }

  createAccountEmailTemplate(name: string, content: object) {

  }
  // getUserProfile() {
    
  //   if (this.accountProfile) {
  //     return this.accountProfile.user;
  //   }
  //   const profileUrl = "accounts/profile";
  //   this.httpService.get<AccountProfile>(`${this.BASE_URL}${profileUrl}`).subscribe((response: AccountProfile) => {
  //     console.log(response);
  //     this.accountProfile = response;
  //   },
  //   (err) => {
  //     console.log(err.status);
  //     this.handleError(err);
  //   })
  // }

  private handleError(error: any) {
    if (error.status == 401) {
      this.localStorageService.clearAuthToken();
      this.router.navigate(["/login"]);
    }
  }
}
