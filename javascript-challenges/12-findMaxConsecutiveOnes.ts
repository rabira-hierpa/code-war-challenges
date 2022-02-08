/**
 * Function that returns max consecutive ones
 * @abstract Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * @copyright Rabra H.
 * @param nums num arra
 * @returns max consecutive ones
 */
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  if (nums.length < 1) {
    return max;
  }
  if (nums.length <= Math.pow(10, 5)) {
    let current = 0;
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] === 1) {
        current += 1;
      } else {
        current = 0;
      }
      max = current > max ? current : max;
    }
  }
  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1]));
console.log(findMaxConsecutiveOnes([]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 0, 1, 1, 0, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1, 1, 0, 1]));
