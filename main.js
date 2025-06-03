// --- Работа с visitCount ---
let visitCount = localStorage.getItem("visitCount");
if (!visitCount) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}
localStorage.setItem("visitCount", visitCount);

// --- Переменные ---
let userName = "Student"; 
let completedSessions = 5;
let isLoggedIn = false; 

// --- Массивы ---
const features = ["Study Groups", "Materials", "Live Sessions", "Forums"];
const studyTips = ["Create a schedule", "Take regular breaks", "Review notes daily", "Use flashcards", "Teach others"];
const courses = ["Mathematics", "Physics", "History", "Computer Science", "English Literature"];
const onlineUsers = ["Aliya", "Dauren", "Nurlan", "Aruzhan", "Timur"];
const resources = [
    { name: "Khan Academy", url: "https://www.khanacademy.org" },
    { name: "Coursera", url: "https://www.coursera.org" },
    { name: "edX", url: "https://www.edx.org" },
    { name: "Stack Overflow", url: "https://stackoverflow.com" },
    { name: "W3Schools", url: "https://www.w3schools.com" }
];
const motivations = [
    "You can do it!",
    "Keep pushing forward!",
    "Every day is a new opportunity.",
    "Believe in yourself.",
    "Stay focused and never give up."
];
const studyQuotes = [
    "Success is the sum of small efforts, repeated day in and day out.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Push yourself, because no one else is going to do it for you.",
    "Believe you can and you're halfway there.",
    "Don’t watch the clock; do what it does. Keep going."
];

// --- Добавим форму логина с валидацией ---
function validateLoginForm() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    if (username.trim() === "" || password.trim() === "") {
        alert("Please fill in both fields.");
        return false;
    }
    alert("Login successful!");
    return true;
}

// --- Анимация кнопки ---
const animatedBtn = document.getElementById("joinBtn");
if (animatedBtn) {
    animatedBtn.addEventListener("mouseover", () => {
        animatedBtn.classList.add("animated");
    });
    animatedBtn.addEventListener("mouseout", () => {
        animatedBtn.classList.remove("animated");
    });
}

// --- Работа с classList ---
const tipsSection = document.getElementById("tipsSection");
if (tipsSection) {
    tipsSection.classList.add("highlighted-section");
    setTimeout(() => {
        tipsSection.classList.remove("highlighted-section");
    }, 3000);
}

// --- Отображение случайной мотивации ---
function showRandomMotivation() {
    const randomIndex = Math.floor(Math.random() * motivations.length);
    const output = document.getElementById("randomNum");
    if (output) output.textContent = motivations[randomIndex];
}

// --- Отображение списка функций ---
function displayFeatures() {
    const list = document.getElementById("featuresList");
    if (list) {
        features.forEach(feature => {
            const li = document.createElement("li");
            li.textContent = feature;
            list.appendChild(li);
        });
    }
}
// --- Обработка клика по кнопке "Add Tip" ---
document.getElementById("addItem")?.addEventListener("click", () => {
    const tips = ["Organize your time", "Use diagrams", "Avoid distractions", "Sleep well"];
    const section = document.getElementById("tipsSection");
    const p = document.createElement("p");
    p.textContent = tips[Math.floor(Math.random() * tips.length)];
    section?.appendChild(p);
});
function displayStudyTips() {
    const section = document.getElementById("tipsSection");
    if (section) {
        const ul = document.createElement("ul");
        studyTips.forEach(tip => {
            const li = document.createElement("li");
            li.textContent = tip;
            ul.appendChild(li);
        });
        section.appendChild(ul);
    }
}



// --- Приветствие и вывод онлайн-пользователей ---
window.onload = () => {
    alert(`Welcome back! You've visited this site ${visitCount} times.`);
    alert("Currently online: " + onlineUsers.join(", "));
    showRandomMotivation();
    displayFeatures();
    displayStudyTips();
    displayResources();
    studyPlatform.displayStats();
    setTimeout(() => studyPlatform.updateUsers(1500), 3000);
};

// --- Отображение полезных ресурсов ---
function displayResources() {
    const list = document.createElement("ul");
    resources.forEach(resource => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = resource.url;
        a.textContent = resource.name;
        a.target = "_blank";
        li.appendChild(a);
        list.appendChild(li);
    });
    document.body.appendChild(list);
}
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
  
    document.getElementById('playBackgroundBtn').addEventListener('click', function () {
      audio.play();
    });
  
    document.getElementById('pauseBackgroundBtn').addEventListener('click', function () {
      audio.pause();
    });
  
    document.getElementById('volumeUpBtn').addEventListener('click', function () {
      audio.volume = Math.min(1, audio.volume + 0.1);
      updateVolumeDisplay(audio.volume);
    });
  
    document.getElementById('volumeDownBtn').addEventListener('click', function () {
      audio.volume = Math.max(0, audio.volume - 0.1);
      updateVolumeDisplay(audio.volume);
    });
  
    function updateVolumeDisplay(volume) {
      document.getElementById('volumeDisplay').textContent = `Volume: ${Math.round(volume * 100)}%`;
    }
  
    audio.volume = 0.5;
    updateVolumeDisplay(audio.volume);
  });
  


// --- Цитата ---
document.getElementById("quoteBtn")?.addEventListener("click", () => {
    const quoteOutput = document.getElementById("quoteOutput");
    const quote = studyQuotes[Math.floor(Math.random() * studyQuotes.length)];
    if (quoteOutput) quoteOutput.textContent = quote;
});
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("backgroundMusic");
    const playBtn = document.getElementById("playBackgroundBtn");
    const pauseBtn = document.getElementById("pauseBackgroundBtn");
    const volumeUpBtn = document.getElementById("volumeUpBtn");
    const volumeDownBtn = document.getElementById("volumeDownBtn");
    const volumeDisplay = document.getElementById("volumeDisplay");
  
    // начальная громкость
    audio.volume = 0.5;
  
    playBtn.addEventListener("click", () => {
      audio.play().catch(err => {
        alert("Click again to allow audio playback.");
        console.error(err);
      });
    });
  
    pauseBtn.addEventListener("click", () => {
      audio.pause();
    });
  
    volumeUpBtn.addEventListener("click", () => {
      audio.volume = Math.min(1.0, audio.volume + 0.1);
      updateVolume();
    });
  
    volumeDownBtn.addEventListener("click", () => {
      audio.volume = Math.max(0.0, audio.volume - 0.1);
      updateVolume();
    });
  
    function updateVolume() {
      volumeDisplay.textContent = `Volume: ${Math.round(audio.volume * 100)}%`;
    }
  });
  // --- Добавим поле для управления советами ---
function createTipsControlPanel() {
    const section = document.getElementById("tipsSection");
    if (!section) return;

    // --- Создаем элементы интерфейса ---
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter your own study tip";
    input.id = "customTipInput";
    input.style.marginRight = "8px";

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Tip";
    addBtn.onclick = addCustomTip;

    const tipsList = document.createElement("ul");
    tipsList.id = "customTipsList";

    section.appendChild(document.createElement("hr"));
    section.appendChild(input);
    section.appendChild(addBtn);
    section.appendChild(tipsList);
}

function createTipsControlPanel() {
    const section = document.getElementById("tipsSection");
    if (!section) return;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter your own study tip";
    input.id = "customTipInput";
    input.style.marginRight = "8px";

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Tip";
    addBtn.onclick = addCustomTip;

    const tipsList = document.createElement("ul");
    tipsList.id = "customTipsList";

    section.appendChild(document.createElement("hr"));
    section.appendChild(input);
    section.appendChild(addBtn);
    section.appendChild(tipsList);
}

function addCustomTip() {
    const input = document.getElementById("customTipInput");
    const tipsList = document.getElementById("customTipsList");

    if (input.value.trim() === "") {
        alert("Please enter a tip.");
        return;
    }

    const li = document.createElement("li");

    // Создаем текстовый узел с советом
    const tipTextNode = document.createTextNode(input.value);
    li.appendChild(tipTextNode);

    // Кнопка редактирования
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "8px";
    editBtn.onclick = () => {
        const newTip = prompt("Edit your tip:", tipTextNode.textContent);
        if (newTip !== null && newTip.trim() !== "") {
            tipTextNode.textContent = newTip.trim();
        }
    };

    // Кнопка удаления
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "4px";
    deleteBtn.onclick = () => {
        tipsList.removeChild(li);
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    tipsList.appendChild(li);

    input.value = ""; // очистить поле
}

document.addEventListener("DOMContentLoaded", createTipsControlPanel);

// --- Вызов панели после загрузки ---
document.addEventListener("DOMContentLoaded", createTipsControlPanel);

function createTipsControlPanel() {
    const section = document.getElementById("tipsSection");
    if (!section) return;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter your own study tip";
    input.id = "customTipInput";
    input.style.marginRight = "8px";

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Tip";
    addBtn.onclick = addCustomTip;

    const tipsList = document.createElement("ul");
    tipsList.id = "customTipsList";

    section.appendChild(document.createElement("hr"));
    section.appendChild(input);
    section.appendChild(addBtn);
    section.appendChild(tipsList);
}

function addCustomTip() {
    const input = document.getElementById("customTipInput");
    const tipsList = document.getElementById("customTipsList");

    if (input.value.trim() === "") {
        alert("Please enter a tip.");
        return;
    }

    const li = document.createElement("li");
    const tipTextNode = document.createTextNode(input.value);
    li.appendChild(tipTextNode);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "8px";
    editBtn.onclick = () => {
        const newTip = prompt("Edit your tip:", tipTextNode.textContent);
        if (newTip !== null && newTip.trim() !== "") {
            tipTextNode.textContent = newTip.trim();
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "4px";
    deleteBtn.onclick = () => {
        tipsList.removeChild(li);
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    tipsList.appendChild(li);
    input.value = "";
}

document.addEventListener("DOMContentLoaded", createTipsControlPanel);

// --- Платформа ---
const studyPlatform = {
    name: "Study Hub",
    users: 1250,
    features: ["Live Sessions", "Resources", "Progress Tracking"],
    updateUsers(newCount) {
        this.users = newCount;
        this.displayStats();
    },
    displayStats() {
        const stats = document.getElementById("userStats");
        if (stats) {
            stats.innerHTML = `
                <h3>${this.name} Stats</h3>
                <p>Users: ${this.users}</p>
                <ul>${this.features.map(f => `<li>${f}</li>`).join('')}</ul>
            `;
        }
    }

      
};
document.addEventListener("DOMContentLoaded", () => {
    const quoteBtn = document.getElementById("quoteBtn");
    const quoteOutput = document.getElementById("quoteOutput");
  
    quoteBtn.addEventListener("click", async () => {
      try {
        quoteOutput.innerText = "Loading...";
        const res = await fetch("https://api.quotable.io/random");
        if (!res.ok) throw new Error("Failed to fetch quote.");
        const data = await res.json();
        quoteOutput.innerText = `"${data.content}" — ${data.author}`;
      } catch (error) {
        quoteOutput.innerText = "Failed to load quote. Try again later.";
      }
    });
  });
  