


// MUSIK 444444444444444444444444444444444444444444444444444
const playButton4 = document.getElementById('playButton4');
const audioPlayer4 = document.getElementById('audioPlayer4');
const progressBar4 = document.querySelector('.progress-bar4');
const progressIndicator4 = document.querySelector('.progress-indicator4');
const progressDurationLeft4 = document.querySelector('.progress-duration-left4');
const progressDurationRight4 = document.querySelector('.progress-duration-right4');
const piringanHitam4 = document.getElementById('piringan-hitam4');
const spotifyImage4 = document.getElementById('spotify4');
const showLirikButton4 = document.getElementById('showLirik4');
const lyricsContainer4 = document.getElementById('lyricsContainer4');

// buton show judul lirik
showLirikButton4.addEventListener('click', function() {
    if (judulLirik4.style.display === 'none') {
        judulLirik4.style.display = 'block'; // Tampilkan elemen judul lirik saat tombol ditekan
    } else {
        judulLirik4.style.display = 'none'; // Sembunyikan elemen juudl lirik saat tombol ditekan kembali
    }
});

// buton show lirik
showLirikButton4.addEventListener('click', function() {
    if (lyricsContainer4.style.display === 'none') {
        lyricsContainer4.style.display = 'block'; // Tampilkan elemen lirik saat tombol ditekan
    } else {
        lyricsContainer4.style.display = 'none'; // Sembunyikan elemen lirik saat tombol ditekan kembali
    }
});

// lirik
const lyrics4 = [
    { time: 243, text: "Lirik tidak tersedia" },
    // Tambahkan lirik sesuai dengan durasi waktunya
];

let currentLyricIndex4 = 0;
let timeoutId4;

function displayLyrics4() {
    const currentLyric4 = lyrics4[currentLyricIndex4];
    if (currentLyric4) {
        const timeRemaining4 = (currentLyric4.time - audioPlayer4.currentTime) * 1000;
        timeoutId4 = setTimeout(function() {
            lyricsContainer4.textContent = ''; // Menghapus teks lirik setelah jeda waktu tertentu
            currentLyricIndex4++;
            displayLyrics4(); // Lanjutkan ke lirik berikutnya
        }, timeRemaining4); // Hitung jeda waktu sebelum memunculkan teks berikutnya
        lyricsContainer4.textContent = currentLyric4.text; // Tampilkan teks lirik saat ini
    }
}

playButton4.addEventListener('click', function() {
    if (audioPlayer4.paused) {
        audioPlayer4.play();
        playButton4.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        spotifyImage4.src = 'image/profil music/spotify.gif';
        updateProgressBar4();
        // Set margin left piringan-hitam4 menjadi 25px ketika audio dimainkan
        piringanHitam4.style.marginLeft = '25px';
        displayLyrics4(); // Memulai menampilkan lirik

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
        playButton3.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play  3

        // jika clik maka Fungsi musik 2 pause semua
        judulLirik2.style.display = 'none'; // jusul lirik 2
        lyricsContainer2.style.display = 'none'; // lirik 2
        piringanHitam2.style.marginLeft = '-25px'; // piringan hitaam 2
        audioPlayer2.pause(); // musik 2
        spotifyImage2.src = 'image/profil music/spotify.png'; // logo spotify 2
        playButton2.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play btn 2

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
    
        // jika clik maka Fungsi musik Jkt1 pause semua
        judulLirikJkt1.style.display = 'none'; // jusul lirik Jkt1
        lyricsContainerJkt1.style.display = 'none'; // lirik Jkt1
        piringanHitamJkt1.style.marginLeft = '-25px'; // piringan hitaam 6
        audioPlayerJkt1.pause(); // musik 6
        spotifyImageJkt1.src = 'image/profil music/spotify.png'; // logo spotify Jkt1
        playButtonJkt1.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play Jkt1
        
    } else {
        audioPlayer4.pause();
        playButton4.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        spotifyImage4.src = 'image/profil music/spotify.png';
        piringanHitam4.style.marginLeft = '-25px';
        clearTimeout(timeoutId4); // Menghentikan timeout saat audio dijeda
    }
});


function updateProgressBar4() {
    const progress = (audioPlayer4.currentTime / audioPlayer4.duration) * 100;
    progressBar4.style.width = progress + '%';
    progressIndicator4.style.left = progress + '%'; // Atur posisi titik besar sesuai dengan progress
    progressDurationLeft4.textContent = formatTime(audioPlayer4.currentTime);
    progressDurationRight4.textContent = formatTime(audioPlayer4.duration - audioPlayer4.currentTime);

         // Mengatur rotasi gambar piringan-hitam berdasarkan progres musik
         const rotation = progress * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
         const piringanHitam4 = document.getElementById('piringan-hitam4');
         piringanHitam4.style.transform = `rotate(${rotation}deg)`;
    
    if (!audioPlayer4.paused) {
        requestAnimationFrame(updateProgressBar4);
    }
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}



audioPlayer4.addEventListener('ended', function() {
    playButton4.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    progressBar4.style.width = '0%'; // Mengatur progress bar kembali ke awal saat musik selesai
    progressIndicator4.style.left = '0%'; // Mengatur posisi titik besar kembali ke awal saat musik selesai
    progressDurationLeft4.textContent = '0:00';
    progressDurationRight4.textContent = '0:00';

    // Simulasikan klik pada tombol dengan ID playButton2 (lanjut ke musik berikutnya)
    const playButton5 = document.getElementById('playButton5');
    piringanHitam4.style.marginLeft = '-25px';
    spotifyImage4.src = 'image/profil music/spotify.png';
    playButton5.click();
});

