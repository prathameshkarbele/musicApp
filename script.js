console.log("Welcome to spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Kesariya Tera Ishq Hai Piya", filePath: "songs/1.mp3", coverPath: "covers/Music1.webp"},
    {songName: "Maiyya Mainu", filePath: "songs/2.mp3", coverPath: "covers/Music2.webp"},
    {songName: "Teri-Jhalak-Asharfi", filePath: "songs/3.mp3", coverPath: "covers/Music3.jpg"},
    {songName: "Mi-Naad-Khula", filePath: "songs/4.mp3", coverPath: "covers/Music4.jpg"},
    {songName: "Dimple", filePath: "songs/5.mp3", coverPath: "covers/Music5.jpg"},
    {songName: "Sukh Karta Dukha Harta", filePath: "songs/6.mp3", coverPath: "covers/Music6.jpg"},
    {songName: "Mere Ghar Ram Aaye Hain", filePath: "songs/7.mp3", coverPath: "covers/Music7.jpg"},
    {songName: "Bappa-Wala-Gana", filePath: "songs/8.mp3", coverPath: "covers/Music8.jpg"},
    {songName: "Govyachya-Kinaryav", filePath: "songs/9.mp3", coverPath: "covers/Music9.jpg"},

]

songItems.forEach((element , i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
});

// audioElement.play(); 
 
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        // gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;

    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        console.log("songIndex", songIndex)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
})

// console.log("Welcome to spotify");

// // Initialize the Variables
// let songIndex = 0;
// let audioElement = new Audio();
// let masterPlay = document.getElementById('playPause');
// let myProgressBar = document.getElementById('progressBar');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", duration: "3:47"},
//     {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", duration: "3:29"},
//     {songName: "Didaar-Kaka", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", duration: "4:18"},
//     {songName: "Kesariya- Bhramastra ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", duration: "4:27"},
//     {songName: "Oo Bolega Ya Oo Oo Bolega - Pushpa", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", duration: "4:47"},
//     {songName: "Srivalli - Pushpa", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", duration: "4:08"},
//     {songName: "Tu Te Sharab - Jordan Sandhu", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", duration: "3:49"},
//     {songName: "Basti Ka Hasti - MC STAN", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", duration: "3:06"},
// ];

// // Function to Load the Song
// function loadSong(songIndex) {
//     let song = songs[songIndex];
//     audioElement.src = song.filePath;
//     audioElement.load();

//     document.getElementById('songName').innerText = song.songName;
//     document.getElementById('coverImage').src = song.coverPath;
//     document.getElementById('currentTime').innerText = "00:00";
//     document.getElementById('duration').innerText = song.duration;
// }

// // Function to Play the Song
// function playSong() {
//     audioElement.play();
//     masterPlay.querySelector('i').classList.remove('fa-play');
//     masterPlay.querySelector('i').classList.add('fa-pause');
// }

// // Function to Pause the Song
// function pauseSong() {
//     audioElement.pause();
//     masterPlay.querySelector('i').classList.remove('fa-pause');
//     masterPlay.querySelector('i').classList.add('fa-play');
// }

// // Function to Update Progress Bar
// function updateProgress() {
//     let currentDuration = Math.floor(audioElement.currentTime);
//     let totalDuration = Math.floor(audioElement.duration);
//     myProgressBar.value = (currentDuration / totalDuration) * 100;

//     let currentTime = document.getElementById('currentTime');
//     let minutes = Math.floor(currentDuration / 60);
//     let seconds = Math.floor(currentDuration % 60);
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }
//     currentTime.innerText = `${minutes}:${seconds}`;
// }

// // Function to Update Song Time
// function updateSongTime() {
//     let currentDuration = Math.floor(audioElement.currentTime);
//     let totalDuration = Math.floor(audioElement.duration);

//     if (currentDuration === totalDuration) {
//         pauseSong();
//         songIndex++;
//         if (songIndex > songs.length - 1) {
//             songIndex = 0;
//         }
//         loadSong(songIndex);
//         playSong();
//     }
    
//     let progress = (currentDuration / totalDuration) * 100;
//     myProgressBar.value = progress;
//     }
//     // Load the Song
// function loadSong(songIndex) {
//     audioElement.src = songs[songIndex].filePath;
//     document.getElementById('songName').innerText = songs[songIndex].songName;
//     document.getElementById('coverImage').src = songs[songIndex].coverPath;
//     document.getElementById('duration').innerText = songs[songIndex].duration;
// }

// // Play Function
// function playSong() {
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// }

// // Pause Function
// function pauseSong() {
//     audioElement.pause();
//     masterPlay.classList.remove('fa-pause-circle');
//     masterPlay.classList.add('fa-play-circle');
// }

// // Previous Function
// function previousSong() {
//     songIndex = (songIndex - 1 + songs.length) % songs.length;
//     loadSong(songIndex);
//     playSong();
// }

// // Next Function
// function nextSong() {
//     songIndex = (songIndex + 1) % songs.length;
//     loadSong(songIndex);
//     playSong();
// }

// // Update Progress Function
// function updateProgress(event) {
//     const { duration, currentTime } = event.srcElement;
//     const progressPercent = (currentTime / duration) * 100;
//     myProgressBar.style.width = `${progressPercent}%`;
// }

// // Set Progress Function
// function setProgress(event) {
//     const width = this.clientWidth;
//     const clickX = event.offsetX;
//     const duration = audioElement.duration;
//     audioElement.currentTime = (clickX / width) * duration;
// }

// // Load the First Song
// loadSong(songIndex);

// // Event Listeners
// masterPlay.addEventListener('click', function() {
//     const isPlaying = audioElement.paused;
//     if (isPlaying) {
//         playSong();
//     } else {
//         pauseSong();
//     }
// });

// document.getElementById('previous').addEventListener('click', function() {
//     previousSong();
// });

// document.getElementById('next').addEventListener('click', function() {
//     nextSong();
// });

// audioElement.addEventListener('timeupdate', function(event) {
//     updateProgress(event);
// });

// myProgressBar.addEventListener('click', function(event) {
//     setProgress(event);
// });

// songItems.forEach((element, index) => {
//     element.getElementsByTagName("img")[0].src = songs[index].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[index].songName;
//     element.getElementsByClassName("songArtist")[0].innerText = songs[index].duration;

//     element.addEventListener("click", function() {
//         songIndex = index;
//         loadSong(songIndex);
//         playSong();
//     });
// });