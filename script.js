const musicBtn = document.getElementById('musicBtn');
const birthdayAudio = document.getElementById('birthdayAudio');
let isPlaying = false;

// Music button click handler
musicBtn.addEventListener('click', function() {
    if (isPlaying) {
        birthdayAudio.pause();
        musicBtn.textContent = '🎵 Play Birthday Music';
        musicBtn.classList.remove('playing');
        isPlaying = false;
    } else {
        birthdayAudio.play();
        musicBtn.textContent = '⏸️ Stop Music';
        musicBtn.classList.add('playing');
        isPlaying = true;
    }
});

// Reset button text when audio ends
birthdayAudio.addEventListener('ended', function() {
    musicBtn.textContent = '🎵 Play Birthday Music';
    musicBtn.classList.remove('playing');
    isPlaying = false;
});

// Trigger confetti animation on page load
window.addEventListener('load', function() {
    triggerConfetti();
});

// Confetti animation function
function triggerConfetti() {
    const confettiPieces = document.querySelectorAll('.confetti span');
    confettiPieces.forEach(piece => {
        // Reset animation
        piece.style.animation = 'none';
        setTimeout(() => {
            piece.style.animation = 'confettiFall 3s ease-out forwards';
        }, 10);
    });
}

// Trigger confetti every time music starts
musicBtn.addEventListener('click', function() {
    if (isPlaying) {
        setTimeout(triggerConfetti, 500);
    }
});
