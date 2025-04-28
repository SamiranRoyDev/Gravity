/** Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
For example, given:
const nums = [2, 7, 11, 15];
const target = 9;
The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
Requirements:
•	Implement the solution in JavaScript.
•	The solution should have a time complexity better than O(n^2).
•	Include proper error handling for edge cases.
*/
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  const len = nums.length;
  const complement = new Map();

  for (let i = 0; i < len; i++) {
    if (complement.has(nums[i])) {
      return [complement.get(nums[i]), i];
    } else {
      complement.set(target - nums[i], i);
    }
    // console.log('complement', complement);
  }
  return [];
}
const result = twoSum(nums, target);
console.log(result);
