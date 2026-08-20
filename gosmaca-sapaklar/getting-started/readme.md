# Go gurmak we ilkinji programmany işletmek

Go dilini [go.dev/dl](https://go.dev/dl/) sahypasyndan operasion ulgamyňa görä ýükläp gur. Soň terminalda şuny barla:

```bash
go version
```

Täze taslama döretmek üçin:

```bash
mkdir salam-go
cd salam-go
go mod init example.com/salam-go
```

`main.go` faýly:

```go
package main

import "fmt"

func main() {
	fmt.Println("Salam, Türkmenistan!")
}
```

Programmany `go run .` bilen işlet, `go build` bilen bolsa ýerine ýetirilýän faýla öwür.

