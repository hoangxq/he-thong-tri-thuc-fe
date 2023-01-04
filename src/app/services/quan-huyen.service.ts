import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuanHuyen } from '../commons/quan-huyen';

@Injectable({
  providedIn: 'root'
})
export class QuanHuyenService {
  private baseURL = "http://localhost:8081/kbs/api";
  constructor(private httpClient:HttpClient) { }

  createQuanHuyen(quanHuyen: QuanHuyen):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/quan-huyen`, quanHuyen);
  }

  getAllQuanHuyen():Observable<QuanHuyen[]>{
    return this.httpClient.get<QuanHuyen[]>(`${this.baseURL}/quan-huyen`);
  }

}
