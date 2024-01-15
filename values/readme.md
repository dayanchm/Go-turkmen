## Values

Gymmatlyklar Go programmirleme dilindäki üýtgeýjiler tarapyndan alnyp barylýan maglumatlardyr. Gymmatlyklar kesgitlenip ýa-da üýtgäp biler we dürli maglumat görnüşlerini görkezip biler.

Go dilindäki maglumatlaryň esasy görnüşleri:

- San maglumatlarynyň görnüşleri: San bahalaryny aňlatmak üçin int, float32, float64, complex64, complex128, baýt, rune ýaly maglumatlar görnüşleri ulanylýar.
- Boolean maglumat görnüşi: bool maglumat görnüşi diňe hakyky ýa-da ýalan bahalary alyp bilýän maglumat görnüşidir.
- Setir maglumat görnüşi: tekstiň ýa-da nyşanlaryň bahalaryny aňlatmak üçin setir maglumat görnüşi ulanylýar.
- Çylşyrymly maglumat görnüşleri: Gurluş, massiw, dilim, karta, kanal ýaly maglumatlar görnüşleri birnäçe maglumat elementlerini bilelikde saklamak we belli bir maksada hyzmat etmek üçin ulanylýar.

Gymmatlyklaryň görnüşleri Go dilinde statiki taýdan kesgitlenýär. Bir üýtgeýjä baha bellänimizde, bu üýtgeýjiniň görnüşi kesgitlenýär we bu görnüşi soň üýtgedip bilmeris.

```golang
var age int
age = 32

age = "thirty-two" // compile error: cannot use "thirty-two" (type string) as type int in assignment
```

Bu mysalda üýtgeýän ýaş ilki int görnüşi diýlip yglan edilýär, soň üýtgeýän ýaş 32 belgisi berilýär. Soň bolsa, "otuz iki" setiri ýaş üýtgeýjisine bellenmäge synanyşýar we programma ýalňyşlyk berýär. Variaş üýtgeýjisi int diýip kesgitlenýändigi sebäpli, görnüş setiriniň bahasyny belläp bolmaz.
Gymmatlyklar programmalary dürli maksatlar üçin ulanmaga mümkinçilik berýär. Mysal üçin, san amalyny ýerine ýetirmek üçin int bahasyny ulanyp bileris ýa-da tekst amalyny ýerine ýetirmek üçin setir bahasyny ulanyp bileris.