import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/shared/interfaces/user-i';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private authEndpoints = environment.api.baseUrl + environment.api.endpoints.register;
  constructor(private http: HttpClient) { }

  public register(userData: UserI): Observable<UserI> {
    return this.http.post<UserI>(this.authEndpoints, userData);
  }
}
