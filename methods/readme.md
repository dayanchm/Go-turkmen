# Methods

Methods, Go programmirleme dilinde, maglumat gurluşyna mahsus amallary ýerine ýetirmek üçin ulanylýan funksiýanyň bir görnüşidir. Bu amallar, maglumatlar gurluşynyň häsiýetleriniň üstünde işlemek arkaly netijeleri berýär.

```golang
type Rectangle struct {
    width  float64
    height float64
}

func (r Rectangle) area() float64 {
    return r.width * r.height
}

func (r Rectangle) perimeter() float64 {
    return 2 * (r.width + r.height)
}

r := Rectangle{width: 3.0, height: 4.0}
fmt.Println(r.area())
fmt.Println(r.perimeter())
```

Bu mysalda gönüburçluk atly gurluş döredilýär we iki häsiýet kesgitlenýär, ini atly float64 görnüşi we beýikligi atly float64 görnüşi. Meýdan diýilýän funksiýa gönüburçlugyň görnüşini alýar we gönüburçlugyň meýdanyny hasaplaýar. Funksiýa bilen gaýtarylan netije gönüburçlugyň meýdanydyr. Perimetri diýilýän funksiýa gönüburçluk görnüşiniň parametrini alýar we gönüburçlugyň perimetrini hasaplaýar. Funksiýa bilen gaýtarylan netije gönüburçlugyň perimetri. R atly gönüburçly üýtgeýji döredilýär we ini we beýikligi häsiýetleri 3.0 we 4.0 bahalary berilýär. R.area () we r.perimeter () aňlatmalaryny ulanyp, gönüburçlugyň meýdany we perimetri hasaplanýar we netijeler ekranda çap edilýär.

```golang
type Person struct {
    Name string
    Age  int
}

func (p *Person) setName(name string) {
    p.Name = name
}

func (p *Person) setAge(age int) {
    p.Age = age
}

func (p Person) getName() string {
    return p.Name
}

func (p Person) getAge() int {
    return p.Age
}

p := Person{Name: "John Doe", Age: 42}
p.setName("Jane Doe")
p.setAge(35)
fmt.Printf("Name: %s, Age: %d\n", p.getName(), p.getAge())
```

Bu mysalda Adam atly bir struktura döredilýär we iki häsiýet kesgitlenýär, Ady atly setir görnüşi we Ageaş atly int görnüşi. SetName atly bir funksiýa Şahsy görnüşiň görkezijisini (* Adam) alýar we adamyň adyny üýtgedýär. SetAge atly bir funksiýa Şahsy görnüşiň görkezijisini (* Adam) alýar we adamyň ýaşyny üýtgedýär. GetName atly bir funksiýa Adam görnüşiniň parametrini alýar we adamyň adyny yzyna berýär. GetAge, Şahsy diýilýän funksiýa