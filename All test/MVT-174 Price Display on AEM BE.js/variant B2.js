window.checkJq03191454 = setInterval(function () {
  if (typeof jQuery != "undefined") {
    $(function () {
      var url = window.location.href;
      if (url.indexOf("deals/rooms.html") > -1) {
        var ifFromAd = getCookie("userComesFromAd");
        if (ifFromAd != "yes" && url.indexOf("utm_campaign=FPMX") == -1) {
          addTaxesTipsMainPage();
          $("body").on("click", ".checkbox.ng-binding input", function () {
            addTaxesTipsMainPage();
          });
          $("body").on("click", ".filter-clear", function () {
            addTaxesTipsMainPage();
          });
        } else {
          setCookie("userComesFromAd", "yes");
        }
      } else if (url.indexOf("deals/rooms/") > -1) {
        var ifFromAd = getCookie("userComesFromAd");
        if (ifFromAd != "yes" && url.indexOf("utm_campaign=FPMX") == -1) {
          $(".card-list-item").each(function () {
            var priceText = $(this).find(".big").text();
            var priceStartFrom = priceText.match(/\d/).index;
            var priceExcludeTax = priceText.substring(priceStartFrom);
            var priceIncludeTax = (
              priceExcludeTax.replace(/,/g, "") * 1.177
            ).toFixed(2);
            var reg = new RegExp(priceExcludeTax, "gim");
            priceIncludeTax = priceText.replace(
              reg,
              commaSeparateNumber(priceIncludeTax)
            );
            if (
              $(".card-list-item .tax-tip").length !=
              $(".card-list-item").length
            ) {
              var cardNo = $(this).find(".card-rate").length;
              $(this).find(".big").children("strong").text(priceIncludeTax);
              $(this)
                .find(".card-rate:last")
                .after("<small class='tax-tip'>Includes taxes & fees</small>");
              if (cardNo > 2) {
                var originalPriceText = $(this).find(".card-rate:last").text();
                var originalPriceStartFrom = originalPriceText.match(/\d/)
                  .index;
                var originalPriceExcludeTax = originalPriceText.substring(
                  originalPriceStartFrom
                );
                var originalPriceIncludeTax = (
                  originalPriceExcludeTax.replace(/,/g, "") * 1.177
                ).toFixed(2);
                var reg = new RegExp(originalPriceExcludeTax, "gim");
                originalPriceIncludeTax = originalPriceText.replace(
                  reg,
                  commaSeparateNumber(originalPriceIncludeTax)
                );
                $(this).find(".card-rate:last").text(originalPriceIncludeTax);
              }
            }
          });
          var priceText = $("p.text-left").find(".big").text();
          var priceStartFrom = priceText.match(/\d/).index;
          var priceExcludeTax = priceText.substring(priceStartFrom);
          var priceIncludeTax = (
            priceExcludeTax.replace(/,/g, "") * 1.177
          ).toFixed(2);
          var reg = new RegExp(priceExcludeTax, "gim");
          priceIncludeTax = priceText.replace(
            reg,
            commaSeparateNumber(priceIncludeTax)
          );
          if (!$("p.text-left .tax-tip").length) {
            $("p.text-left")
              .find(".big")
              .children("strong")
              .text(priceIncludeTax);
            $("p.text-left").append(
              "<br/><small class='tax-tip'>Includes taxes & fees</small>"
            );
          }
        } else {
          setCookie("userComesFromAd", "yes");
        }
      } else if (
        url.indexOf("/booking/rooms.html") > -1 ||
        url.indexOf("/booking/multirooms.html") > -1
      ) {
        var ifFromAd = getCookie("userComesFromAd");
        if (ifFromAd != "yes") {
          var waitComponentShow = setInterval(function () {
            var stepSelected = $(".inner_circle_step.shapeborder_selected_in");
            if (stepSelected.length == 2) {
              var getData = setInterval(function () {
                if (f_getSessionStorage() != undefined) {
                  clearT();
                  bindClickToAddText();
                  if (url.indexOf("/multirooms.html") == -1) {
                    var bindEditClick1717 = setInterval(function () {
                      if ($("#booking_information_edit").length) {
                        $("#booking_information_edit").click(function () {
                          updateCalendar();
                          var currentDate = f_getSessionStorage().checkindate;
                          var currentLos = f_getSessionStorage().los;
                          var currentRooms = f_getSessionStorage().rooms;
                          var bindSelectClick = setInterval(function () {
                            if ($("#s_btn_view_rooms").length) {
                              $("#s_btn_view_rooms").click(function () {
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
                              });
                              clearInterval(bindSelectClick);
                            }
                          }, 50);
                        });
                        clearInterval(bindEditClick1717);
                      }
                    }, 50);
                    var bindCurrencyClick1027 = setInterval(function () {
                      if (
                        $(".currency_types .dropdown_menu_item").length &&
                        $("#loading").css("display") == "none"
                      ) {
                        $(".currency_types .dropdown_menu_item").click(
                          function () {
                            $(".tax-tip").prev("br").remove();
                            $(".tax-tip").remove();
                            $(".tileVerbiage").closest("p").remove();
                            addTaxTip();
                          }
                        );
                        clearInterval(bindCurrencyClick1027);
                      }
                    }, 50);
                    var bindPriceOrderClick1027 = setInterval(function () {
                      if (
                        $("#sort_by").length &&
                        $("#loading").css("display") == "none"
                      ) {
                        $("#sort_by").click(function () {
                          $(".tax-tip").prev("br").remove();
                          $(".tax-tip").remove();
                          bindClickToAddText();
                        });
                        clearInterval(bindPriceOrderClick1027);
                      }
                    }, 50);
                  }
                  clearInterval(getData);
                }
              }, 50);
              clearInterval(waitComponentShow);
            }
          }, 50);
        }
      } else if (url.indexOf("/booking/search.html") > -1) {
        var ifFromAd = getCookie("userComesFromAd");
        if (ifFromAd != "yes") {
          updateCalendar();
        }
      } else if (url.indexOf("/booking/payment.html") > -1) {
        var ifFromAd = getCookie("userComesFromAd");
        if (ifFromAd != "yes") {
          var waitEditButton = setInterval(function () {
            if ($(".edit_txt").length) {
              $(".edit_txt").click(function () {
                updateCalendar();
              });
              clearInterval(waitEditButton);
            }
          }, 100);
        }
      }
      function addTaxesTipsMainPage() {
        var waitEl = setInterval(function () {
          if (
            $(".card-title:contains(Staycation Escape)").length ||
            $(".card-title:contains(Book Direct and Save S$20)").length
          ) {
            $(".tax-tip").prev("br").remove();
            $(".tax-tip").remove();
            $(".card-text").each(function () {
              if ($(this).attr("originalValue") == undefined) {
                $(this).attr("originalValue", $(this).children(".big").text());
              }
              var priceText = $(this).attr("originalValue");
              var priceStartFrom = priceText.match(/\d/).index;
              var priceExcludeTax = priceText.substring(priceStartFrom);
              var priceIncludeTax = (
                priceExcludeTax.replace(/,/g, "") * 1.177
              ).toFixed(2);
              var reg = new RegExp(priceExcludeTax, "gim");
              priceIncludeTax = priceText.replace(
                reg,
                commaSeparateNumber(priceIncludeTax)
              );
              $(this).children(".big").children("strong").text(priceIncludeTax);
              $(this).append(
                "<br/><small class='tax-tip'>Includes taxes & fees</small>"
              );
            });
            clearInterval(waitEl);
          }
        }, 50);
      }
      function bindClickToAddText() {
        clearT();
        addTileVerbiage();
        var url = window.location.href;
        if (url.indexOf("/rooms.html") > -1) {
          addTaxTip();
          var bindMainButtonClick1550 = setInterval(function () {
            if (
              $(".room_card .btn.mbs_button_primary").length &&
              $("#loading").css("display") == "none"
            ) {
              $(".room_card .btn.mbs_button_primary").bind(
                "click",
                function () {
                  var waitRoomData = setInterval(function () {
                    if (curr_availableRateplans.offerList != undefined) {
                      addTaxTip();
                      $("body")
                        .off("click", ".room_bed_Box .radio_div")
                        .on("click", ".room_bed_Box .radio_div", function () {
                          addTaxTip();
                        });
                      clearInterval(waitRoomData);
                    }
                  }, 50);
                }
              );
              clearInterval(bindMainButtonClick1550);
            }
          }, 50);
          var bindRoomViewFilterClick1541 = setInterval(function () {
            if (
              $(".room_views.dropdown_menu li").length &&
              $("#loading").css("display") == "none"
            ) {
              $(".room_views.dropdown_menu li").click(function () {
                bindClickToAddText();
              });
              clearInterval(bindRoomViewFilterClick1541);
            }
          }, 50);
          var bindRoomTypesFilterClick1541 = setInterval(function () {
            if (
              $(".room_types.dropdown_menu li").length &&
              $("#loading").css("display") == "none"
            ) {
              $(".room_types.dropdown_menu li").click(function () {
                bindClickToAddText();
              });
              clearInterval(bindRoomTypesFilterClick1541);
            }
          }, 50);
        } else if (url.indexOf("/multirooms.html") > -1) {
          window.checkMultiRoomTip03191706 = setInterval(function () {
            if (
              $(".multi_avg").length &&
              $("#loading").css("display") == "none"
            ) {
              var currencyCode = f_getSessionStorage().currency;
              $(".room_card")
                .closest("li")
                .each(function () {
                  var i = $(this).index();
                  $(this)
                    .find(".mulroom_card_right")
                    .each(function () {
                      var totalPriceIncludeTax = 0;
                      var taxUnit = $(".multi_number:eq(0)")
                        .text()
                        .slice(
                          0,
                          $(".multi_number:eq(0)").text().match(/\d/).index
                        );
                      $(this)
                        .find("ul .row")
                        .each(function () {
                          var j = $(this).closest("li").index();
                          var currencyCodeArr =
                            curr_availableRateplans[i].rooms[j]
                              .taxesAndServiceChargesByCurrency;
                          for (var x = 0; x < currencyCodeArr.length; x++) {
                            var toFitCurrencyCode =
                              currencyCodeArr[x].currencyCode;
                            if (currencyCode == toFitCurrencyCode) {
                              var los = f_getSessionStorage().los;
                              var tax = currencyCodeArr[x].price / los;
                              var priceText = $(this)
                                .find(".multi_number")
                                .text();
                              var priceStartFrom = priceText.match(/\d/).index;
                              var priceExcludeTax = priceText.substring(
                                priceStartFrom
                              );
                              var reg = new RegExp(priceExcludeTax, "gim");
                              var priceIncludeTax = 0;
                              if (currencyCode == "IDR") {
                                priceIncludeTax = Number(
                                  parseFloat(tax) +
                                    parseFloat(
                                      priceExcludeTax.replace(/\./g, "")
                                    )
                                ).toFixed(0);
                                totalPriceIncludeTax += parseFloat(
                                  priceIncludeTax
                                );
                                priceIncludeTax = priceText.replace(
                                  reg,
                                  dotSeparateNumber(priceIncludeTax)
                                );
                              } else if (
                                currencyCode == "JPY" ||
                                currencyCode == "KRW"
                              ) {
                                priceIncludeTax = Number(
                                  parseFloat(tax) +
                                    parseFloat(
                                      priceExcludeTax.replace(/,/g, "")
                                    )
                                ).toFixed(0);
                                totalPriceIncludeTax += parseFloat(
                                  priceIncludeTax
                                );
                                priceIncludeTax = priceText.replace(
                                  reg,
                                  commaSeparateNumber(priceIncludeTax)
                                );
                              } else {
                                priceIncludeTax = Number(
                                  parseFloat(tax) +
                                    parseFloat(
                                      priceExcludeTax.replace(/,/g, "")
                                    )
                                ).toFixed(2);
                                totalPriceIncludeTax += parseFloat(
                                  priceIncludeTax
                                );
                                priceIncludeTax = priceText.replace(
                                  reg,
                                  commaSeparateNumber(priceIncludeTax)
                                );
                              }
                              $(this)
                                .find(".multi_number")
                                .text(priceIncludeTax);
                              $(this)
                                .find(".multi_avg")
                                .next("div")
                                .after(
                                  "<br/><small class='tax-tip'>Includes taxes & fees</small>"
                                );
                              if ($(this).find(".del_txt").length) {
                                var priceText = $(this).find(".del_txt").text();
                                var priceStartFrom = priceText.match(/\d/)
                                  .index;
                                var priceExcludeTax = priceText.substring(
                                  priceStartFrom
                                );
                                var reg = new RegExp(priceExcludeTax, "gim");
                                var taxUnit = priceText.slice(
                                  0,
                                  priceText.match(/\d/).index
                                );
                                var priceIncludeTax = 0;
                                if (currencyCode == "IDR") {
                                  priceIncludeTax = Number(
                                    priceExcludeTax.replace(/\./g, "") * 1.177
                                  ).toFixed(0);
                                  priceIncludeTax = priceText.replace(
                                    reg,
                                    dotSeparateNumber(priceIncludeTax)
                                  );
                                } else if (
                                  currencyCode == "JPY" ||
                                  currencyCode == "KRW"
                                ) {
                                  priceIncludeTax = Number(
                                    priceExcludeTax.replace(/,/g, "") * 1.177
                                  ).toFixed(0);
                                  priceIncludeTax = priceText.replace(
                                    reg,
                                    commaSeparateNumber(priceIncludeTax)
                                  );
                                } else {
                                  priceIncludeTax = Number(
                                    priceExcludeTax.replace(/,/g, "") * 1.177
                                  ).toFixed(2);
                                  priceIncludeTax = priceText.replace(
                                    reg,
                                    commaSeparateNumber(priceIncludeTax)
                                  );
                                }
                                $(this).find(".del_txt").text(priceIncludeTax);
                              }
                            }
                          }
                        });
                      $(this)
                        .children(".row")
                        .find(".multi_avg")
                        .after(
                          "<br/><small class='tax-tip'>Includes taxes & fees</small>"
                        );
                      if (currencyCode == "IDR") {
                        $(this)
                          .children(".row")
                          .find(".multi_number")
                          .text(
                            taxUnit +
                              dotSeparateNumber(totalPriceIncludeTax.toFixed(0))
                          );
                      } else if (
                        currencyCode == "JPY" ||
                        currencyCode == "KRW"
                      ) {
                        $(this)
                          .children(".row")
                          .find(".multi_number")
                          .text(
                            taxUnit +
                              commaSeparateNumber(
                                totalPriceIncludeTax.toFixed(0)
                              )
                          );
                      } else {
                        $(this)
                          .children(".row")
                          .find(".multi_number")
                          .text(
                            taxUnit +
                              commaSeparateNumber(
                                totalPriceIncludeTax.toFixed(2)
                              )
                          );
                      }
                    });
                });
              clearInterval(window.checkMultiRoomTip03191706);
            }
          }, 50);
        }
      }
      function addTaxTip() {
        clearInterval(window.addTip);
        window.addTip = setInterval(function () {
          if (
            $(".packageList_item_pricing .mr-auto div:not([class])").length &&
            $("#loading").css("display") == "none"
          ) {
            if (!$(".tax-tip").length) {
              var currencyCode = $.trim($(".currency_a").text());
              var offerList = curr_availableRateplans.offerList;
              $(".packageList_item")
                .closest("li")
                .each(function () {
                  var regEx = null;
                  var los = null;
                  var tax = null;
                  var i = $(this).index();
                  var currencyCodeArr =
                    offerList[i].rooms[0].taxesAndServiceChargesByCurrency;
                  for (var x = 0; x < currencyCodeArr.length; x++) {
                    var toFitCurrencyCode = currencyCodeArr[x].currencyCode;
                    if (currencyCode == toFitCurrencyCode) {
                      var text = $.trim(
                        $(
                          ".currency_types .dropdown_menu_item.px-10:contains(" +
                            currencyCode +
                            ")"
                        ).text()
                      );
                      regEx = /\(.*\)/g;
                      taxUnit = text.match(regEx)[0].slice(1, -1);
                      los = f_getSessionStorage().los;
                      tax = currencyCodeArr[x].price / los;
                    }
                  }
                  var priceText = $(this)
                    .find(".packageList_item_pricing .mr-auto div:not([class])")
                    .children(".packagePrice")
                    .text();
                  var priceStartFrom = priceText.match(/\d/).index;
                  var priceExcludeTax = priceText.substring(priceStartFrom);
                  var reg = new RegExp(priceExcludeTax, "gim");
                  var taxUnit = priceText.slice(0, priceText.match(/\d/).index);
                  var priceIncludeTax = 0;
                  if (currencyCode == "IDR") {
                    priceIncludeTax = (
                      parseFloat(tax) +
                      parseFloat(priceExcludeTax.replace(/\./g, ""))
                    ).toFixed(0);
                    priceIncludeTax = priceText.replace(
                      reg,
                      dotSeparateNumber(priceIncludeTax)
                    );
                  } else if (currencyCode == "JPY" || currencyCode == "KRW") {
                    priceIncludeTax = (
                      parseFloat(tax) +
                      parseFloat(priceExcludeTax.replace(/,/g, ""))
                    ).toFixed(0);
                    priceIncludeTax = priceText.replace(
                      reg,
                      commaSeparateNumber(priceIncludeTax)
                    );
                  } else {
                    priceIncludeTax = (
                      parseFloat(tax) +
                      parseFloat(priceExcludeTax.replace(/,/g, ""))
                    ).toFixed(2);
                    priceIncludeTax = priceText.replace(
                      reg,
                      commaSeparateNumber(priceIncludeTax)
                    );
                  }
                  $(this)
                    .find(".packageList_item_pricing .mr-auto div:not([class])")
                    .children(".packagePrice")
                    .text(priceIncludeTax);
                  $(this)
                    .find(".packageList_item_pricing .mr-auto div:not([class])")
                    .append(
                      "<br/><small class='tax-tip'>Includes taxes & fees</small>"
                    );
                  if ($(this).find(".original_price").length) {
                    var priceText = $(this).find(".original_price").text();
                    var priceStartFrom = priceText.match(/\d/).index;
                    var priceExcludeTax = priceText.substring(priceStartFrom);
                    var reg = new RegExp(priceExcludeTax, "gim");
                    var taxUnit = priceText.slice(
                      0,
                      priceText.match(/\d/).index
                    );
                    var priceIncludeTax = 0;
                    if (currencyCode == "IDR") {
                      priceIncludeTax = Number(
                        priceExcludeTax.replace(/\./g, "") * 1.177
                      ).toFixed(0);
                      priceIncludeTax = priceText.replace(
                        reg,
                        dotSeparateNumber(priceIncludeTax)
                      );
                    } else if (currencyCode == "JPY" || currencyCode == "KRW") {
                      priceIncludeTax = Number(
                        priceExcludeTax.replace(/,/g, "") * 1.177
                      ).toFixed(0);
                      priceIncludeTax = priceText.replace(
                        reg,
                        commaSeparateNumber(priceIncludeTax)
                      );
                    } else {
                      priceIncludeTax = Number(
                        priceExcludeTax.replace(/,/g, "") * 1.177
                      ).toFixed(2);
                      priceIncludeTax = priceText.replace(
                        reg,
                        commaSeparateNumber(priceIncludeTax)
                      );
                    }
                    $(this).find(".original_price").text(priceIncludeTax);
                  }
                });
            }
            clearInterval(window.addTip);
          }
        }, 50);
      }
      function clearT() {
        $(".room_card .btn.mbs_button_primary").each(function () {
          $(this).unbind("click");
        });
        $(".tax-tip").prev("br").remove();
        $(".tax-tip").remove();
      }
      function commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
          val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
        }
        return val;
      }
      function dotSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
          val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "." + "$2");
        }
        return val;
      }
      function addTileVerbiage() {
        clearInterval(window.waitTile);
        window.waitTile = setInterval(function () {
          if (
            $(".room_price").length &&
            $("#loading").css("display") == "none" &&
            $(".tileVerbiage").length == 0
          ) {
            var currencyCode = f_getSessionStorage().currency;
            $(".room_price").each(function () {
              var priceText = $(this).text();
              var priceStartFrom = priceText.match(/\d/).index;
              var priceExcludeTax = priceText.substring(priceStartFrom);
              var reg = new RegExp(priceExcludeTax, "gim");
              var taxUnit = priceText.slice(0, priceText.match(/\d/).index);
              var priceIncludeTax = 0;
              if (currencyCode == "IDR") {
                priceIncludeTax = (
                  priceExcludeTax.replace(/\./g, "") * 1.177
                ).toFixed(0);
                priceIncludeTax = priceText.replace(
                  reg,
                  dotSeparateNumber(priceIncludeTax)
                );
              } else if (
                currencyCode == "JPY" ||
                currencyCode == "KRW" ||
                currencyCode == "SGD"
              ) {
                priceIncludeTax = (
                  priceExcludeTax.replace(/,/g, "") * 1.177
                ).toFixed(0);
                priceIncludeTax = priceText.replace(
                  reg,
                  commaSeparateNumber(priceIncludeTax)
                );
              } else {
                priceIncludeTax = (
                  priceExcludeTax.replace(/,/g, "") * 1.177
                ).toFixed(2);
                priceIncludeTax = priceText.replace(
                  reg,
                  commaSeparateNumber(priceIncludeTax)
                );
              }
              $(this).text(priceIncludeTax);
              $(this)
                .next("span")
                .after(
                  "<p style='margin-top:0;'><small class='tileVerbiage'>Includes taxes & fees</small></p>"
                );
            });
            $(".pricePanel .original_price").each(function () {
              var priceText = $(this).text();
              var priceStartFrom = priceText.match(/\d/).index;
              var priceExcludeTax = priceText.substring(priceStartFrom);
              var reg = new RegExp(priceExcludeTax, "gim");
              var taxUnit = priceText.slice(0, priceText.match(/\d/).index);
              var priceIncludeTax = 0;
              if (currencyCode == "IDR") {
                priceIncludeTax = (
                  priceExcludeTax.replace(/\./g, "") * 1.177
                ).toFixed(0);
                priceIncludeTax = priceText.replace(
                  reg,
                  dotSeparateNumber(priceIncludeTax)
                );
              } else if (
                currencyCode == "JPY" ||
                currencyCode == "KRW" ||
                currencyCode == "SGD"
              ) {
                priceIncludeTax = (
                  priceExcludeTax.replace(/,/g, "") * 1.177
                ).toFixed(0);
                priceIncludeTax = priceText.replace(
                  reg,
                  commaSeparateNumber(priceIncludeTax)
                );
              } else {
                priceIncludeTax = (
                  priceExcludeTax.replace(/,/g, "") * 1.177
                ).toFixed(2);
                priceIncludeTax = priceText.replace(
                  reg,
                  commaSeparateNumber(priceIncludeTax)
                );
              }
              $(this).text(priceIncludeTax);
            });
          }
        }, 100);
      }
      function dealCalendarPrice() {
        var wairCalendarPrice = setInterval(function () {
          if (
            $(".housePrice:not(:contains('Check out')):not(.includeTax)")
              .length &&
            $("#loading").css("display") == "none"
          ) {
            $(".housePrice:not(:contains('Check out')):not(.includeTax)").each(
              function () {
                var priceText = $.trim($(this).text());
                if (priceText != "") {
                  $(this).addClass("includeTax");
                  var priceStartFrom = priceText.match(/\d/).index;
                  var priceExcludeTax = priceText.substring(priceStartFrom);
                  var reg = new RegExp(priceExcludeTax, "gim");
                  var taxUnit = priceText.slice(0, priceText.match(/\d/).index);
                  var priceIncludeTax = 0;
                  if (/Rp/.test(taxUnit)) {
                    priceIncludeTax = Number(
                      priceExcludeTax.replace(/\./g, "") * 1.177
                    ).toFixed(0);
                    priceIncludeTax = priceText.replace(
                      reg,
                      dotSeparateNumber(priceIncludeTax)
                    );
                  } else {
                    priceIncludeTax = Number(
                      priceExcludeTax.replace(/,/g, "") * 1.177
                    ).toFixed(0);
                    priceIncludeTax = priceText.replace(
                      reg,
                      commaSeparateNumber(priceIncludeTax)
                    );
                  }
                  $(this).text(priceIncludeTax);
                }
              }
            );
            clearInterval(wairCalendarPrice);
          }
        }, 100);
      }
      function updateCalendar() {
        var waitTips = setInterval(function () {
          if (
            $(".calendar_box_tips span").length &&
            $("#loading").css("display") == "none" &&
            $("#calendar").length
          ) {
            $(".calendar_box_tips span").text(
              "Rates shown in S$, includes taxes and fees"
            );
            dealCalendarPrice();
            $("#calendar").scroll(function () {
              dealCalendarPrice();
            });
            clearInterval(waitTips);
          }
        }, 100);
      }
      function setCookie(name, value) {
        var Days = 365;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie =
          name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
      }
      function getCookie(c_name) {
        var cookieArr = document.cookie.split("; ");
        for (i = 0; i < cookieArr.length; i++) {
          var name = cookieArr[i].split("=")[0];
          var value = cookieArr[i].split("=")[1];
          if (name == c_name) {
            return value;
          }
        }
      }
    });
    clearInterval(window.checkJq03191454);
  }
}, 500);
