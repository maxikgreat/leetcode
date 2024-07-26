/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const trie = {}
  let node = trie
  for (const str of strs) {
    node = trie
    for (let char of str) {
      if (node[char]) {
        node = node[char]
      } else {
        node[char] = {}
        node = node[char]
      }
    }
  }

  let prefix = ""

  if (Object.keys(trie).length > 1) {
    return prefix
  }
  node = trie
  const shortestStr = strs.reduce(
    (prev, item) => {
      if (prev === null) {
        return item
      }

      return prev.length > item.length ? item : prev
    },
    null
  )
  for (let char of shortestStr) {
    if (Object.keys(node[char]).length > 1) {
      return prefix + char
    }

    prefix += char
    node = node[char]
  }

  return prefix
};

console.log(longestCommonPrefix(["ab", "a"]))
