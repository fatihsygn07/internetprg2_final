import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
//import { stringify } from 'querystring';
import { Sonuc } from 'src/app/models/Sonuc';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;
  constructor(
    public alert: AlertService,
    public matDialog: MatDialog,
    public apiservis:ApiService

  ) { }


  ngOnInit() {
  }
  
  OturumAc(kadi:string,parola:string){
    this.apiservis.tokenAl(kadi,parola).subscribe((d:any)=>{

      localStorage.setItem("token", d.access_token);
      localStorage.setItem("uid", d.uyeId);
      localStorage.setItem("kadi", d.UyeKadi);
      localStorage.setItem("uyeYetkileri", d.uyeYetkileri);
      location.href="/";
      

    }, err=>{
      var s:Sonuc = new Sonuc();
      s.islem = false
      s.mesaj = 'Kullanıcı Adı veya Parola Geçersizdir'
      this.alert.AlertUygula(s);
    })
  }
}
