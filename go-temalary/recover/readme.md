# Recover

recover funksiyasy, Go programmasynyň ýerine ýetirilişinde ýüze çykýan howsalalary dolandyrmak üçin ulanylýar. Aljyraňňylyk ýüze çyksa, howsala dörän funksiýanyň içinde çagyrylsa, dikeldiş funksiýasy howsala sebäpli togtadylan prosese gözegçilik edýär we programmanyň kadaly dowam etmegine mümkinçilik berýär.

Dikeldiş funksiýasy köplenç yza süýşürmek bilen ulanylýar. Şeýlelik bilen, howsala dörän ýagdaýynda programmanyň gözegçiligi yza süýşürmek baradaky amallaryň iň soňkusy bolan dikeldiş funksiýasyna geçirilýär we şeýlelik bilen programma dowam edýär.

Mysal üçin, aljyraňňylyk ýüze çykanda programmanyň işlemeginiň öňüni almagyň ýerine, dikeldiş funksiýasy sebäpli programma kadaly dowam edip biler:

```golang
package main

import "fmt"

func main() {
    fmt.Println("Commm...")

    defer func() {
        if r := recover(); r != nil {
            fmt.Println("panic:", r)
        }
    }()

    fmt.Println("Commmingg...")

    panic("Bu bir panic!")
}
```

Bu mysalda howsala aňlatmasyny ulanyp bilgeşleýin howsala döredilýär. Gaýra goýlan beýany ulanyp, howsala ýagdaýlarynda işlemeli bir funksiýa kesgitlenýär. Haçan-da dikeldiş funksiýasy funksiýanyň içinde çagyrylsa, aljyraňňy ýagdaýdan gaýtarylan bahany alýar we if strukturasyny ulanyp bir amal islenýän bolsa, bu baha bilen işleýär.

```
Commm...
Commmingg...
panic: Bu bir panik!
```

recover funksiýasy bilen howsala düşen ýagdaýynda programma gözegçiligini yzyna almak, esasanam uly we çylşyrymly ulgamlarda uly artykmaçlygy üpjün edýär. Şeýle-de bolsa, bu funksiýany aşa köp ulanmak programmanyň işine ýaramaz täsir edip biler. Şonuň üçin dikeldiş funksiýasyny diňe aýratyn ýagdaýlarda ulanmak maslahat berilýär.