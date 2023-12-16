// Promise accepts only one argument.

// Using Array
// let promise = new Promise((res, rej) => {
//   let str = "rupali";
//   let letter = "k";

//   if (str.includes(letter)) {
//     res([str, letter]);
//   } else {
//     rej([str, letter]);
//   }
// });

// promise
//   .then((param) => {
//     // console.log(`${letter} is present in ${str}.`);
//     console.log(`${param[0]} includes ${param[1]}.`);
// })
// .catch((param) => {
//     // console.log(`${letter} is not present in ${str}.`);
//     console.log(`${param[0]} does not include ${param[1]}.`);
//   });

// Using Object
let promise = new Promise((res, rej) => {
  let str = "rupali";
  let letter = "k";

  if (str.includes(letter)) {
    res({ a: str, b: letter });
  } else {
    rej({ a: str, b: letter });
  }
});

promise
  .then((param) => {
    // console.log(`${letter} is present in ${str}.`);
    console.log(`${param.a} includes ${param.b}.`);
  })
  .catch((param) => {
    // console.log(`${letter} is not present in ${str}.`);
    console.log(`${param.a} does not include ${param.b}.`);
  });
