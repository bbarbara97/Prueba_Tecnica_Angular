import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  usernameView?: string;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      const token = this.tokenStorage.getToken();
      this.usernameView = JSON.stringify(user).replace(/['"]+/g, '');

    }
  }

  onSubmit(): void {
    this.authService.login(this.form.username, this.form.password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(
          JSON.stringify(data['token']).replace(/['"]+/g, '')
        );
        this.tokenStorage.saveUser(this.form.username);


        setTimeout(() =>
          {
            this.usernameView = this.form.username;

            this.isLoginFailed = false;
            this.isLoggedIn = true;

            window.location.reload();
          },
          2000);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
