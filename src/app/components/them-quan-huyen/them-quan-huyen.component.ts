import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuanHuyen } from 'src/app/commons/quan-huyen';
import { QuanHuyenService } from 'src/app/services/quan-huyen.service';

@Component({
  selector: 'app-them-quan-huyen',
  templateUrl: './them-quan-huyen.component.html',
  styleUrls: ['./them-quan-huyen.component.css']
})
export class ThemQuanHuyenComponent {

  errorMessage : Error = new Error;
  newQuanHuyen: QuanHuyen = new QuanHuyen;

  quanHuyenForm!: FormGroup; 
  
  constructor(private quanHuyenService: QuanHuyenService, private router: Router) { }

  ngOnInit(): void {
    this.newQuanHuyen.moTa = "None";
    this.quanHuyenForm = new FormGroup({
      'ten': new FormControl('',Validators.required),
      'moTa': new FormControl(''),
    });
  }

  onAddQuanHuyen(){
    if(this.quanHuyenForm.invalid){
      this.quanHuyenForm.markAllAsTouched(); // hien thi loi 
      return ; // neu ko hop le thi ko thuc hien gi nua
    }
    this.quanHuyenService.createQuanHuyen(this.newQuanHuyen).subscribe(data => {
      this.router.navigate(['quan-huyen']);
      console.log(this.newQuanHuyen);
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }
}
