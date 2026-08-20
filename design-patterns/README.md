# Design Patterns — Go dilinde

Design pattern — programmirlemede ýygy duş gelýän meseläniň gaýtadan ulanyp bolýan çözgüt nusgasydyr. Pattern taýýar kod däl; ol kody nähili guramalydygyny görkezýän pikir we gurluşdyr.

> Pattern-i diňe zerur bolanda ulan. Kiçi meselä gereksiz gatlak goşmak kody çylşyrymlaşdyrýar.

## Pattern toparlary

| Topar | Maksady | Mysallar |
|---|---|---|
| Creational | obýekt döretmegi dolandyrmak | Factory, Builder, Singleton |
| Structural | görnüşleri bilelikde guramak | Adapter, Decorator, Facade |
| Behavioral | obýektleriň aragatnaşygyny dolandyrmak | Strategy, Observer, Command |
| Go idioms | Go diline mahsus çözgütler | Functional Options, Middleware, Worker Pool |

## Factory

Factory gerekli implementasiýany döretmek işini bir ýerde saklaýar.

```go
package notification

import "fmt"

type Sender interface {
	Send(message string) error
}

type EmailSender struct{}

func (EmailSender) Send(message string) error {
	fmt.Println("email:", message)
	return nil
}

type SMSSender struct{}

func (SMSSender) Send(message string) error {
	fmt.Println("sms:", message)
	return nil
}

func NewSender(kind string) (Sender, error) {
	switch kind {
	case "email":
		return EmailSender{}, nil
	case "sms":
		return SMSSender{}, nil
	default:
		return nil, fmt.Errorf("näbelli sender: %s", kind)
	}
}
```

Ulanylyşy:

```go
sender, err := notification.NewSender("email")
if err != nil {
	log.Fatal(err)
}
sender.Send("Hoş geldiňiz")
```

Haçan ulanmaly:

- döredilmeli görnüş konfigurasiýa bagly bolsa;
- dörediş logikasy çylşyrymly bolsa;
- ulanyjy konkret implementasiýany bilmeli däl bolsa.

## Builder

Builder köp parametrli ýa-da birnäçe ädimde döredilýän gurluş üçin peýdalydyr.

```go
type Request struct {
	Method  string
	URL     string
	Headers map[string]string
	Body    []byte
}

type RequestBuilder struct {
	request Request
}

func NewRequestBuilder(method, url string) *RequestBuilder {
	return &RequestBuilder{
		request: Request{
			Method:  method,
			URL:     url,
			Headers: make(map[string]string),
		},
	}
}

func (b *RequestBuilder) Header(key, value string) *RequestBuilder {
	b.request.Headers[key] = value
	return b
}

func (b *RequestBuilder) Body(body []byte) *RequestBuilder {
	b.request.Body = append([]byte(nil), body...)
	return b
}

func (b *RequestBuilder) Build() (Request, error) {
	if b.request.URL == "" {
		return Request{}, fmt.Errorf("URL boş bolup bilmeýär")
	}
	return b.request, nil
}
```

```go
request, err := NewRequestBuilder("POST", "/users").
	Header("Content-Type", "application/json").
	Body([]byte(`{"name":"Aman"}`)).
	Build()
```

Go-da parametr az bolsa, adaty constructor has ýönekeýdir.

## Functional Options

Go-da konfigurasiýasy köp constructor üçin iň köp ulanylýan usullaryň biridir.

```go
type Server struct {
	address string
	timeout time.Duration
	logger  *slog.Logger
}

type Option func(*Server)

func WithAddress(address string) Option {
	return func(server *Server) {
		server.address = address
	}
}

func WithTimeout(timeout time.Duration) Option {
	return func(server *Server) {
		server.timeout = timeout
	}
}

func WithLogger(logger *slog.Logger) Option {
	return func(server *Server) {
		server.logger = logger
	}
}

func NewServer(options ...Option) *Server {
	server := &Server{
		address: ":8080",
		timeout: 5 * time.Second,
		logger:  slog.Default(),
	}

	for _, option := range options {
		option(server)
	}
	return server
}
```

```go
server := NewServer(
	WithAddress(":3000"),
	WithTimeout(10*time.Second),
)
```

Artykmaçlygy: täze option goşulanda öňki ulanyjylaryň kody bozulmaýar.

## Singleton

Programmada diňe bir instance bolmagyny üpjün edýär.

```go
var (
	instance *Config
	once     sync.Once
)

type Config struct {
	Environment string
}

func GetConfig() *Config {
	once.Do(func() {
		instance = &Config{Environment: "production"}
	})
	return instance
}
```

Üns ber:

- global ýagdaý testleri kynlaşdyryp biler;
- köplenç dependency injection has amatlydyr;
- diňe process boýunça hakykatdan bir instance gerek bolsa ulan.

## Dependency Injection

Dependency-likleri görnüşiň içinde döretmän, daşyndan geçirmekdir.

```go
type UserStore interface {
	FindByID(ctx context.Context, id int64) (User, error)
}

type UserService struct {
	store UserStore
}

func NewUserService(store UserStore) *UserService {
	return &UserService{store: store}
}

func (s *UserService) GetUser(ctx context.Context, id int64) (User, error) {
	return s.store.FindByID(ctx, id)
}
```

Testde fake implementasiýa geçirmek bolýar:

```go
type FakeUserStore struct {
	User User
}

func (f FakeUserStore) FindByID(context.Context, int64) (User, error) {
	return f.User, nil
}
```

Go-da dependency injection üçin framework hökmany däl. Constructor arkaly dependency geçirmek köplenç ýeterlikdir.

## Adapter

Bir interfeýsi başga interfeýse laýyklaşdyrýar.

```go
type Logger interface {
	Info(message string)
}

type StandardLogger struct {
	logger *log.Logger
}

func (a StandardLogger) Info(message string) {
	a.logger.Println("INFO:", message)
}
```

Bu adapter standart `log.Logger`-i programmanyň öz `Logger` interfeýsine öwürýär.

Haçan ulanmaly:

- daşarky kitaphananyň API-si seniň interfeýsiňe gabat gelmese;
- köne kody täze API bilen ulanmak gerek bolsa;
- üçünji tarap dependency-sini programma kodyndan izolirlemek üçin.

## Decorator

Esasy implementasiýany üýtgetmän, onuň daşyna täze hereket goşýar.

```go
type Service interface {
	Get(ctx context.Context, id string) (string, error)
}

type LoggingService struct {
	next   Service
	logger *slog.Logger
}

func (s LoggingService) Get(ctx context.Context, id string) (string, error) {
	s.logger.Info("Get başlady", "id", id)
	result, err := s.next.Get(ctx, id)
	if err != nil {
		s.logger.Error("Get şowsuz", "error", err)
	}
	return result, err
}
```

Decorator logging, metrics, cache we retry üçin peýdalydyr.

## Facade

Birnäçe çylşyrymly hyzmatyň üstünde ýönekeý API berýär.

```go
type OrderFacade struct {
	stock   StockService
	payment PaymentService
	delivery DeliveryService
}

func (f OrderFacade) CreateOrder(ctx context.Context, order Order) error {
	if err := f.stock.Reserve(ctx, order.Items); err != nil {
		return fmt.Errorf("haryt rezervi: %w", err)
	}
	if err := f.payment.Charge(ctx, order.Total); err != nil {
		return fmt.Errorf("töleg: %w", err)
	}
	if err := f.delivery.Schedule(ctx, order); err != nil {
		return fmt.Errorf("eltip bermek: %w", err)
	}
	return nil
}
```

Ulanyjy stock, payment we delivery hyzmatlarynyň jikme-jik işini bilmeli däl.

## Proxy

Hakyky hyzmatyň öňünde durup, oňa elýeterliligi dolandyrýar.

```go
type CachedUserService struct {
	next  UserService
	cache map[int64]User
	mu    sync.RWMutex
}

func (s *CachedUserService) Get(ctx context.Context, id int64) (User, error) {
	s.mu.RLock()
	user, exists := s.cache[id]
	s.mu.RUnlock()
	if exists {
		return user, nil
	}

	user, err := s.next.Get(ctx, id)
	if err != nil {
		return User{}, err
	}

	s.mu.Lock()
	s.cache[id] = user
	s.mu.Unlock()
	return user, nil
}
```

Proxy cache, access control, lazy loading we remote service üçin ulanylýar.

## Composite

Aýratyn obýekt bilen obýektler toparyna birmeňzeş seretmäge mümkinçilik berýär.

```go
type Component interface {
	Size() int64
}

type File struct {
	size int64
}

func (f File) Size() int64 {
	return f.size
}

type Directory struct {
	children []Component
}

func (d Directory) Size() int64 {
	var total int64
	for _, child := range d.children {
		total += child.Size()
	}
	return total
}
```

Tree görnüşli gurluşlarda peýdalydyr.

## Strategy

Bir işi ýerine ýetirýän algoritmi runtime wagtynda çalyşmaga mümkinçilik berýär.

```go
type DiscountStrategy interface {
	Apply(price float64) float64
}

type NoDiscount struct{}

func (NoDiscount) Apply(price float64) float64 {
	return price
}

type PercentageDiscount struct {
	Percent float64
}

func (d PercentageDiscount) Apply(price float64) float64 {
	return price * (1 - d.Percent/100)
}

func finalPrice(price float64, strategy DiscountStrategy) float64 {
	return strategy.Apply(price)
}
```

Go-da strategy käwagt ýönekeý funksiýa görnüşinde hem bolup biler:

```go
type DiscountFunc func(float64) float64

func finalPrice(price float64, discount DiscountFunc) float64 {
	return discount(price)
}
```

## Observer

Bir hadysa bolanda birnäçe subscriber-e habar berýär.

```go
type Event struct {
	Name string
	Data any
}

type EventBus struct {
	mu          sync.RWMutex
	subscribers map[string][]chan Event
}

func NewEventBus() *EventBus {
	return &EventBus{subscribers: make(map[string][]chan Event)}
}

func (b *EventBus) Subscribe(name string) <-chan Event {
	channel := make(chan Event, 1)
	b.mu.Lock()
	b.subscribers[name] = append(b.subscribers[name], channel)
	b.mu.Unlock()
	return channel
}

func (b *EventBus) Publish(event Event) {
	b.mu.RLock()
	subscribers := append([]chan Event(nil), b.subscribers[event.Name]...)
	b.mu.RUnlock()

	for _, subscriber := range subscribers {
		select {
		case subscriber <- event:
		default:
			// haýal subscriber publisher-i saklamasyn
		}
	}
}
```

Hakyky ulgamda unsubscribe, channel ýapmak we backpressure barada hem pikir etmeli.

## Command

Bir amaly aýratyn obýekt ýa-da funksiýa hökmünde görkezýär.

```go
type Command interface {
	Execute(ctx context.Context) error
}

type SendEmailCommand struct {
	to      string
	message string
	sender  EmailSender
}

func (c SendEmailCommand) Execute(ctx context.Context) error {
	return c.sender.Send(ctx, c.to, c.message)
}

func runCommands(ctx context.Context, commands []Command) error {
	for _, command := range commands {
		if err := command.Execute(ctx); err != nil {
			return err
		}
	}
	return nil
}
```

Queue, retry, audit log we undo üçin peýdalydyr.

## State

Obýektiň hereketini onuň häzirki ýagdaýyna görä üýtgedýär.

```go
type OrderStatus string

const (
	Pending   OrderStatus = "pending"
	Paid      OrderStatus = "paid"
	Shipped   OrderStatus = "shipped"
	Cancelled OrderStatus = "cancelled"
)

type Order struct {
	Status OrderStatus
}

func (o *Order) Pay() error {
	if o.Status != Pending {
		return fmt.Errorf("diňe pending sargydy töläp bolýar")
	}
	o.Status = Paid
	return nil
}

func (o *Order) Ship() error {
	if o.Status != Paid {
		return fmt.Errorf("diňe paid sargydy iberip bolýar")
	}
	o.Status = Shipped
	return nil
}
```

Ýagdaýlar köpelende her state üçin aýratyn görnüş döredip bolýar.

## Template Method

Algoritmiň esasy tertibini kesgitläp, käbir ädimleri çalyşmaga mümkinçilik berýär. Go-da köplenç interface ýa-da funksiýa bilen ýazylýar.

```go
type Validator func([]byte) error
type Processor func(context.Context, []byte) error

func Handle(ctx context.Context, data []byte, validate Validator, process Processor) error {
	if err := validate(data); err != nil {
		return fmt.Errorf("validation: %w", err)
	}
	if err := process(ctx, data); err != nil {
		return fmt.Errorf("processing: %w", err)
	}
	return nil
}
```

Inheritance ulanmagyň ýerine behavior funksiýa hökmünde geçirilýär.

## Chain of Responsibility

Soragy handler-leriň zynjyryndan geçirýär. HTTP middleware munuň iň gowy mysallarynyň biridir.

```go
type Middleware func(http.Handler) http.Handler

func Chain(handler http.Handler, middlewares ...Middleware) http.Handler {
	for i := len(middlewares) - 1; i >= 0; i-- {
		handler = middlewares[i](handler)
	}
	return handler
}

func Logging(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		log.Printf("%s %s", r.URL.Path, time.Since(start))
	})
}

func Authentication(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Header.Get("Authorization") == "" {
			http.Error(w, "rugsat ýok", http.StatusUnauthorized)
			return
		}
		next.ServeHTTP(w, r)
	})
}
```

```go
handler := Chain(apiHandler, Logging, Authentication)
```

## Repository

Maglumat saklaýjyny business logic-den aýyrýar.

```go
type UserRepository interface {
	Create(ctx context.Context, user User) (User, error)
	FindByID(ctx context.Context, id int64) (User, error)
	Update(ctx context.Context, user User) error
	Delete(ctx context.Context, id int64) error
}

type UserService struct {
	repository UserRepository
}

func (s UserService) Register(ctx context.Context, name string) (User, error) {
	if strings.TrimSpace(name) == "" {
		return User{}, fmt.Errorf("at boş bolup bilmeýär")
	}
	return s.repository.Create(ctx, User{Name: name})
}
```

Interfeýsi implementasiýanyň ulanylýan paketinde kesgitlemek Go-da gowy usuldyr.

## Unit of Work

Birnäçe repository amalyny bir transaction-da ýerine ýetirýär.

```go
type UnitOfWork interface {
	WithinTransaction(ctx context.Context, fn func(Repositories) error) error
}

func transfer(ctx context.Context, uow UnitOfWork, from, to int64, amount int) error {
	return uow.WithinTransaction(ctx, func(repositories Repositories) error {
		if err := repositories.Accounts.Withdraw(ctx, from, amount); err != nil {
			return err
		}
		return repositories.Accounts.Deposit(ctx, to, amount)
	})
}
```

Iki amalyň ikisi hem ýerine ýetýär ýa-da ikisi hem rollback edilýär.

## Worker Pool

Işleriň sanyny çäklendirilen goroutine topary bilen ýerine ýetirýär.

```go
type Job func(context.Context) error

func WorkerPool(ctx context.Context, workerCount int, jobs <-chan Job) <-chan error {
	errorsChannel := make(chan error)
	var wg sync.WaitGroup

	for i := 0; i < workerCount; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for job := range jobs {
				select {
				case <-ctx.Done():
					return
				default:
				}

				if err := job(ctx); err != nil {
					select {
					case errorsChannel <- err:
					case <-ctx.Done():
						return
					}
				}
			}
		}()
	}

	go func() {
		wg.Wait()
		close(errorsChannel)
	}()

	return errorsChannel
}
```

API soraglary, faýl processing we background job-lar üçin peýdalydyr.

## Pipeline

Maglumaty birnäçe ädimden channel arkaly geçirýär.

```go
func generate(ctx context.Context, values ...int) <-chan int {
	output := make(chan int)
	go func() {
		defer close(output)
		for _, value := range values {
			select {
			case output <- value:
			case <-ctx.Done():
				return
			}
		}
	}()
	return output
}

func square(ctx context.Context, input <-chan int) <-chan int {
	output := make(chan int)
	go func() {
		defer close(output)
		for value := range input {
			select {
			case output <- value * value:
			case <-ctx.Done():
				return
			}
		}
	}()
	return output
}
```

```go
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

for value := range square(ctx, generate(ctx, 1, 2, 3)) {
	fmt.Println(value)
}
```

## Fan-out we fan-in

- Fan-out: birnäçe worker bir channel-dan iş alýar.
- Fan-in: birnäçe channel-yň netijesi bir channel-da birleşdirilýär.

```go
func mergeChannels[T any](ctx context.Context, inputs ...<-chan T) <-chan T {
	output := make(chan T)
	var wg sync.WaitGroup

	for _, input := range inputs {
		wg.Add(1)
		go func(channel <-chan T) {
			defer wg.Done()
			for value := range channel {
				select {
				case output <- value:
				case <-ctx.Done():
					return
				}
			}
		}(input)
	}

	go func() {
		wg.Wait()
		close(output)
	}()
	return output
}
```

## Circuit Breaker

Uzakdaky hyzmat yzygiderli şowsuz bolanda oňa wagtlaýyn sorag ibermegi bes edýär.

Ýagdaýlary:

- **Closed:** soraglar adaty geçirilýär.
- **Open:** soraglar derrew ýalňyşlyk gaýtarýar.
- **Half-open:** hyzmatyň dikeldilendigini barlamak üçin az sorag geçirilýär.

Production taslamada taýýar we test edilen kitaphana ulanmak köplenç has ygtybarlydyr.

## Retry with backoff

Wagtlaýyn ýalňyş bolan işi artýan aralyk bilen gaýtalaýar.

```go
func Retry(ctx context.Context, attempts int, operation func() error) error {
	delay := 100 * time.Millisecond
	var lastError error

	for attempt := 0; attempt < attempts; attempt++ {
		if err := operation(); err == nil {
			return nil
		} else {
			lastError = err
		}

		timer := time.NewTimer(delay)
		select {
		case <-timer.C:
			delay *= 2
		case <-ctx.Done():
			timer.Stop()
			return ctx.Err()
		}
	}
	return lastError
}
```

Diňe wagtlaýyn ýalňyşlyklary gaýtala. Töleg ýaly amallarda idempotency bolmasa retry iki gezek amal edip biler.

## Pattern saýlamak

| Mesele | Peýdaly pattern |
|---|---|
| Constructor-da köp optional parametr | Functional Options |
| Implementasiýany runtime-da saýlamak | Factory ýa-da Strategy |
| Daşarky API seniň interfeýsiňe gabat gelmeýär | Adapter |
| Logging, cache ýa-da metrics goşmak | Decorator |
| Çylşyrymly subsystem-i ýönekeýleşdirmek | Facade |
| Hadysany birnäçe diňleýjä ýetirmek | Observer |
| HTTP soragyny birnäçe barlagdan geçirmek | Middleware / Chain |
| Maglumat bazasyny business logic-den aýyrmak | Repository |
| Background işleri çäkli goroutine bilen işletmek | Worker Pool |
| Maglumaty ädimme-ädim işlemek | Pipeline |
| Remote hyzmatyň şowsuzlygyndan goramak | Circuit Breaker |

## Anti-pattern: gereksiz interface

Diňe bir implementasiýa bar we testde çalyşmak zerur däl bolsa, öňünden interface döretmek hökman däl.

```go
// Gereksiz bolup biler
type UserServiceInterface interface {
	GetUser(int64) (User, error)
}
```

Go-da interface-i köplenç ony kabul edýän tarap kesgitleýär.

## Anti-pattern: global ýagdaý

```go
var Database *sql.DB
```

Global dependency testleri we parallel işlemegi kynlaşdyrýar. Ony constructor arkaly geçir:

```go
type App struct {
	database *sql.DB
}

func NewApp(database *sql.DB) *App {
	return &App{database: database}
}
```

## Anti-pattern: her zat üçin pattern

Ýönekeý funksiýa ýeterlik bolsa, Factory, Builder we Strategy gatlaklaryny bir wagtda goşma. Ilki düşnükli kod ýaz; pattern diňe gaýtalanýan mesele ýüze çykanda peýdalydyr.

## Ýumuşlar

1. Factory bilen `json`, `csv` we `xml` exporter döret.
2. Functional Options bilen konfigurasiýa edilýän HTTP client ýaz.
3. Adapter arkaly başga log kitaphanasyny öz `Logger` interfeýsiňe bagla.
4. Decorator bilen service-e cache we logging goş.
5. Strategy bilen birnäçe töleg usulyny taýýarla.
6. Middleware bilen request ID we recovery goş.
7. In-memory we PostgreSQL repository implementasiýasyny ýaz.
8. Worker Pool-a iş netijelerini we graceful shutdown goş.
9. Pipeline arkaly sanlary filter et, üýtget we jemle.
10. Retry funksiýasyna jitter we diňe wagtlaýyn ýalňyşlygy gaýtalamak düzgünini goş.

## Öwreniş tertibi

1. Dependency Injection
2. Functional Options
3. Factory we Strategy
4. Adapter we Decorator
5. Middleware
6. Repository
7. Worker Pool we Pipeline
8. Circuit Breaker we Retry

