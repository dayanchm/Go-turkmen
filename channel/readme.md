# Channel

Go dilinde, kanal goroutinleriň arasynda maglumat alyşmak üçin ulanylýan maglumat gurluşydyr. Kanal açar söz ulanyp döredilýär we maglumatlary ibermek we almak amallary <- operator arkaly amala aşyrylýar.

```golang
package main

import "fmt"

func main() {
	messages := make(chan string)

	go func() { messages <- "Hello" }()

	msg := <-messages
	fmt.Println(msg)
}
```

Bu mysalda habarlar atly kanal döredilýär.

Go açar sözüni ulanyp, bir goroutin döredilýär we bu goroutin habarlar kanalyna Salam habary iberýär.

Esasy funksiýada habarlar kanalyndan msg atly üýtgeýjä habar gelip, ekranda çap edilýär.

Çykyş:
```
Hello
```

Bu mysalda, kanal ulanyp, goroutinden esasy sapaga habar iberildi. Şeýlelik bilen, goroutin prosesi tamamlanandan soň, esasy sapak kanaldan habary alýar we netijäni ekrana çykarýar.

Kanallar Golangdaky köp ýagdaýlarda ulanylyp bilner, mysal üçin:

1. Goroutinleriň arasynda maglumat alyşmak
2. Sinhronizasiýa amallary üçin
3. Arzaňyzyň işleýşini gowulandyrmak üçin (paralel gaýtadan işlemek)
4. Goroutinleriň arasynda maglumat ýaryşlarynyň öňüni almak
5. Wezipeleri utgaşdyrmak we sinhronlamak üçin

## Bu parallel amallar näme?

Paralel amallar, bir programma bir wagtda birnäçe amallary ýerine ýetirmäge mümkinçilik berýän usuldyr. Bu usul, uly maglumatlary gaýtadan işlemek, hasaplaýyş intensiw amallary we köp ulanyjy goldawyny talap edýän programmalar ýaly ýagdaýlarda has möhümdir.

Golang paralel gaýtadan işlemek üçin goroutinleri ulanýar. Goroutinler ýeňil sapaklar bolup, prosessoryň ýadrosynda boş wagty ulanyp, programmaňyzy paralel we ýokary öndürijilikli edýär. Goroutines, programmaňyzyň has netijeli işlemegi we programmaňyzyň has çalt işlemegi üçin zerur çeşmeleri ulanmaga mümkinçilik berýär.

Mysal üçin, bir programma bir wagtyň özünde web sahypasyndaky birnäçe ulanyjynyň maglumatlaryny gaýtadan işlemek isläp biler. Paralel gaýtadan işlemegi ýerine ýetirip, bu maglumatlary bir wagtda gaýtadan işläp bilersiňiz we has gysga wagtda netijeleri alyp bilersiňiz. Mundan başga-da, paralel gaýtadan işlemek programmaňyza has köp ulanyjy goldawyny berýär.

Golangdaky parallel gaýtadan işlemek ukyby, uly göwrümli, hasaplaýyş taýdan köp we köp ulanyjy goldawyny talap edýän programmalarda aýratyn peýdalydyr.

- **Maglumatlary gaýtadan işlemek:** Programma, uly maglumatlar toplumyny gaýtadan işlemek üçin paralel gaýtadan işlemegi amala aşyryp biler. Mysal üçin, bir programma maglumatlar bazasyndaky millionlarça ýazgyny okap we başga algoritm bilen bu ýazgylardan derňew geçirip biler.
- **Hasaplama intensiw amallary:** Programma paralel gaýtadan işlemek arkaly ýokary hasaplama intensiwligini talap edýän amallary tamamlap biler. Mysal üçin, bir programma çylşyrymly matematiki hasaplamalary ýerine ýetirip ýa-da uly faýllary şifrläp biler.
- **Köp ulanyjy goldawy:** Bir programma, bir wagtyň özünde birnäçe ulanyjynyň girmegine rugsat bermek üçin paralel gaýtadan işlemegi amala aşyryp biler. Mysal üçin, web programmasynda birnäçe ulanyjy bir wagtda haýyşlary iberip we şol islegleri paralel gaýtadan işläp biler. 
- **Birnäçe prosessor ýadrosy:** Birden köp prosessor ýadrosy bolan ulgamlarda, paralel gaýtadan işlemegi ýerine ýetirip, programmaňyzy has netijeli işledip bilersiňiz. Mysal üçin, bir programma birnäçe prosessor ýadrosyny ulanyp has çalt maglumatlary gaýtadan işlemegi we hasaplamalary ýerine ýetirip biler.

Bu mysallar haýsy ýagdaýlarda paralel gaýtadan işlemegiň ulanylyp bilinjekdigi barada düşünje berýär. Golangdaky goroutinleriň kömegi bilen şeýle amallary has çalt we has netijeli ýerine ýetirip bilersiňiz.

## Buffering

Go dilinde kanallaryň ululygy belli bir kuwwat bilen çäklendirilip bilner. Bu, kanallaryň belli bir mukdarda maglumat almagyny üpjün edýär. Bu aýratynlyga kanal buferi diýilýär.

```golang
package main

import "fmt"

func main() {
	messages := make(chan string, 2)

	messages <- "Hello"
	messages <- "World"

	fmt.Println(<-messages)
	fmt.Println(<-messages)
}
```

Bu mysalda habarlar atly kanal döredilýär we ululygy 2-e düzüldi.

Salam we Dünýä habarlary habarlar kanalyna iberilýär.

<-Messages ulanyp, habarlar kanalyndan habarlar alynýar we ekranda çap edilýär.

Çykyş:

```
Hello
World
```
Bu mysalda, kanal buferini ulanyp, habarlar kanaly 2 ululyk hökmünde kesgitlenýär. Şonuň üçin “Salam” we “World” habarlary kanala iberildi we kanalda saklandy. <-Messages ulanyp, habarlar yzygiderli kanaldan alyndy we ekrana çap edildi.

## Channel Synchronization

Go dilinde dürli goroutinleriň arasynda sinhronlamak üçin kanallar hem ulanylyp bilner. Bu, bir goroutiniň başga bir goroutiniň amaly tamamlamagyna garaşmaly ýagdaýlarynda peýdalydyr.

```golang
package main

import (
	"fmt"
	"time"
)

func worker(done chan bool) {
	fmt.Print("working...")
	time.Sleep(time.Second)
	fmt.Println("done")

	done <- true
}

func main() {
	done := make(chan bool, 1)
	go worker(done)

	<-done
}
```

Bu mysalda işçi diýilýän bir funksiýa kesgitlenýär we ýerine ýetirilen kanal parametrini alýar.

Işçi funksiýasy habary çap edýär ..., bir sekunt garaşýar we ýerine ýetirilen habary çap edýär.

Esasy funksiýada ýerine ýetirilen bir kanal döredilýär we ululygy 1-e deňdir. Go açar sözüni ulanyp, işçi funksiýasyna goroutin diýilýär. <-Done ulanyp, işçi funksiýasy gutarandan soň esasy funksiýa habar iberilýär we esasy sapak bu habary alýar.

Çykyş:
```
working...done
```

Bu mysalda, kanal sinhronizasiýasyny ulanyp, işçi funksiýasyna goroutin diýilýär. Işçi funksiýasy ýerine ýetirilen kanala habar iberýär we amal tamamlanýar. <-Done ulanyp, esasy funksiýa işçiniň işiniň gutarmagyna garaşýar. Netijede, işleýän ... ýerine ýetirilen habarlar ekrana yzygiderli çap edilýär.

## Channel Directions

Go dilinde amallary ibermek ýa-da almak üçin kanallaryň ugruny kesgitläp bolýar. Şonuň üçin kanallaryň ulanylmagy dürli goroutinleriň arasynda aragatnaşyk we maglumatlary geçirmegi aňsatlaşdyrýar.

```golang
package main

import "fmt"

func ping(pings chan<- string, msg string) {
	pings <- msg
}

func pong(pings <-chan string, pongs chan<- string) {
	msg := <-pings
	pongs <- msg
}

func main() {
	pings := make(chan string, 1)
	pongs := make(chan string, 1)

	ping(pings, "Hello")
	pong(pings, pongs)

	fmt.Println(<-pongs)
}
```

Bu mysalda ping we pong atly iki funksiýa kesgitlenýär we kanallarynyň ugurlary kesgitlenýär.

Ping funksiýasy parametr hökmünde diňe habar ibermek üçin ulanyp boljak chan <- operator bilen pings kanalyny alýar.

“Pong” funksiýasy diňe habarlary kabul etmek üçin ulanyp boljak “pings” kanalynyň parametri hökmünde, diňe habar ibermek üçin ulanyp boljak “pongs” kanalynyň parametri hökmünde “chan” operatoryny alýar.

Esasy funksiýada pings we pongs kanallary döredilýär. Ping funksiýasyny ulanyp, pings kanalyna salam habary iberilýär. Pong funksiýasy habary pings kanalyndan alýar we pongs kanalyna iberýär. Ahyrynda <-pongs ulanyp, habar pongs kanalyndan alynýar we ekrana çap edilýär.

Çykyş:

```
Hello
```

Bu mysalda, kanal ugurlaryny ulanyp, ping we pong funksiýalary dürli ugurlardaky kanallary ulanyp habar ibermek we almak bilen meşgullanýar. Ping funksiýasy diňe habar ibermek üçin ulanylýan pings kanaly arkaly habar iberýär. Pong funksiýasy habary pings kanalyndan alýar we pongs kanalyna iberýär. Ahyrynda <-pongs ulanyp, habar pongs kanalyndan alynýar we ekrana çap edilýär.
