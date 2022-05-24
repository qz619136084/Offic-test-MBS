$(function () {
  var url = window.location.href;
  var title = null;
  var content = null;
  if (url.indexOf("zh.") > -1) {
    title = "奢享客房优惠";
    content =
      "享受价值新币 340 元的每日精致餐饮、奢华 SPA 和更多精彩活动。此外，还可享受优享会员升级福利。";
  } else if (url.indexOf("hk.") > -1) {
    title = "奢享客房優惠";
    content =
      "享受價值新幣 340 元的每日精緻餐飲、奢華 SPA 和更多精彩活動。此外，還可享受優享會員升級福利。";
  }
  $(".room_offer_container+.offers.section .section-content .card:eq(0)").attr(
    "href",
    "/deals/rooms/indulgence-package.html"
  );
  $(
    ".room_offer_container+.offers.section .section-content .card:eq(0) img"
  ).attr({
    src: "/content/dam/revamp/offers/2021/may/indulgence-package-600x450.jpg",
    "data-src":
      "/content/dam/revamp/offers/2021/may/indulgence-package-600x450.jpg",
  });
  $(
    ".room_offer_container+.offers.section .section-content .card:eq(0) title"
  ).text(title);
  $(
    ".room_offer_container+.offers.section .section-content .card:eq(0) .card-text"
  ).text(content);
});
