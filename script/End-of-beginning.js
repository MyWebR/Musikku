// musik 333333333333333333333333333333333333333333333333333
const playButton3 = document.getElementById('playButton3');
const audioPlayer3 = document.getElementById('audioPlayer3');
const progressBar3 = document.querySelector('.progress-bar3');
const progressIndicator3 = document.querySelector('.progress-indicator3');
const progressDurationLeft3 = document.querySelector('.progress-duration-left3');
const progressDurationRight3 = document.querySelector('.progress-duration-right3');
const piringanHitam3 = document.getElementById('piringan-hitam3');
const lyricsContainer3 = document.getElementById('lyricsContainer3');
const showLirikButton = document.getElementById('showLirik3');
const spotifyImage3 = document.getElementById('spotify3');

// buton show judul lirik
showLirikButton.addEventListener('click', function() {
    if (judulLirik3.style.display === 'none') {
        judulLirik3.style.display = 'block'; // Tampilkan elemen judul lirik saat tombol ditekan
    } else {
        judulLirik3.style.display = 'none'; // Sembunyikan elemen judul lirik saat tombol ditekan kembali
    }
});

// buton show lirik
showLirikButton.addEventListener('click', function() {
    if (lyricsContainer3.style.display === 'none') {
        lyricsContainer3.style.display = 'block'; // Tampilkan elemen lirik saat tombol ditekan
    } else {
        lyricsContainer3.style.display = 'none'; // Sembunyikan elemen lirik saat tombol ditekan kembali
    }
});

// lirik
const lyrics3 = [
    { time: 4, text: "~Music~" },
    { time: 11, text: "Just one more tear to cry, one teaedrop my eye" },
    { time: 16, text: "You better save it for" },
    { time: 23, text: "The middle of the night when things aren't black and white" },
    { time: 28, text: "Enter, Troubadour" },
    { time: 31, text: "'Remember 24?'" },
    { time: 37, text: "~Music~" },
    { time: 43, text: "And when I'm back in Chicago, Ifeel it" },
    { time: 50, text: "Another version of me, Iwas in it" },
    { time: 56, text: "Iwave goodbye to the end of beginning" },
    { time: 61, text: "~Music~" },
    { time: 69, text: "This song has started now, and you're just fidding out" },
    { time: 73, text: "Now isn't that a laugh?" },
    { time: 82, text: "Amajor sacrifice, but clueless at the time" },
    { time: 85, text: "Enter, Caroline" },
    { time: 90, text: "'Just trust me, you'll be fine'" },
    { time: 102, text: "And when I'm back in Chicago, I feel it, Another version of me, I was in it" },
    { time: 106, text: "I wave goodbye to the end off beginning" },
    { time: 112, text: "(Goodbye, goodbye, goodbye, goodbye)" },
    { time: 118, text: "You take the man out of the city, not the cyty out the man" },
    { time: 130, text: "You take the man out of the city, not the cyty out the man" },
    { time: 135, text: "You take the man out of the-" },
    { time: 140, text: "And when I'm back in Chicago, I feel it" },
    { time: 146, text: "Another version of me, Iwas in it" },
    { time: 151, text: "Oh, Iwave goodbye ti the end beginning" },
    { time: 159, text: "(Goodbye, goodbye)" },
    // Tambahkan lirik sesuai dengan durasi waktunya
];

let currentLyricIndex3 = 0;
let timeoutId3;

playButton3.addEventListener('click', function() {
    if (audioPlayer3.paused) {
        audioPlayer3.play();
        playButton3.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        spotifyImage3.src = 'image/profil music/spotify.gif';
        piringanHitam3.style.marginLeft = '25px';
        updateProgressBar3();
        displayLyrics3();

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
        audioPlayer3.pause();
        playButton3.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        spotifyImage3.src = 'image/profil music/spotify.png';
        piringanHitam3.style.marginLeft = '-25px';
        clearTimeout(timeoutId3); // Menghentikan timeout saat audio dijeda
    }
});

function displayLyrics3() {
    const currentLyric3 = lyrics3[currentLyricIndex3];
    if (currentLyric3) {
        const timeRemaining3 = (currentLyric3.time - audioPlayer3.currentTime) * 1000;
        timeoutId3 = setTimeout(function() {
            lyricsContainer3.textContent = ''; // Menghapus teks lirik setelah jeda waktu tertentu
            currentLyricIndex3++;
            displayLyrics3(); // Lanjutkan ke lirik berikutnya
        }, timeRemaining3); // Hitung jeda waktu sebelum memunculkan teks berikutnya
        lyricsContainer3.textContent = currentLyric3.text; // Tampilkan teks lirik saat ini
    }
}

function updateProgressBar3() {
    const progress = (audioPlayer3.currentTime / audioPlayer3.duration) * 100;
    progressBar3.style.width = progress + '%';
    progressIndicator3.style.left = progress + '%'; // Atur posisi titik besar sesuai dengan progress
    progressDurationLeft3.textContent = formatTime(audioPlayer3.currentTime);
    progressDurationRight3.textContent = formatTime(audioPlayer3.duration - audioPlayer3.currentTime);

     // Mengatur rotasi gambar piringan-hitam berdasarkan progres musik
     const rotation = progress * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
     const piringanHitam3 = document.getElementById('piringan-hitam3');
     piringanHitam3.style.transform = `rotate(${rotation}deg)`;
    
    if (!audioPlayer3.paused) {
        requestAnimationFrame(updateProgressBar3);
    }
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

    audioPlayer3.addEventListener('ended', function() {
    playButton3.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    progressBar3.style.width = '0%'; // Mengatur progress bar kembali ke awal saat musik selesai
    progressIndicator3.style.left = '0%'; // Mengatur posisi titik besar kembali ke awal saat musik selesai
    progressDurationLeft3.textContent = '0:00';
    progressDurationRight3.textContent = '0:00';

    // Simulasikan klik pada tombol dengan ID playButton2 (lanjut ke musik berikutnya)
    const playButton4 = document.getElementById('playButton4');
    piringanHitam3.style.marginLeft = '-25px';
    spotifyImage3.src = 'image/profil music/spotify.png';
    playButton4.click();

});

