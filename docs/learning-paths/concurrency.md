# ⚡ Go Concurrency öwreniş ýoly

**Dereje:** Orta  
**Maksat:** Go-da birnäçe işi bir wagtda netijeli dolandyrmagy öwrenmek  
**Öňünden bilmeli:** Funksiýalar, struct, interface we error handling

---

## 1. Goroutine

Goroutine — Go-da funksiýany concurrent görnüşde işletmegiň esasy usullarynyň biridir.

Adaty:

```go
doWork()
```

Goroutine hökmünde:

```go
go doWork()
```

Birnäçe işi bir wagtda işletmek üçin goroutine-lary nähili ulanmalydygyny öwreniň.

---

## 2. Channel

Goroutine-laryň arasynda maglumat geçirmek üçin channel ulanmagy öwreniň.

```go
ch := make(chan string)
```

Maglumat ibermek:

```go
ch <- "Salam"
```

Maglumat almak:

```go
message := <-ch
```

---

## 3. Buffered Channel

Buffered channel belli mukdarda maglumaty wagtlaýyn saklap bilýär.

```go
ch := make(chan string, 3)
```

Öwrenilmeli:

- Unbuffered channel
- Buffered channel
- Channel capacity
- Channel blocking

---

## 4. Select

Birnäçe channel bilen bir wagtda işlemek üçin `select` ulanylýar.

```go
select {
case msg := <-messages:
	fmt.Println(msg)

case <-ctx.Done():
	return
}
```

Şeýle hem timeout bilen ulanmagy öwreniň.

---

## 5. Synchronization

Birnäçe goroutine umumy maglumat bilen işlände synchronization zerur bolup biler.

Öwrenilmeli:

- `sync.Mutex`
- `sync.RWMutex`
- `sync.WaitGroup`
- `sync.Once`
- Atomic operations

---

## 6. Context

`context` paketini öwreniň.

Esasy düşünjeler:

- Cancellation
- Timeout
- Deadline

Mysal:

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()
```

Timeout:

```go
ctx, cancel := context.WithTimeout(
	context.Background(),
	5*time.Second,
)

defer cancel()
```

---

## 7. Worker Pool

Köp işleri birnäçe worker arasynda paýlamagy öwreniň.

Gurluşy:

```text
Jobs
 │
 ▼
Channel
 │
 ├── Worker 1
 ├── Worker 2
 ├── Worker 3
 │
 ▼
Results
```

Worker pool uly mukdardaky işleri dolandyrmak üçin peýdalydyr.

---

## 8. Race Condition

Birnäçe goroutine şol bir maglumat bilen nädogry işlände race condition ýüze çykyp biler.

Go-nyň race detector-y:

```bash
go test -race ./...
```

ýa-da:

```bash
go run -race main.go
```

Race condition-lary tapmagy we düzetmegi öwreniň.

---

## 9. Concurrency Patterns

Has soňra şu pattern-lary öwreniň:

- Worker Pool
- Pipeline
- Fan-out
- Fan-in
- Cancellation
- Timeout

---

## Jemleýji taslama

Concurrent HTTP Checker dörediň.

Programma birnäçe URL-ni kabul etmeli:

```text
https://example.com
https://go.dev
https://github.com
```

we olary concurrent görnüşde barlamaly.

Mysal netije:

```text
example.com   → 200 OK
go.dev        → 200 OK
github.com    → 200 OK
```

Gurluş:

```text
URLs
 ↓
Jobs Channel
 ↓
Workers
 ↓
HTTP Requests
 ↓
Results Channel
 ↓
Netije
```

---

## Indiki ädim

Concurrency ýoluny tamamlandan soň:

[🔴 Ösen Go →](advanced.md)