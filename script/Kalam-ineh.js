
// musik 77777777777777777777777777777777777777777777777777777777777777777777777777777777
const playButton7 = document.getElementById('playButton7');
const audioPlayer7 = document.getElementById('audioPlayer7');
const progressBar7 = document.querySelector('.progress-bar7');
const progressIndicator7 = document.querySelector('.progress-indicator7');
const progressDurationLeft7 = document.querySelector('.progress-duration-left7');
const progressDurationRight7 = document.querySelector('.progress-duration-right7');
const piringanHitam7 = document.getElementById('piringan-hitam7');
const spotifyImage7 = document.getElementById('spotify7');
const showLirikButton7 = document.getElementById('showLirik7');
const lyricsContainer7 = document.getElementById('lyricsContainer7');

// buton show judul lirik
showLirikButton7.addEventListener('click', function() {
    if (judulLirik7.style.display === 'none') {
        judulLirik7.style.display = 'block'; // Tampilkan elemen judul lirik saat tombol ditekan
    } else {
        judulLirik7.style.display = 'none'; // Sembunyikan elemen juudl lirik saat tombol ditekan kembali
    }
});

// buton show lirik
showLirikButton7.addEventListener('click', function() {
    if (lyricsContainer7.style.display === 'none') {
        lyricsContainer7.style.display = 'block'; // Tampilkan elemen lirik saat tombol ditekan
    } else {
        lyricsContainer7.style.display = 'none'; // Sembunyikan elemen lirik saat tombol ditekan kembali
    }
});

// lirik
const lyrics7 = [
    { time: 14, text: "~Musik~" },
    { time: 18, text: " كلام عينية في الغرام احلي من الاغاني  - Kalam 'ienih fil gharam ahlaa mil aghey" },
    { time: 22, text: "من كلمتين من سلام ببقي حدتاني  - Min kilmitiin min salaam bab-a hdi taanee" },
    { time: 25, text: " لما يميل قلبي انا وياه يميل  - Lammaa yameel albanaa waya yameel" },
    { time: 29, text: " تفديه عيوني و عمري كله مش قليل  - Tifde 'uyuune wa 'omuree kulluh mush aleel" },
    { time: 33, text: "كلام عينية في الغرام احلي من الاغاني - Kalam 'ienih fil gharam ahlaa mil aghey" },
    { time: 36, text: "من كلمتين من سلام ببقي حدتاني - Min kilmitiin min salaam bab-a hdi taanee" },
    { time: 40, text: "لما يميل قلبي انا وياه يميل - Lammaa yameel albanaa waya yameel" },
    { time: 44, text: "تفديه عيوني و عمري كله مش قليل - Tifde 'uyuune wa 'omuree kulluh mush aleel" },
    { time: 47, text: "ليلي, يا ليل ياليلي - Leele yaa leil yaa leelee"},
    { time: 51, text: "يا ليل ياليلي من غرامه ليلي طال - Yaa leil yaa leelee min gharaamih leelee thaal" },
    { time: 54, text: "حبيب سنيني بينه و بيني - Habeeb siniin Beynuh we beinee"},
    { time: 58, text: "يا قبلي خطوة واحدة يعني مش خيال - Ya abli khutwah wahdah ya'ne mush khayaal"},
    { time: 61, text: "ليلي, يا ليل ياليلي - Leele yaa leil yaa leelee"},
    { time: 65, text: "يا ليل ياليلي من غرامه ليلي طال - Yaa leil yaa leelee min gharaamih leelee thaal"},
    { time: 69, text: "حبيب سنيني بينه و بيني - Habeeb siniin Beynuh we beinee"},
    { time: 75, text: "يا قبلي خطوة واحدة يعني مش خيال - Ya abli khutwah wahdah ya'ne mush khyaal"},
    { time: 87, text: "~Musik~" },
    { time: 91, text: "يا روحي روحي معاه وفي جماله ضيعي - Yaa rouhii ya rouhii ,aa'ahu wafii gamaaluh dhi'ii" },
    { time: 94, text: "طمع في سحر الحياة، حسنه مش طبيعي - Thama’ fii sahril-hayaah, hosnah mesh thabii’ii" },
    { time: 98, text: "ده اللي القمر من عينيه والله غار - Da elleel-amar min ‘ainiih wallah ghaar" },
    { time: 98, text: "دي الإبتسامة شمس طالعة بالنهار - Dil-ibtisaamah syams thaala’ah bin-nahaar" },
    { time: 102, text: "دي الإبتسامة شمس طالعة بالنهار - Dil-ibtisaamah syams thaala’ah bin-nahaar" },
    { time: 105, text: "يا روحي روحي معاه وفي جماله ضيعي - Yaa rouhii rouhii maa’ahu wafii gamaaluh dhi’ii" },
    { time: 109, text: "طمع في سحر الحياة، حسنه مش طبيعي - Thama’ fii sahril-hayaah, hosnah mesh thabii’ii" },
    { time: 113, text: "ده اللي القمر من عينيه والله غار - Da elleel-amar min ‘ainiih wallah ghaar" },
    { time: 117, text: "دي الإبتسامة شمس طالعة بالنهار - Dil-ibtisaamah syams thaala’ah bin-nahaar" },
    { time: 120, text: "ليلي, يا ليل ياليلي - Leele yaa leil yaa leelee"},
    { time: 123, text: "يا ليل ياليلي من غرامه ليلي طال - Yaa leil yaa leelee min gharaamih leelee thaal"},
    { time: 127, text: "حبيب سنيني بينه و بيني - Habeeb siniin Beynuh we beinee"},
    { time: 131, text: "يا قبلي خطوة واحدة يعني مش خيال - Ya abli khutwah wahdah ya'ne mush khyaal"},
    { time: 134, text: "ليلي, يا ليل ياليلي - Leele yaa leil yaa leelee"},
    { time: 138, text: "يا ليل ياليلي من غرامه ليلي طال - Yaa leil yaa leelee min gharaamih leelee thaal"},
    { time: 142, text: "حبيب سنيني بينه و بيني - Habeeb siniin Beynuh we beinee"},
    { time: 146, text: "يا قبلي خطوة واحدة يعني مش خيال - Ya abli khutwah wahdah ya'ne mush khyaal"},
    { time: 182, text: "~Musik~" },
    { time: 189, text: "ليلي, يا ليل ياليلي - Leele yaa leil yaa leelee"},
    { time: 193, text: "حبيب سنيني بينه و بيني - Habeeb siniin Beynuh we beinee"},
    { time: 197, text: "~Musik~" },
    { time: 200, text: "ليلي, يا ليل ياليلي - Leele yaa leil yaa leelee"},
    { time: 203, text: "يا ليل ياليلي من غرامه ليلي طال - Yaa leil yaa leelee min gharaamih leelee thaal"},
    { time: 207, text: "حبيب سنيني بينه و بيني - Habeeb siniin Beynuh we beinee"},
    { time: 211, text: "يا قبلي خطوة واحدة يعني مش خيال - Ya abli khutwah wahdah ya'ne mush khyaal"},
    { time: 213, text: "ليلي, يا ليل ياليلي - Leele yaa leil yaa leelee"},
    { time: 218, text: "يا ليل ياليلي من غرامه ليلي طال - Yaa leil yaa leelee min gharaamih leelee thaal"},
    { time: 221, text: "حبيب سنيني بينه و بيني - Habeeb siniin Beynuh we beinee"},
    { time: 235, text: "يا قبلي خطوة واحدة يعني مش خيال - Ya abli khutwah wahdah ya'ne mush khyaal"},
    // Tambahkan lirik sesuai dengan durasi waktunya
];

let currentLyricIndex7 = 0;
let timeoutId7;

function displayLyrics7() {
    const currentLyric7 = lyrics7[currentLyricIndex7];
    if (currentLyric7) {
        const timeRemaining7 = (currentLyric7.time - audioPlayer7.currentTime) * 1000;
        timeoutId7 = setTimeout(function() {
            lyricsContainer7.textContent = ''; // Menghapus teks lirik setelah jeda waktu tertentu
            currentLyricIndex7++;
            displayLyrics7(); // Lanjutkan ke lirik berikutnya
        }, timeRemaining7); // Hitung jeda waktu sebelum memunculkan teks berikutnya
        lyricsContainer7.textContent = currentLyric7.text; // Tampilkan teks lirik saat ini
    }
}

playButton7.addEventListener('click', function() {
    if (audioPlayer7.paused) {
        audioPlayer7.play();
        playButton7.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        spotifyImage7.src = 'image/profil music/spotify.gif';
        updateProgressBar7();
        // Set margin left piringan-hitam7 menjadi 25px ketika audio dimainkan
        piringanHitam7.style.marginLeft = '25px';
        displayLyrics7(); // Memulai menampilkan lirik

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

    } else {
        audioPlayer7.pause();
        playButton7.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        spotifyImage7.src = 'image/profil music/spotify.png';
        piringanHitam7.style.marginLeft = '-25px';
        clearTimeout(timeoutId7); // Hentikan penampilan teks lirik saat tombol pause ditekan
    }
});

function updateProgressBar7() {
    const progress = (audioPlayer7.currentTime / audioPlayer7.duration) * 100;
    progressBar7.style.width = progress + '%';
    progressIndicator7.style.left = progress + '%'; // Atur posisi titik besar sesuai dengan progress
    progressDurationLeft7.textContent = formatTime(audioPlayer7.currentTime);
    progressDurationRight7.textContent = formatTime(audioPlayer7.duration - audioPlayer7.currentTime);

    // Mengatur rotasi gambar piringan-hitam7 berdasarkan progres musik
    const rotation = progress * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
    piringanHitam7.style.transform = `rotate(${rotation}deg)`;

    if (!audioPlayer7.paused) {
        requestAnimationFrame(updateProgressBar7);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

audioPlayer7.addEventListener('ended', function() {
    playButton7.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    progressBar7.style.width = '0%'; // Mengatur progress bar kembali ke awal saat musik selesai
    progressIndicator7.style.left = '0%'; // Mengatur posisi titik besar kembali ke awal saat musik selesai
    progressDurationLeft7.textContent = '0:00';
    progressDurationRight7.textContent = '0:00';

    // Simulasikan klik pada tombol dengan ID playButton5 (lanjut ke musik berikutnya)
    const playButton1 = document.getElementById('playButton1');
    piringanHitam7.style.marginLeft = '-25px';
    spotifyImage7.src = 'image/profil music/spotify.png';
    playButton1.click();
});
