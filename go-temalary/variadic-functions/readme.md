## Variadic Functions

Variadic Functions, Go programmirleme dilinde, üýtgeýän köp sanly argument alýan funksiýalar. Bu funksiýalar bir ýa-da birnäçe argument we üýtgeýän köp sanly argument alyp biler.

```golang
func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

fmt.Println(sum(1, 2, 3, 4, 5))
fmt.Println(sum(2, 4, 6))
```

Bu mysalda jem atly bir funksiýa kesgitlenýär. Funksiýa san görnüşli int görnüşli üýtgeýän parametrleri alýar we olaryň jemini yzyna berýär. Funksiýanyň içinde sanlar massiwindäki ähli elementleriň jemi aýlaw üçin ulanylýar. Funksiýa jem (1, 2, 3, 4, 5) we jem (2, 4, 6) diýilýär we netijeler ekrana çap edilýär.

```golang
func concatenate(sep string, strs ...string) string {
    result := ""
    for i, str := range strs {
        if i > 0 {
            result += sep
        }
        result += str
    }
    return result
}

fmt.Println(concatenate(", ", "foo", "bar", "baz"))
fmt.Println(concatenate("-", "hello", "world"))
```

Bu mysalda konkatenat diýilýän bir funksiýa kesgitlenýär. Funksiýa sep atly setir görnüşli parametr we strs atly üýtgeýän görnüşli parametrleri alýar. Funksiýanyň çäginde, strs massiwindäki ähli elementler aýlaw üçin ulanylýar we sep bölüji nyşan bilen birleşdirilýär. Funksiýa konkatenat (",", "foo", "bar", "baz") we konkatenat ("-", "salam", "dünýä") diýilýär we netijeler ekrana çap edilýär.