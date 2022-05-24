$(function () {
  var asmSelectedItem = $(".main-content h1").text();
  $(".button_cta .btn-primary").click(function () {
    setCookie("asmSelectedItem", asmSelectedItem, 1);
  });
  function setCookie(name, value, expiresDays) {
    var exp = new Date();
    exp.setTime(exp.getTime() + expiresDays * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
  }
});
