$(function () {
  var url = window.location.href;
  var content = null;
  if (url.indexOf("zh.") > -1) {
    content =
      "<li> <b>第一步：</b>入住时出示您的会员卡，本次住宿即可赚取 6% 度假胜地奖赏钱。如果您尚未领取会员卡，可到任意金沙尊赏柜台领取。 </li> <li> <b>第二步：</b>在参与商户购物或用餐时，出示您的会员卡，赚取度假胜地奖赏钱。 </li> <li> <b>第三步：</b>下一次在参与商户购物或用餐时，使用度假胜地奖赏钱抵扣费用。 </li>";
  } else if (url.indexOf("hk.") > -1) {
    content =
      "<li> <b>第一步：</b>入住時出示您的會員卡，本次住宿即可賺取 6% 度假勝地獎賞錢。如果您尚未領取會員卡，可到任意金沙尊賞櫃檯領取。 </li> <li> <b>第二步：</b>在參與商戶購物或用餐時，出示您的會員卡，賺取度假勝地獎賞錢。 </li> <li> <b>第三步：</b>下一次在參與商戶購物或用餐時，使用度假勝地獎賞錢抵扣費用。 </li>";
  } else if (url.indexOf("jp.") > -1) {
    content =
      "<li> <b>ステップ1:</b> チェックインの際に会員カードをご提示して頂くとチェックアウト後に宿泊代の6%分がリゾートドルとして獲得出来ます。もし、会員カードをまだ持っていない場合は、お近くのサンズリワード・カウンターにお越し下さい。 </li> <li> <b>ステップ2:</b> 会員カードを対象店舗でご提示して頂くとショッピングやお食事でリゾートドルをご獲得いただけます。 </li> <li> <b>ステップ3:</b> 対象店舗のショップやダイニングで貯まったリゾートドルは現金の代わりとしてご利用頂けます。 </li>";
  } else if (url.indexOf("ko.") > -1) {
    content =
      "<li> <b>1단계:</b> 체크인 시 멤버십 카드를 제시하고 호텔 투숙 요금에 대한 6%의 리조트 달러를 적립하세요. 실물 카드를 수령하지 않은 경우에는 샌즈 리워즈 카운터에서 받으실 수 있습니다. </li> <li> <b>2단계:</b> 참여하는 매장에서 쇼핑 또는 식사를 할 때 카드를 제시하고 리조트 달러를 적립합니다. </li> <li> <b>3단계:</b> 참여하는 매장에서 쇼핑 또는 식사를 할 때 리조트 달러를 현금처럼 사용합니다. </li>";
  } else if (url.indexOf("id.") > -1) {
    content =
      "<li> <b>Langkah 1:</b> Tunjukkan kartu keanggotaan Anda saat check-in untuk mendapatkan 6% Resort Dollar saat menginap. Apabila Anda belum mengambil kartu, Anda dapat melakukannya di konter Sands Rewards mana pun. </li> <li> <b>Langkah 2:</b> Tunjukkan kartu Anda saat berbelanja atau bersantap di outlet yang berpartisipasi untuk mendapatkan Resort Dollar. </li> <li> <b>Langkah 3:</b> Tukarkan Resort Dollar Anda sebagai uang tunai untuk hidangan berikutnya atau pembelian di outlet yang berpartisipasi. </li>";
  } else {
    content =
      "<li> <b>Step 1:</b> Present your membership card upon check-in to earn 6% Resort Dollars with your stay. If you have not collected your card, you can do so at any Sands Rewards counter. </li> <li> <b>Step 2:</b> Present your card when you shop or dine at participating outlets to earn Resort Dollars. </li> <li> <b>Step 3:</b> Redeem your Resort Dollars as cash with your next meal or purchase at participating outlets. </li>";
  }

  //Hide SRL component --> CSS;
  //Update content;
  $(".chef-list-content h2+.chef-content-block ul").html(content);
});
