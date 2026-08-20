# Range

range aňlatmasy, Go programmirleme dilinde belli bir massiwiň, dilimiň ýa-da kartanyň üstünden aýlanmak üçin ulanylýar. Aralyk aňlatmasy maglumat gurluşyndaky ähli elementleri birin-birin göz öňünde tutmak üçin ulanylýar.

```golang
numbers := []int{1, 2, 3, 4, 5}
for i, num := range numbers {
    fmt.Println("index:", i, "number:", num)
}
```

Bu mysalda sanlar atly bir dilim kesgitlenýär we elementlerine {1, 2, 3, 4, 5 values ​​bahalar berilýär. Aralyk aňlatmany ulanyp, san dilimindäki ähli elementler birin-birin alynýar we aýlawda ulanylýar. I üýtgeýji aýlawyň hataryndaky indeks bahasyny, üýtgeýän num bolsa indeksdäki elementi aňladýar. Bu mysalda indeksler we elementler bilelikde çap edilýär.

```golang
colors := map[string]string{
    "red":   "#FF0000",
    "green": "#00FF00",
    "blue":  "#0000FF",
}
for color, code := range colors {
    fmt.Println("color:", color, "code:", code)
}
```

Bu mysalda reňkler diýilýän Karta kesgitlenýär we gyzyl, ýaşyl we gök düwmeler bilen reňk kodlary berilýär. Aralyk aňlatmasyny ulanyp, reňkler kartasyndaky ähli açar bahaly jübütler birin-birin alynýar we aýlawda ulanylýar. Üýtgeýän reňk açary, üýtgeýän kody açara laýyk bahany aňladýar. Bu mysalda reňkler we kodlar bilelikde çap edilýär.