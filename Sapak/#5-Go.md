# <div align="center">5# Go Programirleme Dili — Slice </div>

- <strong>Slice</strong>'lar, birden köp maglumatlary saklap bilýän, massiwleriň superseti hökmünde görüp bilýän massiwlere meňzeş görnüşlerdir. Toplumlar ýaly, ýekeje maglumat görnüşiniň elementleri bar we elementleriň maglumat görnüşi kesgitlenende kesgitlenýär. Ony massiwlerden tapawutlandyrýan iň möhüm aýratynlyk, ululygynyň üýtgemegidir. Kesgitleme wagtynda ululygy görkezilmeýär we kesgitlemeden soň näçe element goşup bileris.

```
func main() {
 carArray := [3]string {“BMW”, “Ferrari”, “Opel”}
 carSlice := []string {“BMW”, “Ferrari”, “Opel”}
}
```

- Languagehli dil aýlaw amallaryny, massiwlerdäki ýaly gaýtalama amallarynda ulanyp bileris.

```
for index, carBrand := range carSlice {
 fmt.Println(index, carBrand)
}
```
- Dilimleriň gurluş taýdan 3 sany esasy maglumatlary bar. Bular dilimiň uzynlygy, kuwwaty we içindäki maglumatlary saklaýan massiwdir. Täze görnüş hökmünde döretjek bolsak, ony şeýle kesgitläp bilerdik:

```
type slice struct {
 Length int
 Capacity int
 Array [10]array
}
```
- Aslynda, dilim görnüşiniň esasy gurluşy beýle bir ýönekeý däl, ýöne has aňsat düşünmek üçin bu hakda iň ýönekeý pikir edip bileris.

- Dilimleriň kuwwaty 0-dan başlaýar we 2-e köpelip, mazmunyna elementleriň sanyny goşmak bilen ýokarlanýar. (0,1,2,4,8,16….).

- Slice'lar täze elementler goşmak üçin <strong>append () </strong> funksiýasyny ulanýarys. Bu funksiýa ilkinji parametr hökmünde elementiň goşuljak dilimini alýar. Ondan soň, goşulmaly elementler funksiýa, birin-birin ýa-da massiw / dilim hökmünde, aralaryna vergi goýup geçirilýär.

- Dilime täze elementler goşulandan soň, dilimiň göwrümi elementleriň umumy sanyna ýeterlik bolsa, elementler degişli indekslere ýerleşdirilýär. Şeýle-de bolsa, häzirki kuwwatyndan ýokary bolsa, dilimiň täze ululygyny ýapyp bilýän iň kiçi ululygy 2 esse bolan täze massiw döredilýär we elementler bu massiwine geçirilýär.

- Indi dürli usullar bilen dilime täze elementler goşalyň. Şol aralykda, dilimiň ululygynyň we kuwwatynyň bahasynyň üýtgemegine syn edeliň.

- Bu ýerde iki sany täze funksiýany ulanarys. Bulardan len (), dilimiň ululygyny we gapagyny () kuwwatyny berýän funksiýalardyr.

```
package main

import “fmt”

func main() {
 teams := []string{}
 fmt.Println(“Baslangıçta:”)
 fmt.Printf(“uzunluk: %d, kapasite: %d \n”, len(teams), cap(teams))
 teams = append(teams, “Beşiktaş”)
 fmt.Println(“Eklenen takımlar: Beşiktaş”)
 fmt.Printf(“uzunluk: %d, kapasite: %d \n”, len(teams), cap(teams))
 teams = append(teams, “Fenerbahçe”)
 fmt.Println(“Eklenen takımlar: Fenerbahçe”)
 fmt.Printf(“uzunluk: %d, kapasite: %d \n”, len(teams), cap(teams))
 teams = append(teams, “Galatasaray”)
 fmt.Println(“Eklenen takımlar: Galatasaray”)
 fmt.Printf(“uzunluk: %d, kapasite: %d \n”, len(teams), cap(teams))
 teams = append(teams, “Trabzon”, “Sivas”)
 fmt.Println(“Eklenen takımlar: Trabzon, Sivas”)
 fmt.Printf(“uzunluk: %d, kapasite: %d \n”, len(teams), cap(teams))
 otherTeams := []string{“Kayseri”, “Göztepe”, “Malatya”, “Manisa”}
 teams = append(teams, otherTeams…)
 fmt.Println(“Eklenen takımlar: Kayseri, Göztepe, Malatya, Manisa”)
 fmt.Printf(“uzunluk: %d, kapasite: %d \n”, len(teams), cap(teams))
}
```
- <strong>Print:</strong>

```
Baslangıçta:
uzunluk: 0, kapasite: 0 
Eklenen takımlar: Beşiktaş
uzunluk: 1, kapasite: 1 
Eklenen takımlar: Fenerbahçe
uzunluk: 2, kapasite: 2 
Eklenen takımlar: Galatasaray
uzunluk: 3, kapasite: 4 
Eklenen takımlar: Trabzon, Sivas
uzunluk: 5, kapasite: 8 
Eklenen takımlar: Kayseri, Göztepe, Malatya, Manisa
uzunluk: 9, kapasite: 16
```
- Şeýle hem, dilim kesgitlenende make () funksiýasyny ulanyp bileris. Bu funksiýa ilki bilen dilim elementleriniň maglumat görnüşini, ikinjiden elementleriň sanyny we ahyrynda kuwwatlyk parametrini alýar. Potensial parametri islege bagly däl. Birinji kesgitlemeden soň elementleriň bahasy, dilim elementleri üçin saýlan maglumat görnüşimiziň deslapky (nol) bahasydyr. Bu baha int üçin 0, setir üçin boş setir (“”), bool üçin ýalňyş.

```
package main

import “fmt”

func main() {
 intSlice := make([]int, 2)
 fmt.Printf(“%v, boyut: %d, kapasite: %d \n”, intSlice, len(intSlice), cap(intSlice))
stringSlice := make([]string, 3, 4)
 fmt.Printf(“%q, boyut: %d, kapasite: %d \n”, stringSlice, len(stringSlice), cap(stringSlice))
 stringSlice[0] = “Skoda”
 stringSlice = append(stringSlice, “BMW”, “Ferrari”)
 fmt.Printf(“%q, boyut: %d, kapasite: %d \n”, stringSlice, len(stringSlice), cap(stringSlice))
}
```
- <strong>PRİNT</strong>

```
[0 0], boyut: 2, kapasite: 2 
[“” “” “”], boyut: 3, kapasite: 4 
[“Skoda” “” “” “BMW” “Ferrari”], boyut: 5, kapasite: 8
```

- 2 ölçegli massiw, şeýle hem 2 ölçegli dilim kesgitlenip bilner. Aslynda, 2 dilim bilen täze dilim kesgitleýärsiňiz. Şol sebäpli 2 ölçegli dilimdäki her dilimiň ululygy we kuwwaty dürli bolup biler.

```
package main

import “fmt”

func main() {
 _2DStringSlice := [][]string{{“one”, “two”, “three”}, {“a”, “b”}}
 fmt.Printf(“%q \n”, _2DStringSlice)
 _2DStringSlice[0][2] = “four”
 _2DStringSlice[1][0] = “x”
 fmt.Printf(“%q \n”, _2DStringSlice)
type _2DIntSlice [][]int
 notes := _2DIntSlice{[]int{1, 2, 3}, []int{4, 6}}
 fmt.Printf(“%v \n”, notes)
 fmt.Println(notes[0][1])
}
```
- <strong>PRİNT:</strong>

```
[[“one” “two” “three”] [“a” “b”]] 
[[“one” “two” “four”] [“x” “b”]] 
[[1 2 3] [4 6]] 
2
```
- Dilimleriň belli bir bölegini alyp, täze dilim döredip bileris. Munuň üçin, dilimiň adyndan soň birinji inedördül ýaýyň içinde emele gelýän täze dilimiň başlangyç indeksini we ahyrky indeksini ýazmak bilen edýäris.

- Oluşan yeni slice, aslında ilk slice’daki dizinin ilgili elemanlarını referans etmektedir. Bu nedenle yeni slice elemanlarının değeri değiştiğinde ana slice’da da karşılık gelen indeksteki değer değişecektir. Bu durumun nedeni slice’ların referans taşıyan veri tiplerinden (pass by reference) olmasıdır.

package main
import “fmt”
func main() {
 cars := []string {“BMW”, “Ferrari”, “Opel”, “Skoda”}
 fmt.Println(cars)
 subsetOfCars := cars[1:3]
 fmt.Println(subsetOfCars)
fmt.Println(“yeni slice’ımızın ilk indeksindeki değeri \”Honda\” olarak değiştirelim”)
 subsetOfCars[0] = “Honda”
 fmt.Println(subsetOfCars)
 fmt.Println(“Bu durumda cars slice’ımızda da bu değer değişecektir.”)
 fmt.Println(cars)
}
Çıktısı:

[BMW Ferrari Opel Skoda]
[Ferrari Opel]
yeni slice’ımızın ilk indeksindeki değeri “Honda” olarak değiştirelim
[Honda Opel]
Bu durumda cars slice’ımızda da bu değer değişecektir.
[BMW Honda Opel Skoda]
Burada hazır yeri gelmişken pass by value ve pass by reference kavramlarının ne olduğunu kısaca açıklamaya çalışayım. Öncelikle go dilindeki bu grupların içerisine giren veri tipleri/tanımlamaları şu şekilde örnekleyebiliriz.

Pass By Value: int, float, string, bool, structs
Pass By Reference: slices, maps, channels, pointers, functions

İlk olarak pass by value tanımını anlatmaya çalışayım. Örneğin string tipinde bir değişken tanımladınız ve bu değişkene bir değer atadınız. Ram üzerinde bir alanda bu string değişkene ait bir pointer ve bu pointer’ın işaret ettiği value alanı oluşur.


Siz bu değişkeni başka bir fonksiyona parametre olarak geçtiğinizde arka tarafta/ram üzerinde aslında var olan kaydın bir kopyası oluşturulur. Yeni bir pointer değerinin value alanına aynı değer yazılır.


Siz fonksiyon içerisinde bu değişkenin değerini değiştirseniz bile ilk tanımladığınız değişkenin değeri değişmez.


Aynı şekilde pass by reference olan slice’ı tanımladığınızda ise ram üzerinde bir alan da pointer ve bu pointer’ın işaret ettiği value alanı doldurulur. Value alanında slice’a ait ana bilgiler tutulur. Bunlar slice’ın boyutu, kapasitesi ve içeriğindeki eleman dizisinin ram’de tutulduğu alanın pointer değeridir. Ram üzerinde bir diğer alanda ise slice içerisindeki dizi tutulur.


Siz bu slice değişkenini bir fonksiyona parametre olarak geçtiğinizde, ram üzerinde slice’ın ana bilgilerini tutan alan kopyalanır ve yeni bir alana yazılır. Ancak slice’a ait diziyi tutan alan kopyalanmaz. Ram üzerindeki yeni kopya alan da diziyi tutan alanı referans olarak gösterir.


Bu nedenle siz fonksiyon içerisinde slice üzerinde yaptığınız değişiklikler, ilk tanımlandığı slice değişkenin de değerini değiştirmiş olursunuz. Şimdi bu anlattıklarımı bir de kod üzerinde görelim.

package main
import “fmt”
func main() {
 car := “BMW”
 fmt.Println(“car string’i oluştuğunda:”)
 fmt.Println(car)
 changeCarString(car)
 fmt.Println(“changeCarString fonksiyonundan sonra”)
 fmt.Println(car)
fmt.Println(“/////////////////”)
cars := []string{“BMW”, “Ferrari”, “Opel”}
 fmt.Println(“cars slice’ı oluştuğunda:”)
 fmt.Println(cars)
 changeCarsSlice(cars)
 fmt.Println(“changeCarsSlice fonksiyonundan sonra”)
 fmt.Println(cars)
}
func changeCarString(car string) {
 car = “Ferrari”
 fmt.Println(“changeCarString fonksiyonu içerisinde”)
 fmt.Println(car)
}
func changeCarsSlice(cars []string) {
 cars[0] = “Skoda”
 fmt.Println(“changeCarsSlice fonksiyonu içerisinde”)
 fmt.Println(cars)
}
Çıktısı:

car string’i oluştuğunda:
BMW
changeCarString fonksiyonu içerisinde
Ferrari
changeCarString fonksiyonundan sonra
BMW
/////////////////
cars slice’ı oluştuğunda:
[BMW Ferrari Opel]
changeCarsSlice fonksiyonu içerisinde
[Skoda Ferrari Opel]
changeCarsSlice fonksiyonundan sonra
[Skoda Ferrari Opel]
Son olarak da copy() fonksiyonundan bahsetmek istiyorum. Eğer elimizdeki bir slice’dan aynı değerlere sahip yeni bir slice oluşturmak istiyor, ancak ana slice’a referans etmesini istemiyorsak copy() fonksiyonunu kullanmalıyız. Copy fonksiyonu aynı değerlere sahip ancak yepyeni bir slice oluşturmaya yarar. İki parametre alır. Bunlardan ilki içerisine verilerin kopyalanacağı yeni slice, ikincisi ise kopyalanacak kaynak slice’dır.

package main
import “fmt”
func main() {
 cars := []string {“BMW”, “Ferrari”, “Opel”, “Skoda”}
 fmt.Println(“Başlangıçta”)
 fmt.Printf(“cars: %q \n”, cars)
 copyCars := make([]string, len(cars))
 copy(copyCars, cars)
 copyCars[0] = “Bugatti”
 copyCars = append(copyCars, “Ford”)
 fmt.Println(“Copy fonksiyonundan sonra”)
 fmt.Printf(“cars: %q \n”, cars)
 fmt.Printf(“copyCars: %q \n”, cars)
}
Çıktısı:

Başlangıçta
cars: [“BMW” “Ferrari” “Opel” “Skoda”] 
Copy fonksiyonundan sonra
cars: [“BMW” “Ferrari” “Opel” “Skoda”] 
copyCars: [“BMW” “Ferrari” “Opel” “Skoda”]
Go Programlama Dili ile tanıştığım slicelar hakkında kısaca yazmaya çalıştım. Umarım sizler için de faydalı olmuştur :)
