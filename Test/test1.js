//update content;
var index = $("#upgrade_dialog").attr("selectedIndex");
var symbol = paymentLightboxInfo(index).symbol;
var costOfUpgradeWithTax = paymentLightboxInfo(index).costOfUpgradeWithTax;
$(".upgradedPrice").text(symbol + costOfUpgradeWithTax);
$(".upgradedPrice")
  .closest("p")
  .css("display", "inline-block")
  .append("<small style='text-align:right'>" + updatedText + "</small>");
