# if/else

Go programmirleme dilindäki we başga sözler, käbir şertler dogry ýa-da ýalan bolsa, dürli kod bloklaryny ýerine ýetirmäge mümkinçilik berýär.

```golang
if x > 0 {
    fmt.Println("Positive number")
} else if x < 0 {
    fmt.Println("Negative number")
} else {
    fmt.Println("Zero")
}
```

Bu mysalda, if jümlesi 0-dan uly bolsa "Pozitiw san" çap ediler. Eger üýtgeýji 0-dan uly bolmasa, beýlekisi jümle barlanar we x üýtgeýjisi 0-dan az bolsa, "ativearamaz san" tekstini çap eder. Eger üýtgeýji x 0-dan uly ýa-da ondan uly bolmasa, beýleki blok işleýär we "Nol" tekstini çap eder.

```golang
if ve else kodlary, çylşyrymly şertleri barlamak üçin hem ulanylyp bilner.
if x > 10 && x < 20 {
    fmt.Println("x is between 10 and 20")
} else if x > 20 && x < 30 {
    fmt.Println("x is between 20 and 30")
} else {
    fmt.Println("x is not between 10 and 30")
}
```

Bu mysalda, if üýtgeýjisi 10 bilen 20 aralygynda bolsa, "x 10 bilen 20 aralygynda" çap ediler. Eger üýtgeýji 10 bilen 20 aralygynda däl bolsa, beýlekisi barlanylsa we x üýtgeýjisi 20 bilen 30 arasynda bolsa, "x 20 bilen 30 aralygy" tekstini çap eder. Eger üýtgeýji 10 bilen 30 arasynda däl bolsa, beýleki blok işleder we "x 10 bilen 30 arasynda däl" tekstini çap eder.