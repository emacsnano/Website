// Track cursor for ambient glow
document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// Scroll reveal animation observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.05
});

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Subtitle cycling logic (only runs on homepage)
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
