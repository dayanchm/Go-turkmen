# Defer

defer, Go dilinde ýörite açar söz bolup, belli bir funksiýa ýerine ýetirilenden soň ýerine ýetirilmeli funksiýalary ýa-da jümleleri kesgitlemek üçin ulanylýar. Gaýra goýlan jümleler, funksiýanyň soňunda näme bolandygyna garamazdan ýerine ýetiriler, ýagny bu funksiýa haýsydyr bir sebäp bilen bes edilse-de.

Gijikdirilen jümleleri ulanyp, bir funksiýanyň soňunda açylan faýllary, ýapylmadyk maglumat bazasy birikmelerini, tor birikmelerini we ş.m. aýyryp bilersiňiz. Ony çalt we ygtybarly ýapmak mümkin.

Mysal üçin, bir faýl açylýar we faýl funksiýanyň soňunda yza süýşürilýär:

```golang
package main

import (
	"fmt"
	"os"
)

func main() {
	// file açma
	f, err := os.Open("example.txt")
	if err != nil {
		fmt.Println(err)
		return
	}

	// file yapmak
	defer f.Close()

	// file okamak
	b := make([]byte, 1024)
	n, err := f.Read(b)
	if err != nil {
		fmt.Println(err)
		return
	}

	// file içindakini yazdyrmak
	fmt.Println(string(b[:n]))
}
```

Bu mysalda, "example.txt" faýly os.Open funksiýasyny ulanyp açylýar. Gaýra goýlan beýany ulanyp, faýlyň ýapylmagy funksiýanyň ahyrynda işlemeli. Soň bolsa, “Read” funksiýasyny ulanyp, faýlyň mazmuny okalýar we ekranda çap edilýär.

Bu ýerde bellemeli möhüm bir zat, yza süýşürme sözüniň ahyrynda ýazylmaly däldir. Gaýra goýlan beýany, faýly ýapmak üçin açýan jümle bilen bir blokda bolmaly. Otherwiseogsam, yza süýşürmek beýany funksiýa gutarýança garaşmagyny dowam etdirer.