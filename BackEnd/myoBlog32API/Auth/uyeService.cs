using myoBlog32API.Models;
using myoBlog32API.ViewModel;
using System.Linq;

namespace myoBlog32API.Auth
{
    public class uyeService
    {
        DB01Entities1 db = new DB01Entities1();
        public UyeModel UyeOturumAc(string kadi, string parola)
        {
            UyeModel uye = db.Uye.Where(s => s.KullaniciAdi == kadi && s.Sifre == parola).Select(x => new UyeModel()
            {
                UyeId = x.UyeId,
                AdSoyad = x.AdSoyad,
                KullaniciAdi = x.KullaniciAdi,
                Email = x.Email,
                Sifre = x.Sifre,
                Foto = x.Foto,
                UyeAdmin = x.UyeAdmin

            }).SingleOrDefault();
            return uye;
        }
    }
}
