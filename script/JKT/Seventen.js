// musik jkt1
const playButtonJkt1 = document.getElementById('playButtonJkt1');
const audioPlayerJkt1 = document.getElementById('audioPlayerJkt1');
const progressBarJkt1 = document.querySelector('.progress-barJkt1');
const progressIndicatorJkt1 = document.querySelector('.progress-indicatorJkt1');
const progressDurationLeftJkt1 = document.querySelector('.progress-duration-leftJkt1');
const progressDurationRightJkt1 = document.querySelector('.progress-duration-rightJkt1');
const piringanHitamJkt1 = document.getElementById('piringan-hitamJkt1');
const spotifyImageJkt1 = document.getElementById('spotifyJkt1');
const showLirikButtonJkt1 = document.getElementById('showLirikJkt1');
const lyricsContainerJkt1 = document.getElementById('lyricsContainerJkt1');

// buton show judul lirik
showLirikButtonJkt1.addEventListener('click', function() {
    if (judulLirikJkt1.style.display === 'none') {
        judulLirikJkt1.style.display = 'block'; // Tampilkan elemen judul lirik saat tombol ditekan
    } else {
        judulLirikJkt1.style.display = 'none'; // Sembunyikan elemen juudl lirik saat tombol ditekan kembali
    }
});

// buton show lirik
showLirikButtonJkt1.addEventListener('click', function() {
    if (lyricsContainerJkt1.style.display === 'none') {
        lyricsContainerJkt1.style.display = 'block'; // Tampilkan elemen lirik saat tombol ditekan
    } else {
        lyricsContainerJkt1.style.display = 'none'; // Sembunyikan elemen lirik saat tombol ditekan kembali
    }
});

// lirik jkt1
const lyricsJkt1 = [
    { time: 30, text: "~Music~" },
    { time: 34, text: "Di tempat ku lahir dan dibesarkan" },
    { time: 38, text: "Di kota yang dekat laut ini" },
    { time: 42, text: "Set'lah sekian lama, aku pulang" },
    { time: 46, text: "Sudah ada shopping mall berdiri" },
    { time: 50, text: "Waktu itu selalu seperti tongkat sihir" },
    { time: 54, text: "Walaupun telah mengubah pemandangan" },
    { time: 58, text: "Suara ombak dan aroma gelombang" },
    { time: 58, text: "Masih sama seperti dulu" },
    { time: 62, text: "Masih sama seperti dulu" },
    { time: 64, text: "Seventeen" },
    { time: 68, text: "S'karang juga kamu yang teristimewa" },
    { time: 73, text: "Ada di pojok kanan buku tahunan kita" },
    { time: 77, text: "Sungguh, memang kamu yang terisitimewa" },
    { time: 84, text: "B'rapa kali kubuka untuk memastikannya" },
    { time: 93, text: "~Music~" },
    { time: 97, text: "Rumahmu yang dulu toko minuman" },
    { time: 102, text: "Sekarang menjadi minimarket" },
    { time: 106, text: "Saat kuintip ke balik jendela" },
    { time: 110, text: "Kamu berdiri di kasir counter" },
    { time: 114, text: "Cita-citamu menjadi seorang hair stylist" },
    { time: 118, text: "Waktu itu, kamu pernah bercerita" },
    { time: 122, text: "Walau tak seperti yang kamu bayangkan" },
    { time: 126, text: "Kamu terlihat bahagia" },
    { time: 128, text: "Aku jadi lega" },
    { time: 132, text: "Kudengar kalu kamu sudah menikah" },
    { time: 136, text: "Aku terlambat bilang suka kepadamu" },
    { time: 140, text: "Kudengar kamu pun s'karang punya anak" },
    { time: 148, text: "Tak sanggup memanggilmu, farwell masa mudaku" },
    { time: 169, text: "~Music~" },
    { time: 173, text: "S'karang juga kamu yang teristimewa" },
    { time: 177, text: "Ada di pojok kanan buku tahunan kita" },
    { time: 181, text: "Sungguh, memang kamu yang teristimewa" },
    { time: 186, text: "B'rapa kali kubuka untuk memastikannya" },
    { time: 190, text: "S'karang juga kamu yang teristimewa" },
    { time: 194, text: "Berkilau dengan terang di dalam kenangan" },
    { time: 198, text: "Sungguh, memang kamu yang teristimea" },
    { time: 225, text: "S'perti ini selamanya, cintaku yang pertama" },

    // Masukkan lirik yang sesuai dengan durasi waktunya di sini
];

let currentLyricIndexJkt1 = 0;
let timeoutIdJkt1;

function displayLyricsJkt1() {
    const currentLyricJkt1 = lyricsJkt1[currentLyricIndexJkt1];
    if (currentLyricJkt1) {
        const timeRemainingJkt1 = (currentLyricJkt1.time - audioPlayerJkt1.currentTime) * 1000;
        timeoutIdJkt1 = setTimeout(function() {
            lyricsContainerJkt1.textContent = ''; // Menghapus teks lirik setelah jeda waktu tertentu
            currentLyricIndexJkt1++;
            displayLyricsJkt1(); // Lanjutkan ke lirik berikutnya
        }, timeRemainingJkt1); // Hitung jeda waktu sebelum memunculkan teks berikutnya
        lyricsContainerJkt1.textContent = currentLyricJkt1.text; // Tampilkan teks lirik saat ini
    }
}

playButtonJkt1.addEventListener('click', function() {
    if (audioPlayerJkt1.paused) {
        audioPlayerJkt1.play();
        playButtonJkt1.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        spotifyImageJkt1.src = 'image/profil music/spotify.gif';
        updateProgressBarJkt1();
        // Set margin left piringan-hitamJkt1 menjadi 25px ketika audio dimainkan
        piringanHitamJkt1.style.marginLeft = '25px';
        displayLyricsJkt1(); // Memulai menampilkan lirik

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
        audioPlayerJkt1.pause();
        playButtonJkt1.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        spotifyImageJkt1.src = 'image/profil music/spotify.png';
        piringanHitamJkt1.style.marginLeft = '-25px';
        clearTimeout(timeoutIdJkt1); // Hentikan penampilan teks lirik saat tombol pause ditekan
    }
});

function updateProgressBarJkt1() {
    const progressJkt1 = (audioPlayerJkt1.currentTime / audioPlayerJkt1.duration) * 100;
    progressBarJkt1.style.width = progressJkt1 + '%';
    progressIndicatorJkt1.style.left = progressJkt1 + '%'; // Atur posisi titik besar sesuai dengan progress
    progressDurationLeftJkt1.textContent = formatTime(audioPlayerJkt1.currentTime);
    progressDurationRightJkt1.textContent = formatTime(audioPlayerJkt1.duration - audioPlayerJkt1.currentTime);

    // Mengatur rotasi gambar piringan-hitamJkt1 berdasarkan progres musik
    const rotationJkt1 = progressJkt1 * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
    piringanHitamJkt1.style.transform = `rotate(${rotationJkt1}deg)`;

    if (!audioPlayerJkt1.paused) {
        requestAnimationFrame(updateProgressBarJkt1);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

audioPlayerJkt1.addEventListener('ended', function() {
    playButtonJkt1.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    progressBarJkt1.style.width = '0%'; // Mengatur progress bar kembali ke awal saat musik selesai
    progressIndicatorJkt1.style.left = '0%'; // Mengatur posisi titik besar kembali ke awal saat musik selesai
    progressDurationLeftJkt1.textContent = '0:00';
    progressDurationRightJkt1.textContent = '0:00';

    // Simulasikan klik pada tombol dengan ID playButton1 (lanjut ke musik berikutnya)
    const playButton1 = document.getElementById('playButton1');
    piringanHitamJkt1.style.marginLeft = '-25px';
    spotifyImageJkt1.src = 'image/profil music/spotify.png';
    playButton1.click();
});