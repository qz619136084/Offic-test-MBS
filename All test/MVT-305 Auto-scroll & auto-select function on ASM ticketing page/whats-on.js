$(function () {
  DYO.waitForElement(
    ".textlink .btn-primary",
    function () {
      $(".textlink .btn-primary").click(function () {
        var asmSelectedItem = $(this)
          .closest(".textlink")
          .prev(".content_box")
          .find(".title")
          .text();
        setCookie("asmSelectedItem", asmSelectedItem, 1);
      });
    },
    1,
    100
  );
  function setCookie(name, value, expiresDays) {
    var exp = new Date();
    exp.setTime(exp.getTime() + expiresDays * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
  }
});
