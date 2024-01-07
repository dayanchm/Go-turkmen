# Maps

Map, Go programmirleme dilinde açar bahaly jübütleriň ýygyndysy. Kartanyň maglumat gurluşy sözlük, hash tablisasy ýa-da beýleki programmirleme dillerindäki assosiatiw massiw ýaly maglumat gurluşlaryna meňzeýär. Kartanyň maglumat gurluşy belli bir açar üçin baha saklaýar.

```golang
var colors map[string]string
colors = make(map[string]string)
colors["red"] = "#FF0000"
colors["green"] = "#00FF00"
colors["blue"] = "#0000FF"
fmt.Println(colors)
```

Bu mysalda reňkler atly Karta kesgitlenýär we make () funksiýasy bilen döredilýär. Gyzyl, ýaşyl we gök düwmeler bilen reňk kodlary reňkleriň maglumat gurluşyna goşulýar we Karta maglumat gurluşyndaky ähli açar baha jübütleri fmt.Println (reňkler) jümlesi arkaly ekrana çap edilýär.

Karta maglumat gurluşy, beýleki programmirleme dillerindäki maglumat gurluşlaryndan tapawutlylykda, düwmeler üçin belli bir maglumat görnüşini we bahalar üçin belli bir maglumat görnüşini görkezmeli däl. Düwmeler we gymmatlyklar dürli maglumat görnüşlerinde bolup biler.

```golang
ages := map[string]int{
    "Alice": 25,
    "Bob":   30,
    "Carol": 35,
}
fmt.Println(ages)
```

Bu mysalda, ýaşlar atly Karta kesgitlenýär we jübüt görnüşli düwmeleriň we int görnüşiniň bahalarynyň jübütleri kesgitlenýär. Kartanyň maglumat gurluşyny döretmek we elementleri goşmak, ony make () funksiýasy bilen birleşdirip hem edip bolýar.