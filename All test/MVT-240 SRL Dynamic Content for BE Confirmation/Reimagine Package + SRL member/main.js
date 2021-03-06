$(function () {
  var url = window.location.href;
  var content = null;
  var title = null;
  if (url.indexOf("zh.") > -1) {
    title = "换领体验活动";
    content =
      "<li> <b>第一步：</b>入住时出示您的会员卡，本次住宿即可赚取 6% 度假胜地奖赏钱。如果您尚未领取会员卡，可到任意金沙尊赏柜台领取。 </li> <li> <b>第二步：</b>前往任意会员电子站刷您的会员卡。点击“推广游戏”（Promotional Games），选择“乐享客房优惠”（Reimagine Package）换领免费体验活动。 </li> <li><b>第三步：</b>前往对应商家出示打印凭证。</li>";
  } else if (url.indexOf("hk.") > -1) {
    title = "兌換體驗活動";
    content =
      "<li> <b>第一步：</b>入住時出示您的會員卡，本次住宿即可賺取 6% 度假勝地獎賞錢。如果您尚未領取會員卡，可到任意金沙尊賞櫃檯領取。 </li> <li> <b>第二步：</b>前往任意會員電子站刷您的會員卡。點擊「推廣遊戲」（Promotional Games），選擇「樂享客房優惠」（Reimagine Package）兌換免費體驗活動。 </li> <li><b>第三步：</b>前往對應商家出示打印憑證。</li>";
  } else if (url.indexOf("jp.") > -1) {
    title = "無料特典";
    content =
      "<li> <b>ステップ1:</b> チェックインの際に会員カードをご提示して頂くとチェックアウト後に宿泊代の6%分がリゾートドルとして獲得出来ます。もし、会員カードをまだ持っていない場合は、お近くのサンズリワード・カウンターにお越し下さい。 </li> <li> <b>ステップ2:</b> キオスクで会員カードをスワイプします。「Promotional Games」→「Reimagine Package」の順にタップして、お好きな無料特典をお選びください。 </li> <li> <b>ステップ3:</b> プリントされたバウチャーを各店舗へご提示願います。 </li>";
  } else if (url.indexOf("ko.") > -1) {
    title = "경험 사용하기";
    content =
      "<li> <b>1단계:</b> 체크인 시 멤버십 카드를 제시하고 호텔 투숙 요금에 대한 6%의 리조트 달러를 적립하세요. 실물 카드를 수령하지 않은 경우에는 샌즈 리워즈 카운터에서 받으실 수 있습니다. </li> <li> <b>2단계:</b> 멤버십 키오스크에서 카드를 인식시킵니다. ‘프로모션 게임’ -> ‘리이매진 패키지’를 탭해서 무료 경험을 사용합니다. </li> <li><b>3단계:</b> 프린트된 바우처를 각 매장에 제시합니다.</li>";
  } else if (url.indexOf("id.") > -1) {
    title = "TEBUS PENGALAMAN ANDA";
    content =
      "<li> <b>Langkah 1:</b> Tunjukkan kartu keanggotaan Anda saat check-in untuk mendapatkan 6% Resort Dollar saat menginap. Apabila Anda belum mengambil kartu, Anda dapat melakukannya di konter Sands Rewards mana pun. </li> <li> <b>Langkah 2:</b> Gesek kartu Anda di kios keanggotaan mana pun. Ketuk “Promotional Games” -> “Reimagine Package” untuk menebus pengalaman gratis Anda. </li> <li><b>Langkah 3:</b> Tunjukkan voucher cetak Anda di masing-masing outlet.</li>";
  } else {
    title = "REDEEM YOUR EXPERIENCES";
    content =
      "<li> <b>Step 1:</b> Present your membership card upon check-in to earn 6% Resort Dollars. If you have not collected your card, you can do so at any Sands Rewards counter. </li> <li> <b>Step 2:</b> Swipe your card at any membership kiosk. Tap on “Promotional Games” -> “Reimagine Package” to redeem your free experiences. </li> <li><b>Step 3:</b> Present your printed vouchers at respective outlets.</li>";
  }

  //Hide SRL component --> CSS;
  //Update content;
  $(".chef-list-content .h3 b").text(title);
  $(".chef-list-content h2+.chef-content-block ul").html(content);
});
