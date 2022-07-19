$(function () {
  var url = window.location.href;
  var msg = null;
  var specificMsg = null;
  if (url.indexOf("zh.") > -1) {
    msg = "因系统维护，金沙尊赏会员登录和注册功能暂不可用。请稍后再试。";
    specificMsg = "因系统维护，该服务暂不可用。请稍后再试";
  } else if (url.indexOf("hk.") > -1) {
    msg = "因系統維護，金沙尊賞會員登入和註冊功能暫不可用。請稍後再試。";
    specificMsg = "因系統維護，該服務暫不可用。請稍後再試。";
  } else if (url.indexOf("jp.") > -1) {
    msg =
      "サンズリワードのログインまたは新規登録の機能がシステムメンテナンスの為、一時ご利用頂けません。後ほどご確認ください。";
    specificMsg =
      "システムメンテナンスのため、このサービスは一時的にご利用いただけません。後日、後ほどご確認ください。";
  } else if (url.indexOf("ko.") > -1) {
    msg =
      "샌즈 리워드 로그인 및 신규 등록 기능이 시스템 유지 보수로 인해 일시 이용하실 수 없습니다. 나중에 확인하시기 바랍니다.";
    specificMsg =
      "이 서비스는 시스템 유지 보수로 인해 일시 이용하실 수 없습니다. 나중에 확인하시기 바랍니다.";
  } else if (url.indexOf("id.") > -1) {
    msg =
      "Fitur login/daftar Sands Rewards untuk sementara tidak tersedia karena perbaikan sistem. Silakan periksa kembali nanti.";
    specificMsg =
      "Layanan ini untuk sementara tidak tersedia karena perbaikan sistem. Silakan periksa kembali nanti.";
  } else {
    msg =
      "The Sands Rewards login/sign up feature is temporarily unavailable due to system maintenance. Please check again later.";
    specificMsg =
      "This service is temporarily unavailable due to system maintenance. Please check again later.";
  }
  if (url.indexOf("/reservation.html") > -1) {
    //reservation page
    DYO.waitForElementAsync(".memberCard-info").then(() => {
      $(".memberCard-info").prepend(
        "<p style='color:#333;font-weight:bold'><i>" + msg + "</i></p>"
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
  } else if (url.indexOf("/mooncakes-online-order.html") > -1) {
    //mooncakes page
    DYO.waitForElementAsync(".rewardMember .memberCard").then(() => {
      $(".rewardMember .memberCard").prepend(
        "<p style='color:#333;font-weight:bold;padding-left:15px'><i>" +
          msg +
          "</i></p>"
      );
      $("#memberCard-form .info-input").css("background-color", "#c5c5c5");
      $("#memberCard-form input")
        .attr("disabled", "disabled")
        .css("background-color", "#c5c5c5");
      $("#memberCard-form a:last").css({
        "pointer-events": "none",
        color: "#868686",
      });
      $("#memberCard-default-checked a").css({
        "pointer-events": "none",
        color: "#868686",
      });
      $(".sidebar-section .btn-secondary").css({
        "pointer-events": "none",
        color: "#868686",
        "border-color": "#868686",
      });
      $(".sidebar-section .btn-secondary").after(
        "<p style='color:#333;font-weight:bold;font-size:1rem;margin-top:0.5rem'><i>" +
          msg +
          "</i></p>"
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
      $(".memberBlock a.btn.btn-primary").css({
        "pointer-events": "none",
        color: "#868686",
        "border-color": "#ffeda9",
        "background-color": "#ffeda9",
      });
      $(".memberBlock a.btn.btn-secondary").css({
        "pointer-events": "none",
        color: "#868686",
        "border-color": "#868686",
      });
      $(".memberBlock p a").css({
        "pointer-events": "none",
        color: "#868686",
      });
      $(".memberBlock .col-md-4").prepend(
        "<p style='color:#333;font-weight:bold;font-size:0.8rem;margin-bottom:0.5rem'><i>" +
          msg +
          "</i></p>"
      );
    });
    if (url.indexOf("/gift-order-payment.html") > -1) {
      $("head").append("<style>#loyalty_birth_box{display: none}</style>");
    }
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
    if (url.indexOf("/gift-order-redemption.html") > -1) {
      DYO.waitForElementAsync(".redeem-btn-group .btn-primary").then(() => {
        $(".redeem-btn-group .btn-primary").css({
          "pointer-events": "none",
          color: "#868686",
          "border-color": "#ffeda9",
          "background-color": "#ffeda9",
        });
        $(".redeem-btn-group")
          .prepend(
            "<p style=' color: #333; font-weight: bold; font-size: 0.8rem; position: absolute; left: 0; top: -20px; ' > <i >" +
              specificMsg +
              "</i > </p>"
          )
          .css("position", "relative");
      });
    }
    if (url.indexOf("/ticket/payment.html") > -1) {
      DYO.waitForElementAsync("#loyalty_birth_box").then(() => {
        $("#loyalty_birth_box").hide();
      });
    }
  }
});
