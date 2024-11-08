const textElement = document.getElementById("animated-text");
const textContent = '"Temukan Kebahagiaan dalam Setiap Lembutnya Roti Kami!"';
let index = 0;
let isDeleting = false;

function typeAnimation() {
    if (!isDeleting && index <= textContent.length) {
        // Mengetik teks
        textElement.textContent = textContent.slice(0, index);
        index++;
    } else if (isDeleting && index >= 0) {
        // Menghapus teks
        textElement.textContent = textContent.slice(0, index);
        index--;
    }

    // Mengatur mode mengetik atau menghapus
    if (index === textContent.length) {
        isDeleting = true; // Mulai menghapus setelah selesai mengetik
    } else if (index === 1) {
        isDeleting = false; // Mulai mengetik lagi setelah selesai menghapus
    }

    // Kecepatan mengetik dan menghapus
    const speed = isDeleting ? 50 : 50; // Lebih lambat saat mengetik, lebih cepat saat menghapus

    // Memanggil fungsi secara berulang
    setTimeout(typeAnimation, speed);
}

// Memulai animasi
typeAnimation();