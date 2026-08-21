# 🌐 Backend Developer öwreniş ýoly

**Dereje:** Orta  
**Maksat:** Go bilen backend programmalaryny we REST API-lary döretmegi öwrenmek  
**Öňünden bilmeli:** [Başlangyç Go](beginner.md)

---

## 1. HTTP esaslary

Ilki bilen Go-nyň standart `net/http` paketini öwreniň.

Öwrenilmeli temalar:

- HTTP server
- Request
- Response
- Handler
- Header
- Status code
- Routing
- Query parameters

Ýönekeý HTTP server:

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Salam!")
	})

	http.ListenAndServe(":8080", nil)
}
```

---

## 2. JSON

Backend programmalarynda maglumat alyşmak üçin JSON bilen işlemegi öwreniň.

Temalar:

- `encoding/json`
- JSON encode
- JSON decode
- Struct tags
- API response

Mysal:

```go
type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}
```

---

## 3. REST API

REST API-nyň esasy gurluşyny öwreniň.

HTTP metodlary:

```text
GET     → maglumat almak
POST    → täze maglumat döretmek
PUT     → maglumaty täzelemek
PATCH   → maglumatyň bir bölegini täzelemek
DELETE  → maglumaty pozmak
```

Mysal API:

```text
GET    /users
GET    /users/{id}
POST   /users
PUT    /users/{id}
DELETE /users/{id}
```

Şeýle hem:

- Route parameters
- Query parameters
- Request body
- Validation
- Error responses

öwrenilmeli.

---

## 4. Middleware

Request handler-e ýetmezden öň ýa-da soň işleýän middleware-lary öwreniň.

Mysallar:

- Logging
- Authentication
- Recovery
- Request ID
- CORS
- Context

---

## 5. Maglumat bazasy

Go bilen SQL maglumat bazalaryna birikmegi öwreniň.

Esasy temalar:

- `database/sql`
- PostgreSQL
- SQL query
- CRUD
- Transactions
- Connection pooling
- Database migrations

CRUD:

```text
Create
Read
Update
Delete
```

---

## 6. Authentication

Ulanyjy giriş ulgamynyň esaslaryny öwreniň.

Temalar:

- Password hashing
- Authentication
- Authorization
- Tokens
- Protected routes
- Middleware

---

## 7. Testing

Backend koduny test etmegi öwreniň.

- Unit tests
- Table-driven tests
- HTTP tests
- Integration tests

Testleri işletmek:

```bash
go test ./...
```

---

## 8. Docker

Go backend programmasyny container hökmünde işletmegi öwreniň.

Temalar:

- Dockerfile
- Environment variables
- Go application container
- PostgreSQL container
- Docker Compose

---

## Jemleýji taslama

Doly REST API dörediň.

Taslamada aşakdakylar bolmaly:

```text
REST API
    ↓
PostgreSQL
    ↓
Authentication
    ↓
CRUD
    ↓
Middleware
    ↓
Testing
    ↓
Docker
```

Mysal hökmünde:

```text
Task Management API
```

döredip bilersiňiz.

API:

```text
POST   /register
POST   /login

GET    /tasks
POST   /tasks
GET    /tasks/{id}
PUT    /tasks/{id}
DELETE /tasks/{id}
```

---

## Indiki ädim

Backend ýoluny tamamlandan soň:

[🔴 Ösen Go →](advanced.md)