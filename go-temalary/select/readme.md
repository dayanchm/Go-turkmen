# Select

Go dilinde, saýlanan açar söz haýsy kanalyň habar iberýändigini kesgitlemek üçin birnäçe kanaly diňläp biler. Bu aýratynlyk kanallaryň sinhronlaşmagyny aňsatlaşdyrýar we dürli goroutinleriň arasynda habarlaşmagy dolandyrýar.

```golang
package main

import (
	"fmt"
	"time"
)

func main() {
	c1 := make(chan string)
	c2 := make(chan string)

	go func() {
		time.Sleep(time.Second * 1)
		c1 <- "one"
	}()

	go func() {
		time.Sleep(time.Second * 2)
		c2 <- "two"
	}()

	for i := 0; i < 2; i++ {
		select {
		case msg1 := <-c1:
			fmt.Println("received", msg1)
		case msg2 := <-c2:
			fmt.Println("received", msg2)
		}
	}
}
```

Bu mysalda, c1 we c2 atly iki kanal döredilýär we habar ibermek üçin goroutinler döredilýär.

Esasy funksiýada, c1 we c2 kanallary saýlanan açar söz bilen diňlenýär. Ilki bilen, goroutinleriň arasynda garaşmagyň wagty sebäpli c1 kanalyndan habar gelip, ekrana çap edilýär. Ondan soň c2 kanalyndan habar gelip, ekrana çap edilýär.

Çykyş:
```
received one
received two
```

Bu mysalda, saýlanan açar söz ulanyp, c1 we c2 kanallaryny diňleýän aýlaw döredilýär. Bu habary kabul ediş wagtyna baglylykda dürli kanallary diňlemäge mümkinçilik berýär. Netijede, goroutinleriň arasynda habarlaşma belli bir tertipde ýerine ýetirilýär we saýlanan açar söz bilen sinhronizasiýa bolýar.