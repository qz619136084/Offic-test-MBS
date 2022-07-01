new DYO.Q.Promise((resolve) => {
  DY.API("callback", () => {
    const result =
      DY.itemsData.sort((a, b) => b.price - a.price)[0]?.categories || [];
    resolve(result);
  });
}).then((res) => {
  console.log(res);
});