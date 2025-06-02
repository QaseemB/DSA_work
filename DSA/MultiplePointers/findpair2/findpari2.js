// O(1) space + O(n log n) time
function findPair2(arr, num) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
      return true
    } else if (arr[j] - arr[i] < num) {
      j++
    } else {
      i++
    }
  }
  return false;
}

