# WaitGroups

WaitGroup, Go dilinde, goroutinleriň arasynda sinhronlaşmagy üpjün etmek üçin ulanylýan mehanizm. “WaitGroup” gurluşy Go-nyň sinhron paketine girýär.

WaitGroup, programmistlere işleriň sanyny öňünden kesgitlemäge we şol amallaryň gutarmagyna garaşmaga mümkinçilik berýär. Her bir goroutin, amalyň gutarandygyny habar bermek üçin WaitGroup gurluşynda Done () funksiýasyna jaň edýär. WaitGroup gurluşyndaky Wait () funksiýasy ähli amallaryň tamamlanmagyna garaşýar.

Aşakdaky mysal WaitGroup gurluşynyň ulanylyşyny görkezýär:

```golang
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()

    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }

    wg.Wait()

    fmt.Println("All workers done")
}
```

Bu mysalda, işçi funksiýa işgäri () 5 işi ýerine ýetirmek üçin çagyrylýar. WaitGroup gurluşy, her işçi funksiýasy başlamazdan ozal Add () funksiýasy bilen garaşmak prosesleriniň sanyny köpeldýär. Her bir işçi funksiýasy tamamlanandan soň, Done () funksiýasy bilen bir amal gutarandygy yglan edilýär. Wait () funksiýasy ähli amallaryň gutarmagyna garaşmak üçin ulanylýar. Netijede, ähli işçi funksiýalary gutaransoň, esasy () funksiýa "workershli işçiler ýerine ýetirildi" habaryny çap edýär.

```
Worker 5 starting
Worker 3 starting
Worker 4 starting
Worker 1 starting
Worker 2 starting
Worker 5 done
Worker 3 done
Worker 2 done
Worker 1 done
Worker 4 done
All workers done
```