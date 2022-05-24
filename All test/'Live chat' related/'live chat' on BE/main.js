$(function () {
  console.log("error-->live chat");
  //check error
  //trigger live chat
  var errorVal = getCookie("BE-error");
  var errorArr = [
    "3300",
    "4000",
    "30001",
    "1001",
    "3228",
    "3213",
    "3214",
    "3211",
    "3212",
    "3210",
    "3209",
    "3208",
    "3207",
    "3206",
    "3224",
    "3225",
    "3226",
    "3227",
    "3220",
    "3221",
    "3222",
    "3223",
    "3218",
    "3217",
    "3219",
    "3200",
    "3201",
    "3202",
    "3203",
    "3204",
    "3205",
    "3003",
    "3002",
    "3005",
    "3004",
    "3006",
  ];
  if (errorVal == "yes") {
    console.log("Error occurs!!");
    addLivechat();
    setCookie("BE-error", "done");
  }
  $(document).ajaxComplete(function (e, testXHR, settings) {
    if (settings.url.indexOf("availableRooms") > -1) {
      var code = testXHR.responseJSON.code;
      var ttCode = testXHR.responseJSON.ttCode;
      if (code != "0000") {
        console.log("Something wrong");
        console.log("ttCode: " + ttCode);
        console.log("errorArr", errorArr);
        var ttCodeInArr = $.inArray(ttCode, errorArr);
        if (ttCodeInArr > -1) {
          console.log("error being tracked");
          addLivechat();
          setCookie("BE-error", "yes");
        } else {
          console.log("error not being tracked");
        }
      }
    }
  });
  function setCookie(name, value) {
    var Days = 1;
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
  function addLivechat() {
    $("head").append(
      "<link href='https://app.vouch.sg/widget3/css/app.css' rel='stylesheet' />"
    );
    $("body").append("<div id='app'></div>");
    $("body").append(
      "<script src='https://app.vouch.sg/widget3/js/app.js'></script>"
    );
    $("#app").attr("apiKey", "2xg6gjl.2eb5sCty_pmtQJCMKi9_sKv94knkibqxCwr");
    $("#app").attr("widget-profile", "Default");
    $(".main-nav").css("z-index", "998");
    $(".back-to-top").css("z-index", "998");
  }
});
