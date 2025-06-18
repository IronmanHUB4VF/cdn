// Hide loading screen when page loads
window.addEventListener('load', function() {
    document.getElementById('loading').style.display = 'none';

    const player = new Plyr('#player', {
        controls: [
            'play-large', // The large play button in the center
            'play', // Play/pause playback
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'settings', // Settings menu
            'pip', // Picture-in-picture (for supported browsers)
            'airplay', // Airplay (for Apple devices)
            'fullscreen' // Toggle fullscreen
        ],
        seekTime: 10,
        speed: { selected: 1, options: [0.5, 1, 1.5, 2] },
        ratio: '16:9'
    });
});



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy to clipboard function
function copyStreamLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
    });
}

// Download function
function streamDownload() {
    const link = document.createElement('a');
    link.href = '{{file_url}}';
    link.download = '{{file_name}}';
    link.click();
}

const videolink = window.location.href;
const lazyLink = videolink.replace("/watch/", "/dl/");
function vlc_player() {
    const openLazyLink = lazyLink;
    const openVlc = `vlc://${openLazyLink}`;
    window.location.href = openVlc;
}

function mx_player() {
    const openLazyLink = lazyLink;
    const openMx = `intent:${openLazyLink}#Intent;package=com.mxtech.videoplayer.ad;end`;
    window.location.href = openMx;
}

function playit_player() {
  const openLazyLink = lazyLink;
  const openPlayit = `playit://playerv2/video?url=${openLazyLink}`;
    window.location.href = openPlayit;
}

function s_player() {
    const openLazyLink = lazyLink;
    const openSplayer = `intent:${openLazyLink}#Intent;action=com.young.simple.player.playback_online;package=com.young.simple.player;end`;
    window.location.href = openSplayer;
}

function km_player() {
   const openLazyLink = lazyLink;
   const openKmplayer = `intent:${openLazyLink}#Intent;package=com.kmplayer;end`;
   window.location.href = openKmplayer;
}

function hd_player() {
   const openLazyLink = lazyLink;
   const openHDplayer = `intent:${openLazyLink}#Intent;package=uplayer.video.player;end`;
   window.location.href = openHDplayer;
}

function n_player() {
    const nplayerLink = 'nplayer-' + lazyLink;
    window.location.href = nplayerLink;
}

// Navigation toggle functions (placeholder)
function toggleWidthnav(element) {
    // Add your navigation toggle logic here
}

function toggleWidth(element) {
    // Add your width toggle logic here
}
