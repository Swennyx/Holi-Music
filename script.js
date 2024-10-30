document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const audio = document.getElementById("audio");
  
    playButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playButton.textContent = "Stop";
      } else {
        audio.pause();
        audio.currentTime = 0; // Réinitialise la lecture
        playButton.textContent = "Play";
      }
    });
  });
  