$(function () {
  DYO.waitForElement(
    ".btn.btn-primary[data-toggle=bookroom]",
    function () {
      $(".btn.btn-primary[data-toggle=bookroom]").click(() => {
        DY.API("event", {
          name: "Click on navbar BOOK CTA on hotel deals pages",
          properties: {},
        });
      });
    },
    1,
    100,
    10
  );
});
