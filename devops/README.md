# Go DevOps

## Multi-stage Dockerfile

```dockerfile
FROM golang:1.24-alpine AS build
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o /app ./cmd/api

FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=build /app /app
USER nonroot:nonroot
EXPOSE 8080
ENTRYPOINT ["/app"]
```

## GitHub Actions

```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
        with:
          go-version: "1.24.x"
          cache: true
      - run: go test -race ./...
      - run: go vet ./...
      - run: go build ./...
```

## Deploy checklist

- immutable image tag ulan;
- environment boýunça konfigurasiýany daşyndan geçir;
- liveness we readiness probe goş;
- CPU we memory limit belle;
- migration prosesini kesgitle;
- loglary stdout-a ýaz;
- rollback usulyny öňünden test et;
- image we dependency vulnerability scan işlet.

## Monitoring

Iň azyndan şu signallary ölçe:

- request sany we latency;
- error rate;
- CPU we memory;
- goroutine sany;
- database connection pool;
- queue uzynlygy.

