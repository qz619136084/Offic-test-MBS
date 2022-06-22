$(function () {
  clearInterval(window.checkUrl12071529);
  var url = window.location.href;
  window.checkUrl12071529 = setInterval(function () {
    if (url.indexOf("locale=en") > -1) {
      $(".infinityPool-text:not(.en)").closest("div").remove();
      if ($(".info .py-10:eq(0)").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text.en").length) {
            $(".info .py-10:eq(0)").after(
              "<div> <p class='infinityPool-text en'>Inclusive of access to the Infinity Pool</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>Upon room reservation confirmation, guests are required to book their check-in time slot and pool session via SMS. A notification will be sent via SMS/email within 24 hours of your arrival date to book a preferred time slot from 9am to 5:30pm. Outside of these hours, please approach the front desk for assistance. Please note that access to the Infinity pool is limited to <b>one hour per room, per day</b>. Our pool sessions are limited, we encourage guests to reserve early to secure a pool session. </p> </div>"
            );
          }
        } else {
          if (!$(".infinityPool-text.en").length) {
            $(".gr-upgraded-text").after(
              "<div> <p class='infinityPool-text en'>Inclusive of access to the Infinity Pool</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>Upon room reservation confirmation, guests are required to book their check-in time slot and pool session via SMS. A notification will be sent via SMS/email within 24 hours of your arrival date to book a preferred time slot from 9am to 5:30pm. Outside of these hours, please approach the front desk for assistance. Please note that access to the Infinity pool is limited to <b>one hour per room, per day</b>. Our pool sessions are limited, we encourage guests to reserve early to secure a pool session. </p> </div>"
            );
          }
        }
      }
    } else if (url.indexOf("locale=zh-CN") > -1) {
      $(".infinityPool-text:not(.sc)").closest("div").remove();
      if ($(".info .py-10:eq(0)").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text.sc").length) {
            $(".info .py-10:eq(0)").after(
              "<div> <p class='infinityPool-text sc'>可进入无边泳池</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>宾客需在抵达前1日进行无边泳池使用登记。抵达前3日将有邮件提醒。</p> </div>"
            );
          }
        } else {
          if (!$(".infinityPool-text.sc").length) {
            $(".gr-upgraded-text").after(
              "<div> <p class='infinityPool-text sc'>可进入无边泳池</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>宾客需在抵达前1日进行无边泳池使用登记。抵达前3日将有邮件提醒。</p> </div>"
            );
          }
        }
      }
    } else if (url.indexOf("locale=zh-TW") > -1) {
      $(".infinityPool-text:not(.tc)").closest("div").remove();
      if ($(".info .py-10:eq(0)").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text.tc").length) {
            $(".info .py-10:eq(0)").after(
              "<div> <p class='infinityPool-text tc'>可進入無邊際泳池</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>賓客需在抵達前1日進行無邊泳池使用登記。抵達前3日將有郵件提醒。</p> </div>"
            );
          }
        } else {
          if (!$(".infinityPool-text.tc").length) {
            $(".gr-upgraded-text").after(
              "<div> <p class='infinityPool-text tc'>可進入無邊際泳池</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>賓客需在抵達前1日進行無邊泳池使用登記。抵達前3日將有郵件提醒。</p> </div>"
            );
          }
        }
      }
    } else if (url.indexOf("locale=ja") > -1) {
      $(".infinityPool-text:not(.ja)").closest("div").remove();
      if ($(".info .py-10:eq(0)").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text.ja").length) {
            $(".info .py-10:eq(0)").after(
              "<div> <p class='infinityPool-text ja'>インフィニティプールのアクセスについて</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>ホテル到着の前日までに、インフィニティ・プールを利用するにあたってお客様情報を登録する必要があります。ホテル到着日の3日前にメールにてお知らせいたします。</p> </div>"
            );
          }
        } else {
          if (!$(".infinityPool-text.ja").length) {
            $(".gr-upgraded-text").after(
              "<div> <p class='infinityPool-text ja'>インフィニティプールのアクセスについて</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>ホテル到着の前日までに、インフィニティ・プールを利用するにあたってお客様情報を登録する必要があります。ホテル到着日の3日前にメールにてお知らせいたします。</p> </div>"
            );
          }
        }
      }
    } else if (url.indexOf("locale=ko") > -1) {
      $(".infinityPool-text:not(.ko)").closest("div").remove();
      if ($(".info .py-10:eq(0)").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text.ko").length) {
            $(".info .py-10:eq(0)").after(
              "<div> <p class='infinityPool-text ko'>인피니티풀 이용 포함</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>호텔 도착 전날까지 인피니티풀을 이용하기 위해서 고객 정보를 등록할 필요가 있습니다. 호텔 도착 3일 전에 안내를 이메일로 보냅니다.</p> </div>"
            );
          }
        } else {
          if (!$(".infinityPool-text.ko").length) {
            $(".gr-upgraded-text").after(
              "<div> <p class='infinityPool-text ko'>인피니티풀 이용 포함</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>호텔 도착 전날까지 인피니티풀을 이용하기 위해서 고객 정보를 등록할 필요가 있습니다. 호텔 도착 3일 전에 안내를 이메일로 보냅니다.</p> </div>"
            );
          }
        }
      }
    } else if (url.indexOf("locale=id") > -1) {
      $(".infinityPool-text:not(.id)").closest("div").remove();
      if ($(".info .py-10:eq(0)").length) {
        if (!$(".gr-upgraded-text").length) {
          if (!$(".infinityPool-text.id").length) {
            $(".info .py-10:eq(0)").after(
              "<div> <p class='infinityPool-text id'>Termasuk akses ke Infinity Pool</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>Tamu wajib mendaftar untuk mendapatkan akses ke Infinity Pool dalam 1 hari sebelum kedatangan. Pengingat akan dikirim melalui email 3 hari sebelum kedatangan.</p> </div>"
            );
          }
        } else {
          if (!$(".infinityPool-text.id").length) {
            $(".gr-upgraded-text").after(
              "<div> <p class='infinityPool-text id'>Termasuk akses ke Infinity Pool</p> <p class='infinityPool-more-text'> <span class='info-btn'>i</span>Tamu wajib mendaftar untuk mendapatkan akses ke Infinity Pool dalam 1 hari sebelum kedatangan. Pengingat akan dikirim melalui email 3 hari sebelum kedatangan.</p> </div>"
            );
          }
        }
      }
    }
  }, 50);
});
