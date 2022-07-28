console.log("checking test running");
var addToCartCookie = getCookie("AddToCart");
if (addToCartCookie == "true") {
  console.log("cookie exist");
  DYO.Q(DYO.CoreUtils.safeEval(DYO.oevals[5319].code)).then(function (result) {
    if (result == "cskypark2018") {
      DY.API("event", {
        name: "Events checking: A2C - SkyPark",
        properties: {},
      });
    } else if (result == "dlc2020") {
      DY.API("event", {
        name: "Events checking: A2C - DLC",
        properties: {},
      });
    } else if (result == "sampan2019") {
      DY.API("event", {
        name: "Events checking: A2C - Sampan Ride",
        properties: {},
      });
    }
  });
}
document.cookie = "AddToCart = false; path = /";
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
