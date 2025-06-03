function minSubArrayLen(nums, target) {
  let minLen = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

  
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));









//1 Input:
//   - nums: an array of positive integers
//   - target: a positive integer representing the minimum sum to reach
//
// Output:
//   - An integer representing the length of the smallest contiguous subarray
//     where the sum is >= target. Return 0 if no such subarray exists.

// 2. Constraints:
//   - All numbers are positive integers.
//   - Subarrays must be contiguous.
//
// Edge Cases:
//   - If no subarray adds up to at least target, return 0.
//   - If the array is empty, return 0.
//
// 3. Initialize:
//   - minLen to Infinity → represents the shortest subarray found so far
//   - sum to 0 → to track the current window sum
//   - left pointer to 0 → marks the start of the current window

// 4. Loop through array with right pointer:
//   - Add nums[right] to sum
//   - While the current window sum is >= target:
//       → Update minLen to the smaller of current minLen or (right - left + 1)
//       → Shrink window by subtracting nums[left] and incrementing left

// 5. If minLen is still Infinity, no valid subarray was found → return 0
// Else return minLen

