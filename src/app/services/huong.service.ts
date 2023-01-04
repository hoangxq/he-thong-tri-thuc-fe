import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Huong } from '../commons/huong';

@Injectable({
  providedIn: 'root'
})
export class HuongService {
  private baseURL = "http://localhost:8081/kbs/api/huong";
  constructor(private httpClient:HttpClient) { }

  getAllHuong():Observable<Huong[]>{
    return this.httpClient.get<Huong[]>(`${this.baseURL}`);
  }

}
