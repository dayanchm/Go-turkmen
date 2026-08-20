# Goroutines

Goroutinler Go dilinde şol bir wagtyň özünde işleýär. Goroutines, açar söz ulanyp döredilýär we bir wagtyň özünde dürli amallary ýerine ýetirmek üçin ulanylýar.

```golang
package main

import (
	"fmt"
	"time"
)

func sayHello() {
	fmt.Println("Hello")
}

func main() {
	go sayHello() // goroutine
	time.Sleep(time.Second)
	fmt.Println("World")
}
```

Bu mysalda sayHello atly bir funksiýa kesgitlenýär we ekrana “Hello” atly habary çap edýär.

main funksiýonynda, sayHello funksiýa goroutin diýilýär. Şonuň üçin sayHello funksiýasynyň işi beýleki amallardan garaşsyz bolup geçýär. Wagt. Uky funksiýasy bir sekunt garaşmak möhletini goşýar. Ahyrynda ekranda “World” atly habar çap edilýär.

Çykyş:
```
Hello
World
```

Bu mysalda goroutini ulanyp, “Hello” funksiýasynyň sinhron ýerine ýetirilendigini aýdyň. “SayHello” funksiýasy goroutin diýlip atlandyrylandygy sebäpli, beýleki amallardan garaşsyz işledi we netijede “Hello” habary ekranda çap edilenden soň Dünýä habary çap edildi.