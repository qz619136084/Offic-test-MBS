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
        if (!$(".tax-tip").length) {
          $(".card-list-item").each(function () {
            $(this)
              .find(".card-rate:last")
              .after("<div class='tax-tip'>Excludes taxes & fees</div>");
          });
          $("p.text-left").append(
            "<br/><small class='tax-tip'>Excludes taxes & fees</small>"
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
                        }, 10);
                      });
                      clearInterval(bindEditClick1717);
                    }
                  }, 10);
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
      function addTaxesTipsMainPage() {
        var waitEl = setInterval(function () {
          if (
            $(".card-title:contains(Staycation Escape)").length ||
            $(".card-title:contains(Book Direct and Save S$20)").length
          ) {
            $(".tax-tip").prev("br").remove();
            $(".tax-tip").remove();
            $(".card-text").append(
              "<br/><small class='tax-tip'>Excludes taxes & fees</small>"
            );
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
          var bindMainButtonClick1553 = setInterval(function () {
            if (
              $(".room_card .btn.mbs_button_primary").length &&
              $("#loading").css("display") == "none"
            ) {
              $(".room_card .btn.mbs_button_primary").bind(
                "click",
                function () {
                  addTaxTip();
                  $("body")
                    .off("click", ".room_bed_Box .radio_div")
                    .on("click", ".room_bed_Box .radio_div", function () {
                      addTaxTip();
                    });
                }
              );
              clearInterval(bindMainButtonClick1553);
            }
          }, 10);
          var bindRoomViewFilterClick1541 = setInterval(function () {
            if (
              $(".room_views.dropdown_menu li").length &&
              $("#loading").css("display") == "none"
            ) {
              $(".room_views.dropdown_menu li").click(function () {
                clearT();
                addTaxTip();
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
                clearT();
                addTaxTip();
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
              $(".multi_avg").each(function () {
                if ($(this).next("div").length) {
                  $(this)
                    .next("div")
                    .after(
                      "<br/><small class='tax-tip'>Excludes taxes & fees</small>"
                    );
                } else {
                  $(this).after(
                    "<br/><small class='tax-tip'>Excludes taxes & fees</small>"
                  );
                }
              });
              clearInterval(window.checkMultiRoomTip03191706);
            }
          }, 10);
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
              var a = $(".packageList_item_pricing .mr-auto div:not([class])");
              a.each(function () {
                $(this).append(
                  "<br/><small class='tax-tip'>Excludes taxes & fees</small>"
                );
              });
            }
            clearInterval(window.addTip);
          }
        }, 10);
      }
      function clearT() {
        $(".room_card .btn.mbs_button_primary").each(function () {
          $(this).unbind("click");
        });
      }
      function addTileVerbiage() {
        clearInterval(window.waitTile);
        window.waitTile = setInterval(function () {
          if (
            $(".room_price").length &&
            $("#loading").css("display") == "none" &&
            $(".tileVerbiage").length == 0
          ) {
            $(".room_price").each(function () {
              $(this)
                .next("span")
                .after(
                  "<p style='margin-top:0;'><small class='tileVerbiage'>*Excludes taxes and fees</small></p>"
                );
            });
          }
        }, 100);
      }
    });
    clearInterval(window.checkJq03191454);
  }
}, 100);
