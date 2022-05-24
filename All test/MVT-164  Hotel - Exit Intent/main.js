$(function () {
  $(".overlay-wrap").remove();
  addOverlay();
  $("html").mouseenter(function () {
    addOverlay();
  });
  function addOverlay() {
    var startDate = new Date(getQueryVariable("CheckinDate"));
    var losDay = getQueryVariable("LOS");
    var startTime = startDate.getTime();
    var checkoutTime = startTime + 1000 * 60 * 60 * 24 * losDay;
    //2021-08-08 ~ 2021-08-10
    var nonPeriodStart1 = new Date("2021-08-08").getTime();
    var nonPeriodEnd1 = new Date("2021-08-10").getTime();
    //2021-08-20 ~ 2021-08-22
    var nonPeriodStart2 = new Date("2021-08-20").getTime();
    var nonPeriodEnd2 = new Date("2021-08-22").getTime();
    //2021-12-28 ~ 2022-01-04
    var nonPeriodStart3 = new Date("2021-12-28").getTime();
    var nonPeriodEnd3 = new Date("2022-01-04").getTime();
    //2022-08-08 ~ 2022-08-10
    var nonPeriodStart4 = new Date("2022-08-08").getTime();
    var nonPeriodEnd4 = new Date("2022-08-10").getTime();
    //2022-09-20 ~ 2022-09-25
    var nonPeriodStart5 = new Date("2022-09-20").getTime();
    var nonPeriodEnd5 = new Date("2022-09-25").getTime();
    //2022-09-27 ~ 2022-10-02
    var nonPeriodStart6 = new Date("2022-09-27").getTime();
    var nonPeriodEnd6 = new Date("2022-10-02").getTime();
    //2022-12-28 ~ 2023-01-04
    var nonPeriodStart7 = new Date("2022-12-28").getTime();
    var nonPeriodEnd7 = new Date("2023-01-04").getTime();
    if (
      !(
        (startTime >= nonPeriodStart1 && startTime <= nonPeriodEnd1) ||
        (startTime < nonPeriodStart1 && checkoutTime > nonPeriodStart1) ||
        (startTime >= nonPeriodStart2 && startTime <= nonPeriodEnd2) ||
        (startTime < nonPeriodStart2 && checkoutTime > nonPeriodStart2) ||
        (startTime >= nonPeriodStart3 && startTime <= nonPeriodEnd3) ||
        (startTime < nonPeriodStart3 && checkoutTime > nonPeriodStart3) ||
        (startTime >= nonPeriodStart4 && startTime <= nonPeriodEnd4) ||
        (startTime < nonPeriodStart4 && checkoutTime > nonPeriodStart4) ||
        (startTime >= nonPeriodStart5 && startTime <= nonPeriodEnd5) ||
        (startTime < nonPeriodStart5 && checkoutTime > nonPeriodStart5) ||
        (startTime >= nonPeriodStart6 && startTime <= nonPeriodEnd6) ||
        (startTime < nonPeriodStart6 && checkoutTime > nonPeriodStart6) ||
        (startTime >= nonPeriodStart7 && startTime <= nonPeriodEnd7) ||
        (startTime < nonPeriodStart7 && checkoutTime > nonPeriodStart7)
      )
    ) {
      var notShow = getCookie("hotel-overlay-not-show");
      if (!$(".dy-hotel-overlay").length) {
        if (notShow != "yes") {
          $("body").addClass("dy-hotel-overlay");
          $("body").append(
            "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-164-Hotel-Exit-Intent/room_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> You're just one step away! Book now, pay later, and cancel for free.<br /><small >*Not applicable during blackout dates</small > </div> <div class='button-wrap'> <button class='link-btn'>Complete my reservation</button> </div> <div class='close-btn'></div> </div> </div>"
          );
          $(".close-btn").click(function () {
            $(".overlay-wrap").hide();
            setCookie("hotel-overlay-not-show", "yes");
          });
          $(".link-btn").click(function () {
            $(".overlay-wrap").hide();
          });
        }
      } else {
        var notShow = getCookie("hotel-overlay-not-show");
        if (notShow != "yes") {
          $(".overlay-wrap").show();
        }
      }
    }
  }
  function setCookie(name, value) {
    var Days = 365;
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
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return false;
  }
});
