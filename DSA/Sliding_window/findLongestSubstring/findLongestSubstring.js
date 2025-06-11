function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return 0;
  
  let maxLen = 0;
  let CharCount = {};
  let left = 0;
  
  for (let right = 0; right < str.length; right++){
      const ch = str[right];
      CharCount[ch] = (CharCount[ch] || 0) + 1;
      
  
  while (CharCount[ch] > 1){
      leftch = str[left]
      CharCount[leftch]--
      left++
    }
    maxLen = Math.max(maxLen, (right - left + 1))
  }
  return maxLen 
}

console.log(findLongestSubstring('thisisawesome'))


// 1. INPUT / OUTPUT
//    • input : string s
//    • output: integer — length of the longest substring that contains only unique characters

// 2. EDGE-CASES & INITIAL STATE
//    • if s is empty  → return 0
//    • left   ← 0                // window start
//    • maxLen ← 0                // best length seen so far
//    • freq   ← {}               // hashmap: char → count

// 3. CORE LOGIC  (expand → shrink → record)
//    FOR right FROM 0 TO s.length-1
//        ch ← s[right]
//        freq[ch] ← freq.get(ch, 0) + 1        // add current char to window
//
//        WHILE freq[ch] > 1                    // duplicate detected
//            freq[s[left]] ← freq[s[left]] – 1 // remove char at window start
//            left ← left + 1                   // shrink window
//
//        currLen ← right – left + 1            // window is now all-unique
//        maxLen  ← max(maxLen, currLen)        // record best

// 4. RESULT
//    return maxLen
