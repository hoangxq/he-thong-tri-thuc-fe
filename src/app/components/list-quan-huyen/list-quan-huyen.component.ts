import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { QuanHuyen } from 'src/app/commons/quan-huyen';
import { QuanHuyenService } from 'src/app/services/quan-huyen.service';

@Component({
  selector: 'app-list-quan-huyen',
  templateUrl: './list-quan-huyen.component.html',
  styleUrls: ['./list-quan-huyen.component.css']
})
export class ListQuanHuyenComponent {

  errorMessage : Error = new Error;
  listQuanHuyen!: QuanHuyen[];
  quanHuyenForm!: FormGroup; 
  
  constructor(private quanHuyenService: QuanHuyenService) { }

  ngOnInit(): void {
    this.getAllQuanHuyen();
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

}
