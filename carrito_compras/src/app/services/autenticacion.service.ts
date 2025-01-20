import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { response } from 'express';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private http = inject(HttpClient);
  private url: string = environment.API_URL;
  private tokenKey = 'authToken'
  private router!: Router;

    login(user: string, password: string): Observable<any>{
      const body = new URLSearchParams();
      body.set('username', user);
      body.set('password', password);
      const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
      return this.http.post<any>(`${this.url}/auth/login`, body.toString(), { headers }).pipe(
        tap(response => {
          if(response.token){
            this.setToken(response.token)
          }
        })
      );
    }

    private setToken(token: string): void {
      localStorage.setItem(this.tokenKey, token)
    }

    private getToken(): string | null {
      if(typeof window !== 'undefined'){
        return localStorage.getItem(this.tokenKey);
      }
      else{
        return null;
      }
      
    }

    isAuthenticated(): boolean {
      const token = this.getToken();
      if(!token){
        return false;
      }

      const payload = JSON.parse(atob(token.split('.')[1]));
      const issuedAt = payload.iat * 1000;
      const tokenDuration = 24 * 60 * 60 * 1000;
      const expiration = issuedAt + tokenDuration;

      return Date.now() < expiration;
    }

    logout(): void{
      localStorage.removeItem(this.tokenKey);
      this.router.navigate(['/login']);
    }

}
