# Test web sahypasy

Bu statik website goşmaça serwer ýa-da maglumat bazasy talap etmeýär.

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

## GitHub Pages-de çap etmek

1. GitHub repozitoriýasynyň **Settings → Pages** bölümine gir.
2. **Build and deployment** çeşmesi hökmünde **GitHub Actions** saýla.
3. Repozitoriýany GitHub-a push et.
4. Deploy tamamlanandan soň Pages salgysy şol bölümde görkeziler.

`.github/workflows/pages.yml` faýly `website` bukjasyny awtomatik çap edýär.
