# Go taslamasynyň bukja gurluşy

Ähli taslama üçin ýeke-täk hökmany gurluş ýok. Kiçi taslamany ýönekeý sakla:

```text
todo-api/
├── go.mod
├── main.go
├── handler.go
└── handler_test.go
```

Taslama ulalanda şu gurluş peýdaly bolup biler:

```text
todo-api/
├── cmd/api/main.go
├── internal/handler/
├── internal/service/
├── internal/store/
├── migrations/
├── go.mod
└── README.md
```

`internal` içindäki paketleri daşarky modullar import edip bilmeýär. Gereksiz köp gatlak döretme; gurluş meselä görä ulalsyn.

