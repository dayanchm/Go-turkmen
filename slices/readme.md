# Slices

Dilleriň esasy maglumat gurluşlaryndan biri bolan dilimler, Go programmirleme dilinde ululygyny üýtgedip boljak çeýe maglumat gurluşlarydyr. Dilimleri massiwleriň bir bölegi diýip hasaplamak bolar we Go dilinde köplenç ulanylýar.

```golang
a := []int{1, 2, 3, 4, 5}
fmt.Println(a)
```

Bu mysalda a atly dilim kesgitlenýär we elementlerine {1, 2, 3, 4, 5} berilýär. Toplumlardan tapawutlylykda, kesgitleme tapgyrynda dilimleriň ululygy görkezilmeýär. Dilimleri boş diýip hem kesgitläp bolar.

```golang
var a []int
a = append(a, 1)
a = append(a, 2, 3, 4, 5)
fmt.Println(a)
```

Bu mysalda a atly dilim kesgitlenýär we goşundy () funksiýasy bilen elementlerine degişlilikde 1, 2, 3, 4 we 5 bahalar goşulýar. Goşundy () funksiýasy bir bölege bir ýa-da birnäçe element goşmak üçin ulanylýar.

Dilimler, massiwlerden tapawutlylykda, bölek hökmünde hem kesgitlenip bilner.

```golang
a := []int{1, 2, 3, 4, 5}
b := a[1:4]
fmt.Println(b)
```

Bu mysalda a atly dilim kesgitlenýär we elementlerine {1, 2, 3, 4, 5}  values ​​bahalar berilýär. B diýilýän dilim 1-nji görkezijiden 4-nji görkezijä çenli a dilimiň aşaky bölegini hem öz içine alýar. B dilimindäki elementler {2, 3, 4} as görnüşinde çykýar.