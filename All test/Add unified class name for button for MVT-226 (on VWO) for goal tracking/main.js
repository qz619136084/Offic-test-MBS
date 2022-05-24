$(function () {
  var url = window.location.href;
  if (url.indexOf("/gourmet-takeaway.html") > -1) {
    $("a:contains(ORDER ONLINE NOW)").addClass("vwo-order-button");
    $("a:contains(Order Online Now)").addClass("vwo-order-button");
    $("a:contains(View restaurant)").addClass("vwo-restaurants-button");
  } else if (url.indexOf("/gourmet-takeaway-1.html") > -1) {
    $("a:contains(Order Online Now)").addClass("vwo-order-button");
    $("a:contains(View restaurant)").addClass("vwo-restaurants-button");
  } else if (url.indexOf("/gourmet-takeaway-2.html") > -1) {
    $("button:contains(Order Online Now)").addClass("vwo-order-button");
    $("p a:contains(View restaurant)").addClass("vwo-restaurants-button");
  }
});
