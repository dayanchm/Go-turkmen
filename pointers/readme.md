# Pointers

Pointers, Go programmirleme dilinde, üýtgeýjiniň ýat salgysyny saklaýan maglumat görnüşidir. Addressat salgysy üýtgeýjiniň saklanýan ýadyň sebit salgysydyr.

```golang
func zeroVal(val int) {
    val = 0
}
​
func zeroPtr(ptr *int) {
    *ptr = 0
}
​
x := 5
zeroVal(x)
fmt.Println(x)
​
y := 5
zeroPtr(&y)
fmt.Println(y)
```

Bu mysalda nolVal atly bir funksiýa kesgitlenildi. Funksiýa int görnüşli parametr alýar we val atly üýtgeýjiniň bahasyny 0-a üýtgedýär. ZeroPtr atly bir funksiýa kesgitlenildi. Funksiýa int görnüşiniň görkeziji (* int) parametrini alýar we görkeziji tarapyndan görkezilen üýtgeýjiniň bahasyny 0-a üýtgedýär. X atly üýtgeýjä 5 baha berilýär we nolVal (x) funksiýasy diýilýär. Funksiýa diýilenden soň, x bahasy 0-a üýtgemeýär. Y atly üýtgeýjä 5 baha berilýär we nolPtr (& y) funksiýasy diýilýär. Funksiýa diýilenden soň, y bahasy 0-a üýtgeýär.

```golang
func swap(a, b *int) {
    temp := *a
    *a = *b
    *b = temp
}
​
x := 5
y := 10
swap(&x, &y)
fmt.Println(x, y)
```

Bu mysalda swap atly bir funksiýa kesgitlenildi. Funksiýa iki görkeziji (* int) parametr alýar we bu parametrler bilen görkezilen iki üýtgeýjiniň bahalaryny çalyşýar. X atly üýtgeýjä 5 baha, y atly üýtgeýjä 10 baha berilýär. Swap (& x, & y) funksiýasy diýilýär we bu funksiýa diýilenden soň, x bahasy 10, y bahasy 5 üýtgeýär.