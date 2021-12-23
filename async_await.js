// Async and Await

// async and await make promises easier to write
// async makes a function return a Promise
// await makes a function wait for a Promise
//We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

//example 1:

function print(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, 2000);
  });
}

async function printAll() {
  await print("start");
  await print("loading");
  await print("finish");
}

printAll();
