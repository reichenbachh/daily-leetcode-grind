function reverseString(s) {
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

reverseString("Wilderness");
