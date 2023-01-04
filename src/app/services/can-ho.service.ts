import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhuongXa, PhuongXaReq } from '../commons/phuong-xa';
import { CanHoReq, CanHoRes } from '../commons/can-ho';

@Injectable({
  providedIn: 'root'
})
export class CanHoService {
  private baseURL = "http://localhost:8081/kbs/api";
  constructor(private httpClient:HttpClient) { }

  dinhGiaCanHo(canHoReq: CanHoReq):Observable<any>{
    return this.httpClient.post(`${this.baseURL}/can-ho/dinh-gia`, canHoReq);
  }

  themMoiCanHo(canHoReq: CanHoReq):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/can-ho/them-moi`, canHoReq);
  }

  getAllCanHoDaXuLy():Observable<CanHoRes[]>{
    return this.httpClient.get<CanHoRes[]>(`${this.baseURL}/can-ho/da-xu-ly`);
  }

  getAllCanHoDangXuLy():Observable<CanHoRes[]>{
    return this.httpClient.get<CanHoRes[]>(`${this.baseURL}/can-ho/dang-xu-ly`);
  }

}
