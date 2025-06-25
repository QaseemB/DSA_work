function sortedFrequency(arr, n){
 function findFirst(){
     if (arr.length <= 0) return -1;
 let left = 0;
 let right = arr.length - 1;
 let freq = -1;
 
 while (left <= right){
     let mid = Math.floor((left + right)/2)
     if (arr[mid] === n){
         freq = mid;
         right = mid -1;
     }else if (arr[mid] < n){
         left = mid + 1
         }else {
          right = mid - 1;
     }
 } 
    return freq
 }
 
 function findLast(){
     if (arr.length <= 0) return -1;
 let left = 0;
 let right = arr.length - 1;
 let freq = -1;
 
 while (left <= right){
     let mid = Math.floor((left + right)/2)
     if (arr[mid] === n){
         freq = mid;
         left = mid + 1;
     }else if (arr[mid] < n){
          left = mid + 1;
     }else {
         right = mid - 1
     }
 } 
   return freq
 }
 
 const first = findFirst();
 const last = findLast();

 if (first === -1 || last === -1) return -1;
 
 return last - first + 1;
}
 console.log(sortedFrequency([1,1,2,2,2,2,3],2))
 
 // 1. Understand the input and output
// - Input: Sorted array of integers (arr), and a target integer (n)
// - Output: Number of times n appears in arr, or -1 if not found

// 2a. Precondition Checks
// - If the array is empty, return -1

// 2b. Initialize variables or data structures
// - Define helper function findFirst()
//   - Set left = 0, right = arr.length - 1, result = -1
// - Define helper function findLast()
//   - Set left = 0, right = arr.length - 1, result = -1

// 3. Loop (in helper functions)
// - While left <= right:
//   - Compute mid = Math.floor((left + right) / 2)
//   - If arr[mid] === n:
//     - Set result = mid
//     - For findFirst(): move right = mid - 1
//     - For findLast(): move left = mid + 1
//   - Else if arr[mid] < n:
//     - Move left = mid + 1
//   - Else:
//     - Move right = mid - 1

// 4. Conditional logic
// - After finding first and last indices:
//   - If either is -1, return -1 (n not found)
//   - Else, compute frequency = last - first + 1

// 5. Return or output result
// - Return the computed frequency

 

