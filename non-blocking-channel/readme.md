# Non-Blocking Channel Operations

Go dilinde kanallaryň bloklaýyş aýratynlyklary bar. Aagny, goroutin bir kanala habar ibermek ýa-da almak islese, degişli amal gutarýança petiklenýär. Şeýle-de bolsa, kanallaryň blokirlemeýän amallary saýlanan açar söz ulanyp hem amala aşyrylyp bilner.

```golang
package main

import "fmt"

func main() {
	messages := make(chan string)
	signals := make(chan bool)

	select {
	case msg := <-messages:
		fmt.Println("received message", msg)
	default:
		fmt.Println("no message received")
	}

	msg := "hello"
	select {
	case messages <- msg:
		fmt.Println("sent message", msg)
	default:
		fmt.Println("no message sent")
	}

	select {
	case msg := <-messages:
		fmt.Println("received message", msg)
	default:
		fmt.Println("no message received")
	}

	select {
	case sig := <-signals:
		fmt.Println("received signal", sig)
	default:
		fmt.Println("no signal received")
	}

	signal := true
	select {
	case signals <- signal:
		fmt.Println("sent signal", signal)
	default:
		fmt.Println("no signal sent")
	}

	select {
	case sig := <-signals:
		fmt.Println("received signal", sig)
	default:
		fmt.Println("no signal received")
	}
}
```


Bu mysalda habarlar atly bir kanal döredilýär we habar iberilmezden ozal habar alynmadyk habary çap etmek üçin saýlanan açar söz ulanylýar.

Ondan soň habar döredilýär we habarlar kanalyna iberilýär. Saýlanan açar söz ulanyp, iberilen habar salam habary ekranda çap edilýär.

Soňra, saýlanan açar söz ulanyp, habarlar kanalyndan habar alynýar. Şeýle-de bolsa, bu amal haýsydyr bir habar iberilmänkä ýerine ýetirilýändigi sebäpli, alnan habar ekranda çap edilmeýär.

Bu mysalda signallar atly kanal döredilýär we signal iberilmezden öň saýlanan açar söz alynmadyk habary çap etmek üçin ulanylýar.
Ondan soň signal döredilýär we signallar kanalyna iberilýär. Saýlanan açar söz ulanyp, iberilen signalyň habary ekranda çap edilýär.

Ahyrynda, saýlanan açar söz ulanyp, signallar kanalyndan signal alynýar. Şeýle-de bolsa, bu proses haýsydyr bir signal iberilmänkä ýerine ýetirilýändigi sebäpli ekranda "hiç hili signal alynmady" habary çap edilýär.

Çykyş:

```
no message received
sent message hello
no message received
no signal received
sent signal true
received signal true
```

Bu mysalda, saýlanan açar söz ulanyp, blokirlemezlik edilip bilner we kanallaryň petiklenmeginiň öňüni alyp bolar. Birden köp kanaly diňlemeli ýagdaýlarda bu peýdaly bolup biler.