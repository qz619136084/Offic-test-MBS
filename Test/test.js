var a = await new Promise((resolve, reject) => {
  DYO.recommendationWidgetData(145354, {}, function (error, data) {
    resolve(data);
  });
});
console.log(a);
