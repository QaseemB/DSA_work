function findAllDuplicates(arr){
  // add whatever parameters you deem necessary - good luck!
let count = {}
let duplicates = []

for (const val of arr){
    count[val] = (count[val] || 0) + 1;
}
for (const key in count){
    if (count[key] > 1){
        duplicates.push(Number(key));
    }
}
    return duplicates
}

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]))

// 1. input array output intergers 
// 2. initialize variable count with a hasmap 
// 3. loop through Array
// 4a. if array has any duplicates return the intergers
// 5. output 
