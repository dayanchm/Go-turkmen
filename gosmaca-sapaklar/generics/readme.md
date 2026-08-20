# Generikler

Generikler bir funksiýany birnäçe maglumat görnüşi bilen howpsuz ulanmaga mümkinçilik berýär.

```go
package main

import "fmt"

type Number interface {
	~int | ~int64 | ~float64
}

func Sum[T Number](values []T) T {
	var total T
	for _, value := range values {
		total += value
	}
	return total
}

func main() {
	fmt.Println(Sum([]int{2, 3, 5}))
	fmt.Println(Sum([]float64{1.5, 2.5}))
}
```

`T` görnüş parametridir, `Number` bolsa onuň kabul edip biljek görnüşlerini çäklendirýär.

