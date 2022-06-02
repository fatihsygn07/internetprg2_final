import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminKategoriComponent } from './components/admin/adminKategori/adminKategori.component';
import { adminSoruComponent } from './components/admin/adminSoru/adminSoru.component';
import { adminUyeComponent } from './components/admin/adminUye/adminUye.component';
import { adminYorumComponent } from './components/admin/adminYorum/adminYorum.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', component: adminYorumComponent
  },
  {
    path: 'admin/uye', component: adminUyeComponent
  },
  {
    path: 'admin/soru', component: adminSoruComponent
  },
  {
    path: 'admin/kategori', component: adminKategoriComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
