import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/Interface/UserDetails';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupRequest: UserDetails = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
  onSubmit(signupForm: any): void {
    console.log(JSON.stringify(signupForm));

    this.userService.signup(this.signupRequest).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        alert('Error');
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
