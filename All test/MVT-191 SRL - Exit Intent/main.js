$(function () {
  $(".overlay-wrap").remove();
  addOverlay();
  $("html").mouseenter(function () {
    addOverlay();
  });
  function addOverlay() {
    var notShow = getCookie("srl-overlay-not-show");
    if (!$(".dy-srl-overlay").length) {
      if (notShow != "yes") {
        $("body").addClass("dy-srl-overlay");
        $("body").append(
          "<div class='overlay-wrap'> <div class='srl-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-191-SRL-Exit-Intent/SRL_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don’t let your spending go to waste<br /><small style='display: inline-block; line-height: 1.5; margin: 5px 0' >Join for free! Accumulate Reward Dollars and use them to offset your stay or when you dine and shop.</small > </div> <div class='button-wrap'> <button class='link-btn'>Complete your application</button> </div> <div class='close-btn'></div> </div> </div>"
        );
        $(".close-btn").click(function () {
          $(".overlay-wrap").hide();
          setCookie("srl-overlay-not-show", "yes");
        });
        $(".link-btn").click(function () {
          $(".overlay-wrap").hide();
        });
      }
    } else {
      var notShow = getCookie("srl-overlay-not-show");
      if (notShow != "yes") {
        $(".overlay-wrap").show();
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
});
