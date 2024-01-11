# String Functions

Golang, Setli maglumatlar boýunça amallary ýerine ýetirmek üçin köp taýýar funksiýalary hödürleýär. Bu funksiýalar setir maglumatlary döwmek, birleşmek, deňeşdirmek, gözlemek, çalyşmak we başga-da köp amal etmek üçin ulanylyp bilner.

Köplenç ulanylýan setir funksiýalary:

- len (setir) int: Berlen setiriň uzynlygyny görkezýär.
- s [i] baýt: Berlen setirde görkezilen indeks belgisindäki nyşany görkezýär.
- s + t: Iki setiri birleşdirýär.
- setirler.Split (s, sep string) [] setiri: Berlen setiri görkezilen bölüji nyşanlara görä bölýär we ony massiwine öwürýär.
- setirler. Join (a [] setir, sep setir) setiri: Berlen setir massiwine görkezilen bölüji nyşan bilen goşulýar we ony ýekeje setir hökmünde yzyna berýär.
- setirler. Içinde (lar, substr set) bool: Görkezilen setiriň berlen setirde bardygyny ýa-da ýokdugyny barlaýar.
- setirler.HasPrefix (ler, prefiks setir) bool: Berlen setiriň görkezilen prefiksden başlanýandygyny ýa-da ýokdugyny barlaýar.
- setirler.HasSuffix (lar, goşulma setiri) bool: Berlen setiriň görkezilen goşulma bilen gutarýandygyny ýa-da ýokdugyny barlaýar.
- setirler. Çalyşmak (lar, köne, täze setir, n int) setir: Berlen setirde görkezilen köne setiri görkezilen täze setir bilen çalyşýar. Islege görä belli bir mukdarda çalyşma edýär.

Mysal üçin, setirler. Hasap funksiýasy setirdäki nyşanlaryň belli bir yzygiderliliginiň sanyny tapmak üçin ulanylyp bilner:

```golang
package main

import (
    "fmt"
    s "strings"
)

var p = fmt.Println

func main() {

    p("Contains:  ", s.Contains("test", "es"))
    p("Count:     ", s.Count("test", "t"))
    p("HasPrefix: ", s.HasPrefix("test", "te"))
    p("HasSuffix: ", s.HasSuffix("test", "st"))
    p("Index:     ", s.Index("test", "e"))
    p("Join:      ", s.Join([]string{"a", "b"}, "-"))
    p("Repeat:    ", s.Repeat("a", 5))
    p("Replace:   ", s.Replace("foo", "o", "0", -1))
    p("Replace:   ", s.Replace("foo", "o", "0", 1))
    p("Split:     ", s.Split("a-b-c-d-e", "-"))
    p("ToLower:   ", s.ToLower("TEST"))
    p("ToUpper:   ", s.ToUpper("test"))
}
```

Çykyş:

```
Contains:   true
Count:      2
HasPrefix:  true
HasSuffix:  true
Index:      1
Join:       a-b
Repeat:     aaaaa
Replace:    f00
Replace:    f0o
Split:      [a b c d e]
ToLower:    test
ToUpper:    TEST
```