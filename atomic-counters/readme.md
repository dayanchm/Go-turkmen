# Atomic Counters

Atom hasaplaýjylary, Go dilindäki ylalaşyk amallarynda ulanylýan mowzuk. Go programmalarynyň köpüsinde birnäçe goroutin bilen paýlaşylýan maglumatlary ulanýandygy sebäpli, bu maglumatlaryň bir wagtyň özünde birnäçe goroutin tarapyndan üýtgedilmegi gutulgysyzdyr. Bu üýtgeşmeleri dogry dolandyryp bilmezlik programmanyň garaşylmadyk ýagdaýda işlemegine sebäp bolup biler.

Atom hasaplaýjy, Go-nyň sinhron / atom paketine girizilen maglumat gurluşydyr. Bu maglumat gurluşynda AddInt64, CompareAndSwapInt64, SwapInt64, LoadInt64 we StoreInt64 ýaly usullar toplumy bar. Bu usullar bir wagtyň özünde birnäçe goroutine girip bolýan üýtgeýjini howpsuz dolandyrmaga mümkinçilik berýär.

Aşakdaky mysal, Atom Counter ulanyp, 10 goroutin tarapyndan paýlaşylýan hasaplaýjy üýtgeýjini nädip ygtybarly ýokarlandyrmalydygyny görkezýär:

```golang
package main

import (
    "fmt"
    "sync"
    "sync/atomic"
)

func main() {
    var counter int64 = 0
    var wg sync.WaitGroup
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            atomic.AddInt64(&counter, 1)
        }()
    }
    wg.Wait()
    fmt.Println("Counter:", counter)
}
```

Bu mysalda hasaplaýjy üýtgeýji int64 görnüşiniň Atom hasaplaýjysy hökmünde kesgitlenýär we başda 0 bahasy berilýär. Ondan soň 10 sany goroutin döredilýär we hersi atom.AddInt64 usuly bilen hasaplaýjy üýtgeýjini köpeldýär. Bu usul adresi we hasaplaýjyny alýar we atom üýtgeýjisine atom taýdan 1 goşýar.

Netijede, Atom Counter maglumat gurluşy birnäçe goroutinler tarapyndan paýlaşylýan üýtgeýänleri ygtybarly dolandyrmaga mümkinçilik berýär we ylalaşyk amallarynda ulanylýan möhüm mesele.