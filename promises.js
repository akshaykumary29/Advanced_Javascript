// Promise concept
// (resolve, reject, pending, settle)

// Example 1: 

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue); // there is a count value.

// Example 2:
function print(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
print("start")
  .then(() => print("loading"))
  .then(() => print("finish"));

// Example 3:
// function login(firstName, lastName, email) {
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Inside login page");
//       resolve();
//     }, 5000);
//   });
// }

// function details(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Inside login page");
//       reject();
//     }, 5000);
//   });
// }

// login("firstName", "lastName", "email")
//   .then(() => {
//     details(callback);
//   })
//   .catch(() => {});


