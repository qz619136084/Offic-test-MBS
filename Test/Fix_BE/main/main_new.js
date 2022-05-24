(function () {
  var waitEl = setInterval(function () {
    var jqScript_1 = document.querySelector(
      "body>script[src='/static/marinabaysands/scriptlibs/js/common/jquery-3.5.1.min.js']"
    );
    var jqScript_2 = document.querySelector(
      "script[src='/static/jquery-1.11.1.min.js']"
    );
    var jqScript_3 = document.querySelector(
      "body>script[src='/static/marinabaysands/scriptlibs/js/vendor-critical-libs.js']"
    );
    if (jqScript_1 != null || jqScript_2 != null || jqScript_3 != null) {
      var toUse = null;
      if (jqScript_1 != null) {
        toUse = jqScript_1;
      } else if (jqScript_2 != null) {
        toUse = jqScript_2;
      } else {
        toUse = jqScript_3;
      }
      createAndInsert(
        "//cdn-eu.dynamicyield.com/api/9876410/api_dynamic.js",
        toUse
      );
      var dyScript = document.querySelector(
        "script[src='//cdn-eu.dynamicyield.com/api/9876410/api_dynamic.js']"
      );
      createAndInsert(
        "//cdn-eu.dynamicyield.com/api/9876410/api_static.js",
        dyScript
      );
      function insertAfter(newElement, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild == targetElement) {
          parent.appendChild(newElement);
        } else {
          parent.insertBefore(newElement, targetElement.nextSibling);
        }
      }
      function createAndInsert(src, targetElement) {
        var newElement = document.createElement("script");
        (newElement.src = src),
          (newElement.type = "text/javascript"),
          insertAfter(newElement, targetElement);
      }
      clearInterval(waitEl);
    }
  }, 100);
})();
