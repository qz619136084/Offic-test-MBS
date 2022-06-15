var [res1, res] = await Promise.all([
  DYO.waitForElementAsync(".bottomFix .big~br+small"),
  DYO.waitForElementAsync(".big strong"),
]);
console.log(res);
