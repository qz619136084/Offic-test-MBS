jQuery(function () {
  var url = window.location.href;
  var isAsm = document.referrer.indexOf("/asm");
  var isWork = 0;
  if (url.indexOf("/mbs/confirm/shoppingcart") == -1) {
    isWork = 1;
  } else {
    if (isAsm > -1) {
      isWork = 1;
    }
  }
  if (isWork) {
    var content =
      "<div class='overlay-wrap'> <div class='museum-overlay'> <div class='img-wrap'> <img src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-193-Exit-Intent-Museum/ASM Night View_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Wait, you're just one step away from journeying into a world of art, science, technology and culture! </div> <div class='button-wrap'><button class='link-btn'>Book Now</button></div> <div class='close-btn'></div> </div> </div>";
    jQuery(".overlay-wrap").remove();
    addOverlay(content);
    jQuery("html").mouseenter(function () {
      addOverlay(content);
    });
  }
  function addOverlay(content) {
    var notShow = getCookie("museum-overlay-not-show");
    if (!jQuery(".dy-museum-overlay").length) {
      if (notShow != "yes") {
        jQuery("body").addClass("dy-museum-overlay");
        jQuery("body").append(content);
        jQuery(".close-btn").click(function () {
          jQuery(".overlay-wrap").hide();
          setCookie("museum-overlay-not-show", "yes");
        });
        jQuery(".link-btn").click(function () {
          jQuery(".overlay-wrap").hide();
        });
      }
    } else {
      var notShow = getCookie("museum-overlay-not-show");
      if (notShow != "yes") {
        jQuery(".overlay-wrap").show();
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
