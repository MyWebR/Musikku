// musik 222222222222222222222222222222222222222222222222
const playButton2 = document.getElementById('playButton2');
const audioPlayer2 = document.getElementById('audioPlayer2');
const progressBar2 = document.querySelector('.progress-bar2');
const progressIndicator2 = document.querySelector('.progress-indicator2');
const progressDurationLeft2 = document.querySelector('.progress-duration-left2');
const progressDurationRight2 = document.querySelector('.progress-duration-right2');
const piringanHitam2 = document.getElementById('piringan-hitam2');
const spotifyImage2 = document.getElementById('spotify2');
const showLirikButton2 = document.getElementById('showLirik2');
const lyricsContainer2 = document.getElementById('lyricsContainer2');

// buton show judul lirik
showLirikButton2.addEventListener('click', function() {
    if (judulLirik2.style.display === 'none') {
        judulLirik2.style.display = 'block'; // Tampilkan elemen judul lirik saat tombol ditekan
    } else {
        judulLirik2.style.display = 'none'; // Sembunyikan elemen juudl lirik saat tombol ditekan kembali
    }
});

// buton show lirik
showLirikButton2.addEventListener('click', function() {
    if (lyricsContainer2.style.display === 'none') {
        lyricsContainer2.style.display = 'block'; // Tampilkan elemen lirik saat tombol ditekan
    } else {
        lyricsContainer2.style.display = 'none'; // Sembunyikan elemen lirik saat tombol ditekan kembali
    }
});

// lirik
const lyrics2 = [
    { time: 10, text: "~Music~" },
    { time: 15, text: "Are you sick of me?" },
    { time: 17, text: "Would you like to be?" },
    { time: 21, text: "I'm trying to tell you something" },
    { time: 25, text: "Something that I already said" },
    { time: 28, text: "~Music~" },
    { time: 33, text: "You like a pretty boy" },
    { time: 35, text: "With a pretty voice" },
    { time: 39, text: "Who is trying to sell you something" },
    { time: 45, text: "Something that you already said" },
    { time: 48, text: "But if you're too drunk to drive" },
    { time: 50, text: "And the music is right" },
    { time: 52, text: "She might let you stay" },
    { time: 54, text: "But just for the night" },
    { time: 57, text: "And if she grabs for your hand" },
    { time: 59, text: "And drags you analog" },
    { time: 61, text: "She might want a kiss" },
    { time: 63, text: "Before the end of this song" },
    { time: 72, text: "Because love can burn lika a cigarette" },
    { time: 80, text: "And leave you alone with nothing" },
    { time: 83, text: "~Music~" },
    { time: 87, text: "While the others tals" },
    { time: 91, text: "We were listening to lovers rock" },
    { time: 99, text: "In her bedroom" },
    { time: 101, text: "In her bedroom x2" },
    { time: 106, text: "And if you start to kiss" },
    { time: 110, text: "And the record skips" },
    { time: 113, text: "Flip it over" },
    { time: 118, text: "And sit a litle closer" },
    { time: 121, text: "But if you're too drunk to drive" },
    { time: 124, text: "And the music is right" },
    { time: 126, text: "She might let you stay" },
    { time: 128, text: "But just for the night" },
    { time: 130, text: "And if she grabs for your hand" },
    { time: 133, text: "And drags you analog" },
    { time: 135, text: "She might want a kiss" },
    { time: 137, text: "Before the end of this song" },
    { time: 145, text: "Because love can burn like a cigaratte" },
    { time: 153, text: "And leave you alone with nothing" },
    { time: 165, text: "~Music~" },
    { time: 170, text: "Do-do, do-do-do-do-do x1" },
    { time: 174, text: "Do-do, do-do-do-do-do x2" },
    { time: 179, text: "Do-do, do-do-do-do-do x3" },
    { time: 182, text: "Do-do, do-do-do-do-do x4" },
    { time: 191, text: "Because love can burn like a cigarete" },
    { time: 196, text: "And leave you alone with nothing" },
    { time: 210, text: "And leave you alone with nothing" },

    // Tambahkan lirik sesuai dengan durasi waktunya
];

let currentLyricIndex2 = 0;
let timeoutId2;

function displayLyrics2() {
    const currentLyric2 = lyrics2[currentLyricIndex2];
    if (currentLyric2) {
        const timeRemaining2 = (currentLyric2.time - audioPlayer2.currentTime) * 1000;
        timeoutId2 = setTimeout(function() {
            lyricsContainer2.textContent = ''; // Menghapus teks lirik setelah jeda waktu tertentu
            currentLyricIndex2++;
            displayLyrics2(); // Lanjutkan ke lirik berikutnya
        }, timeRemaining2); // Hitung jeda waktu sebelum memunculkan teks berikutnya
        lyricsContainer2.textContent = currentLyric2.text; // Tampilkan teks lirik saat ini
    }
}

playButton2.addEventListener('click', function() {
    if (audioPlayer2.paused) {
        audioPlayer2.play();
        playButton2.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        spotifyImage2.src = 'image/profil music/spotify.gif';
        updateProgressBar2();
        // Set margin left piringan-hitam2 menjadi 25px ketika audio dimainkan
        piringanHitam2.style.marginLeft = '25px';
        displayLyrics2(); // Memulai menampilkan lirik

        // jika clik maka Fungsi musik 1 pause semua
        judulLirik1.style.display = 'none'; // jusul lirik 1
        lyricsContainer1.style.display = 'none'; // lirik 1
        piringanHitam1.style.marginLeft = '-25px'; // piringan hitaam 1
        audioPlayer1.pause(); // musik 1
        spotifyImage1.src = 'image/profil music/spotify.png'; // logo spotify 1
        playButton1.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 

        // jika clik maka Fungsi musik 3 pause semua
        judulLirik3.style.display = 'none'; // jusul lirik 3
        lyricsContainer3.style.display = 'none'; // lirik 3
        piringanHitam3.style.marginLeft = '-25px'; // piringan hitaam 3
        audioPlayer3.pause(); // musik 3
        spotifyImage3.src = 'image/profil music/spotify.png'; // logo spotify 3
        playButton3.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play btn 3

        // jika clik maka Fungsi musik 4 pause semua
        judulLirik4.style.display = 'none'; // jusul lirik 4
        lyricsContainer4.style.display = 'none'; // lirik 4
        piringanHitam4.style.marginLeft = '-25px'; // piringan hitaam 4
        audioPlayer4.pause(); // musik 4
        spotifyImage4.src = 'image/profil music/spotify.png'; // logo spotify 4
        playButton4.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 4

        // jika clik maka Fungsi musik 5 pause semua
        judulLirik5.style.display = 'none'; // jusul lirik 5
        lyricsContainer5.style.display = 'none'; // lirik 5
        piringanHitam5.style.marginLeft = '-25px'; // piringan hitaam 5
        audioPlayer5.pause(); // musik 5
        spotifyImage5.src = 'image/profil music/spotify.png'; // logo spotify 5
        playButton5.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 5

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
        audioPlayer2.pause();
        playButton2.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        spotifyImage2.src = 'image/profil music/spotify.png';
        piringanHitam2.style.marginLeft = '-25px';
        clearTimeout(timeoutId2); // Menghentikan timeout saat audio dijeda
    }
});


function updateProgressBar2() {
    const progress = (audioPlayer2.currentTime / audioPlayer2.duration) * 100;
    progressBar2.style.width = progress + '%';
    progressIndicator2.style.left = progress + '%'; // Atur posisi titik besar sesuai dengan progress
    progressDurationLeft2.textContent = formatTime(audioPlayer2.currentTime);
    progressDurationRight2.textContent = formatTime(audioPlayer2.duration - audioPlayer2.currentTime);

         // Mengatur rotasi gambar piringan-hitam berdasarkan progres musik
         const rotation = progress * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
         const piringanHitam2 = document.getElementById('piringan-hitam2');
         piringanHitam2.style.transform = `rotate(${rotation}deg)`;
    
    if (!audioPlayer2.paused) {
        requestAnimationFrame(updateProgressBar2);
    }
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}



audioPlayer2.addEventListener('ended', function() {
    playButton2.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    progressBar2.style.width = '0%'; // Mengatur progress bar kembali ke awal saat musik selesai
    progressIndicator2.style.left = '0%'; // Mengatur posisi titik besar kembali ke awal saat musik selesai
    progressDurationLeft2.textContent = '0:00';
    progressDurationRight2.textContent = '0:00';

    // Simulasikan klik pada tombol dengan ID playButton3 (lanjut ke musik berikutnya)
    const playButton3 = document.getElementById('playButton3');
    piringanHitam2.style.marginLeft = '-25px';
    spotifyImage2.src = 'image/profil music/spotify.png';
    playButton3.click();
});

