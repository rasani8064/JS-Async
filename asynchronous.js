/* Asynchronous means that you can excute multple things at a time and
you don't have to finish excuting the current thing in order to move on to next one */

// console.log("Raju");
// setTimeout(() => {
//   console.log("Hello");
// }, 1000);
// console.log("Asani");

console.log("Raju");
setTimeout(() => {
  calculate();
}, 1000);
console.log("Asani");

function calculate() {
  let sum = 0;
  let arr = [1, 2, 3, 4, 5];
  //   for (let i = 0; i < 1000000; i++) {
  //     sum += i;
  //   }
  for (let i = 0; i < arr.length; i++) {
    sum += i;
  }
  console.log(sum, "sum");
}
