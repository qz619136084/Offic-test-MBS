$(function () {
  var url = window.location.href;
  var title = null;
  var content = null;
  if (url.indexOf("zh.") > -1) {
    title = "酒店翻新公告：";
    content =
      "<p>滨海湾金沙已开展装修翻新工程，将为宾客打造出无与伦比的全新体验。酒店1 号及 2 号 塔楼目前正常施工中，在此期间，工作日的上午 11:00 至下午 5:30、以及周末和公共节假日的下午 1:00 至 5:30 将存在噪音和间歇性的消防警报。我们将竭尽所能，采取相应措施，减少服务延迟，降低噪音影响，因此给您带来不便，我们深表歉意。</p>";
  } else if (url.indexOf("hk.") > -1) {
    title = "酒店翻新公告：";
    content =
      "<p>濱海灣金沙已啟動再投資計劃，為賓客打造無與倫比的全新體驗。酒店 2 號塔樓部分樓層的房間已率先開展翻新工程。翻新過後的房間將引領奢華新時代。更多資訊請持續關注！在此期間，我們會盡一切努力避免服務延遲，將噪音影響降至最低。對您造成不便，我們深表歉意。</p>";
  } else if (url.indexOf("jp.") > -1) {
    title = "ホテル改修工事のお知らせ:";
    content =
      "<p>マリーナベイ・サンズでは、お客様にこれまでにない新たなエクスペリエンスの提供を目指す再投資プログラムを始動いたしました。現在、ホテルタワー2の一部のフロアで客室の改修工事を実施しております。完工後は、新時代のラグジュアリーをお楽しみいただける予定です。詳細は順を追ってお知らせいたします。改修期間中は、サービスへの影響や騒音を最小限に抑えるよう、最善の配慮をもって取り組んでまいります。</p>";
  } else if (url.indexOf("ko.") > -1) {
    title = "호텔 리노베이션 안내:";
    content =
      "<p>마리나 베이 샌즈는 비교할 수 없는 새로운 경험을 고객에게 제공하기 위해 재투자 프로그램을 시작했습니다. 호텔 타워 2 일부 층의 객실부터 리노베이션 공사에 착수했습니다. 새단장이 완료되면 럭셔리의 새로운 시대를 보여드리게 될 것입니다. 자세한 세부 사항은 추후 안내할 예정이니 기대해 주세요! 이 기간 동안 잠재적인 서비스 지연과 소음을 최소화하기 위해 노력하고 있으며, 이로 인한 불편에 사전에 양해를 부탁드립니다.</p>";
  } else if (url.indexOf("id.") > -1) {
    title = "Pemberitahuan renovasi hotel:";
    content =
      "<p>Marina Bay Sands telah memulai program investasi ulang untuk memberikan pengalaman baru yang tak tertandingi bagi tamu kami. Pekerjaan renovasi telah dimulai di Hotel, dimulai dengan kamar di beberapa lantai Tower 2. Setelah selesai, perbaikan tersebut akan membawa Anda ke era kemewahan baru. Nantikan informasi selengkapnya pada tanggal berikutnya! Selama periode ini, kami melakukan upaya untuk meminimalkan kemungkinan penundaan layanan dan gangguan suara, dan kami memohon maaf sebelumnya atas ketidaknyamanan yang ditimbulkan.</p>";
  } else {
    $(".notice-announce-box .announcement-title strong").text(
      "COVID-19 Notice:"
    );
    title = "Hotel Refurbishment Notice:";
    content =
      "<p>Marina Bay Sands has embarked on a reinvestment programme to provide unparalleled new experiences for our guests. Renovation works are being carried out at Hotel Towers 1 and 2, with higher noise levels and periodic fire alarm testing during these times: 11am – 5.30pm (weekdays) and 1pm – 5.30pm (weekends and public holidays). We are making every effort to minimise potential service delays and noise disruptions, and apologise in advance for any inconvenience caused.</p>";
  }
  $(".notice-announce-box").before(
    "<div class='notice-announce-box' style='margin-bottom: -2rem'> <p class='announcement-title'> <img src='/content/dam/revamp/hotel/digital-concierge/maintenance-logo.svg' width='25' height='25' class='mr-1' /> <strong>" +
      title +
      "</strong> </p> <div class='col-12'> <div class='announcement-content'>" +
      content +
      "</div> </div> </div>"
  );
  //collapse function
  if (url.indexOf("/deals/rooms/show-and-stay-la-clique.html") == -1) {
    var summaryContent = null;
    var collapseButton = null;
    if (url.indexOf("zh.") > -1) {
      summaryContent =
        "<div class='notice-announce-box dy-collapsed-tip'> <p class='announcement-title'> <img src='/content/dam/revamp/SVG/icon-announcement.svg' width='25' height='25' class='mr-1' /> <strong>新冠疫情及酒店翻新公告：</strong> </p> <div class='col-12'> <div class='announcement-content'> <p> 鉴于新加坡目前新冠肺炎疫情形势，滨海湾金沙积极实行安全管理措施，确保正常运营。同时，酒店正在进行翻新工程，为宾客营造全新体验。 </p> </div> </div> </div>";
      collapseButton =
        "<div class='notice-announce-box' style='padding: 0 0 2rem 43px'> <a class='collapse-toggle collapsed' data-toggle='collapse' aria-expanded='true' > <span class='collapse-item-collapsed'>查看更多</span> <span class='collapse-item-show'>收起</span> <span class='icon-collapse-toggle'></span> </a> </div>";
    } else if (url.indexOf("hk.") > -1) {
      summaryContent =
        "<div class='notice-announce-box dy-collapsed-tip'> <p class='announcement-title'> <img src='/content/dam/revamp/SVG/icon-announcement.svg' width='25' height='25' class='mr-1' /> <strong>新冠疫情及酒店翻新公告：</strong> </p> <div class='col-12'> <div class='announcement-content'> <p> 鉴于新加坡目前新冠肺炎疫情形势，滨海湾金沙积极实行安全管理措施，確保正常运营。同时，酒店正在进行翻新工程，为宾客营造全新体验。 </p> </div> </div> </div>";
      collapseButton =
        "<div class='notice-announce-box' style='padding: 0 0 2rem 43px'> <a class='collapse-toggle collapsed' data-toggle='collapse' aria-expanded='true' > <span class='collapse-item-collapsed'>了解詳情</span> <span class='collapse-item-show'>收起</span> <span class='icon-collapse-toggle'></span> </a> </div>";
    } else if (url.indexOf("jp.") > -1) {
      summaryContent =
        "<div class='notice-announce-box dy-collapsed-tip'> <p class='announcement-title'> <img src='/content/dam/revamp/SVG/icon-announcement.svg' width='25' height='25' class='mr-1' /> <strong>新型コロナウイルス(COVID-19)とホテル改装工事のお知らせ：</strong> </p> <div class='col-12'> <div class='announcement-content'> <p> マリーナベイ・サンズはシンガポール政府による安全管理措置に沿って通常営業をしております。ホテルではお客様のエクスペリエンスの向上を目指す為、段階的な改修工事を行っております。 </p> </div> </div> </div>";
      collapseButton =
        "<div class='notice-announce-box' style='padding: 0 0 2rem 43px'> <a class='collapse-toggle collapsed' data-toggle='collapse' aria-expanded='true' > <span class='collapse-item-collapsed'>詳細</span> <span class='collapse-item-show'>一部表示</span> <span class='icon-collapse-toggle'></span> </a> </div>";
    } else if (url.indexOf("ko.") > -1) {
      summaryContent =
        "<div class='notice-announce-box dy-collapsed-tip'> <p class='announcement-title'> <img src='/content/dam/revamp/SVG/icon-announcement.svg' width='25' height='25' class='mr-1' /> <strong>코로나19 및 호텔 리노베이션 안내:</strong> </p> <div class='col-12'> <div class='announcement-content'> <p> 마리나 베이 샌즈에서는 싱가포르의 코로나19 상황을 고려하여 안전 관리 조치를 취하고 있습니다. 호텔에서는 또한 고객에게 새로운 경험을 제공하기 위해 현재 리노베이션 공사를 진행하고 있습니다. </p> </div> </div> </div>";
      collapseButton =
        "<div class='notice-announce-box' style='padding: 0 0 2rem 43px'> <a class='collapse-toggle collapsed' data-toggle='collapse' aria-expanded='true' > <span class='collapse-item-collapsed'>자세히 보기</span> <span class='collapse-item-show'>간단히 보기</span> <span class='icon-collapse-toggle'></span> </a> </div>";
    } else if (url.indexOf("id.") > -1) {
      summaryContent =
        "<div class='notice-announce-box dy-collapsed-tip'> <p class='announcement-title'> <img src='/content/dam/revamp/SVG/icon-announcement.svg' width='25' height='25' class='mr-1' /> <strong>Pemberitahuan COVID-19 dan Renovasi Hotel:</strong> </p> <div class='col-12'> <div class='announcement-content'> <p> Marina Bay Sands beroperasi dengan langkah-langkah manajemen aman sehubungan dengan situasi COVID-19 di Singapura. Hotel juga sedang direnovasi untuk menyediakan pengalaman baru bagi tamu. </p> </div> </div> </div>";
      collapseButton =
        "<div class='notice-announce-box' style='padding: 0 0 2rem 43px'> <a class='collapse-toggle collapsed' data-toggle='collapse' aria-expanded='true' > <span class='collapse-item-collapsed'>Baca selengkapnya</span> <span class='collapse-item-show'>Baca lebih sedikit</span> <span class='icon-collapse-toggle'></span> </a> </div>";
    } else {
      summaryContent =
        "<div class='notice-announce-box dy-collapsed-tip'> <p class='announcement-title'> <img src='/content/dam/revamp/SVG/icon-announcement.svg' width='25' height='25' class='mr-1' /> <strong>COVID-19 and Hotel Renovation Notice:</strong> </p> <div class='col-12'> <div class='announcement-content'> <p> Marina Bay Sands is operating with safe management measures in view of the COVID-19 situation in Singapore. The Hotel is also currently undergoing renovation works to provide new experiences for guests. </p> </div> </div> </div>";
      collapseButton =
        "<div class='notice-announce-box' style='padding: 0 0 2rem 43px'> <a class='collapse-toggle collapsed' data-toggle='collapse' aria-expanded='true' > <span class='collapse-item-collapsed'>Read more</span> <span class='collapse-item-show'>Read less</span> <span class='icon-collapse-toggle'></span> </a> </div>";
    }
    var collapseContent = $(".announcement-box .col-lg-12").html();
    $(".announcement-box .col-lg-12 .notice-announce-box").remove();
    $(".announcement-box .col-lg-12").append(summaryContent);
    $(".announcement-box .col-lg-12").append(
      "<div class='dy-collapsed-content'>" +
        collapseContent +
        "</div>" +
        collapseButton
    );
    setTimeout(function () {
      $(".notice-announce-box .collapse-toggle").unbind();
    }, 150);
  }
  $("body").on("click", ".notice-announce-box .collapse-toggle", function () {
    var container = $(this).parents(".announcement-box");
    if (container.find(".collapse-toggle.collapsed").length) {
      container.find(".dy-collapsed-content").slideDown(300);
      $(this).removeClass("collapsed");
      container.find(".dy-collapsed-tip").hide();
    } else {
      container.find(".dy-collapsed-content").slideUp(300);
      $(this).addClass("collapsed");
      container.find(".dy-collapsed-tip").show();
    }
  });
});
