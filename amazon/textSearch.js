/**
 * @param {string} text
 * @param {string} query
 * @return {string}
 */
function textSearch(text, query) {
  return text.replace(new RegExp(`(${query})+`, 'gi'), (match) => `<b>${match}</b>`)
}

const log1 = textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox');
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
// const log2 = textSearch('The hardworking Dog overtakes the lazy dog', 'dog');
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'

console.log(log1)
