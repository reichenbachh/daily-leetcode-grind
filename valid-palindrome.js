/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * *A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same    forward and backward. Alphanumeric characters include letters and numbers.
 **Given a string s, return true if it is a palindrome, or false otherwise.
 */

function validPalindrome(s) {
  let sourceString = s.replace(/[^A-Za-z0-9]/g, "");
  let right = sourceString.length - 1;
  let left = 0;

  while (left < right) {
    if (
      sourceString[left].toLowerCase() !== sourceString[right].toLowerCase()
    ) {
      return false;
    }
    right--;
    left++;
  }
  return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
