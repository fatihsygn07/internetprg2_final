using System;

namespace myoBlog32API.ViewModel
{
    public class SoruModel
    {
        public int SoruId { get; set; }
        public string Baslik { get; set; }
        public string Icerik { get; set; }
        public DateTime Tarih { get; set; }
        public int KategoriId { get; set; }
        public string KategoriAdi { get; set; }
        public int UyeId { get; set; }
        public string UyeKadi { get; set; }

    }
}
