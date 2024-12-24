// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlide(index) {
    const slider = document.querySelector('.slides'); // Slider utama
    const slideWidth = document.querySelector('.slide').offsetWidth; // Lebar satu slide

    // Menggeser slider secara horizontal
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    // Update tampilan menu sidebar agar aktif
    const menuItems = document.querySelectorAll('.sidebar ul li a');
    menuItems.forEach((item, i) => {
        if (i === index + 1) { // +1 karena indeks pertama adalah "Kembali"
            item.classList.add('active');
        } else {    
            item.classList.remove('active');
        }
    });
}

// Menjalankan fungsi saat jendela browser di-resize agar responsif
window.addEventListener('resize', () => {
    const activeMenu = document.querySelector('.sidebar ul li a.active');
    if (activeMenu) {
        const index = Array.from(activeMenu.parentElement.parentElement.children).indexOf(activeMenu.parentElement) - 1;
        showSlide(index);
    }
});

// Inisialisasi slide pertama saat halaman dimuat
window.onload = () => {
    showSlide(0);
};
