/**
    we are repeating all the promise steps like below

    This is called chaining of promises
 */
// step11(10, false)
//   .then((result1) => step12(result1, false))
//   .then((result2) => step13(result2, false))
//   .then((result3) => console.log(result3))
//   .catch((error) => console.error(error));

/*
  To overcome abolve issue we need to use aync await

  "async await makes promises are easier"

  - async means a function return a Promise
  - await means a function wait for a promise
 */

function step1(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}

// Here, if we use only async without await it will print like below

async function result() {
  let result1 = step1(10, false);
  console.log(result1);
}

result();
/*

        Promise {<fulfilled>: 20}
        __proto__: Promise
        [[PromiseState]]: "fulfilled"
        [[PromiseResult]]: 20

*/

// Here, if we use only async await together  it will print the actual result like below

async function result() {
  let result1 = await step1(10, false);
  console.log(result1);
}

result(); /* 20 */
