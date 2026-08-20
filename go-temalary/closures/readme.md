# Closures

Closures, Go programma dilinde içerki funksiýa arkaly bir funksiýany ulanmak arkaly emele gelýän gurluşdyr. Bu gurluş, bir funksiýanyň içinde başga bir funksiýa salgylanyp, bir funksiýanyň işleýän çäginden daşardaky üýtgeýänlere girişi üpjün edýär.

```golang
func outer() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}
​
increment := outer()
fmt.Println(increment())
fmt.Println(increment())
fmt.Println(increment())
````

Bu mysalda daşarky diýilýän bir funksiýa kesgitlenýär. Funksiýa içki funksiýany, içki funksiýa bolsa san diýilýän üýtgeýjä girýär. outer() funksiýa artma diýilýän üýtgeýjä bellenýär we içki funksiýa bu üýtgeýji bilen işleýär. Sanama üýtgeýjisi increment() diýilişi ýaly ýokarlanýar we artma her gezek ekrana çap edilýär.

```golang
func adder(a int) func(int) int {
    return func(b int) int {
        return a + b
    }
}
​
addFive := adder(5)
fmt.Println(addFive(2))
fmt.Println(addFive(3))
```

Bu mysalda adder atly bir funksiýa kesgitlenýär. Funksiýa a görnüşli int görnüşiniň parametrini alýar we içki funksiýany yzyna gaýtaryp berýär. Içki funksiýa b atly int parametrini alýar we a we b parametrleriniň jemini yzyna berýär. Adder (5) funksiýasy addFive atly üýtgeýjä bellenýär we içki funksiýa bu üýtgeýji bilen işleýär. “AddFive” (2) we “AddFive” (3) diýilişi ýaly, netijeler ekrana çap edilýär.