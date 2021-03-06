$(function () {
  var url = window.location.href;
  var content = null;
  var title = null;
  var videoIframe = null;
  if (url.indexOf("zh.") > -1) {
    title = "换领体验活动";
    content =
      "<li> <b>第一步：</b>入住时出示您的会员卡，本次住宿即可赚取 6% 度假胜地奖赏钱。如果您尚未领取会员卡，可到任意金沙尊赏柜台领取。 </li> <li> <b>第二步：</b>前往任意会员电子站刷您的会员卡。点击“推广游戏”（Promotional Games），选择“金沙悠享宅假”（Sandsational Staycation）换领免费体验活动。 </li> <li><b>第三步：</b>前往对应商家出示打印凭证。</li>";
    videoIframe =
      "<iframe class='vidyard_iframe' src='//play.vidyard.com/5j4V5YPPr3gQqrxePS7i8H.html?' width='640' height='360' scrolling='no' frameborder='0' allowtransparency='true' allowfullscreen></iframe>";
  } else if (url.indexOf("hk.") > -1) {
    title = "兌換體驗活動";
    content =
      "<li> <b>第一步：</b>入住時出示您的會員卡，本次住宿即可賺取 6% 度假勝地獎賞錢。如果您尚未領取會員卡，可到任意金沙尊賞櫃檯領取。 </li> <li> <b>第二步：</b>前往任意會員電子站刷您的會員卡。點擊「推廣遊戲」（Promotional Games），選擇「金沙悠享宅假」（Sandsational Staycation）兌換免費體驗活動。 </li> <li><b>第三步：</b>前往對應商家出示打印憑證。</li>";
    videoIframe =
      "<iframe class='vidyard_iframe' src='//play.vidyard.com/LQjtD27U4DF5YBuaCRsZhc.html?' width='640' height='360' scrolling='no' frameborder='0' allowtransparency='true' allowfullscreen></iframe>";
  } else if (url.indexOf("jp.") > -1) {
    title = "無料特典";
    content =
      "<li> <b>ステップ1:</b> チェックインの際に会員カードをご提示して頂くとチェックアウト後に宿泊代の6%分がリゾートドルとして獲得出来ます。もし、会員カードをまだ持っていない場合は、お近くのサンズリワード・カウンターにお越し下さい。 </li> <li> <b>ステップ2:</b> キオスクで会員カードをスワイプします。「Promotional Games」→「Sandsational Staycation」の順にタップして、お好きな無料特典をお選びください。 </li> <li><b>ステップ3: </b> プリントされたバウチャーを各店舗へご提示願います。</li>";
    videoIframe =
      "<iframe class='vidyard_iframe' src='//play.vidyard.com/pfTbaGEYNX7gXvkWiKeEoN.html?' width='640' height='360' scrolling='no' frameborder='0' allowtransparency='true' allowfullscreen></iframe>";
  } else if (url.indexOf("ko.") > -1) {
    title = "경험 사용하기";
    content =
      "<li> <b>1단계:</b> 체크인 시 멤버십 카드를 제시하고 호텔 투숙 요금에 대한 6%의 리조트 달러를 적립하세요. 실물 카드를 수령하지 않은 경우에는 샌즈 리워즈 카운터에서 받으실 수 있습니다. </li> <li> <b>2단계:</b> 멤버십 키오스크에서 카드를 인식시킵니다. ‘프로모션 게임’ -> ‘샌즈세이셔널 스테이케이션’을 탭해서 무료 경험을 사용합니다. </li> <li><b>3단계:</b> 프린트된 바우처를 각 매장에 제시합니다.</li>";
    videoIframe =
      "<iframe class='vidyard_iframe' src='//play.vidyard.com/pfTbaGEYNX7gXvkWiKeEoN.html?' width='640' height='360' scrolling='no' frameborder='0' allowtransparency='true' allowfullscreen></iframe>";
  } else if (url.indexOf("id.") > -1) {
    title = "TEBUS PENGALAMAN ANDA";
    content =
      "<li> <b>Langkah 1:</b> Tunjukkan kartu keanggotaan Anda saat check-in untuk mendapatkan 6% Resort Dollar saat menginap. Apabila Anda belum mengambil kartu, Anda dapat melakukannya di konter Sands Rewards mana pun. </li> <li> <b>Langkah 2:</b> Gesek kartu Anda di kios keanggotaan mana pun. Tekan “Promotional Games” -> “Sandsational Staycation” untuk menebus pengalaman gratis Anda. </li> <li><b>Langkah 3:</b> Tunjukkan voucher cetak Anda di masing-masing outlet.</li>";
    videoIframe =
      "<iframe class='vidyard_iframe' src='//play.vidyard.com/pfTbaGEYNX7gXvkWiKeEoN.html?' width='640' height='360' scrolling='no' frameborder='0' allowtransparency='true' allowfullscreen></iframe>";
  } else {
    title = "REDEEM YOUR EXPERIENCES";
    content =
      "<li> <b>Step 1:</b> Present your membership card upon check-in to earn 6% Resort Dollars. If you have not collected your card, you can do so at any Sands Rewards counter. </li> <li> <b>Step 2:</b> Swipe your card at any membership kiosk. Tap on “Promotional Games” -> “Sandsational Staycation” to redeem your free experiences. </li> <li><b>Step 3:</b> Present your printed vouchers at respective outlets.</li>";
    videoIframe =
      "<iframe class='vidyard_iframe' src='//play.vidyard.com/pfTbaGEYNX7gXvkWiKeEoN.html?' width='640' height='360' scrolling='no' frameborder='0' allowtransparency='true' allowfullscreen></iframe>";
  }
  //Add video under 'during your stay'
  var waitSrc = setInterval(function () {
    if ($(".chef-list-image img.lazyloaded").length) {
      var src = $(".chef-list-image img.lazyloaded").attr("src");
      $(".chef-list-image img").prop(
        "outerHTML",
        "<div class='dy-video-wrap' id='srl'> <img _ngcontent-c8='' alt='Card image cap' src='" +
          src +
          "' /><span class='icon-video-play'></span> </div>"
      );
      clearInterval(waitSrc);
    }
  }, 100);

  //bind click to show lightbox;
  $("body").on("click", "#srl", function () {
    var windowHeight = $(window).height();
    var iframeWrapHeight = windowHeight - 81.5;
    $("#dyVideoModal .swiper-fullpage").css("height", iframeWrapHeight);
    $("body").addClass("modal-open").css("padding-right", "17px");
    $("body").append("<div class='modal-backdrop fade'></div>");
    $("#dyVideoModal").show();
    setTimeout(function () {
      $(".modal-backdrop").addClass("show");
      $("#dyVideoModal").addClass("show");
    }, 10);
    setTimeout(function () {
      $("#dyVideoModal .swiper-fullpage")
        .addClass("swiper-container-initialized")
        .addClass("swiper-container-horizontal")
        .addClass("active");
      $("#dyVideoModal .embed-responsive").append(videoIframe);
    }, 160);
    //bind close button to hide lightbox;
    $("body").on("click", "#dyVideoModal .close", function () {
      $("#dyVideoModal").removeClass("show");
      $(".modal-backdrop").removeClass("show");
      setTimeout(function () {
        $("#dyVideoModal .swiper-fullpage")
          .removeClass("swiper-container-initialized")
          .removeClass("swiper-container-horizontal")
          .removeClass("active");
        $("body").removeClass("modal-open").css("padding-right", "");
        $("#dyVideoModal").hide().css("padding-right", "");
        $("#dyVideoModal iframe").remove();
        $(".modal-backdrop").remove();
      }, 150);
    });
  });
  //Hide SRL component --> CSS;
  //Update content;
  $(".chef-list-content .h3 b").text(title);
  $(".chef-list-content h2+.chef-content-block ul").html(content);
});
