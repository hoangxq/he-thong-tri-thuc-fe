import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListCanHoComponent } from './components/list-can-ho/list-can-ho.component';
import { ListPhuongXaComponent } from './components/list-phuong-xa/list-phuong-xa.component';
import { ListQuanHuyenComponent } from './components/list-quan-huyen/list-quan-huyen.component';
import { ThemPhuongXaComponent } from './components/them-phuong-xa/them-phuong-xa.component';
import { ThemQuanHuyenComponent } from './components/them-quan-huyen/them-quan-huyen.component';
import { ListCanHoDangXuLyComponent } from './components/list-can-ho-dang-xu-ly/list-can-ho-dang-xu-ly.component';
import { DinhGiaCanHoComponent } from './components/dinh-gia-can-ho/dinh-gia-can-ho.component';
import { ThemMoiCanHoComponent } from './components/them-moi-can-ho/them-moi-can-ho.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'quan-huyen', component: ListQuanHuyenComponent},
  {path: 'them-quan-huyen', component: ThemQuanHuyenComponent},
  {path: 'phuong-xa', component: ListPhuongXaComponent},
  {path: 'them-phuong-xa', component: ThemPhuongXaComponent},
  {path: 'can-ho', component: ListCanHoComponent},
  {path: 'can-ho-dang-xu-ly', component: ListCanHoDangXuLyComponent},
  {path: 'dinh-gia-can-ho', component: DinhGiaCanHoComponent},
  {path: 'them-can-ho-moi', component: ThemMoiCanHoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
