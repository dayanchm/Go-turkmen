# JSON

JSON (JavaScript Object Notation) ýeňil maglumat alyş-çalyş formaty bolup, adamlar tarapyndan okamak we ýazmak aňsat. Go dilinde JSON maglumatlaryny dolandyrmak üçin kodlamak / json bukjasy ulanylyp bilner.

JSON maglumatlary açar / baha jübütlerinden ýa-da massiwlerden durýar. Düwmeler setir bolup biler we bahalar JSON maglumatlary bolup biler. JSON maglumatlary {} (egrilen ýaýlar) bilen görkezilen obýektler görnüşinde hem bolup biler.

JSON maglumatlarynyň mysaly şeýle bolup biler:

```json
{
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}
```

Bu maglumatlar üç açary öz içine alýar: ady, ýaşy we şäheri. Adyň açary setir bahasy, ýaş açary san bahasy, şäher açary hem setir bahasydyr.

Go dilinde JSON maglumatlary üçin gurluş gurluşy ulanylyp bilner. Gurluş strukturasyndaky meýdanlary JSON maglumatlarynyň düwmelerine düzüp bolýar. Soňra, kodlamak / json paketine goşulan Marşal () we Unmarshal () funksiýalaryny ulanyp, Go obýekti we JSON maglumatlarynyň arasynda öwrülişik edip bolýar.

Mysal üçin, Geliň, şahsyýet gurluşyny kesgitläliň we bu gurluşy JSON maglumatlary bilen deňeşdireliň:

```golang
type Person struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
    City string `json:"city"`
}
```

Bu ýerde, Şahsy gurluşyň meýdanlary JSON maglumatlarynyň düwmelerine düzülendir. At meýdanlary üçin at düwmeleri, ýaş düwmeleri Ageaş meýdançasy, şäher meýdanlary üçin şäher açarlary ulanyldy.

Bu gurluşy JSON maglumatlaryna öwürmek üçin json.Marshal () funksiýasy ulanylyp bilner:

```golang
person := Person{Name: "John Doe", Age: 30, City: "New York"}
jsonData, err := json.Marshal(person)
if err != nil {
    fmt.Println("Error encoding JSON:", err)
}
fmt.Println(string(jsonData)) // {"name":"John Doe","age":30,"city":"New York"}
```

Bu ýerde Şahsy gurluş üýtgeýji hökmünde kesgitlenýär we adam obýekti json.Marshal () funksiýasyny ulanyp JSON maglumatlaryna öwrülýär. Alnan JSON maglumatlary, () funksiýasyny ulanyp, setir görnüşine öwrülýär we ekranda çap edilýär.

Başga bir mysal, JSON maglumatlaryny maglumat gurluşlaryna we tersine öwürmek üçin json.Marshal () we json.Unmarshal () funksiýalaryny ulanmak. Mysal üçin:

```golang
package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string
    Age  int
}

func main() {

    p1 := Person{"Alice", 30}
    jsonStr, err := json.Marshal(p1)
    if err != nil {
        panic(err)
    }
    fmt.Println(string(jsonStr))

    var p2 Person
    jsonStr = []byte(`{"Name":"Bob","Age":40}`)
    err = json.Unmarshal(jsonStr, &p2)
    if err != nil {
        panic(err)
    }
    fmt.Println(p2)
}
```

Bu mysalda, şahsyýet atly bir gurluş kesgitlenýär we bu gurluş json.Marshal () we json.Unmarshal () funksiýalaryny ulanyp kodlanýar we JSON maglumatlary hökmünde derňelýär.

```
{"Name":"Alice","Age":30}
{Bob 40}
```