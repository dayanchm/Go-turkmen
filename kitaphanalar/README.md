# Peýdaly Go kitaphanalary

Ilki Go-nyň standart kitaphanasyna seret. Daşarky paket diňe meseläni hakykatdan ýeňilleşdirýän bolsa goşulmalydyr.

## Standart kitaphana

| Paket | Maksady |
|---|---|
| `net/http` | HTTP client we server |
| `encoding/json` | JSON encode/decode |
| `database/sql` | SQL database interfeýsi |
| `context` | timeout we cancellation |
| `log/slog` | strukturalaýyn logging |
| `testing` | test we benchmark |
| `sync` | mutex, WaitGroup we Pool |
| `os` | faýl we operasion ulgam amallary |
| `io` | maglumat akymlary |
| `slices`, `maps` | generic kolleksiýa gurallary |

## Web we API

- [chi](https://github.com/go-chi/chi) — ýeňil HTTP router.
- [Gin](https://github.com/gin-gonic/gin) — giň ulanylýan web framework.
- [Echo](https://github.com/labstack/echo) — HTTP framework.
- [grpc-go](https://github.com/grpc/grpc-go) — Go üçin gRPC.

## Maglumat bazasy

- [pgx](https://github.com/jackc/pgx) — PostgreSQL driver we toolkit.
- [sqlc](https://github.com/sqlc-dev/sqlc) — SQL-den type-safe Go koduny döredýär.
- [GORM](https://github.com/go-gorm/gorm) — ORM.
- [goose](https://github.com/pressly/goose) — database migration.

## Test

- [testify](https://github.com/stretchr/testify) — assertion we mock gurallary.
- [gomock](https://github.com/uber-go/mock) — mock generator.
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) — integration test üçin container-lar.

## CLI we konfigurasiýa

- [Cobra](https://github.com/spf13/cobra) — CLI programmalary.
- [Viper](https://github.com/spf13/viper) — konfigurasiýa.
- [mpb](https://github.com/vbauerster/mpb) — birnäçe terminal progress bar-y.

## Observability

- [Prometheus client](https://github.com/prometheus/client_golang) — metrics.
- [OpenTelemetry Go](https://github.com/open-telemetry/opentelemetry-go) — tracing we telemetry.
- [Zap](https://github.com/uber-go/zap) — ýokary öndürijilikli logging.

## Paket saýlamak checklist-i

- aktiw goldanylýarmy;
- ygtyýarnamasy taslamaňa laýykmy;
- dokumentasiýasy we testleri barmy;
- dependency sany näçe;
- security meselesi barmy;
- standart kitaphana ýeterlik dälmi.

