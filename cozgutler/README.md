# Kod ýumuşlarynyň çözgütleri

Ilki [ýumuşlary](../kod-yumuslary/README.md) özüň çözmäge synanyş.

## Jübüt san

```go
func isEven(value int) bool {
	return value%2 == 0
}
```

Wagt `O(1)`, ýat `O(1)`.

## Slice jemini tapmak

```go
func sum(values []int) int {
	total := 0
	for _, value := range values {
		total += value
	}
	return total
}
```

Wagt `O(n)`, ýat `O(1)`.

## Unicode setiri tersine öwürmek

```go
func reverse(value string) string {
	runes := []rune(value)
	for left, right := 0, len(runes)-1; left < right; left, right = left+1, right-1 {
		runes[left], runes[right] = runes[right], runes[left]
	}
	return string(runes)
}
```

## Iň uly baha

```go
func maximum(values []int) (int, error) {
	if len(values) == 0 {
		return 0, fmt.Errorf("slice boş")
	}
	result := values[0]
	for _, value := range values[1:] {
		if value > result {
			result = value
		}
	}
	return result, nil
}
```

## Söz ýygylygy

```go
func wordFrequency(words []string) map[string]int {
	result := make(map[string]int)
	for _, word := range words {
		result[word]++
	}
	return result
}
```

Galan çözgütler soňra aýratyn testler we düşündirişler bilen goşular.

