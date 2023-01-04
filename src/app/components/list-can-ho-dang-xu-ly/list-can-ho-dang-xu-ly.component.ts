import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CanHoRes } from 'src/app/commons/can-ho';
import { CanHoService } from 'src/app/services/can-ho.service';

@Component({
  selector: 'app-list-can-ho-dang-xu-ly',
  templateUrl: './list-can-ho-dang-xu-ly.component.html',
  styleUrls: ['./list-can-ho-dang-xu-ly.component.css']
})
export class ListCanHoDangXuLyComponent {
  //pagination
  length!: number;
  pageSize = 5;
  pageIndex = 0;

  errorMessage: Error = new Error;
  listCanHo!: CanHoRes[];
  canHoForm!: FormGroup;

  constructor(private CanHoService: CanHoService) { }

  ngOnInit(): void {
    this.getAllCanHoDaXuLy();
    this.length = this.listCanHo?.length;
  }

  getAllCanHoDaXuLy() {
    this.CanHoService.getAllCanHoDangXuLy().subscribe(data => {
      this.listCanHo = data;
      console.log(this.listCanHo);
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  //pagination
  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
