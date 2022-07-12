$(function () {
  var url = window.location.href;
  if (url.indexOf("/reservation.html") > -1) {
    //reservation page
    DYO.waitForElementAsync(".memberCard-info").then(() => {
      $(".memberCard-info").prepend(
        "<p style='color:#333;font-weight:bold'><i>The Sands Rewards login/sign up feature is temporarily unavailable due to system maintenance. Please check again later.</i></p>"
      );
      $(".memberCard-info input")
        .attr("disabled", "disabled")
        .css("background-color", "#c5c5c5");
      $(".memberCard-info .info-input").css("background-color", "#c5c5c5");
      $(".memberCard-info button").addClass("disabled").css({
        "pointer-events": "none",
        color: "#868686",
        "border-color": "#868686",
      });
      $(".memberCard-info a:not(#membershipIdTips)").css({
        opacity: 0.65,
        "pointer-events": "none",
      });
      $("#loyalty_birth_box").hide();
    });
  } else if (
    url.indexOf("/offers/restaurants/mooncakes-online-order.html") > -1
  ) {
    //mooncakes page
    DYO.waitForElementAsync(".rewardMember .memberCard").then(() => {
      $(".rewardMember .memberCard").prepend(
        "<p style='color:#333;font-weight:bold;padding-left:15px'><i>The Sands Rewards login/sign up feature is temporarily unavailable due to system maintenance. Please check again later.</i></p>"
      );
      $("#memberCard-form .info-input").css("background-color", "#c5c5c5");
      $("#memberCard-form input")
        .attr("disabled", "disabled")
        .css("background-color", "#c5c5c5");
      $(".sidebar-section .btn-secondary").css({
        "pointer-events": "none",
        color: "#868686",
        "border-color": "#868686",
      });
      $(".sidebar-section .btn-secondary").after(
        "<p style='color:#333;font-weight:bold;font-size:1rem;margin-top:0.5rem'><i>The Sands Rewards login/sign up feature is temporarily unavailable due to system maintenance. Please check again later.</i></p>"
      );
    });
  } else if (
    url.indexOf("/ticket/search.html") > -1 ||
    url.indexOf("/ticket/payment.html") > -1 ||
    url.indexOf("/museum/artscience-friends-order.html") > -1 ||
    url.indexOf("/museum/artscience-friends-order/gift-order-payment.html") >
      -1 ||
    url.indexOf("/museum/artscience-friends-order/gift-order-redemption.html") >
      -1
  ) {
    //museum related page
    DYO.waitForElementAsync(".memberBlock input").then(() => {
      $(".memberBlock input")
        .attr("disabled", "disabled")
        .css("background-color", "#c5c5c5");
      $(".memberBlock a.btn").css({
        "pointer-events": "none",
        color: "#868686",
        "border-color": "#ffeda9",
        "background-color": "#ffeda9",
      });
      $(".memberBlock .col-md-4").prepend(
        "<p style='color:#333;font-weight:bold;font-size:0.8rem;margin-bottom:0.5rem'><i>The Sands Rewards login/sign up feature is temporarily unavailable due to system maintenance. Please check again later.</i></p>"
      );
    });
    if (url.indexOf("/museum/artscience-friends-order.html") > -1) {
      DYO.waitForElementAsync(".modal-body .c-btn .btn-primary").then(() => {
        $(".modal-body .c-btn .btn-primary").css({
          "pointer-events": "none",
          color: "#868686",
          "border-color": "#ffeda9",
          "background-color": "#ffeda9",
        });
      });
    }
  }
});
