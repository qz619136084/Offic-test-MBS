$(function () {
    DYO.waitForElement(
      ".btn.btn-primary[data-toggle=bookroom]",
      function () {
        $(".btn.btn-primary[data-toggle=bookroom]").click(() => {
          DY.API("event", {
            name: "Click on BOOK CTA (navBar + page) on hotel deals pages",
            properties: {},
          });
        });
      },
      1,
      100,
      10
    );
    DYO.waitForElement(
      "a.btn.btn-primary",
      function () {
        $("a.btn.btn-primary:not(.dy-srl-component a)").click(function () {
          DY.API("event", {
            name: "Click on BOOK CTA (navBar + page) on hotel deals pages",
            properties: {},
          });
        });
      },
      1,
      100,
      10
    );
  });
  