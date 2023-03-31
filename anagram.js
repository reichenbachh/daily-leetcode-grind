/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */

/**
 **Question
 **Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

function anagaram(s, t) {
  //we return false both words dont have have the same character count
  if (s.length !== t.length) return false;
  let frequencyHashMap = new Map();

  // we loop through the first word generating a frequency hasmap(the number of times each character exists in the string)
  for (let i = 0; i < s.length; i++) {
    //if it exists we increment by one if it doesn we add it to the map
    if (frequencyHashMap.has(s[i])) {
      frequencyHashMap.set(s[i], frequencyHashMap.get(s[i]) + 1);
      continue;
    }
    frequencyHashMap.set(s[i], 1);
  }

  // we then loop through the second word, decrementing if it exists and deleting the value if its zero
  for (let i = 0; i < t.length; i++) {
    if (frequencyHashMap.has(t[i])) {
      frequencyHashMap.set(t[i], frequencyHashMap.get(t[i]) - 1);
    }
    if (frequencyHashMap.get(t[i]) === 0) {
      frequencyHashMap.delete(t[i]);
    }
  }

  //if there are no values left its an valid anagram,vice versa if not
  return frequencyHashMap.size === 0;
}

console.log(anagaram("anagram", "nagaram"));
