# 💻 CLI Developer öwreniş ýoly

**Dereje:** Başlangyç / Orta  
**Maksat:** Go bilen terminal programmalaryny döretmegi öwrenmek  
**Öňünden bilmeli:** Go-nyň esasy düşünjeleri

---

## 1. Command-line arguments

Terminaldan programma argument ibermegi öwreniň.

Mysal:

```bash
go run main.go salam
```

Go-da:

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println(os.Args)
}
```

---

## 2. Flags

Go-nyň standart `flag` paketini öwreniň.

Mysal:

```bash
go run main.go --name Dayanch
```

Go:

```go
package main

import (
	"flag"
	"fmt"
)

func main() {
	name := flag.String("name", "", "Ulanyjynyň ady")

	flag.Parse()

	fmt.Println(*name)
}
```

---

## 3. Funksiýalar

CLI programmasyny kiçi we düşnükli funksiýalara bölmegi öwreniň.

Mysal:

```go
func addTask(name string) {
	// ...
}

func listTasks() {
	// ...
}

func deleteTask(id int) {
	// ...
}
```

---

## 4. Error handling

CLI programmalarynda ýalňyşlyklary dogry dolandyrmagy öwreniň.

```go
if err != nil {
	fmt.Println("Ýalňyşlyk:", err)
	return
}
```

Temalar:

- `error`
- `errors.Is`
- `errors.As`
- Error wrapping
- Exit codes

---

## 5. Faýllar bilen işlemek

Go bilen:

- faýl döretmek;
- faýl okamak;
- faýla ýazmak;
- faýly pozmak;
- kataloglar bilen işlemek

ýaly amallary öwreniň.

Esasy paketler:

```text
os
io
bufio
path/filepath
```

---

## 6. JSON

CLI programmasynyň maglumatlaryny JSON faýlynda saklamagy öwreniň.

Mysal:

```json
[
  {
    "id": 1,
    "title": "Go öwrenmek",
    "done": false
  }
]
```

Go-da:

```go
json.Marshal(data)
json.Unmarshal(data, &result)
```

---

## 7. HTTP Client

CLI programmadan web API-lara request ibermegi öwreniň.

```go
resp, err := http.Get("https://example.com")
```

Munuň bilen:

- API client
- Weather CLI
- HTTP checker
- GitHub utility

ýaly programmalar döredilip bilner.

---

## 8. Context

Uzak wagt dowam edýän amallary dolandyrmak üçin `context` ulanmagy öwreniň.

Temalar:

- Cancellation
- Timeout
- Deadline

---

## 9. Testing

CLI programmasynyň logikasyny test etmegi öwreniň.

```bash
go test ./...
```

CLI logikasyny terminal giriş-çykyşyndan mümkin boldugyça aýratyn saklamak test ýazmagy aňsatlaşdyrýar.

---

## Amaly taslamalar

### 1. Calculator CLI

```bash
calc add 10 20
```

Netije:

```text
30
```

### 2. Todo CLI

```bash
todo add "Go öwrenmek"
todo list
todo done 1
todo delete 1
```

### 3. HTTP Status Checker

```bash
checker https://example.com
```

Netije:

```text
200 OK
```

### 4. JSON Formatter

```bash
jsonfmt data.json
```

### 5. File Search Tool

```bash
findfile README.md
```

---

## Indiki ädim

CLI ýoluny tamamlandan soň:

[⚡ Concurrency →](concurrency.md)