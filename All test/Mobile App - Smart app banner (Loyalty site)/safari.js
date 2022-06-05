$(function () {
  var ua = navigator.userAgent.toUpperCase();
  console.log(ua);
  if (
    ua.indexOf("MBS-ANDROID") == -1 &&
    ua.indexOf("MBS-IOS") == -1 &&
    ua.indexOf("WALSHHOTEL") == -1 &&
    ua.indexOf("INTELITY") == -1
  ) {
    setTimeout(function () {
      if (!$("body.banner-test").length) {
        $("head").append(
          "<meta name='apple-itunes-app' content='app-id=1483581447'>"
        );
      }
    }, 1000);
  }
});
