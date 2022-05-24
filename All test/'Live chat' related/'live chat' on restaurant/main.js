$(function () {
  var ua = navigator.userAgent.toUpperCase();
  if (ua.indexOf("MBS-ANDROID") == -1 && ua.indexOf("MBS-IOS") == -1) {
    var waitEl = setInterval(function () {
      if ($(".error-msg").length) {
        var targetNode = document.getElementsByClassName("error-msg")[0];
        var config = { attributes: true };
        var triggerLivechat = function (mutationList, observer) {
          for (let mutation of mutationList) {
            if (mutation.type === "attributes") {
              var displayStatus = $(".error-msg").css("display");
              if (displayStatus == "inline") {
                if (!$("body.live-chat-showing").length) {
                  $("body").addClass("live-chat-showing");
                  addLivechat();
                  observer.disconnect();
                }
              }
            }
          }
        };
        var observer = new MutationObserver(triggerLivechat);
        observer.observe(targetNode, config);
        clearInterval(waitEl);
      }
    }, 100);
    function addLivechat() {
      $("head").append(
        "<link rel='stylesheet' href='https://app.vouch.sg/widget3/css/app.css'>"
      );
      $("body").append("<div id='app'></div>");
      $("body").append(
        "<script src='https://app.vouch.sg/widget3/js/app.js'></script>"
      );
      $("#app").attr("apiKey", "2xg6gjl.2eb5sCty_pmtQJCMKi9_sKv94knkibqxCwr");
      $("#app").attr("widget-profile", "Web");
      $("#app").attr("channel", "Web");
      $(".main-nav").css("z-index", "998");
      $(".back-to-top").css("z-index", "998");
    }
  }
});
