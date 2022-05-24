let a = 1;
a = await f_1();
console.log(a);
async function f_1() {
  setTimeout(() => {
    return 2;
  }, 1000);
}
