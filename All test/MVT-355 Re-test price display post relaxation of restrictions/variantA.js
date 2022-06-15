$(function () {
  var url = window.location.href;
  if (url.indexOf("deals/rooms.html") > -1) {
    var textTarget = ".bottomFix .big~br+small";
    var priceTarget = ".big strong";
    handleElSync(textTarget, priceTarget);
    $(".dropdown-menu-filter .checkbox input").click(() => {
      setTimeout(() => {
        handleElSync(textTarget, priceTarget);
      }, 10);
    });
    $(".dropdown-menu-filter .filter-clear").click(() => {
      setTimeout(() => {
        handleElSync(textTarget, priceTarget);
      }, 10);
    });
  } else if (url.indexOf("deals/rooms/") > -1) {
    var textTarget = ".big~br+small";
    var priceTarget = ".big strong";
    handleElSync(textTarget, priceTarget);
  } else if (url.indexOf("booking/search") > -1) {
    DYO.waitForElementAsync(".calendar_box_tips span").then(() => {
      $(".calendar_box_tips span").text("Rates are subject to GST and charges");
    });
  } else if (url.indexOf("booking/rooms") > -1) {
    var waitComponentShow = setInterval(() => {
      var stepSelected = $(".inner_circle_step.shapeborder_selected_in");
      if (stepSelected.length == 2) {
        var getData = setInterval(() => {
          if (
            f_getSessionStorage() != undefined &&
            $("#loading").css("display") == "none"
          ) {
            autoUpdate();
            bindMainClick();
            bindFilterClick();
            observe_multiRoomBanner();
            var bindEditClick1717 = setInterval(() => {
              if ($("#booking_information_edit").length) {
                $("#booking_information_edit").click(() => {
                  var currentDate = f_getSessionStorage().checkindate;
                  var currentLos = f_getSessionStorage().los;
                  var currentRooms = f_getSessionStorage().rooms;
                  var bindSelectClick = setInterval(() => {
                    if ($("#s_btn_view_rooms").length) {
                      $("#s_btn_view_rooms").click(() => {
                        var waitUpdatedSession = setInterval(() => {
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
                              autoUpdate();
                              bindMainClick();
                              bindFilterClick();
                              observe_multiRoomBanner();
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
  } else if (url.indexOf("booking/multirooms") > -1) {
    autoUpdate();
  }

  async function handleElSync(textTarget, priceTarget, be) {
    var [textEl, priceEl] = await Promise.all([
      DYO.waitForElementAsync(textTarget),
      DYO.waitForElementAsync(priceTarget),
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
            priceWithoutTax = discountedAveragePriceByCurrency.filter(
              (item) => {
                return item.currencyCode === currency;
              }
            )[0].price;
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
            f_getSessionStorage().availableRooms.filter((item) => {
              return item.name === roomTitle;
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
            priceWithoutTax = f_getSessionStorage()
              .availableRooms.filter((item) => {
                return item.name === packageTitle;
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
    $(".mbs_button_primary").unbind("click.taxes");
    $(".room_card .close_button").unbind("click.taxes");
    DYO.waitForElementAsync(".mbs_button_primary").then(() => {
      $(".mbs_button_primary").bind("click.taxes", () => {
        autoUpdate();
      });
    });
    DYO.waitForElementAsync(".room_card .close_button").then(() => {
      $(".room_card .close_button").bind("click.taxes", () => {
        autoUpdate();
      });
    });
  }
  function updateInRoomList() {
    var textTarget = ".pricePanel small";
    var priceTarget = ".room_price";
    handleElSync(textTarget, priceTarget, true);
    bindMainClick();
  }
  function updateInSingleRoomCard() {
    delayUpdate().then(() => {
      var textTarget = ".packageList_item_pricing small";
      var priceTarget = ".packagePrice";
      handleElSync(textTarget, priceTarget, true);
      if (!$(".radio_div.binded").length) {
        bindBedtypeRadioClick();
      }
    });
  }
  function updateInMultiRoomCard() {
    var textTarget = ".room_card .multi_avg~div small";
    var priceTarget = ".multi_number";
    handleElSync(textTarget, priceTarget, true);
  }
  function autoUpdate() {
    delayUpdate().then(() => {
      if ($("#select_room_container").length) {
        updateInSingleRoomCard();
      } else if ($("#multiroom_list").length) {
        updateInMultiRoomCard();
      } else {
        updateInRoomList();
      }
    });
  }
  function bindBedtypeRadioClick() {
    $(".radio_div").unbind("click.taxes").removeClass("binded");
    DYO.waitForElementAsync(".radio_div").then(() => {
      $(".radio_div").bind("click.taxes", () => {
        autoUpdate();
      });
      $(".radio_div").addClass("binded");
    });
  }
  function bindFilterClick() {
    $(".room_filters_dropdown:not(.dy-bath-filter) a+ul li").unbind(
      "click.taxes"
    );
    $(".room_filters_dropdown.dy-bath-filter a+ul li input").unbind(
      "click.taxes"
    );
    $(".currency_dropdown a+ul li").unbind("click.taxes");
    $("#sort_by").unbind("click.taxes");
    DYO.waitForElementAsync(
      ".room_filters_dropdown:not(.dy-bath-filter) a+ul li"
    ).then(() => {
      $(".room_filters_dropdown:not(.dy-bath-filter) a+ul li").bind(
        "click.taxes",
        () => {
          console.log("normal filter clicking");
          autoUpdate();
        }
      );
    });
    DYO.waitForElementAsync(
      ".room_filters_dropdown.dy-bath-filter a+ul li input"
    ).then(() => {
      $(".room_filters_dropdown.dy-bath-filter a+ul li input").bind(
        "click.taxes",
        () => {
          console.log("bath filter clicking");
          autoUpdate();
        }
      );
    });
    DYO.waitForElementAsync(".currency_dropdown a+ul li").then(() => {
      $(".currency_dropdown a+ul li").bind("click.taxes", () => {
        console.log("currency clicking");
        autoUpdate();
      });
    });
    DYO.waitForElementAsync("#sort_by").then(() => {
      $("#sort_by").bind("click.taxes", () => {
        console.log("price-ordering clicking");
        autoUpdate();
      });
    });
  }
  function observe_multiRoomBanner() {
    var roomsNo = getParaQuery("Rooms");
    if (roomsNo > 1) {
      var targetNode = document.getElementById("multiRoomBanner_outlet");
      var config = { attributes: true, childList: true, subtree: true };
      var callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
          if (mutation.type === "childList") {
            var addedNodes = mutation.addedNodes;
            var removedNodes = mutation.removedNodes;
            if (
              $.inArray($(".banner_card_outlet")[0], addedNodes) > -1 ||
              $.inArray($(".banner_card_outlet")[0], removedNodes) > -1
            ) {
              setTimeout(() => {
                autoUpdate();
                bindFilterClick();
                bindMainClick();
              }, 300);
            }
          }
        }
      };
      var observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }
  }
  function getParaQuery(para) {
    var paraString = window.location.search.substring(1);
    var paraArr = paraString.split("&");
    for (i = 0; i < paraArr.length; i++) {
      var name = paraArr[i].split("=")[0];
      var value = paraArr[i].split("=")[1];
      if (para == name) {
        return value;
      }
    }
  }
  function delayUpdate() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if ($("#loading").css("display") == "none") {
          resolve();
        }
      }, 100);
    });
  }
});
