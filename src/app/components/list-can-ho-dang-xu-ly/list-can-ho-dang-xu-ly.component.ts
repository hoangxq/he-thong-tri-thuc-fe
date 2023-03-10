import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CanHoRes } from 'src/app/commons/can-ho';
import { CanHoService } from 'src/app/services/can-ho.service';

@Component({
  selector: 'app-list-can-ho-dang-xu-ly',
  templateUrl: './list-can-ho-dang-xu-ly.component.html',
  styleUrls: ['./list-can-ho-dang-xu-ly.component.css']
})
export class ListCanHoDangXuLyComponent implements AfterViewInit {

  errorMessage: Error = new Error;
  listCanHo!: CanHoRes[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllCanHoDangXuLy();
  }

  displayedColumns: string[] = ['id', 'quanHuyen', 'phuongXa', 'dienTich', 'soPhongNgu', 'soPhongWc', 'huong', 'giaBan', 'trangThai', 'action'];
  dataSource = new MatTableDataSource<CanHoRes>();


  constructor(private CanHoService: CanHoService) { }

  getAllCanHoDangXuLy() {
    this.CanHoService.getAllCanHoDangXuLy().subscribe(data => {
      this.listCanHo = data;
      this.dataSource.data = this.listCanHo;
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  onRemove(idCanHo: number) {
    this.CanHoService.removeCanHoById(idCanHo).subscribe(data => {
      this.listCanHo = this.listCanHo.filter(item => item.id !== idCanHo);
      this.dataSource.data = this.listCanHo;
      console.log(data);
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    })
  }
}
