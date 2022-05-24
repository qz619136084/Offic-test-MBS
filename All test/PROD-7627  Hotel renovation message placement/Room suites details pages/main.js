$(function () {
  var url = window.location.href;
  var title = null;
  var content_short = null;
  var content_long = null;
  if (url.indexOf("zh.") > -1) {
    title = "酒店翻新公告：";
    content_long =
      "酒店 2 号塔楼部分楼层的客房已开始装修翻新工程。在此期间，我们将竭尽所能，采取相应措施，减少服务延迟，降低噪音影响，因此给您带来不便，我们深表歉意。";
    content_short =
      "酒店 2 号塔楼部分楼层的客房已开始装修翻新工程。在此期间，我们将竭尽所能，采取相应措施，减少服务延迟，降低噪音影响，因此给您带来不便，我们深表歉意。";
  } else if (url.indexOf("hk.") > -1) {
    title = "酒店翻新公告：";
    content_long =
      "酒店 2 號塔樓部分樓層的房間已率先開展翻新工程。在此期間，我們會盡一切努力避免服務延遲，將噪音影響降至最低。對您造成不便，我們深表歉意。";
    content_short =
      "酒店 2 號塔樓部分樓層的房間已率先開展翻新工程。在此期間，我們會盡一切努力避免服務延遲，將噪音影響降至最低。對您造成不便，我們深表歉意。";
  } else if (url.indexOf("jp.") > -1) {
    title = "ホテル改修工事のお知らせ:";
    content_long =
      "現在、ホテルタワー2の一部のフロアで客室の改修工事を実施中です。改修期間中は、サービスへの影響や騒音を最小限に抑えるよう、最善の配慮をもって取り組んでまいります。";
    content_short =
      "現在、ホテルタワー2の一部のフロアで客室の改修工事を実施中です。改修期間中は、サービスへの影響や騒音を最小限に抑えるよう、最善の配慮をもって取り組んでまいります。";
  } else if (url.indexOf("ko.") > -1) {
    title = "호텔 리노베이션 안내:";
    content_long =
      "호텔 타워 2 일부 층의 객실부터 리노베이션 공사에 착수했습니다. 이 기간 동안 잠재적인 서비스 지연과 소음을 최소화하기 위해 노력하고 있으며, 이로 인한 불편에 사전에 양해를 부탁드립니다.";
    content_short =
      "호텔 타워 2 일부 층의 객실부터 리노베이션 공사에 착수했습니다. 이 기간 동안 잠재적인 서비스 지연과 소음을 최소화하기 위해 노력하고 있으며, 이로 인한 불편에 사전에 양해를 부탁드립니다.";
  } else if (url.indexOf("id.") > -1) {
    title = "Pemberitahuan renovasi hotel:";
    content_long =
      "Pekerjaan renovasi telah dimulai di Hotel, dimulai dengan kamar di beberapa lantai Tower 2. Selama periode ini, kami melakukan upaya untuk meminimalkan kemungkinan penundaan layanan dan gangguan suara, dan kami memohon maaf sebelumnya atas ketidaknyamanan yang ditimbulkan.";
    content_short =
      "Pekerjaan renovasi telah dimulai di Hotel, dimulai dengan kamar di beberapa lantai Tower 2. Selama periode ini, kami melakukan upaya untuk meminimalkan kemungkinan penundaan layanan dan gangguan suara, dan kami memohon maaf sebelumnya atas ketidaknyamanan yang ditimbulkan.";
  } else {
    title = "Hotel Refurbishment Notice:";
    content_long =
      "Renovation works have begun at the Hotel, starting with rooms on some of the floors of Tower 2. During this period, we are making every effort to minimise potential service delays and noise disruptions, and apologise in advance for any inconvenience caused.";
    content_short =
      "Renovation works have begun at the Hotel, starting with rooms on some of the floors of Tower 2. During this period, we are making every effort to minimise potential service delays and noise disruptions, and apologise in advance for any inconvenience caused.";
  }
  if (
    url.indexOf("/rooms-suites.html") > -1 ||
    url.indexOf("/rooms-suites/rooms.html") > -1 ||
    url.indexOf("/rooms-suites/suites.html") > -1
  ) {
    $("#maincontent").before(
      "<div class='col-md-10 col-md-offset-1 titleContainer dy-notice'> <p> <img src='/content/dam/revamp/hotel/digital-concierge/maintenance-logo.svg' width='25' height='25' /> <strong>" +
        title +
        "</strong> </p> <p>" +
        content_long +
        "</p> </div>"
    );
  } else {
    $("#sect-title").before(
      "<div class='dy-notice'> <p> <img src='/content/dam/revamp/hotel/digital-concierge/maintenance-logo.svg' width='25' height='25' /> <strong>" +
        title +
        "</strong> </p> <p>" +
        content_short +
        "</p> </div>"
    );
  }
});
