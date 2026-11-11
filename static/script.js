
const $ = (id) => document.getElementById(id);

const FIXED_DATE = "2026-11-15";
const FIXED_PLACE = "Timol Hotel";

const sections = ["question-actions", "planner", "success", "declined"];

function showSection(active) {
  sections.forEach(id => {
    $(id).classList.toggle("hidden", id !== active);
  });
}

function setIntro(eyebrow, headline, intro) {
  $("eyebrow").textContent = eyebrow;
  $("headline").innerHTML = headline;
  $("intro").textContent = intro;
}

function resetPlanner() {
  $("date").value = FIXED_DATE;
  $("time").value = "";
  $("place").value = FIXED_PLACE;
  $("form-error").textContent = "";
}

resetPlanner();

$("yes-btn").addEventListener("click", () => {
  resetPlanner();

  setIntro(
    "THAT'S LOVELY ❤️",
    "Let's make it <em>happen.</em>",
    "Choose the time that works best for you, Purity. The destination is already planned!"
  );

  showSection("planner");
});

$("no-btn").addEventListener("click", () => {
  setIntro(
    "THANK YOU",
    "Your answer <em>matters.</em>",
    "No pressure, Purity. Your answer will always be respected."
  );

  showSection("declined");
});

$("back-btn").addEventListener("click", () => {
  setIntro(
    "JUST BETWEEN US ❤️",
    "Hey Purity,<br><em>can I take you on a date?</em>",
    "I'd love to spend a beautiful Sunday with you, share some laughter and create a lovely memory together."
  );

  showSection("question-actions");
});

$("confirm-btn").addEventListener("click", () => {
  const dateValue = $("date").value;
  const timeValue = $("time").value;
  const placeValue = FIXED_PLACE;

  $("form-error").textContent = "";

  if (dateValue !== FIXED_DATE) {
    $("form-error").textContent =
      "Our proposed date is Sunday, 15 November 2026.";
    return;
  }

  if (!timeValue) {
    $("form-error").textContent =
      "Please choose your preferred time, Purity ❤️";
    return;
  }

  const chosenDate = new Date(FIXED_DATE + "T12:00:00");

  const dateText = new Intl.DateTimeFormat("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(chosenDate);

  const [hours, minutes] = timeValue.split(":");

  const timeText = new Intl.DateTimeFormat("en-KE", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).format(new Date(2000, 0, 1, Number(hours), Number(minutes)));

  const details =
    `For: Purity ❤️\n` +
    `Date: ${dateText}\n` +
    `Time: ${timeText}\n` +
    `Destination: ${placeValue}`;

  $("summary").textContent = details;

  $("copy-status").textContent =
    "You can copy and share your date details.";

  setIntro(
    "A LITTLE SOMETHING TO LOOK FORWARD TO",
    "It's a <em>date!</em> ❤️",
    "Purity, here's our proposed plan."
  );

  showSection("success");
  launchConfetti();
});

$("copy-btn").addEventListener("click", async () => {
  const text = "It's a date! ❤️\n" + $("summary").textContent;

  try {
    await navigator.clipboard.writeText(text);
    $("copy-status").textContent =
      "Copied successfully! Share the plan with your date.";
  } catch {
    $("copy-status").textContent =
      "Copy unavailable. You can select and copy the details above.";
  }
});

function reset() {
  resetPlanner();

  setIntro(
    "JUST BETWEEN US ❤️",
    "Hey Purity,<br><em>can I take you on a date?</em>",
    "I'd love to spend a beautiful Sunday with you, share some laughter and create a lovely memory together."
  );

  showSection("question-actions");
}

$("restart-btn").addEventListener("click", reset);
$("decline-restart").addEventListener("click", reset);

// Celebration animation
function launchConfetti() {
  const symbols = ["✦", "✧", "♡", "♥"];

  for (let i = 0; i < 22; i++) {
    const piece = document.createElement("span");

    piece.textContent = symbols[i % symbols.length];
    piece.className = "confetti";

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 0.7 + "s";
    piece.style.fontSize = (12 + Math.random() * 14) + "px";

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 2600);
  }
}
