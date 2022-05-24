window.checkJq03191454 = setInterval(function () {
  if (typeof jQuery != "undefined") {
    $(function () {
      var url = window.location.href;
      if (url.indexOf("deals/rooms.html") > -1) {
        addTaxesTipsMainPage();
        $("body").on("click", ".checkbox.ng-binding input", function () {
          addTaxesTipsMainPage();
        });
        $("body").on("click", ".filter-clear", function () {
          addTaxesTipsMainPage();
        });
      } else if (url.indexOf("deals/rooms/") > -1) {
        $(".card-list-item").each(function () {
          var text = $(this).find(".big").text();
          var tax = 0;
          if (/Rp/.test(text)) {
            tax = (
              text.substring(text.match(/\d/).index).replace(/\./g, "") * 0.177
            ).toFixed(0);
          } else {
            tax = (
              text.substring(text.match(/\d/).index).replace(/,/g, "") * 0.177
            ).toFixed(2);
          }
          var taxUnit = text.slice(0, text.match(/\d/).index);
          if (
            $(".card-list-item .tax-tip").length != $(".card-list-item").length
          ) {
            $(this)
              .find(".card-rate:last")
              .after(
                "<small class='tax-tip'>+ " +
                  taxUnit +
                  tax +
                  " avg. taxes & fees /night</small>"
              );
          }
        });
        var text = $("p.text-left").find(".big").text();
        var tax = 0;
        if (/Rp/.test(text)) {
          tax = (
            text.substring(text.match(/\d/).index).replace(/\./g, "") * 0.177
          ).toFixed(0);
        } else {
          tax = (
            text.substring(text.match(/\d/).index).replace(/,/g, "") * 0.177
          ).toFixed(2);
        }
        var taxUnit = text.slice(0, text.match(/\d/).index);
        if (!$("p.text-left .tax-tip").length) {
          $("p.text-left").append(
            "<br/><small class='tax-tip'>+ " +
              taxUnit +
              tax +
              " avg. taxes & fees /night</small>"
          );
        }
      } else if (
        url.indexOf("/booking/rooms.html") > -1 ||
        url.indexOf("/booking/multirooms.html") > -1
      ) {
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
      } else if (url.indexOf("/booking/search.html") > -1) {
        updateCalendar();
      } else if (url.indexOf("/booking/payment.html") > -1) {
        var waitEditButton = setInterval(function () {
          if ($(".edit_txt").length) {
            $(".edit_txt").click(function () {
              updateCalendar();
            });
            clearInterval(waitEditButton);
          }
        }, 100);
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
              var text = $(this).children(".big").text();
              var tax = 0;
              if (/Rp/.test(text)) {
                tax = (
                  text.substring(text.match(/\d/).index).replace(/\./g, "") *
                  0.177
                ).toFixed(0);
              } else {
                tax = (
                  text.substring(text.match(/\d/).index).replace(/,/g, "") *
                  0.177
                ).toFixed(2);
              }
              var taxUnit = text.slice(0, text.match(/\d/).index);
              $(this).append(
                "<br/><small class='tax-tip'>+ " +
                  taxUnit +
                  tax +
                  " avg. taxes & fees /night</small>"
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
          var bindMainButtonClick1549 = setInterval(function () {
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
              clearInterval(bindMainButtonClick1549);
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
                      var totalTax = 0;
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
                              var tax = 0;
                              if (currencyCode == "IDR") {
                                tax = Number(
                                  currencyCodeArr[x].price / los
                                ).toFixed(0);
                                totalTax += parseFloat(tax);
                                tax = dotSeparateNumber(
                                  Number(
                                    currencyCodeArr[x].price / los
                                  ).toFixed(0)
                                );
                              } else if (
                                currencyCode == "JPY" ||
                                currencyCode == "KRW"
                              ) {
                                tax = Number(
                                  currencyCodeArr[x].price / los
                                ).toFixed(0);
                                totalTax += parseFloat(tax);
                                tax = dotSeparateNumber(
                                  Number(
                                    currencyCodeArr[x].price / los
                                  ).toFixed(0)
                                );
                              } else {
                                tax = Number(
                                  currencyCodeArr[x].price / los
                                ).toFixed(2);
                                totalTax += parseFloat(tax);
                                tax = dotSeparateNumber(
                                  Number(
                                    currencyCodeArr[x].price / los
                                  ).toFixed(2)
                                );
                              }
                              $(this)
                                .find(".multi_avg")
                                .next("div")
                                .after(
                                  "<br/><small class='tax-tip'>+ " +
                                    taxUnit +
                                    tax +
                                    " avg. taxes & fees /night</small>"
                                );
                            }
                          }
                        });
                      //lack total tax
                      if (currencyCode == "IDR") {
                        $(this)
                          .children(".row")
                          .find(".multi_avg")
                          .after(
                            "<br/><small class='tax-tip'>+ " +
                              taxUnit +
                              dotSeparateNumber(totalTax.toFixed(0)) +
                              " avg. taxes & fees /night</small>"
                          );
                      } else if (
                        currencyCode == "JPY" ||
                        currencyCode == "KRW"
                      ) {
                        $(this)
                          .children(".row")
                          .find(".multi_avg")
                          .after(
                            "<br/><small class='tax-tip'>+ " +
                              taxUnit +
                              commaSeparateNumber(totalTax.toFixed(0)) +
                              " avg. taxes & fees /night</small>"
                          );
                      } else {
                        $(this)
                          .children(".row")
                          .find(".multi_avg")
                          .after(
                            "<br/><small class='tax-tip'>+ " +
                              taxUnit +
                              commaSeparateNumber(totalTax.toFixed(2)) +
                              " avg. taxes & fees /night</small>"
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
                  var taxUnit = null;
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
                      if (currencyCode == "IDR") {
                        tax = dotSeparateNumber(
                          (currencyCodeArr[x].price / los).toFixed(0)
                        );
                      } else if (
                        currencyCode == "JPY" ||
                        currencyCode == "KRW"
                      ) {
                        tax = commaSeparateNumber(
                          (currencyCodeArr[x].price / los).toFixed(0)
                        );
                      } else {
                        tax = commaSeparateNumber(
                          (currencyCodeArr[x].price / los).toFixed(2)
                        );
                      }
                    }
                  }
                  $(this)
                    .find(".packageList_item_pricing .mr-auto div:not([class])")
                    .append(
                      "<br/><small class='tax-tip'>+ " +
                        taxUnit +
                        tax +
                        " avg. taxes & fees /night</small>"
                    );
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
              var text = $(this).text();
              var tax = 0;
              if (currencyCode == "IDR") {
                tax = dotSeparateNumber(
                  (
                    text.substring(text.match(/\d/).index).replace(/\./g, "") *
                    0.177
                  ).toFixed(0)
                );
              } else if (currencyCode == "JPY" || currencyCode == "KRW") {
                tax = commaSeparateNumber(
                  (
                    text.substring(text.match(/\d/).index).replace(/,/g, "") *
                    0.177
                  ).toFixed(0)
                );
              } else {
                tax = commaSeparateNumber(
                  (
                    text.substring(text.match(/\d/).index).replace(/,/g, "") *
                    0.177
                  ).toFixed(2)
                );
              }
              var taxUnit = text.slice(0, text.match(/\d/).index);
              $(this)
                .next("span")
                .after(
                  "<p style='margin-top:0;'><small class='tileVerbiage'>+ " +
                    taxUnit +
                    tax +
                    " avg. taxes & fees /night</small></p>"
                );
            });
          }
        }, 100);
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
      function updateCalendar() {
        var waitTips = setInterval(function () {
          if (
            $(".calendar_box_tips span").length &&
            $("#loading").css("display") == "none"
          ) {
            $(".calendar_box_tips span").text(
              "Rates shown in S$, excludes taxes and fees"
            );
            clearInterval(waitTips);
          }
        }, 100);
      }
    });
    clearInterval(window.checkJq03191454);
  }
}, 500);
