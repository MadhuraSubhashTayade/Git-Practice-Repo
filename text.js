const a = 10;
const b = 20;
const add = () => {
  return a + b;
};
const sum = add();
console.log("Sum is " + sum);

document.querySelector(".num1").textContent = a;
document.querySelector(".num2").textContent = b;
document.querySelector(".sum").textContent = sum;
