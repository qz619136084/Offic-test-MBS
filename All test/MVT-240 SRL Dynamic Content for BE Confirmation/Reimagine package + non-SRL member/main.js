$(function () {
  var url = window.location.href;
  var title = null;
  var content = null;
  var srlNotice_1 = null;
  var srlNotice_2 = null;
  if (url.indexOf("zh.") > -1) {
    srlNotice_1 = "凭金沙尊赏会员资格，预订酒店赚取";
    srlNotice_2 = "度假胜地奖赏钱，还可免费享受精彩体验活动！";
    title = "换领体验活动";
    content =
      "<li> <b>第一步：</b>在任意金沙尊赏柜台领取您的会员卡。 入住时出示您的会员卡，赚取 6% 度假胜地奖赏钱。 </li> <li> <b>第二步：</b>前往任意会员电子站刷您的会员卡。点击“推广游戏”（Promotional Games），选择“乐享客房优惠”（Reimagine Package）换领免费体验活动。 </li> <li> <b>第三步：</b>前往对应商家出示打印凭证。 </li>";
  } else if (url.indexOf("hk.") > -1) {
    srlNotice_1 = "凭金沙尊赏会员资格，预订酒店赚取";
    srlNotice_2 = "度假胜地奖赏钱，还可免费享受精彩体验活动！";
    title = "兌換體驗活動";
    content =
      "<li> <b>第一步：</b>在任意金沙尊賞櫃檯領取您的會員卡。 入住時出示您的會員卡，賺取 6% 度假勝地獎賞錢。 </li> <li> <b>第二步：</b>前往任意會員電子站刷您的會員卡。點擊「推廣遊戲」（Promotional Games），選擇「樂享客房優惠」（Reimagine Package）兌換免費體驗活動。 </li> <li><b>第三步：</b>前往對應商家出示打印憑證。</li>";
  } else if (url.indexOf("jp.") > -1) {
    srlNotice_1 = "サンズリワード会員の方は、こちらの予約で";
    srlNotice_2 =
      "リゾートドルを獲得した後、ホテルのパッケージにある無料特典をお楽しみ頂けます!";
    title = "無料特典";
    content =
      "<li> <b>ステップ1:</b> 最寄りのサンズリワード・カウンターで会員カードをお受け取りください。 チェックインの際に会員カードをご提示いただくと、宿泊料金の6%のリゾートドルが加算されます。 </li> <li> <b>ステップ2:</b> キオスクで会員カードをスワイプします。「Promotional Games」→「Reimagine Package」の順にタップして、お好きな無料特典をお選びください。 </li> <li> <b>ステップ3:</b> プリントされたバウチャーを各店舗へご提示願います。 </li>";
  } else if (url.indexOf("ko.") > -1) {
    srlNotice_1 = "샌즈 리워즈 회원 자격으로 이번 예약에서 리조트";
    srlNotice_2 = " 달러를 적립하고 호텔 패키지 무료 경험을 사용하세요!";
    title = "경험 사용하기";
    content =
      "<li> <b>1단계:</b> 샌즈 리워즈 카운터에서 멤버십 카드를 수령하세요. 체크인 시 카드를 제시하고 호텔 숙박 요금의 6%를 리조트 달러로 적립합니다. </li> <li> <b>2단계:</b> 멤버십 키오스크에서 카드를 인식시킵니다. ‘프로모션 게임’ -> ‘리이매진 패키지’를 탭해서 무료 경험을 사용합니다. </li> <li><b>3단계:</b> 프린트된 바우처를 각 매장에 제시합니다.</li>";
  } else if (url.indexOf("id.") > -1) {
    srlNotice_1 = "Dapatkan ";
    srlNotice_2 =
      " Resort Dollar dengan pemesanan ini dan tebus pengalaman gratis dengan paket hotel Anda sebagai anggota Sands Rewards!";
    title = "TEBUS PENGALAMAN ANDA";
    content =
      "<li> <b>Langkah 1:</b> Ambil kartu keanggotaan Anda di konter Sands Rewards mana pun. Tunjukkan kartu Anda saat check-in untuk mendapatkan 6% Resort Dollar saat menginap. </li> <li> <b>Langkah 2:</b> Gesek kartu Anda di kios keanggotaan mana pun. Ketuk “Promotional Games” -> “Reimagine Package” untuk menebus pengalaman gratis Anda. </li> <li><b>Langkah 3:</b> Tunjukkan voucher cetak Anda di masing-masing outlet.</li>";
  } else {
    srlNotice_1 = "<strong>Earn ";
    srlNotice_2 =
      " Resort Dollars with this booking and redeem complimentary experiences with your hotel package as a Sands Rewards member!</strong>";
    title = "REDEEM YOUR EXPERIENCES";
    content =
      "<li> <b>Step 1:</b> Collect your membership card at any Sands Rewards counter. Present your card upon check-in to earn 6% Resort Dollars with your stay. </li> <li> <b>Step 2:</b> Swipe your card at any membership kiosk. Tap on “Promotional Games” -> “Reimagine Package” to redeem your free experiences. </li> <li><b>Step 3:</b> Present your printed vouchers at respective outlets.</li>";
  }

  var waitEl = setInterval(function () {
    if ($(".memberCard #signUpPromptBoxDescription strong").length) {
      //Update SRL box;
      var dollars = $(".memberCard #signUpPromptBoxDescription strong")
        .text()
        .trim();
      $(".memberCard #signUpPromptBoxDescription").html(
        srlNotice_1 + dollars + srlNotice_2
      );
      clearInterval(waitEl);
    }
  }, 100);

  //Update content;
  $(".chef-list-content .h3 b").text(title);
  $(".chef-list-content h2+.chef-content-block ul").html(content);
  $("body").attr("dollar-data", dollars);
  $("body").addClass("dy-srl-content");
});
