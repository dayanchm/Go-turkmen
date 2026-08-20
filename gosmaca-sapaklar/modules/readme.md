# Paketler we modullar

Paket — bir maksada hyzmat edýän Go faýllarynyň toplumy. Modul bolsa bir ýa-da birnäçe paketi we olaryň baglylyklaryny dolandyrýar.

```bash
go mod init example.com/hasap
go mod tidy
go list ./...
```

Mysal gurluş:

```text
hasap/
├── go.mod
├── main.go
└── calculator/
    └── calculator.go
```

`calculator/calculator.go`:

```go
package calculator

func Add(a, b int) int {
	return a + b
}
```

Baş harply atlar (`Add`) beýleki paketlerden elýeterlidir, kiçi harply atlar bolsa diňe öz paketinde görünýär.

