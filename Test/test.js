$(function () {
  DYO.waitForElementAsync(".contact-note").then(() => {
    $(".space-between:has(.contact-note)").hide();
  });
});
