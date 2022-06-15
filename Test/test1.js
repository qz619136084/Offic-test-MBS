var bindEditClick1717 = setInterval(() => {
  if ($("#booking_information_edit").length) {
    $("#booking_information_edit").click(() => {
      delayUpdate().then((res) => {
        console.log(res);
      });
    });
    clearInterval(bindEditClick1717);
  }
}, 100);
function delayUpdate() {
  return new Promise((resolve, reject) => {
    var check = setInterval(() => {
      console.log("interval running");
      if ($("#loading").css("display") == "none") {
        resolve("success");
        clearInterval(check);
      }
    }, 100);
  });
}
