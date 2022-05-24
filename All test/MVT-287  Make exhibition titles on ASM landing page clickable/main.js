$(function () {
  DYO.waitForElement(
    ".gallery_container .multi-column-body li .content_box",
    function () {
      $(".gallery_container .multi-column-body li .content_box").each(
        function () {
          var href = $(this).find("a.textlink").attr("href");
          var title = $(this).find(".card-body h5");
          title.addClass("dy-asm-link").click(function () {
            window.location.href = href;
          });
        }
      );
    }
  );
});
