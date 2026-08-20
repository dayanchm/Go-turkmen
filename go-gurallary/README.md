# Go gurallary

| Gural | Maksady |
|---|---|
| `gofmt` | kody standart formatda ýazmak |
| `goimports` | format we import-lary dolandyrmak |
| `go vet` | ähtimal ýalňyşlyklary tapmak |
| `go test` | test we benchmark işletmek |
| `go tool pprof` | CPU we memory profiling |
| `go tool trace` | runtime hadysalaryny görmek |
| `govulncheck` | belli vulnerability-lary tapmak |
| `staticcheck` | giňişleýin statiki analiz |
| `golangci-lint` | birnäçe linter-i bile işletmek |
| Delve (`dlv`) | Go debugger |

## Gündelik buýruklar

```bash
gofmt -w .
go vet ./...
go test -race -cover ./...
go mod tidy
go build ./...
```

## Debugger

```bash
dlv debug ./cmd/api
dlv test ./internal/service
```

Delve içinde `break`, `continue`, `next`, `print` we `locals` buýruklary peýdalydyr.

## Vulnerability barlagy

```bash
go install golang.org/x/vuln/cmd/govulncheck@latest
govulncheck ./...
```

## Makefile mysaly

```makefile
.PHONY: test lint build

test:
	go test -race -cover ./...

lint:
	go vet ./...
	staticcheck ./...

build:
	go build ./...
```

