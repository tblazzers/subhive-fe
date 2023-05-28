import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Registration } from "../../models/registration";
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = environment.apiUrl;

  constructor(private httpService: HttpClient, private localStorageService: LocalStorageService) {

  }

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
}
