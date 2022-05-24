$(function () {
  var ua = navigator.userAgent.toUpperCase();
  if (ua.indexOf("MBS-ANDROID") == -1 && ua.indexOf("MBS-IOS") == -1) {
    $("body").on("click", ".dy-notification .btn", function () {
      DY.API("event", {
        name: "MVT-202/MVT-204: Clicking on notification",
        properties: {},
      });
    });
  }
});
