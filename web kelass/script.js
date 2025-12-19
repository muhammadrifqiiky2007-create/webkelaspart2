const totalSiswa = 29;

const dataSiswa = [
    { nama: "Ahmad Zaki", jabatan: "Ketua Kelas", bio: "Visi: Menjadikan kelas ini paling solid di sekolah." },
    { nama: "Budi Santoso", jabatan: "Wakil Ketua", bio: "Hobi: Main bola dan coding web kelas." },
    { nama: "Rizky alfatah", jabatan: "komsat", bio: "anak yang sangat rajin"}
    // Tambahkan 27 siswa lainnya...
];

const gridKontainer = document.getElementById('student-grid');
const modal = document.getElementById('profileModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

function buatGaleri() {
    gridKontainer.innerHTML = "";
    dataSiswa.forEach((siswa, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.cursor = "pointer"; // Agar kursor jadi jari saat diarahkan

        const nomorFoto = index + 1;
        const fotoPath = `img/${nomorFoto}.jpg`;

        card.innerHTML = `
            <div class="foto-wrapper">
                <img src="${fotoPath}" alt="${siswa.nama}" onerror="this.src='https://via.placeholder.com/300x400'">
            </div>
            <div class="card-info">
                <h3>${siswa.nama}</h3>
            </div>
        `;

        // EVENT: Saat kartu diklik
        card.onclick = function() {
            tampilkanModal(siswa, fotoPath);
        };

        gridKontainer.appendChild(card);
    });
}

function tampilkanModal(siswa, foto) {
    modalBody.innerHTML = `
        <img src="${foto}" class="modal-img">
        <div class="modal-info">
            <h2>${siswa.nama}</h2>
            <p>${siswa.jabatan}</p>
            <small style="color: #777;">${siswa.bio || "Angkatan 2024"}</small>
        </div>
    `;
    modal.style.display = "block";
}

// Tutup modal saat tombol X diklik
closeBtn.onclick = () => modal.style.display = "none";

// Tutup modal jika area luar modal diklik
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

window.onload = buatGaleri;