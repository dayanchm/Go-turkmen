# Worker Pools

Go dilinde, işçi howuzlary belli bir amal etmek üçin bölünip berlen işçiler toparydyr. Işler bir kanala iberilýär we bu işçiler tarapyndan işlenýär. Şeýlelik bilen, iş ýükleri amallary belli bir tertipde işçilere paýlamak arkaly paýlanýar.

```golang
package main

import (
	"fmt"
	"time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
	for j := range jobs {
		fmt.Println("Worker", id, "started job", j)
		time.Sleep(time.Second)
		fmt.Println("Worker", id, "finished job", j)
		results <- j * 2
	}
}

func main() {
	jobs := make(chan int, 100)
	results := make(chan int, 100)

	for w := 1; w <= 3; w++ {
		go worker(w, jobs, results)
	}

	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs)

	for a := 1; a <= 5; a++ {
		<-results
	}
}
```

Bu mysalda işçi diýilýän bir funksiýa döredilýär. Bu funksiýa işçiler tarapyndan ýerine ýetirilmeli amallary alýar we amallaryň netijelerini netijeler kanalyna ýazýar.

Işler atly bir kanal döredilýär we 100-e çenli iş ýükleri üçin bu kanala habar iberilip bilner. Netijeler atly bir kanal döredilýär we 100 netije üçin bu kanala habar iberilip bilner.

Aýlaw üçin ulanyp, işçiler üçin goroutin döredilýär. Işçiler, işçi funksiýasyna geçirilen ID, iş we netijeler üýtgeýjilerini ulanyp işleýärler.

Indiki aýlaw üçin ulanyp, 5 iş ýüki döredilýär we iş kanalyna iberilýär. Closeakyn funksiýany ulanmak bilen iş kanaly ýapylýar.

Ahyrynda, aýlaw üçin ulanyp, netijeler netijeler kanalyndan alynýar.

Çykyş:

```
Worker 3 started job 1
Worker 2 started job 2
Worker 1 started job 3
Worker 3 finished job 1
Worker 3 started job 4
Worker 2 finished job 2
Worker 1 finished job 3
Worker 1 started job 5
Worker 2 started job 6
Worker 3 finished job 4
Worker 2 finished job 6
Worker 1 finished job 5
```