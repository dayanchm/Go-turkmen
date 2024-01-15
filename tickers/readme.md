# Tickers

Go dilinde, tickerlar, operasiýa belli bir wagtyň dowamynda belli aralyklarda amala aşyrylmagyny üpjün etmek üçin ulanylýar. Wagt paketine girizilen NewTicker funksiýasyny ulanyp, bellik döredip bolýar.

```golang
package main

import (
	"fmt"
	"time"
)

func main() {
	ticker := time.NewTicker(500 * time.Millisecond)
	done := make(chan bool)

	go func() {
		for {
			select {
			case <-done:
				return
			case t := <-ticker.C:
				fmt.Println("Tick at", t)
			}
		}
	}()

	time.Sleep(1600 * time.Millisecond)
	ticker.Stop()
	done <- true
	fmt.Println("Ticker stopped")
}
```

Bu mysalda, NewTicker funksiýasyny ulanyp, bir teker döredilýär we her 500 millisekuntda bir hereket ýerine ýetirilýär.

Goroutini ulanyp, bellik döredilen wagt aralygyna baglylykda saýlanan açar söz ulanyp, belli bir aralykda hereket edilýär. Edilen kanala habar ibermek bilen goroutin saklanýar we Ticker bes edilen habar ekranda çap edilýär.

Çykyş:

```
Tick at 2022-11-27 16:37:14.750915 +0300 MSK m=+0.501356162
Tick at 2022-11-27 16:37:15.249568 +0300 MSK m=+1.000018689
Tick at 2022-11-27 16:37:15.751064 +0300 MSK m=+1.501505306
Ticker stopped
```