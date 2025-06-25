
function countZeroes(arr){
  // add whatever parameters you deem necessary - good luck!!!
  let left = 0;
  let right = arr.length - 1;
  let firstZero = -1
  
  
  while(left <= right ){
      let middle = Math.floor((left+ right)/ 2);
      if(arr[middle] === 0){
         firstZero = middle
         right = middle - 1
      }else {
          left = middle + 1
      }
  }
    return firstZero === -1 ? 0 : arr.length - firstZero;
}

console.log(countZeroes([1,1,1,0,0]));

// 1. INPUT / OUTPUT
//    • Input: A sorted array of 1's followed by 0's (e.g. [1,1,1,0,0])
//    • Output: Integer — number of 0's in the array

// 2. INITIALIZE VARIABLES & STRUCTURE
//    • left  ← 0              → start of array
//    • right ← arr.length - 1 → end of array
//    • firstZero ← -1         → sentinel to store index of first 0

// 3. CORE LOGIC — BINARY SEARCH LOOP
//    WHILE left <= right:
//      • mid ← floor((left + right) / 2)
//      • IF arr[mid] === 0:
//          → Set firstZero ← mid      // record current zero index
//          → Move right ← mid - 1     // search left half for earlier 0
//      • ELSE (arr[mid] === 1):
//          → Move left ← mid + 1      // 0s must be in right half

// 4. RETURN FINAL VALUE
//    • IF firstZero === -1:
//        → return 0                   // no 0s found
//    • ELSE:
//        → return arr.length - firstZero
