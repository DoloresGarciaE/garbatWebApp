import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private authEndpoints = environment.api.baseUrl + environment.api.endpoints.register;
  constructor(private http: HttpClient) { }

  public register(userData: any): Observable<any> {
    return this.http.post<any>(this.authEndpoints, userData);
  }
}
