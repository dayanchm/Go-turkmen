# Structs

Structs, Go programmirleme dilinde dürli maglumatlar görnüşlerini öz içine alýan maglumat gurluşydyr. Bu gurluşda dürli maglumatlar görnüşleriniň maglumatlaryny bilelikde saklap we bu maglumatlar boýunça amallary ýerine ýetirip bilersiňiz.

```golang
type Person struct {
    Name string
    Age  int
}

var p Person
p.Name = "John Doe"
p.Age = 42
fmt.Println(p)
fmt.Printf("Name: %s, Age: %d\n", p.Name, p.Age)
```

Bu mysalda, Person atly bir struktura döredilýär we iki häsiýet kesgitlenýär, Name atly setir görnüşi we Age atly int görnüşi. P görnüşli şahsyýetiň üýtgeýjisi var açar söz bilen kesgitlenýär. P üýtgeýjiniň ady we ýaş aýratynlyklary p.Name we p.Age aňlatmalary bilen bellenýär we p üýtgeýjisi fmt.Println () funksiýasy bilen ekranda çap edilýär. Mundan başga-da, p.Name we p.Age aňlatmalaryny ulanyp, Ady we Ageaş aýratynlyklary ekrana aýratyn çap edilýär.

```golang
type Rectangle struct {
    width  float64
    height float64
}

func (r Rectangle) area() float64 {
    return r.width * r.height
}

r := Rectangle{width: 3.0, height: 4.0}
fmt.Println(r.area())
````

Bu mysalda, gönüburçluk atly gurluş döredilýär we iki häsiýet kesgitlenýär, ini atly float64 görnüşi we beýikligi atly float64 görnüşi. Meýdan diýilýän funksiýa gönüburçlugyň görnüşini alýar we gönüburçlugyň meýdanyny hasaplaýar. Funksiýa bilen gaýtarylan netije gönüburçlugyň meýdanydyr. R atly gönüburçly üýtgeýji döredilýär we ini we beýikligi häsiýetleri 3.0 we 4.0 bahalary berilýär. R.area () aňlatmasyny ulanyp, gönüburçlugyň meýdany hasaplanýar we netijesi ekranda çap edilýär.