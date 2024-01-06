## For

“For loop” belli bir şert dogry bolýança gaýtalanýan kod bloklaryny görkezmek üçin Go programmirleme dilinde ulanylýar. Aýlaw üçin başlangyç ýagdaý, şert we ädim sanasy bar.

```golang
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

Bu mysalda, loop i üýtgeýäniň 0 bahasyndan başlanýan we üýtgeýjiniň <5 şertini kanagatlandyrýança gaýtalanýan aýlawdyr. Aýlawyň her ädiminde i üýtgeýjisi 1 köpelýär, netijede i 4 bolýar.

Aýlaw üçin şert şerti kanagatlanýança gaýtalanýar. Partagdaý bölegi dogry bolmasa, aýlaw gutarýar. Mundan başga-da, aýlaw üçin arakesme ýa-da sözlemleri dowam etdirip bolýar.

```golang
for i := 0; i < 10; i++ {
    if i == 3 {
        break
    }
    if i%2 == 0 {
        continue
    }
    fmt.Println(i)
}
```

Bu mysalda, loop i üýtgeýäniň 0 bahasyndan başlap, i üýtgeýjisi <10 şertini kanagatlandyrýança gaýtalanýar. Aýlawyň her ädiminde i üýtgeýjisi 1 köpelýär.

Eger şert we arakesme ýerine ýetirilen bolsa, aýlaw kesilýär. Mundan başga-da, i bahasy 3 bolanda aýlaw gutarýar.

Aýlawdaky şert, eger i bahasy deň san bolsa, indiki ädim ätmek bilen i bahasyny çap etmeýär. Bu ýagdaýyň sebäbi, diňe täsin sanlary çap etmek isleýäris.