$(function () {
  var url = window.location.href;
  var text = null;
  if (url.indexOf("zh.") > -1) {
    text = "美食外卖";
  } else if (url.indexOf("hk.") > -1) {
    text = "美食外帶";
  } else if (url.indexOf("jp.") > -1) {
    text = "グルメ・テイクアウト";
  } else if (url.indexOf("ko.") > -1) {
    text = "미식 메뉴 테이크아웃";
  } else if (url.indexOf("id.") > -1) {
    text = "Gourmet Takeaway";
  } else {
    text = "Gourmet Takeaway";
  }
  $(".btn:contains(" + text + ")").remove();
  $(".swiper-slide:contains(" + text + ")").remove();
});
