new DYO.Q.Promise((resolve) => {
  DY.API("callback", () => {
    var categoryArr = DY.itemsData;
    resolve(categoryArr);
  });
}).then((res) => {
  console.log(res);
  return res;
});
