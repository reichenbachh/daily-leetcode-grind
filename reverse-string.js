function reverseString(s) {
  //we use a left and right pointer to swap out the characters individually
  let right = s.length;
  let left = 0;

  while (left < right) {
    let hold = s[left];
    s[left] = s[right];
    s[right] = hold;

    left++;
    right--;
  }
}
