# Go interview taýýarlygy

## Dil boýunça soraglar

1. Array bilen slice arasynda nähili tapawut bar?
2. `make` bilen `new` näme tapawut edýär?
3. Pointer receiver haçan ulanylýar?
4. Interface nähili implicit kanagatlandyrylýar?
5. `nil` interface bilen içinde nil pointer bolan interface bir zatmy?
6. Error wrapping näme we `%w` haçan ulanylýar?

## Concurrency

1. Goroutine OS thread-den näme bilen tapawutlanýar?
2. Buffered we unbuffered channel nähili işleýär?
3. Channel-y kim ýapmaly?
4. Deadlock bilen data race näme tapawut edýär?
5. `select` we `context.Context` haçan ulanylýar?
6. Worker pool-y nähili gurarsyň?

## Backend

1. HTTP server üçin timeout-lar näme üçin gerek?
2. Graceful shutdown nähili edilýär?
3. SQL injection-dan nähili goranmaly?
4. Transaction haçan gerek?
5. Idempotency näme?
6. Cache invalidation meselesini nähili çözersiň?

## Amaly tabşyryklar

- thread-safe in-memory cache ýaz;
- rate limiter taýýarla;
- iki tertipleşdirilen slice-i birleşdir;
- HTTP handler üçin test ýaz;
- ýalňyş concurrency kodundaky data race-i tap.

Jogap bereniňde diňe kesgitleme aýtma: kiçi kod mysaly, trade-off we hakyky ulanylyş ýagdaýyny düşündir.

