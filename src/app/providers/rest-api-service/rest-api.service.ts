import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestApiService {

  constructor(public http: HttpClient) {

  }

  private authorizationHeader() {
    const token = window.localStorage.getItem('token@furnover') ? window.localStorage.getItem('token@furnover') : '';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  get(url: string) {
    return this.http.get(url, { headers: this.authorizationHeader() }).toPromise();
  }

  post(url: string, Body: any) {
    return this.http.post(url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  put(url: string, Body: any) {
    return this.http.put(url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  delete(url: string) {
    return this.http.delete(url, { headers: this.authorizationHeader() }).toPromise();
  }

}
