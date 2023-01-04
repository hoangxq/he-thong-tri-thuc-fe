import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CanHoRes } from 'src/app/commons/can-ho';
import { CanHoService } from 'src/app/services/can-ho.service';

@Component({
  selector: 'app-list-can-ho',
  templateUrl: './list-can-ho.component.html',
  styleUrls: ['./list-can-ho.component.css']
})
export class ListCanHoComponent {
  errorMessage: Error = new Error;
  listCanHo!: CanHoRes[];
  canHoForm!: FormGroup;

  constructor(private CanHoService: CanHoService) { }

  ngOnInit(): void {
    this.getAllCanHoDaXuLy();
  }

  getAllCanHoDaXuLy() {
    this.CanHoService.getAllCanHoDaXuLy().subscribe(data => {
      this.listCanHo = data;
      console.log(this.listCanHo);
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }
}
