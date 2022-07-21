$(function () {
  var url = window.location.href;
  var title = null;
  var content = null;
  if (url.indexOf("zh.") > -1) {
    title = "酒店翻新公告：";
    content =
      "<p> 滨海湾金沙已开展装修翻新工程，将为宾客打造出无与伦比的全新体验。酒店 1 号和 2 号塔楼目前正在施工，以下时段或会有噪音和间歇性消防警报测试： </p> <ul> <li>周一至周五：上午 10:00 至中午 12:00 和下午 2:00 至晚上 6:30</li> <li>周末和公共节假日：下午 2:00 至 6:00</li> </ul> <p> 我们将竭尽所能，采取相应措施，减少服务延迟，降低噪音影响，因此给您带来不便，我们深表歉意。 </p>";
  } else if (url.indexOf("hk.") > -1) {
    title = "酒店翻新公告：";
    content =
      "<p> 濱海灣金沙已開展裝修翻新工程，將為賓客打造出無與倫比的全新體驗。酒店 1 號和 2 號塔樓目前正在施工，以下時段或會有噪音和間歇性火警警報測試： </p> <ul> <li>週一至週五：上午 10:00 至中午 12:00 和下午 2:00 至晚上 6:30</li> <li>週末和公衆假期：下午 2:00 至 6:00</li> </ul> <p> 我們會盡一切努力避免服務延遲，將噪音影響降至最低。對您造成不便，我們深表歉意。 </p>";
  } else if (url.indexOf("jp.") > -1) {
    title = "ホテル改修工事のお知らせ:";
    content =
      "<p> マリーナベイ・サンズでは、お客様にこれまでにない新たなエクスペリエンスの提供を目指す再投資プログラムを始動いたしました。現在、ホテルタワー1と2では改修工事が行われており、下記の時間帯は騒音が大きくなり、定期的に火災報知器のテストが行われます。 </p> <ul> <li>月～金:午前10時から正午、午後2時から午後6時30分</li> <li>週末、祝日:午後2時から午後6時</li> </ul> <p> サービスへの影響や騒音を最小限に抑えるよう、最善の配慮をもって取り組んでまいります。 </p>";
  } else if (url.indexOf("ko.") > -1) {
    title = "호텔 리노베이션 안내:";
    content =
      "<p> 마리나 베이 샌즈는 비교할 수 없는 새로운 경험을 고객에게 제공하기 위해 재투자 프로그램을 시작했습니다. 호텔 타워 1과 타워 2에서 리노베이션 공사가 시작되었습니다. 아래 시간에는 큰 소음이 발생할 수 있으며, 화재 경보 테스트를 진행할 예정입니다. </p> <ul> <li>월요일 – 금요일: 오전 10:00 – 정오 및 오후 2:00-오후 6:30</li> <li>주말 및 공휴일: 오후 2:00-오후 6:00</li> </ul> <p> 잠재적인 서비스 지연과 소음을 최소화하기 위해 노력하고 있으며, 이로 인한 불편에 사전 양해를 부탁드립니다. </p>";
  } else if (url.indexOf("id.") > -1) {
    title = "Pemberitahuan renovasi hotel:";
    content =
      "<p> Marina Bay Sands telah memulai program investasi ulang demi menghadirkan pengalaman baru yang tiada duanya bagi tamu kami. Pekerjaan renovasi dilaksanakan di Hotel Tower 1 dan 2, dengan tingkat kebisingan yang lebih tinggi dan uji coba alarm kebakaran secara berkala selama waktu-waktu berikut: </p> <ul> <li>Senin – Jumat: 10.00 – 12.00 dan 14.00 hingga 18.30</li> <li>Akhir pekan dan hari libur nasional: pukul 14.00 hingga 18.00</li> </ul> <p> Kami melakukan segala upaya untuk meminimalkan kemungkinan penundaan layanan dan gangguan suara, dan kami memohon maaf sebelumnya atas ketidaknyamanan yang ditimbulkan. </p>";
  } else {
    $(".notice-announce-box .announcement-title strong").text(
      "COVID-19 Notice:"
    );
    title = "Hotel Refurbishment Notice:";
    content =
      "<p> Marina Bay Sands has embarked on a reinvestment programme to provide unparalleled new experiences for our guests. Renovation works are being carried out at Hotel Towers 1 and 2, with higher noise levels and periodic fire alarm testing during these times: </p> <ul> <li>Monday – Friday: 10am – 12pm and 2pm – 6.30pm</li> <li>Weekends and public holidays: 2pm – 6pm</li> </ul> <p> We are making every effort to minimise potential service delays and noise disruptions, and apologise in advance for any inconvenience caused. </p>";
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
