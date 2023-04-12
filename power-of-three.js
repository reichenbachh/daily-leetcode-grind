function isPowerOfThree(n) {
  // this ends the iteration when the value of n gets to zero
  if (n === 0) return false;

  //while n can be devided by 3 we continue to divide
  while (n % 3 === 0) {
    n /= 3;
  }

  //if the number is a power of 3 n should be equal to one by the end of the loop
  //because a number divided by itself is one
  return n === 1;
}
