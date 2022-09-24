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

Bu paketi aşakdaky ýaly kodda import edýäris
