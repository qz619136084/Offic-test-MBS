var a = 123;
Number.prototype.test = function () {
  console.log("testing", this);
};
console.log(a.test())