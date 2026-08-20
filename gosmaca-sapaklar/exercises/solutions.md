# Ýumuşlaryň nusgalyk çözgütleri

Bu çözgütler ýeke-täk dogry ýol däl. Ilki ýumşy özüň ýerine ýetirip gör.

## 1. Ýaşy barlamak

```go
func isAdult(age int) bool {
	return age >= 18
}
```

## 2. Iň uly bahany tapmak

```go
func max(values []int) (int, error) {
	if len(values) == 0 {
		return 0, fmt.Errorf("dilim boş")
	}
	result := values[0]
	for _, value := range values[1:] {
		if value > result {
			result = value
		}
	}
	return result, nil
}
```

## 3. Sözleri hasaplamak

```go
func wordCount(words []string) map[string]int {
	counts := make(map[string]int)
	for _, word := range words {
		counts[word]++
	}
	return counts
}
```

## 4. Iki goroutine-dan netije almak

```go
results := make(chan int, 2)
go func() { results <- 2 * 2 }()
go func() { results <- 3 * 3 }()
fmt.Println(<-results, <-results)
```

Netijeleriň çykyş tertibi üýtgäp biler, sebäbi goroutine-laryň haýsysynyň öň tamamlanjagy kepillendirilmeýär.

## 5. Faýldaky setirleriň sany

```go
file, err := os.Open("maglumat.txt")
if err != nil {
	log.Fatal(err)
}
defer file.Close()

scanner := bufio.NewScanner(file)
lines := 0
for scanner.Scan() {
	lines++
}
if err := scanner.Err(); err != nil {
	log.Fatal(err)
}
fmt.Println(lines)
```

## 6. Health endpoint

```go
http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, `{"status":"ok"}`)
})
log.Fatal(http.ListenAndServe(":8080", nil))
```

## 7. Table-driven test

```go
func TestSum(t *testing.T) {
	tests := []struct {
		a, b int
		want int
	}{
		{2, 3, 5},
		{-2, 2, 0},
		{0, 0, 0},
	}

	for _, test := range tests {
		if got := Sum(test.a, test.b); got != test.want {
			t.Errorf("Sum(%d, %d) = %d; %d garaşylýardy", test.a, test.b, got, test.want)
		}
	}
}
```

## 8. Todo API

Ilki todo modelini we maglumat saklaýjyny kesgitle, soň endpoint-leri böl:

| HTTP usuly | Salgy | Amal |
|---|---|---|
| `POST` | `/todos` | täze todo döretmek |
| `GET` | `/todos` | ähli todo-lary almak |
| `PUT` | `/todos/{id}` | todo-ny täzelemek |
| `DELETE` | `/todos/{id}` | todo-ny pozmak |

Her handler-de JSON maglumatyny, ID-ni we ýalňyşlyk ýagdaýyny barla. Soň handler-leri `httptest` bilen test et.
