function toMoney(str, toFixed = "SGD", removeChracter, be = false) {
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
  if (be) {
    var currency = f_getSessionStorage().currency;
    if (toFixed === "SGD") {
      return money.toString().replace(re, ",");
    }
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
