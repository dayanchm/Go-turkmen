# Functions

Go programmirleme dilinde funksiýa, belli bir funksiýany ýerine ýetirýän kod bloklaryny aňladýar. Funksiýa bir ýa-da birnäçe parametr alyp, operasiýa edip we bir ýa-da birnäçe netijäni gaýtaryp biler.

```golang
func add(a int, b int) int {
    return a + b
}
​
result := add(5, 10)
fmt.Println(result)
```

Bu mysalda goşmak atly bir funksiýa kesgitlenýär. Funksiýa a we b iki int görnüşli parametrleri alýar we bu parametrler bilelikde goşulýar we int görnüşini umumy görnüşde görkezýär. Goşmak funksiýasy 5 we 10 parametrleri bilen atlandyrylýar we netije fmt.Println (netije) aňlatmasy bilen çap edilýär.

```golang
func swap(a, b string) (string, string) {
    return b, a
}
​
x, y := swap("hello", "world")
fmt.Println(x, y)
```

Bu mysalda swap atly bir funksiýa kesgitlenildi. Funksiýa a we b iki setir parametrleri alýar we bu parametrleri biri-birine gaýtaryp berýär. Çalyşmak funksiýasy "salam" we "dünýä" parametrleri bilen atlandyrylýar we gaýdyp gelen netijeler x we ​​y üýtgeýjiler tarapyndan alynýar. Netijeler fmt.Println (x, y) aňlatmasy bilen çap edilýär.