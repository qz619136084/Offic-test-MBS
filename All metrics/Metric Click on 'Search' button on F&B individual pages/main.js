$(function () {
  $("#avail_search_btn").click(function () {
    DY.API("event", {
      name: "*Click on 'Search' button (F&B page)",
      properties: {},
    });
  });
});
