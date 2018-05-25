import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantService } from './constant.service'
@Injectable()
export class CurdService {
  headers: HttpHeaders
  constructor(private http: HttpClient, private constService: ConstantService) { }

  public get(api: string) {
    let token = localStorage.getItem('token');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.http.get(this.constService.API_ENDPOINT + api, {
      headers: this.headers
    })
  }

  public put(api: string, id: string, data: any) {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    console.log('Data in header', headers);
    return this.http.put(this.constService.API_ENDPOINT + api + '/' + id, data, {
      headers: headers
    });
  }

  public getOne(api: string, id: string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.http.get(this.constService.API_ENDPOINT + api + '/' + id, {
      headers: headers
    });
  }

}
