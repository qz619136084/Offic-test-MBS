console.log("checking test running");
var addToCartCookie = getCookie("AddToCart");
if (addToCartCookie == "true") {
  console.log("cookie exist");
  DY.API("event", {
    name: "Events checking: A2C - DLC",
    properties: {},
  });
  document.cookie = "AddToCart = false; path = /";
}
function getCookie(c_name) {
  var cookieArr = document.cookie.split("; ");
  for (i = 0; i < cookieArr.length; i++) {
    var name = cookieArr[i].split("=")[0];
    var value = cookieArr[i].split("=")[1];
    if (name == c_name) {
      return value;
    }
  }
}
