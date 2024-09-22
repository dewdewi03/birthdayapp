const form = document.getElementById('myForm');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const nextButton = document.getElementById('nextButton');
const closeModal = document.getElementById('closeModal');
const navigateButton = document.getElementById('navigateButton');

let step = 0;
let userData = {
    name: '',
    hopes: '',
    month: ''
};

const birthdayMessages = {
    januari: [
        `Selamat ulang tahun! Semoga setiap harapanmu menyala seperti bintang di langit.`,
        `Di bulan yang penuh harapan ini, semoga kamu menemukan kebahagiaan sejati.`,
        `Selamat merayakan ulang tahun! Awali tahun baru ini dengan keberanian dan cinta.`,
        `Semoga setiap detik di tahun baru ini dipenuhi dengan kegembiraan yang tak terlupakan.`,
        `Selamat ulang tahun! Jadikan setiap langkahmu berarti dan penuh warna.`,
        `Bulan ini adalah waktu untuk meraih impian dan tujuan baru.`,
        `Semoga Januari membawa banyak kebahagiaan dan kejutan yang menyenangkan.`,
        `Rayakan hidupmu dengan penuh semangat di bulan yang cerah ini.`
    ],
    februari: [
        `Selamat ulang tahun! Semoga cinta mengelilingimu hari ini dan setiap hari.`,
        `Di bulan kasih sayang ini, semoga hatimu selalu dipenuhi kebahagiaan.`,
        `Selamat ulang tahun! Teruslah bersinar dan menyebarkan cinta di sekitar.`,
        `Semoga ulang tahunmu dipenuhi dengan momen-momen manis yang tak terlupakan.`,
        `Selamat merayakan tahun baru dalam hidupmu! Semoga penuh keajaiban.`,
        `Bulan ini adalah waktu yang tepat untuk berbagi cinta dan kebaikan.`,
        `Semoga semua harapanmu di bulan ini terwujud dan menjadikan hidup lebih berarti.`,
        `Jangan lupa untuk merayakan semua hal indah yang telah kamu capai!`
    ],
    maret: [
        `Selamat ulang tahun! Semoga perjalananmu di tahun ini berwarna dan berkesan.`,
        `Di bulan yang ceria ini, semoga harapanmu terbang tinggi dan menjadi kenyataan.`,
        `Selamat ulang tahun! Setiap hari adalah kesempatan baru untuk bersinar.`,
        `Semoga kamu menemukan kekuatan dalam setiap langkah dan keberanian untuk bermimpi.`,
        `Rayakan ulang tahunmu dengan semangat yang penuh, semoga bahagia selalu menyertai.`,
        `Bulan Maret adalah awal baru, semoga membawa banyak kebahagiaan dan cinta.`,
        `Jadikan setiap momen di bulan ini sebagai kenangan berharga yang tak terlupakan.`,
        `Selamat ulang tahun! Semoga setiap harapanmu menjadi kenyataan di bulan ini.`
    ],
    april: [
        `Selamat ulang tahun! Semoga kamu selalu menemukan keindahan dalam hidup.`,
        `Di bulan penuh kehidupan ini, semoga setiap harapanmu terwujud.`,
        `Selamat ulang tahun! Rayakan dengan semangat dan keceriaan yang melimpah.`,
        `Semoga ulang tahun ini menjadi awal dari petualangan baru yang luar biasa.`,
        `Selamat merayakan! Semoga kebahagiaan menghampirimu di setiap langkah.`,
        `Bulan ini adalah waktu yang baik untuk merefleksikan semua pencapaianmu.`,
        `Semoga semua impianmu di bulan ini menjadi kenyataan yang indah.`
    ],
    mei: [
        `Selamat ulang tahun! Semoga kebahagiaanmu mekar seperti bunga di musim semi.`,
        `Di bulan yang indah ini, semoga setiap harapanmu tercapai.`,
        `Selamat merayakan tahun baru! Semoga penuh petualangan dan kejutan.`,
        `Semoga ulang tahunmu dipenuhi dengan cinta, tawa, dan momen yang indah.`,
        `Selamat ulang tahun! Jadikan tahun ini sebagai tahun terbaik dalam hidupmu.`,
        `Bulan Mei adalah waktu untuk memulai sesuatu yang baru dan segar.`,
        `Rayakan hidupmu dan nikmati semua keindahan yang ada di sekitarmu!`
    ],
    juni: [
        `Selamat ulang tahun! Semoga setiap hari di tahun baru ini penuh keceriaan.`,
        `Di bulan cerah ini, semoga semua impianmu menjadi nyata.`,
        `Selamat merayakan! Semoga kamu selalu dikelilingi oleh cinta dan dukungan.`,
        `Semoga ulang tahunmu menjadi pintu menuju kebahagiaan yang tak terbatas.`,
        `Selamat ulang tahun! Hidupmu adalah sebuah petualangan, nikmatilah setiap momen.`,
        `Bulan ini adalah saat yang tepat untuk bersyukur atas semua yang kamu miliki.`,
        `Jadikan ulang tahunmu sebagai waktu untuk memperkuat ikatan dengan orang-orang terkasih.`
    ],
    juli: [
        `Selamat ulang tahun! Semoga kamu menemukan kebahagiaan dalam setiap langkah.`,
        `Di bulan yang penuh kenangan ini, semoga hari istimewa ini berkesan.`,
        `Selamat merayakan! Jadikan ulang tahunmu momen berharga yang tak terlupakan.`,
        `Semoga tahun ini dipenuhi dengan keberanian dan impian yang terwujud.`,
        `Selamat ulang tahun! Teruslah bersinar dan membuat dunia lebih baik.`,
        `Bulan Juli adalah waktu yang tepat untuk melakukan hal-hal baru yang menantang.`,
        `Rayakan semua pencapaianmu dan nikmati setiap momennya!`
    ],
    agustus: [
        `Selamat ulang tahun! Semoga kamu dikelilingi oleh orang-orang yang mencintaimu.`,
        `Di bulan penuh semangat ini, semoga kamu meraih semua yang diimpikan.`,
        `Selamat merayakan! Setiap hari adalah kesempatan baru untuk bersinar.`,
        `Semoga semua harapanmu terwujud dan hidupmu dipenuhi cinta.`,
        `Selamat ulang tahun! Jadikan setiap hari sebagai petualangan baru.`,
        `Bulan Agustus adalah waktu untuk menggali potensi terbaik dalam dirimu.`,
        `Rayakan setiap keberhasilan kecil yang telah kamu capai sepanjang tahun ini.`
    ],
    september: [
        `Selamat ulang tahun! Semoga bulan ini membawa banyak keberuntungan.`,
        `Di bulan yang penuh harapan ini, semoga kamu menemukan kebahagiaan.`,
        `Selamat merayakan! Tahun ini adalah kesempatan untuk memulai yang baru.`,
        `Semoga hidupmu dipenuhi dengan tawa dan kebahagiaan yang melimpah.`,
        `Selamat ulang tahun! Buatlah setiap hari menjadi cerita yang indah.`,
        `Bulan September adalah waktu yang baik untuk merefleksikan semua pencapaianmu.`,
        `Rayakan hidupmu dan nikmati setiap momen yang ada di bulan ini!`
    ],
    oktober: [
        `Selamat ulang tahun! Semoga keajaiban menyertai setiap langkahmu.`,
        `Di bulan yang penuh warna ini, semoga kamu menemukan kebahagiaan sejati.`,
        `Selamat merayakan! Semoga tahun ini menjadi tahun yang penuh kesuksesan.`,
        `Semoga semua mimpimu terwujud dan hidupmu selalu bersinar.`,
        `Selamat ulang tahun! Jadikan setiap momen berarti dan berharga.`,
        `Bulan Oktober adalah waktu untuk memperbaharui semangat dan tekadmu.`,
        `Rayakan semua hal baik yang telah kamu capai dan teruslah berjuang!`
    ],
    november: [
        `Selamat ulang tahun! Semoga kamu selalu menemukan alasan untuk bersyukur.`,
        `Di bulan penuh kasih ini, semoga kamu dikelilingi cinta yang tulus.`,
        `Selamat merayakan! Tahun ini adalah kesempatan untuk meraih lebih banyak.`,
        `Semoga hidupmu dipenuhi keberanian dan inspirasi untuk terus maju.`,
        `Selamat ulang tahun! Rayakan hidupmu dengan penuh sukacita.`,
        `Bulan November adalah saat yang tepat untuk berbagi kebahagiaan dengan orang lain.`,
        `Rayakan semua pencapaianmu dan siapkan diri untuk tahun yang lebih baik!`
    ],
    desember: [
        `Selamat ulang tahun! Semoga setiap harapanmu menyala dengan terang.`,
        `Di bulan yang penuh kebahagiaan ini, semoga kamu menemukan cinta sejati.`,
        `Selamat merayakan! Tahun baru adalah awal baru, nikmati setiap momennya.`,
        `Semoga ulang tahunmu dipenuhi dengan tawa dan kehangatan.`,
        `Selamat ulang tahun! Jadikan setiap tahun sebagai langkah menuju impian.`,
        `Bulan Desember adalah waktu untuk merenungkan semua hal baik yang telah terjadi.`,
        `Rayakan hidupmu dan siapkan diri untuk menyambut tahun baru dengan penuh semangat!`
    ]
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
    step = 0;
    userData.name = document.getElementById('name').value;
    userData.hopes = document.getElementById('hopes').value;
    userData.month = document.getElementById('birth-month').value;
    showNextStep();
});

nextButton.addEventListener('click', function() {
    step++;
    showNextStep();
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

navigateButton.addEventListener('click', function() {
    window.location.href = '/page1.html'; // Ganti dengan URL yang diinginkan
});

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Update showNextStep untuk mengatur visibilitas tombol
function typeWriter(text, element, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 50); // Kecepatan ketik
        } else {
            if (callback) callback();
        }
    }
    typing();
}

function showNextStep() {
    const modalText = document.getElementById('modalText');
    modalText.innerHTML = ''; // Kosongkan konten sebelumnya

    if (step === 0) {
        const message = `Nama kamu adalah ${userData.name} yaaa~. Ini adalah nama yang sangat bagus ${userData.name} ! Ayo kita lanjut ke step berikutnya!`;
        typeWriter(message, modalText);
    } else if (step === 1) {
        const message = `Harapan kamu adalah ${userData.hopes}, Semoga harapan ini cepat terkabul ya ${userData.name}!!`;
        typeWriter(message, modalText);
    } else if (step === 2) {
        const messages = birthdayMessages[userData.month];
        if (messages) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            const message = `Bulan lahir kamu adalah ${userData.month}. Aku punya pesan spesial untuk kamu di bulan ini lho: "${randomMessage}"`;
            typeWriter(message, modalText);
        } else {
            const message = `Bulan yang kamu pilih tidak valid.`;
            typeWriter(message, modalText);
        }
    } else if (step === 3) {
        const message = `
            <p>Berikut adalah ringkasan informasi dari ${userData.name} :</p>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px;">Informasi</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Detail</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Nama</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${userData.name}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Harapan</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${userData.hopes}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Bulan Lahir</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${userData.month}</td>
                </tr>
            </table>`;
        modalText.innerHTML = message; // Tidak ada efek ketik
        nextButton.style.display = 'none'; // Hapus tombol selanjutnya
        navigateButton.style.display = 'block'; // Tampilkan tombol navigasi
    }
}
