const audio = document.getElementById("songFile");
const progress = document.getElementById("progress");
const songButton = document.querySelector(".songButton");
const playPause = document.querySelector(".fa-play");

const currentTimeDisplay = document.getElementById("currentTime");
const totalTimeDisplay = document.getElementById("totalTime");

songButton.addEventListener("click", () => {
  const cList = playPause.classList;

  if (cList.contains("fa-play")) {
    audio.play();
    cList.remove("fa-play");
    cList.add("fa-pause");
  } else {
    audio.pause();
    cList.remove("fa-pause");
    cList.add("fa-play");
  }
});

audio.addEventListener("timeupdate", () => {
  const progressPercentage = (audio.currentTime / audio.duration) * 100;

  progress.value = progressPercentage;

  // Update the current time display
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
  const newTime = (progress.value / 100) * audio.duration;

  audio.currentTime = newTime;
});

// Update the total time display when the metadata of the audio is loaded
audio.addEventListener("loadedmetadata", () => {
  // Update the total time display
  totalTimeDisplay.textContent = formatTime(audio.duration);
});

// Function to format time in MM:SS format
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

