function findPair(arr,n){
    if (arr.length <= 1) return false
    
    const seen = new Set();
    
    for(const val of arr){
        if(seen.has(val + n )|| seen.has(val - n)){
            return true;
        } 
        seen.add(val)
    }
    return false
}


console.log(findPair([6,1,4,10,2,4], 2) ,"expected: true")
console.log(findPair([8,6,2,4,1,0,2,5,13],1), "expected: true")
console.log(findPair([4,-2,3,10],-6) ,"expected: true")
console.log(findPair([6,1,4,10,2,4], 22))
console.log(findPair([], 0) , "expected: false")
console.log(findPair([5,5], 0), "expected: true")
console.log(findPair([-4,4], -8), "expected: true")
console.log(findPair([-4,4], 8), "expected: true")
console.log(findPair([1,3,4,6],-2), "expected: true")
console.log(findPair([0,1,3,4,6],-2), "expected: true")
console.log(findPair([1,2,3], 0), "expected: false" )
// 1. Input = array of integers, target difference n
//    Output = true if any pair has absolute difference of n, else false

// 2. If array length is less than or equal to 1 → return false

// 3. Initialize an empty set called 'seen'

// 4. Loop through each number in the array:
    // - For each number:
        // - Check if (number + n) exists in 'seen'
        // - OR check if (number - n) exists in 'seen'
        // - If yes, return true
        // - Else, add number to 'seen'

// 5. If loop finishes without returning → return false


