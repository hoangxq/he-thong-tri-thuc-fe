import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PhuongXa } from 'src/app/commons/phuong-xa';
import { PhuongXaService } from 'src/app/services/phuong-xa.service';

@Component({
  selector: 'app-list-phuong-xa',
  templateUrl: './list-phuong-xa.component.html',
  styleUrls: ['./list-phuong-xa.component.css']
})
export class ListPhuongXaComponent {
  errorMessage: Error = new Error;
  listPhuongXa!: PhuongXa[];
  phuongXaForm!: FormGroup;

  constructor(private phuongXaService: PhuongXaService) { }

  ngOnInit(): void {
    this.getAllPhuongXa();
  }

  getAllPhuongXa() {
    this.phuongXaService.getAllPhuongXa().subscribe(data => {
      this.listPhuongXa = data;
      console.log(this.listPhuongXa);
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }
}
