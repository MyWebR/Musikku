document.addEventListener("DOMContentLoaded", () => {
  const playlists = {
    all: [
      "Style",
      "Seventeen",
      "Lovers Rock",
      "End Of Beginning",
      "On Melancholy Hill",
      "Why Can't I",
      "Seandainya",
      "Kalam Ineh",
    ],
  };

  const searchInput = document.getElementById("search");
  const searchBtn = document.getElementById("search-btn");
  const suggestionsContainer = document.getElementById("suggestions");
  const alertBox = document.getElementById("alert");
  const musicListContainer = document.getElementById("music-list");
  const segitiga = document.getElementById("segitiga");

  let currentPlaylist = "all";

  function renderPlaylist(playlist) {
    musicListContainer.innerHTML = "";
    playlist.forEach((music) => {
      const musicElement = document.createElement("div");
      musicElement.id = `music-${music}`;
      musicElement.textContent = music;
      musicListContainer.appendChild(musicElement);
    });
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    suggestionsContainer.innerHTML = "";
    alertBox.style.display = "none";
    segitiga.style.display = "none";

    if (query) {
      const filteredMusics = playlists[currentPlaylist].filter((music) =>
        music.toLowerCase().includes(query)
      );
      filteredMusics.forEach((music) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = music;
        suggestionsContainer.appendChild(suggestionItem);
        segitiga.style.display = "block";
        document.getElementById("byRestu").style.display = "block";

        suggestionItem.addEventListener("click", () => {
          searchInput.value = music;
          suggestionsContainer.innerHTML = "";
          scrollToMusic(music);
          segitiga.style.display = "none";
        });
      });
    }
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value;
      scrollToMusic(query);
      suggestionsContainer.innerHTML = "";
      segitiga.style.display = "none";
    }
  });

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value;
    scrollToMusic(query);
    suggestionsContainer.innerHTML = "";
  });

  document.addEventListener("click", (e) => {
    if (!suggestionsContainer.contains(e.target) && e.target !== searchInput) {
      suggestionsContainer.innerHTML = "";
      segitiga.style.display = "none";
    }
  });

  function scrollToMusic(music) {
    const musicElement = document.getElementById(`music-${music}`);
    if (musicElement) {
      musicElement.scrollIntoView({ behavior: "smooth", block: "center" });
      musicElement.classList.add("highlight");
      setTimeout(() => {
        musicElement.classList.remove("highlight");
      }, 2000); // Warna kembali normal setelah 2 detik
    } else {
      alertBox.textContent = `Musik dengan nama "${music}" tidak ditemukan.`;
      alertBox.style.display = "block";
      segitiga.style.display = "none";
    }
  }

  // Set initial playlist to 'all'
  setActivePlaylist("all");
});

// playlist
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("semua").addEventListener("click", showAll);
  document.getElementById("indri").addEventListener("click", showIndri);
  document.getElementById("arya").addEventListener("click", showArya);
  document.getElementById("jkt48").addEventListener("click", showJkt48);
  document.getElementById("masdo").addEventListener("click", showMasdo);
  document
    .getElementById("deni-caknan")
    .addEventListener("click", showDeniCaknan);
});

function showAll() {
  hideAll();
  document.getElementById("byRestu").style.display = "block";
  document.getElementById("byIndri").style.display = "block";
  document.getElementById("byArya").style.display = "block";
  document.getElementById("byRestu-2").style.display = "block";
  document.getElementById("byJkt48").style.display = "block";
  document.getElementById("byMasdo").style.display = "block";
  document.getElementById("byDeni-caknan").style.display = "block";
}

function showIndri() {
  hideAll();
  document.getElementById("byIndri").style.display = "block";
}

function showArya() {
  hideAll();
  document.getElementById("byArya").style.display = "block";
}

function showJkt48() {
  hideAll();
  document.getElementById("byJkt48").style.display = "block";
}

function showMasdo() {
  hideAll();
  document.getElementById("byMasdo").style.display = "block";
}

function showDeniCaknan() {
  hideAll();
  document.getElementById("byDeni-caknan").style.display = "block";
}

function hideAll() {
  var playlists = document.querySelectorAll(".playlist");
  playlists.forEach(function (playlist) {
    playlist.style.display = "none";
  });
}

// musik 11111111111111111111111111111111111111111111111
const playButton1 = document.getElementById("playButton1");
const audioPlayer1 = document.getElementById("audioPlayer1");
const progressBar1 = document.querySelector(".progress-bar1");
const progressIndicator1 = document.querySelector(".progress-indicator1");
const progressDurationLeft1 = document.querySelector(
  ".progress-duration-left1"
);
const progressDurationRight1 = document.querySelector(
  ".progress-duration-right1"
);
const piringanHitam1 = document.getElementById("piringan-hitam1");
const spotifyImage1 = document.getElementById("spotify1");
const showLirikButton1 = document.getElementById("showLirik1");
const lyricsContainer1 = document.getElementById("lyricsContainer1");

// buton show judul lirik
showLirikButton1.addEventListener("click", function () {
  if (judulLirik1.style.display === "none") {
    judulLirik1.style.display = "block"; // Tampilkan elemen judul lirik saat tombol ditekan
  } else {
    judulLirik1.style.display = "none"; // Sembunyikan elemen juudl lirik saat tombol ditekan kembali
  }
});

// buton show lirik
showLirikButton1.addEventListener("click", function () {
  if (lyricsContainer1.style.display === "none") {
    lyricsContainer1.style.display = "block"; // Tampilkan elemen lirik saat tombol ditekan
  } else {
    lyricsContainer1.style.display = "none"; // Sembunyikan elemen lirik saat tombol ditekan kembali
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
    const timeRemaining1 =
      (currentLyric1.time - audioPlayer1.currentTime) * 1000;
    timeoutId1 = setTimeout(function () {
      lyricsContainer1.textContent = ""; // Menghapus teks lirik setelah jeda waktu tertentu
      currentLyricIndex1++;
      displayLyrics1(); // Lanjutkan ke lirik berikutnya
    }, timeRemaining1); // Hitung jeda waktu sebelum memunculkan teks berikutnya
    lyricsContainer1.textContent = currentLyric1.text; // Tampilkan teks lirik saat ini
  }
}

playButton1.addEventListener("click", function () {
  if (audioPlayer1.paused) {
    audioPlayer1.play();
    playButton1.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
    spotifyImage1.src = "image/profil music/spotify.gif";
    updateProgressBar1();
    // Set margin left piringan-hitam1 menjadi 25px ketika audio dimainkan
    piringanHitam1.style.marginLeft = "25px";
    displayLyrics1(); // Memulai menampilkan lirik

    // jika clik maka Fungsi musik 2 pause semua
    judulLirik2.style.display = "none"; // jusul lirik 2
    lyricsContainer2.style.display = "none"; // lirik 2
    piringanHitam2.style.marginLeft = "-25px"; // piringan hitaam 2
    audioPlayer2.pause(); // musik 2
    spotifyImage2.src = "image/profil music/spotify.png"; // logo spotify 2
    playButton2.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play btn 2

    // jika clik maka Fungsi musik 3 pause semua
    judulLirik3.style.display = "none"; // jusul lirik 3
    lyricsContainer3.style.display = "none"; // lirik 3
    piringanHitam3.style.marginLeft = "-25px"; // piringan hitaam 3
    audioPlayer3.pause(); // musik 3
    spotifyImage3.src = "image/profil music/spotify.png"; // logo spotify 3
    playButton3.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 3

    // jika clik maka Fungsi musik 4 pause semua
    judulLirik4.style.display = "none"; // jusul lirik 4
    lyricsContainer4.style.display = "none"; // lirik 4
    piringanHitam4.style.marginLeft = "-25px"; // piringan hitaam 4
    audioPlayer4.pause(); // musik 4
    spotifyImage4.src = "image/profil music/spotify.png"; // logo spotify 4
    playButton4.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 4

    // jika clik maka Fungsi musik 5 pause semua
    judulLirik5.style.display = "none"; // jusul lirik 5
    lyricsContainer5.style.display = "none"; // lirik 5
    piringanHitam5.style.marginLeft = "-25px"; // piringan hitaam 5
    audioPlayer5.pause(); // musik 5
    spotifyImage5.src = "image/profil music/spotify.png"; // logo spotify 5
    playButton5.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 5

    // jika clik maka Fungsi musik 6 pause semua
    judulLirik6.style.display = "none"; // jusul lirik 6
    lyricsContainer6.style.display = "none"; // lirik 6
    piringanHitam6.style.marginLeft = "-25px"; // piringan hitaam 6
    audioPlayer6.pause(); // musik 6
    spotifyImage6.src = "image/profil music/spotify.png"; // logo spotify 6
    playButton6.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 6

    // jika clik maka Fungsi musik 7 pause semua
    judulLirik7.style.display = "none"; // jusul lirik 7
    lyricsContainer7.style.display = "none"; // lirik 7
    piringanHitam7.style.marginLeft = "-25px"; // piringan hitaam 7
    audioPlayer7.pause(); // musik 7
    spotifyImage7.src = "image/profil music/spotify.png"; // logo spotify 7
    playButton7.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play 7

    // jika clik maka Fungsi musik Jkt1 pause semua
    judulLirikJkt1.style.display = "none"; // jusul lirik Jkt1
    lyricsContainerJkt1.style.display = "none"; // lirik Jkt1
    piringanHitamJkt1.style.marginLeft = "-25px"; // piringan hitaam 6
    audioPlayerJkt1.pause(); // musik 6
    spotifyImageJkt1.src = "image/profil music/spotify.png"; // logo spotify Jkt1
    playButtonJkt1.innerHTML = '<img src="image/iocn/play.png" alt="">'; //tombol play Jkt1
  } else {
    audioPlayer1.pause();
    playButton1.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    spotifyImage1.src = "image/profil music/spotify.png";
    piringanHitam1.style.marginLeft = "-25px";
    clearTimeout(timeoutId1); // Menghentikan timeout saat audio dijeda
  }
});

function updateProgressBar1() {
  const progress = (audioPlayer1.currentTime / audioPlayer1.duration) * 100;
  progressBar1.style.width = progress + "%";
  progressIndicator1.style.left = progress + "%"; // Atur posisi titik besar sesuai dengan progress
  progressDurationLeft1.textContent = formatTime(audioPlayer1.currentTime);
  progressDurationRight1.textContent = formatTime(
    audioPlayer1.duration - audioPlayer1.currentTime
  );

  // Mengatur rotasi gambar piringan-hitam berdasarkan progres musik
  const rotation = progress * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
  const piringanHitam1 = document.getElementById("piringan-hitam1");
  piringanHitam1.style.transform = `rotate(${rotation}deg)`;

  if (!audioPlayer1.paused) {
    requestAnimationFrame(updateProgressBar1);
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

audioPlayer1.addEventListener("ended", function () {
  playButton1.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
  progressBar1.style.width = "0%"; // Mengatur progress bar kembali ke awal saat musik selesai
  progressIndicator1.style.left = "0%"; // Mengatur posisi titik besar kembali ke awal saat musik selesai
  progressDurationLeft1.textContent = "0:00";
  progressDurationRight1.textContent = "0:00";

  // Simulasikan klik pada tombol dengan ID playButton2 (lanjut ke musik berikutnya)
  const playButton2 = document.getElementById("playButton2");
  piringanHitam1.style.marginLeft = "-25px";
  spotifyImage1.src = "image/profil music/spotify.png";
  playButton2.click();
});

// supaya halaman tidak bisa di klik kanan pada komputer, maupun di tekan lama pada mobile
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.querySelectorAll(".disabled").forEach((element) => {
  element.style.pointerEvents = "none";
});
