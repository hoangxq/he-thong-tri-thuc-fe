import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhuongXa, PhuongXaReq } from '../commons/phuong-xa';

@Injectable({
  providedIn: 'root'
})
export class PhuongXaService {
  private baseURL = "http://localhost:8081/kbs/api";
  constructor(private httpClient:HttpClient) { }

  createPhuongXa(phuongXaReq: PhuongXaReq):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/phuong-xa`, phuongXaReq);
  }

  getAllPhuongXa():Observable<PhuongXa[]>{
    return this.httpClient.get<PhuongXa[]>(`${this.baseURL}/phuong-xa`);
  }

  getPhuongXaByQuanHuyen(idQuanHuyen: number):Observable<PhuongXa[]>{
    return this.httpClient.get<PhuongXa[]>(`${this.baseURL}/phuong-xa/quan-huyen/${idQuanHuyen}`);
  }

}
