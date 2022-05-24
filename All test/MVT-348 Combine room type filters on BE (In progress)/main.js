$(function () {
  var waitComponentShow = setInterval(function () {
    var stepSelected = $(".inner_circle_step.shapeborder_selected_in");
    if (stepSelected.length == 2) {
      var getData = setInterval(function () {
        if (
          f_getSessionStorage() != undefined &&
          $("#loading").css("display") == "none" &&
          $("body.dy-sticky-filter").length
        ) {
          update_filter();
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
                            update_filter();
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
  function update_filter() {
    /* $(".seperator:not(.dy-updated-filter+.seperator)").remove(); */
    $(".room_filters_dropdown.dy-updated-filter").remove();
    $(
      ".room_filters_dropdown:not(.dy-bath-filter):not(.dy-updated-filter)"
    ).hide();
    $(
      ".room_filters_dropdown:not(.dy-bath-filter):not(.dy-updated-filter)+.seperator"
    ).hide();
    $(".room_filters_dropdown:has(.room_types_a)").after(
      "<div class='room_filters_dropdown dy-updated-filter'> <a class='room_views_a dropdown_a txt_md_lb dropdown_toggle'>All rooms</a> <ul class='dropdown_menu' style='display: none'></ul> </div> <div class='seperator'></div>"
    );
    var viewsArr = [];
    var typesArr = [];
    $(
      ".room_filters_dropdown:not(.dy-updated-filter) .room_views li:gt(0)"
    ).each(function () {
      var view = $(this).text().trim();
      viewsArr.push(view);
    });
    $(
      ".room_filters_dropdown:not(.dy-updated-filter) .room_types li:gt(0)"
    ).each(function () {
      var type = $(this).text().trim();
      typesArr.push(type);
    });
    for (let i in typesArr) {
      var type = typesArr[i];
      for (let x in viewsArr) {
        var view = viewsArr[x];
        $(".room_filters_dropdown.dy-updated-filter .room_views_a+ul").append(
          "<li class='dropdown_menu_item'> <label class='dy-filter-checkbox checkbox'> <input type='checkbox' /><span></span>" +
            type +
            " - " +
            view +
            "</label ></li>"
        );
      }
    }
    $(".dy-updated-filter .room_views_a").click(function (e) {
      e.stopPropagation();
      if (!$(this).is($(".dropdown_toggle_up"))) {
        $(this).removeClass("dropdown_toggle").addClass("dropdown_toggle_up");
        $(this).next("ul").show();
      } else {
        $(this).removeClass("dropdown_toggle_up").addClass("dropdown_toggle");
        $(this).next("ul").hide();
      }
    });
    bind_filter_click();
  }
  function update_list_with_filter() {
    $("#rooms_list .room_card").show();
    var titleArr = [];
    $(".dy-updated-filter li:has(input:checked)").each(function () {
      var selectedRoomType = $(this).text().trim();
      titleArr.push(selectedRoomType);
    });
    if (titleArr.length && $.inArray("All rooms", titleArr) == -1) {
      $("#rooms_list .room_card").each(function () {
        var card = $(this);
        var thisRoomName = card
          .find(".txt-black-five")
          .text()
          .trim()
          .replace(/<span>.*<\/span>/gim, "")
          .replace("  ", " ");
        if ($.inArray(thisRoomName, titleArr) == -1) {
          card.hide();
        }
      });
    } else {
      $("#rooms_list .room_card").show();
    }
  }
  function bind_filter_click() {
    $(".dy-updated-filter li").click(function (e) {
      e.stopPropagation();
    });
    $(".dy-updated-filter li input").click(function (e) {
      e.stopPropagation();
      update_list_with_filter();
    });
  }
});
