/**
 *
 * @param {number} nums
 * @param {number} target
 * @returns {number[]}
 */

/**
 * Question
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */

function twoSumProblem(nums, target) {
  // we use a hasmao to store the values as we iterate the the list of arrays
  const hasMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    //we store the current value in num1 and store the difference of the target value from the current value using current values as keys
    //if it exists in the map we return the index of the current value and the index of the difference
    const currentValue = nums[i];
    const wantedValue = currentValue - target;

    if (hasMap.has(wantedValue)) {
      return [i, hasMap.get(wantedValue)];
    }
    //if not we save the current value and its index in the map
    hasMap.set(currentValue, i);
  }
}
