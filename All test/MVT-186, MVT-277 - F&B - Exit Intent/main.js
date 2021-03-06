$(function () {
  var overlayContent = [
    {
      restaurant: "black-tap",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/black-tap_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "bread-street-kitchen",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/bsk_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "cut",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/CUT - Bone in Rib Eye Steak - 600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "db-bistro-and-oyster-bar",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/db-bistro_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "koma-singapore",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/koma-interior_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "lavo",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/lavo_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "mott32",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/mott-32_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "renku-bar-and-lounge",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/home/restaurants/cafe/renku-lounge/renku_afternoon_high_tea-500x375.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "rise",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/rise_600x450.png' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "spago",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/spago_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "spago-bar-and-lounge",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/spago-cocktail_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
    {
      restaurant: "yardbird-southern-table-and-bar",
      content:
        "<div class='overlay-wrap'> <div class='hotel-overlay'> <div class='img-wrap'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/yardbird-chicken_600x450.jpg' alt='' style='width: 100%' /> </div> <div class='title-wrap'> Don't miss out! Book now for the best dining experience. </div> <div class='button-wrap'> <button class='link-btn'>Complete My Reservation</button> </div> <div class='close-btn'></div> </div> </div>",
    },
  ];
  var url = window.location.href;
  var content = null;
  if (
    url.indexOf("/restaurants/") > -1 &&
    url.indexOf("/reservation.html") > -1
  ) {
    for (let i = 0; i < overlayContent.length; i++) {
      var fitUrl = overlayContent[i].restaurant;
      if (url.indexOf(fitUrl) > -1) {
        content = overlayContent[i].content;
      }
    }
  }
  $(".overlay-wrap").remove();
  addOverlay(content);
  $("html").mouseenter(function () {
    addOverlay(content);
  });
});
function addOverlay(content) {
  var notShow = getCookie("fnb-overlay-not-show");
  if (!$(".dy-fnb-overlay").length) {
    if (notShow != "yes") {
      $("body").addClass("dy-fnb-overlay");
      $("body").append(content);
      $(".close-btn").click(function () {
        $(".overlay-wrap").hide();
        setCookie("fnb-overlay-not-show", "yes");
      });
      $(".link-btn").click(function () {
        $(".overlay-wrap").hide();
      });
    }
  } else {
    var notShow = getCookie("fnb-overlay-not-show");
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
