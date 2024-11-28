const video = document.getElementById("my-video");
const playPauseBtn = document.getElementById("play-btn");
const seekBar = document.getElementById("seek-bar");
const volumeBar = document.getElementById("volume-bar");
const muteBtn = document.getElementById("mute-btn");
const speedBtn = document.getElementById("speed-btn");
const fullscreenButton = document.getElementById("full-screen-btn");
const volumePercentage = document.getElementById("volume-percentage");
const currentTimeElement = document.getElementById("current-time");
const totalTimeElement = document.getElementById("total-time");

// Mostrar la duración del video al cargar los metadatos
video.addEventListener("loadedmetadata", () => {
  totalTimeElement.textContent = formatTime(video.duration);
});

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = "<i class='fa-solid fa-pause'></i>";
  } else {
    video.pause();
    playPauseBtn.innerHTML = "<i class='fa-solid fa-play'></i>";
  }
}

// Añadir la funcion togglePlayPause en el video y boton
playPauseBtn.addEventListener("click", togglePlayPause);

video.addEventListener("click", togglePlayPause);

video.addEventListener("ended", () => {
  playPauseBtn.innerHTML = "<i class='fa-solid fa-play'></i>";
});

seekBar.addEventListener("input", () => {
  const seekTime = (video.duration / 100) * seekBar.value;
  video.currentTime = seekTime;
});

video.addEventListener("timeupdate", () => {
  const currentTime = video.currentTime;
  const duration = video.duration;

  const progress = (currentTime / duration) * 100;
  seekBar.value = progress;

  currentTimeElement.textContent = formatTime(currentTime);
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

volumeBar.addEventListener("input", () => {
  video.volume = volumeBar.value;
  volumePercentage.innerHTML = (volumeBar.value * 100).toFixed(0) + "%";
  displayVolume();

  if (volumeBar.value === "0") {
    muteBtn.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>";
  } else {
    muteBtn.innerHTML = "<i class='fa-solid fa-volume-high'></i>";
  }
});

function displayVolume() {
  volumePercentage.style.display = "block";

  setTimeout(() => {
    volumePercentage.style.display = "none";
  }, 1500);
}

muteBtn.addEventListener("click", () => {
  if (video.volume === 0) {
    video.volume = 1;
    muteBtn.innerHTML = "<i class='fa-solid fa-volume-high'></i>";
    volumeBar.value = 1;
  } else {
    video.volume = 0;
    muteBtn.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>";
    volumeBar.value = 0;
  }
});

speedBtn.addEventListener("click", () => {
  const currentSpeed = video.playbackRate;
  if (currentSpeed === 1) {
    video.playbackRate = 1.5;
    speedBtn.textContent = "1.5x";
  } else if (currentSpeed === 1.5) {
    video.playbackRate = 2;
    speedBtn.textContent = "2x";
  } else {
    video.playbackRate = 1;
    speedBtn.textContent = "1x";
  }
});

fullscreenButton.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
