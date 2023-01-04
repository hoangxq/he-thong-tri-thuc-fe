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
  selector: 'app-dinh-gia-can-ho',
  templateUrl: './dinh-gia-can-ho.component.html',
  styleUrls: ['./dinh-gia-can-ho.component.css']
})
export class DinhGiaCanHoComponent {
  errorMessage: Error = new Error;
  listQuanHuyen!: QuanHuyen[];
  listPhuongXa!: PhuongXa[];
  listHuong!: Huong[];
  checkQuanHuyen!: number;
  newCanHo: CanHoReq = new CanHoReq;
  canHoDinhGia: CanHoRes = new CanHoRes;
  canHoForm!: FormGroup;

  constructor(private canHoService: CanHoService, private phuongXaService: PhuongXaService, private quanHuyenService: QuanHuyenService, private huongService: HuongService, private router: Router) { }

  ngOnInit(): void {
    this.canHoDinhGia.phuongXaRes = new PhuongXa;
    this.canHoDinhGia.phuongXaRes.quanHuyen = new QuanHuyen;
    this.checkQuanHuyen = 0;
    this.getAllQuanHuyen();
    this.getAllHuong();
    this.canHoForm = new FormGroup({
      'dienTich': new FormControl('', Validators.required),
      'huong': new FormControl(''),
      'idPhuongXa': new FormControl('', Validators.required),
      'soPhongNgu': new FormControl('', Validators.required),
      'soPhongWc': new FormControl('', Validators.required),
    });
  }

  onDinhGiaCanHo() {
    if (this.canHoForm.invalid) {
      this.canHoForm.markAllAsTouched();
      return;
    }
    this.canHoService.dinhGiaCanHo(this.newCanHo).subscribe(data => {
      this.canHoDinhGia = data;
      console.log(this.canHoDinhGia);
      // this.router.navigate(['can-ho-dang-xu-ly']);
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
      this.checkQuanHuyen = 1;
      this.getPhuongXaByIdQuanHuyen(idQuanHuyen);
    } else this.checkQuanHuyen = 0;
  }

  changePhuongXa(e: any) {
    this.newCanHo.idPhuongXa = e.target.value;
  }

  changeHuong(e: any) {
    this.newCanHo.huong = e.target.value;
  }
}
