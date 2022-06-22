var index = 1;
$("#upgrade_dialog").attr("selectedIndex", index);
var symbol = paymentLightboxInfo(index).symbol;
var tax = paymentLightboxInfo(index).tax;
var taxOfUpgrade = paymentLightboxInfo(index).taxOfUpgrade;
$("#upgrade_rcontent_items_tax_tips").text(
  "+" + symbol + tax + " avg. taxes & fees/night"
);
console.log(symbol, taxOfUpgrade);
if (!$(".upgrade-tax-tip").length) {
  $(".upgradeCostNum")
    .closest("span")
    .after(
      "<br/><small class='upgrade-tax-tip'>Tess avg. taxes & fees/night</small>"
    );
  $(".upgradeCostNum")
    .closest("div")
    .css({ display: "inline-block", "text-align": "right" });
} else {
  $(".upgrade-tax-tip").text(
    "+" + symbol + taxOfUpgrade + " avg. taxes & fees/night"
  );
}
function paymentLightboxInfo(index) {
  var currency = f_getCurrencyInfo().code;
  var symbol = f_getCurrencyInfo().symbol;
  var upgradeRoom = f_getSessionStorage().upgradeRooms[0][index];
  var costOfUpgradeWithoutTax = upgradeRoom.costOfUpgrade.filter((item) => {
    return item.currencyCode === currency;
  })[0].price;
  var discountedAveragePrice = upgradeRoom.discountedAveragePrice;
  var averagePrice = upgradeRoom.averagePrice;
  var priceWithoutTax = null;
  var tax = null;
  if (discountedAveragePrice.length) {
    priceWithoutTax = discountedAveragePrice.filter((item) => {
      return currency == item.currencyCode;
    })[0].price;
  } else {
    priceWithoutTax = averagePrice.filter((item) => {
      return currency == item.currencyCode;
    })[0].price;
  }
  tax = toMoney(priceWithoutTax * 0.177, true);
  taxOfUpgrade = toMoney(costOfUpgradeWithoutTax * 0.177, true);
  return { symbol, tax, taxOfUpgrade };
}
