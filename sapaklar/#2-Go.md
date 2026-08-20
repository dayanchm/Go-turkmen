# <div align="center">Go Programmirleme dili - Sintaksis(Syntax) we maglumatlaryň görnüşleri (data type)</div>

- Bu makalada, Go Programming diliniň sintaksis(Syntax), görnüşi(type), açar sözleri(keywords), üýtgeýän kesgitlemesi(variable definition), yzygiderliligi(constants) ýaly esasy gurluşlary barada. Mundan başga-da, mysallar bilen setir üýtgeýjilerinde UTF-8 goldawy barada aydyp geçeris.

- Go programmirleme dilinde jemi 25 açar söz(keywords) bar. Beýleki programmirleme dilleri bilen deňeşdirilende, Go iň az açar sözli (keywords) dilleriň biridir. 

## Go dilindäki açar sözler

 ``` - break    default     func   interface select
  - case     defer       go     map      struct
  - chan     else        goto   package  switch
  - const    fallthrough if     range    type
  - continue for         import
  ```
  
## Operatorlar we çäklendirijiler (limiters) 47 sanak.

 ``` +   &   +=  &=   &&  ==  !=  (  )
    -   |   -=  |=   ||  <   <=  [  ]
    *   ^   *=  ^=   <-  >   >=  {  }
    /   <<  /=  <<=  ++  =   :=  ,  ;
    %   >>  %=  >>=   —  !    …  .  :
    &^  &^=
  ```
  
## Variable (Tm-dilinde üytgeyji bolyar in gowsy variable diysek has gowusy) 

- Go dilinde üýtgeýänleri yglan etmegiň köp usuly bar. Bularyň birinjisi, baha bellemezden kesgitlemegiň usulydyr.

```
var t int
```

- Islesek, üýtgeýän kesgitleme wagtynda = operator bilen bahalary hem belläp bileris.

```
var t int = 10
```

- Gysga üýtgeýän kesgitleme diýip biljek başga bir usulymyz bar. Bu kesgitlemede := operator ulanylýar we <strong> üýtgeýjini(variable) kesgitläniňde bir baha berilmeli </strong>.
Lokal üýtgeýji hökmünde ulanylýar. Diňe ilki kesgitlenen ýerinde hereket edýär. Yagny, bir funksiýanyň içinde kesgitlenen bolsa, diňe şol funksiýanyň içinde hereket edýär ýa-da funksiýanyň içinde aýlaw döredilende kesgitlenen bolsa, diňe şol aýlawyň içinde hereket edýär.

```
t := 10
```
- Kesgitleme wagtynda bir görnüşi görkezmek islenýän bolsa, üýtgeýjini gaplamak arkaly döredip bolýar.

```
t := int64(10)
```

- Üýtgeýjini kesgitläniňde bir baha bellenmese, üýtgeýjä nol baha berilýär (nol baha diýilýär).

  - San maglumat görnüşleri üçin: 0
  - Boolean maglumat görnüşi üçin: false
  - Setir (string) maglumat görnüşi üçin: “” (boş string)

Üýtgeýän baha üçin käbir dilleriň kesgitlenmedik gymmaty bar. Şeýle-de bolsa, Go-da kesgitlenmedik baha ýok. Mysal üçin, “Bool” maglumat görnüşi üçin “Go” -yň alyp biljek hakyky ýa-da ýalan 2 bahasy bar.


```
package main

import “fmt”

func main() {

 var name string
 
 fmt.Printf(“var name %T = %+v\n”, name, name)
 
 var payment float64
 
 fmt.Printf(“var payment %T = %q\n”, payment, payment)
 
var isActive bool

 fmt.Printf(“var isActive %T = %+v\n”, isActive, isActive)
}

```

Print:

```
var name string = “”
var payment float64 = 0
var isActive bool = false
```

- Variable atlary

Go programmirleme dilinde başga dillerde bar bolan "private, public, protected" açar sözleri ýokdyr. Bu ýagdaýy has ýönekeý usul bilen çözdüler.

<strong> Üýtgeýjiniň ady baş harp bilen başlasa, bu üýtgeýjä kesgitlenen bukjanyň daşyndan girip bolýar. Şeýle-de bolsa, baş harp bilen başlasa, diňe kesgitlenen paketde elýeterlidir.</strong>

- Şonuň üçin üýtgeýän atlaryň baş harplara degişlidigini aýdyp bileris.


```
var FirstName string
var password string
```

   Üýtgeýjä(variable) at berlende göz öňünde tutulmaly beýleki nokatlar:

- Diňe harplar, sanlar we aşaky çyzyklar bilen edilmeli.

```
Dogry -> user_name, userName, signal4
Yalňyş -> best.offer, user-name
```
- Sanlar bilen başlamaly däldir.

```
Dogry -> best4Game, house62
Yalňyş -> 10cars
```
- Nyşan ulanylmaly däldir.

```
Dogry -> product
Yalňyş -> $product
```
<strong>Multiple Assignment</strong>

- Go bilen dürli maglumatlar görnüşleriniň bahalaryny bir setirde birden köp üýtgeýjä bellemek bolýar. Esasanam kod okamak mümkinçiligi taýdan köp amatlylygy üpjün edýän aýratynlyk.

```
a,b,c := 12, true, “Google”
fmt.Println(a)
fmt.Println(c)
fmt.Println(b)
```
<strong>Print</strong> 

`
12
Google
true
`

<strong>San görnüşleri(Numeric Types)</strong>

Go dilinde 2 dürli san görnüşi bar. Bulary <strong> arhitektura garaşsyz görnüşi </strong> hökmünde dogry ölçegi alýan görnüşlere we programmanyň döredilen <strong> arhitekturasyna baglylykda </strong> ululygyny alýan görnüşlere (implementation specific type) bölmek bolar.


<strong> arhitektura garaşsyz görnüşi </strong>

```
uint8  8-bit  (0–255)

uint16 16-bit (0–65535)

uint32 32-bit (0–4294967295)

uint64 64-bit (0–18446744073709551615)

int8   8-bit  (-128–127)

int16  16-bit (-32768–32767)

int32  32-bit  (-2147483648–2147483647)

int64  64-bit  (-9223372036854775808–9223372036854775807)

float32 IEEE-754  32-bit (+- 1O-45 -> +- 3.4 * 1038 )

float64 IEEE-754  64-bit  (+- 5 * 10–324 -> 1.7 * 10308 )

complex64 

complex128 

byte ~~ uint8

rune ~~ int32
```

<strong> arhitekturasyna baglylykda </strong>


```
uint    -> 32 ya da 64 bit
int     -> uint bilen deňdir
uintptr -> görkeziji bahasynyň düşündirilmedik bitlerini saklamak üçin ýeterlik uly bolmadyk gol
```

Arhitektura bagly görnüşler haýsy ulgam üçin düzülendigine baglylykda ululykda üýtgeýär.

Esasanam binagärlik taýdan garaşsyz görnüşleri ulanmakda, dogry görnüşi saýlamak amaly ýerine ýetirişine täsir eder. Mysal üçin, diňe 0 bilen 200 aralygyndaky sanlary ulanjak bolsak, üýtgeýjimizi uint ýerine derek uint8 diýip kesgitlemek dogry.

Bu ýerde üns bermeli ýene bir nokadymyz, maglumat görnüşiniň ululygy kodumyzyň akymyndan ýokary bolmaly däldir.

Mysal 1: 

```
package main
import (
 “fmt”
)
func main() {
 var t uint8 = 254
 fmt.Println(t + 1)
}
```

Print:

`
255
`

Mysal 2:
```
package main
import (
 “fmt”
)
func main() {
 var t uint8 = 254
 fmt.Println(t + 2)
}
```
Print:

`
0
`

Mysal 3:

```
package main
import (
 “fmt”
)
func main() {
 var t uint8 = 254 + 2
 fmt.Println(t)
}
```

Print:

`
./prog.go:8:20: constant 256 overflows uint8
`

<strong> Boolean </strong>

Boolean maglumat görnüşi (data type) dogry ýa-da ýalnyş 2 dürli bahany alyp biler. Bellenen bahasy ýalňyş. Kod akymynyň içinde dolandyryş mehanizmleri üçin peýdalydyr.

```
package main
import (
 “fmt”
)
func main() {
 var isActive bool
 printed := true
 fmt.Println(isActive)
 fmt.Println(printed)
}
```

Print:

```
Output:
false
true

```

<strong>String</strong>

String data type görnüşleri yzygiderli bir ýa-da birnäçe simboldan durýar.

Go-daky string aňlatmalary goşa dyrnak (“) ýa-da ýeke-täk dyrnak (backtick) ( ` ) arasynda ýazyp bolýar.


```
a := “İr bilen \”Salam\” diýdi”
b := `İr bilen “Salam” diýdi`
```

<strong> UTF-8 </strong>

Go dilinde UTF-8 bilen bile geler. Aýry bir paket ýa-da kitaphana gerek bolmaz.


Mysal :

```
package main
import (
 “fmt”
)
func main() {
 a := “Hello, 世界”
 for i, c := range a {
  fmt.Printf(“%d: %s\n”, i, string(c))
 }
 fmt.Println(“length of ‘Hello, 世界’: “, len(a))
}
```

Print:

```
0: H
1: e
2: l
3: l
4: o
5: ,
6:
7: 世
10: 界
length of ‘Hello, 世界’: 13
```


Görşümiz ýaly, a üýtgeýjiniň (variable) uzynlygy a üýtgeýjisindäki (variable) nyşanlaryň sanyndan köp. Munuň sebäbi Go dilinde aýratyn görnüş bolan <strong> rune </strong> görnüşi. <strong> Rune </strong> nyşanlarynyň ýunikod bahasyny öz içine alýan we 1-2 int32 görnüşli bahalardan ybarat ýörite görnüş.


Aşakdaky mysal <strong> rune </strong> bahasy bilen gözden geçirilip bilner.

```
package main
import “fmt”
func main() {
 const nihongo = “日本語”
 for index, runeValue := range nihongo {
 fmt.Printf(“%#U starts at byte position %d\n”, runeValue, index)
 }
}
```

Print

```
U+65E5 ‘日’ starts at byte position 0
U+672C ‘本’ starts at byte position 3
U+8A9E ‘語’ starts at byte position 6
```
<strong>Constants (Dowamly)</strong>

Constants üýtgeýän görnüşler bolup, kesgitleme wagtynda bellenen başlangyç bahanyň soň üýtgemegine ýol bermeýär.

```
package main

import “fmt”

func main() {
 const gopher = “Nail”
 fmt.Println(gopher)
}
```
Print:

```
Nail
```

<strong> Bir constants kesgitlemek isleseňiz, onda size kodyňyz çalyşmaz </strong>

Mysal:
```
package main

import “fmt”

func main() {
 const gopher = “Nail”
 fmt.Println(gopher)
 gopher = “Can”
 fmt.Println(gopher)
}
```
Print:

```
./prog.go:10:9: cannot assign to gopher
```
<strong> Typed & Untyped Constants </strong>

Mysal:

```
import “fmt”

const (
 year = 365 // untyped
 leapYear = int32(366) // typed
)

func main() {
 hours := 24
 minutes := int32(60)
 fmt.Println(hours * year) 
 fmt.Println(minutes * year)
 fmt.Println(minutes * leapYear)
}

```

Print:

```
8760
21900
21960
```
<strong>Iota</strong>

Bu sanlaryň köpelmegi bilen yzygiderliligi kesgitlemekde ulanylýan görnüş. Kesgitleme tertibine görä köpelip bahalary belleýär. Kesgitlenen blokda 0-dan başlaýar we 1-e köpelmek bilen dowam edýär.


```
package main

import “fmt”

const (
 Metin int = iota
 Ali
 Feyyaz
)

func main() {
 fmt.Printf(“Metin is %v\n”, Metin)
 fmt.Printf(“Feyyaz is %v\n”, Feyyaz)
 fmt.Printf(“Ali is %v\n”, Ali)
}
```
Print:

```
Metin is 0
Feyyaz is 2
Ali is 1
```


<strong>Konsol çykyşyny döretmek </strong>

Konsolyň netijelerini döretmek üçin deslapky koddaky fmt paketini ulanyp bileris. Fmt bukjasyny import edenimizden soň, paketdäki Çap, Printf we Println funksiýalary bilen netijeleri döredip bileris. Mundan başga-da, netijeler Errorf, Fprint, Fprintf, Fprintln, Sprint, Sprintf, Sprintln funksiýalary bilen döredilip bilner.


Mysal:

```
package main

import “fmt”

func main() {
 fmt.Println(“Salam, Men go ulanjysy”)
 fmt.Printf(“Salam %s men \n”, “go ulanjysy”)
}
```

Print:

```
Salam, Men go ulanjysy.
Salam, go ulanjysy men.
```

<strong>Işlikler</strong>

Print çap etmek funksiýalary işlikleri ulanyp biler. Bu işlikler dürli formatlaşdyrma stillerini emele getirýärler. Işlikler köplenç% ýa-da \ nyşan bilen ulanylýar.


<strong>Käbir işlikler:</strong>

```
// %v -> tip kontrolü yapmadan değeri yazar
// %s -> string değerler için kullanılır
// %d -> numerik değerler için (int, int32, etc)
// %T -> veri tipini döner
// %f -> Ondalıklı değerler için
// \ -> escape karakteri
// \n -> bir alt satıra geçmek için kullanılır
// \t -> tab boşluğu bırakmak için kullanılır
```

<strong>Mysal Kod:</string>

```
package main
import (
 “fmt”
)
func main() {
 const adi, yasi, calisiyorMu, yemekUcreti = “Nail”, 32, true, 21.5
fmt.Printf(“Adı: %v \n”, adi)
 fmt.Printf(“Yaşı: %v \n”, yasi)
 fmt.Printf(“Çalışıyor mu : %v \n”, calisiyorMu)
 fmt.Printf(“Yemek ücreti: %v”, yemekUcreti)
 fmt.Println(“********”)
 fmt.Printf(“Adı: %s \n”, adi)
 fmt.Printf(“Yaşı: %d \n”, yasi)
 fmt.Printf(“Çalışıyor mu : %t \n”, calisiyorMu)
 fmt.Printf(“Yemek ücreti: %f”, yemekUcreti)
 fmt.Println(“********”)
 fmt.Printf(“Adı: %T \n”, adi)
 fmt.Printf(“\t Yaşı: %T \n”, yasi)
 fmt.Printf(“\t \t Çalışıyor mu : %T \n”, calisiyorMu)
 fmt.Printf(“\t \t \t Yemek ücreti: %T”, yemekUcreti)
}
```

<strong>Print:</strong>
```
Adı: Nail 
Yaşı: 32 
Çalışıyor mu : true 
Yemek ücreti: 21.5********
Adı: Nail 
Yaşı: 32 
Çalışıyor mu : true 
Yemek ücreti: 21.500000********
Adı: string 
 Yaşı: int 
   Çalışıyor mu : bool 
     Yemek ücreti: float64
```


Yorum Satırları
Go dilinde yorum satırları diğer birçok dil ile aynı yöntemler kullanılarak oluşturulmaktadır. Bu yöntemlerden en basiti iki adet slash karakterini satırın balına eklemektir.

// Yorum satırı…
Eğer bir satır bloğunu yorum satırı haline getirmek istiyorsak da bu satırların başına tek tek // ekleyebiliriz veya bloğun en başına /* ,en sonuna da */ karakterlerini ekleyerek içeride kalan satırları yorum satırı haline getirmiş oluruz.

/*
 Bu satırların
 hepsi 
 aslında yorum satırıdır
*/
Bir satırada satırın başına değil istediğimiz herhangi bir yerine de // karakterlerini ekleyerek satırda bu karakterlerden sonrasının yorum satırı olmasını sağlayabiliriz.

z := x % 2 // x’in 2 ile bölümünden kalanı verir
Bir uygulamanın dokümantasyonunun oluşturulması da çok önemlidir. Go dili tasarlanırken de yazılan kodun kolay dokümante edilebilmesini sağlamak amacı ile yorum satırlarından yararlanılması planlanmıştır. GoDoc oluşturulurken sizin kod içerisinde, fonksiyonlarınızın üzerinde yazdığınız yorum satırları kullanılmaktadır. Bu nedenle kod içerisindeki yorum satırlarına daha çok önem göstermek gerekmektedir.

GoDoc ile ilgili aşağıdaki bağlantıdan daha detaylı bilgi alabilirsiniz.

The Go Blog
Andrew Gerrand 31 March 2011 The Go project takes documentation seriously. Documentation is a huge part of making…
blog.golang.org

Structs
Go diline özgü veri tiplerinden birisi de structlardır.
Diğer dillerdeki model yapısına benzerlikleri vardır. İçerisinde alanlar barındıran bir veri topluluğudur.

type keyword’ü kullanılarak tanımlanır

type User struct {
 Name string
 Email string
}
Struct içerisindeki alanlara . karakteri ile erişebiliriz. Eriştiğimiz alan bize değerini döner. İstersek = ekleyerek ilgili alanın değerini değiştirebiliriz.

Tanımlı struct tipinde bir nesne oluşturmak için aşağıdaki yöntemlerin hepsi geçerlidir.

a := User{}
b := User{
 Name: “Homer Simpson”,
 Email: “homer@example.com”,
}
c := User{Email: “marge@example.com”}
c.Name = “Marge Simpson”
d := User{Name: “Homer Simpson”, Email: “homer@example.com”}
e := User{“Homer Simpson”,”homer@example.com”}
fmt.Println(a.Name)
fmt.Printf(“User’s email is %s”, e.Email)
Fakat e değişkenini oluşturduğumuz yöntem tavsiye edilen bir kullanım biçimi değildir. Çünkü ileride User struct’ı içerisindeki bir değişiklik durumunda uygulamamızda aşağıdaki gibi bir hata almamız kaçınılmazdır.

type User struct {
 ID int
 Name string
 Email string
}
Değişikliği sonrası konsol çıktısı:

too few values in User literal
Go dilini öğrenme sürecimde sözdizimi ve veri tipleri ile ilgili tuttuğum notları sade bir şekilde sizlerle paylaşmaya çalıştım. Bundan sonraki süreçlerde de yine aynı şekilde notlarımı bir seri olarak paylaşmayı hedefliyorum.

Umarım sizler için de faydalı olmuştur :)

Burada paylaştığım bilgiler çoğunlukla Google’ın Go Dili üzerine düzenlemiş olduğu Workshop’larda kullandığı sunumlardan ve Go resmi sayfasındaki dökümantasyon ve tur bölümündeki açıklamalardan edindiğim notları içermektedir.

İletişimde kalmak isterseniz linkedin üzerinden haberleşebiliriz.

