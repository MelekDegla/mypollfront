import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APIURL} from '../../APIURL';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  private url: APIURL;
  private header;

  public getToken(body) {

    return this.http.post('http://localhost:8000' + '/oauth/token', {
      grant_type: 'password',
      client_secret: 'OGPBMIFmyOMK3gdDsZJOVCM2u0J3X5mYJc35LILX',
      client_id: 2,
      username: body.username,
      password: body.password
    });
  }

  public getUser(authHeaders) {
     this.header = new HttpHeaders({'Authorization': authHeaders});


   return this.http.get('http://127.0.0.1:8000/api/user', {headers: this.header});
  }
}
