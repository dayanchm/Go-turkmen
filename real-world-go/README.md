# Real-world Go

Bu bölüm production-da ulanylýan Go programmalarynyň gurluşyna we amaly düzgünlerine bagyşlanýar.

## Esasy ýörelgeler

- `context.Context`-i uzak amallaryň birinji parametri hökmünde geçir.
- Her network soragyna timeout goý.
- Ýalňyşlygy `%w` bilen kontekst goşup gaýtar.
- Dependency-leri constructor arkaly geçir.
- Global mutable ýagdaýdan gaça dur.
- Logda parol, token we şahsy maglumat görkezme.
- Graceful shutdown goş.
- Health we readiness endpoint-lerini aýratyn et.

## Programma gurluşy

```text
project/
├── cmd/api/main.go
├── internal/handler/
├── internal/service/
├── internal/repository/
├── internal/config/
├── migrations/
├── go.mod
└── README.md
```

## Graceful shutdown

```go
server := &http.Server{
	Addr:              ":8080",
	Handler:           handler,
	ReadHeaderTimeout: 5 * time.Second,
}

go func() {
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}
}()

signals := make(chan os.Signal, 1)
signal.Notify(signals, os.Interrupt, syscall.SIGTERM)
<-signals

ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
defer cancel()
if err := server.Shutdown(ctx); err != nil {
	log.Printf("shutdown: %v", err)
}
```

## Strukturalaýyn logging

```go
logger.InfoContext(ctx, "sargyt döredildi",
	"order_id", order.ID,
	"duration_ms", time.Since(start).Milliseconds(),
)
```

## Health endpoint

```go
mux.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, `{"status":"ok"}`)
})
```

## Production checklist

- konfigurasiýa environment variables-den alynýar;
- HTTP we database timeout-lary bar;
- migration awtomatiki ýa-da aýratyn job arkaly işledilýär;
- log, metric we trace bar;
- backup we rollback meýilnamasy bar;
- race detector we integration test CI-da işleýär;
- container root däl ulanyjy bilen işleýär.

