$("#upgrade_dialog")
  .find(".upgrade_body")
  .on("click", ".upgradeBlock", function (event) {
    var index = $(this).index();
    var currency = f_getCurrencyInfo().code;
    var symbol = f_getCurrencyInfo().symbol;
    var upgradeRoom = f_getSessionStorage().upgradeRooms[0][index];
    console.log(upgradeRoom.name);
    var discountedAveragePrice = upgradeRoom.discountedAveragePrice;
    var averagePrice = upgradeRoom.averagePrice;
    var priceWithoutTax = null;
    var priceWithTax = null;
    if (discountedAveragePrice.length) {
      priceWithoutTax = discountedAveragePrice.filter((item) => {
        return currency == item.currencyCode;
      })[0].price;
    } else {
      priceWithoutTax = averagePrice.filter((item) => {
        return currency == item.currencyCode;
      })[0].price;
    }
    console.log("priceWithoutTax", priceWithoutTax);
    priceWithTax = toMoney(priceWithoutTax * 1.177, true);
    $(".upgrade_rcontent_items span b").text(symbol + priceWithTax);
  });
