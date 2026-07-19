// Subtitle cycling logic
const subtitles = [
    "Building polished software.",
    "Creating unique web designs.",
    "Developing intelligent AI systems."
];
let currentSubtitleIndex = 0;
const subtitleEl = document.getElementById('cycling-subtitle');

if (subtitleEl) {
    setInterval(() => {
        subtitleEl.classList.add('fade-out');
        setTimeout(() => {
            currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitles.length;
            subtitleEl.textContent = subtitles[currentSubtitleIndex];
            subtitleEl.classList.remove('fade-out');
        }, 400);
    }, 4000);
}
