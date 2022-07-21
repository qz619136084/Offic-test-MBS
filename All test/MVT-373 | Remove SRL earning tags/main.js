$(function () {
  var url = window.location.href;
  if (
    url.indexOf("/restaurants/private-dining.html") > -1 ||
    url.indexOf("/shopping/guest-privileges.html") > -1
  ) {
    $("head").append("<style>.card-label{display:none !important}</style>");
  } else {
    $("head").append("<style>.promotion-card{display:none !important}</style>");
  }
});
