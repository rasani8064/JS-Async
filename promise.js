/*
Promises:
--------
- Javascript Object that links producing and consuming the code

" I Promise a result "

- Producing  code  -- can take some time
- Consuming  Code  -- must wait for the result
*/

/*
availbale Promise State and values are

- pending (undefined)
- Fullfilled ( resolved value)
- Rejected (reason for rejection)
*/

const p1 = Promise.resolve("Like if you can understood callbacks");
const p2 = 10;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Subscribe for more updates");
});
const p4 = Promise.reject("Rejected");

p1.then((result) => console.log(result)); //Like if you can understood callbacks

p3.then((result) => console.log(result)); // Subscribe for more updates -- after 1 second

/*
 Available Promise Methods are 

 - Promise.all( [promises] )
 - Promise.allSetteled ( [promises] )
 - Promise.any( [promises] )
 - Promise.race( [promises] )

*/

// all means it will excute all at a time
Promise.all([p1, p2, p3]).then((values) => console.log(values));

/* 

(3) ["Like if you can understood callbacks", 10, "Subscribe for more updates"]
0: "Like if you can understood callbacks"
1: 10
2: "Subscribe for more updates"
length: 3
__proto__: Array(0)

*/

// all promises are setteld means whether it will resolve or reject it
Promise.allSettled([p1, p2, p3, p4]).then((values) => console.log(values));

/* 

(4) [{…}, {…}, {…}, {…}]
0: {status: "fulfilled", value: "Like if you can understood callbacks"}
1: {status: "fulfilled", value: 10}
2: {status: "fulfilled", value: "Subscribe for more updates"}
3: {status: "rejected", reason: "Rejected"}
length: 4
__proto__: Array(0)

*/

// it will expect any promise will resolve
Promise.any([p1, p2, p3]).then((values) => console.log(values));

/*
Subscribe for more updates
*/

// which is come first to resolve in race
Promise.race([p1, p2, p3]).then((values) => console.log(values));

/*
Subscribe for more updates
*/
