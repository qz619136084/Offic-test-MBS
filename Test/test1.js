function throttle(fn, delay) {
  var timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn();
    }, delay);
  };
}
function updateCalendar() {
  console.log("updating");
}
var calendar = document.querySelectorAll("#calendar")[0];
calendar.onscroll = throttle(updateCalendar, 200);
