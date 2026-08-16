/*
==============================================================================
Problem: Two Sum
Link: https://leetcode.com/problems/two-sum/
Difficulty: Easy

Description:
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input has exactly one solution,
and you may not use the same element twice.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
==============================================================================
*/


/*
==============================================================================
Wrong Approach ❌

Issue:
Only checks adjacent elements.

Example:
[2,4,11,16]

Checks:
2+4
4+11
11+16

But never checks:
2+11
2+16
4+16

So this approach cannot find all possible pairs.
==============================================================================
*/

function wrongTwoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {

        let sum = nums[i] + nums[i + 1];

        if (sum === target) {
            return [i, i + 1];
        }
    }

    return "No Solution";
}


/*
==============================================================================
Brute Force Solution ✅

Approach:
Check every possible pair using nested loops.

Time Complexity:
O(n²)

Space Complexity:
O(1)

Status:
Solved by myself ✅

Date:
16-Aug-2026
==============================================================================
*/

function twoSumBruteForce(nums, target) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }

        }

    }

    return "No Solution";
}

console.log("Brute Force:", twoSumBruteForce([2, 4, 11, 16, 5], 9));


/*
==============================================================================
Optimized Solution ✅

Approach:
Use Object (HashMap) to store previously seen values.

Formula:
required = target - currentNumber

If required value already exists in object,
return its index and current index.

Time Complexity:
O(n)

Space Complexity:
O(n)
==============================================================================
*/

function twoSumOptimized(nums, target) {

    const obj = {};

    for (let i = 0; i < nums.length; i++) {

        const required = target - nums[i];

        if (required in obj) {
            return [obj[required], i];
        }

        obj[nums[i]] = i;
    }

    return "No Solution";
}

console.log("Optimized:", twoSumOptimized([2, 4, 11, 16, 5], 9));


/*
==============================================================================
What I Learned

1. Brute Force
   - Simple solution
   - Check all possible pairs

2. Time Complexity
   - Brute Force = O(n²)
   - Optimized = O(n)

3. Optimization
   - Object / HashMap can reduce nested loops
   - Store previously visited values

4. DSA Pattern
   Understand Problem
   → Dry Run
   → Brute Force
   → Time Complexity
   → Optimization
   → Final Code
==============================================================================
*/