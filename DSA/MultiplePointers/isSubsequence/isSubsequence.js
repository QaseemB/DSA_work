function isSubsequence(str1,str2) {
  // good luck. Add any arguments you deem necessary.
  if (str1.length > str2.length) return false;
   let i = 0;
   let j = 0;
    while (j < str2.length){
        if (str1[i] === str2[j]){
            i++
        }else {
            j++
        }
    }if (i === str1.length) {
        return true
    }
    return false
}

// 1. Input: two strings; Output: true or false

// 2. Initialize pointer i = 0 (for str1), pointer j = 0 (for str2)

// 3. While j < str2.length:
    // If str1[i] === str2[j], move i forward (i++)
    // Always move j forward (j++)

// 4. If i === str1.length → return true (all characters matched in or
// 5. Else return false
