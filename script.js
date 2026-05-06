// ==========================
// SAVE MOOD
// ==========================
function saveMood() {
  const mood = document.getElementById("mood").value;
  const note = document.getElementById("note").value;
  const message = document.getElementById("message");

  if (!mood) {
    message.textContent = "Please select a mood";
    message.style.color = "crimson";
    return;
  }

  const entry = {
    mood: mood,
    note: note,
    date: new Date().toLocaleString(),
  };

  let moods;

  try {
    moods = JSON.parse(localStorage.getItem("moods")) || [];
  } catch {
    moods = [];
  }

  moods.push(entry);

  localStorage.setItem("moods", JSON.stringify(moods));

  message.textContent = "Mood saved successfully 💅🏽";
  message.style.color = "green";

  document.getElementById("mood").value = "";
  document.getElementById("note").value = "";
}

// ==========================
// DISPLAY MOODS
// ==========================
function displayMoods() {
  const resultList = document.getElementById("resultList");

  if (!resultList) return;

  let moods;

  try {
    moods = JSON.parse(localStorage.getItem("moods")) || [];
  } catch {
    moods = [];
  }

  if (moods.length === 0) {
    resultList.innerHTML = "<p>No moods saved yet.</p>";
    return;
  }

  resultList.innerHTML = "";

  moods.forEach((entry) => {
    const div = document.createElement("div");

    // dynamic mood styling 🔥
    div.classList.add("mood-card", "mood-" + entry.mood.toLowerCase());

    div.innerHTML = `
      <strong>${entry.mood}</strong>
      <p>${entry.note || "No note added"}</p>
      <small>${entry.date}</small>
    `;

    resultList.appendChild(div);
  });
}

// run automatically
displayMoods();

// ==========================
// LIVE PREVIEW
// ==========================
const moodSelect = document.getElementById("mood");
const preview = document.getElementById("previewText");

if (moodSelect && preview) {
  moodSelect.addEventListener("change", () => {
    preview.textContent = "You're feeling: " + moodSelect.value;
  });
}

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ==========================
// CUSTOM CURSOR
// ==========================
const cursor = document.querySelector(".cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}
