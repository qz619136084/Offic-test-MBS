$(function () {
  if (getCookie("notification") != "off") {
    var ua = navigator.userAgent.toUpperCase();
    if (ua.indexOf("MBS-ANDROID") == -1 && ua.indexOf("MBS-IOS") == -1) {
      $("body").append(
        "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='${Image}' alt='${Image Alt}' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> ${Title} </h6> <p style='margin: 0'> ${Description} </p> <a href='${Button Link}' ><button class='btn btn-primary'>${Button Text}</button></a > </div> </div>"
      );
      $(".dy-widget-container .dy-close-btn").click(function () {
        $(".dy-widget-container").fadeOut(300);
        setCookie("notification", "off");
      });
    }
  }
  function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
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
});
