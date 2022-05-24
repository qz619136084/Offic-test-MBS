function setCookie(name, value, expiresDays = 1, path = "/") {
  var exp = new Date();
  exp.setTime(exp.getTime() + expiresDays * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + exp.toGMTString() + ";path=" + path;
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
function clearCookie(name) {
  setCookie(name, "", -1);
}
