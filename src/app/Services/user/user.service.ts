import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginCredentials } from '../../Interface/LoginCredentials';
import { TokenResponse } from '../../Interface/TokenResponse';
import { UserDetails } from '../../Interface/UserDetails';
import { RefreshTokenRequest } from 'src/app/Interface/TokenRequest';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(loginRequest: LoginCredentials): Observable<TokenResponse> {
    return this.httpClient.post<TokenResponse>(`${environment.apiUrl}Users/login`, loginRequest);
  }

  signup(SignupRequest: UserDetails) {
    return this.httpClient.post(`${environment.apiUrl}Users/signup`, SignupRequest, { responseType: 'text'}); 
  }

  refreshToken(session: RefreshTokenRequest) {
    let refreshTokenRequest: any = {
      UserId: session.userId,
      RefreshToken: session.refreshToken
    };
    return this.httpClient.post<TokenResponse>(`${environment.apiUrl}Users/refresh_token`, refreshTokenRequest);
  }

  logout() {
    return this.httpClient.post(`${environment.apiUrl}Users/logout`, null);
  }
}
