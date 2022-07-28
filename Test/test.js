var addToCartCookie = getCookie("Purchase");
if (addToCartCookie == "true") {
  DY.API("event", {
    name: "Events checking: Purchase - SkyPark",
    properties: {},
  });
}
setTimeout(() => {
  document.cookie = "Purchase = false; path = /";
}, 1500);
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
