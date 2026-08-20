# Struct Embedding

Go dilinde, struktura goýmak, başga bir strukturanyň içinde bir strukturany goýmagy aňladýar. Şeýlelik bilen, içerki gurluşlar döredilip, kod gaýtalanmagy azaldylyp bilner.

```golang
package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func (p Person) SayHello() {
	fmt.Printf("Hello, my name is %s and I'm %d years old\n", p.Name, p.Age)
}

type Employee struct {
	Person
	Company string
}

func main() {
	emp := Employee{
		Person: Person{
			Name: "John",
			Age:  30,
		},
		Company: "ABC Inc.",
	}

	emp.SayHello()
}
```

Bu mysalda Adam atly bir struktura kesgitlenýär we iki häsiýeti Ady we ýaşy bar. Şeýle hem “SayHello” atly bir funksiýa bar.

Işgär atly gurluş kesgitlenýär we Şahsy diýilýän strukturanyň içinde ýerleşdirilýär. Işgäriň “Company” atly öz emlägi hem bar.
Esasy funksiýada emp atly Işgär üýtgeýjisi döredilýär. Şahsy görnüşdäki maglumatlar bu üýtgeýjiniň Şahsy emlägine berilýär. SayHello funksiýasy emp üýtgeýjiniň üsti bilen çagyrylýar we netije ekrana çap edilýär.

Çykyş:

```
Hello, my name is John and I'm 30 years old
```

Bu mysalda “Işgär” atly bir gurluşda “Şahsyýet” gurluşy bar. Bu, Şahsy gurluşyň ähli häsiýetlerini Işgär gurluşyna goşýar. Şeýlelik bilen, işgäriň we şahsyýetiň maglumatlaryna hem işgäriň gurluşyny ulanyp bolýar. Bu aýratynlyk koduň gaýtalanmagyny azaldýar we gurluşlary has modully edýär.