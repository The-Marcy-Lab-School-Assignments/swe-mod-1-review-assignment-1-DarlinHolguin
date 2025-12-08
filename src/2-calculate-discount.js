/* 
Analyze the following code. Identify the bug and fix it. Then, below, explain what the bug was using scope terminology.

<Your analysis goes here>
The bug identified in the code below is the declaration of `discountRate`. This is the identified bug because it is being delclared and assigned within the block scope of the `if` statement. Due to this fact javascript cannot see this value because it does not exist if it was defined inside of block scope.
*/
let discountRate
const calculateDiscount = (price) => {
  if (price > 100) {
    discountRate = 0.1;
  } else {
    discountRate = 0.05;
  }

  const discount = price * discountRate;
  return price - discount;
}

console.log(calculateDiscount(150)); // This should print 135
