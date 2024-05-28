// given an array and a target, return the two indices that total the target

let numbers = [2, 3, 6, 9, 13, 15];
let numbers2 = [3, 19, 7, 14, 12, 29];

function twoIn(nums, target) {

  let result = "no match";

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {

      if (i == j) {
        continue;
      } else {
        console.log(`num1: ${nums[i]}, num2: ${nums[j]}`);
      };
      
      if (nums[i] + nums[j] == target) {
        result = [i, j];
      };
    };
  };
  return result;
};

console.log(twoIn(numbers, 9));
console.log(twoIn(numbers2, 19));
console.log(twoIn(numbers2, 20));