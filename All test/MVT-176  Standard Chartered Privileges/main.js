$(function () {
  var titleOfFirstCard = $.trim(
    $(".offer-slider .swiper-slide:eq(0) .card-title").text()
  );
  if (titleOfFirstCard.indexOf("Standard Chartered") == -1) {
    var targetCard = $(".swiper-slide:contains(Standard Chartered)");
    var targetWrap = targetCard.closest(".swiper-wrapper");
    var html = targetCard.prop("outerHTML");
    targetCard.remove();
    targetWrap.children(".swiper-slide").eq(0).before(html);
  }
});
