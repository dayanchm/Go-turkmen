# <div align="center">Go Programmirleme dili - Sintaksis(Syntax) we maglumatlaryň görnüşleri (data type)</div>

- Bu makalada, Go Programming diliniň sintaksis(Syntax), görnüşi(type), açar sözleri(keywords), üýtgeýän kesgitlemesi(variable definition), yzygiderliligi(constants) ýaly esasy gurluşlary barada. Mundan başga-da, mysallar bilen setir üýtgeýjilerinde UTF-8 goldawy barada aydyp geçeris.

- Go programmirleme dilinde jemi 25 açar söz(keywords) bar. Beýleki programmirleme dilleri bilen deňeşdirilende, Go iň az açar sözli (keywords) dilleriň biridir. 

## Go dilindäki açar sözler

 ``` - break    default     func   interface select
  - case     defer       go     map      struct
  - chan     else        goto   package  switch
  - const    fallthrough if     range    type
  - continue for         import
  ```
  
## Operatorlar we çäklendirijiler (limiters) 47 sanak.

 ``` +   &   +=  &=   &&  ==  !=  (  )
    -   |   -=  |=   ||  <   <=  [  ]
    *   ^   *=  ^=   <-  >   >=  {  }
    /   <<  /=  <<=  ++  =   :=  ,  ;
    %   >>  %=  >>=   —  !    …  .  :
    &^  &^=
  ```
  
## Variable (Tm-dilinde üytgeyji bolyar in gowsy variable diysek has gowusy) 

- Go dilinde üýtgeýänleri yglan etmegiň köp usuly bar. Bularyň birinjisi, baha bellemezden kesgitlemegiň usulydyr.

```
var t int
```

- Islesek, üýtgeýän kesgitleme wagtynda = operator bilen bahalary hem belläp bileris.

```
var t int = 10
```

- Gysga üýtgeýän kesgitleme diýip biljek başga bir usulymyz bar. Bu kesgitlemede := operator ulanylýar we <strong> üýtgeýjini(variable) kesgitläniňde bir baha berilmeli </strong>.
Lokal üýtgeýji hökmünde ulanylýar. Diňe ilki kesgitlenen ýerinde hereket edýär. Yagny, bir funksiýanyň içinde kesgitlenen bolsa, diňe şol funksiýanyň içinde hereket edýär ýa-da funksiýanyň içinde aýlaw döredilende kesgitlenen bolsa, diňe şol aýlawyň içinde hereket edýär.

```
t := 10
```
- Kesgitleme wagtynda bir görnüşi görkezmek islenýän bolsa, üýtgeýjini gaplamak arkaly döredip bolýar.
