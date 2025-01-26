/**
 * Menghitung selisih waktu antara timestamp dan waktu sekarang
 * @param {number} timestamp Waktu dalam milidetik
 * @returns {string} Selisih waktu dalam format Jam, Menit, Detik.
 * Misal: 3 Jam, 2 Menit, 1 Detik yang lalu
 */
function dateTime(timestamp) {
  const now = Date.now();
  const diff = Math.abs(timestamp - now);

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60));

  const result = [];
  if (hours > 0) result.push(`${hours} Jam`);
  if (minutes > 0) result.push(`${minutes} Menit`);
  if (seconds > 0) result.push(`${seconds} Detik`);

  return result.length > 0 ? `${result.join(', ')} yang lalu` : 'Baru saja';
}
