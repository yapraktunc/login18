var a=3;
const kullaniciAdi = ["erol", "yaprak", "gamze","ayse"];
const kullaniciSifre = [1234, 0000, 4321,2222];
function kullanici(){
    var message;
    var kulad= document.getElementById('kullaniciad').value;
    var kulsifre = document.getElementById('sifre').value;
    if(a>0){
        for (let i = 0; i < kullaniciAdi.length; i++) {
             if (kulad == kullaniciAdi[i]&& kulsifre == kullaniciSifre[i]){
                message= "Hoşgeldiniz "+kullaniciAdi[i].toUpperCase()+" ";
                const time = new Date().getHours();
                    var timemessage;
                    if(time < 10) {
                        timemessage ="Günaydın";
                    } else if (time < 20) {
                        timemessage ="İyi Günler";
                    }else {
                        timemessage = "İyi Akşamlar"
                    }
                    document.getElementById('result').innerHTML=message + timemessage;

                  return;
            } 
            else{
                message="kullanıcı adı ve şifre doğru değil kalan deneme hakkınız " + a;
                document.getElementById('result').innerHTML=message ;
                
                
            }

        }

    }
    else{
        message="3 defa yanlış kullanıcı adı şifre girdiniz.";
        document.getElementById('result').innerHTML=message ;
        document.getElementById('kullaniciad').disabled = true;
        document.getElementById('sifre').disabled = true;
        document.getElementById('girisButon').disabled = true;
    }
}
















/*
var a=3;
function kullanici(){
    var message;
    var kulad= document.getElementById('kullaniciad').value;
    var kulsifre = document.getElementById('sifre').value;
    if(a>0){
        if ((kulad == "erol" && kulsifre == 1234) || (kulad == "gamze" && kulsifre == 4321) || (kulad == "yaprak" && kulsifre == 0000) ){
            message= "Hoşgeldiniz ";
            const time = new Date().getHours();
                var timemessage;
                if(time < 10) {
                    timemessage ="Günaydın";
                } else if (time < 20) {
                    timemessage ="İyi Günler";
                }else {
                    timemessage = "İyi Akşamlar"
                }
                document.getElementById('result').innerHTML=message + timemessage;
        } else{
            message="kullanıcı adı ve şifre doğru değil kalan deneme hakkınız " + a;
            document.getElementById('result').innerHTML=message ;
            a=a-1;
        }
    }
    else{
        message="3 defa yanlış kullanıcı adı şifre girdiniz.";
        document.getElementById('result').innerHTML=message ;
        document.getElementById('kullaniciad').disabled = true;
        document.getElementById('sifre').disabled = true;
        document.getElementById('girisButon').disabled = true;
    }
}
*/