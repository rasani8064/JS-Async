let p = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num > 0.5) {
    resolve("good things");
  } else {
    reject("bad things");
  }
});

p.then(console.log)
  .catch(console.log)
  .finally(() => {
    console.log("It all will be ok...");
  });

/*
  
  The finally() method returns a Promise. When the promise is settled,
    i.e either fulfilled or rejected, the specified callback function is executed
  */
