import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanHoReq, CanHoRes } from 'src/app/commons/can-ho';
import { Huong } from 'src/app/commons/huong';
import { PhuongXa, PhuongXaReq } from 'src/app/commons/phuong-xa';
import { QuanHuyen } from 'src/app/commons/quan-huyen';
import { CanHoService } from 'src/app/services/can-ho.service';
import { HuongService } from 'src/app/services/huong.service';
import { PhuongXaService } from 'src/app/services/phuong-xa.service';
import { QuanHuyenService } from 'src/app/services/quan-huyen.service';

@Component({
  selector: 'app-cap-nhat-can-ho',
  templateUrl: './cap-nhat-can-ho.component.html',
  styleUrls: ['./cap-nhat-can-ho.component.css']
})
export class CapNhatCanHoComponent {
  errorMessage: Error = new Error;
  idCanHo!: number;
  listQuanHuyen!: QuanHuyen[];
  listPhuongXa!: PhuongXa[];
  listHuong!: Huong[];
  canHoReq: CanHoReq = new CanHoReq;
  canHoRes: CanHoRes = new CanHoRes;
  canHoForm!: FormGroup;

  constructor(private canHoService: CanHoService, private phuongXaService: PhuongXaService, private quanHuyenService: QuanHuyenService, private huongService: HuongService, private router: Router) { }

  ngOnInit(): void {
    this.idCanHo = Number(this.router.url.split('/')[2]);
    this.getCanHoById();

    this.getAllQuanHuyen();
    this.getAllHuong();
    this.canHoForm = new FormGroup({
      'dienTich': new FormControl('', Validators.required),
      'soPhongNgu': new FormControl('', Validators.required),
      'soPhongWc': new FormControl('', Validators.required),
      'giaTien': new FormControl('', Validators.required),
    });
  }

  onCapNhatCanHo() {
    if (this.canHoForm.invalid) {
      this.canHoForm.markAllAsTouched();
      return;
    }
    this.canHoService.capNhatCanHo(this.idCanHo, this.canHoReq).subscribe(data => {
      this.canHoRes = data;
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  getAllQuanHuyen() {
    this.quanHuyenService.getAllQuanHuyen().subscribe(data => {
      this.listQuanHuyen = data;
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  getCanHoById() {
    this.canHoService.getCanHoById(this.idCanHo).subscribe(data => {
      this.canHoRes = data;
      this.getPhuongXaByIdQuanHuyen(this.canHoRes.phuongXaRes.quanHuyen.id);
      this.mapCanHo();
      console.log(this.canHoRes);
      console.log(this.canHoReq);
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  getAllHuong() {
    this.huongService.getAllHuong().subscribe(data => {
      this.listHuong = data;
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  getPhuongXaByIdQuanHuyen(idQuanHuyen: number) {
    this.phuongXaService.getPhuongXaByQuanHuyen(idQuanHuyen).subscribe(data => {
      this.listPhuongXa = data;
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  changeQuanHuyen(e: any) {
    let idQuanHuyen = e.target.value;
    if (idQuanHuyen != "") {
      this.getPhuongXaByIdQuanHuyen(idQuanHuyen);
    }
  }

  changePhuongXa(e: any) {
    this.canHoReq.idPhuongXa = e.target.value;
  }

  changeHuong(e: any) {
    this.canHoReq.huong = e.target.value;
  }

  changeTrangThai(e: any){
    this.canHoReq.trangThai = e.target.value;
  }

  mapCanHo(){
    this.canHoReq.dienTich = this.canHoRes.dienTich;
    this.canHoReq.giaTien = this.canHoRes.giaTien;
    this.canHoReq.huong = this.canHoRes.huong;
    this.canHoReq.soPhongNgu = this.canHoRes.soPhongNgu;
    this.canHoReq.soPhongWc = this.canHoRes.soPhongWc;
    this.canHoReq.trangThai = this.canHoRes.trangThai;
    this.canHoReq.idPhuongXa = this.canHoRes.phuongXaRes.id;
  }
}
