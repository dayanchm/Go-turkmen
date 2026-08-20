# Timers

Go dilinde, belli bir wagtdan soň amalyň ýerine ýetirilmegini üpjün etmek üçin taýmerler ulanylýar. Wagt paketine girizilen NewTimer funksiýasynyň kömegi bilen taýmer döredilip bilner.

```golang
package main

import (
	"fmt"
	"time"
)

func main() {
	timer1 := time.NewTimer(2 * time.Second)

	<-timer1.C
	fmt.Println("Timer 1 expired")

	timer2 := time.NewTimer(time.Second)

	go func() {
		<-timer2.C
		fmt.Println("Timer 2 expired")
	}()

	stop2 := timer2.Stop()
	if stop2 {
		fmt.Println("Timer 2 stopped")
	}
}
```

Bu mysalda, NewTimer funksiýasyny ulanyp, iki taýmer döredilýär.

Ilkinji taýmer (timer1) iki sekuntdan soň gutarýar. Bu amal ýerine ýetirilende, timer1-iň gutarmagyna garaşmak üçin <-timer1.C ulanylýar we Timer 1-iň möhleti gutaran habar ekranda çap edilýär.

Ikinji taýmer (timer2) bir sekuntdan soň gutarýar. Goroutini ulanmak bilen, timer2-iň möhletiniň gutarmagyna garaşylýar we Timer 2-iň möhleti gutaran habaryň ekrana ýazylmagyna garaşylýar, ýöne timer2 1 sekunt garaşandan soň togtadylandygy sebäpli, Timer 2-iň möhleti ekrana ýazylmaýar. Durmak funksiýasyny ulanyp, timer2 togtadylýar we Timer 2-iň saklanan habary ekranda çap edilýär.

Çykyş:

```golang
Timer 1 expired
Timer 2 stopped
```

Bu mysalda, NewTimer funksiýasyny ulanyp, iki taýmer döredilýär. Birinji taýmer, garaşylýan wagt gutarýança goroutini duruzmak bilen bir amal ýerine ýetirýän bolsa, ikinji taýmer goroutini kesgitlenen wagt gutarýança garaşmak üçin ulanýar. Durmak funksiýasyny ulanyp, timer2 saklanýar.