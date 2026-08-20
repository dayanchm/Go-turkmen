# Go performance

Ilki ölçe, soň optimizasiýa et. Profil görmezden çaklama bilen optimizasiýa etmek köplenç peýdasyzdyr.

## Benchmark

```go
func BenchmarkJoin(b *testing.B) {
	values := []string{"Go", "Türkmençe", "Performance"}
	b.ReportAllocs()
	for b.Loop() {
		_ = strings.Join(values, " ")
	}
}
```

```bash
go test -bench=. -benchmem ./...
```

## CPU we memory profile

```bash
go test -bench=. -cpuprofile=cpu.out -memprofile=mem.out
go tool pprof cpu.out
go tool pprof -http=:8080 mem.out
```

## Execution trace

```bash
go test -trace=trace.out ./...
go tool trace trace.out
```

## Peýdaly düzgünler

- Slice ölçegi belli bolsa, capacity-ni öňünden belle.
- Setirleri köp birleşdirmek üçin `strings.Builder` ulan.
- Uly struct-y gereksiz kopýalama.
- Hot path-da reflection-dan gaça dur.
- I/O üçin buffering ulan.
- Goroutine sanyny çäklendir.
- `sync.Pool`-y diňe benchmark peýdasyny görkezse ulan.

```go
result := make([]User, 0, len(rows))
```

## Race we allocation

```bash
go test -race ./...
go test -gcflags="-m=2" ./...
```

Performance üýtgetmesiniň öňünden we soňundan benchmark netijesini sakla.

