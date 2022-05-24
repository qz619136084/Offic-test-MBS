document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelectorAll("button[name='add-to-cart']")[0];
  button.onclick = function () {
    DY.API("event", {
      name: "Add to Cart: Shopify",
      properties: {},
    });
  };
});
