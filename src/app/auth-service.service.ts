import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private apiUrl = 'http://localhost:8088/api/v1/auth';

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  refreshToken(): Observable<string> {
    const refreshToken = localStorage.getItem('refresh_token');
    return this.http.post<string>(`${this.apiUrl}/refresh-token`, { refreshToken });
  }
}
