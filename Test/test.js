async function handleElSync(textTarget, priceTarget, be) {
  var [textEl, priceEl, sessionData] = await Promise.all([
    DYO.waitForElementAsync(textTarget),
    DYO.waitForElementAsync(priceTarget),
    waitSessionStorageData(),
  ]);
  var taxArr = [];
  //price target;
  priceEl.forEach(function (v, i) {
    var tax = null;
    var currencySymbol = null;
    var priceWithoutTax = null;
    var _this = $(v);
    if (!be) {
      //For Non-BE
      //"+" is in order to change String to Number;
      currencySymbol = _this.text().slice(0, 2);
      priceWithoutTax = +_this.text().slice(2).replace(/,/g, "");
      tax = toMoney(priceWithoutTax * 0.177);
    } else {
      //For BE
      if ($("#select_room_container").length) {
        console.log("single room card");
        //in single room card
        var packageTitle = _this
          .closest(".packageList_item")
          .find(".packageList_item_title")
          .text()
          .trim();
        var currency = f_getCurrencyInfo().code;
        var discountedAveragePriceByCurrency =
          curr_availableRateplans.offerList.filter((item) => {
            return item.name === packageTitle;
          })[0].rooms[0].discountedAveragePriceByCurrency;
        currencySymbol = f_getCurrencyInfo().symbol;
        if (discountedAveragePriceByCurrency.length) {
          //have discount
          priceWithoutTax = discountedAveragePriceByCurrency.filter((item) => {
            return item.currencyCode === currency;
          })[0].price;
          tax = toMoney(priceWithoutTax * 0.177, true);
        } else {
          //no discount
          priceWithoutTax = curr_availableRateplans.offerList
            .filter((item) => {
              return item.name === packageTitle;
            })[0]
            .rooms[0].averagePriceByCurrency.filter((item) => {
              return item.currencyCode === currency;
            })[0].price;
          tax = toMoney(priceWithoutTax * 0.177, true);
        }
      } else if ($("#multiroom_list").length) {
        console.log("multi room card");
        //in multiroom card
        //record price;
        if (_this.is($(".rate_cal_counter .multi_number"))) {
          var totalPrice = 0;
          _this
            .closest(".room_card")
            .find(".multi_number[price-data]")
            .each(function () {
              totalPrice += +$(this).attr("price-data");
            });
          currencySymbol = f_getCurrencyInfo().symbol;
          tax = toMoney(totalPrice * 0.177, true);
        } else {
          var packageTitle = _this
            .closest(".room_card.card")
            .find(".card_title")
            .text()
            .trim();
          var roomType = _this
            .closest(".row")
            .find(".col-md-5 strong")
            .text()
            .trim();
          var currency = f_getCurrencyInfo().code;
          var discountedAveragePriceByCurrency = curr_availableRateplans
            .filter((item) => {
              return item.name === packageTitle;
            })[0]
            .rooms.filter((item) => {
              return item.roomName === roomType;
            })[0].discountedAveragePriceByCurrency;
          currencySymbol = f_getCurrencyInfo().symbol;
          if (discountedAveragePriceByCurrency.length) {
            //have discount
            priceWithoutTax = discountedAveragePriceByCurrency.filter(
              (item) => {
                return item.currencyCode === currency;
              }
            )[0].price;
            tax = toMoney(priceWithoutTax * 0.177, true);
          } else {
            //no discount
            priceWithoutTax = curr_availableRateplans
              .filter((item) => {
                return item.name === packageTitle;
              })[0]
              .rooms.filter((item) => {
                return item.roomName === roomType;
              })[0]
              .averagePriceByCurrency.filter((item) => {
                return item.currencyCode === currency;
              })[0].price;
            tax = toMoney(priceWithoutTax * 0.177, true);
          }
          _this.attr("price-data", priceWithoutTax);
        }
      } else {
        console.log("room list");
        //in Room List
        var roomTitle = _this
          .closest(".room_card.card")
          .find(".txt-black-five")
          .text()
          .replace(" - ", "")
          .trim();
        var currency = f_getCurrencyInfo().code;
        //if "discountedAveragePriceByCurrency" is an array with no value, then it means that no discount and "price" will be placed in "avaragePriceByCurrency"
        var discountedAveragePriceByCurrency =
          sessionData.availableRooms.filter((item) => {
            return item.name === roomTitle;
          })[0].discountedAveragePriceByCurrency;
        currencySymbol = f_getCurrencyInfo().symbol;
        if (discountedAveragePriceByCurrency.length) {
          //have discount
          priceWithoutTax = discountedAveragePriceByCurrency.filter((item) => {
            return item.currencyCode === currency;
          })[0].price;
          tax = toMoney(priceWithoutTax * 0.177, true);
        } else {
          //no discount
          priceWithoutTax = sessionData
            .availableRooms.filter((item) => {
              return item.name === roomTitle;
            })[0]
            .averagePriceByCurrency.filter((item) => {
              return item.currencyCode === currency;
            })[0].price;
          tax = toMoney(priceWithoutTax * 0.177, true);
        }
      }
    }
    taxArr.push(currencySymbol + tax);
  });
  console.log("taxArr:", taxArr);
  textEl.forEach((v, i) => {
    $(v).text("+" + taxArr[i] + " avg. taxes & fees/night");
  });
}
