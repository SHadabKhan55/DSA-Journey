/*
==============================================================================
Problem: Contains Duplicate
Link: https://leetcode.com/problems/contains-duplicate/
Difficulty: Easy

Description:
Given an integer array nums,
return true if any value appears at least twice in the array,
and return false if every element is distinct.

Example:
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false
==============================================================================
*/


/*
==============================================================================
Brute Force Solution ✅

Approach:
Store visited values inside an array.

For each number:
- Check if it already exists in the visited array.
- If yes, duplicate found → return true.
- Otherwise add it to visited array.

Time Complexity:
O(n²)

Reason:
Loop runs O(n)
includes() also takes O(n)

O(n) × O(n) = O(n²)

Space Complexity:
O(n)

Status:
Solved by myself ✅

Date:
17-Aug-2026
==============================================================================
*/

function containDuplicateBruteForce(arr) {

    let unique = [];

    for (let i = 0; i < arr.length; i++) {

        if (unique.includes(arr[i])) {
            return true;
        }

        unique.push(arr[i]);
    }

    return false;
}

console.log(
    "Brute Force:",
    containDuplicateBruteForce([1, 2, 3, 4, 1])
);


/*
==============================================================================
Optimized Solution ✅

Approach:
Use Set to store previously seen values.

For each number:
- Check if value already exists in Set.
- If yes, duplicate found → return true.
- Otherwise add value into Set.

Why Set?
Set provides fast lookup using hash-based storage.

Time Complexity:
O(n)

Space Complexity:
O(n)
==============================================================================
*/

function containDuplicateOptimized(arr) {

    let unique = new Set();

    for (let i = 0; i < arr.length; i++) {

        if (unique.has(arr[i])) {
            return true;
        }

        unique.add(arr[i]);
    }

    return false;
}

console.log(
    "Optimized:",
    containDuplicateOptimized([1, 2, 3, 4, 1])
);


/*
==============================================================================
What I Learned

1. Duplicate Detection
   - Need to check whether a value was seen before.

2. Brute Force
   - Use array + includes()
   - Time Complexity = O(n²)

3. Optimization
   - Use Set for fast lookup.
   - Time Complexity = O(n)

4. Set Methods
   - add()
   - has()

5. DSA Pattern
   Duplicate / Unique Elements
   → Think about Set

6. Interview Learning
   - Array lookup can be expensive.
   - Set lookup is much faster.
==============================================================================
*/