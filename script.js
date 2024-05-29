const musicContainer = document.getElementById('music-container');
const title = document.getElementById('title');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const playBtn = document.getElementById('play');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');

const songs = ['hey', 'summer', 'ukulele'];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function pauseSong() {
    musicContainer.classList.remove('play');
    audio.pause();
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
}

function playSong() {
    musicContainer.classList.add('play');
    audio.play();
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const percent = currentTime / duration * 100;
    progress.style.width = `${percent}%`;

    if (percent >= 100) playNext();
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = clickX / width * duration;
}

function playNext() {
    songIndex++;
    if (songIndex > songs.length - 1) songIndex = 0;
    loadSong(songs[songIndex]);
    if (musicContainer.classList.contains('play')) playSong();
}

function playLast() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    if (musicContainer.classList.contains('play')) playSong();
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
backBtn.addEventListener('click', playLast);
forwardBtn.addEventListener('click', playNext);
