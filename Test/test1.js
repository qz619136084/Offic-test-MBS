new Promise((resolve, reject) => {
  var count = 1;
  if (count) {
    resolve("success");
  } else {
    reject("failed");
  }
}).then((res) => {
  console.log(res);
});
