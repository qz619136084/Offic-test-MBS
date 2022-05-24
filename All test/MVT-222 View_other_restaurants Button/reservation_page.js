window.checkJq07230910 = setInterval(function () {
  if (typeof $ != "undefined") {
    $(function () {
      var info = JSON.parse(getCookie("SRSearchInfo"));
      if (info != "none") {
        sessionStorage.setItem("SRSearchInfo", JSON.stringify(info));
        window.location.reload();
        setCookie("SRSearchInfo", "none");
      }
      function setCookie(name, value) {
        var Days = 1;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
      }
      function getCookie(c_name) {
        var cookieArr = document.cookie.split("; ");
        for (i = 0; i < cookieArr.length; i++) {
          var name = cookieArr[i].split("=")[0];
          var value = cookieArr[i].split("=")[1];
          if (name == c_name) {
            return value;
          }
        }
      }
    });
    clearInterval(window.checkJq07230910);
  }
}, 100);
