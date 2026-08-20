# Go Cheatsheet — türkmençe gysga gollanma

Bu sahypa Go diliniň iň köp ulanylýan sintaksisini çalt ýatlamak üçin niýetlenendir.

## Programma gurluşy

```go
package main

import "fmt"

func main() {
	fmt.Println("Salam, Go!")
}
```

```bash
go run .       # programmany işlet
go build       # executable faýl döret
go fmt ./...   # kody formatla
go test ./...  # testleri işlet
```

## Üýtgeýjiler we hemişelikler

```go
var name string = "Aman"
var age int
country := "Türkmenistan" // diňe funksiýanyň içinde

const Pi = 3.14159
const (
	StatusOK    = 200
	StatusError = 500
)
```

Nol bahalar:

| Görnüş | Nol baha |
|---|---|
| `int`, `float64` | `0` |
| `string` | `""` |
| `bool` | `false` |
| pointer, slice, map, channel, interface | `nil` |

## Esasy maglumat görnüşleri

```go
var enabled bool = true
var count int = 42
var price float64 = 19.95
var letter rune = 'Ş'
var data byte = 255
var message string = "Salam"
```

Görnüşi üýtgetmek:

```go
n := 42
f := float64(n)
s := strconv.Itoa(n)
value, err := strconv.Atoi("42")
```

## Şertler

```go
if age >= 18 {
	fmt.Println("Uly ýaşly")
} else {
	fmt.Println("Kämillik ýaşyna ýetmedik")
}
```

Gysga başlangyç şert:

```go
if value, ok := items["go"]; ok {
	fmt.Println(value)
}
```

## Switch

```go
switch day {
case "şenbe", "ýekşenbe":
	fmt.Println("Dynç güni")
default:
	fmt.Println("Iş güni")
}
```

Görnüşi barlamak:

```go
switch value := value.(type) {
case string:
	fmt.Println("setir:", value)
case int:
	fmt.Println("san:", value)
}
```

## For

```go
for i := 0; i < 5; i++ {
	fmt.Println(i)
}

for condition {
	// while görnüşi
}

for {
	break // çäksiz loop-dan çyk
}
```

## Array we slice

```go
numbers := [3]int{10, 20, 30}
names := []string{"Aman", "Mähri"}

names = append(names, "Myrat")
fmt.Println(len(names), cap(names))

part := names[0:2]
copyOfNames := append([]string(nil), names...)
```

`make` bilen slice:

```go
values := make([]int, 3)    // length 3
buffer := make([]byte, 0, 64) // length 0, capacity 64
```

## Map

```go
ages := map[string]int{
	"Aman":  24,
	"Mähri": 22,
}

ages["Myrat"] = 30
age, exists := ages["Aman"]
delete(ages, "Myrat")
clear(ages)
```

## Range

```go
for index, value := range names {
	fmt.Println(index, value)
}

for key, value := range ages {
	fmt.Println(key, value)
}

for _, value := range names { // indeks gerek däl
	fmt.Println(value)
}
```

## Funksiýalar

```go
func add(a, b int) int {
	return a + b
}

func divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, fmt.Errorf("nola bölüp bolmaýar")
	}
	return a / b, nil
}

func sum(values ...int) int {
	result := 0
	for _, value := range values {
		result += value
	}
	return result
}
```

## Closure

```go
func counter() func() int {
	count := 0
	return func() int {
		count++
		return count
	}
}
```

## Pointer

```go
value := 10
pointer := &value
*pointer = 20
fmt.Println(value) // 20
```

Go-da pointer arifmetikasy ýok.

## Struct

```go
type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

user := User{ID: 1, Name: "Aman"}
fmt.Println(user.Name)
```

## Method

```go
func (u User) Greeting() string {
	return "Salam, " + u.Name
}

func (u *User) Rename(name string) {
	u.Name = name
}
```

Maglumaty üýtgetmek üçin köplenç pointer receiver ulanylýar.

## Interface

```go
type Speaker interface {
	Speak() string
}

func printSpeech(s Speaker) {
	fmt.Println(s.Speak())
}
```

Görnüş gerekli method-lary ýerine ýetirse, interface-i awtomatik kanagatlandyrýar.

## Generikler

```go
type Number interface {
	~int | ~int64 | ~float64
}

func sumNumbers[T Number](values []T) T {
	var total T
	for _, value := range values {
		total += value
	}
	return total
}
```

## Ýalňyşlyklar

```go
result, err := doWork()
if err != nil {
	return fmt.Errorf("iş şowsuz: %w", err)
}
```

```go
if errors.Is(err, os.ErrNotExist) {
	// faýl ýok
}

var pathErr *os.PathError
if errors.As(err, &pathErr) {
	fmt.Println(pathErr.Path)
}
```

## Defer, panic we recover

```go
file, err := os.Open("data.txt")
if err != nil {
	return err
}
defer file.Close()
```

`panic` adaty ýalňyşlyk üçin däl, programma dowam edip bilmeýän ýagdaýlar üçin ulanylýar. `recover` diňe deferred funksiýanyň içinde panic-i saklap biler.

## Goroutine

```go
go func() {
	fmt.Println("Bir wagtda işleýär")
}()
```

Goroutine-yň tamamlanmagyna garaşmak:

```go
var wg sync.WaitGroup
wg.Add(1)

go func() {
	defer wg.Done()
	fmt.Println("iş")
}()

wg.Wait()
```

## Channel

```go
messages := make(chan string)

go func() {
	messages <- "taýýar"
}()

message := <-messages
fmt.Println(message)
```

Buffered channel:

```go
jobs := make(chan int, 5)
jobs <- 1
close(jobs)

for job := range jobs {
	fmt.Println(job)
}
```

## Select we timeout

```go
select {
case message := <-messages:
	fmt.Println(message)
case <-time.After(2 * time.Second):
	fmt.Println("wagt gutardy")
}
```

## Context

```go
ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
defer cancel()

select {
case <-ctx.Done():
	fmt.Println(ctx.Err())
case result := <-results:
	fmt.Println(result)
}
```

## Mutex we atomic

```go
var mu sync.Mutex
mu.Lock()
count++
mu.Unlock()
```

```go
var count atomic.Int64
count.Add(1)
fmt.Println(count.Load())
```

Data race barlagy:

```bash
go test -race ./...
```

## Faýllar

```go
data, err := os.ReadFile("data.txt")
if err != nil {
	return err
}

err = os.WriteFile("output.txt", data, 0644)
```

## JSON

```go
data, err := json.Marshal(user)
if err != nil {
	return err
}

var decoded User
err = json.Unmarshal(data, &decoded)
```

## HTTP client

```go
client := &http.Client{Timeout: 5 * time.Second}
response, err := client.Get("https://example.com")
if err != nil {
	return err
}
defer response.Body.Close()
```

## HTTP server

```go
mux := http.NewServeMux()
mux.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, `{"status":"ok"}`)
})

server := &http.Server{
	Addr:              ":8080",
	Handler:           mux,
	ReadHeaderTimeout: 5 * time.Second,
}

log.Fatal(server.ListenAndServe())
```

## Test

```go
func TestAdd(t *testing.T) {
	got := add(2, 3)
	if got != 5 {
		t.Fatalf("add(2, 3) = %d; 5 garaşylýardy", got)
	}
}
```

Table-driven test:

```go
func TestAdd(t *testing.T) {
	tests := []struct {
		a, b int
		want int
	}{
		{2, 3, 5},
		{-1, 1, 0},
	}

	for _, test := range tests {
		if got := add(test.a, test.b); got != test.want {
			t.Errorf("got %d; want %d", got, test.want)
		}
	}
}
```

## Go modullar

```bash
go mod init example.com/project
go get github.com/example/package
go mod tidy
go list -m all
```

## Peýdaly buýruklar

| Buýruk | Wezipesi |
|---|---|
| `go run .` | programmany işletmek |
| `go build ./...` | ähli paketleri build etmek |
| `go test ./...` | ähli testleri işletmek |
| `go test -cover ./...` | test coverage görkezmek |
| `go test -race ./...` | data race tapmak |
| `go test -bench=. ./...` | benchmark işletmek |
| `go fmt ./...` | kody formatlamak |
| `go vet ./...` | ähtimal ýalňyşlyklary barlamak |
| `go doc package.Name` | dokumentasiýany görmek |
| `go env` | Go gurşawyny görkezmek |

## Atlandyryş düzgüni

- Paket ady gysga, kiçi harp bilen we düşnükli bolmaly.
- Eksport edilýän at baş harp bilen başlanýar: `User`, `NewServer`.
- Eksport edilmeýän at kiçi harp bilen başlanýar: `user`, `newServer`.
- Getter üçin `GetName()` ýerine köplenç `Name()` ýazylýar.
- Interface ady köplenç hereket bilen gutarýar: `Reader`, `Writer`, `Closer`.
- Go kody hökman `gofmt` bilen formatlanmaly.

