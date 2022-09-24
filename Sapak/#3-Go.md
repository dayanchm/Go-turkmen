# <div align="center">Go Programlama Dili — Paketler</div>

Go dilinde kod guramasy paketler bilen üpjün edilýär. Paket aslynda diskdäki bukjadaky faýllary görkezýär. Go dilinde, kod-da ulanýan kitaphanalarymyzyň ikisi we esasy kodumyz paketlerdir.

## Paketlere a:t berme

- Pakete adyny tutanyňyzda, paketin öz içine alýan paketiň ady bilen birmeňzeş bolmagyna garaşylýar, ýöne talap edilmeýär.
- Paket kesgitlemesi kod sahypasynyň ýokarsyndaky <strong>package</strong> keyword’i  bilen ýerine ýetirilýär.

- Her kod yazylan wagty "package" yazgysy yazylmalydyr.

```
package sendMail

import {
…
..
..

```

- Mysal üçin, paketimizin ýerleşýän katalogy aşakdaky ýaly:

```
$GOPATH/src/foo/bar
```

Bu paketi aşakdaky ýaly kodda import edýäris.

```
import “foo/bar”
```
Bar paketini GitHub-da foo atly ammarda import etjek bolsak, ony aşakdaky ýaly import edip bileris:
github.com/nailcankucuk/foo/bar import ediň.

```
package main

import “github.com/nailcankucuk/foo/bar”

func main() {
 bar.sayHello()
}
```

<strong>(Executable) Paketler</strong>

- Executable programs must have a source code that is packaged as main and contains the main() function. The main() function can be defined once, takes no parameters, and has no return type. Our application first starts running from this main function.


```
package main

func main() {
 fmt.Println(“Naber?”)
}
```
