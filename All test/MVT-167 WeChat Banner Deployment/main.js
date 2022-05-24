$(function () {
  var closeClicked = getCookie("wechat-banner-not-show");
  var url = window.location.href;
  if (closeClicked != "yes") {
    if (url.indexOf("zh.") > -1) {
      $("body").append(
        "<link rel='stylesheet' href='https://assets.sandsresortsmacao.cn/overlay/wechat_qr/overlay-1225.css' /> <div id='qr-promo-wrapper' style='display: block'> <div class='ctn-wrapper'> <div class='txt-wrapper'> <div id='btn-qr-promo-close' class='wechat-dy-close-btn'>✕</div> <div id='content-box'> <img id='wechat-qr' src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-167-WeCha-Banner/webbanner_macau.jpg' /> <div id='wechat-text'> <div id='wechat-text-white'>立即关注及绑定微信公众号</div> <div id='wechat-text-white' style='color: #ad8837'> 获取第一手优惠信息 </div> </div> </div> </div> </div> </div>"
      );
    } else if (url.indexOf("hk.") > -1) {
      $("body").append(
        "<link rel='stylesheet' href='https://assets.sandsresortsmacao.cn/overlay/wechat_qr/overlay-1225.css' /> <div id='qr-promo-wrapper' style='display: block'> <div class='ctn-wrapper'> <div class='txt-wrapper'> <div id='btn-qr-promo-close' class='wechat-dy-close-btn'>✕</div> <div id='content-box'> <img id='wechat-qr' src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-167-WeCha-Banner/webbanner_macau.jpg' /> <div id='wechat-text'> <div id='wechat-text-white'>立即關註及綁定微信公眾號</div> <div id='wechat-text-white' style='color: #ad8837'> 獲取第壹手優惠訊息！ </div> </div> </div> </div> </div> </div>"
      );
    }
  }
  $("#btn-qr-promo-close").click(function () {
    $("#qr-promo-wrapper").remove();
    setCookie("wechat-banner-not-show", "yes");
  });
  function setCookie(name, value) {
    var Days = 365;
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
