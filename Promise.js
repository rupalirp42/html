let rupali = new Promise((res, rej) => {
  let num = (Math.random()*10).toFixed(0);

  // let num = Math.floor(Math.random() * 10);
  if (num % 2 == 0) {
    res(num);
  } else {
    rej(num);
  }
});

rupali
  .then((num) => {
    // console.log(num + " is Even number.");
    console.log(`${num} is Even number.`);
  })
  .catch((num) => {
    // console.log(num + " is Odd number.");
    console.log(`${num} is Odd number.`);
  });
