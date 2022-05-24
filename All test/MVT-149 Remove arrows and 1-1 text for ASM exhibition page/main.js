$(function () {
  $(".zone-section .col-md-3.col-xs-6").click(function () {
    var id = $(this).attr("data-url");
    var ele = $(".asm_gallery_lightbox.section .lightbox-container" + id).eq(0);
    var total = ele
      .find(".swiper-pagination.swiper-pagination-fraction")
      .children(".swiper-pagination-total")
      .text();
    var tipsNum = ele
      .find(".labels-and-tips")
      .children("span")
      .children("i")
      .text();
    if (total == 1) {
      ele.find(".swiper-pagination.swiper-pagination-fraction").hide();
      ele.find(".swiper-button-disabled").hide();
    }
    if (tipsNum == 0) {
      ele.find(".labels-and-tips").hide();
    }
  });
});
