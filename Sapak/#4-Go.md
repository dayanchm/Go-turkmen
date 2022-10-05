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
- <strong>PRİNT : </strong> 
```
oyunlar1: [Withcer PES CS:GO] 
oyunlar2: [Witcher PES CS:GO]
```
- Bir massiw kesgitlenende, massiwiň maglumat görnüşindäki nol bahasy, baha bermeýän her indeks üçin awtomatiki bellenilýär.
- Mysal üçin, ýokardaky 1-nji usuldaky massiwini ilkinji gezek kesgitlänimizde bir baha bellemedigimiz üçin, her indeksde setir maglumat görnüşiniň nol bahasy bolan boş setir (“”) bahasy bar.
 
```
package main

import (
 “fmt”
)

func main() {
 oyunlar := [3]string{}
 fmt.Printf(“oyunlar: %v \n”, oyunlar)
bayraklar := [3]bool{}
 fmt.Printf(“bayraklar: %v \n”, bayraklar)
sayilar := [3]int{}
 fmt.Printf(“sayilar: %v \n”, sayilar)
}
 ```
 - <strong>PRİNT:</strong>
 
 ```
oyunlar: [ ] // [“”, “”, “”]
bayraklar: [false false false] 
sayilar: [0 0 0]
 ```
