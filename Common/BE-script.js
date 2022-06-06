$(function () {
  var url = window.location.href;
  var waitComponentShow = setInterval(function () {
    var stepSelected = $(".inner_circle_step.shapeborder_selected_in");
    if (stepSelected.length == 2) {
      var getData = setInterval(function () {
        if (
          f_getSessionStorage() != undefined &&
          $("#loading").css("display") == "none"
        ) {
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
          }
          clearInterval(getData);
        }
      }, 100);
      clearInterval(waitComponentShow);
    }
  }, 100);
  function bindClickToAddText() {
    clearT();
    var url = window.location.href;
    if (url.indexOf("/rooms.html") > -1) {
      addTaxTip();
      bindMainButton();
      var bindRoomViewFilterClick1541 = setInterval(function () {
        if (
          $(".room_views.dropdown_menu li").length &&
          $("#loading").css("display") == "none"
        ) {
          $(".room_views.dropdown_menu li").click(function () {
            clearT();
            bindMainButton();
          });
          clearInterval(bindRoomViewFilterClick1541);
        }
      }, 100);
      var bindRoomTypesFilterClick1541 = setInterval(function () {
        if (
          $(".room_types.dropdown_menu li").length &&
          $("#loading").css("display") == "none"
        ) {
          $(".room_types.dropdown_menu li").click(function () {
            clearT();
            bindMainButton();
          });
          clearInterval(bindRoomTypesFilterClick1541);
        }
      }, 100);
      if ($("#select_room_container").length) {
        bindRadioButton();
      }
    } else if (url.indexOf("/multirooms.html") > -1) {
      window.checkMultiRoomTip12221128 = setInterval(function () {
        if ($(".card_title").length && $("#loading").css("display") == "none") {
          clearInterval(window.checkMultiRoomTip12221128);
        }
      }, 100);
    }
  }
  function bindMainButton() {
    var bindMainButtonClick1553 = setInterval(function () {
      if (
        $(".room_card .btn.mbs_button_primary").length &&
        $("#loading").css("display") == "none"
      ) {
        if ($("#multiRoomBanner").css("display") == "none") {
          $(".room_card .btn.mbs_button_primary").bind(
            "click.value",
            function () {
              addTaxTip();
              bindRadioButton();
            }
          );
        }
        clearInterval(bindMainButtonClick1553);
      }
    }, 100);
  }
  function bindRadioButton() {
    var checkRadio = setInterval(function () {
      if (
        $(".room_bed_Box .radio_div").length &&
        $("#loading").css("display") == "none"
      ) {
        $(".room_bed_Box .radio_div")
          .unbind("click.value")
          .bind("click.value", function () {
            addTaxTip();
          });
        clearInterval(checkRadio);
      }
    }, 100);
  }
  function addTaxTip() {
    clearInterval(window.addTip12221128);
    window.addTip12221128 = setInterval(function () {
      if (
        $(".packageList_item_title").length &&
        $("#loading").css("display") == "none"
      ) {
        clearInterval(window.addTip12221128);
      }
    }, 100);
  }
  function clearT() {
    $(".room_card .btn.mbs_button_primary").each(function () {
      $(this).unbind("click.value");
    });
  }
});
