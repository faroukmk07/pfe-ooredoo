import { Component } from '@angular/core';
import { AuthenticationRequest } from "../../services/models/authentication-request";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/services/authentication.service";
import { TokenService } from "../../services/token/token.service";
import { RegistrationRequest } from "../../services/models/registration-request";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  authRequest: AuthenticationRequest = { email: '', password: '' };
  registerRequest: RegistrationRequest = { email: '', firstname: '', lastname: '', password: '' };
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {}

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }

  register() {
    this.errorMsg = [];
    console.log(this.registerRequest);
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activate-account']);
      },
      error: (err) => {
        this.errorMsg = err.error.validationErrors;
      }
    });
  }
}
