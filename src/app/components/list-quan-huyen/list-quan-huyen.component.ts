import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { QuanHuyen } from 'src/app/commons/quan-huyen';
import { QuanHuyenService } from 'src/app/services/quan-huyen.service';

@Component({
  selector: 'app-list-quan-huyen',
  templateUrl: './list-quan-huyen.component.html',
  styleUrls: ['./list-quan-huyen.component.css']
})
export class ListQuanHuyenComponent implements AfterViewInit{

  errorMessage: Error = new Error;
  listQuanHuyen!: QuanHuyen[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllQuanHuyen();
  }

  displayedColumns: string[] = ['id', 'ten', 'moTa', 'action'];
  dataSource = new MatTableDataSource<QuanHuyen>();


  constructor(private quanHuyenService: QuanHuyenService) { }

  getAllQuanHuyen() {
    this.quanHuyenService.getAllQuanHuyen().subscribe(data => {
      this.listQuanHuyen = data;
      this.dataSource.data = data;
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }
}
