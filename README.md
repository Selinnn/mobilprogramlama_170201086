
## Şikayet Var-İonic Tabanlı Mobil Uygulaması Şikayetlerim Modülü <img src="https://raw.githubusercontent.com/2019-BLM441/app-180201130/master/logo.png" width="100" height="100" /> 

<img src="https://raw.githubusercontent.com/2019-BLM441/module-180201130/master/assets/img/logo-html5.png" width="30" height="30" /> --    <img src="https://raw.githubusercontent.com/2019-BLM441/module-180201130/master/assets/img/logo-angular.png" width="30" height="30" /> --   <img src="https://raw.githubusercontent.com/2019-BLM441/module-180201130/master/assets/img/logo-ionic.png" width="30" height="30" /> -- <img src="https://raw.githubusercontent.com/2019-BLM441/module-180201130/master/assets/img/logo-nodejs.png" width="30" height="30" /> -- <img src="https://raw.githubusercontent.com/2019-BLM441/module-180201130/master/assets/img/logo-javascript.png" width="30" height="30" />

#
### Modül Sahibi

| İsim Soyisim | Numara | Email |
| ------ | ------ | ------ |
| Selin Kaplan | 170201086 | kaplanselinn@gmail.com |


#

**Şikayet Var!**
 uygulaması belediyeler gibi küçük nüfuslu yerleşim yerlerine özel kullanıcıların çevrelerindeki herhangi bir olumsuz durum yada şikayetlerini herkese açık bir şekilde paylaşıp ileti atabildiği bir ionic tabanlı mobil uygulamadır.Uygulama aynı zamanda bulut tabanlı ve local tabanlı veritabanı içerir.


**Açıklama**
Bu uygulama <abbr title="Mobil uygulamalar için HTML5 bazında hazırlanmış açık kaynak bir yazılım iskeleti">IONIC</abbr> tabanlı açık kaynak bir mobil projedir. Kocaeli Üniversitesi Bilgisayar Mühendisliği 4. sınıf mobil programlama dersi için geliştirilmektedir. Modül şikayetlerim sayfasıyla başlar.Şikayet oluşturabilir, düzenleyebilirsiniz ayrıca çekilen fotoğrafa efekt verebilirsiniz.Kişisel listenizde resmi kurumların bilgileri tutabilir yada kurumlara ait notlar alabilirsiniz bunlar üzeründe düzenlemeler yapabilirsiniz.Yardımcı menüde merak ettiğiniz resmi işlemler ile ilgili bilgi alabilirsiniz(örn:İkametgah,Doğalgaz vs...). Geliştiriciyi ara butonu ile telefondan direk arama yapabilirsiniz.Bilgi düzenle kısmından bilgilerinizi düzenlebilirsiniz.Atılan tüm şikayetleri listeleyebilirsiniz.Şikayetlerinizi görebilir yada kaydedebilirsiniz.Uygulama sadece firebase'e bağlı değildir. Derste işlenen http modülünüde aktif şekilde kullanabilmek için uploadcore web sitesi üzerinden httpModül kullanılarak fotoğraf ekleme ve işlemleri yapılmıştır.Bu işlem için uploadcore web servisi oluşturulmuştur.

#
![](https://img.shields.io/static/v1?label=Version&message=1.0&color=<COLOR>) ![](https://img.shields.io/static/v1?label=ionic&message=5.3.4&color=<COLOR>) ![](https://img.shields.io/github/license/2019-BLM441/module-180201130) ![](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2F2019-BLM441%2Fmodule-180201130)
#

## FAVORİLERİM MODÜLÜ

#### ->Bu modül [Şikayet Var](https://github.com/2019-BLM441/app-180201130) uygulamasının bir modülüdür.Uygulamanın Favorilerim bölümü bu modül sayesinde çalışmaktadır.

##### Favorilerim Modülünün Sunduğu Özellikler

--> Kullanıcı bu modül ile dilediği şikayeti favorilerine ekleyebilir.
--> Favoriler arasında kategori sistemini kullanarak favori şikayetlerini kategorilendirebilir.
--> İstediği zaman favorideki şikayeti silebilir.
--> Favorileri arasında arama yapabilir.


	
### Kurulum

Şikayet Var [Node.js](https://nodejs.org/) ihtiyaç duyar.

Konsol ekranını açın

```sh
$ npm install -g ionic
$ npm install @angular/cli
$ cd sikayetvar
$ ionic serve
```

Gerekli kütüphaneler

```sh

$ ionic cordova plugin add cordova-sqlite-storage
$ ionic cordova plugin add cordova-plugin-firebase
$ ionic cordova plugin add cordova-plugin-camera
$ ionic cordova plugin add cordova-plugin-advanced-http
```
