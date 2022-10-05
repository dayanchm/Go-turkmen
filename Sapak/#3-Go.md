# <div align="center">Go Programlama Dili — Paketler</div>

Go dilinde kod guramasy paketler bilen üpjün edilýär. Paket aslynda diskdäki bukjadaky faýllary görkezýär. Go dilinde, kod-da ulanýan kitaphanalarymyzyň ikisi we esasy kodumyz paketlerdir.

## Paketlere a:t berme

- Pakete adyny tutanyňyzda, paketin öz içine alýan paketiň ady bilen birmeňzeş bolmagyna garaşylýar, ýöne talap edilmeýär.
- Paket kesgitlemesi kod sahypasynyň ýokarsyndaky <strong>package</strong> keyword’i  bilen ýerine ýetirilýär.

- Her kod yazylan wagty "package" yazgysy yazylmalydyr.

```
package sendMail

import {
…
..
..

```

- Mysal üçin, paketimizin ýerleşýän katalogy aşakdaky ýaly:

```
$GOPATH/src/foo/bar
```

Bu paketi aşakdaky ýaly kodda import edýäris.

```
import “foo/bar”
```
Bar paketini GitHub-da foo atly ammarda import etjek bolsak, ony aşakdaky ýaly import edip bileris:
github.com/nailcankucuk/foo/bar import ediň.



```
package main

import “github.com/nailcankucuk/foo/bar”

func main() {
 bar.sayHello()
}
```

<strong>(Executable) Paketler</strong>

- Executable programs must have a source code that is packaged as main and contains the main() function. The main() function can be defined once, takes no parameters, and has no return type. Our application first starts running from this main function.


```
package main

func main() {
 fmt.Println(“Naber?”)
}
```

<strong> Daşky gurşaw we elýeterlilik </strong>

- Go dilinde, beýleki dillerden öwrenişen umumy, hususy, goralýan giriş kesgitleýjileri ýok. Munuň ýerine, giriş Go-da at goýmakda birinji harp bilen kesgitlenýär.

- Görnüşiň, üýtgeýäniň, funksiýanyň .. we ş.m. baş harp bilen başlasa, paketden başga beýleki paketlerden hem girip boljakdygyny aňladýar. Şeýle-de bolsa, kiçi harp bilen başlasa, diňe şol bir bukjanyň içinde girip bolýar.

```
// Paket dışından da erişilebilir
func Foo() {}
// Sadece paket içerisinde erişilebilir.
var bar string
```
- Başga bir bukjada eksport edilmeýän meýdanlardan ybarat strukturanyň bu meýdanlaryna gönüden-göni girip we belläp bilmeris.

```
package main
import (
 “fmt”
 “github.com/nailcankucuk/userops”
)
func main() {
 user := userops.NewUser(“Nail”, “Küçük”, “12345”)
 fmt.Printf(“%+v\n”, user)
 //Beklenen çıktısı: {First:Nail Last:Küçük password:12345}
// Fakat aşağıdaki gibi direk erişmeyiz.
 fmt.Println(user.password)
 // ./main.go:17:18: user.password undefined (cannot refer to unexported field or method password)
//user.password = “new” 
 // ./main.go:18:6: user.password undefined (cannot refer to unexported field or method password)
}
```
- Iň oňat tejribe hökmünde, daşarky giriş bilen funksiýanyň gaýdyp beriş görnüşi hökmünde elýeterli däl bahany ulanmaly däl. Aazyp boljak ýalňyşlyk almarsyňyz, ýöne dogry ulanylmaz.

- Nädogry ulanmaklygyň mysaly.

```
type bar struct {}
func Foo() bar {
 return bar{}
}
```
<strong>Paket guramasy</strong>

- Ilki bilen kod ýazyp başlanyňyzda, haýsy paketleriň elýeterli bolmalydygyny anyk görmek mümkin bolmazlygy mümkin. Arhitektura döredilende köp çemeleşilip bilner. Şeýle-de bolsa, ähli ýagdaýlara uýgunlaşmak üçin iň gowy çemeleşme däl. Köp gezek, taslamanyň başynda gönüden-göni ulanylmaly gatnaşyklary we dizaýn şablonlaryny görüp bilmezligimiz mümkin. Şol sebäpli ilki bilen kod ýazmaga başlamak we kodumyz belli bir kämillik ýaşyna ýetende gaýtadan işlemek arkaly paket döretmek usuly bolup biler. Elbetde, paketler döredilende üns bermeli käbir nokatlarymyza üns bermeli däldiris.
 
- Bu nokatlaryň iň möhümi, Go tegelek (aýlaw) paket importyna rugsat bermeýär. Bolýar:

- A paket B paketini import edýän bolsa, B paket A paketini import etmeli däldir.

- Ora-da, A paket B paketini, B paketini C paketini, C paketini bolsa A paketini import edýän bolsa, aýlaw gutaransoň tegelek bukjany import ederis.

- Kodumyzy modul esasynda paketlere bölmek hem usul hökmünde saýlanyp bilner. Şeýle-de bolsa, munuň ýetmezçiligi, tegelek salgylanma üçin henizem elýeterlidir. Mysal hökmünde, ulanyjyny we bölüm modullaryny aýyrmagy göz öňünde tutalyň.

```
demo/
└── users
│ ├── user.go
└── department
 └── department.go
```
-Kodu ilk yazarken bu iki paket arasında karşılıklı import etme durumu olmasa bile ilerleyen aşamalarında user paketi içerisinde department paketini, department paketi içerisinde de user paketini kullanma ihtiyacı duymak mümkün olabilir bir durum olarak gözüküyor. Bu nedenle modül bazında ayrım yapmak da çok doğru gözükmemektedir.

- Maslahat berilýän bukjany bölmek usullarynyň biri hökmünde aşakdaky 4 toparda paket döredip bileris.

 - Domain Paketi
 - Implementation Paketleri
 - Mock Paketi
 - Binary Paketleri

<strong>Domain Paketi</strong>

- Domain Package, amaly aýratyn görnüşleri öz içine alýan we taslamanyň merkezinde durýar.

- Maglumat moVeri Modelleri: Account, User structsdellerini (strukturalary), interfeýsleri we hyzmatlary öz içine alyp biler. Mundan başga-da, bu maglumat modellerini we hyzmatlaryny ulanýan funksiýalar bu bukjada hem kesgitlenip bilner.

 - Veri Modelleri: Account, User structs
 - Servisler: AccountService, UserService interfaces
 - Diğerleri: SortUsers() fonksiyonu veya UserCache struct’ı.

<strong>Implementation Paketleri</strong>
- Geçirmek prosesiniň deslapky kodlary, ulanylýan tehnologiýalardan ybarat paket atlary bilen degişli bukjanyň aşagynda ýerleşýär.

- Mysal üçin, postgres paketiniň aşagyndaky Foo strukturasy bilen baglanyşykly Postgres DB-de CRUD amallarynyň FooService deslapky koduny we Redisde saklanjak Foo strukturasynyň keş keşlerini öz içine alýan FooService kesgitläp bileris. redis paket. Şeýlelik bilen, durmuşa geçirmeleri tehnologiýa esasynda izolirleýäris. Biziň üçin artykmaçlyk hökmünde her gatlak üçin aýratyn masgara maglumatlary döredip bileris, aýratyn we garaşsyz synaglar ýazyp bileris, gysgaça aýdanymyzda, gatlaklary biri-birinden aýyrýarys.

```
demo/
└── foo.go
└── postgres
│ ├── foo.go
└── redis
 └── foo.go
```

<strong> Mock Paketi</strong>

- Hususan-da, bu bukjanyň aşagynda synag üçin ulanjak masgaralaýjy maglumatlary ýygnap bileris. Bir paketiň aşagyndaky beýleki hyzmatlar üçin zerur maglumatlary ýygnap bileris.

```
demo/
└── mock
 └── foo.go
```
<strong> Binary Paketleri </strong>
- Taslamada ulanýan paketlerimiziň jemlenen ikili kodlaryny "cmd" bukjasynyň aşagyndaky kiçi paketleri döredip saklap bileris.
```
demo/
└── cmd
 ├── demoserver
 │ └── main.go
 └── democlient
 └── main.go
```
- Gysgaça syn hökmünde bukjanyň gurluşy aşakdaky ýaly bolup biler.

```
demo/
├── cmd
│ ├── demoserver
│ │ └── main.go 
│ └── democlient
│ └── main.go 
├── mock
│ └── foo.go 
├── postgres
│ └── foo.go
├── redis
│ └── foo.go
└── foo.go
```
- Uly taslamanyň üstünde işleýän bolsaňyz, taslamaňyzy subdomainlere bölmeli bolarsyňyz. Esasy katalogda, ähli kiçi domenlere degişli umumy görnüşi we interfeýs kesgitlemelerini ýazyp bilersiňiz. Şeýle-de bolsa, kodlary dürli domenler bilen izolirlemek we olary aýratyn paketlere ýazmak has dogry çemeleşme bolardy. Bu çemeleşmäniň peýdalaryny gysgaça jemlemek üçin:

   - Programma gatlaklarynyň arasyndaky aragatnaşygyň interfeýslerde dogry ýerine ýetirilmegi üpjün edilýär.
   - Her aýry aýry paketiň içinde aýratyn synag edilip bilner.
   - Tegelek garaşlylygyň döremeginiň öňi alynýar.
   - Programmanyň sagdyn we arassa ösmegi üpjün edilýär. Programma ösüp barýarka ýüze çykyp biljek bir mesele diňe degişli bukjada ýa-da täze ösüş döwründe beýleki paketleriň içki gurluşyna täsir etjek ýagdaý ýok.


