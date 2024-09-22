const button = document.getElementById('starButton');
const starContainer = document.getElementById('starContainer');
const textContainer = document.getElementById('textContainer');
const music = document.getElementById('backgroundMusic');

const texts = [
    "HAII KAMU!!", 
    "IYA KAMU!!", "HAPPY BIRTHDAY!!", "SEMOGA", "HARAPAN YANG KAMU BUAT",
    "AKU HARAP", "BISA TERKABUL", "DAN SEMUA KEINGINAN KAMU", "DAPAT TEREALISASIKAN", "DAN TERIMAKASIH", 
    "SUDAH BERTAHAN", "SAMPAI SEKARANG", "DAN UNTUK SETERUSNNYA JUGA :)", "AKU HARAP KAMU",
    "SELALU BAHAGIA", "DAN", "MENJADI SESEORANG", "YANG SELALU MENOLONG", "WISH U ALL THE BEST"
];

// Cek status musik saat halaman dimuat
if (localStorage.getItem('musicPlaying') === 'true') {
    music.play();
}

button.addEventListener('click', () => {
    button.classList.add('hidden');
    starContainer.classList.remove('hidden');
    music.play();
    localStorage.setItem('musicPlaying', 'true'); // Simpan status musik
    createStars();
    setTimeout(animateTexts, 3000); // Menunggu sebelum menampilkan teks
});

function createStars() {
    const stars = [];
    const images = [
        '/img/other/balon.png',
        '/img/other/love1.png',
        '/img/other/awan.png'
    ];

    for (let i = 0; i < 48; i++) {
        const star = document.createElement('img');
        const randomImg = images[Math.floor(Math.random() * images.length)];
        star.src = randomImg;
        star.className = 'star';

        let left, top;
        do {
            left = Math.random() * window.innerWidth;
            top = Math.random() * window.innerHeight;
        } while (stars.some(starPos =>
            Math.abs(starPos.left - left) < 50 && Math.abs(starPos.top - top) < 50
        ));

        star.style.left = `${left}px`;
        star.style.top = `${top}px`;
        starContainer.appendChild(star);
        stars.push({ left, top });

        moveStar(star);
    }
}

function moveStar(star) {
    const moveX = (Math.random() - 0.5) * 200;
    const moveY = (Math.random() - 0.5) * 200;

    star.animate([ 
        { transform: `translate(0, 0)` },
        { transform: `translate(${moveX}px, ${moveY}px)` }
    ], {
        duration: 8000,
        iterations: Infinity
    });
}

function animateTexts() {
    let index = 0;

    const displayNextText = () => {
        if (index < texts.length) {
            const neonText = document.createElement('div');
            neonText.className = 'neon';
            neonText.textContent = texts[index];
            textContainer.appendChild(neonText);

            setTimeout(() => {
                neonText.remove();
                index++;
                displayNextText();
            }, 4000); // Durasi tampil teks diperpanjang
        } else {
            starContainer.classList.add('hidden');
            music.pause(); // Menghentikan musik saat semua teks ditampilkan
            music.currentTime = 0; // Mengatur waktu musik ke awal
            showNotification(); // Panggil fungsi untuk menampilkan notifikasi
        }
    };

    displayNextText();
}

function showNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const messages = [
        'Tunggu dulu...',
        'Ada yang eror ni di sistem nyaa bjirr...',
        'Sabar yak, ini lagi di benerin...',
        'Sabarr...',
        'Bentar lagi beres nii...',
        'Bentarr niii sabarr yak wak...',
        'Bentar lagi mwhehe...',
        'Andddddd...',
        'Beresss upil nya kenaa...',
        'Maaaf yak sistem nya lagi ada masalah di per upilan...',
        'OK harap tunggu...'
    ];
    
    let messageIndex = 0;
    let timeLeft = 10; // Waktu untuk countdown

    const updateMessage = () => {
        if (messageIndex < messages.length) {
            notification.textContent = messages[messageIndex];
            messageIndex++;
        } else {
            clearInterval(messageTimer);
            startCountdown(); // Mulai countdown setelah semua pesan ditampilkan
        }
    };

    const messageTimer = setInterval(updateMessage, 4000); // Mengubah pesan setiap 4 detik

    const startCountdown = () => {
        notification.textContent = 'Bentar wak kasi gueh 10 detik buat buang upil...'; // Ganti pesan sebelum countdown
        const countdown = document.createElement('div');
        countdown.className = 'countdown';
        
        const timer = setInterval(() => {
            countdown.textContent = `${timeLeft}`;
            timeLeft--;
            
            if (timeLeft < 0) {
                clearInterval(timer);
                notification.remove();
                window.location.href = 'page2.html'; // Pindah ke page2 setelah countdown
            }
        }, 1000);

        notification.appendChild(countdown);
    };

    document.body.appendChild(notification);
}
