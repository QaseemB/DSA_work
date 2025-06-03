function maxSubarraySum(arr,n){
// add whatever parameters you deem necessary - good luck!
  if(arr.length < n) return null;
  
  let maxsum = 0;
  let tempsum = 0;
  
  for (let i = 0; i < n; i++){
      maxsum += arr[i]
  }
  tempsum = maxsum
  for(let i = n; i < arr.length; i++){
      tempsum = tempsum - arr[i - n] + arr[i]
      maxsum = Math.max(maxsum, tempsum)
  }
  return maxsum
}

// 1. Input = array of integers, number n
//    Output = highest possible sum of n consecutive elements

// 2a. If array length < n, return null

// 2b. Initialize maxSum = 0
//     Initialize tempSum = 0

// 3. Loop from index 0 up to n (exclusive)
//     - Add each value to maxSum

// 4. Set tempSum = maxSum (starting window)

// 5. Loop from index n to end of array
//     - Subtract arr[i - n] from tempSum (value leaving the window)
//     - Add arr[i] to tempSum (value entering the window)
//     - Update maxSum to be the max of tempSum and current maxSum

// 6. After loop ends, return maxSum.
