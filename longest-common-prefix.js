function longestCommonPrefix(strs) {
  // we use the first string in the array as a prefix
  let prefix = strs[0];

  //we loop through the array  and use a while loop to remove check if the prefix exists as a substring in each memeber of the arryay
  //before we move unto the next
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
}
