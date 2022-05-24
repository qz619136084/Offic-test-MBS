(function () {
  var waitEl = setInterval(function () {
    var jqScript = null;
    var url = window.location.href;
    if (url.indexOf("/booking/") > -1) {
      jqScript = document.querySelector(
        "body>script[src='/static/marinabaysands/scriptlibs/js/common/jquery-3.5.1.min.js']"
      );
    } else if (url.indexOf("/hotel/rooms-suites") > -1) {
      jqScript = document.querySelector(
        "script[src='/static/jquery-1.11.1.min.js']"
      );
    } else {
      jqScript = document.querySelector(
        "body>script[src='/static/marinabaysands/scriptlibs/js/vendor-critical-libs.js']"
      );
    }
    if (jqScript != null) {
      createAndInsert(
        "//cdn-eu.dynamicyield.com/api/9876410/api_dynamic.js",
        jqScript
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
