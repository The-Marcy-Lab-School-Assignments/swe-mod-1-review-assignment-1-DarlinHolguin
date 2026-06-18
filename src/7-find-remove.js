/* 
Analyze the following code. Explain what happens when the function is called. Then, identify the bug and fix it.

<Your explanation goes here>
When the function is called with "grape", it returns -1 because theres no index in the array with the value " "grape" ", it doesn't exist.

The bug here is that the code passes that -1 into splice, -1 stands for the last element so it deletes "orange".
The fix for this is to add a guard clause saying if the index is equal to -1, then stop there and just return the arr before the splice has the chance to be ran.
*/
const findAndRemove = (arr, target) => {
  const index = arr.indexOf(target);
  if (index === -1) return arr;
  arr.splice(index, 1);
  return arr;
}

const items = ["apple", "banana", "orange"];
findAndRemove(items, "grape");
console.log(items); // This should print ["apple", "banana", "orange"]
