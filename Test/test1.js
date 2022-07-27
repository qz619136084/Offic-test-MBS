new DYO.Q.Promise((resolve) => {
  DY.API("callback", () => {
    if (DY.itemsData[0]) {
      var categoryArr = DY.itemsData[0].categories;
      var targetArr = ["cskypark2018", "dlc2020", "sampan2019"];
      targetArr.forEach((v) => {
        if (jQuery.inArray(v, categoryArr) > -1) {
          resolve(v);
        }
      });
    }
  });
}).then((res) => {
  console.log(res);
  return res;
});
