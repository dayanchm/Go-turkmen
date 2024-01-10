# Sorting

Sort paketi Golangda sortlamak üçin ulanylýar. Bu paket dürli maglumat görnüşlerine mahsus sortlaşdyryş amallaryny ýerine ýetirmek funksiýalaryny öz içine alýar.

Iň köp ulanylýan sortlaşdyryş funksiýalary sort.Ints () we sort.Strings (). Sort.Ints () funksiýasy int görnüşiniň dilimini kiçisinden ululygyna tertipleýär. Sort.Strings () funksiýasy setir görnüşiniň böleklerini elipbiý boýunça tertipleýär.

Mundan başga-da, sort.Float64s () funksiýasy sort paketinde hem bar we float64 görnüşli dilimini kiçisinden ululygyna tertipleşdirýär.

Mundan başga-da, sort.Slice () funksiýasy bilen ýörite sortlaşdyryş amallary ýerine ýetirilip bilner. Bu usul bir dilim we has az funksiýa alýar. Has az funksiýa iki dilim elementini deňeşdirmek üçin ulanylýar we elementleriň tertibi netijä esaslanýar. Bu funksiýa, dilim elementlerine esaslanýan ýörite sortlaşdyryş amallaryny ýerine ýetirmek üçin ulanylyp bilner.

Mysal üçin, aşakdaky mysalda sort.Slice () funksiýasyny ulanyp, ýörite tertipleşdiriş amallary ýerine ýetirilýär:

```golang
package main

import (
	"fmt"
	"sort"
)

type Person struct {
	Name string
	Age  int
}

func main() {
	people := []Person{
		{"Alice", 25},
		{"Bob", 30},
		{"Charlie", 20},
	}

	sort.Slice(people, func(i, j int) bool {
		return people[i].Age < people[j].Age
	})

	fmt.Println(people)
}
```

Bu mysalda Şahsy görnüşiň bir bölegi kesgitlenýär we sort.Slice () funksiýasy, ýaş meýdanyna görä kiçiden ulusyna tertiplemek üçin ulanylýar.

Çykyş:

```
[{Charlie 20} {Alice 25} {Bob 30}]
```

## Diğer Örnekler

İlk örnekte, sort.Ints() fonksiyonu kullanılarak ints adlı bir slice küçükten büyüğe doğru sıralanır ve sonuç ekrana yazdırılır:

```golang
package main

import (
	"fmt"
	"sort"
)

func main() {
	ints := []int{5, 2, 7, 1, 9, 3, 8, 6, 4}
	sort.Ints(ints)
	fmt.Println(ints)

	if sort.IntsAreSorted(ints) {
		fmt.Println("Slice is sorted.")
	} else {
		fmt.Println("Slice is not sorted.")
	}
}
```

Çıktı:

```
[1 2 3 4 5 6 7 8 9]
Slice is sorted.
```

İkinci örnekte ise sort.Strings() fonksiyonu kullanılarak strings adlı bir slice alfabetik olarak sıralanır ve sonuç ekrana yazdırılır:

```golang
package main

import (
	"fmt"
	"sort"
)

func main() {
	strings := []string{"apple", "banana", "cherry", "date", "elderberry", "fig"}
	sort.Strings(strings)
	fmt.Println(strings)

	if sort.StringsAreSorted(strings) {
		fmt.Println("Slice is sorted.")
	} else {
		fmt.Println("Slice is not sorted.")
	}
}
```

Çıktı:

```
[apple banana cherry date elderberry fig]
Slice is sorted.
```