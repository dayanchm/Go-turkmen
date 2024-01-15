# Timeouts

Go dilinde, timeout işleri, tor amallary wagtynda aýratyn möhümdir. Wagt paketini ulanyp, belli bir wagta garaşyp bolýar. Wagt geçse, gutarmak ýalňyşlygy ýüze çykýar.

```golang
package main

import (
	"fmt"
	"time"
)

func main() {
	c1 := make(chan string, 1)

	go func() {
		time.Sleep(time.Second * 2)
		c1 <- "result 1"
	}()

	select {
	case res := <-c1:
		fmt.Println(res)
	case <-time.After(time.Second * 1):
		fmt.Println("timeout 1")
	}

	c2 := make(chan string, 1)

	go func() {
		time.Sleep(time.Second * 2)
		c2 <- "result 2"
	}()

	select {
	case res := <-c2:
		fmt.Println(res)
	case <-time.After(time.Second * 3):
		fmt.Println("timeout 2")
	}
}
```

Bu mysalda, c1 we c2 atly iki kanal döredilýär we habar ibermek amallary üçin goroutinler döredilýär.

Ilki bilen, saýlanan açar söz ulanyp, c1 kanalyndan habar garaşylýar. Şeýle-de bolsa, wagt ulanyp. Soňra, c1 kanalynda habar gelmezden bir sekunt garaşýar. Bir sekuntdan köp geçse, gutarmak ýalňyşlygy ýüze çykýar we habaryň gutarmagy 1 ekranda çap edilýär.

Soňra, saýlanan açar söz ulanyp, c2 kanalyndan habar garaşylýar. Şeýle-de bolsa, wagt ulanyp. Ondan soň, c2 kanalynda habar alynmanka üç sekunt garaşýar.

Çykyş:
```
timeout 1
result 2
```

Bu mysalda wagt gutarmak amallary wagtdan soň ýerine ýetirildi. Birinjiden, gutarmak säwligi ýüze çykýar, sebäbi habar c1 kanalyna bir sekuntdan köp iberilmedi. Soňra, iki sekuntdan öň c2 kanalyna habar iberilende, habar alynýar we ekranda çap edilýär.