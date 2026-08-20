# Text Templates

Şablon faýllary Go-da tekst esasly maglumatlary formatlamak üçin ulanylýar. Şablon faýly tekst resminamasyndaky käbir maglumatlary ýer eýeleri ýa-da aňlatmalar bilen çalyşmak arkaly döredilýär. Bu şablon faýlyny maglumat gurluşy bilen birleşdirmek arkaly amala aşyrylýar.

Mysal üçin, e-poçta ibereniňizde habaryň mazmuny şablon faýly ulanyp belli bir formatda döredilip bilner. Şablon faýlynda üýtgeýänleri we funksiýalary ulanyp, ýer eýelerini we aňlatmalary kesgitläp bolýar. Bu üýtgeýjiler we funksiýalar soňra hakyky maglumat gurluşy bilen birleşdirilýär, netijede taýýar tekst resminamasy bolýar.

Go-da şablon faýllary tekst / şablon we html / şablon paketleri bilen döredilýär. Bu paketler şablon faýllaryny döretmäge we dolandyrmaga mümkinçilik berýän köp funksiýany üpjün edýär.

```golang
package main

import (
    "fmt"
    "os"
    "text/template"
)

type Person struct {
    Name    string
    Age     int
    Country string
}

func main() {
    person := Person{
        Name:    "John",
        Age:     30,
        Country: "USA",
    }

    tpl := "My name is {{.Name}} and I am {{.Age}} years old. I live in {{.Country}}.\n"
    t := template.Must(template.New("person").Parse(tpl))

    err := t.Execute(os.Stdout, person)
    if err != nil {
        fmt.Println("Error executing template:", err)
    }
}
```

Bu mysalda Şahsy atly maglumat gurluşy kesgitlenýär. Soň, tpl üýtgeýjisinde şablonyň teksti bar. Şablonda ulanyljak üýtgeýjiler {{.}} Alamatlarynyň arasynda ýazylýar. Bu üýtgeýjilere maglumat gurluşynda meýdanlar berler.

Soňra, şablon.Must () funksiýasynyň kömegi bilen täze Şablon obýekti döredilýär we şablon teksti bu obýekte Parse () funksiýasy bilen bellenýär. Soňra, Execute () funksiýasyny ulanyp, Şablon obýekti maglumat gurluşy we os.Stdout (standart çykyş) ýazyjysy bilen işlenýär we netijesi ekrana çap edilýär.

Programmanyň netijesi:

```
My name is John and I am 30 years old. I live in USA.
```