# Faýllary okamak we ýazmak

Kiçi faýl üçin `os.ReadFile` we `os.WriteFile` ýeterlikdir:

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	if err := os.WriteFile("habar.txt", []byte("Salam!\n"), 0644); err != nil {
		panic(err)
	}

	data, err := os.ReadFile("habar.txt")
	if err != nil {
		panic(err)
	}
	fmt.Print(string(data))
}
```

Uly faýllary bölekleýin işlemek üçin `bufio.Scanner` ýa-da `bufio.Reader` ulanmak ýady tygşytlaýar. Faýly açanyňdan soň `defer file.Close()` etmegi unutma.

