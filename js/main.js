// Update custom cursor position on mouse move
const cursor = document.querySelector(".mousecursor");

document.addEventListener("mousemove",(e) => {
    let leftposition = e.pageX + 10;
    let topposition = e.pageY + 10;

    cursor.style.left = leftposition + "px";
    cursor.style.top = topposition + "px";
} )


// Get the audio element and mute button image
const backgroundMusic = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');

// Define paths for mute and unmute icons
const muteIcon = '/images/MUTE.png';
const unmuteIcon = '/images/MUTE.png';

// Set initial state.
let isMuted = false; // Start with audio muted
muteButton.src = unmuteIcon; // Set initial icon to unmute
muteButton.alt = 'Mute'; // Set alt text to unmute

// Toggle mute/unmute when the mute button image is clicked
muteButton.addEventListener('click', () => {
    if (isMuted) {
        backgroundMusic.muted = false; // Unmute the audio
        muteButton.src = muteIcon; // Change image source to mute icon
        muteButton.alt = 'Mute'; // Change alt text to mute
        isMuted = false; // Update state to unmuted
    } else {
        backgroundMusic.muted = true; // Mute the audio
        muteButton.src = unmuteIcon; // Change image source to unmute icon
        muteButton.alt = 'Unmute'; // Change alt text to unmute
        isMuted = true; // Update state to muted
    }
});