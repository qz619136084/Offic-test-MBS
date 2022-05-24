var SCROLL_EVENT_NAME = "${Event Name}"; // i.e: 'User Scrolled The Page to 50%'
var SCROLL_PERCENTAGE = parseInt("${Scroll Percentage}%") || 50;

var scrollEventHandler = debounce(function () {
  if (getScrollPercent() >= SCROLL_PERCENTAGE) {
    DY.API("event", {
      name: SCROLL_EVENT_NAME,
      properties: {},
    });
    window.removeEventListener("scroll", scrollEventHandler);
  }
}, 50);

window.addEventListener("scroll", scrollEventHandler);

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function getScrollPercent() {
  var h = document.documentElement;
  var b = document.body;
  var st = "scrollTop";
  var sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}
