$(function () {
  //Mark the test;
  $("body").addClass("dy-sticky-filter dy-combined-filter");
  var windowWidth = $(window).width();
  //Data;
  var bathData = {
    "Glass-enclosed shower": [
      "Deluxe Room",
      "Premier Room",
      "Family Room",
      "Family 1-Bedroom",
      "Family Studio",
      "Family 2-Bedroom",
      "Club Room",
      "Grand Club Room",
      "Orchid Suite",
      "Bay Suite",
      "Sands Suite",
      "Harbour Suite",
      "Marina Suite",
      "Skyline Suite",
      "Merlion Suite",
      "Straits Suite",
      "Presidential Suite",
      "Chairman Suite",
    ],
    "Deep-soaking bathtub": [
      "Premier Room",
      "Family Room",
      "Family 1-Bedroom",
      "Family Studio",
      "Family 2-Bedroom",
      "Club Room",
      "Grand Club Room",
      "Orchid Suite",
      "Bay Suite",
      "Sands Suite",
      "Harbour Suite",
      "Skyline Suite",
    ],
    Jacuzzi: [
      "Marina Suite",
      "Merlion Suite",
      "Straits Suite",
      "Presidential Suite",
      "Chairman Suite",
    ],
  };
  var waitComponentShow = setInterval(function () {
    var stepSelected = $(".inner_circle_step.shapeborder_selected_in");
    if (stepSelected.length == 2) {
      var getData = setInterval(function () {
        if (
          f_getSessionStorage() != undefined &&
          $("#loading").css("display") == "none"
        ) {
          if (windowWidth <= 768) {
            //Mobile view;
            //Render new filter UI;
            var editButton = $("#booking_information_edit");
            var filterButton = $(".filter_box_mobile");
            filterButton
              .addClass("outlet_container")
              .css("padding", "0")
              .children("button")
              .addClass("mbs_button_primary")
              .addClass("dy-filter-btn");
            var editHtml = editButton.prop("outerHTML");
            var filterHtml = filterButton.prop("outerHTML");
            editButton.remove();
            filterButton.remove();
            $("#guest_adults_children").after(editHtml);
            $(".booking_information").after(filterHtml);
            //Render filter content;
            $(".dy-filter-btn").click(function () {
              var waitEl = setInterval(function () {
                if (
                  $("#filter_moible").length &&
                  $("#loading").css("display") == "none"
                ) {
                  $(".filter_moible_box .pt-10").removeClass("pt-10");
                  $(".filter_moible_box .room_filters_dropdown")
                    .eq(0)
                    .before(
                      "<div class='filter_box_right_title currency_label'>Room Types</div>"
                    );
                  $(".filter_moible_box .room_filters_dropdown")
                    .eq(1)
                    .before(
                      "<div class='filter_box_right_title currency_label'>Room Views</div>"
                    );
                  //Adding bath amenities;
                  $(".filter_moible_box:first-child").before(
                    "<div class='dy-checkbox-filter dy-bath-filter filter_moible_box'> <div class='dy-title filter_box_right_title'><b>Bath Amenities</b></div> <ul> <li id='glass-enclosed-shower'> <label class='checkbox'> <input type='checkbox' /><span></span>Glass-enclosed shower</label > </li> <li id='deep-soaking-bathtub'> <label class='checkbox'> <input type='checkbox' /><span></span> Deep-soaking bathtub</label > </li> <li id='jacuzzi'> <label class='checkbox'> <input type='checkbox' /><span></span>Jacuzzi</label > </li> </ul> </div>"
                  );
                  //update filter
                  update_filter();
                  //Adding the checked options in last round;
                  if ($("body.clearOption").length) {
                    $(".filter_moible_box input").prop("checked", false);
                    $("body").removeClass("clearOption");
                  } else {
                    $(".filter_moible_box li").each(function () {
                      var title = $(this).attr("id");
                      if ($("body." + "filter-" + title).length) {
                        $(this).find("input").prop("checked", true);
                      } else {
                        $(this).find("input").prop("checked", false);
                      }
                    });
                  }
                  //Binding "Done" button;
                  bindDoneBtn();
                  clearInterval(waitEl);
                }
              }, 100);
            });
            fixTop();
          } else {
            //Desktop View;
            var calendarHtml = $(".guest_duration").prop("outerHTML");
            $(".guest_duration").remove();
            $(".filter_box_left").before(calendarHtml);
            $(".filter_box_left").append("<div class='seperator'></div>");
            var editBtnHtml = $("#booking_information_edit").prop("outerHTML");
            $("#booking_information_edit").remove();
            $(".booking_information_people").append(editBtnHtml);
            //Update bath amenities filter into filter tab;
            var priceFilterHtml = $("#sort_by").prop("outerHTML");
            $(".filter_box").after(priceFilterHtml);
            $("#sort_by").remove();
            $(".filter_box_right .seperator").before(
              "<div class='room_filters_dropdown dy-bath-filter dy-checkbox-filter'> <a id='dy-bath-amenities-a' class='dropdown_a dy-dropdown_a txt_md_lb dropdown_toggle' >Bath Amenities</a > <ul class='dy-bath-dropdown-menu' style='display: none'> <li class='dropdown_menu_item'> <label class='checkbox'> <input type='checkbox' /><span></span>Glass-enclosed shower</label > </li> <li class='dropdown_menu_item'> <label class='checkbox'> <input type='checkbox' /><span></span> Deep-soaking bathtub</label > </li> <li class='dropdown_menu_item'> <label class='checkbox'> <input type='checkbox' /><span></span>Jacuzzi</label > </li> </ul> </div>"
            );
            //Bind bathFilter function when click other filters;
            bindOriginFilterClick();
            //Update filter
            update_filter();

            //Bind dropdown function for bath filter;
            $("#dy-bath-amenities-a").click(function () {
              if ($(this).attr("dropdown") == "yes") {
                $(this).next("ul").hide();
                $(this)
                  .removeClass("dropdown_toggle_up")
                  .addClass("dropdown_toggle");
                $(this).attr("dropdown", "no");
              } else {
                $(this).next("ul").show();
                $(this)
                  .removeClass("dropdown_toggle")
                  .addClass("dropdown_toggle_up");
                $(this).attr("dropdown", "yes");
              }
            });
            $(".dy-bath-dropdown-menu li input").click(function () {
              update_list_with_filter();
            });
            $(document).click(function (e) {
              var target = $(e.target);
              if (
                !target.closest("ul").is(".dy-bath-dropdown-menu") &&
                !target.is("#dy-bath-amenities-a")
              ) {
                $("#dy-bath-amenities-a").next("ul").hide();
                $("#dy-bath-amenities-a")
                  .removeClass("dropdown_toggle_up")
                  .addClass("dropdown_toggle");
                $("#dy-bath-amenities-a").attr("dropdown", "no");
              }
            });
            fixTop();
          }
          //Re-bind filters clicking after click edit button on calendar;
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
                            bindOriginFilterClick();
                            //Reset the checkbox;
                            $(".dy-bath-filter input:checked").trigger("click");
                            //Update filter
                            update_filter();
                            //Add mark to clear option record;
                            $("body").addClass("clearOption");
                            clear_body_option_class("filter-");
                          }
                          clearInterval(waitUpdatedSession);
                        }
                      }, 100);
                    });
                    clearInterval(bindSelectClick);
                  }
                }, 10);
              });
              clearInterval(bindEditClick1717);
            }
          }, 10);
          clearInterval(getData);
        }
      }, 50);
      clearInterval(waitComponentShow);
    }
  }, 50);

  function fixTop() {
    //FixTop function;
    var waitEl = setInterval(function () {
      if (
        $("#main_container").length &&
        $("#loading").css("display") == "none"
      ) {
        var windowWidth = $(window).width();
        if (windowWidth <= 768) {
          var moduleHeight =
            $(".container_guest").height() +
            $("#booking_page_step_container").height();
          $("#main_container").before(
            "<div class='dy-fill' style='display:none; height:" +
              moduleHeight +
              "px'></div>"
          );
          var modulePosition = $("#booking_page_step_container").offset().top;
          $(window).scroll(function () {
            var windowPosition = $(window).scrollTop();
            if (windowPosition >= modulePosition) {
              $(".dy-fill").show();
              $(".container_guest").addClass("dy-fixed");
              $("#booking_page_step_container").addClass("dy-fixed");
            } else {
              $(".dy-fill").hide();
              $(".container_guest").removeClass("dy-fixed");
              $("#booking_page_step_container").removeClass("dy-fixed");
            }
          });
        } else {
          var filterHeight = $(".filter_box").outerHeight();
          var stepBannerHeight = $(
            "#booking_page_step_container .container"
          ).outerHeight();
          $("#main_container").before(
            "<div class='dy-fill-filterBox' style='display:none; height:" +
              filterHeight +
              "px'></div><div class='dy-fill-stepBanner' style='display:none; height:" +
              stepBannerHeight +
              "px'></div>"
          );
          var stepBannerPosition = $(
            "#booking_page_step_container .container"
          ).offset().top;
          var filterBoxPosition = $(".filter_box").offset().top;
          var originalStepTipPadding = $(
            "#booking_page_step_container .container"
          ).css("paddingLeft");
          var originalSectionPadding = $("#main_container").css("paddingLeft");
          var originalBodyMargin = $("body").css("marginLeft");
          //change position data when notice collapsing;
          $(".temp-oph-wrap .collapse-toggle").click(function () {
            setTimeout(function () {
              stepBannerPosition = $(
                "#booking_page_step_container .container"
              ).offset().top;
              filterBoxPosition = $(".filter_box").offset().top;
            }, 300);
          });
          //Wait data if collapsing
          setTimeout(function () {
            $(window).scroll(function () {
              var windowPosition = $(window).scrollTop();
              //Fixing for stepBanner;
              if (windowPosition >= stepBannerPosition) {
                var stepTipSumPadding =
                  parseFloat(originalBodyMargin) +
                  parseFloat(originalStepTipPadding);
                $(".dy-fill-stepBanner").show();
                $("#booking_page_step_container .container")
                  .addClass("dy-fixed")
                  .css({
                    "padding-left": stepTipSumPadding + "px",
                    "padding-right": stepTipSumPadding + "px",
                  });
              } else {
                $(".dy-fill-stepBanner").hide();
                $("#booking_page_step_container .container")
                  .removeClass("dy-fixed")
                  .css({
                    "padding-left": originalStepTipPadding,
                    "padding-right": originalStepTipPadding,
                  });
                originalStepTipPadding = $(
                  "#booking_page_step_container .container"
                ).css("paddingLeft");
                originalSectionPadding =
                  $("#main_container").css("paddingLeft");
                originalBodyMargin = $("body").css("marginLeft");
              }
              //Fixging for filterBox;
              if (windowPosition >= filterBoxPosition - 57) {
                var filterSumPadding =
                  parseFloat(originalBodyMargin) +
                  parseFloat(originalSectionPadding);
                $(".dy-fill-filterBox").show();
                $(".filter_box")
                  .addClass("dy-fixed")
                  .css({
                    "padding-left": filterSumPadding + "px",
                    "padding-right": filterSumPadding + "px",
                  });
              } else {
                $(".dy-fill-filterBox").hide();
                $(".filter_box").removeClass("dy-fixed").css({
                  "padding-left": "0",
                  "padding-right": "0",
                });
                originalSectionPadding =
                  $("#main_container").css("paddingLeft");
                originalBodyMargin = $("body").css("marginLeft");
              }
            });
          }, 300);
        }
        clearInterval(waitEl);
      }
    }, 100);
  }
  function update_list_with_filter() {
    $(".room_card").show();
    var checkedBathArr = [];
    var bath_roomArr = [];
    var type_roomArr = [];
    $(".dy-bath-filter input:checked").each(function () {
      var title = $(this).closest("li").text().trim();
      checkedBathArr.push(title);
    });
    $(".dy-updated-filter li:has(input:checked)").each(function () {
      var selectedRoomType = $(this).text().trim();
      type_roomArr.push(selectedRoomType);
    });
    if (checkedBathArr.length > 0 || type_roomArr.length > 0) {
      //Get bath_roomArr
      for (let i = 0; i < checkedBathArr.length; i++) {
        var checkedType = checkedBathArr[i];
        if (i == 0) {
          $.each(bathData, function (i, val) {
            if (checkedType == i) {
              bath_roomArr = val;
            }
          });
        } else if (i > 0) {
          $.each(bathData, function (i, val) {
            if (checkedType == i) {
              var newRoomArr = val;
              bath_roomArr = compareArr(bath_roomArr, newRoomArr);
            }
          });
        }
      }
      $("#rooms_list .room_card").each(function () {
        var card = $(this);
        var bath_roomName = card
          .find(".txt-x-lg-lb.txt-black-five.ls-1.lh-30:not(.modal_title)")
          .html()
          .replace(/<span>.*<\/span>/gim, "")
          .trim();
        var type_roomName = card
          .find(".txt-black-five")
          .text()
          .trim()
          .replace(/<span>.*<\/span>/gim, "")
          .replace("  ", " ");
        if (checkedBathArr.length > 0 && type_roomArr.length > 0) {
          console.log("condition 1");
          if (
            $.inArray(type_roomName, type_roomArr) == -1 ||
            $.inArray(bath_roomName, bath_roomArr) == -1
          ) {
            card.hide();
          }
        } else if (checkedBathArr.length > 0 && type_roomArr.length == 0) {
          console.log("condition 2");
          console.log("bath_roomName:", bath_roomName);
          console.log("bath_roomArr:", bath_roomArr);
          console.log($.inArray(bath_roomName, bath_roomArr));
          if ($.inArray(bath_roomName, bath_roomArr) == -1) {
            card.hide();
          }
        } else if (checkedBathArr.length == 0 && type_roomArr.length > 0) {
          console.log("condition 3");
          if ($.inArray(type_roomName, type_roomArr) == -1) {
            card.hide();
          }
        }
      });
    } else {
      $("#rooms_list .room_card").show();
    }
  }
  function compareArr(a, b) {
    var common = [];
    var c = null;
    if (a.length < b.length) {
      c = a;
      a = b;
      b = c;
    }
    for (let i = 0; i < b.length; i++) {
      var ele = b[i];
      if (a.indexOf(ele) > -1) {
        common.push(ele);
      }
    }
    return common;
  }
  function bindDoneBtn() {
    var waitEl = setInterval(function () {
      if ($(".modal_footer button").length) {
        $(".modal_footer button").click(function () {
          update_list_with_filter();

          //Record selected options;
          //Reset
          $(".filter_moible_box li:has(input)").each(function () {
            var title = $(this).attr("id");
            $("body").removeClass("filter-" + title);
          });
          //Updated the checked option to class name;
          $(".filter_moible_box input:checked").each(function () {
            var id = $(this).closest("li").attr("id");
            $("body").addClass("filter-" + id);
          });
        });
        clearInterval(waitEl);
      }
    }, 100);
  }
  function bindOriginFilterClick() {
    var bindRoomViewFilterClick = setInterval(function () {
      if (
        $(".room_views.dropdown_menu li").length &&
        $("#loading").css("display") == "none"
      ) {
        $(".room_views.dropdown_menu li").click(function () {
          update_list_with_filter();
        });
        clearInterval(bindRoomViewFilterClick);
      }
    }, 50);
    var bindRoomTypesFilterClick = setInterval(function () {
      if (
        $(".room_types.dropdown_menu li").length &&
        $("#loading").css("display") == "none"
      ) {
        $(".room_types.dropdown_menu li").click(function () {
          update_list_with_filter();
        });
        clearInterval(bindRoomTypesFilterClick);
      }
    }, 50);
  }
  function update_filter() {
    //Desktop
    $(".room_filters_dropdown.dy-updated-filter").remove();
    $(
      ".room_filters_dropdown:not(.dy-bath-filter):not(.dy-updated-filter)"
    ).hide();
    $(
      ".room_filters_dropdown:not(.dy-bath-filter):not(.dy-updated-filter)+.seperator"
    ).hide();
    //Mobile
    $(
      ".filter_moible_box .room_filters_dropdown:not(.dy-bath-filter):not(.dy-updated-filter)"
    )
      .prev(".filter_box_right_title")
      .hide();
    //Common
    //common-desktop
    $("#main_container .room_filters_dropdown:has(.room_types_a)").after(
      "<div class='room_filters_dropdown dy-updated-filter'> <a class='room_types_a dropdown_a txt_md_lb dropdown_toggle'>All Room Types</a> <ul class='dropdown_menu' style='display: none'></ul> </div> <div class='seperator'></div>"
    );
    //common-mobile
    $("#filter_moible .dy-bath-filter").before(
      "<div class='dy-checkbox-filter dy-roomType-filter dy-updated-filter filter_moible_box'> <div class='dy-title filter_box_right_title'><b>All Room Types</b></div> <ul> </ul> </div>"
    );

    var viewsArr = [];
    var typesArr = [];
    $(
      ".room_filters_dropdown:not(.dy-updated-filter) .room_views:eq(0) li:gt(0)"
    ).each(function () {
      var view = $(this).text().trim();
      viewsArr.push(view);
    });
    $(
      ".room_filters_dropdown:not(.dy-updated-filter) .room_types:eq(0) li:gt(0)"
    ).each(function () {
      var type = $(this).text().trim();
      typesArr.push(type);
    });
    for (let i in typesArr) {
      var type = typesArr[i];
      for (let x in viewsArr) {
        var view = viewsArr[x];
        //desktop
        $(".room_filters_dropdown.dy-updated-filter .room_types_a+ul").append(
          "<li id='" +
            type.replace(" ", "-") +
            "-" +
            view.replace(" ", "-") +
            "' class='dropdown_menu_item'> <label class='dy-filter-checkbox checkbox'> <input type='checkbox' /><span></span>" +
            type +
            " - " +
            view +
            "</label ></li>"
        );
        //mobile
        $(".dy-roomType-filter ul").append(
          "<li id='" +
            type.replace(" ", "-") +
            "-" +
            view.replace(" ", "-") +
            "'> <label class='checkbox'> <input type='checkbox' /><span></span>" +
            type +
            " - " +
            view +
            "</label > </li>"
        );
      }
    }
    $("#main_container .dy-updated-filter .room_types_a").click(function (e) {
      e.stopPropagation();
      if (!$(this).is($(".dropdown_toggle_up"))) {
        $(this).removeClass("dropdown_toggle").addClass("dropdown_toggle_up");
        $(this).next("ul").show();
      } else {
        $(this).removeClass("dropdown_toggle_up").addClass("dropdown_toggle");
        $(this).next("ul").hide();
      }
    });
    //hide non-available bath filter options;
    var optionDisplaySetting = {
      "Glass-enclosed shower": 0,
      "Deep-soaking bathtub": 0,
      Jacuzzi: 0,
    };
    $("#rooms_list .room_card").each(function () {
      var card = $(this);
      var roomName = card
        .find(".txt-x-lg-lb.txt-black-five.ls-1.lh-30:not(.modal_title)")
        .html()
        .replace(/<span>.*<\/span>/gim, "")
        .trim();
      for (let i in bathData) {
        if ($.inArray(roomName, bathData[i]) > -1) {
          optionDisplaySetting[i] = 1;
        }
      }
      $(".dy-bath-filter li").each(function () {
        var option = $(this).text().trim();
        if (!optionDisplaySetting[option]) {
          $(this).hide();
        }
      });
    });
    bind_filter_click();
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
  function clear_body_option_class(keyword) {
    var arr = [];
    $("body")[0].classList.forEach(function (v, i) {
      if (v.indexOf(keyword) > -1) {
        arr.push(v);
      }
    });
    console.log("filter arr:", arr);
    arr.forEach((v) => {
      $("body").removeClass(v);
    });
  }
});
