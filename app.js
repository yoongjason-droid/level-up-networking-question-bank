const questions = [
  { category: "Career", tags: ["career", "risk"], text: "What is the boldest career move or decision you've made?" },
  { category: "Career", tags: ["career", "story"], text: "What has been one pivotal moment in your career?" },
  { category: "Career", tags: ["advice"], text: "What's one piece of advice that has helped you in your career?" },
  { category: "Career", tags: ["mentorship"], text: "How many mentors do you have, and how did you get them?" },
  { category: "Career", tags: ["learning"], text: "What are some key things you've learned this year personally or professionally?" },
  { category: "Career", tags: ["mentorship", "sponsors"], text: "How have you found and established relationships with mentors and sponsors, and what effective strategies have you used to leverage their knowledge, connections, and experience to advance your career?" },
  { category: "Career", tags: ["visibility"], text: "What do you do to stand out among your peers and become the go-to person for X?" },
  { category: "Career", tags: ["communication"], text: "What are some tools and resources that have helped you improve your writing and/or public speaking skills?" },
  { category: "Career", tags: ["advisors"], text: "Do you have a professional board of advisors that you consult for career advice? Who's on it and how did you build it?" },
  { category: "Career", tags: ["strengths"], text: "Do you index more toward improving your weaknesses or doubling down on your strengths? How are you sharpening those skills?" },
  { category: "Career", tags: ["growth"], text: "Is there anything outside your day-to-day role that has helped grow your career?" },
  { category: "Career", tags: ["balance"], text: "How do you strike your definition of optimal work-life balance?" },
  { category: "Career", tags: ["visibility"], text: "How do you make sure that your values and successes are visible to your manager and senior leaders?" },
  { category: "Career", tags: ["level up"], text: "What do you need to work on to level up, and what specific steps are you taking to get to the next stage of your career?" },
  { category: "Career", tags: ["leaders"], text: "Your mentors and senior leaders in your organization: What did they do to rise to the top?" },
  { category: "Career", tags: ["opportunity"], text: "How do you choose your opportunities at work, and position yourself for high-profile projects?" },
  { category: "Career", tags: ["goals"], text: "How do you approach goal-setting in your career, and how do you stay accountable to achieving those goals?" },
  { category: "Career", tags: ["resilience"], text: "How do you stay resilient in the face of setbacks or disappointments in your career, and what strategies do you use to bounce back?" },
  { category: "Career", tags: ["community"], text: "What has been your greatest learning from this community and the events?" },
  { category: "Career", tags: ["90 days"], text: "What are your goals for the next 90 days, and how do you plan to achieve them?" },
  { category: "Career", tags: ["network"], text: "How do you stay in touch with the two closest connections in your professional network?" },
  { category: "Career", tags: ["executive"], text: "If you had 30 minutes with an executive leader at your organization, how would you maximize that time? What would you want to know?" },
  { category: "Career", tags: ["advocacy"], text: "How do you advocate for yourself in terms of promotions, raises, or new opportunities within your organization?" },
  { category: "Career", tags: ["networking"], text: "Can you share a personal experience where networking played a crucial role in your career advancement or opened a new opportunity?" },
  { category: "Career", tags: ["transferable skills"], text: "How do you identify and leverage the transferable skills from your personal and cultural experiences to enhance your professional capabilities?" },
  { category: "Career", tags: ["executive presence"], text: "What are some strategies to enhance your executive presence and communicate effectively with different stakeholders in your organization?" },
  { category: "Career", tags: ["support"], text: "How do you cultivate a support system within your professional network, both within and outside your organization?" },
  { category: "Career", tags: ["risk"], text: "Can you share a story where you took a calculated risk in your career, and what was the outcome?" },
  { category: "Career", tags: ["success"], text: "How do you measure success in your career, and how do you celebrate your achievements along the way?" },
  { category: "Career", tags: ["impression"], text: "What are some unconventional or unique ways that you use to make a lasting first impression?" },
  { category: "Career", tags: ["reputation"], text: "What is the first word you want someone to use when they think of you? How do you cultivate that image in your work, meetings, and conversations?" },
  { category: "Career", tags: ["confidence"], text: "What are two examples of times you've accomplished something you didn't think was possible?" },
  { category: "Career", tags: ["interview"], text: "What is your favorite interview question to ask?" },
  { category: "Career", tags: ["executive"], text: "What is an executive trait you are working to develop?" },
  { category: "Career", tags: ["energy"], text: "What type of work gives you the most energy?" },
  { category: "Career", tags: ["standards"], text: "What is something you have unreasonably high standards for?" },
  { category: "Career", tags: ["curiosity"], text: "What's the latest thing you learned out of pure interest?" },
  { category: "Career", tags: ["legacy"], text: "What would make you proud if you retired tomorrow?" },
  { category: "Career", tags: ["action"], text: "What is the boldest career action you will take this year?" },
  { category: "Ice Breakers", tags: ["travel"], text: "What's the best vacation you've ever taken?" },
  { category: "Ice Breakers", tags: ["books"], text: "Most gifted book and why?" },
  { category: "Ice Breakers", tags: ["fun"], text: "If you could have one superpower, what would it be and why?" },
  { category: "Ice Breakers", tags: ["teaching"], text: "What is a non-career topic you could teach?" },
  { category: "Ice Breakers", tags: ["values"], text: "What is one quote or phrase you live by?" },
  { category: "Ice Breakers", tags: ["productivity"], text: "What's your favorite life hack or productivity tip?" },
  { category: "Ice Breakers", tags: ["story"], text: "What's a time you broke a rule and what happened?" },
  { category: "Ice Breakers", tags: ["travel"], text: "If you could travel anywhere in the world right now, where would you go?" },
  { category: "Ice Breakers", tags: ["life"], text: "What's one thing on your bucket list?" },
  { category: "Ice Breakers", tags: ["wellbeing"], text: "How are you sleeping?" },
  { category: "Ice Breakers", tags: ["openness"], text: "If you really knew me, you'd know..." },
  { category: "Ice Breakers", tags: ["gratitude"], text: "What is something you are grateful for?" },
  { category: "Leaders Go First", tags: ["team", "trust"], text: "History: Where do you come from?" },
  { category: "Leaders Go First", tags: ["team", "trust"], text: "Hero: Who do you look up to?" },
  { category: "Leaders Go First", tags: ["team", "trust"], text: "Heartbreak: What is your greatest heartbreak?" },
  { category: "Leaders Go First", tags: ["team", "trust"], text: "Hope: What is your greatest hope?" },
  { category: "FAST Format", tags: ["intro"], text: "Who you are." },
  { category: "FAST Format", tags: ["intro"], text: "What you do." },
  { category: "FAST Format", tags: ["help"], text: "What is one thing you can help others with?" },
  { category: "FAST Format", tags: ["90 days"], text: "What is one thing you need help with in the next 90 days?" },
  { category: "FAST Format", tags: ["learning"], text: "What was the latest book, article, or podcast you consumed and what was one takeaway?" },
  { category: "FAST Format", tags: ["leaders"], text: "Your mentors and senior leaders in your organization: What did they do to rise to the top?" },
  { category: "FAST Format", tags: ["teaching"], text: "What is a non-career topic you could teach?" },
  { category: "FAST Format", tags: ["networking"], text: "Share a time when networking played a crucial role in your career advancement or opened a new opportunity." }
];

const state = {
  category: "All",
  query: "",
  view: "list",
  saved: new Set(JSON.parse(localStorage.getItem("savedQuestions") || "[]")),
  actionsThisSession: 0,
  milestoneShown: false
};

const categoryFilters = document.querySelector("#categoryFilters");
const questionResults = document.querySelector("#questionResults");
const searchInput = document.querySelector("#searchInput");
const activeSummary = document.querySelector("#activeSummary");
const questionCount = document.querySelector("#questionCount");
const randomButton = document.querySelector("#randomButton");
const listViewButton = document.querySelector("#listViewButton");
const cardViewButton = document.querySelector("#cardViewButton");
const toast = document.querySelector("#toast");

const categories = ["All", ...new Set(questions.map((question) => question.category)), "Saved"];

function saveFavorites() {
  localStorage.setItem("savedQuestions", JSON.stringify([...state.saved]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function trackQuestionAction() {
  state.actionsThisSession += 1;
  if (state.actionsThisSession === 3 && !state.milestoneShown) {
    state.milestoneShown = true;
    window.setTimeout(() => showToast("Good questions compound."), 450);
  }
}

async function copyQuestion(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const fallback = document.createElement("textarea");
    fallback.value = text;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.top = "-1000px";
    document.body.appendChild(fallback);
    fallback.select();
    const copied = document.execCommand("copy");
    fallback.remove();
    return copied;
  }
}

function questionId(question) {
  return `${question.category}:${question.text}`;
}

function getFilteredQuestions() {
  const query = state.query.trim().toLowerCase();
  return questions.filter((question) => {
    const id = questionId(question);
    const categoryMatch =
      state.category === "All" ||
      question.category === state.category ||
      (state.category === "Saved" && state.saved.has(id));
    const searchable = [question.category, question.source, question.text, ...question.tags]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return categoryMatch && (!query || searchable.includes(query));
  });
}

function renderFilters() {
  categoryFilters.innerHTML = categories
    .map((category) => {
      const active = category === state.category ? " active" : "";
      return `<button class="chip${active}" type="button" data-category="${category}">${category}</button>`;
    })
    .join("");
}

function renderQuestions() {
  const filtered = getFilteredQuestions();
  questionResults.className = `question-results ${state.view}-view`;
  activeSummary.textContent = `${filtered.length} question${filtered.length === 1 ? "" : "s"} shown`;
  questionCount.textContent = questions.length;

  if (!filtered.length) {
    questionResults.innerHTML = `<article class="question-item"><p>No questions match that filter yet.</p></article>`;
    return;
  }

  questionResults.innerHTML = filtered
    .map((question) => {
      const id = questionId(question);
      const isSaved = state.saved.has(id);
      const source = question.source ? `<span>${question.source}</span>` : "";
      const tag = question.tags[0] ? `<span>${question.tags[0]}</span>` : "";
      return `
        <article class="question-item" data-id="${escapeHtml(id)}">
          <div>
            <div class="question-meta">
              <span>${question.category}</span>
              ${source}
              ${tag}
            </div>
            <p>${escapeHtml(question.text)}</p>
          </div>
          <div class="question-actions">
            <button class="question-action copy" type="button" aria-label="Copy question" title="Copy question">Copy</button>
            <button class="question-action save${isSaved ? " saved" : ""}" type="button" aria-label="Save question" title="Save question">${isSaved ? "Saved" : "Save"}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderQuestions();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderQuestions();
});

questionResults.addEventListener("click", async (event) => {
  const item = event.target.closest(".question-item");
  if (!item) return;
  const question = questions.find((candidate) => questionId(candidate) === item.dataset.id);
  if (!question) return;

  if (event.target.closest(".copy")) {
    const copied = await copyQuestion(question.text);
    showToast(copied ? "Question copied." : "Copy unavailable. Select the question text instead.");
    if (copied) trackQuestionAction();
  }

  if (event.target.closest(".save")) {
    const id = questionId(question);
    if (state.saved.has(id)) {
      state.saved.delete(id);
      showToast("Removed from saved.");
    } else {
      state.saved.add(id);
      showToast("Saved for later.");
    }
    saveFavorites();
    renderQuestions();
    trackQuestionAction();
  }
});

randomButton.addEventListener("click", () => {
  const filtered = getFilteredQuestions();
  const pool = filtered.length ? filtered : questions;
  const question = pool[Math.floor(Math.random() * pool.length)];
  state.query = "";
  state.category = question.category;
  searchInput.value = "";
  renderFilters();
  renderQuestions();
  const id = questionId(question);
  const element = document.querySelector(`[data-id="${CSS.escape(id)}"]`);
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
  element?.animate(
    [
      { boxShadow: "0 0 0 0 rgba(13, 163, 154, 0.0)" },
      { boxShadow: "0 0 0 8px rgba(13, 163, 154, 0.22)" },
      { boxShadow: "0 0 0 0 rgba(13, 163, 154, 0.0)" }
    ],
    { duration: 1200, easing: "ease-out" }
  );
});

listViewButton.addEventListener("click", () => {
  state.view = "list";
  listViewButton.classList.add("active");
  cardViewButton.classList.remove("active");
  renderQuestions();
});

cardViewButton.addEventListener("click", () => {
  state.view = "card";
  cardViewButton.classList.add("active");
  listViewButton.classList.remove("active");
  renderQuestions();
});

renderFilters();
renderQuestions();
