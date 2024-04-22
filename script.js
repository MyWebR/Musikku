// algoritma seach
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function() {
    const searchText = searchInput.value.toLowerCase(); // Ambil teks dari input dan konversikan ke huruf kecil
    const targetElement = findElementByInitial(searchText);
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Mengalihkan halaman ke elemen target dengan efek smooth scroll
        targetElement.style.color = '#22c55e'; // Ubah warna teks elemen menjadi biru
        setTimeout(function() {
            targetElement.style.color = ''; // Menghapus properti warna untuk kembali ke warna semula setelah 2 detik
        }, 2000);
    } else {
        console.log('Elemen tidak ditemukan');
    }
});

function findElementByInitial(initial) {
    const h2Elements = document.querySelectorAll('h2[id]');
    for (const element of h2Elements) {
        const idText = element.id.toLowerCase();
        if (idText.startsWith(initial)) {
            return element;
        }
    }
    return null;
}

// musik 11111111111111111111111111111111111111111111111
const playButton1 = document.getElementById('playButton1');
const audioPlayer1 = document.getElementById('audioPlayer1');
const progressBar1 = document.querySelector('.progress-bar1');
const progressIndicator1 = document.querySelector('.progress-indicator1');
const progressDurationLeft1 = document.querySelector('.progress-duration-left1');
const progressDurationRight1 = document.querySelector('.progress-duration-right1');
const piringanHitam1 = document.getElementById('piringan-hitam1');
const spotifyImage1 = document.getElementById('spotify1');
const showLirikButton1 = document.getElementById('showLirik1');
const lyricsContainer1 = document.getElementById('lyricsContainer1');

// buton show judul lirik
showLirikButton1.addEventListener('click', function() {
    if (judulLirik1.style.display === 'none') {
        judulLirik1.style.display = 'block'; // Tampilkan elemen judul lirik saat tombol ditekan
    } else {
        judulLirik1.style.display = 'none'; // Sembunyikan elemen juudl lirik saat tombol ditekan kembali
    }
});

// buton show lirik
showLirikButton1.addEventListener('click', function() {
    if (lyricsContainer1.style.display === 'none') {
        lyricsContainer1.style.display = 'block'; // Tampilkan elemen lirik saat tombol ditekan
    } else {
        lyricsContainer1.style.display = 'none'; // Sembunyikan elemen lirik saat tombol ditekan kembali
    }
});

// lirik
const lyrics1 = [
    { time: 243, text: "Lirik tidak tersedia" },
    // Tambahkan lirik sesuai dengan durasi waktunya
];

let currentLyricIndex1 = 0;
let timeoutId1;

function displayLyrics1() {
    const currentLyric1 = lyrics1[currentLyricIndex1];
    if (currentLyric1) {
        const timeRemaining1 = (currentLyric1.time - audioPlayer1.currentTime) * 1000;
        timeoutId1 = setTimeout(function() {
            lyricsContainer1.textContent = ''; // Menghapus teks lirik setelah jeda waktu tertentu
            currentLyricIndex1++;
            displayLyrics1(); // Lanjutkan ke lirik berikutnya
        }, timeRemaining1); // Hitung jeda waktu sebelum memunculkan teks berikutnya
        lyricsContainer1.textContent = currentLyric1.text; // Tampilkan teks lirik saat ini
    }
}

playButton1.addEventListener('click', function() {
    if (audioPlayer1.paused) {
        audioPlayer1.play();
        playButton1.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        spotifyImage1.src = 'image/profil music/spotify.gif';
        updateProgressBar1();
        // Set margin left piringan-hitam1 menjadi 25px ketika audio dimainkan
        piringanHitam1.style.marginLeft = '25px';
        displayLyrics1(); // Memulai menampilkan lirik

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
    } else {
        audioPlayer1.pause();
        playButton1.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        spotifyImage1.src = 'image/profil music/spotify.png';
        piringanHitam1.style.marginLeft = '-25px';
        clearTimeout(timeoutId1); // Menghentikan timeout saat audio dijeda
    }
});


function updateProgressBar1() {
    const progress = (audioPlayer1.currentTime / audioPlayer1.duration) * 100;
    progressBar1.style.width = progress + '%';
    progressIndicator1.style.left = progress + '%'; // Atur posisi titik besar sesuai dengan progress
    progressDurationLeft1.textContent = formatTime(audioPlayer1.currentTime);
    progressDurationRight1.textContent = formatTime(audioPlayer1.duration - audioPlayer1.currentTime);

         // Mengatur rotasi gambar piringan-hitam berdasarkan progres musik
         const rotation = progress * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
         const piringanHitam1 = document.getElementById('piringan-hitam1');
         piringanHitam1.style.transform = `rotate(${rotation}deg)`;
    
    if (!audioPlayer1.paused) {
        requestAnimationFrame(updateProgressBar1);
    }
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}



audioPlayer1.addEventListener('ended', function() {
    playButton1.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    progressBar1.style.width = '0%'; // Mengatur progress bar kembali ke awal saat musik selesai
    progressIndicator1.style.left = '0%'; // Mengatur posisi titik besar kembali ke awal saat musik selesai
    progressDurationLeft1.textContent = '0:00';
    progressDurationRight1.textContent = '0:00';

    // Simulasikan klik pada tombol dengan ID playButton2 (lanjut ke musik berikutnya)
    const playButton2 = document.getElementById('playButton2');
    piringanHitam1.style.marginLeft = '-25px';
    spotifyImage1.src = 'image/profil music/spotify.png';
    playButton2.click();
});


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
        // memunculkan icon lirik
        showLirikButton4.style.display ='block';

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
    const playButton2 = document.getElementById('playButton2');
    piringanHitam4.style.marginLeft = '-25px';
    spotifyImage4.src = 'image/profil music/spotify.png';
    playButton2.click();
});