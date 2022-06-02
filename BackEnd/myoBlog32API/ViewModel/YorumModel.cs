using System;

namespace myoBlog32API.ViewModel
{
    public class YorumModel
    {
        public int YorumId { get; set; }
        public string YorumIcerik { get; set; }
        public int UyeId { get; set; }
        public string KullaniciAdi { get; set; }
        public int SoruId { get; set; }
        public DateTime Tarih { get; set; }
        public string SoruBaslik { get; set; }
    }
}
