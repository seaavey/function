/**
 * Mengembalikan ucapan selamat berdasarkan waktu saat ini di Jakarta, Indonesia.
 * 
 * Fungsi ini menggunakan zona waktu "Asia/Jakarta" untuk menentukan waktu lokal, 
 * kemudian menghasilkan ucapan yang sesuai berdasarkan jam saat ini.
 * 
 * - Pagi: 04:00 - 10:59
 * - Siang: 11:00 - 14:59
 * - Sore: 15:00 - 18:59
 * - Malam: 19:00 - 03:59
 * 
 * @returns {string} Pesan ucapan selamat berdasarkan waktu lokal di Jakarta.
 * 
 * @example
 * ucapan(); // 'Selamat pagi!' (jika waktu di Jakarta pukul 07:00)
 */
function ucapan() {
  const jam = new Date()
    .toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
    .split(' ')[1]
    .split(':')[0]
    .split('.')[0];
  if (jam >= 4 && jam < 11) return 'Selamat pagi!';
  if (jam >= 11 && jam < 15) return 'Selamat siang!';
  if (jam >= 15 && jam < 19) return 'Selamat sore!';
  return 'Selamat malam!';
}
