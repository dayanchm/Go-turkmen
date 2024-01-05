# Constants

Programmanyň hiç ýerinde üýtgedip bolmaýan Go programma dilinde üýtgewsiz bahalar. Dowamlar bir gezek kesgitlenýär we soňra programmanyň islendik ýerinde ulanylyp bilner.

Dowamlar const açar söz bilen kesgitlenýär we maglumatlaryň görnüşleri görkezilýär. Dowamlar başlangyç bolmaly we soň üýtgedilip bilinmez.

```golang
const pi = 3.14159
const welcomeMessage = "Welcome to Go programming"
````

Bu mysalda hemişelik pi float64 görnüşi hökmünde kesgitlenýär we 3.14159-a başlaýar. Ondan soň, “WelcomeMessage” hemişelik setir hökmünde kesgitlenýär we “Hoş geldiňiz programmirleme” -e başlaýar.

Dowamlar belli bir maksat üçin ulanyljak programmalaryň hemişelik bahalaryny saklamak üçin ulanylýar. Mysal üçin, pi san ýa-da belli bir habar ýa-da säwlik kody. Dowamly programmalar has okalýan we dowam etdirilmäge kömek edýär we şol bir hemişelik programmanyň dürli ýerlerinde birnäçe gezek ulanmagy aňsatlaşdyrýar.

Dowamlylygy programmanyň islendik ýerinde ulanyp bolýandygy sebäpli, dürli faýllaryň arasynda hem paýlaşyp bolýar. Mundan başga-da, yzygiderliligiň üýtgedilip bilinmezligi programma ýalňyşlyklaryny azaldar we howpsuzlygy ýokarlandyrýar.