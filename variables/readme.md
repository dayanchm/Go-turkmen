## Variables

 Variables, Go programlama dilinde maglumatlary saklamak üçin ulanylýan esasy gurluş bloklaryndan biridir. Üýtgeýjä baha bellemek bilen, şol üýtgeýjiniň saklaýan bahasyny programmada ulanyp bileris.

Üýtgeýjileri yglan etmek var açar söz bilen ýerine ýetirilýär. Kesgitlenmeli üýtgeýjiniň ady we maglumat görnüşi görkezilýär. Haçan-da başlangyç baha berilmese, Go dilindäki üýtgeýjileriň başlangyç bahasy bolýar.

```golang
var name string
name = "John Doe"
```

Bu mysalda ady üýtgediji kesgitlenýär we bu üýtgeýjiniň görnüşi setir hökmünde kesgitlenýär. Ondan soň "Jon Doe" setiri adyň üýtgeýjisine bellendi.
Üýtgeýjileriň bahasy üýtgedilip bilner we dürli maglumatlar görnüşinde bolup biler.

```golang
var age int
age = 32

age = "thirty-two" // compile error: cannot use "thirty-two" (type string) as type int in assignment
````

Bu mysalda ilki bilen ýaş atly üýtgeýji kesgitlenýär we bu üýtgeýjiniň görnüşi int hökmünde kesgitlenýär. Ondan soň üýtgeýän ýaşa 32 belgisi berilýär.

Ondan soň "thirty-two" setiri ýaş üýtgeýjisine bellenmäge synanyşýar we programma ýalňyşlyk berýär. Variaş üýtgeýjiniň int görnüşi hökmünde kesgitlenýändigi sebäpli, oňa setir görnüşiniň bahasy bellenilip bilinmez.

Üýtgeýjiler belli bir maksada hyzmat etmek üçin programmalarda ulanylýar. Mysal üçin, ulanyjynyň ady, ýaşy ýa-da san bahalarynyň tapgyry saklanyp bilner.