# Interfaces

Go dilinde interfeýs, bir ýa-da birnäçe usulyň belli bir gol toplumyny kesgitleýän maglumat görnüşidir. Bu gollar toplumy, maglumat görnüşiniň haýsy usullary durmuşa geçirmelidigini kesgitleýär. Şonuň üçin maglumat görnüşiniň haýsy häsiýetleriniň bardygyny kesgitlemek üçin interfeýsler ulanylýar.

Mysal üçin, şekiliň meýdanyny hasaplamak üçin meýdan diýilýän funksiýany kesgitleýäris diýeliň. Kwadrat, tegelek we gönüburçluk ýaly dürli şekiller meýdan funksiýasyny dürli usullar bilen amala aşyrýarlar. Bu ýagdaýda, her şekiliň meýdanyny hasaplamak üçin aýratyn funksiýalary kesgitlemegiň ýerine, hemmesini interfeýs arkaly bir maglumat görnüşine ýygnap bilersiňiz.

```golang
package main

import (
	"fmt"
	"math"
)

type Shape interface {
	area() float64
}

type Circle struct {
	radius float64
}

type Rectangle struct {
	width, height float64
}

type Square struct {
	side float64
}

func (c Circle) area() float64 {
	return math.Pi * c.radius * c.radius
}

func (r Rectangle) area() float64 {
	return r.width * r.height
}

func (s Square) area() float64 {
	return s.side * s.side
}

func getArea(shape Shape) float64 {
	return shape.area()
}

func main() {
	circle := Circle{radius: 5}
	rectangle := Rectangle{width: 5, height: 10}
	square := Square{side: 5}

	fmt.Printf("Circle area: %f\n", getArea(circle))
	fmt.Printf("Rectangle area: %f\n", getArea(rectangle))
	fmt.Printf("Square area: %f\n", getArea(square))
}
```

Bu mysalda, “Shape” atly interfeýs kesgitlenýär we meýdança atly funksiýa goly görkezilýär. Tegelek, gönüburçluk we kwadrat atly üç dürli gurluş kesgitlenýär we olaryň hersinde meýdan diýilýän funksiýa bar.
GetArea atly bir funksiýa kesgitlenýär we onuň parametri “Shape” görnüşine degişlidir. Bu funksiýa, meýdany hasaplanmaly şekil maglumatlaryny alýar we meýdan funksiýasyna jaň edip şekiliň meýdanyny hasaplaýar.
Esasy funksiýada üç dürli üýtgeýji döredilýär, mysal üçin tegelek, gönüburçluk we kwadrat. Bu üýtgeýjileriň her biri getArea funksiýasyna parametr hökmünde berilýär we her şekiliň meýdany hasaplanýar we ekranda çap edilýär.

Çykyş:

```
Circle area: 78.539816
Rectangle area: 50.000000
Square area: 25.000000
``` 