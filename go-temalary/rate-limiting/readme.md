# Rate Limiting

Bahalary çäklendirmek, belli bir wagtyň içinde API ýa-da hyzmat edip biljek haýyşlarynyň sanyny çäklendirmek üçin ulanylýan usul. Bu usul, programmanyň ýa-da hyzmatyň aşa ýüklenmeginiň öňüni almak üçin ulanylyp bilner.

Go dilinde, bahalar çäklendirilmegi üçin wagt bukjasy ulanylyp bilner. Bu paket, belli bir wagt aralygynda belli bir çäre görmek üçin näçe wagt garaşmalydygyny hasaplamak üçin ulanylýar.

Aşakdaky mysalda wagt ulanyp bahany çäklendirmegiň mysaly görkezilýär. Ticker we time.Sleep:

```golang
package main

import (
    "fmt"
    "time"
)

func main() {
    requests := make(chan int, 5)

    for i := 1; i <= 5; i++ {
        requests <- i
    }
    close(requests)

    limiter := time.Tick(200 * time.Millisecond)

    for req := range requests {
        <-limiter
        fmt.Println("request", req, time.Now())
    }
}
```

Bu mysalda haýyşlar atly bir kanal döredilýär we oňa 5 san goşulýar. Ondan soň bir wagt. “Limer” diýilýän bellik döredilýär we 200 millisekunt dowamlylygy bilen çäklenýär.

Soňra, haýyşlar kanalyndaky her haýyş üçin goroutin başlaýar we her haýyş ilki çäklendiriji kanalda geçirilýär. Şeýlelik bilen, iň köp 1 haýyş bir gezekde işlenip bilner.

Mysal üçin, haýyşlar kanalyndaky 5 haýyş garaşmazdan derrew işlenilse, ähli haýyşlar çalt işlener. Şeýle-de bolsa, çäklendiriji kanal tarapyndan berlen çäklendirme sebäpli, her haýyşyň arasynda 200 millisekunt garaşýar.

```
request 1 2023-05-23 15:56:01.46705 +0300 +03 m=+0.201167209
request 2 2023-05-23 15:56:01.667008 +0300 +03 m=+0.401132584
request 3 2023-05-23 15:56:01.867014 +0300 +03 m=+0.601146918
request 4 2023-05-23 15:56:02.067052 +0300 +03 m=+0.801193043
request 5 2023-05-23 15:56:02.267025 +0300 +03 m=+1.001173793
```

Şeýlelik bilen, nyrh çäklendirmesi haýyşlaryň belli bir tizlikde işlenmegini üpjün edýär.