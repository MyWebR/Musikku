
// 5555555555555555555555555555555555555555555555555555555555555555555555
// const playButton5 = document.getElementById('playButton5');
const audioPlayer5 = document.getElementById('audioPlayer5');
const progressBar5 = document.querySelector('.progress-bar5');
const progressIndicator5 = document.querySelector('.progress-indicator5');
const progressDurationLeft5 = document.querySelector('.progress-duration-left5');
const progressDurationRight5 = document.querySelector('.progress-duration-right5');
const piringanHitam5 = document.getElementById('piringan-hitam5');
const spotifyImage5 = document.getElementById('spotify5');
const showLirikButton5 = document.getElementById('showLirik5');
const lyricsContainer5 = document.getElementById('lyricsContainer5');

// buton show judul lirik
showLirikButton5.addEventListener('click', function() {
    if (judulLirik5.style.display === 'none') {
        judulLirik5.style.display = 'block'; // Tampilkan elemen judul lirik saat tombol ditekan
    } else {
        judulLirik5.style.display = 'none'; // Sembunyikan elemen juudl lirik saat tombol ditekan kembali
    }
});

// buton show lirik
showLirikButton5.addEventListener('click', function() {
    if (lyricsContainer5.style.display === 'none') {
        lyricsContainer5.style.display = 'block'; // Tampilkan elemen lirik saat tombol ditekan
    } else {
        lyricsContainer5.style.display = 'none'; // Sembunyikan elemen lirik saat tombol ditekan kembali
    }
});

// lirik
const lyrics5 = [
    { time: 25, text: "~Musik~" },
    { time: 33, text: "I need somebody to love" },
    { time: 38, text: "I need somebody to hold" },
    { time: 47, text: "Me tight, cause I'm afraid" },
    { time: 53, text: "That you don't feel the same" },
    { time: 60, text: "Why can't I be in your mind" },
    { time: 65, text: "Why can't I be in your life" },
    { time: 75, text: "I find it difficult for me" },
    { time: 82, text: "You don't feek the same" },
    { time: 89, text: "But you" },
    { time: 92, text: "Make me" },
    { time: 102, text: "Go crazy" },
    { time: 110, text: "But you" },
    { time: 116, text: "Oh love" },
    { time: 120, text: "I've let my love die" },
    { time: 129, text: "Cause I'm a foll who thinks you're" },
    { time: 137, text: "You've got me losing my mind" },
    { time: 144, text: "But you" },
    { time: 147, text: "Make me" },
    { time: 157, text: "Go crazy" },
    { time: 165, text: "Over you" },
    { time: 171, text: "But you" },
    { time: 174, text: "Make me" },
    { time: 184, text: "Go crazy" },
    { time: 200, text: "But you" },
    // Tambahkan lirik sesuai dengan durasi waktunya
];

let currentLyricIndex5 = 0;
let timeoutId5;

function displayLyrics5() {
    const currentLyric5 = lyrics5[currentLyricIndex5];
    if (currentLyric5) {
        const timeRemaining5 = (currentLyric5.time - audioPlayer5.currentTime) * 1000;
        timeoutId5 = setTimeout(function() {
            lyricsContainer5.textContent = ''; // Menghapus teks lirik setelah jeda waktu tertentu
            currentLyricIndex5++;
            displayLyrics5(); // Lanjutkan ke lirik berikutnya
        }, timeRemaining5); // Hitung jeda waktu sebelum memunculkan teks berikutnya
        lyricsContainer5.textContent = currentLyric5.text; // Tampilkan teks lirik saat ini
    }
}

playButton5.addEventListener('click', function() {
    if (audioPlayer5.paused) {
        audioPlayer5.play();
        playButton5.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        spotifyImage5.src = 'image/profil music/spotify.gif';
        updateProgressBar5();
        // Set margin left piringan-hitam5 menjadi 25px ketika audio dimainkan
        piringanHitam5.style.marginLeft = '25px';
        displayLyrics5(); // Memulai menampilkan lirik
        // memunculkan icon lirik

        // jika clik maka Fungsi musik 1 pause semua
        judulLirik1.style.display = 'none'; // jusul lirik 1
        lyricsContainer1.style.display = 'none'; // lirik 1
        piringanHitam1.style.marginLeft = '-25px'; // piringan hitaam 1
        audioPlayer1.pause(); // musik 1
        spotifyImage1.src = 'image/profil music/spotify.png'; // logo spotify 1
        playButton1.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 

        // jika clik maka Fungsi musik 2 pause semua
        judulLirik2.style.display = 'none'; // jusul lirik 2
        lyricsContainer2.style.display = 'none'; // lirik 2
        piringanHitam2.style.marginLeft = '-25px'; // piringan hitaam 2
        audioPlayer2.pause(); // musik 2
        spotifyImage2.src = 'image/profil music/spotify.png'; // logo spotify 2
        playButton2.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play btn 2

        // jika clik maka Fungsi musik 3 pause semua
        judulLirik3.style.display = 'none'; // jusul lirik 3
        lyricsContainer3.style.display = 'none'; // lirik 3
        piringanHitam3.style.marginLeft = '-25px'; // piringan hitaam 3
        audioPlayer3.pause(); // musik 3
        spotifyImage3.src = 'image/profil music/spotify.png'; // logo spotify 3
        playButton3.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 3


        // jika clik maka Fungsi musik 4 pause semua
        judulLirik4.style.display = 'none'; // jusul lirik 4
        lyricsContainer4.style.display = 'none'; // lirik 4
        piringanHitam4.style.marginLeft = '-25px'; // piringan hitaam 4
        audioPlayer4.pause(); // musik 4
        spotifyImage4.src = 'image/profil music/spotify.png'; // logo spotify 4
        playButton4.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 4

        // jika clik maka Fungsi musik 6 pause semua
        judulLirik6.style.display = 'none'; // jusul lirik 6
        lyricsContainer6.style.display = 'none'; // lirik 6
        piringanHitam6.style.marginLeft = '-25px'; // piringan hitaam 6
        audioPlayer6.pause(); // musik 6
        spotifyImage6.src = 'image/profil music/spotify.png'; // logo spotify 6
        playButton6.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 6

        // jika clik maka Fungsi musik 7 pause semua
        judulLirik7.style.display = 'none'; // jusul lirik 7
        lyricsContainer7.style.display = 'none'; // lirik 7
        piringanHitam7.style.marginLeft = '-25px'; // piringan hitaam 7
        audioPlayer7.pause(); // musik 7
        spotifyImage7.src = 'image/profil music/spotify.png'; // logo spotify 7
        playButton7.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 7
    } else {
        audioPlayer5.pause();
        playButton5.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        spotifyImage5.src = 'image/profil music/spotify.png';
        piringanHitam5.style.marginLeft = '-25px';
        clearTimeout(timeoutId5); // Menghentikan timeout saat audio dijeda
    }
});


function updateProgressBar5() {
    const progress = (audioPlayer5.currentTime / audioPlayer5.duration) * 100;
    progressBar5.style.width = progress + '%';
    progressIndicator5.style.left = progress + '%'; // Atur posisi titik besar sesuai dengan progress
    progressDurationLeft5.textContent = formatTime(audioPlayer5.currentTime);
    progressDurationRight5.textContent = formatTime(audioPlayer5.duration - audioPlayer5.currentTime);

         // Mengatur rotasi gambar piringan-hitam berdasarkan progres musik
         const rotation = progress * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
         const piringanHitam5 = document.getElementById('piringan-hitam5');
         piringanHitam5.style.transform = `rotate(${rotation}deg)`;
    
    if (!audioPlayer5.paused) {
        requestAnimationFrame(updateProgressBar5);
    }
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}



audioPlayer5.addEventListener('ended', function() {
    playButton5.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    progressBar5.style.width = '0%'; // Mengatur progress bar kembali ke awal saat musik selesai
    progressIndicator5.style.left = '0%'; // Mengatur posisi titik besar kembali ke awal saat musik selesai
    progressDurationLeft5.textContent = '0:00';
    progressDurationRight5.textContent = '0:00';

    // Simulasikan klik pada tombol dengan ID playButton2 (lanjut ke musik berikutnya)
    const playButton6 = document.getElementById('playButton6');
    piringanHitam5.style.marginLeft = '-25px';
    spotifyImage5.src = 'image/profil music/spotify.png';
    playButton6.click();
});


