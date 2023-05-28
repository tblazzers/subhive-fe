import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl("", [Validators.email]),
    firstName: new FormControl("", Validators.minLength(2)),
    lastName: new FormControl("", Validators.min(2)),
    password: new FormControl("", [Validators.required])
  })
  

  constructor(private apiService: ApiService) {}

  onSumbit() {
    this.apiService.registerUser({
      firstName: this.registerForm.value.firstName || "",
      lastName: this.registerForm.value.lastName || "",
      email: this.registerForm.value.email || "",
      password: this.registerForm.value.password || ""
    })
  }
}
