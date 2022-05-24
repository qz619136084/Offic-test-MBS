$(function () {
  var url = window.location.href;
  if (url.indexOf("www.") > -1) {
    var editTimeInfo = setInterval(function () {
      $(".listing-content-item:not(.dy-updated)").each(function () {
        var name = $.trim($(this).find(".card-title").text());
        if (name == "Awfully Chocolate") {
          var card_footer = $(this).find(".card-footer");
          card_footer.children("p").remove();
          card_footer.append(
            "<p>Check <a href='https://www.awfullychocolate.com/content/awfully-chocolate-mbs.html'>here</a> for updated timings</p>"
          );
        }
        $(this).addClass("dy-updated");
      });
    }, 100);
  } else if (url.indexOf("zh.") > -1) {
    var editTimeInfo = setInterval(function () {
      $(".listing-content-item:not(.dy-updated)").each(function () {
        var name = $.trim($(this).find(".card-title").text());
        if (name == "Awfully Chocolate") {
          var card_footer = $(this).find(".card-footer");
          card_footer.children("p").remove();
          card_footer.append(
            "<p>最新营业时间请<a href='https://www.awfullychocolate.com/content/awfully-chocolate-mbs.html'>点此</a>查看</p>"
          );
        }
        $(this).addClass("dy-updated");
      });
    }, 100);
  } else if (url.indexOf("hk.") > -1) {
    var editTimeInfo = setInterval(function () {
      $(".listing-content-item:not(.dy-updated)").each(function () {
        var name = $.trim($(this).find(".card-title").text());
        if (name == "Awfully Chocolate") {
          var card_footer = $(this).find(".card-footer");
          card_footer.children("p").remove();
          card_footer.append(
            "<p>最新營業時間請<a href='https://www.awfullychocolate.com/content/awfully-chocolate-mbs.html'>點此</a>查看</p>"
          );
        }
        $(this).addClass("dy-updated");
      });
    }, 100);
  } else if (url.indexOf("jp.") > -1) {
    var editTimeInfo = setInterval(function () {
      $(".listing-content-item:not(.dy-updated)").each(function () {
        var name = $.trim($(this).find(".card-title").text());
        if (name == "Awfully Chocolate") {
          var card_footer = $(this).find(".card-footer");
          card_footer.children("p").remove();
          card_footer.append(
            "<p>営業時間は<a href='https://www.awfullychocolate.com/content/awfully-chocolate-mbs.html'>こちら</a>から確認出来ます。</p>"
          );
        }
        $(this).addClass("dy-updated");
      });
    }, 100);
  } else if (url.indexOf("ko.") > -1) {
    var editTimeInfo = setInterval(function () {
      $(".listing-content-item:not(.dy-updated)").each(function () {
        var name = $.trim($(this).find(".card-title").text());
        if (name == "Awfully Chocolate") {
          var card_footer = $(this).find(".card-footer");
          card_footer.children("p").remove();
          card_footer.append(
            "<p><a href='https://www.awfullychocolate.com/content/awfully-chocolate-mbs.html'>여기</a>를 클릭하여 변경된 시간을 확인하세요</p>"
          );
        }
        $(this).addClass("dy-updated");
      });
    }, 100);
  } else if (url.indexOf("id.") > -1) {
    var editTimeInfo = setInterval(function () {
      $(".listing-content-item:not(.dy-updated)").each(function () {
        var name = $.trim($(this).find(".card-title").text());
        if (name == "Awfully Chocolate") {
          var card_footer = $(this).find(".card-footer");
          card_footer.children("p").remove();
          card_footer.append(
            "<p>Klik <a href='https://www.awfullychocolate.com/content/awfully-chocolate-mbs.html'>di sini</a> untuk jam operasi yang diperbarui</p>"
          );
        }
        $(this).addClass("dy-updated");
      });
    }, 100);
  }
});
