function showSurprise() {
    for (let i = 0; i < 100; i++) { // Menambah jumlah hati menjadi 100
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px'; // Mengatur posisi awal hati secara acak di layar
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000); // Menghapus hati setelah 5 detik
    }
}

// Event listener untuk memutar musik saat halaman diklik
document.body.addEventListener('click', function() {
    document.getElementById('bgMusic').play();
}, { once: true }); // Event listener hanya akan dipanggil sekali

// Event listener untuk menampilkan hati saat tombol ditekan
document.getElementById('show-hearts-button').addEventListener('click', function() {
    showSurprise();
});