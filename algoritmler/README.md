# Algoritmler we maglumat gurluşlary — Go dilinde

Bu bölüm algoritmleri Go kodlary bilen öwrenmek üçin niýetlenendir. Her algoritm üçin işleýşi, wagt çylşyrymlylygy we kod mysaly görkezilýär.

## Big-O näme?

Big-O maglumat köpelende algoritmiň näçe iş etjekdigini görkezýär.

| Big-O | Ady | Mysal |
|---|---|---|
| `O(1)` | hemişelik | array elementini indeks bilen almak |
| `O(log n)` | logarifmik | binary search |
| `O(n)` | çyzykly | linear search |
| `O(n log n)` | netijeli sorting | merge sort, quicksort-yň orta ýagdaýy |
| `O(n²)` | kwadrat | iki iç içe loop, bubble sort |
| `O(2ⁿ)` | eksponensial | käbir recursive çözgütler |

Big-O takyk wagt däl. Ol maglumat ulalanda işiň nähili köpelýändigini düşündirýär.

## Linear search

Sanawyň elementlerini başyndan ahyryna çenli bir-bir barlaýar.

- Wagt: `O(n)`
- Ýat: `O(1)`
- Tertipleşdirilmedik maglumatda hem işleýär

```go
func linearSearch(values []int, target int) int {
	for index, value := range values {
		if value == target {
			return index
		}
	}
	return -1
}
```

## Binary search

Diňe öňünden tertipleşdirilen sanawda işleýär. Her ädimde gözlenýän aralygy iki esse kiçeldýär.

- Wagt: `O(log n)`
- Ýat: `O(1)`

```go
func binarySearch(values []int, target int) int {
	left, right := 0, len(values)-1

	for left <= right {
		middle := left + (right-left)/2

		switch {
		case values[middle] == target:
			return middle
		case values[middle] < target:
			left = middle + 1
		default:
			right = middle - 1
		}
	}

	return -1
}
```

## Bubble sort

Goňşy elementleri deňeşdirip, nädogry tertipde bolsa ýerini çalyşýar.

- Orta we iň erbet wagt: `O(n²)`
- Ýat: `O(1)`
- Öwrenmek üçin gowy, uly maglumat üçin haýal

```go
func bubbleSort(values []int) {
	for end := len(values) - 1; end > 0; end-- {
		swapped := false
		for i := 0; i < end; i++ {
			if values[i] > values[i+1] {
				values[i], values[i+1] = values[i+1], values[i]
				swapped = true
			}
		}
		if !swapped {
			return
		}
	}
}
```

## Selection sort

Her ädimde galan elementleriň iň kiçisini tapyp, öňe geçirýär.

- Wagt: `O(n²)`
- Ýat: `O(1)`

```go
func selectionSort(values []int) {
	for i := 0; i < len(values)-1; i++ {
		minimum := i
		for j := i + 1; j < len(values); j++ {
			if values[j] < values[minimum] {
				minimum = j
			}
		}
		values[i], values[minimum] = values[minimum], values[i]
	}
}
```

## Insertion sort

Her täze elementi öňündäki tertipleşdirilen bölegiň dogry ýerine goýýar.

- Orta we iň erbet wagt: `O(n²)`
- Iň gowy wagt: `O(n)`
- Kiçi ýa-da eýýäm diýen ýaly tertipli maglumatda peýdaly

```go
func insertionSort(values []int) {
	for i := 1; i < len(values); i++ {
		current := values[i]
		j := i - 1

		for j >= 0 && values[j] > current {
			values[j+1] = values[j]
			j--
		}
		values[j+1] = current
	}
}
```

## Merge sort

Sanawy iki bölege bölýär, bölekleri aýratyn tertipleşdirýär we birleşdirýär.

- Wagt: `O(n log n)`
- Goşmaça ýat: `O(n)`
- Durnukly sorting algoritmidir

```go
func mergeSort(values []int) []int {
	if len(values) <= 1 {
		return append([]int(nil), values...)
	}

	middle := len(values) / 2
	left := mergeSort(values[:middle])
	right := mergeSort(values[middle:])
	return merge(left, right)
}

func merge(left, right []int) []int {
	result := make([]int, 0, len(left)+len(right))
	i, j := 0, 0

	for i < len(left) && j < len(right) {
		if left[i] <= right[j] {
			result = append(result, left[i])
			i++
		} else {
			result = append(result, right[j])
			j++
		}
	}

	result = append(result, left[i:]...)
	result = append(result, right[j:]...)
	return result
}
```

## Go-nyň taýýar sorting funksiýalary

Hakyky taslamada köplenç standart kitaphanany ulanmak has dogrudyr.

```go
numbers := []int{5, 2, 8, 1}
slices.Sort(numbers)

names := []string{"Myrat", "Aman", "Mähri"}
slices.Sort(names)
```

Öz düzgüniň boýunça:

```go
type User struct {
	Name string
	Age  int
}

slices.SortFunc(users, func(a, b User) int {
	return cmp.Compare(a.Age, b.Age)
})
```

## Stack

Stack `LIFO` düzgüni bilen işleýär: iň soňky giren element ilkinji çykýar.

```go
type Stack[T any] struct {
	items []T
}

func (s *Stack[T]) Push(value T) {
	s.items = append(s.items, value)
}

func (s *Stack[T]) Pop() (T, bool) {
	if len(s.items) == 0 {
		var zero T
		return zero, false
	}

	last := len(s.items) - 1
	value := s.items[last]
	s.items = s.items[:last]
	return value, true
}
```

Ulanylýan ýerleri: undo, brauzer taryhy, ýaýlary barlamak we DFS.

## Queue

Queue `FIFO` düzgüni bilen işleýär: ilkinji giren element ilkinji çykýar.

```go
type Queue[T any] struct {
	items []T
	head  int
}

func (q *Queue[T]) Enqueue(value T) {
	q.items = append(q.items, value)
}

func (q *Queue[T]) Dequeue() (T, bool) {
	if q.head >= len(q.items) {
		var zero T
		return zero, false
	}

	value := q.items[q.head]
	q.head++
	return value, true
}
```

Ulanylýan ýerleri: iş nobaty, habar ulgamy we BFS.

## Set

Go-da aýratyn set görnüşi ýok. Ony `map` bilen döredip bolýar.

```go
set := make(map[string]struct{})

set["Go"] = struct{}{}
_, exists := set["Go"]
delete(set, "Go")
```

## Linked list

Her element özünden soňky elementi görkezýär.

```go
type Node[T any] struct {
	Value T
	Next  *Node[T]
}

func prepend[T any](head *Node[T], value T) *Node[T] {
	return &Node[T]{Value: value, Next: head}
}
```

Slice köplenç has ýönekeý we cache üçin amatlydyr. Linked list diňe aýratyn zerurlyk bolanda ulanylýar.

## Recursion

Funksiýanyň özüni çagyrmagydyr. Hökmany base case bolmaly.

```go
func factorial(n int) int {
	if n <= 1 {
		return 1
	}
	return n * factorial(n-1)
}
```

Recursive çözgüt düşnükli bolmasa ýa-da çuňluk uly bolsa, loop ulanmak has amatly bolup biler.

## Iki pointer usuly

Tertipleşdirilen sanawda jemi belli baha deň bolan iki sany tapmak:

```go
func twoSumSorted(values []int, target int) (int, int, bool) {
	left, right := 0, len(values)-1

	for left < right {
		sum := values[left] + values[right]
		switch {
		case sum == target:
			return left, right, true
		case sum < target:
			left++
		default:
			right--
		}
	}

	return 0, 0, false
}
```

- Wagt: `O(n)`
- Ýat: `O(1)`

## Sliding window

Uzynlygy `k` bolan bölekleriň iň uly jemini tapmak:

```go
func maxWindowSum(values []int, k int) (int, bool) {
	if k <= 0 || k > len(values) {
		return 0, false
	}

	sum := 0
	for _, value := range values[:k] {
		sum += value
	}

	maximum := sum
	for i := k; i < len(values); i++ {
		sum += values[i] - values[i-k]
		if sum > maximum {
			maximum = sum
		}
	}

	return maximum, true
}
```

- Wagt: `O(n)`
- Ýat: `O(1)`

## Graph

Adjacency list bilen graph:

```go
graph := map[string][]string{
	"A": {"B", "C"},
	"B": {"D"},
	"C": {"D"},
	"D": {},
}
```

## BFS

Graph-y gatlak boýunça gezýär. Iň gysga ädim sanyny tapmakda peýdalydyr.

```go
func bfs(graph map[string][]string, start string) []string {
	visited := map[string]bool{start: true}
	queue := []string{start}
	result := make([]string, 0, len(graph))

	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		result = append(result, current)

		for _, next := range graph[current] {
			if !visited[next] {
				visited[next] = true
				queue = append(queue, next)
			}
		}
	}

	return result
}
```

- Wagt: `O(V + E)`
- Ýat: `O(V)`

## DFS

Bir şahany mümkin boldugyça çuň gezýär.

```go
func dfs(graph map[string][]string, current string, visited map[string]bool, result *[]string) {
	if visited[current] {
		return
	}

	visited[current] = true
	*result = append(*result, current)

	for _, next := range graph[current] {
		dfs(graph, next, visited, result)
	}
}
```

- Wagt: `O(V + E)`
- Ýat: `O(V)`

## Dynamic programming

Öň hasaplanan netijeleri ýatda saklap, gaýtalanýan işi azaldýar.

Fibonacci üçin iterative çözgüt:

```go
func fibonacci(n int) int {
	if n <= 1 {
		return n
	}

	previous, current := 0, 1
	for i := 2; i <= n; i++ {
		previous, current = current, previous+current
	}
	return current
}
```

- Wagt: `O(n)`
- Ýat: `O(1)`

## Haýsy algoritmi haçan ulanmaly?

| Mesele | Maslahat |
|---|---|
| Tertipleşdirilmedik sanawda gözleg | linear search |
| Tertipleşdirilen sanawda gözleg | binary search |
| Hakyky taslamada sorting | `slices.Sort`, `slices.SortFunc` |
| Soňky giren ilki çykmaly | stack |
| Ilkinji giren ilki çykmaly | queue |
| Graph-da iň az ädim | BFS |
| Graph-y ýa-da tree-ni çuň gezmek | DFS |
| Aralyk boýunça hasap | sliding window |
| Tertipli sanawda jübüt gözlemek | iki pointer |
| Gaýtalanýan kiçi meseleler | dynamic programming |

## Ýumuşlar

1. Slice-däki iň kiçi we iň uly sany tap.
2. Setiriň palindrome-dygyny iki pointer bilen barla.
3. Stack ulanyp, `()[]{}` ýaýlarynyň dogrudygyny barla.
4. Queue üçin `Peek` we `Len` method-laryny goş.
5. Binary search-i recursive görnüşde ýaz.
6. Iki tertipleşdirilen slice-i birleşdir.
7. Graph-da iki nokadyň arasynda ýol bardygyny BFS bilen barla.
8. Fibonacci funksiýasyny memoization bilen ýaz.
9. Sözleriň ýygylygyny map bilen hasapla.
10. Quick sort algoritmini özüň ýazyp, `slices.Sort` bilen benchmark et.

## Öwreniş tertibi

1. Big-O
2. Linear we binary search
3. Bubble, selection we insertion sort
4. Stack, queue we set
5. Recursion
6. Iki pointer we sliding window
7. Graph, BFS we DFS
8. Dynamic programming

