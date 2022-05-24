jQuery(function () {
  var isAttraction = 0;
  var isWork = 0;
  var url = window.location.href;
  var content = null;
  if (
    document.referrer.indexOf("cskypark2018") > -1 ||
    document.referrer.indexOf("dlc2020") > -1 ||
    document.referrer.indexOf("sampan2019") > -1
  ) {
    isAttraction = 1;
  }
  var overlayContent = [
    {
      title: "skypark",
      urlKeyWord: "cskypark2018",
      content:
        "<div class='overlay-wrap'> <div class='attractions-overlay'> <div class='img-wrap'> <img src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-192-Exit-Intent-Attractions/SkyPark_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Wait, you're just one step away from viewing our stunning cityscape with a birds-eye view! </div> <div class='button-wrap'> <button class='link-btn'>Buy Ticket</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      title: "digital",
      urlKeyWord: "dlc2020",
      content:
        "<div class='overlay-wrap'> <div class='attractions-overlay'> <div class='img-wrap'> <img src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-192-Exit-Intent-Attractions/DLC_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Wait, you're just one step away from immersing into an illuminating world of art and lights! </div> <div class='button-wrap'><button class='link-btn'>Buy Ticket</button></div> <div class='close-btn'></div> </div> </div>",
    },
    {
      title: "sampan",
      urlKeyWord: "sampan2019",
      content:
        "<div class='overlay-wrap'> <div class='attractions-overlay'> <div class='img-wrap'> <img src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-192-Exit-Intent-Attractions/Sampan_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Wait, you're just one step away from cruising on a beautiful sampan boat to see the impressive Rain Oculus. </div> <div class='button-wrap'><button class='link-btn'>Buy Ticket</button></div> <div class='close-btn'></div> </div> </div>",
    },
  ];
  if (url.indexOf("/mbs/confirm/shoppingcart") == -1) {
    for (let i = 0; i < overlayContent.length; i++) {
      var fitUrl = overlayContent[i].urlKeyWord;
      if (url.indexOf(fitUrl) > -1) {
        content = overlayContent[i].content;
      }
    }
    isWork = 1;
  } else {
    if (isAttraction) {
      for (let i = 0; i < overlayContent.length; i++) {
        var fitWords = overlayContent[i].title;
        var websiteWords = jQuery(".description").text().trim().toLowerCase();
        if (websiteWords.indexOf(fitWords) > -1) {
          content = overlayContent[i].content;
        }
      }
      isWork = 1;
    }
  }
  if (isWork) {
    jQuery(".overlay-wrap").remove();
    addOverlay(content);
    jQuery("html").mouseenter(function () {
      addOverlay(content);
    });
  }
  function addOverlay(content) {
    var notShow = getCookie("attractions-overlay-not-show");
    if (!jQuery(".dy-attractions-overlay").length) {
      if (notShow != "yes") {
        jQuery("body").addClass("dy-attractions-overlay");
        jQuery("body").append(content);
        jQuery(".close-btn").click(function () {
          jQuery(".overlay-wrap").hide();
          setCookie("attractions-overlay-not-show", "yes");
        });
        jQuery(".link-btn").click(function () {
          jQuery(".overlay-wrap").hide();
        });
      }
    } else {
      var notShow = getCookie("attractions-overlay-not-show");
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
