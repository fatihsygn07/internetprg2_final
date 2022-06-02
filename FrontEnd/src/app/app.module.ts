import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MatMenuModule} from '@angular/material/menu';
import { adminUyeComponent} from './components/admin/adminUye/adminUye.component';
import { adminKategoriComponent } from './components/admin/adminKategori/adminKategori.component';
import { adminSoruComponent } from './components/admin/adminSoru/adminSoru.component';
import { adminYorumComponent } from './components/admin/adminYorum/adminYorum.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    LoginComponent,

    //admin
    adminUyeComponent,
    adminKategoriComponent,
    adminSoruComponent,
    adminYorumComponent,

    //dialoglar
    AlertDialogComponent,
    ConfirmDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
