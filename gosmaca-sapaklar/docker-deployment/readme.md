# Docker we deploy

Iki basgançakly `Dockerfile` netijäniň kiçi bolmagyna kömek edýär:

```dockerfile
FROM golang:1.24-alpine AS build
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -o server .

FROM alpine:3.21
WORKDIR /app
COPY --from=build /app/server ./server
USER nobody
EXPOSE 8080
CMD ["./server"]
```

```bash
docker build -t todo-api .
docker run --rm -p 8080:8080 todo-api
```

Deploy edilende konfigurasiýany environment variables arkaly geçir, health-check goş we programmany root ulanyjy hökmünde işletme.

