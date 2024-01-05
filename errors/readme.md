# Errors

Go dilindäki error diýilýän maglumat görnüşini ulanyp amala aşyrylýar. Erroralňyşlyk maglumat görnüşi, error habaryny ýa-da nil bahasyny yzyna gaýtaryp berýän funksiýadan gaýtarylan bahalary gaýtadan işlemek üçin ulanylýar.

```golang
package main

import (
	"errors"
	"fmt"
)

func divide(x, y float64) (float64, error) {
	if y == 0 {
		return 0, errors.New("Cannot divide by zero")
	}
	return x / y, nil
}

func main() {
	result, err := divide(10, 2)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(result)
	}

	result, err = divide(10, 0)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(result)
	}
}
```

Bu mysalda bölmek diýilýän bir funksiýa kesgitlenýär we iki san bölýär. Şeýle-de bolsa, ikinji san 0 bolsa, ýalňyşlyk gaýtarylýar.

Esasy funksiýada bölmek funksiýasy iki dürli parametr bilen atlandyrylýar. Her jaňyň netijesi err diýilýän säwlik üýtgeýjisini ulanyp barlanýar. Analňyşlyk bar bolsa, error habary ekranda çap edilýär. Otherwiseogsam, netije ekrana çap edilýär.

Çıktı:
```
5 <nil>
Cannot divide by zero
```

Bu mysalda säwlik ulanyp, ýalňyşlary dolandyrmagyň mysaly edilýär. Bölünmek funksiýasy, ikinji parametri 0 bolsa, ýalňyşlyk görkezýär. Esasy funksiýada, her jaňyň netijesi err diýilýän säwlik üýtgeýjisi bilen barlanýar. Analňyşlyk bar bolsa, säwlik habary ekranda çap edilýär. Otherwiseogsam, netije ekrana çap edilýär.