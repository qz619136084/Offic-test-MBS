$(function () {
  //Mark the test;
  $("body").addClass("dy-sticky-filter");
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
                  $(".filter_moible_box:first-child").after(
                    "<div class='dy-bath-filter filter_moible_box'> <div class='dy-title filter_box_right_title'><b>Bath Amenities</b></div> <ul> <li id='glass-enclosed-shower'> <label class='checkbox'> <input type='checkbox' /><span></span>Glass-enclosed shower</label > </li> <li id='deep-soaking-bathtub'> <label class='checkbox'> <input type='checkbox' /><span></span> Deep-soaking bathtub</label > </li> <li id='jacuzzi'> <label class='checkbox'> <input type='checkbox' /><span></span>Jacuzzi</label > </li> </ul> </div>"
                  );
                  //Adding the checked options in last round;
                  $(".dy-bath-filter .dy-title+ul li").each(function () {
                    var title = $(this).attr("id");
                    if ($("body." + title).length) {
                      $(this).find("input").prop("checked", true);
                    } else {
                      $(this).find("input").prop("checked", false);
                    }
                  });

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
              "<div class='room_filters_dropdown dy-bath-filter'> <a id='dy-bath-amenities-a' class='dy-dropdown_a txt_md_lb dropdown_toggle' >Bath Amenities</a > <ul class='dy-bath-dropdown-menu' style='display: none'> <li class='dropdown_menu_item'> <label class='checkbox'> <input type='checkbox' /><span></span>Glass-enclosed shower</label > </li> <li class='dropdown_menu_item'> <label class='checkbox'> <input type='checkbox' /><span></span> Deep-soaking bathtub</label > </li> <li class='dropdown_menu_item'> <label class='checkbox'> <input type='checkbox' /><span></span>Jacuzzi</label > </li> </ul> </div>"
            );
            //Bind bathFilter function when click other filters;
            bindOriginFilterClick();
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
                              $(".dy-bath-filter input:checked").trigger(
                                "click"
                              );
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
              bathfilter();
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
  function bathfilter() {
    $(".room_card").closest("li").show();
    var checkedArr = [];
    var roomArr = [];
    //Reset body class;
    $(".dy-bath-filter .dy-title+ul li").each(function () {
      var title = $(this).attr("id");
      $("body").removeClass(title);
    });
    $(".dy-bath-filter input:checked").each(function () {
      var id = $(this).closest("li").attr("id");
      var title = $(this).closest("li").text().trim();
      checkedArr.push(title);
      //Updated the checked option to class name;
      $("body").addClass(id);
    });
    if (checkedArr.length > 0) {
      for (let i = 0; i < checkedArr.length; i++) {
        var checkedType = checkedArr[i];
        if (i == 0) {
          $.each(bathData, function (i, val) {
            if (checkedType == i) {
              roomArr = val;
            }
          });
        } else if (i > 0) {
          $.each(bathData, function (i, val) {
            if (checkedType == i) {
              var newRoomArr = val;
              roomArr = compareArr(roomArr, newRoomArr);
            }
          });
        }
      }
      $(".txt-x-lg-lb.txt-black-five.ls-1.lh-30:not(.modal_title)").each(
        function () {
          var title = $(this)
            .html()
            .replace(/<span>.*<\/span>/gim, "")
            .trim();
          if ($.inArray(title, roomArr) == -1) {
            $(this).closest(".room_card").closest("li").hide();
          }
        }
      );
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
          bathfilter();
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
          bathfilter();
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
          bathfilter();
        });
        clearInterval(bindRoomTypesFilterClick);
      }
    }, 50);
  }
});
