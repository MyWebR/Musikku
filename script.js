// musik 1---------------------------------------------
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.querySelector('.progress-bar');
const progressIndicator = document.querySelector('.progress-indicator');
const progressDurationLeft = document.querySelector('.progress-duration-left');
const progressDurationRight = document.querySelector('.progress-duration-right');

playButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        updateProgressBar();
    } else {
        audioPlayer.pause();
        playButton.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    }
});

function updateProgressBar() {
     const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
     progressBar.style.width = progress + '%';
     progressIndicator.style.left = progress + '%'; // Atur posisi titik besar sesuai dengan progress
     progressDurationLeft.textContent = formatTime(audioPlayer.currentTime);
     progressDurationRight.textContent = formatTime(audioPlayer.duration - audioPlayer.currentTime);
     
     // Mengatur rotasi gambar piringan-hitam berdasarkan progres musik
     const rotation = progress * 200.2; // Mengurangi faktor skala untuk mempercepat putaran
     const piringanHitam = document.getElementById('piringan-hitam');
     piringanHitam.style.transform = `rotate(${rotation}deg)`;
     
     // Menambahkan margin kiri 25px saat gambar berputar
     piringanHitam.style.marginLeft = '-25px';

     
     if (!audioPlayer.paused) {
         requestAnimationFrame(updateProgressBar);
          piringanHitam.style.marginLeft = '25px';

     }
 }
 

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

audioPlayer.addEventListener('ended', function() {
    playButton.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
    progressBar.style.width = '0%'; // Mengatur progress bar kembali ke awal saat musik selesai
    progressIndicator.style.left = '0%'; // Mengatur posisi titik besar kembali ke awal saat musik selesai
    progressDurationLeft.textContent = '0:00';
    progressDurationRight.textContent = '0:00';
});

// musik 2---------------------------------------------
const playButton2 = document.getElementById('playButton2');
const audioPlayer2 = document.getElementById('audioPlayer2');
const progressBar2 = document.querySelector('.progress-bar2');
const progressIndicator2 = document.querySelector('.progress-indicator2');
const progressDurationLeft2 = document.querySelector('.progress-duration-left2');
const progressDurationRight2 = document.querySelector('.progress-duration-right2');
const piringanHitam2 = document.getElementById('piringan-hitam2');

playButton2.addEventListener('click', function() {
    if (audioPlayer2.paused) {
        audioPlayer2.play();
        playButton2.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        updateProgressBar2();
        // Set margin left piringan-hitam2 menjadi 25px ketika audio dimainkan
        piringanHitam2.style.marginLeft = '25px';
    } else {
        audioPlayer2.pause();
        playButton2.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        // Set margin left piringan-hitam2 menjadi -25px ketika audio di-pause
        piringanHitam2.style.marginLeft = '-25px';
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
});


// musik 3---------------------------------------------
const playButton3 = document.getElementById('playButton3');
const audioPlayer3 = document.getElementById('audioPlayer3');
const progressBar3 = document.querySelector('.progress-bar3');
const progressIndicator3 = document.querySelector('.progress-indicator3');
const progressDurationLeft3 = document.querySelector('.progress-duration-left3');
const progressDurationRight3 = document.querySelector('.progress-duration-right3');
const piringanHitam3 = document.getElementById('piringan-hitam3');

playButton3.addEventListener('click', function() {
    if (audioPlayer3.paused) {
        audioPlayer3.play();
        playButton3.innerHTML = '<img src="image/iocn/pause.png" alt="">'; // Ganti ikon tombol menjadi ikon pause
        updateProgressBar3();
        // Set margin left piringan-hitam2 menjadi 25px ketika audio dimainkan
        piringanHitam3.style.marginLeft = '25px';
    } else {
        audioPlayer3.pause();
        playButton3.innerHTML = '<img src="image/iocn/play.png" alt="">'; // Ganti ikon tombol menjadi ikon play
        // Set margin left piringan-hitam2 menjadi -25px ketika audio di-pause
        piringanHitam3.style.marginLeft = '-25px';
    }
});

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
});
