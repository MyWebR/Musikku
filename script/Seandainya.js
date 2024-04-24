
// 66666666666666666666666666666666666666666666666666666666666666666666
const playButton6 = document.getElementById('playButton6');
const audioPlayer6 = document.getElementById('audioPlayer6');
const progressBar6 = document.querySelector('.progress-bar6');
const progressIndicator6 = document.querySelector('.progress-indicator6');
const progressDurationLeft6 = document.querySelector('.progress-duration-left6');
const progressDurationRight6 = document.querySelector('.progress-duration-right6');
const piringanHitam6 = document.getElementById('piringan-hitam6');
const spotifyImage6 = document.getElementById('spotify6');
const showLirikButton6 = document.getElementById('showLirik6');
const lyricsContainer6 = document.getElementById('lyricsContainer6');

// button show judul lirik
showLirikButton6.addEventListener('click', function() {
    if (judulLirik6.style.display === 'none') {
        judulLirik6.style.display = 'block'; // Tampilkan elemen judul lirik saat tombol ditekan
    } else {
        judulLirik6.style.display = 'none'; // Sembunyikan elemen juudl lirik saat tombol ditekan kembali
    }
});

// button show lirik
showLirikButton6.addEventListener('click', function() {
    if (lyricsContainer6.style.display === 'none') {
        lyricsContainer6.style.display = 'block'; // Tampilkan elemen lirik saat tombol ditekan
    } else {
        lyricsContainer6.style.display = 'none'; // Sembunyikan elemen lirik saat tombol ditekan kembali
    }
});

// lirik
const lyrics6 = [
    { time: 38, text: "~Musik~" },
    { time: 46, text: "Kelak kau 'kan menjalani hidupmu sendiri" },
    { time: 53, text: "Melukai kenangan yang telah kita lalui" },
    { time: 61, text: "Yang tersisa hanya aku sendiri di sini" },
    { time: 69, text: "Kau akan terbang jauh menembus awan" },
    { time: 77, text: "Memulai kisah baru tanpa diriku" },
    { time: 87, text: "Seandainya kau tau ku tak ingin kau pergi" },
    { time: 93, text: "Meninggalkanku sendiri bersama bayanganku" },
    { time: 102, text: "Seandainya kau tau aku 'kan selalu cinta" },
    { time: 110, text: "Jangan kau lupakan kenangan kita selama ini" },
    { time: 122, text: "~Musik~" },
    { time: 130, text: "Kelak kau 'kan menjalani hidupmu sendiri" },
    { time: 138, text: "Meluakai kenangan yang telah kita lalui" },
    { time: 145, text: "Kau akan terbang jauh menembus awan" },
    { time: 154, text: "Memulai kisah baru tanpa diriku" },
    { time: 164, text: "Seandainya kau tau ku tak ingin kau pergi" },
    { time: 169, text: "Meninggalkanku sendiri bersama bayanganku" },
    { time: 179, text: "Seandainya kau tau aku 'kan selalu cinta" },
    { time: 185, text: "Jangan kau lupakan kenangan kita selama ini" },
    { time: 185, text: "~Musik~" },
    { time: 190, text: "Selama ini" },
    { time: 201, text: "~Musik~" },
    { time: 209, text: "Seandainya kau tau ku tak ingin kau pergi" },
    { time: 210, text: "oh-oo" },
    { time: 216, text: "Meninggalkanku sendiri bersama bayanganku" },
    { time: 226, text: "Seandainya kau tau aku 'kan selalu cinta" },
    { time: 233, text: "Jangan kau lupakan kenangan kita selama ini" },
    { time: 237, text: "Ha-aa-oo" },
    { time: 243, text: "Selama ini" },
    // Tambahkan lirik sesuai dengan durasi waktunya
];

let currentLyricIndex6 = 0;
let timeoutId6;

function displayLyrics6() {
    const currentLyric6 = lyrics6[currentLyricIndex6];
    if (currentLyric6) {
        const timeRemaining6 = (currentLyric6.time - audioPlayer6.currentTime) * 1000;
        timeoutId6 = setTimeout(function() {
            lyricsContainer6.textContent = ''; // Menghapus teks lirik setelah jeda waktu tertentu
            currentLyricIndex6++;
            displayLyrics6(); // Lanjutkan ke lirik berikutnya
        }, timeRemaining6); // Hitung jeda waktu sebelum memunculkan teks berikutnya
        lyricsContainer6.textContent = currentLyric6.text; // Tampilkan teks lirik saat ini
    }
}

playButton6.addEventListener('click', function() {
    if (audioPlayer6.paused) {
        audioPlayer6.play();
        playButton6.innerHTML = '<img src="image/iocn/pause.png">'; // Ganti ikon tombol menjadi ikon pause
        spotifyImage6.src = 'image/profil music/spotify.gif';
        updateProgressBar6();
        // Set margin left piringan-hitam6 menjadi 25px ketika audio dimainkan
        piringanHitam6.style.marginLeft = '25px';
        displayLyrics6(); // Memulai menampilkan lirik
        // memunculkan icon lirik
        showLirikButton6.style.display ='block';
        
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
        
        // jika clik maka Fungsi musik 5 pause semua
        judulLirik5.style.display = 'none'; // jusul lirik 5
        lyricsContainer5.style.display = 'none'; // lirik 5
        piringanHitam5.style.marginLeft = '-25px'; // piringan hitaam 5
        audioPlayer5.pause(); // musik 5
        spotifyImage5.src = 'image/profil music/spotify.png'; // logo spotify 5
        playButton5.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 5

        // jika clik maka Fungsi musik 7 pause semua
        judulLirik7.style.display = 'none'; // jusul lirik 7
        lyricsContainer7.style.display = 'none'; // lirik 7
        piringanHitam7.style.marginLeft = '-25px'; // piringan hitaam 7
        audioPlayer7.pause(); // musik 7
        spotifyImage7.src = 'image/profil music/spotify.png'; // logo spotify 7
        playButton7.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 7
    } else {
        audioPlayer6.pause();
        playButton6.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        spotifyImage6.src = 'image/profil music/spotify.png';
        piringanHitam6.style.marginLeft = '-25px';
        clearTimeout(timeoutId6); // Menghentikan timeout saat audio dijeda
    }
});


function updateProgressBar6() {
    const progress = (audioPlayer6.currentTime / audioPlayer6.duration) * 100;
    progressBar6.style.width = progress + '%';
    progressIndicator6.style.left = progress + '%'; // Atur posisi titik besar sesuai dengan progress
    progressDurationLeft6.textContent = formatTime(audioPlayer6.currentTime);
    progressDurationRight6.textContent = formatTime(audioPlayer6.duration - audioPlayer6.currentTime);

         // Mengatur rotasi gambar piringan-hitam berdasarkan progres musik
         const rotation = progress * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
         const piringanHitam6 = document.getElementById('piringan-hitam6');
         piringanHitam6.style.transform = `rotate(${rotation}deg)`;
    
    if (!audioPlayer6.paused) {
        requestAnimationFrame(updateProgressBar6);
    }
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}



audioPlayer6.addEventListener('ended', function() {
    playButton6.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    progressBar6.style.width = '0%'; // Mengatur progress bar kembali ke awal saat musik selesai
    progressIndicator6.style.left = '0%'; // Mengatur posisi titik besar kembali ke awal saat musik selesai
    progressDurationLeft6.textContent = '0:00';
    progressDurationRight6.textContent = '0:00';

    // Simulasikan klik pada tombol dengan ID playButton2 (lanjut ke musik berikutnya)
    const playButton7 = document.getElementById('playButton7');
    piringanHitam6.style.marginLeft = '-25px';
    spotifyImage6.src = 'image/profil music/spotify.png';
    playButton7.click();
});

