import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Sonuc } from 'src/app/models/Sonuc';
import { Uye } from 'src/app/models/Uye';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-adminUye',
  templateUrl: './adminUye.component.html',
  styleUrls: ['./adminUye.component.css']
})
export class adminUyeComponent implements OnInit {

  Uyeler:Uye[];
  dataSource:any;
  displayedColumns:['AdSoyad','KullaniciAdi','detay',];



  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;
  constructor(
    public apiServis: ApiService,
    public alert: AlertService,
    public matDialog: MatDialog
  ) { }

  ngOnInit() {

  }

  AlertGoster(p: number) {

    var s = new Sonuc();
    if (p == 1) {
      s.islem = true;
    }
    else {
      s.islem = false;
    }
    s.mesaj = "Alert Test";

    this.alert.AlertUygula(s);
  }

  ConfirmUygulama() {

    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: "400px"
    });
    this.confirmDialogRef.componentInstance.dialogMesaj = "Kayıt Silinecektir Onaylıyor musunuz?";
    { } this.confirmDialogRef.afterClosed().subscribe(d => {
      console.log(d);
      if (d) {
        // kayıt silme rutine
        console.log("Kayıt Silindi");
      }
    });

  }
  UyeListele(){
    this.apiServis.UyeListe().subscribe((d:any)=>{
      this.Uyeler;
      this.dataSource = new MatTableDataSource(d);
    })
  }
}
