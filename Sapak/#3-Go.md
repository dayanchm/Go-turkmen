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
