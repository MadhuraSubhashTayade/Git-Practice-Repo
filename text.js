const a = 10;
const b = 20;
const add = () => {
  return a + b;
};

const sum = add();
console.log("Sum is " + sum);

// this is for subdev branch
const multiply = (n1, n2) => {
  return n1 * n2;
};
console.log("Multiplication: ", multiply(20, 4));
