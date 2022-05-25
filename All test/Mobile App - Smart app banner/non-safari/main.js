$(function () {
  var ua = navigator.userAgent.toUpperCase();
  var url = window.location.href;
  var ifClosed = getCookie("smart_banner_closed");
  if (!ifClosed) {
    if (
      ua.indexOf("MBS-ANDROID") == -1 &&
      ua.indexOf("MBS-IOS") == -1 &&
      ua.indexOf("WALSHHOTEL") == -1 &&
      ua.indexOf("INTELITY") == -1
    ) {
      if (
        url.indexOf("sands-rewards-lifestyle/") > -1 ||
        url.indexOf("sands-rewards-club/") > -1 ||
        url.indexOf("Sands-Rewards-Lifestyle/") > -1 ||
        url.indexOf("Sands-Rewards-Club/") > -1
      ) {
        $("#wtBody .navRow").before(
          "<div class='dy-smart-app-banner'> <div class='close-button'></div> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/mbs/asm/logo-mini.svg' alt='' /> </div> <div class='content-wrap'> <p class='title'>Marina Bay Sands Singapore</p> <p class='sub-title'>Find your way quickly, redeem free parking and more</p> </div> <a class='download-button' href='https://www.marinabaysands.com/appdl/' >View</a > </div>"
        );
        $("head").append(
          "<style>.dy-smart-app-banner{margin-bottom:1rem;}.dy-smart-app-banner .download-button { text-decoration: none; } .dy-smart-app-banner .content-wrap .title { margin: 0; } .dy-smart-app-banner .content-wrap .sub-title { margin: 0; } @media (max-width: 376px) { .dy-smart-app-banner .content-wrap .title { font-size: 0.7rem; } .dy-smart-app-banner .content-wrap .sub-title { font-size: 0.6rem; } }</style>"
        );
      } else {
        $(".main-nav").before(
          "<div class='dy-smart-app-banner'> <div class='close-button'></div> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/mbs/asm/logo-mini.svg' alt='' /> </div> <div class='content-wrap'> <p class='title'>Marina Bay Sands Singapore</p> <p class='sub-title'>Find your way quickly, redeem free parking and more</p> </div> <a class='download-button' href='https://www.marinabaysands.com/appdl/' >View</a > </div>"
        );
      }
    }
  }

  $(".dy-smart-app-banner .close-button").click(function () {
    $(this).closest(".dy-smart-app-banner").remove();
    setCookie("smart_banner_closed", "true");
  });
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
