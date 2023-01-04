import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhuongXaReq } from 'src/app/commons/phuong-xa';
import { QuanHuyen } from 'src/app/commons/quan-huyen';
import { PhuongXaService } from 'src/app/services/phuong-xa.service';
import { QuanHuyenService } from 'src/app/services/quan-huyen.service';

@Component({
  selector: 'app-them-phuong-xa',
  templateUrl: './them-phuong-xa.component.html',
  styleUrls: ['./them-phuong-xa.component.css']
})
export class ThemPhuongXaComponent {
  errorMessage: Error = new Error;
  listQuanHuyen!: QuanHuyen[];
  idQuanHuyen!: number;
  newPhuongXa: PhuongXaReq = new PhuongXaReq;
  phuongXaForm!: FormGroup;

  constructor(private phuongXaService: PhuongXaService, private quanHuyenService: QuanHuyenService, private router: Router) { }

  ngOnInit(): void {
    this.getAllQuanHuyen();
    this.newPhuongXa.moTa = "None";
    this.phuongXaForm = new FormGroup({
      'ten': new FormControl('', Validators.required),
      'moTa': new FormControl(''),
      'idQuanHuyen': new FormControl('', Validators.required),
    });
  }

  onAddPhuongXa() {
    if (this.phuongXaForm.invalid) {
      this.phuongXaForm.markAllAsTouched(); 
      return;
    }
    console.log(this.newPhuongXa);
    this.phuongXaService.createPhuongXa(this.newPhuongXa).subscribe(data => {
      this.router.navigate(['phuong-xa']);
      console.log(this.newPhuongXa);
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  getAllQuanHuyen(){
    this.quanHuyenService.getAllQuanHuyen().subscribe(data => {
      this.listQuanHuyen = data;
      console.log(this.listQuanHuyen);
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  changeQuanHuyen(e: any) {
    this.newPhuongXa.idQuanHuyen = e.target.value;
  }
}
