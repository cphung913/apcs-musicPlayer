const musicContainer = document.getElementById('music-container');
const title = document.getElementById('title');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');

const songs = ['hey', 'summer', 'ukulele'];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

playBtn.addEventListener('click', () => {
    musicContainer.classList.toggle('play');
});
