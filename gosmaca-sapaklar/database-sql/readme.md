# Maglumat bazasy bilen işlemek

`database/sql` SQL maglumat bazalary üçin umumy interfeýs berýär. Şeýle-de degişli draýwer gerek bolýar.

```go
db, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
if err != nil {
	log.Fatal(err)
}
defer db.Close()

ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
defer cancel()

var name string
err = db.QueryRowContext(ctx,
	"SELECT name FROM users WHERE id = $1", 1,
).Scan(&name)
if err != nil {
	log.Fatal(err)
}
```

SQL içine bahany string birleşdirmek bilen salma. `$1` ýaly parametrleri ulanmak SQL injection hüjüminiň öňüni alýar. `sql.ErrNoRows` ýagdaýyny aýratyn barla we birnäçe amaly bitewi ýerine ýetirmek üçin transaction ulan.

