# Arrays

Array, Go programmirleme dilindäki maglumat gurluşy bolup, şol bir görnüşdäki birnäçe üýtgeýjini bir üýtgeýjide saklamaga mümkinçilik berýär. Bir massiwde öňünden kesgitlenen ululyk we belli bir maglumat görnüşi bar.

```golang
var a [5]int
a[0] = 1
a[1] = 2
a[2] = 3
a[3] = 4
a[4] = 5
fmt.Println(a)
```

Bu mysalda a atly massiw kesgitlenýär we ululygy 5 hökmünde görkezilýär. Toplumyň elementlerine [indeks] sintaksisine girip bolýar we aýratynlykda belläp bolýar. Bu mysalda 1, 2, 3, 4 we 5 bahalary degişlilikde massiw elementlerine bellenilýär we massiwiň ähli elementleri fmt.Println (a) jümlesini ulanyp ekrana çap edilýär.

Massiwleriň ululygy kesgitlenenden soň üýtgedilip bilinmez. Şeýle-de bolsa, Go dilindäki dil aýratynlyklary bilen massiw ululyklary üýtgedilip bilner. Bu aýratynlyk, Go dilinde dilim diýilýän maglumat gurluşy bilen amala aşyrylýar.

```golang
a := [5]int{1, 2, 3, 4, 5}
fmt.Println(a)
```

Bu mysalda a atly massiw kesgitlenýär we onuň elementlerine {1, 2, 3, 4, 5} berilýär. Toplumyň ululygy elementleriň sanyna deň bolmaly. Bu mysalda a atly massiw {1, 2, 3, 4, 5 values ​​bahalary bilen başlanýar we ähli elementleri ekrana çap edilýär.