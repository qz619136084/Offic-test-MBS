$(function () {
  console.log("auto-selction function in");
  var asmSelectedItem = getCookie("asmSelectedItem").replaceAll(" ", "");
  if (asmSelectedItem) {
    console.log("cookie exist");
    $(".multiple_boxes_main.check_boxes .select-gallery li").each(function () {
      var asmCard = $(this);
      var asmItem = asmCard.find("h6").text().replaceAll(" ", "");
      if (asmSelectedItem == asmItem) {
        $("#buyexhibition").addClass("come-in").addClass("already-visible");
        var position = asmCard.offset().top;
        $("html").animate({ scrollTop: position - 200 }, 300);
        asmCard.trigger("click");
      }
    });
    clearCookie("asmSelectedItem");
  }
  function setCookie(name, value, expiresDays) {
    var exp = new Date();
    exp.setTime(exp.getTime() + expiresDays * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
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
});