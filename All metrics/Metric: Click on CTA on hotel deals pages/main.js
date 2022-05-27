$(function () {
  DYO.waitForElement("a.btn.btn-primary", function () {
    $("a.btn.btn-primary:not(.dy-srl-component a)").click(function () {
      DY.API("event", {
        name: "Click on 'Book a Room' CTA on hotel deals pages",
        properties: {},
      });
    });
  });
});
