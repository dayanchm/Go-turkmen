# Test we benchmark

Test faýlynyň ady `_test.go` bilen gutarmaly. Mysal üçin `sum.go` faýlyndaky `Sum` funksiýasyny şeýle barlap bolýar:

```go
package calculator

import "testing"

func TestSum(t *testing.T) {
	got := Sum(2, 3)
	if got != 5 {
		t.Fatalf("Sum(2, 3) = %d; 5 garaşylýardy", got)
	}
}

func BenchmarkSum(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Sum(2, 3)
	}
}
```

```bash
go test ./...
go test -cover ./...
go test -bench=. ./...
```

Test diňe dogry netijäni däl, boş maglumat, nädogry maglumat we serhet ýagdaýlaryny hem barlamaly.

