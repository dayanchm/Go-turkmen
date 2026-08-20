# HTTP server we REST API

Go-nyň standart `net/http` paketi bilen goşmaça framework ulanmazdan API döredip bolýar.

```go
package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Message struct {
	Text string `json:"text"`
}

func hello(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "usul rugsat berilmeýär", http.StatusMethodNotAllowed)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(Message{Text: "Salam!"})
}

func main() {
	http.HandleFunc("/api/salam", hello)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

`go run .` diýip işlet-de, `http://localhost:8080/api/salam` salgysyny aç. Hakyky API-de girýän maglumatlary barla, status kodlaryny dogry ulan we server üçin timeout belle.

