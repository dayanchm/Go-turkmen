# Context

`context` uzak dowam edýän işi ýatyrmak ýa-da möhlet bellemek üçin ulanylýar. Ol esasan HTTP, maglumat bazasy we goroutine-lar bilen peýdalydyr.

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	select {
	case <-time.After(2 * time.Second):
		fmt.Println("iş tamamlandy")
	case <-ctx.Done():
		fmt.Println("iş ýatyryldy:", ctx.Err())
	}
}
```

`context.Context` adatça funksiýanyň birinji parametri bolýar. Ony strukturada saklamak maslahat berilmeýär.

