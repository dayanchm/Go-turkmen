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
