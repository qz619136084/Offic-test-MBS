async function test() {
  var data = await waitSessionStorageData();
  console.log(data);
}
function waitSessionStorageData() {
  return new Promise((resolve, reject) => {
    var check = setInterval(() => {
      if (
        f_getSessionStorage() != undefined &&
        Object.keys(f_getSessionStorage()).length != 0
      ) {
        resolve(f_getSessionStorage());
        clearInterval(check);
      }
    }, 100);
  });
}
test();
