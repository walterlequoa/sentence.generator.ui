import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
import { TokenService } from 'src/app/Services/token/token.service';
import { ErrorResponse } from 'src/app/Interface/ErrorResponse';
import { LoginCredentials } from 'src/app/Interface/LoginCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginRequest: LoginCredentials = {
    username: "",
    password: ""
  };

  isLoggedIn = false;
  isLoginFailed = false;
  error: ErrorResponse = { error: '', errorCode: 0 };
  constructor(private userService: UserService, private tokenService: TokenService, private router: Router) { }
  ngOnInit(): void {
    let isLoggedIn = this.tokenService.isLoggedIn();
    console.log(`isLoggedIn: ${isLoggedIn}`);
    if (isLoggedIn) {
      this.isLoggedIn = true;
 
      this.router.navigate(['sentences']);
    }
  }

  onSubmit(): void {
    this.userService.login(this.loginRequest).subscribe({
      next: (data => {
        console.debug(`logged in successfully ${data}`);
        this.tokenService.saveSession(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.reloadPage();
      }),
      error: ((error: ErrorResponse) => {
        this.error = error;
        this.isLoggedIn = false;
        this.isLoginFailed = true;
      })
 
    });
  }
  
  reloadPage(): void {
    window.location.reload();
  }

}
