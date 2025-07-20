let highestZ = 100;
let isDragging = false;
let dragElement = null;
let dragOffset = { x: 0, y: 0 };
let previewMode = false;
let clickStartTime = 0;
let clickStartPos = { x: 0, y: 0 };

let isPlaying = false;
let currentVolume = 0.7;


document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    createDigitalRain();
    randomizePositions();

    // Multi-music player logic
    document.querySelectorAll('.music-player').forEach(function(player, idx) {
        const audio = player.querySelector('audio');
        const playBtn = player.querySelector('.play-btn');
        const prevBtn = player.querySelector('.control-btn:not(.play-btn)');
        const nextBtn = player.querySelectorAll('.control-btn')[2];
        const progressBar = player.querySelector('.progress-bar');
        const progress = player.querySelector('.progress');
        const currentTimeEl = player.querySelector('.time-display span:first-child');
        const durationEl = player.querySelector('.time-display span:last-child');
        let isPlaying = false;
        let currentVolume = 0.7;

        function updateVolume() {
            const volumeBar = player.querySelector('.volume-bar');
            if (volumeBar) volumeBar.style.width = (currentVolume * 100) + '%';
            if (audio) audio.volume = currentVolume;
        }

        function updateProgress() {
            if (audio && audio.duration) {
                const prog = (audio.currentTime / audio.duration) * 100;
                if (progress) progress.style.width = prog + '%';
                if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
                if (durationEl) durationEl.textContent = formatTime(audio.duration);
            }
        }

        if (playBtn) playBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isPlaying) {
                audio.pause();
                playBtn.textContent = '▶';
                playBtn.classList.remove('playing');
            } else {
                // Pause all other players
                document.querySelectorAll('.music-player audio').forEach(a => { if (a !== audio) a.pause(); });
                document.querySelectorAll('.music-player .play-btn').forEach(btn => { if (btn !== playBtn) { btn.textContent = '▶'; btn.classList.remove('playing'); } });
                audio.play().catch(console.error);
                playBtn.textContent = '⏸';
                playBtn.classList.add('playing');
            }
            isPlaying = !isPlaying;
        });

        if (prevBtn) prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (audio) audio.currentTime = 0;
            createSparkle(e.pageX, e.pageY);
        });

        if (nextBtn) nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (audio) audio.currentTime = audio.duration || 0;
            createSparkle(e.pageX, e.pageY);
        });

        if (progressBar) progressBar.addEventListener('click', function(e) {
            e.stopPropagation();
            if (audio && audio.duration) {
                const rect = progressBar.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const clickRatio = clickX / rect.width;
                audio.currentTime = clickRatio * audio.duration;
            }
        });

        const volumeSlider = player.querySelector('.volume-slider');
        if (volumeSlider) volumeSlider.addEventListener('click', function(e) {
            e.stopPropagation();
            const rect = volumeSlider.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            currentVolume = Math.max(0, Math.min(1, clickX / rect.width));
            updateVolume();
        });

        if (audio) {
            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('ended', function() {
                isPlaying = false;
                playBtn.textContent = '▶';
                playBtn.classList.remove('playing');
            });
            audio.addEventListener('loadedmetadata', function() {
                if (durationEl) durationEl.textContent = formatTime(audio.duration);
            });
            // Initialize
            updateVolume();
            updateProgress();
        }
    });

    // --⭐ Container interactions
    document.querySelectorAll('.container').forEach(container => {
        container.addEventListener('mousedown', function(e) {
            if (e.target.closest('.control-btn') ||
                e.target.closest('.progress-bar') ||
                e.target.closest('.volume-slider')) {
                    return;
                }
                startDrag(e, container);
            });
    });

    // --⭐ Exit Preview
    document.getElementById('blurOverlay').addEventListener('click', exitPreviewMode);

    // --⭐ Background Interactions
    document.body.addEventListener('click', function(e) {
        if (!e.target.closest('.container') && !previewMode) {
            createSparkle(e.pageX, e.pageY);
            if (Math.random() > 0.7) {
                createGlitchParticles(e.pageX, e.pageY);
            }
        }
    });

    document.addEventListener('contextmenu', e => e.preventDefault());
});

// ---⭐ Window Resize Handles ⭐--- //
window.addEventListener('resize', function() {
    // Ensure containers stay within the page
    document.querySelectorAll('.container').forEach(container => {
        const rect = container.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            container.style.left = (window.innerWidth - container.offsetWidth - 20) + 'px';
        }
        if (rect.bottom > window.innerHeight) {
            container.style.top = (window.innerHeight - container.offsetHeight - 20) + 'px';
        }
    });
});

// ---⭐ Keyboard Shortcuts ⭐--- //
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && !previewMode) {
        e.preventDefault();
        document.getElementById('playBtn').click();
    } else if (e.code === 'Escape' && previewMode) {
        exitPreviewMode();
    } else if (e.code === 'KeyR' && !previewMode) {
        randomizePositions();
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createSparkle(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                );
            }, i * 100);
        }
    }
});

// ---⭐ Normal Particles States ⭐--- //
setInterval(() => {
    if (!isDragging && !previewMode && Math.random() > 0.8) {
        createSparkle(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
    }
}, 2000);

setInterval(() => {
    if (Math.random() > 0.9) {
        createGlitchParticles(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
    }
}, 5000);

// ---⭐ Containers Positioning ⭐--- //
function randomizePositions() {
    const containers = document.querySelectorAll('.container');
    containers.forEach((container, index) => {
        const maxX = window.innerWidth - container.offsetWidth - 20;
        const maxY = window.innerHeight - container.offsetHeight - 20;

        // Better distribution = prevent overlap
        const x = Math.random() * Math.max(0, maxX);
        const y = Math.random() * Math.max(0, maxY);

        container.style.left = x + 'px';
        container.style.top = y + 'px';

        const rotation = (Math.random() - 0.5) * 15;
            container.style.transform = `rotate(${rotation}deg)`;
        });
}

// ---⭐ Preview - Active ⭐--- //
function enterPreviewMode(element) {
    if (isDragging) return;
            
    previewMode = true;
    document.getElementById('blurOverlay').classList.add('active');
    element.classList.add('preview-mode');

    highestZ++;
    element.style.zIndex = highestZ;

    // Lauch Sparkles Paticle
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createSparkle(
                rect.left + Math.random() * rect.width,
                rect.top + Math.random() * rect.height
            );
        }, i * 80);
    }

    // Lauch Glitch Particles
    createGlitchParticles(rect.left + rect.width/2, rect.top + rect.height/2);
}

function exitPreviewMode() {
    previewMode = false;
    document.getElementById('blurOverlay').classList.remove('active');
    document.querySelectorAll('.container').forEach(el => {
        el.classList.remove('preview-mode');
    });
}
// ---⭐ Drag Containers ⭐--- //
function startDrag(e, element) {
    clickStartTime = Date.now();
    clickStartPos = { x: e.clientX, y: e.clientY };
            
    const rect = element.getBoundingClientRect();
    dragOffset.x = e.clientX - rect.left;
    dragOffset.y = e.clientY - rect.top;
            
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(e) {
    const timeDiff = Date.now() - clickStartTime;
    const distance = Math.sqrt(
        Math.pow(e.clientX - clickStartPos.x, 2) +
        Math.pow(e.clientY - clickStartPos.y, 2)
    );

    // Drag detection - requires clear intent
    if (distance > 25 && timeDiff < 500 && !isDragging && !previewMode) {
        isDragging = true;
        dragElement = document.elementFromPoint(clickStartPos.x, clickStartPos.y).closest('.container');
        if (dragElement) {
            dragElement.classList.add('dragging');
            highestZ++;
            dragElement.style.zIndex = highestZ;

            // Create Trail Particles with Sparkle
            createSparkle(e.clientX, e.clientY);
        }
    }

    if (isDragging && dragElement) {
        const x = Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - dragElement.offsetWidth));
        const y = Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - dragElement.offsetHeight));

        dragElement.style.left = x + 'px';
        dragElement.style.top = y + 'px';
                
        // Create drag trail
        if (Math.random() > 0.7) {
            createSparkle(e.clientX + (Math.random() - 0.5) * 20, e.clientY + (Math.random() - 0.5) * 20);
        }
    }
}

function handleMouseUp(e) {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
            
    const timeDiff = Date.now() - clickStartTime;
    const distance = Math.sqrt(
        Math.pow(e.clientX - clickStartPos.x, 2) +
        Math.pow(e.clientY - clickStartPos.y, 2)
    );
            
    if (isDragging) {
        isDragging = false;
        if (dragElement) {
            dragElement.classList.remove('dragging');
            dragElement = null;
        }
    } else if (!previewMode && distance < 15 && timeDiff > 300) {
        // Long press for preview
        const element = document.elementFromPoint(clickStartPos.x, clickStartPos.y).closest('.container');
        if (element) {
            enterPreviewMode(element);
        }
    }
}

// ---⭐ Music Player ⭐--- //
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}


