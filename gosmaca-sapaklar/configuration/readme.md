# Konfigurasiýa we environment variables

Parol, token we maglumat bazasynyň salgysy ýaly maglumatlary koda ýazma. Olary gurşaw üýtgeýjilerinden al:

```go
package main

import (
	"log"
	"os"
)

func requiredEnv(name string) string {
	value := os.Getenv(name)
	if value == "" {
		log.Fatalf("%s kesgitlenmedi", name)
	}
	return value
}

func main() {
	databaseURL := requiredEnv("DATABASE_URL")
	_ = databaseURL
}
```

Terminalda `DATABASE_URL=... go run .` diýip baha berip bolýar. `.env` faýly ulansaň, ony `.gitignore` içine goş.

