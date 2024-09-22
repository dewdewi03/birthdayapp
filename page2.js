document.getElementById('foto').addEventListener('change', function() {
    const uploadLabel = document.getElementById('uploadLabel');
    if (this.files && this.files.length > 0) {
        uploadLabel.textContent = 'Foto sudah di upload';
    }
});

function handleSubmit(event) {
    event.preventDefault();

    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const hobi = document.getElementById('hobi').value;
    const tanggal = document.getElementById('tanggal').value;
    const bulan = document.getElementById('bulan').value;
    const tahun = document.getElementById('tahun').value;

    // Set data ke card
    document.getElementById('cardNama').innerText = nama;
    document.getElementById('cardAlamat').innerText = alamat;
    document.getElementById('cardHobi').innerText = hobi;
    document.getElementById('cardTanggalLahir').innerText = tanggal;
    document.getElementById('cardBulanLahir').innerText = bulan;
    document.getElementById('cardTahunLahir').innerText = tahun;

    // Ambil timestamp
    const timestamp = new Date().toLocaleString();
    document.getElementById('timestamp').innerText = timestamp;

    // Proses gambar
    const fileInput = document.getElementById('foto');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            // Atur gambar pada card
            document.getElementById('cardImage').src = event.target.result;

            // Setelah gambar di-load, tampilkan card dan lakukan tangkapan
            showAndDownloadCard();
        };
        reader.readAsDataURL(file);
    } else {
        // Jika tidak ada gambar, langsung tampilkan card
        showAndDownloadCard();
    }
}

function showAndDownloadCard() {
    // Tampilkan card
    document.getElementById('resultCard').style.display = 'block';

    // Tunggu sebentar untuk render card, lalu download
    setTimeout(() => {
        downloadCardAsImage();
    }, 500);
}

function downloadCardAsImage() {
    const cardElement = document.getElementById('resultCard');

    // Gunakan html2canvas untuk menangkap elemen card dan mengubahnya menjadi gambar
    html2canvas(cardElement).then(function(canvas) {
        // Buat link download
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'Kartu_Ucapan_Terima_Kasih.png';

        // Trigger download
        link.click();
    });
}
