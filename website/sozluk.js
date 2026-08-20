const terms = [
  { en: "Algorithm", tk: "Algoritm", cat: "Esaslar", desc: "Belli bir meseläni çözmek üçin ýerine ýetirilýän anyk ädimleriň tertibi.", code: "result := binarySearch(values, target)" },
  { en: "Syntax", tk: "Sintaksis", cat: "Esaslar", desc: "Programmirleme dilinde kody dogry ýazmagyň grammatik düzgünleri." },
  { en: "Statement", tk: "Buýruk / aňlatma", cat: "Esaslar", desc: "Programmada ýerine ýetirilýän aýratyn görkezme.", code: "count++" },
  { en: "Expression", tk: "Hasaplanýan aňlatma", cat: "Esaslar", desc: "Hasaplananda bir baha öndürýän kod bölegi.", code: "price * quantity" },
  { en: "Compile", tk: "Kompilýasiýa etmek", cat: "Esaslar", desc: "Go koduny kompýuteriň ýerine ýetirip bilýän binary görnüşine öwürmek.", code: "go build" },
  { en: "Runtime", tk: "Ýerine ýetiriliş gurşawy", cat: "Esaslar", desc: "Programma işleýän wagty goroutine, ýat we garbage collector ýaly işleri dolandyrýan ulgam." },
  { en: "Variable", tk: "Üýtgeýji", cat: "Maglumat", desc: "Programma işleýän wagty baha saklaýan atlandyrylan ýer.", code: "name := \"Aman\"" },
  { en: "Constant", tk: "Hemişelik", cat: "Maglumat", desc: "Programma işleýän wagty üýtgedilip bilinmeýän baha.", code: "const MaxSize = 100" },
  { en: "Type", tk: "Maglumat görnüşi", cat: "Maglumat", desc: "Bahanyň nähili maglumat saklaýandygyny we onuň bilen haýsy amallaryň mümkindigini kesgitleýär." },
  { en: "Boolean", tk: "Logiki görnüş", cat: "Maglumat", desc: "Diňe true ýa-da false bahasyny kabul edýän bool görnüşi.", code: "enabled := true" },
  { en: "String", tk: "Setir", cat: "Maglumat", desc: "UTF-8 kodlanan baýtlar toplumy hökmünde tekst saklaýan görnüş.", code: "message := \"Salam\"" },
  { en: "Rune", tk: "Unicode nyşany", cat: "Maglumat", desc: "Bir Unicode code point-i görkezýän int32 görnüşiniň lakamy.", code: "letter := 'Ş'" },
  { en: "Array", tk: "Kesgitli uzynlykly toplum", cat: "Maglumat", desc: "Bir görnüşli we uzynlygy öňünden belli elementleri saklaýan gurluş.", code: "numbers := [3]int{10, 20, 30}" },
  { en: "Slice", tk: "Dilim", cat: "Maglumat", desc: "Array-a daýanýan, uzynlygy üýtgäp bilýän çeýe maglumat gurluşy.", code: "names := []string{\"Aman\", \"Mähri\"}" },
  { en: "Map", tk: "Açar–baha toplumy", cat: "Maglumat", desc: "Her bahany aýratyn açar bilen baglanyşdyrýan maglumat gurluşy.", code: "ages := map[string]int{\"Aman\": 24}" },
  { en: "Struct", tk: "Gurluş", cat: "Maglumat", desc: "Birnäçe atlandyrylan meýdany bir görnüşde birleşdirýär.", code: "type User struct { Name string; Age int }" },
  { en: "Pointer", tk: "Görkeziji", cat: "Maglumat", desc: "Başga bir bahanyň ýat salgysyny saklaýar.", code: "pointer := &value" },
  { en: "Nil", tk: "Boş salgylanma", cat: "Maglumat", desc: "Pointer, slice, map, channel, function ýa-da interface-iň hiç zady görkezmeýän nol bahasy." },
  { en: "Function", tk: "Funksiýa", cat: "Funksiýa", desc: "Belli bir işi ýerine ýetirýän, atlandyrylan we gaýtadan ulanylýan kod bölegi.", code: "func add(a, b int) int { return a + b }" },
  { en: "Parameter", tk: "Parametr", cat: "Funksiýa", desc: "Funksiýanyň kesgitlemesinde kabul edilýän maglumat üçin ýazylan üýtgeýji." },
  { en: "Argument", tk: "Argument", cat: "Funksiýa", desc: "Funksiýa çagyrylanda parametre geçirilýän hakyky baha.", code: "add(2, 3)" },
  { en: "Return value", tk: "Gaýtarylýan baha", cat: "Funksiýa", desc: "Funksiýa tamamlananda ony çagyran koda berilýän netije." },
  { en: "Closure", tk: "Daşky bahany ýatda saklaýan funksiýa", cat: "Funksiýa", desc: "Öz daşyndaky üýtgeýjilere ýüzlenip, olary ýatda saklap bilýän funksiýa." },
  { en: "Method", tk: "Usul / method", cat: "Funksiýa", desc: "Belli bir receiver görnüşine baglanan funksiýa.", code: "func (u User) Name() string { return u.name }" },
  { en: "Receiver", tk: "Method-i kabul ediji", cat: "Funksiýa", desc: "Method-yň haýsy görnüşe degişlidigini görkezýän parametr." },
  { en: "Interface", tk: "Usullar talaby", cat: "Funksiýa", desc: "Bir görnüşiň ýerine ýetirmeli method-larynyň toplumyny kesgitleýär.", code: "type Reader interface { Read([]byte) (int, error) }" },
  { en: "Generic", tk: "Umumy görnüşli kod", cat: "Funksiýa", desc: "Birnäçe maglumat görnüşi bilen type-safe işleýän funksiýa ýa-da gurluş.", code: "func Max[T cmp.Ordered](a, b T) T" },
  { en: "Error", tk: "Ýalňyşlyk", cat: "Ýalňyşlyk", desc: "Amalyň näme üçin şowsuz bolandygyny düşündirýän error interface bahasy.", code: "if err != nil { return err }" },
  { en: "Defer", tk: "Soňa goýlan çagyryş", cat: "Ýalňyşlyk", desc: "Funksiýa tamamlanmazdan öň ýerine ýetiriljek çagyryşy belleýär.", code: "defer file.Close()" },
  { en: "Panic", tk: "Adatdan daşary togtama", cat: "Ýalňyşlyk", desc: "Adaty dolandyrylyp bolmaýan ýagdaýda häzirki ýerine ýetirilişi saklaýar." },
  { en: "Recover", tk: "Panic-den dikeldiş", cat: "Ýalňyşlyk", desc: "Deferred funksiýanyň içinde panic bahasyny saklap, programmanyň ýykylmagynyň öňüni alyp biler." },
  { en: "Goroutine", tk: "Ýeňil ýerine ýetiriliş birligi", cat: "Concurrency", desc: "Go runtime tarapyndan dolandyrylýan, beýleki işler bilen bir wagtda işläp bilýän ýeňil funksiýa.", code: "go doWork()" },
  { en: "Channel", tk: "Maglumat alyş kanaly", cat: "Concurrency", desc: "Goroutine-laryň arasynda type-safe maglumat geçirmek üçin ulanylýar.", code: "messages := make(chan string)" },
  { en: "Buffered channel", tk: "Buferli kanal", cat: "Concurrency", desc: "Belli mukdarda bahany kabul ediji taýýar bolmazdan saklap bilýän channel.", code: "jobs := make(chan Job, 10)" },
  { en: "Select", tk: "Channel saýlawy", cat: "Concurrency", desc: "Birnäçe channel amalynyň haýsysynyň taýýardygyny barlap, birini ýerine ýetirýär." },
  { en: "Mutex", tk: "Özara gulplama", cat: "Concurrency", desc: "Bir wagtda diňe bir goroutine-a paýlaşylýan maglumaty üýtgetmäge rugsat berýär.", code: "mu.Lock(); count++; mu.Unlock()" },
  { en: "Data race", tk: "Maglumat ýaryşy", cat: "Concurrency", desc: "Bir ýat salgysyna birnäçe goroutine goragsyz ýüzlenende we azyndan biri ýazanda ýüze çykýar.", code: "go test -race ./..." },
  { en: "Deadlock", tk: "Özara garaşyp doňmak", cat: "Concurrency", desc: "Goroutine-lar biri-biriniň boşatjak resursyna garaşyp, hiç biri dowam edip bilmedik ýagdaý." },
  { en: "Context", tk: "Amalyň ömri we ýatyrylyşy", cat: "Concurrency", desc: "Timeout, cancellation we request-scoped maglumatlary funksiýalaryň arasynda geçirýär.", code: "ctx, cancel := context.WithTimeout(ctx, time.Second)" },
  { en: "Package", tk: "Paket", cat: "Gurallar", desc: "Bir maksada hyzmat edýän Go faýllarynyň toplumy.", code: "package main" },
  { en: "Module", tk: "Modul", cat: "Gurallar", desc: "Paketleri we olaryň dependency-lerini birleşdirýän, go.mod bilen kesgitlenýän taslama birligi.", code: "go mod init example.com/project" },
  { en: "Dependency", tk: "Daşarky baglylyk", cat: "Gurallar", desc: "Programmanyň işlemegi ýa-da build bolmagy üçin ulanýan başga paketi ýa-da moduly." },
  { en: "Garbage collector", tk: "Ulanylmaýan ýady arassalaýjy", cat: "Gurallar", desc: "Programma tarapyndan indi ulanylmaýan ýady awtomatik boşadýan runtime bölegi." },
  { en: "Benchmark", tk: "Öndürijilik ölçegi", cat: "Test", desc: "Koduň näçe çalt işleýändigini we näçe ýat ulanýandygyny ölçeýän test.", code: "go test -bench=. -benchmem" },
  { en: "Unit test", tk: "Bölekleýin test", cat: "Test", desc: "Bir funksiýanyň ýa-da kiçi kod birliginiň garaşylýan netijäni berýändigini barlaýar.", code: "func TestAdd(t *testing.T) {}" },
  { en: "Table-driven test", tk: "Tablisa esasly test", cat: "Test", desc: "Bir logikany birnäçe giriş we garaşylýan netije bilen barlaýan Go test usuly." },
  { en: "Mock", tk: "Ýasama implementasiýa", cat: "Test", desc: "Testde hakyky dependency-niň ýerine öňünden dolandyrylýan hereketi bolan obýekt." },
  { en: "HTTP handler", tk: "HTTP soragyny işleýji", cat: "Web", desc: "HTTP soragyny kabul edip, jogap ýazýan funksiýa ýa-da interface.", code: "func(w http.ResponseWriter, r *http.Request)" },
  { en: "Middleware", tk: "Aralyk işleýji gatlak", cat: "Web", desc: "HTTP handler-den öň ýa-da soň logging, auth we beýleki umumy işleri ýerine ýetirýär." },
  { en: "Endpoint", tk: "API salgysy", cat: "Web", desc: "API-de belli bir işi ýerine ýetirýän HTTP method we URL kombinasiýasy.", code: "GET /api/users" },
  { en: "JSON", tk: "Maglumat alyş formaty", cat: "Web", desc: "Obýekt we sanaw görnüşindäki maglumatlary tekst hökmünde geçirmek üçin ulanylýan format." },
  { en: "REST API", tk: "HTTP esasly hyzmat interfeýsi", cat: "Web", desc: "Resurslary HTTP method-lary arkaly döretmek, okamak, täzelemek we pozmak üçin gurluş." },
  { en: "Repository", tk: "Maglumat saklaýjy gatlak", cat: "Arhitektura", desc: "Maglumat bazasy amallaryny business logic-den aýyrýan interfeýs ýa-da gurluş." },
  { en: "Dependency injection", tk: "Baglylygy daşyndan geçirmek", cat: "Arhitektura", desc: "Dependency-ni görnüşiň içinde döretmän, constructor ýa-da parametr arkaly geçirmek usuly." },
  { en: "Worker pool", tk: "Işçi goroutine-lar topary", cat: "Arhitektura", desc: "Işleri çäkli mukdardaky goroutine bilen ýerine ýetirýän concurrency gurluşy." },
  { en: "Pipeline", tk: "Ädimleýin maglumat akymy", cat: "Arhitektura", desc: "Maglumaty biri-birine birikdirilen birnäçe işleme ädiminden geçirýän gurluş." }
];

const elements = {
  theme: document.querySelector("#theme-button"), total: document.querySelector("#total-terms"),
  search: document.querySelector("#term-search"), filters: document.querySelector("#category-filters"),
  grid: document.querySelector("#term-grid"), count: document.querySelector("#visible-count"),
  empty: document.querySelector("#term-empty"), random: document.querySelector("#random-term-button"),
  dailyTitle: document.querySelector("#daily-term-title"), dailyDescription: document.querySelector("#daily-term-description"),
  dailyButton: document.querySelector("#daily-term-button"), dialog: document.querySelector("#term-dialog"),
  dialogClose: document.querySelector("#term-dialog-close"), dialogCategory: document.querySelector("#dialog-category"),
  dialogEnglish: document.querySelector("#dialog-english"), dialogTurkmen: document.querySelector("#dialog-turkmen"),
  dialogDescription: document.querySelector("#dialog-description"), dialogCode: document.querySelector("#dialog-code"),
  copyLink: document.querySelector("#copy-term-link"), copyStatus: document.querySelector("#copy-status")
};

let activeCategory = "Hemmesi";
let activeTerm;
const slug = (value) => value.toLowerCase().replaceAll(" ", "-");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  elements.theme.textContent = dark ? "☀" : "◐";
  elements.theme.setAttribute("aria-label", dark ? "Ýagty temany aç" : "Gara temany aç");
}

function renderFilters() {
  const categories = ["Hemmesi", ...new Set(terms.map((term) => term.cat))];
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.className = category === activeCategory ? "active" : "";
    button.addEventListener("click", () => {
      activeCategory = category;
      [...elements.filters.children].forEach((item) => item.classList.toggle("active", item === button));
      renderTerms();
    });
    elements.filters.append(button);
  });
}

function renderTerms() {
  const query = elements.search.value.trim().toLocaleLowerCase("tk");
  const filtered = terms.filter((term) => {
    const categoryMatches = activeCategory === "Hemmesi" || term.cat === activeCategory;
    const text = `${term.en} ${term.tk} ${term.desc}`.toLocaleLowerCase("tk");
    return categoryMatches && text.includes(query);
  });
  elements.grid.replaceChildren();
  elements.count.textContent = filtered.length;
  elements.empty.classList.toggle("hidden", filtered.length !== 0);

  filtered.forEach((term) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "term-card";
    button.innerHTML = `<small>${term.cat}</small><strong>${term.en}</strong><span>${term.tk}</span><p>${term.desc}</p><b>Giňişleýin →</b>`;
    button.addEventListener("click", () => openTerm(term));
    elements.grid.append(button);
  });
}

function openTerm(term, updateHash = true) {
  activeTerm = term;
  elements.dialogCategory.textContent = term.cat;
  elements.dialogEnglish.textContent = term.en;
  elements.dialogTurkmen.textContent = term.tk;
  elements.dialogDescription.textContent = term.desc;
  elements.dialogCode.classList.toggle("hidden", !term.code);
  elements.dialogCode.querySelector("code").textContent = term.code || "";
  elements.copyStatus.textContent = "";
  if (updateHash) history.replaceState(null, "", `#${slug(term.en)}`);
  elements.dialog.showModal();
}

function closeTerm() {
  elements.dialog.close();
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

async function copyTermLink() {
  const url = `${window.location.origin}${window.location.pathname}#${slug(activeTerm.en)}`;
  try {
    await navigator.clipboard.writeText(url);
    elements.copyStatus.textContent = "Link göçürildi.";
  } catch {
    elements.copyStatus.textContent = "Linki göçürmek başartmady.";
  }
}

function openRandomTerm() {
  openTerm(terms[Math.floor(Math.random() * terms.length)]);
}

const dailyTerm = terms[Math.floor(Date.now() / 86400000) % terms.length];
elements.total.textContent = terms.length;
elements.dailyTitle.textContent = `${dailyTerm.en} — ${dailyTerm.tk}`;
elements.dailyDescription.textContent = dailyTerm.desc;
elements.dailyButton.addEventListener("click", () => openTerm(dailyTerm));
elements.search.addEventListener("input", renderTerms);
elements.random.addEventListener("click", openRandomTerm);
elements.dialogClose.addEventListener("click", closeTerm);
elements.dialog.addEventListener("close", () => {
  if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
});
elements.copyLink.addEventListener("click", copyTermLink);
elements.theme.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("go-test-theme", theme);
  applyTheme(theme);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !elements.dialog.open && document.activeElement !== elements.search) {
    event.preventDefault();
    elements.search.focus();
  }
});

applyTheme(localStorage.getItem("go-test-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
renderFilters();
renderTerms();
document.querySelector("#current-year").textContent = new Date().getFullYear();

const hashTerm = terms.find((term) => slug(term.en) === window.location.hash.slice(1));
if (hashTerm) openTerm(hashTerm, false);

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));

