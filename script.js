$(document).ready(function () {
    $("h1").css("color", "#d63384");

    $("#gallery").hover(function () {
        $(this).css("background-color", "#ffe6f0");
    });

    $("#gallery img").hide().fadeIn(2000);

    $("#toggleBtn").click(function () {
        $("#gallery").slideToggle();
    });

    $("#addItem").click(function () {
        $("<p>New study tip added!</p>").appendTo("#tipsSection");
    });
});

// --- Аудио: работаем с тегом <audio id="backgroundAudio"> ---
const backgroundAudio = document.getElementById("backgroundAudio");
backgroundAudio.loop = true;
backgroundAudio.volume = 0.5;

// --- Воспроизведение после первого клика ---
document.body.addEventListener('click', function initAudioPlayOnce() {
  backgroundAudio.play().catch(e => {
    console.error("Playback blocked:", e);
  });
  document.body.removeEventListener('click', initAudioPlayOnce);
}, { once: true });

// --- Кнопки управления ---
document.getElementById("playBackgroundBtn").addEventListener("click", function () {
  backgroundAudio.play();
});

document.getElementById("pauseBackgroundBtn").addEventListener("click", function () {
  backgroundAudio.pause();
});

document.getElementById("volumeUpBtn").addEventListener("click", function () {
  backgroundAudio.volume = Math.min(1, backgroundAudio.volume + 0.1);
  updateVolumeDisplay();
});

document.getElementById("volumeDownBtn").addEventListener("click", function () {
  backgroundAudio.volume = Math.max(0, backgroundAudio.volume - 0.1);
  updateVolumeDisplay();
});

function updateVolumeDisplay() {
  document.getElementById("volumeDisplay").textContent =
    `Volume: ${Math.round(backgroundAudio.volume * 100)}%`;
}

// --- Инициализируем громкость при загрузке ---
updateVolumeDisplay();
