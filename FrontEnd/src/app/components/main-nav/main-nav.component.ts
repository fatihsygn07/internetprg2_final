import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';
import { Kategori } from 'src/app/models/Kategori';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  kadi:string;
  kategoriler:Kategori[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public apiservice:ApiService) {}
  ngOnInit(): void {
    this.KategoriListele();
    if (this.apiservice.oturumKontrol){
      this.kadi = localStorage.getItem("kadi")
    }
  }

  OturumuKapat(){
    localStorage.clear();
    location.href = "/";
  }

  KategoriListele(){
    this.apiservice.KategoriListe().subscribe((d:any) => {
      this.kategoriler = d;
    })
  }

}
