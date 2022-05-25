$(function () {
  var ua = navigator.userAgent.toUpperCase();
  var ifClosed = sessionStorage.getItem("smart_banner_closed");
  if (!ifClosed) {
    if (
      ua.indexOf("MBS-ANDROID") == -1 &&
      ua.indexOf("MBS-IOS") == -1 &&
      ua.indexOf("WALSHHOTEL") == -1 &&
      ua.indexOf("INTELITY") == -1
    ) {
      $("#wtBody .navRow").before(
        "<div class='dy-smart-app-banner'> <div class='close-button'></div> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/mbs/asm/logo-mini.svg' alt='' /> </div> <div class='content-wrap'> <p class='title'>Marina Bay Sands Singapore</p> <p class='sub-title'>Find your way quickly, redeem free parking and more</p> </div> <a class='download-button' href='https://www.marinabaysands.com/appdl/' >View</a > </div>"
      );
      $(".dy-smart-app-banner .close-button").click(function () {
        $(this).closest(".dy-smart-app-banner").remove();
        sessionStorage.setItem("smart_banner_closed", "true");
      });
    }
  }
});
