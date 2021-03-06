$(function () {
  var url = window.location.href;
  if (url.indexOf("zh.") > -1) {
    var checkFirst = setInterval(function () {
      if ($(".roomInfoBlock .row.py_10").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text").length) {
            $(".roomInfoBlock .row.py_10").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text sc'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />可进入无边泳池 </p>宾客需在抵达前1日进行无边泳池使用登记。抵达前3日将有邮件提醒。</div>"
            );
          }
        } else {
          if (!$(".infinityPool-text").length) {
            $(".gr-upgraded-text").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text sc'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />可进入无边泳池 </p>宾客需在抵达前1日进行无边泳池使用登记。抵达前3日将有邮件提醒。</div>"
            );
          }
        }
      }
    }, 500);
  } else if (url.indexOf("hk.") > -1) {
    var checkFirst = setInterval(function () {
      if ($(".roomInfoBlock .row.py_10").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text").length) {
            $(".roomInfoBlock .row.py_10").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text tc'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />可進入無邊際泳池 </p>賓客需在抵達前1日進行無邊泳池使用登記。抵達前3日將有郵件提醒。</div>"
            );
          }
        } else {
          if (!$(".infinityPool-text").length) {
            $(".gr-upgraded-text").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text tc'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />可進入無邊際泳池 </p>賓客需在抵達前1日進行無邊泳池使用登記。抵達前3日將有郵件提醒。</div>"
            );
          }
        }
      }
    }, 500);
  } else if (url.indexOf("jp.") > -1) {
    var checkFirst = setInterval(function () {
      if ($(".roomInfoBlock .row.py_10").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text").length) {
            $(".roomInfoBlock .row.py_10").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text ja'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />インフィニティプールのアクセスについて </p>ホテル到着の前日までに、インフィニティ・プールを利用するにあたってお客様情報を登録する必要があります。ホテル到着日の3日前にメールにてお知らせいたします。</div>"
            );
          }
        } else {
          if (!$(".infinityPool-text").length) {
            $(".gr-upgraded-text").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text ja'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />インフィニティプールのアクセスについて </p>ホテル到着の前日までに、インフィニティ・プールを利用するにあたってお客様情報を登録する必要があります。ホテル到着日の3日前にメールにてお知らせいたします。</div>"
            );
          }
        }
      }
    }, 500);
  } else if (url.indexOf("ko.") > -1) {
    var checkFirst = setInterval(function () {
      if ($(".roomInfoBlock .row.py_10").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text").length) {
            $(".roomInfoBlock .row.py_10").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text ko'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />인피니티풀 이용 포함 </p>호텔 도착 전날까지 인피니티풀을 이용하기 위해서 고객 정보를 등록할 필요가 있습니다. 호텔 도착 3일 전에 안내를 이메일로 보냅니다.</div>"
            );
          }
        } else {
          if (!$(".infinityPool-text").length) {
            $(".gr-upgraded-text").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text ko'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />인피니티풀 이용 포함 </p>호텔 도착 전날까지 인피니티풀을 이용하기 위해서 고객 정보를 등록할 필요가 있습니다. 호텔 도착 3일 전에 안내를 이메일로 보냅니다.</div>"
            );
          }
        }
      }
    }, 500);
  } else if (url.indexOf("id.") > -1) {
    var checkFirst = setInterval(function () {
      if ($(".roomInfoBlock .row.py_10").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text").length) {
            $(".roomInfoBlock .row.py_10").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text id'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />Termasuk akses ke Infinity Pool </p>Tamu wajib mendaftar untuk mendapatkan akses ke Infinity Pool dalam 1 hari sebelum kedatangan. Pengingat akan dikirim melalui email 3 hari sebelum kedatangan.</div>"
            );
          }
        } else {
          if (!$(".infinityPool-text").length) {
            $(".gr-upgraded-text").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text id'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />Termasuk akses ke Infinity Pool </p>Tamu wajib mendaftar untuk mendapatkan akses ke Infinity Pool dalam 1 hari sebelum kedatangan. Pengingat akan dikirim melalui email 3 hari sebelum kedatangan.</div>"
            );
          }
        }
      }
    }, 500);
  } else {
    var checkFirst = setInterval(function () {
      if ($(".roomInfoBlock .row.py_10").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text").length) {
            $(".roomInfoBlock .row.py_10").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text en'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />Access to the Infinity Pool</p>Guests are required to register for access to the Infinity Pool within 1 day prior to arrival. A reminder will be sent via email 3 days  before arrival.</div>"
            );
          }
        } else {
          if (!$(".infinityPool-text").length) {
            $(".gr-upgraded-text").after(
              "<div class='infinityPool-more-text'> <p class='infinityPool-text en'> <img src='/content/dam/singapore/marinabaysands/master/main/images/swimming-pool.svg' style='width: 23px; height: 23px; margin-right: 5px' />Access to the Infinity Pool</p>Guests are required to register for access to the Infinity Pool within 1 day prior to arrival. A reminder will be sent via email 3 days  before arrival.</div>"
            );
          }
        }
      }
    }, 500);
  }
});
