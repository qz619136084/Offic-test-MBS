$(function () {
  var hasInteracted = 0;
  $(".form-group input").change(function () {
    if (hasInteracted == 0) {
      DY.API("event", {
        name: "*Users interacted with SRL form",
        properties: {},
      });
    }
    hasInteracted = 1;
  });
});
