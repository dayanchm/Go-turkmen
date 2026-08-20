# Go boýunça test

Bu test Go diliniň esasy temalaryny gaýtalamak üçin niýetlenendir. Her soragda diňe bir dogry jogap bar. Ilki jogaplaryňy belläp çyk, soň [dogry jogaplar](jogaplar.md) bilen deňeşdir.

## Başlangyç

### 1. Go programmasynyň başlangyç funksiýasy haýsy?

- A) `start()`
- B) `main()`
- C) `run()`
- D) `initApp()`

### 2. Üýtgeýjini gysga görnüşde haýsy operator bilen döredip bolýar?

- A) `=`
- B) `==`
- C) `:=`
- D) `=>`

### 3. Haýsy görnüş diňe `true` ýa-da `false` bahasyny kabul edýär?

- A) `string`
- B) `bool`
- C) `int`
- D) `byte`

### 4. Go-da gaýtalama üçin haýsy açar söz ulanylýar?

- A) `while`
- B) `loop`
- C) `repeat`
- D) `for`

### 5. Array bilen slice arasynda esasy tapawut näme?

- A) Slice diňe setir saklaýar
- B) Array-yň uzynlygy onuň görnüşiniň bir bölegidir
- C) Array hemişe boş bolýar
- D) Slice indeks bilen ulanylmaýar

## Funksiýalar we görnüşler

### 6. Funksiýadan ýalňyşlyk gaýtarmagyň adaty görnüşi haýsy?

- A) `func work() panic`
- B) `func work() (Result, error)`
- C) `func work() exception`
- D) `func work() catch`

### 7. Baş harply `User` ady nämäni aňladýar?

- A) Diňe şol faýlda görünýär
- B) Üýtgedip bolmaýar
- C) Beýleki paketlerden elýeterlidir
- D) Ol hökmany interface-dir

### 8. Closure näme?

- A) Faýly ýapýan funksiýa
- B) Daşky üýtgeýjilere ýüzlenip bilýän funksiýa
- C) Ýapyk channel
- D) Ýalňyşlygyň bir görnüşi

### 9. Interface nähili kanagatlandyrylýar?

- A) `implements` açar sözi bilen
- B) Gerekli usullary ýazmak bilen
- C) Diňe struct embedding bilen
- D) `interface` paketini import etmek bilen

### 10. `defer` bilen bellenen funksiýa haçan işleýär?

- A) Derrew
- B) Bir sagatdan soň
- C) Daşyny gurşap alan funksiýa tamamlananda
- D) Diňe ýalňyşlyk bolanda

## Goroutine we channel

### 11. Täze goroutine nähili başlanýar?

- A) `async work()`
- B) `thread work()`
- C) `go work()`
- D) `await work()`

### 12. Channel-yň wezipesi näme?

- A) Faýllary saklamak
- B) Goroutine-laryň arasynda maglumat geçirmek
- C) HTTP salgysyny döretmek
- D) Kody formatlamak

### 13. Ýapylan channel-dan maglumat okap bolýarmy?

- A) Ýok, programma hemişe ýykylýar
- B) Hawa, galan bahalar we soň görnüşiň nol bahasy alynýar
- C) Diňe `panic` bilen
- D) Diňe buffered däl channel-da

### 14. `select` näme üçin ulanylýar?

- A) Birnäçe channel amalynyň arasynda saýlamak üçin
- B) SQL soragyny ýazmak üçin
- C) Slice elementini saýlamak üçin
- D) Paket import etmek üçin

### 15. Data race näme?

- A) Iki testiň bir wagtda işlemegi
- B) Bir maglumat ýadyna birnäçe goroutine-yň goragsyz ýüzlenmegi we azyndan biriniň ýazmagy
- C) Channel-yň boş bolmagy
- D) Programma haýal işlemegi

## Kod soraglary

### 16. Bu kod näme çykarar?

```go
values := []int{2, 4, 6}
fmt.Println(len(values), cap(values))
```

- A) `2 6`
- B) `3 3`
- C) `3 6`
- D) `6 3`

### 17. Bu koduň netijesi näme?

```go
x := 10
p := &x
*p = 20
fmt.Println(x)
```

- A) `10`
- B) `20`
- C) `&20`
- D) Compile error

### 18. `map`-da ýok açary howpsuz barlamak üçin haýsy görnüş dogry?

- A) `value, ok := items[key]`
- B) `value := items.get(key)`
- C) `items.has(key)`
- D) `value := find(items, key)`

### 19. Test faýlynyň ady nähili gutarmaly?

- A) `.spec.go`
- B) `.go.test`
- C) `_test.go`
- D) `.testing.go`

### 20. Ähli paketleriň testini işletmek üçin haýsy buýruk ulanylýar?

- A) `go run tests`
- B) `go test ./...`
- C) `go check all`
- D) `go build test`

## Netijä baha bermek

- **18–20 dogry:** örän gowy
- **14–17 dogry:** gowy, käbir temalary gaýtala
- **10–13 dogry:** esaslary ýene bir gezek geç
- **0–9 dogry:** sapaklary tertip boýunça täzeden başla

