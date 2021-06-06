/* 
    " I will call back after "
  - A function ppassed as argument to another function
  - technique can run one after another one  has finished


  Eg:
    setTimeout(() => {
       console.log('Hello')
    }, 1000);

*/

/*
1.  Passing 10 as the initial value to step1
2. If there is no error, then passing the result to step2
3. If there is no error, then passing the result to step3
4. Finally Printing the result
*/

function step1(value, callback) {
  callback(value + 10);
}

function step2(value, callback) {
  callback(value + 10);
}
function step3(value, callback) {
  callback(value + 10);
}

// this is called callback hell
step1(10, function (result1, error) {
  if (!error) {
    step2(result1, function (result2, error) {
      if (!error) {
        step2(result2, function (result3, error) {
          if (!error) {
            console.log(result3, "result3");
          }
        });
      }
    });
  }
});

/* 
    callback hell solution is using Promises
*/

// same function using promises like below

function step11(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}

function step12(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}

function step13(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}

step11(10, false)
  .then((result1) => step12(result1, false))
  .then((result2) => step13(result2, false))
  .then((result3) => console.log(result3))
  .catch((error) => console.error(error));
