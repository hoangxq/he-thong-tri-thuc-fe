import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { ListCanHoComponent } from './components/list-can-ho/list-can-ho.component';
import { ListQuanHuyenComponent } from './components/list-quan-huyen/list-quan-huyen.component';
import { ListPhuongXaComponent } from './components/list-phuong-xa/list-phuong-xa.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemQuanHuyenComponent } from './components/them-quan-huyen/them-quan-huyen.component';
import { ThemPhuongXaComponent } from './components/them-phuong-xa/them-phuong-xa.component';
import { ListCanHoDangXuLyComponent } from './components/list-can-ho-dang-xu-ly/list-can-ho-dang-xu-ly.component';
import { DinhGiaCanHoComponent } from './components/dinh-gia-can-ho/dinh-gia-can-ho.component';
import { CommonModule } from '@angular/common';
import { ThemMoiCanHoComponent } from './components/them-moi-can-ho/them-moi-can-ho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CapNhatCanHoComponent } from './components/cap-nhat-can-ho/cap-nhat-can-ho.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    ListCanHoComponent,
    ListQuanHuyenComponent,
    ListPhuongXaComponent,
    ThemQuanHuyenComponent,
    ThemPhuongXaComponent,
    ListCanHoDangXuLyComponent,
    DinhGiaCanHoComponent,
    ThemMoiCanHoComponent,
    CapNhatCanHoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
