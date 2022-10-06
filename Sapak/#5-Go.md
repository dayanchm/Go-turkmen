# <div align="center">5# Go Programirleme Dili — Slice </div>

- <strong>Slice</strong>'lar, birden köp maglumatlary saklap bilýän, massiwleriň superseti hökmünde görüp bilýän massiwlere meňzeş görnüşlerdir. Toplumlar ýaly, ýekeje maglumat görnüşiniň elementleri bar we elementleriň maglumat görnüşi kesgitlenende kesgitlenýär. Ony massiwlerden tapawutlandyrýan iň möhüm aýratynlyk, ululygynyň üýtgemegidir. Kesgitleme wagtynda ululygy görkezilmeýär we kesgitlemeden soň näçe element goşup bileris.

```
func main() {
 carArray := [3]string {“BMW”, “Ferrari”, “Opel”}
 carSlice := []string {“BMW”, “Ferrari”, “Opel”}
}
```

- Languagehli dil aýlaw amallaryny, massiwlerdäki ýaly gaýtalama amallarynda ulanyp bileris.

```
for index, carBrand := range carSlice {
 fmt.Println(index, carBrand)
}
```
- Dilimleriň gurluş taýdan 3 sany esasy maglumatlary bar. Bular dilimiň uzynlygy, kuwwaty we içindäki maglumatlary saklaýan massiwdir. Täze görnüş hökmünde döretjek bolsak, ony şeýle kesgitläp bilerdik:

```
type slice struct {
 Length int
 Capacity int
 Array [10]array
}
```
- Aslynda, dilim görnüşiniň esasy gurluşy beýle bir ýönekeý däl, ýöne has aňsat düşünmek üçin bu hakda iň ýönekeý pikir edip bileris.

- Dilimleriň kuwwaty 0-dan başlaýar we 2-e köpelip, mazmunyna elementleriň sanyny goşmak bilen ýokarlanýar. (0,1,2,4,8,16….).

- Slice'lar täze elementler goşmak üçin <strong>append () </strong> funksiýasyny ulanýarys. Bu funksiýa ilkinji parametr hökmünde elementiň goşuljak dilimini alýar. Ondan soň, goşulmaly elementler funksiýa, birin-birin ýa-da massiw / dilim hökmünde, aralaryna vergi goýup geçirilýär.

- Dilime täze elementler goşulandan soň, dilimiň göwrümi elementleriň umumy sanyna ýeterlik bolsa, elementler degişli indekslere ýerleşdirilýär. Şeýle-de bolsa, häzirki kuwwatyndan ýokary bolsa, dilimiň täze ululygyny ýapyp bilýän iň kiçi ululygy 2 esse bolan täze massiw döredilýär we elementler bu massiwine geçirilýär.

- Indi dürli usullar bilen dilime täze elementler goşalyň. Şol aralykda, dilimiň ululygynyň we kuwwatynyň bahasynyň üýtgemegine syn edeliň.

- Bu ýerde iki sany täze funksiýany ulanarys. Bulardan len (), dilimiň ululygyny we gapagyny () kuwwatyny berýän funksiýalardyr.
