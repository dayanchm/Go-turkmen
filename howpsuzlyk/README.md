# Go howpsuzlygy

## Parol hash

Paroly açyk tekst görnüşinde saklama. `bcrypt` ýa-da `argon2id` ulan.

```go
hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
if err != nil {
	return err
}

err = bcrypt.CompareHashAndPassword(hash, []byte(password))
```

## SQL injection

String birleşdirmek ýerine parametrli sorag ulan:

```go
row := db.QueryRowContext(ctx,
	"SELECT id, name FROM users WHERE email = $1",
	email,
)
```

## JWT

- Gysga möhletli access token ulan.
- Signing algoritmini açyk barla.
- Secret-i koda ýazma.
- `exp`, `iss` we `aud` claim-lerini barla.
- Logout we token ogurlygy üçin refresh token rotation ulan.

## CORS

Diňe zerur origin-lere rugsat ber. `Access-Control-Allow-Origin: *` bilen credential-lary bile ulanma.

```go
allowed := map[string]bool{
	"https://example.com": true,
}
origin := r.Header.Get("Origin")
if allowed[origin] {
	w.Header().Set("Access-Control-Allow-Origin", origin)
}
```

## HTTP goragy

- body ölçegini `http.MaxBytesReader` bilen çäklendir;
- server timeout-laryny belle;
- girýän JSON-y we ID-leri barla;
- rate limiting goş;
- howpsuzlyk header-lerini belle;
- error jogabynda içerki maglumat görkezme.

## Secret dolandyryşy

`.env`, private key, token we database parolyny Git-e goşma. Production-da secret manager ulan we secret-lary yzygiderli çalyş.

## Checklist

- `govulncheck ./...`
- dependency-leri täze sakla
- input validation goş
- least privilege ulan
- loglarda secret ýokdugyny barla
- backup-yň dikeldilýändigini test et

