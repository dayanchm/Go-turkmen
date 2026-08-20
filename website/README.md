# Test web sahypasy

Bu statik website goşmaça serwer ýa-da maglumat bazasy talap etmeýär.

**Production website:** [https://go.dayanch.dev/](https://go.dayanch.dev/)

**Interaktiw sözlük:** [https://go.dayanch.dev/sozluk.html](https://go.dayanch.dev/sozluk.html)

Sahypa PWA hökmünde taýýarlanyldy: goldaýan brauzerlerde telefona ýa-da kompýutere programma ýaly gurup, internet ýok wagty hem ulanyp bolýar. Test netijelerine görä achievement nyşanlary açylýar.

Goşmaça aýratynlyklar:

- her sapagyň ahyrynda aýratyn mini-test;
- resmi Go Playground hyzmatynda kod işletmek we paýlaşmak;
- tamamlanan sapaklary, iň gowy netijäni, streak-i we nyşanlary görkezýän lokal profil.

## Kompýuterde açmak

`website/index.html` faýlyny brauzerde açyp bolýar. Lokal web server bilen işletmek üçin:

```bash
cd website
python3 -m http.server 8080
```

Soň `http://localhost:8080` salgysyny aç.

## Production

Website Vercel-de çap edilýär we [go.dayanch.dev](https://go.dayanch.dev/) domeninde işleýär. Vercel taslamasynda Root Directory hökmünde `website` saýlanmaly.
