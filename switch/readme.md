# Switch

switch, Go programmirleme dilinde belli şertlere baglylykda dürli amallary ýerine ýetirmek üçin ulanylýar:

```golang
day := "sunday"
​
switch day {
case "monday":
    fmt.Println("Today is Monday")
case "tuesday":
    fmt.Println("Today is Tuesday")
case "wednesday":
    fmt.Println("Today is Wednesday")
case "thursday":
    fmt.Println("Today is Thursday")
case "friday":
    fmt.Println("Today is Friday")
case "saturday":
    fmt.Println("Today is Saturday")
case "sunday":
    fmt.Println("Today is Sunday")
default:
    fmt.Println("Invalid day")
}
```

Bu mysalda, switch, day üýtgeýjiniň bahasyna baglylykda dürli amallary ýerine ýetirýär. Gün üýtgeýjisi "duşenbe" bolsa, "Şu gün duşenbe" tekstini çap edýär. Gün üýtgeýjisi "sişenbe" bolsa, "Şu gün sişenbe" tekstini çap edýär. Şeýlelik bilen, gün üýtgeýjisiniň bahasyna baglylykda dürli kod bloklary ýerine ýetirilip bilner.

Bellenen jümle, ähli şertler dogry bolmasa işleýän kod koduna degişlidir.

```golang
switch x {
case 1:
    fmt.Println("x is 1")
case 2:
    fmt.Println("x is 2")
case 3:
    fmt.Println("x is 3")
default:
    fmt.Println("x is not 1, 2 or 3")
}
```

Bu mysalda switch ifadesi, x üýtgeýjiniň bahasyna baglylykda dürli amallary ýerine ýetirýär. X üýtgeýjisi 1 bolsa, "x 1" tekstini çap edýär. Eger üýtgeýji 2 bolsa, "x 2" tekstini çap edýär. Eger üýtgeýji 3 bolsa, "x is 3" tekstini çap edýär. Eger üýtgeýji 1, 2 ýa-da 3 däl bolsa, deslapky blok işleýär we "x 1, 2 ýa-da 3 däl" tekstini çap eder.