# Panic

panic, Go dilinde programmanyň ýerine ýetirilişini togtatmaga we programmanyň ýerine ýetirilişinde garaşylmadyk ýagdaýa duçar bolanda säwlik habary bermäge mümkinçilik berýän aýratynlyk.

Aljyraňňylyk adatça ulanylmaly däldir, sebäbi bu ýalňyşlyk, ýöne säwlik ýüze çykan halatynda programmanyň garaşylmadyk ýagdaýda gutarmagynyň öňüni almak üçin ulanylyp bilner. Aljyraňňy ulananyňyzda programmanyň ýerine ýetirilmegi togtadylýar we galan kodlaryň ýerine ýetirilmegi bes edilýär.

Aljyraňňy ulanylyş mysaly:

```golang
package main

import "fmt"

func main() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("Panic yakalandı:", err)
		}
	}()

	divideByZero()
	fmt.Println("Bu kod çalışacak mı?")
}

func divideByZero() {
	numerator := 10
	denominator := 0
	result := numerator / denominator
	fmt.Println("Sonuç:", result)
}

```

Bu mysalda, divideByZero atly bir funksiýamyz bar. Bu funksiýada, san görkezijisini 10-a we denominatory 0-a bellänimizden soň, netijäniň üýtgeýjisinde san görkezijisini bölýäris. Şeýle-de bolsa, denominator 0 bolsa, matematiki taýdan nädogry amal etmäge synanyşýarys. Bu ýagdaýda nol ýalňyşlyk bilen bölünişik ýüze çykýar we howsala ýagdaýy ýüze çykýar.

Esasy funksiýanyň içinde yza süýşürmek beýany ulanyp, bir funksiýany yza süýşürýäris. Bu yza süýşürilen funksiýa dikeltmek () funksiýasyny ulanyp, howsala düşmek üçin ulanylýar. Aljyraňňylyk ýüze çyksa, dikeltmek () funksiýasy howsala sebäpli ýüze çykan ýalňyşlygy yzyna gaýtaryp berýär we ýalňyş üýtgeýjä belleýär. Soň bolsa, ýalňyş! = Nil bar bolsa, howsala ýagdaýynyň bardygyny ýa-da ýokdugyny barlaýarys.

DivideByZero () funksiýasynda howsala ýüze çyksa, dikeltmek () funksiýasy tutular we ýalňyş üýtgeýjä bellener. Soň bolsa, fmt.Println () jümlesi bilen "Panik tutuldy: {error}" ýaly çykyş eder. Şeýlelik bilen, programma işlemegini bes etmez we dowam eder.