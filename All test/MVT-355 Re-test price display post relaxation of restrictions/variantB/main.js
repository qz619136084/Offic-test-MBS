$(function () {
  var updatedText = "Inclusive of GST and charges";
  var url = window.location.href;
  if (url.indexOf("deals/rooms.html") > -1) {
    var textTarget = ".dy-new-layout .big~br+small";
    var priceTarget = ".dy-new-layout .big strong";
    handleElSync(textTarget, priceTarget, updatedText);
    $(".dropdown-menu-filter .checkbox input").click(function () {
      setTimeout(() => {
        handleElSync(textTarget, priceTarget, updatedText);
      }, 10);
    });
    $(".dropdown-menu-filter .filter-clear").click(function () {
      setTimeout(() => {
        handleElSync(textTarget, priceTarget, updatedText);
      }, 10);
    });
  } else if (url.indexOf("deals/rooms/") > -1) {
    var textTarget = ".big~br+small";
    var priceTarget = ".big strong";
    handleElSync(textTarget, priceTarget, updatedText);
  } else if (url.indexOf("booking/rooms") > -1) {
  }

  async function handleElSync(textTarget, priceTarget, updatedText) {
    var targetEl = await DYO.waitForElementAsync(textTarget);
    $(targetEl).text(updatedText);
    $(priceTarget).each(function () {
      console.log($(this));
      //"+" is in order to change String to Number;
      var currency = $(this).text().slice(0, 2);
      var priceWithoutTax = +$(this).text().slice(2).replace(/,/g, "");
      console.log(priceWithoutTax);
      var priceWithTax = toMoney(priceWithoutTax * 1.177);
      $(this).text(currency + priceWithTax);
    });
  }
  function toMoney(str, toFixed = "SGD", be = false, removeChracter) {
    var value = str;
    if (value === null || value === undefined || value === "") return "";
    if (typeof str === "number") {
      value = str.toString();
    }
    var tempStr = value.replace(/,/g, "");
    var money =
      toFixed === 0 && value.indexOf(".") === -1
        ? parseFloat(tempStr)
        : parseFloat(tempStr).toFixed(2);
    var re = /\B(?=(\d{3})+(?!\d))/g;
    if (toFixed === "SGD") {
      return money.toString().replace(re, ",");
    }
    if (be) {
      var currency = f_getSessionStorage().currency;
      if (currency === "IDR") {
        return parseFloat(money).toFixed().toString().replace(re, ".");
      }
      if (currency === "KRW" || currency === "JPY") {
        money = parseFloat(money).toFixed();
      }
    }
    if (removeChracter) {
      return money;
    } else {
      return money.toString().replace(re, ",");
    }
  }
});
