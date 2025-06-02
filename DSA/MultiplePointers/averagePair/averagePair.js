function averagePair(arr,int){
  // add whatever parameters you deem necessary - good luck!
        let left = 0;
        let right = arr.length - 1;
        while (left < right){
        let avg = (arr[left] + arr[right] )/ 2
        if (avg == int){
            return true
        } else if (avg > int){ 
            right--
        } else {
            left++
        }
     }
     return false 
    }

// 1. input = sorted array of intergers and target average integer output true/false
// 2a. init variable left 0 and right -1 
// 2b. whil left is less than right let avg == arr left + arr right / 2
// 3. lopp through array 
// 4. if left and right dont average int move left up and increment right
