jQuery(function () {
  var waitEl = setInterval(function () {
    if (
      jQuery(".cart-item .description").length &&
      jQuery(".cart-item .description").text().trim() != ""
    ) {
      var text = jQuery(".cart-item .description").text().trim().toLowerCase();
      if (text.indexOf("artscience museum at marina bay sands") > -1) {
        DY.API("event", {
          name: "Purchase: ASM",
          properties: {},
        });
      }
      clearInterval(waitEl);
    }
  }, 100);
});
