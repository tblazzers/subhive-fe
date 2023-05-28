import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  private getData(key: string) {
    return localStorage.getItem(key)
  }
  private removeData(key: string) {
    localStorage.removeItem(key);
  }

  private clearData() {
    localStorage.clear();
  }

  public saveAuthToken (value: string) {
    this.clearAuthToken();
    this.saveData("authToken", value);
  }

  public getAuthToken() {
    return localStorage.getItem("authToken")
  }

  public clearAuthToken() {
    localStorage.removeItem("authToken");
  }
}
