$(function () {
  var url = window.location.href;
  var html = null;
  if (url.indexOf("www.") > -1) {
    html =
      "<div><p class='upgrade-text'>This is your room type after the free upgrade</p></div>";
  } else if (url.indexOf("zh.") > -1) {
    html = "<div><p class='upgrade-text'>此房型为免费升级后的房型</p></div>";
  } else if (url.indexOf("hk.") > -1) {
    html = "<div><p class='upgrade-text'>此房型為免費升級后的房型</p></div>";
  } else if (url.indexOf("jp.") > -1) {
    html =
      "<div><p class='upgrade-text'>無料アップグレード後の客室タイプはこちらです。</p></div>";
  } else if (url.indexOf("ko.") > -1) {
    html =
      "<div><p class='upgrade-text'>무료 업그레이드가 적용된 객실 타입입니다</p></div>";
  } else if (url.indexOf("id.") > -1) {
    html =
      "<div><p class='upgrade-text'>Inilah jenis kamar Anda setelah peningkatan gratis</p></div>";
  }
  $(".card-box-horizontal .card-body").each(function () {
    $(this).find("p:eq(0)").after(html);
  });
});
