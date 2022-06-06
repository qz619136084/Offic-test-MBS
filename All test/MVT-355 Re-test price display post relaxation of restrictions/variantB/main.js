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
    var waitComponentShow = setInterval(function () {
      var stepSelected = $(".inner_circle_step.shapeborder_selected_in");
      if (stepSelected.length == 2) {
        var getData = setInterval(function () {
          if (
            f_getSessionStorage() != undefined &&
            $("#loading").css("display") == "none"
          ) {
            bindMainClick();
            var bindEditClick1717 = setInterval(function () {
              if ($("#booking_information_edit").length) {
                $("#booking_information_edit").click(function () {
                  var currentDate = f_getSessionStorage().checkindate;
                  var currentLos = f_getSessionStorage().los;
                  var currentRooms = f_getSessionStorage().rooms;
                  var bindSelectClick = setInterval(function () {
                    if ($("#s_btn_view_rooms").length) {
                      $("#s_btn_view_rooms").click(function () {
                        var waitUpdatedSession = setInterval(function () {
                          if (
                            f_getSessionStorage() != undefined &&
                            $("#loading").css("display") == "none"
                          ) {
                            var calendarDate = $(".calendar_date_select")
                              .eq(0)
                              .attr("data-daydata");
                            var calendarLos =
                              $(".calendar_date_select_range").length + 1;
                            var calendarRooms = $(
                              "#rate_container_box .rate_item"
                            ).length;
                            if (
                              !(
                                currentDate == calendarDate &&
                                currentLos == calendarLos &&
                                currentRooms == calendarRooms
                              )
                            ) {
                              bindClickToAddText();
                            }
                            clearInterval(waitUpdatedSession);
                          }
                        }, 100);
                      });
                      clearInterval(bindSelectClick);
                    }
                  }, 100);
                });
                clearInterval(bindEditClick1717);
              }
            }, 100);
            clearInterval(getData);
          }
        }, 100);
        clearInterval(waitComponentShow);
      }
    }, 100);
  }

  async function handleElSync(
    textTarget,
    priceTarget,
    updatedText,
    be = false
  ) {
    //text target;
    var targetEl = await DYO.waitForElementAsync(textTarget);
    $(targetEl).text(updatedText);
    //price target;
    $(priceTarget).each(function () {
      var priceWithTax = null;
      var currencySymbol = null;
      var priceWithoutTax = null;
      var _this = $(this);
      if (!be) {
        //"+" is in order to change String to Number;
        currencySymbol = _this.text().slice(0, 2);
        priceWithoutTax = +_this.text().slice(2).replace(/,/g, "");
        priceWithTax = toMoney(priceWithoutTax * 1.177);
      } else {
        //For BE
        var packageTitle = _this
          .closest(".packageList_item")
          .find(".packageList_item_title")
          .text()
          .trim();
        console.log("packageTitle:", packageTitle);
        var currency = f_getCurrencyInfo().code;
        var discountedAveragePriceByCurrency =
          curr_availableRateplans.offerList.filter((item) => {
            return item.name === packageTitle;
          })[0].rooms[0].discountedAveragePriceByCurrency;
        currencySymbol = f_getCurrencyInfo().symbol;
        if (discountedAveragePriceByCurrency.length) {
          console.log("has discount");
          //set up for discounted price
          priceWithoutTax = discountedAveragePriceByCurrency.filter((item) => {
            return item.currencyCode === currency;
          })[0].price;
          console.log("price:", priceWithoutTax);
          priceWithTax = toMoney(priceWithoutTax * 1.177, true);
          //set up for origin price;
          var originPriceTarget = _this
            .closest(".packageList_item_pricing")
            .find(".original_price");
          var originPriceWithoutTax = curr_availableRateplans.offerList
            .filter((item) => {
              return item.name === packageTitle;
            })[0]
            .rooms[0].averagePriceByCurrency.filter((item) => {
              return item.currencyCode === currency;
            })[0].price;
          console.log("originPrice:", originPriceWithoutTax);
          var originPriceWithTax = toMoney(originPriceWithoutTax * 1.177, true);
          originPriceTarget.text(currencySymbol + originPriceWithTax);
        } else {
          console.log("no discount");
          //set up for discounted price
          priceWithoutTax = curr_availableRateplans.offerList
            .filter((item) => {
              return item.name === packageTitle;
            })[0]
            .rooms[0].averagePriceByCurrency.filter((item) => {
              return item.currencyCode === currency;
            })[0].price;
          console.log("price:", priceWithoutTax);
          priceWithTax = toMoney(priceWithoutTax * 1.177, true);
        }
      }
      _this.text(currencySymbol + priceWithTax);
    });
  }
  function toMoney(str, be = false, toFixed, removeChracter) {
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
  function bindMainClick() {
    DYO.waitForElementAsync(".mbs_button_primary").then(() => {
      $(".mbs_button_primary").click(function () {
        console.log("click");
        var textTarget = ".packageList_item_pricing small";
        var priceTarget = ".packagePrice";
        handleElSync(textTarget, priceTarget, updatedText, true);
      });
    });
  }
});
