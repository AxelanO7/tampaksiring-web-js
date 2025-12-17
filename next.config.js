/** @type {import('next').NextConfig} */
const nextConfig = {
    // [PENTING] Untuk membersihkan Warning #1 (Multiple Lockfiles):
    // Kita secara eksplisit memberitahu Turbopack (Next.js) di mana root project berada.
    // Ganti '..' jika project root Anda berada di direktori yang berbeda.
    // Karena tampaknya proyek Anda berada di sub-folder, '..' mungkin tepat.
    // Jika masih ada warning, coba ganti dengan '.' atau hapus saja.
    turbopack: {
        root: '..', 
    },
    
    // Konfigurasi gambar yang kita tambahkan sebelumnya
    images: {
        disableStaticImages: false,
        unoptimized: true,
    },
    basePath: '', 
};

export default nextConfig;