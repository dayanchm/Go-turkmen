const lessons = {
  array: {
    number: "01 / 06",
    title: "Array",
    description: "Bir görnüşli we öňünden belli mukdardaky maglumatlary saklaýan gurluş.",
    note: "Array-yň uzynlygy onuň görnüşiniň bir bölegidir.",
    code: "numbers := [3]int{10, 20, 30}\nfmt.Println(numbers[0]) // 10",
    quiz: ["Array-yň uzynlygy haçan kesgitlenýär?", ["Programma işleýän wagty", "Compile wagty", "Her append-de"], 1, "Array-yň uzynlygy onuň görnüşinde öňünden görkezilýär."]
  },
  slice: {
    number: "02 / 06",
    title: "Slice",
    description: "Array-a daýanýan, emma uzynlygy üýtgäp bilýän çeýe maglumat gurluşy.",
    note: "append täze esasy array döredip biler, şonuň üçin netijäni täzeden belle.",
    code: "names := []string{\"Aman\", \"Mähri\"}\nnames = append(names, \"Myrat\")\nfmt.Println(len(names)) // 3",
    quiz: ["Slice-e täze element goşýan funksiýa haýsy?", ["push", "append", "insert"], 1, "Go-da slice-e element append bilen goşulýar."]
  },
  map: {
    number: "03 / 06",
    title: "Map",
    description: "Maglumaty açar we baha görnüşinde saklaýan gurluş.",
    note: "Map-dan baha alanyňda ikinji ok bahasy açaryň bardygyny görkezýär.",
    code: "ages := map[string]int{\"Aman\": 24}\nage, ok := ages[\"Aman\"]\nfmt.Println(age, ok) // 24 true",
    quiz: ["Map-daky ok bahasy nämäni görkezýär?", ["Map-yň uzynlygyny", "Açaryň bardygyny", "Bahanyň görnüşini"], 1, "ok true bolsa, berlen açar map-da bar."]
  },
  interface: {
    number: "04 / 06",
    title: "Interface",
    description: "Görnüşiň ýerine ýetirmeli usullarynyň toplumyny kesgitleýär.",
    note: "Go-da implements ýazylmaýar; gerekli usullar ýeterlikdir.",
    code: "type Speaker interface {\n    Speak() string\n}\n\nfunc printVoice(s Speaker) {\n    fmt.Println(s.Speak())\n}",
    quiz: ["Görnüş interface-i nähili kanagatlandyrýar?", ["implements ýazyp", "Gerekli usullary ýazyp", "Diňe embedding bilen"], 1, "Go-da interface implicit, ýagny awtomatik kanagatlandyrylýar."]
  },
  goroutine: {
    number: "05 / 06",
    title: "Goroutine",
    description: "Funksiýany beýleki işler bilen bir wagtda ýeňil görnüşde işletmäge mümkinçilik berýär.",
    note: "Başlanan goroutine-yň ömrüni channel ýa-da context bilen dolandyr.",
    code: "go func() {\n    fmt.Println(\"Salam!\")\n}()",
    quiz: ["Funksiýany goroutine-da başlatmak üçin näme ýazylýar?", ["async", "go", "thread"], 1, "Funksiýa çagyryşynyň öňünde go açar sözi ýazylýar."]
  },
  channel: {
    number: "06 / 06",
    title: "Channel",
    description: "Goroutine-laryň arasynda maglumat geçirmek üçin ulanylýan howpsuz kanal.",
    note: "Channel-y adatça maglumat iberýän tarap ýapýar.",
    code: "messages := make(chan string)\ngo func() { messages <- \"taýýar\" }()\nfmt.Println(<-messages)",
    quiz: ["Channel-yň esasy wezipesi näme?", ["Faýl saklamak", "Goroutine-laryň arasynda maglumat geçirmek", "Kody formatlamak"], 1, "Channel goroutine-laryň maglumat alyşmagy üçin ulanylýar."]
  }
};

const codeExamples = {
  hello: `package main

import "fmt"

func main() {
	fmt.Println("Salam, Go!")
}`,
  slice: `package main

import "fmt"

func main() {
	numbers := []int{2, 4, 6}
	numbers = append(numbers, 8)
	fmt.Println(numbers)
}`,
  goroutine: `package main

import (
	"fmt"
	"sync"
)

func main() {
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println("Goroutine işleýär")
	}()
	wg.Wait()
}`,
  interface: `package main

import "fmt"

type Speaker interface { Speak() string }
type Person struct { Name string }
func (p Person) Speak() string { return "Salam, " + p.Name }

func main() {
	var s Speaker = Person{Name: "Aman"}
	fmt.Println(s.Speak())
}`
};

const tips = [
  ["Go kody ýönekeý bolanda güýçlidir.", "Funksiýalary kiçi sakla we her funksiýa diňe bir işi tabşyr."],
  ["Ýalňyşlygy ýitirme.", "error bahasyny barla, peýdaly kontekst goş we zerur bolsa ýokary gatlaga gaýtar."],
  ["Ilki standart paketlere seret.", "Daşarky baglylyk goşmazdan öň Go-nyň standart kitaphanasynda çözgüt bardygyny barla."],
  ["Testi kod bilen bile ýaz.", "Kiçi table-driven testler üýtgetmeleri has ynamly etmäge kömek edýär."],
  ["Concurrency hemişe parallelizm däl.", "Goroutine işleriň gurluşyny aňsatlaşdyrýar, emma paýlaşylýan maglumaty goramak gerek."],
  ["Kody gofmt bilen formatla.", "Birmeňzeş format toparyň kody has aňsat okamagyna mümkinçilik berýär."]
];

const questions = [
  {
    category: "Başlangyç",
    question: "Go programmasynyň başlangyç funksiýasy haýsy?",
    answers: ["start()", "main()", "run()", "initApp()"],
    correct: 1,
    explanation: "Programma main paketindäki main() funksiýasyndan başlanýar."
  },
  {
    category: "Başlangyç",
    question: "Üýtgeýjini gysga görnüşde haýsy operator bilen döredip bolýar?",
    answers: ["=", "==", ":=", "=>"],
    correct: 2,
    explanation: ":= üýtgeýjini döredýär we onuň görnüşini awtomatik kesgitleýär."
  },
  {
    category: "Başlangyç",
    question: "Haýsy görnüş diňe true ýa-da false bahasyny kabul edýär?",
    answers: ["string", "bool", "int", "byte"],
    correct: 1,
    explanation: "bool görnüşiniň diňe true we false bahalary bar."
  },
  {
    category: "Başlangyç",
    question: "Go-da gaýtalama üçin haýsy açar söz ulanylýar?",
    answers: ["while", "loop", "repeat", "for"],
    correct: 3,
    explanation: "Go dilinde ähli gaýtalama görnüşleri üçin for ulanylýar."
  },
  {
    category: "Maglumat gurluşlary",
    question: "Array bilen slice arasynda esasy tapawut näme?",
    answers: ["Slice diňe setir saklaýar", "Array-yň uzynlygy onuň görnüşiniň bir bölegidir", "Array hemişe boş bolýar", "Slice indeks bilen ulanylmaýar"],
    correct: 1,
    explanation: "[3]int we [4]int dürli görnüşlerdir, slice-iň uzynlygy bolsa üýtgäp biler."
  },
  {
    category: "Funksiýalar",
    question: "Funksiýadan ýalňyşlyk gaýtarmagyň adaty görnüşi haýsy?",
    answers: ["func work() panic", "func work() (Result, error)", "func work() exception", "func work() catch"],
    correct: 1,
    explanation: "Go-da ýalňyşlyk adatça iň soňky error baha hökmünde gaýtarylýar."
  },
  {
    category: "Paketler",
    question: "Baş harply User ady nämäni aňladýar?",
    answers: ["Diňe şol faýlda görünýär", "Üýtgedip bolmaýar", "Beýleki paketlerden elýeterlidir", "Ol hökmany interface-dir"],
    correct: 2,
    explanation: "Baş harply at paketden eksport edilýär."
  },
  {
    category: "Funksiýalar",
    question: "Closure näme?",
    answers: ["Faýly ýapýan funksiýa", "Daşky üýtgeýjilere ýüzlenip bilýän funksiýa", "Ýapyk channel", "Ýalňyşlygyň bir görnüşi"],
    correct: 1,
    explanation: "Closure öz daşyndaky üýtgeýjileri ulanyp we ýatda saklap biler."
  },
  {
    category: "Görnüşler",
    question: "Interface nähili kanagatlandyrylýar?",
    answers: ["implements açar sözi bilen", "Gerekli usullary ýazmak bilen", "Diňe struct embedding bilen", "interface paketini import etmek bilen"],
    correct: 1,
    explanation: "Görnüş gerekli usullary ýazanda interface-i awtomatik kanagatlandyrýar."
  },
  {
    category: "Ýalňyşlyklar",
    question: "defer bilen bellenen funksiýa haçan işleýär?",
    answers: ["Derrew", "Bir sagatdan soň", "Daşyny gurşap alan funksiýa tamamlananda", "Diňe ýalňyşlyk bolanda"],
    correct: 2,
    explanation: "defer funksiýa tamamlanmazdan öň işleýär."
  },
  {
    category: "Goroutine",
    question: "Täze goroutine nähili başlanýar?",
    answers: ["async work()", "thread work()", "go work()", "await work()"],
    correct: 2,
    explanation: "Funksiýanyň öňündäki go ony täze goroutine-da başladýar."
  },
  {
    category: "Channel",
    question: "Channel-yň wezipesi näme?",
    answers: ["Faýllary saklamak", "Goroutine-laryň arasynda maglumat geçirmek", "HTTP salgysyny döretmek", "Kody formatlamak"],
    correct: 1,
    explanation: "Channel goroutine-laryň howpsuz maglumat alyşmagyna hyzmat edýär."
  },
  {
    category: "Channel",
    question: "Ýapylan channel-dan maglumat okap bolýarmy?",
    answers: ["Ýok, programma hemişe ýykylýar", "Hawa, galan bahalar we soň görnüşiň nol bahasy alynýar", "Diňe panic bilen", "Diňe buffered däl channel-da"],
    correct: 1,
    explanation: "Ilki galan bahalar, soň nol baha we false ýagdaýy alynýar."
  },
  {
    category: "Channel",
    question: "select näme üçin ulanylýar?",
    answers: ["Birnäçe channel amalynyň arasynda saýlamak üçin", "SQL soragyny ýazmak üçin", "Slice elementini saýlamak üçin", "Paket import etmek üçin"],
    correct: 0,
    explanation: "select taýýar channel amallarynyň birini saýlaýar."
  },
  {
    category: "Goroutine",
    question: "Data race näme?",
    answers: ["Iki testiň bir wagtda işlemegi", "Bir maglumat ýadyna birnäçe goroutine-yň goragsyz ýüzlenmegi we azyndan biriniň ýazmagy", "Channel-yň boş bolmagy", "Programma haýal işlemegi"],
    correct: 1,
    explanation: "Bir wagtda goragsyz okamak we ýazmak näbellilik döredýär."
  },
  {
    category: "Kod soragy",
    question: "Bu kod näme çykarar?",
    code: "values := []int{2, 4, 6}\nfmt.Println(len(values), cap(values))",
    answers: ["2 6", "3 3", "3 6", "6 3"],
    correct: 1,
    explanation: "Üç elementli literal slice-iň uzynlygy we kuwwaty 3 bolýar."
  },
  {
    category: "Kod soragy",
    question: "Bu koduň netijesi näme?",
    code: "x := 10\np := &x\n*p = 20\nfmt.Println(x)",
    answers: ["10", "20", "&20", "Compile error"],
    correct: 1,
    explanation: "p üýtgeýjisi x-iň salgysyny görkezýär, şonuň üçin x hem 20 bolýar."
  },
  {
    category: "Map",
    question: "map-da ýok açary howpsuz barlamak üçin haýsy görnüş dogry?",
    answers: ["value, ok := items[key]", "value := items.get(key)", "items.has(key)", "value := find(items, key)"],
    correct: 0,
    explanation: "ok açaryň map-da bardygyny görkezýär."
  },
  {
    category: "Test",
    question: "Test faýlynyň ady nähili gutarmaly?",
    answers: [".spec.go", ".go.test", "_test.go", ".testing.go"],
    correct: 2,
    explanation: "Go test faýllary _test.go bilen gutarýar."
  },
  {
    category: "Test",
    question: "Ähli paketleriň testini işletmek üçin haýsy buýruk ulanylýar?",
    answers: ["go run tests", "go test ./...", "go check all", "go build test"],
    correct: 1,
    explanation: "./... häzirki moduldaky ähli paketleri aňladýar."
  }
];

const elements = {
  start: document.querySelector("#start-button"),
  intro: document.querySelector("#intro"),
  quiz: document.querySelector("#quiz"),
  result: document.querySelector("#result"),
  category: document.querySelector("#category"),
  current: document.querySelector("#current-number"),
  total: document.querySelector("#total-number"),
  progress: document.querySelector("#progress-bar"),
  question: document.querySelector("#question-text"),
  codeBlock: document.querySelector("#code-block"),
  codeText: document.querySelector("#code-text"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  next: document.querySelector("#next-button"),
  restart: document.querySelector("#restart-button"),
  share: document.querySelector("#share-button"),
  shareStatus: document.querySelector("#share-status"),
  theme: document.querySelector("#theme-button"),
  lessonTabs: [...document.querySelectorAll(".lesson-tab")],
  lessonNumber: document.querySelector("#lesson-number"),
  lessonTitle: document.querySelector("#lesson-title"),
  lessonDescription: document.querySelector("#lesson-description"),
  lessonNote: document.querySelector("#lesson-note"),
  lessonCode: document.querySelector("#lesson-code"),
  completeLesson: document.querySelector("#complete-lesson-button"),
  lessonCompleteStatus: document.querySelector("#lesson-complete-status"),
  miniTitle: document.querySelector("#mini-test-title"),
  miniAnswers: document.querySelector("#mini-test-answers"),
  miniFeedback: document.querySelector("#mini-test-feedback"),
  codeExample: document.querySelector("#code-example"),
  codeEditor: document.querySelector("#code-editor"),
  runCode: document.querySelector("#run-code-button"),
  shareCode: document.querySelector("#share-code-button"),
  editorStatus: document.querySelector("#editor-status"),
  codeOutput: document.querySelector("#code-output").querySelector("code"),
  profileLessons: document.querySelector("#profile-lessons"),
  profileBest: document.querySelector("#profile-best"),
  profileStreak: document.querySelector("#profile-streak"),
  profileAchievements: document.querySelector("#profile-achievements"),
  profilePercent: document.querySelector("#profile-percent"),
  profileProgress: document.querySelector("#profile-progress-bar"),
  profileLessonList: document.querySelector("#profile-lesson-list"),
  tipTitle: document.querySelector("#tip-title"),
  tipText: document.querySelector("#tip-text"),
  newTip: document.querySelector("#new-tip-button"),
  questionCount: document.querySelector("#question-count"),
  shuffle: document.querySelector("#shuffle-questions"),
  bestScore: document.querySelector("#best-score"),
  timer: document.querySelector("#timer"),
  retryWrong: document.querySelector("#retry-wrong-button"),
  streak: document.querySelector("#study-streak"),
  commandButton: document.querySelector("#command-button"),
  commandDialog: document.querySelector("#command-dialog"),
  commandSearch: document.querySelector("#command-search"),
  commandClose: document.querySelector("#command-close"),
  commandResults: document.querySelector("#command-results"),
  commandEmpty: document.querySelector("#command-empty"),
  install: document.querySelector("#install-button"),
  achievement: document.querySelector("#achievement"),
  achievementMark: document.querySelector("#achievement-mark"),
  achievementTitle: document.querySelector("#achievement-title"),
  scoreRing: document.querySelector("#score-ring"),
  scorePercent: document.querySelector("#score-percent"),
  scoreText: document.querySelector("#score-text"),
  resultMessage: document.querySelector("#result-message"),
  review: document.querySelector("#review")
};

let currentQuestion = 0;
let score = 0;
let selections = [];
let activeQuestions = [...questions];
let timerID;
let startedAt = 0;
let installPrompt;
let currentTip = new Date().getDate() % tips.length;
let currentLesson = "array";

elements.total.textContent = activeQuestions.length;

function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function startQuiz(customQuestions) {
  currentQuestion = 0;
  score = 0;
  selections = [];
  if (Array.isArray(customQuestions)) {
    activeQuestions = [...customQuestions];
  } else {
    const source = elements.shuffle.checked ? shuffled(questions) : [...questions];
    activeQuestions = source.slice(0, Number(elements.questionCount.value));
  }
  elements.total.textContent = activeQuestions.length;
  elements.retryWrong.classList.add("hidden");
  elements.achievement.classList.add("hidden");
  elements.shareStatus.classList.add("hidden");
  elements.intro.classList.add("hidden");
  elements.result.classList.add("hidden");
  elements.quiz.classList.remove("hidden");
  startTimer();
  renderQuestion();
  elements.quiz.scrollIntoView({ behavior: "smooth" });
}

function renderQuestion() {
  const item = activeQuestions[currentQuestion];
  elements.category.textContent = item.category;
  elements.current.textContent = currentQuestion + 1;
  elements.progress.style.width = `${((currentQuestion + 1) / activeQuestions.length) * 100}%`;
  elements.question.textContent = item.question;
  elements.answers.replaceChildren();
  elements.feedback.classList.add("hidden");
  elements.next.disabled = true;
  elements.next.textContent = currentQuestion === activeQuestions.length - 1 ? "Netijäni gör" : "Indiki sorag";

  if (item.code) {
    elements.codeText.textContent = item.code;
    elements.codeBlock.classList.remove("hidden");
  } else {
    elements.codeBlock.classList.add("hidden");
  }

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = answer;
    button.append(letter, text);
    button.addEventListener("click", () => selectAnswer(index));
    elements.answers.append(button);
  });
}

function selectAnswer(selectedIndex) {
  const item = activeQuestions[currentQuestion];
  const buttons = [...elements.answers.querySelectorAll("button")];

  buttons.forEach((button, index) => {
    button.disabled = true;
    button.setAttribute("aria-checked", String(index === selectedIndex));
    if (index === item.correct) button.classList.add("correct");
    if (index === selectedIndex && index !== item.correct) button.classList.add("wrong");
  });

  const isCorrect = selectedIndex === item.correct;
  if (isCorrect) score += 1;
  selections.push(selectedIndex);
  elements.feedback.textContent = `${isCorrect ? "Dogry!" : "Nädogry."} ${item.explanation}`;
  elements.feedback.classList.remove("hidden");
  elements.next.disabled = false;
}

function nextQuestion() {
  if (currentQuestion < activeQuestions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }
  showResult();
}

function showResult() {
  clearInterval(timerID);
  const percent = Math.round((score / activeQuestions.length) * 100);
  const duration = Date.now() - startedAt;
  elements.quiz.classList.add("hidden");
  elements.result.classList.remove("hidden");
  elements.scorePercent.textContent = `${percent}%`;
  elements.scoreRing.style.background = `conic-gradient(var(--go) ${percent}%, var(--line) ${percent}%)`;
  elements.scoreText.textContent = `${activeQuestions.length} soragdan ${score} sanysyna dogry jogap berdiň. Wagt: ${formatTime(duration)}.`;
  elements.resultMessage.textContent = getResultMessage(percent);
  saveBestScore(percent);
  const hasWrongAnswers = selections.some((selection, index) => selection !== activeQuestions[index].correct);
  elements.retryWrong.classList.toggle("hidden", !hasWrongAnswers);
  showAchievement(percent, duration);
  renderProfile();
  renderReview();
  elements.result.scrollIntoView({ behavior: "smooth" });
}

function getResultMessage(percent) {
  if (percent >= 90) return "Örän gowy! Go esaslaryny berk bilýärsiň.";
  if (percent >= 70) return "Gowy netije. Birnäçe temany gaýtalasaň ýeterlik.";
  if (percent >= 50) return "Esaslary ýene bir gezek gaýtalamak peýdaly bolar.";
  return "Sapaklary tertip boýunça geçip, soň testi ýene synanş.";
}

function renderReview() {
  elements.review.replaceChildren();
  activeQuestions.forEach((item, index) => {
    const isCorrect = selections[index] === item.correct;
    const article = document.createElement("article");
    article.className = `review-item ${isCorrect ? "correct-review" : "wrong-review"}`;

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${item.question}`;

    const status = document.createElement("p");
    status.className = "review-status";
    status.textContent = isCorrect ? "Dogry" : `Nädogry — dogry jogap: ${item.answers[item.correct]}`;

    const explanation = document.createElement("p");
    explanation.textContent = item.explanation;
    article.append(title, status, explanation);
    elements.review.append(article);
  });
}

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(timerID);
  startedAt = Date.now();
  elements.timer.textContent = "00:00";
  timerID = setInterval(() => {
    elements.timer.textContent = formatTime(Date.now() - startedAt);
  }, 1000);
}

function saveBestScore(percent) {
  const previous = Number(localStorage.getItem("go-test-best") || 0);
  const best = Math.max(previous, percent);
  localStorage.setItem("go-test-best", String(best));
  elements.bestScore.textContent = `${best}%`;
}

function retryWrongAnswers() {
  const wrongQuestions = activeQuestions.filter((item, index) => selections[index] !== item.correct);
  startQuiz(wrongQuestions);
}

function showAchievement(percent, duration) {
  const candidates = [];
  if (percent === 100) candidates.push(["perfect", "100", "Bir ýalňyşsyz"]);
  if (percent >= 90) candidates.push(["master", "GO", "Go ussady"]);
  if (percent >= 80 && duration < 120000) candidates.push(["fast", "<2", "Çalt pikir"]);
  candidates.push(["first", "01", "Ilkinji test"]);

  const unlocked = JSON.parse(localStorage.getItem("go-achievements") || "[]");
  const next = candidates.find(([id]) => !unlocked.includes(id));
  elements.achievement.classList.toggle("hidden", !next);
  if (!next) return;

  const [id, mark, title] = next;
  unlocked.push(id);
  localStorage.setItem("go-achievements", JSON.stringify(unlocked));
  elements.achievementMark.textContent = mark;
  elements.achievementTitle.textContent = title;
}

async function installApp() {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = undefined;
  elements.install.classList.add("hidden");
}

function localDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateStudyStreak() {
  const today = localDate();
  const lastVisit = localStorage.getItem("go-last-visit");
  let streak = Number(localStorage.getItem("go-study-streak") || 0);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastVisit !== today) {
    streak = lastVisit === localDate(yesterday) ? streak + 1 : 1;
    localStorage.setItem("go-last-visit", today);
    localStorage.setItem("go-study-streak", String(streak));
  }
  elements.streak.textContent = String(streak || 1);
}

function openCommandMenu() {
  elements.commandSearch.value = "";
  filterCommands("");
  elements.commandDialog.showModal();
  elements.commandSearch.focus();
}

function filterCommands(value) {
  const query = value.trim().toLocaleLowerCase("tk");
  let visibleCount = 0;
  elements.commandResults.querySelectorAll("button[data-command]").forEach((button) => {
    const visible = button.textContent.toLocaleLowerCase("tk").includes(query);
    button.classList.toggle("hidden", !visible);
    if (visible) visibleCount += 1;
  });
  elements.commandEmpty.classList.toggle("hidden", visibleCount !== 0);
}

function runCommand(command) {
  elements.commandDialog.close();
  if (command.startsWith("lesson:")) {
    showLesson(command.split(":")[1]);
    document.querySelector("#sapaklar").scrollIntoView({ behavior: "smooth" });
    return;
  }
  if (command.startsWith("section:")) {
    document.querySelector(`#${command.split(":")[1]}`).scrollIntoView({ behavior: "smooth" });
    return;
  }
  if (command === "dictionary") {
    window.location.href = "sozluk.html";
    return;
  }
  if (command === "test") startQuiz();
}

function handleKeyboard(event) {
  const writing = ["INPUT", "SELECT", "TEXTAREA"].includes(event.target.tagName);
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (elements.commandDialog.open) elements.commandDialog.close();
    else openCommandMenu();
    return;
  }
  if (writing || elements.commandDialog.open || elements.quiz.classList.contains("hidden")) return;
  const number = Number(event.key);
  if (number >= 1 && number <= 4) {
    const answer = elements.answers.querySelectorAll("button")[number - 1];
    if (answer && !answer.disabled) answer.click();
  }
  if (event.key === "Enter" && !elements.next.disabled) elements.next.click();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  elements.theme.textContent = isDark ? "☀" : "◐";
  elements.theme.setAttribute("aria-label", isDark ? "Ýagty temany aç" : "Gara temany aç");
}

function showLesson(name) {
  const lesson = lessons[name];
  if (!lesson) return;
  currentLesson = name;
  elements.lessonNumber.textContent = lesson.number;
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonDescription.textContent = lesson.description;
  elements.lessonNote.textContent = lesson.note;
  elements.lessonCode.textContent = lesson.code;
  renderMiniTest(lesson);
  updateLessonStatus();
  elements.lessonTabs.forEach((tab) => {
    const active = tab.dataset.lesson === name;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}

function renderMiniTest(lesson) {
  const [question, answers] = lesson.quiz;
  elements.miniTitle.textContent = question;
  elements.miniAnswers.replaceChildren();
  elements.miniFeedback.classList.add("hidden");
  answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mini-answer";
    button.textContent = answer;
    button.addEventListener("click", () => answerMiniTest(index));
    elements.miniAnswers.append(button);
  });
}

function answerMiniTest(selected) {
  const lesson = lessons[currentLesson];
  const correct = lesson.quiz[2];
  const buttons = [...elements.miniAnswers.querySelectorAll("button")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === correct) button.classList.add("correct");
    if (index === selected && index !== correct) button.classList.add("wrong");
  });
  const isCorrect = selected === correct;
  elements.miniFeedback.textContent = `${isCorrect ? "Dogry!" : "Nädogry."} ${lesson.quiz[3]}`;
  elements.miniFeedback.classList.remove("hidden");
  if (isCorrect) completeCurrentLesson();
}

function getCompletedLessons() {
  return JSON.parse(localStorage.getItem("go-completed-lessons") || "[]");
}

function completeCurrentLesson() {
  const completed = getCompletedLessons();
  if (!completed.includes(currentLesson)) {
    completed.push(currentLesson);
    localStorage.setItem("go-completed-lessons", JSON.stringify(completed));
  }
  updateLessonStatus();
  renderProfile();
}

function updateLessonStatus() {
  const done = getCompletedLessons().includes(currentLesson);
  elements.completeLesson.disabled = done;
  elements.completeLesson.textContent = done ? "Tamamlandy ✓" : "Sapagy tamamladym";
  elements.lessonCompleteStatus.textContent = done ? "Ösüş profiline goşuldy" : "";
}

function renderProfile() {
  const completed = getCompletedLessons();
  const best = localStorage.getItem("go-test-best");
  const streak = localStorage.getItem("go-study-streak") || "1";
  const achievements = JSON.parse(localStorage.getItem("go-achievements") || "[]");
  const percent = Math.round((completed.length / Object.keys(lessons).length) * 100);

  elements.profileLessons.textContent = `${completed.length} / ${Object.keys(lessons).length}`;
  elements.profileBest.textContent = best ? `${best}%` : "—";
  elements.profileStreak.textContent = streak;
  elements.profileAchievements.textContent = `${achievements.length} / 4`;
  elements.profilePercent.textContent = `${percent}%`;
  elements.profileProgress.style.width = `${percent}%`;
  elements.profileLessonList.replaceChildren();

  Object.entries(lessons).forEach(([key, lesson]) => {
    const item = document.createElement("span");
    item.className = `profile-lesson ${completed.includes(key) ? "done" : ""}`;
    item.textContent = `${completed.includes(key) ? "✓ " : ""}${lesson.title}`;
    elements.profileLessonList.append(item);
  });
}

async function runGoCode() {
  elements.runCode.disabled = true;
  elements.editorStatus.textContent = "Compile edilýär...";
  elements.codeOutput.textContent = "Garaş...";
  try {
    const body = new URLSearchParams({ version: "2", body: elements.codeEditor.value });
    const response = await fetch("https://play.golang.org/compile", { method: "POST", body });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    if (result.Errors) {
      elements.codeOutput.textContent = result.Errors;
      elements.editorStatus.textContent = "Compile ýalňyşlygy";
      return;
    }
    elements.codeOutput.textContent = result.Events?.map((event) => event.Message).join("") || "Programma çykyş bermedi.";
    elements.editorStatus.textContent = "Üstünlikli işledi";
  } catch (error) {
    elements.codeOutput.textContent = "Playground bilen baglanyşyk başartmady. Internetiňi barla.";
    elements.editorStatus.textContent = "Baglanyşyk ýalňyşlygy";
  } finally {
    elements.runCode.disabled = false;
  }
}

async function shareGoCode() {
  elements.shareCode.disabled = true;
  elements.editorStatus.textContent = "Salgy döredilýär...";
  const playgroundTab = window.open("about:blank", "_blank");
  try {
    const response = await fetch("https://play.golang.org/share", { method: "POST", body: elements.codeEditor.value });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const id = await response.text();
    if (playgroundTab) playgroundTab.location.href = `https://go.dev/play/p/${id.trim()}`;
    else window.location.href = `https://go.dev/play/p/${id.trim()}`;
    elements.editorStatus.textContent = "Playground salgysy açyldy";
  } catch (error) {
    if (playgroundTab) playgroundTab.close();
    elements.editorStatus.textContent = "Salgy döretmek başartmady";
  } finally {
    elements.shareCode.disabled = false;
  }
}

function showTip(index) {
  const [title, text] = tips[index];
  elements.tipTitle.textContent = title;
  elements.tipText.textContent = text;
}

function nextTip() {
  currentTip = (currentTip + 1) % tips.length;
  showTip(currentTip);
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("go-test-theme", nextTheme);
  applyTheme(nextTheme);
}

async function shareResult() {
  const text = `Go Türkmençe testinde ${activeQuestions.length} soragdan ${score} sanysyna dogry jogap berdim!`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "Go Türkmençe — Test", text, url: window.location.href });
      elements.shareStatus.textContent = "Netije paýlaşyldy.";
    } else {
      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
      elements.shareStatus.textContent = "Netije göçürildi.";
    }
  } catch (error) {
    if (error.name === "AbortError") return;
    elements.shareStatus.textContent = "Paýlaşmak başartmady. Salgyny brauzerden göçürip bilersiň.";
  }
  elements.shareStatus.classList.remove("hidden");
}

const savedTheme = localStorage.getItem("go-test-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
applyTheme(savedTheme || preferredTheme);
showTip(currentTip);
updateStudyStreak();
const storedBest = localStorage.getItem("go-test-best");
elements.bestScore.textContent = storedBest ? `${storedBest}%` : "—";
showLesson("array");
renderProfile();
document.querySelector("#current-year").textContent = new Date().getFullYear();

elements.start.addEventListener("click", startQuiz);
elements.next.addEventListener("click", nextQuestion);
elements.restart.addEventListener("click", startQuiz);
elements.retryWrong.addEventListener("click", retryWrongAnswers);
elements.share.addEventListener("click", shareResult);
elements.theme.addEventListener("click", toggleTheme);
elements.newTip.addEventListener("click", nextTip);
elements.lessonTabs.forEach((tab) => tab.addEventListener("click", () => showLesson(tab.dataset.lesson)));
elements.completeLesson.addEventListener("click", completeCurrentLesson);
elements.runCode.addEventListener("click", runGoCode);
elements.shareCode.addEventListener("click", shareGoCode);
elements.codeExample.addEventListener("change", (event) => {
  elements.codeEditor.value = codeExamples[event.target.value];
  elements.codeOutput.textContent = "Netije şu ýerde görkeziler.";
  elements.editorStatus.textContent = "";
});
elements.codeEditor.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  event.preventDefault();
  const start = elements.codeEditor.selectionStart;
  const end = elements.codeEditor.selectionEnd;
  elements.codeEditor.setRangeText("\t", start, end, "end");
});
elements.commandButton.addEventListener("click", openCommandMenu);
elements.commandClose.addEventListener("click", () => elements.commandDialog.close());
elements.commandSearch.addEventListener("input", (event) => filterCommands(event.target.value));
elements.commandResults.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-command]");
  if (button) runCommand(button.dataset.command);
});
elements.install.addEventListener("click", installApp);
document.addEventListener("keydown", handleKeyboard);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  elements.install.classList.remove("hidden");
});

window.addEventListener("appinstalled", () => {
  installPrompt = undefined;
  elements.install.classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}
