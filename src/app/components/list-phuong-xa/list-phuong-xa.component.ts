import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PhuongXa } from 'src/app/commons/phuong-xa';
import { PhuongXaService } from 'src/app/services/phuong-xa.service';

@Component({
  selector: 'app-list-phuong-xa',
  templateUrl: './list-phuong-xa.component.html',
  styleUrls: ['./list-phuong-xa.component.css']
})
export class ListPhuongXaComponent implements AfterViewInit{
  errorMessage: Error = new Error;
  listPhuongXa!: PhuongXa[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllPhuongXa();
  }

  displayedColumns: string[] = ['id', 'ten', 'quanHuyen', 'moTa', 'action'];
  dataSource = new MatTableDataSource<PhuongXa>();


  constructor(private phuongXaService: PhuongXaService) { }

  getAllPhuongXa() {
    this.phuongXaService.getAllPhuongXa().subscribe(data => {
      this.listPhuongXa = data;
      this.dataSource.data = data;
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }
}
