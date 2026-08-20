# Range over Channels

Go dilinde, Aralyk açar söz, aýlaw amallaryny kanallarda ýerine ýetirmäge mümkinçilik berýär. Bu usul bilen, ähli habarlary kanalyň ýapylmagyna garaşman, aýlaw üçin alyp bolýar.

```golang
package main

import "fmt"

func main() {
	queue := make(chan string, 2)
	queue <- "one"
	queue <- "two"
	close(queue)

	for elem := range queue {
		fmt.Println(elem)
	}
}
```

Bu mysalda nobat atly kanal döredilýär. Aýlawdan peýdalanyp, nobat kanalyna iki habar iberilýär.

Ueakyn funksiýany ulanmak bilen nobat kanaly ýapylýar. Soňra aýlaw üçin ulanyp, nobat kanalynyň habarlary aralyk açar söz bilen alynýar.

Çykyş:

```golang
one
two
```

Bu mysalda, aralyk açar söz ulanyp, nobat kanalyna iberilen habarlar alynýar. Ueakyn funksiýany ulanmak bilen nobat kanaly ýapylýar. Şeýle-de bolsa, aralyk açar söz ulanyp, ähli habarlar alynýar.