/*
document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const audio = document.getElementById("audio");
  
    playButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-stop"></i>';
      } else {
        audio.pause();
        audio.currentTime = 0; // Réinitialise la lecture
        playButton.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  });
*/
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const audioSource = document.getElementById("audioSource");
    let currentPlayingButton = null; // Garde la référence du bouton en cours de lecture

    // Liste des morceaux avec leurs sources audio
    const tracks = {
        'audio1': 'creative-technology-showreel-241274.mp3',
        'audio2': 'music2.mp3',
        'audio3': 'music3.mp3',
        'audio4': 'music4.mp3',
        'audio5': 'music5.mp3',
        'audio6': 'music6.mp3',
    };

    document.querySelectorAll('.playButton').forEach((button, index) => {
        button.addEventListener('click', () => {
            const trackKey = `audio${index + 1}`;

            // Si la piste est en lecture, stoppe-la
            if (currentPlayingButton === button && !audio.paused) {
                audio.pause();
                button.innerHTML = '<i class="fas fa-play"></i>';
                currentPlayingButton = null;
            } else {
                // Change la source audio et joue la piste
                audioSource.src = tracks[trackKey];
                audio.load();
                audio.play();
                button.innerHTML = '<i class="fas fa-stop"></i>';

                // Mettre à jour les autres boutons
                if (currentPlayingButton && currentPlayingButton !== button) {
                    currentPlayingButton.innerHTML = '<i class="fas fa-play"></i>';
                }
                currentPlayingButton = button; // Définit le bouton en cours
            }
        });
    });

    // Réinitialise les boutons lorsque l'audio est en pause ou terminé
    audio.addEventListener('pause', () => {
        if (currentPlayingButton) {
            currentPlayingButton.innerHTML = '<i class="fas fa-play"></i>';
            currentPlayingButton = null;
        }
    });

    audio.addEventListener('ended', () => {
        if (currentPlayingButton) {
            currentPlayingButton.innerHTML = '<i class="fas fa-play"></i>';
            currentPlayingButton = null;
        }
    });
});
