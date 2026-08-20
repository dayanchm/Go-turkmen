# Logging

Go-nyň `log/slog` paketi strukturalaýyn log ýazmaga mümkinçilik berýär:

```go
package main

import (
	"log/slog"
	"os"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	logger.Info("server işe başlady", "port", 8080)
	logger.Error("sorag şowsuz boldy", "user_id", 42)
}
```

Logda parol, token ýa-da şahsy maglumat görkezme. `debug`, `info`, `warn`, `error` derejelerini maksadyna görä ulan.

