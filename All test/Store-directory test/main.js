$(function () {
  $(".search-filters").bind("input propertychange", function () {
    if ($(this).val().toLowerCase().indexOf("herme") == 0) {
      $(this)
        .val("Hermè" + $(this).val().slice(5))
        .change();
    }
  });
});
