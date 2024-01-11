# Strings and Runes

Strings, Go programmirleme dilinde Unicode nyşanlaryny birleşdirmek arkaly döredilen nyşan massiwidir. Her bir nyşan 1-4 baýt aralygynda bolup biler.

```golang
str := "hello"
fmt.Println(str)
fmt.Println(str[0])
fmt.Println(str[1:3])
```

Bu mysalda str atly setir üýtgeýjisi kesgitlenýär we "hello" bahasy berilýär. St üýtgeýjisi ekrana çap edilýär, soňra str [0] aňlatmasyny ulanyp, setiriň birinji harpy "h" ekrana çap edilýär. St [1: 3] aňlatmasyny ulanyp, ekranyň ikinji we üçünji nyşanlary "el" ekranda çap edilýär.

```golang
for i, r := range "hello" {
    fmt.Printf("%d: %s\n", i, string(r))
}
```

Bu mysalda, "salam" setiriniň her bir nyşany, aýlaw üçin aralyk funksiýasy bilen ulanylýar. Her nyşanyň ýagdaýy we gymmaty ekranda çap edilýär.
Runes, Go programmirleme dilinde icunikod nyşanlarynyň birleşmesini aňladýan maglumat görnüşidir. Runes, 1-4 baýtdan uly bolup bilýän nyşanlary görkezmek üçin ulanylýar.

```golang
str := "こんにちは"
for i, r := range str {
    fmt.Printf("%d: %c\n", i, r)
}
```

Bu mysalda str atly setir üýtgeýjisi kesgitlenýär we "こ ん に ち value" bahasy berilýär. “Loop” ulanyp, her bir nyşan diapazon funksiýasy bilen elýeterlidir we gahrymanyň ýagdaýy we gymmaty ekranda çap edilýär.