/**
 * Mengkapitalisasi huruf pertama setiap kata
 * @param {string} query - Kalimat input
 * @returns {string} Kalimat dengan huruf pertama kapital
 *
 * @example
 * toUpper('hello world') // 'Hello World'
 */
function toUpper(query) {
  const arr = query.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
}

/**
 * Mengubah huruf pertama setiap kata menjadi lowercase
 * @param {string} query - Kalimat input
 * @returns {string} Kalimat dengan huruf pertama lowercase
 *
 * @example
 * toLower('Hello World') // 'hello world'
 */
function toLower(query) {
  const arr = query.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1);
  }

  return arr.join(" ");
}
