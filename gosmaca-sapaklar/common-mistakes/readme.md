# Köp duş gelýän ýalňyşlyklar

- Ýalňyşlygy `_` bilen taşlamak: möhüm `error` bahalaryny barla.
- Goroutine başlatmak, ýöne ony ýatyrmazlyk: `context` ýa-da channel bilen ömrüni dolandyr.
- `defer`-i uly loop içinde ulanmak: resurslaryň giç ýapylmagyna sebäp bolup biler.
- Bir `map`-a birnäçe goroutine-dan goragsyz ýazmak: `sync.Mutex` ýa-da ýörite goroutine ulan.
- Slice goşulanda öňki esasy massiwiň üýtgäp biljekdigini unutmak: zerur bolsa `copy` et.
- HTTP jogabynyň bedenini ýapmazlyk: `defer resp.Body.Close()` ulan.
- Timeout goýmazdan HTTP client ýa-da server ulanmak.
- Parol we tokenleri Git repozitoriýasyna goşmak.
- `panic`-i adaty ýalňyşlyk dolandyryşy hökmünde ulanmak.

