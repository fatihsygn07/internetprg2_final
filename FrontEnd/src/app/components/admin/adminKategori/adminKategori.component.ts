import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Kategori } from 'src/app/models/Kategori';
import { Sonuc } from 'src/app/models/Sonuc';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-adminKategori',
  templateUrl: './adminKategori.component.html',
  styleUrls: ['./adminKategori.component.css']
})
export class adminKategoriComponent implements OnInit {
  kategoriler: Kategori[];
  dataSource: any;
  displayedColumns:['KategoriAdi','KatSoruSay','detay']

  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;
  constructor(
    public alert: AlertService,
    public matDialog: MatDialog,
    public apiServis: ApiService
  ) { }

  ngOnInit() {
    this.KategoriListe();
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

  KategoriListe(){
    this.apiServis.KategoriListe().subscribe((d:any)=>{
      this.kategoriler = d;
      this.dataSource = new MatTableDataSource(d);
    })
  }

}

