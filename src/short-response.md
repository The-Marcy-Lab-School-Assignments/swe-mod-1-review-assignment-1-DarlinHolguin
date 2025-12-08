# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Using the code block below, explain what it means for a function call to be an "expression that resolves/evaluates to a value."

```js
const double = (num) => {
  return num * 2;
};

const result = double(5);
```

In your response, make sure to cover the following details:

1. Explain what an "expression" is.
2. Explain how it is determined what value a function call will resolve/evaluate to.
3. Explain why function calls sometimes resolve/evaluate to `undefined`.

### Response 1

According to MDN, an expression is any valid piece code that produces a value. When calling on a function the value that is evaluated, is determined through its parameters and the code that resides inside the function in order to give an evaluated output. Functions calls can sometimes evaluate to `undefined` due to the function not being declared(not existing) or because the function does not return anything.

---

## Prompt 2

Analyze the following code. Then, fill in the template below with the callstack and the values of all variables at the moment when the `getFirstLetter()` function has just been called _for the first time_ but has NOT yet returned.

```js
const buildProfile = (firstName, lastName, age) => {
  const fullName = createFullName(firstName, lastName);
  const initials = extractInitials(firstName, lastName);
  const bio = `${fullName} (${initials}) - Age: ${age}`;
  return bio;
};

const createFullName = (first, last) => {
  const fullName = first + " " + last;
  return fullName;
};

const extractInitials = (first, last) => {
  const firstInitial = getFirstLetter(first); // <--- we're in this function call
  const lastInitial = getFirstLetter(last);
  return firstInitial + lastInitial;
};

const getFirstLetter = (name) => {
  // ***draw the callstack at this moment before the return***
  return name[0].toUpperCase();
};

const userProfile = buildProfile("reuben", "ogbonna", 24);
console.log(userProfile); // reuben ogbonna (RO) - Age: 24
```

**Your response should include:**

1. A diagram of the callstack showing all functions currently executing (most recent calls at the top)
2. All variables in each scope with their current values
   - Use `waiting` for variables waiting to receive a value from a function call
   - Use `undefined` for variables not yet assigned a value

### Response 2

```
Callstack: (recent calls at the top)
---------------------------
[           ]
[           ]
[           ]
[           ]


Variables by Scope:
---------------------------
Global Scope:
- buildProfile = ?
- createFullName = ?
- extractInitials = ?
- getFirstLetter = ?
- userProfile = ?

buildProfile() scope:
- firstName = ?
- lastName = ?
- age = ?
- fullName = ?
- initials = ?
- bio = ?

createFullName() scope:
- (list any parameters/variables)

extractInitials() scope:
- first = ?
- last = ?
- firstInitial = ?
- lastInitial = ?

getFirstLetter() scope:
- name = ?
```

---

## Prompt 3

These two code snippets look similar but behave differently. Explain what each one prints and WHY they produce different results. Use the proper scope terminology in your explanation. Feel free to run these code blocks.

Example A:

```js
let count = 0;

const incrementA = () => {
  count = count + 1;
};

incrementA();
console.log(count);
```

Example B

```js
let count = 0;

const incrementB = () => {
  let count = 0;
  count = count + 1;
};

incrementB();
console.log(count);
```

### Response 3

Although both codes have similar codes, the output for example A compared to example B is different.

Example A would return you with the applied value of the `count` variable, since we see the initial value of `count` being set to 0 and then having 1 added to the variable, we can assume that example A will produce the output of "1" because the `incrementA()`.

Example B would return . The reason why example B would return this is because

---

## Prompt 4

You need to remove a student's name from an array of enrolled students. Your coworker suggests two approaches:

```js
// Approach A:
const index = students.indexOf(nameToRemove);
students.splice(index, 1);

// Approach B:
const newStudents = [];
for (let i = 0; i < students.length; i++) {
  if (students[i] !== nameToRemove) {
    newStudents.push(students[i]);
  }
}
```

Which approach would you choose and why? In your answer, identify at least one potential bug and explain the tradeoff between these approaches.

### Response 4

Your response...

---

## Prompt 5

Label the basic array methods below with a 1-sentence description of what they do. Indicate with `(mutating)` or `(non-mutating)` whether or not the method directly mutates the array

### Response 5

- `push(value)` - ???
- `pop()` - ???
- `shift()` - ???
- `unshift(value)` - ???
- `splice(index, deleteCount)` - ???
- `slice(start, end)` - ???
