import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  constructor(private apiService: ApiService, private router: Router) {}

  onSumbitLogin() {
    this.apiService.loginUser({
      email: this.loginForm.value.email || "",
      password: this.loginForm.value.password || ""
    }, () => {
      this.router.navigate(["/dashboard"]);
    })
  }
}
