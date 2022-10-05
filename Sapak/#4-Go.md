# <div align="center">Programmirleme diline geçiň - Diziler </div> 

- Toplumlar, beýleki dillerden tanyş we birnäçe bahany öz içine alyp bilýän gurluşlardyr. Bir massiw kesgitlenende, düzümindäki elementleriň maglumat görnüşi we massiwiň ululygy (ýagny elementleriň iň köp mukdary) görkezilýär. Kesgitlenen maglumat görnüşi we massiw ölçegi soň üýtgedilip bilinmez.

- Go dilindäki massiwleriň ähmiýetiniň biri, dil diline degişli Go diline mahsus gurluşlaryň esasyny düzmegidir. Bu meseläni indiki ýazgymda çözmekçi.

- Elementiň bahasyna indeks belgisi bilen massiwiň islendik indeksinde ýetip bileris. Againene-de = operatoryň kömegi bilen isleýän indeksimizdäki maglumatlaryň bahasyny belläp bileris.

- Mysal massiwini kesgitlemek üçin iň esasy kesgitleme nusgasy aşakdakylardyr.

```
değişken_adi := [dizi_boyutu]veri_tipi{}
değişken_adi := [dizi_boyutu]veri_tipi{deger1, deger2… degerN}
```

- Indi, bu nagyşlara laýyklykda, oýunlar, setir görnüşi we 3 elementiň ululygy atly massiwiň bahasyny kesgitläliň we belläliň.

```
package maiN

import (
 “fmt”
)

func main() {
 // 1
 oyunlar1 := [3]string{}
 oyunlar1[0] = “Withcer”
 oyunlar1[1] = “PES”
 oyunlar1[2] = “CS:GO”
 fmt.Printf(“oyunlar1: %v \n”, oyunlar1)
// 2
 oyunlar2 := [3]string{“Witcher”, “PES”, “CS:GO”}
 fmt.Printf(“oyunlar2: %v\n”, oyunlar2)
}
```
