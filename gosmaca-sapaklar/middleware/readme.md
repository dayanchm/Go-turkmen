# Middleware

Middleware HTTP soragyny handler-e ýetmezden öň ýa-da jogapdan soň işleýär. Ol logging, autentifikasiýa we CORS üçin ulanylýar.

```go
func logging(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		log.Printf("%s %s %s", r.Method, r.URL.Path, time.Since(start))
	})
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Baş sahypa")
	})
	log.Fatal(http.ListenAndServe(":8080", logging(mux)))
}
```

Middleware bir işi ýerine ýetirsin we zerur bolmasa global ýagdaý ulanmasyn.

