# Closing Channels

Go dilinde, kanallary ýapmak, habar ibermek bilen kabul etmegiň arasynda sinhronlaşmagy üpjün edýän usuldyr. Closeakyn funksiýany ulanyp bir kanal ýapylyp bilner. Closedapyk kanala hiç hili habar iberilip bilinmez we bu kanaldan başga habar gelip bilmez.

```golang
package main

import "fmt"

func main() {
	jobs := make(chan int, 5)
	done := make(chan bool)

	go func() {
		for {
			j, more := <-jobs
			if more {
				fmt.Println("received job", j)
			} else {
				fmt.Println("received all jobs")
				done <- true
				return
			}
		}
	}()

	for j := 1; j <= 3; j++ {
		jobs <- j
		fmt.Println("sent job", j)
	}

	close(jobs)
	fmt.Println("sent all jobs")

	<-done
}
```

Bu mysalda iş atly bir kanal we ýerine ýetirilen bir kanal döredilýär. Goroutini ulanyp, iş kanalyndan habarlar alynýar.

Aýlaw üçin ulanyp, iş kanalyna üç habar iberilýär. Saýlanan açar söz ulanyp, habar iberilende iberilen iş habary ekranda çap edilýär.

Soň bolsa, ýakyn kanaldan peýdalanyp, iş kanaly ýapylýar. Bu amal ýerine ýetirilende, iberilen ähli iş habary ekranda çap edilýär.

Edilen kanaly ulanyp, iberilen habarlaryň hemmesiniň alnandygy barlanýar. Geçirilen kanal goroutiniň dolydygyny görkezýär.

Çykyş:

```
sent job 1
sent job 2
sent job 3
sent all jobs
received job 1
received job 2
received job 3
received all jobs
```

Bu mysalda habarlar iş kanalyna iberilýär we goroutine bu habarlary almaga rugsat berilýär. Soň bolsa, ýakyn kanaldan peýdalanyp, iş kanaly ýapylýar. Bu amal ýerine ýetirilende, goroutiniň kabul edilmeli ähli habarlary alandygy barlanýar.