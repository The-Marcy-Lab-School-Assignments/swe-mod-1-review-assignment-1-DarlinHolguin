/* 
Analyze the following code. Identify the bug and fix it. Then, below, explain what the bug was using scope terminology.
<Your analysis goes here>
The bug identified in the code below is the declaration of `discountRate`
inside the function using const. This is the identified bug because it is 
being declared and assigned within the block scope of the `if`/`else` statement. 
Due to this fact javascript cannot see this value because once the statement block finishes executing,
the block scopes variable is destroyed and no longer exists in the memory. If you declare discountRate with let at a function scope,
it will persist for the entire function.
*/
const calculateDiscount = (price) => {
  let discountRate;
  if (price > 100) {
    discountRate = 0.1;
  } else {
    discountRate = 0.05;
  }

  const discount = price * discountRate;
  return price - discount;
}

console.log(calculateDiscount(150)); // This should print 135
