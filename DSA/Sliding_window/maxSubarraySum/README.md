# Max Subarray Sum (Sliding Window)

## 🧠 Problem:
Given an array of integers and a number `n`, return the **maximum sum of `n` consecutive elements** in the array.

---

## 📝 Summary:

This function uses the **Sliding Window** pattern to avoid recalculating the sum of every possible subarray.

- First, it adds the first `n` elements to create a starting window (`maxSum`)
- Then it slides the window across the array one element at a time:
  - Subtract the element that's leaving the window
  - Add the element that's entering the window
  - Update `maxSum` if the new window's total is larger
- Finally, it returns the highest sum found

---

## 🧠 Pattern:
**Sliding Window**

---

## 🕒 Time Complexity:
**O(n)** — One pass through the array after the initial sum

---

## 🧠 Space Complexity:
**O(1)** — No extra data structures used

---

## 📌 Example:

```js
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)
// Returns: 10 → from subarray [5, 5]

