var slotCount = 0,
  timeLineClicked = 0;
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (timeOutFn) {
    return setTimeout(timeOutFn, 1000 / 60);
  };
window["marina4383v1"] = function () {
  var el = document.querySelector(".party-size .displayed-text .num");
  if (
    typeof $ === "function" &&
    !document.querySelector(".marina4383v1") &&
    document.querySelector(".dropdown-list .item") &&
    typeof sevenrooms_venueID != "undefined" &&
    typeof sevenrooms_token != "undefined" &&
    el &&
    el.innerText > 0
  ) {
    //*********************Slot available*********************
    applyChanges4383V1();
    if (!$(".imageLoading").length) {
      $("body").append(
        '<div class="imageLoading"><img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/176372/images/06d41ac4dff347ac8c07809505287e6f_loading-img2.gif" alt="" /></div>'
      );
    }
    //*********************"View other restaurants" button*********************
    updateChanges_marinabaysands_respdp_3148_v1();
    //*********************Floating "book a table" button*********************
    $(".main-nav .nav-item.dropdown.dropdown-booking a").text("Book a Table");
    checkMobileButton4277v1();
    var winWidth = $(window).width();
    $(window).resize(function () {
      if ($(window).width() != winWidth) {
        winWidth = $(window).width();
        checkMobileButton4277v1();
      }
    });
    if ($(".sidebar-section .btn-book-ticket").length) {
      $(".main-nav .nav-item.dropdown.dropdown-booking").html("");
      $(".sidebar-section .btn-book-ticket")
        .clone(true)
        .appendTo(".main-nav .nav-item.dropdown.dropdown-booking");
      $(".main-nav .nav-item.dropdown.dropdown-booking a").attr(
        "class",
        "btn btn-secondary d-none d-lg-inline-block"
      );
    }
    if ($(".sidebar-block .table_widget").length) {
      $(".main-nav .nav-item.dropdown.dropdown-booking").html("");
      $(".main-nav .nav-item.dropdown.dropdown-booking").html(
        '<a href="#m" class="btn btn-secondary d-none d-lg-inline-block" onclick="return animateToWidget(event);">Book A Table</a>'
      );
    }
    $(window).scroll();
    //*********************Mobile "book a table" widget*********************
    if (winWidth < 500) {
      $("body").addClass("marinabaysands4046");
      $(".sidebar-block .table_widget.section").addClass("bookTableDv");
      $(".marinabaysands4046 .sidebar-block .bookTableDv").insertAfter(
        ".marinabaysands4046 .details-block-body p.sticky-btn-group.btn-sticky-bottom"
      );
    }
    document.documentElement.classList.add("marina4383v1");
  } else if (!document.getElementsByClassName("marina4383v1").length) {
    window.requestAnimationFrame(marina4383v1);
  }
};
window.marina4383v1();
//*********************Slot available*********************
function applyChanges4383V1() {
  var setInter = setInterval(function () {
    if (!document.querySelector(".running4383")) {
      console.log("table length:" + $(".table-widget-container").length);
      document.documentElement.classList.add("running4383");
      $(".table-widget-container").each(function () {
        var table = $(this);
        console.log("table: " + table);
        table.find(".cur-month.cur-day.date-item").trigger("click");
        addDateClick4383V1(table);
        table
          .find(
            ".calendar-filter-box .arrow-next, .calendar-filter-box .arrow-prev"
          )
          .on("click", function () {
            addDateClick4383V1(table);
          });
        table
          .find(".time-field .dropdown-list span.item")
          .on("click", function () {
            setTimeout(function () {
              addSelectedSlotAvailability3254V1(table);
            }, 100);
          });
        table.find(".dropdown-field.time-field").on("click", function (e) {
          console.log("clicked");
          if (!$(this).hasClass("hasCompleted")) {
            e.preventDefault();
            timeLineClicked++;
            makeSlotChanges4383V1(slotCount, timeLineClicked, table);
            $(this).removeClass("active");
            return false;
          }
        });
      });
    }
    clearInterval(setInter);
    setTimeout(function () {
      clearInterval(setInter);
    }, 5000);
  }, 100);
}
function addDateClick4383V1(table) {
  table
    .find(".date-item, .party-size span.item, .btn-book-ticket")
    .on("click", function () {
      setTimeout(function () {
        table.find(".dropdown-field.time-field").removeClass("hasCompleted");
      }, 100);
      slotCount = 0;
      timeLineClicked = 0;
      makeSlotChanges4383V1(slotCount, timeLineClicked, table);
    });
}
function addSelectedSlotAvailability3254V1(table) {
  var slotText = table
    .find(".dropdown-field.time-field span.displayed-text")
    .text();
  slotText = slotText.trim();
  var cnt = 0;
  table.find(".time-field .dropdown-list span.item").each(function () {
    if ($(this).hasClass("slotBooked") && $(this).text().trim() == slotText) {
      table
        .find(".dropdown-field.time-field span.displayed-text")
        .attr("slot-data", "Slot unavailable");
      cnt++;
    } else {
      if (cnt == 0) {
        table
          .find(".dropdown-field.time-field span.displayed-text")
          .attr("slot-data", "Available");
      }
    }
  });
}
function makeSlotChanges4383V1(slotCount, timeLineClicked, table) {
  console.log("function triggered");
  console.log("function table: " + table);
  table.find(".dropdown-field.time-field").parent().addClass("processing");
  table
    .find(".dropdown-field.time-field span.displayed-text")
    .attr("slot-data", "");
  var slotLength = table.find(".time-field span.item");
  slotLength.each(function () {
    var dataStart = $(this).attr("data-start");
    var dataEnd = $(this).attr("data-end");
    var dt = joinTime4383V1(
      table.find(".dropdown-field .displayed-text.selected").text(),
      "-"
    );
    console.log("dt:" + dt);
    var partySize = table.find(".displayed-text").eq(0).text().trim();
    var that = $(this);
    var dtStart = dataStart.replace("AM", " AM").replace("PM", " PM");
    var dtEnd = dataEnd.replace("AM", " AM").replace("PM", " PM");
    dtStart = get24HourFormatTime3254V1(dtStart);
    dtEnd = get24HourFormatTime3254V1(dtEnd);
    $.ajax({
      url: "/services/sr_request",
      type: "POST",
      contentType: "application/json;charset=UTF-8",
      data: JSON.stringify({
        url: "venues/" + sevenrooms_venueID + "/availability",
        token: sevenrooms_token,
        method: "GET",
        parameters: {
          date: dt,
          start_time: dataStart,
          end_time: dataEnd,
          party_size: partySize,
        },
      }),
      success: function (res) {
        if (res.status === "error") return false;
        if (res.status === "success") {
          var result = res.data.availability;
          var slotArr = [];
          result.forEach(function (data) {
            slotArr = slotArr.concat(data.times);
          });
          if (!slotArr.length) {
            that.attr("data-bookedText", "").addClass("slotBooked");
            return false;
          }
          console.log("Booking slot data:- ", dataStart, dataEnd, slotArr);
          var availableCount = 0;
          for (i = 0; i < slotArr.length; i++) {
            var slotType = slotArr[i]["type"];
            var slotTime = slotArr[i]["time"];
            if (
              slotType == "book" &&
              slotTime >= dtStart &&
              slotTime <= dtEnd
            ) {
              availableCount++;
            }
          }
          if (availableCount == 0) {
            that.attr("data-bookedText", "").addClass("slotBooked");
          } else {
            that.attr("data-bookedText", "Available").removeClass("slotBooked");
          }
          addSelectedSlotAvailability3254V1(table);
          table.find(".dropdown-field.time-field").addClass("hasCompleted");
          if (slotCount == 0 && timeLineClicked != 0) {
            var chkClickIntv = setInterval(function () {
              if (
                !table
                  .find(".dropdown-field.time-field")
                  .parent()
                  .hasClass("processing")
              ) {
                table.find(".dropdown-field.time-field").click();
                clearInterval(chkClickIntv);
              }
            }, 100);
            slotCount++;
          }
        }
      },
      error: function (e) {
        table
          .find(".dropdown-field.time-field")
          .parent()
          .addClass("processing");
        console.log("Unable to get the data", e);
      },
    });
  });
  setTimeout(function () {
    table.find(".dropdown-field.time-field").parent().removeClass("processing");
  }, 1500);
  table.find(".v_viewotherctaArea a").text("View other restaurants");
}
function joinTime4383V1(t, s) {
  var time = t ? new Date(t) : new Date();
  var a = [{ year: "numeric" }, { month: "numeric" }, { day: "numeric" }];
  function format(m) {
    var f = new Intl.DateTimeFormat("en", m);
    return f.format(time);
  }
  return a.map(format).join(s);
}
function get24HourFormatTime3254V1(time) {
  var hours = Number(time.match(/^(\d+)/)[1]);
  var minutes = Number(time.match(/:(\d+)/)[1]);
  var AMPM = time.match(/\s(.*)$/)[1];
  if (AMPM == "PM" && hours < 12) hours = hours + 12;
  if (AMPM == "AM" && hours == 12) hours = hours - 12;
  var sHours = hours.toString();
  var sMinutes = minutes.toString();
  if (hours < 10) sHours = "0" + sHours;
  if (minutes < 10) sMinutes = "0" + sMinutes;
  return sHours + ":" + sMinutes;
}
//*********************"View other restaurants" button*********************
function updateChanges_marinabaysands_respdp_3148_v1() {
  addViewOtherCta();
  fixDateDropdown();
  checkIfNoSlotAvailable();
  $(document).click(function () {
    checkIfNoSlotAvailable();
  });
  $(".dropdown-field, .dropdown-list .item, .date-table").click(function () {
    checkIfNoSlotAvailable();
  });
  $(document).ajaxComplete(function () {
    checkIfNoSlotAvailable();
    $("body.v_dateSelected").removeClass("v_dateSelected");
    setTimeout(function () {
      if (!$("body.v_dateSelected").length) {
        fixDateDropdown();
      }
    }, 200);
  });
}
function addViewOtherCta() {
  if (!$(".v_viewotherctaArea").length) {
    $(".search-box")
      .parents(".t-title+div")
      .append(
        '<div class="v_viewotherctaArea"><a href="https://www.marinabaysands.com/restaurants/view-all.html">View other restaurants</a></div>'
      );
  }
}
function fixDateDropdown() {
  var dateText = $(".dropdown-list.table-calendar")
    .parents(".dropdown-field")
    .find(".displayed-text");
  if (dateText && !dateText.text().length) {
    // dateText.text('Select Date');
    $(".cur-month.cur-day.date-item").click();
    $("body").addClass("v_dateSelected");
  }
}
function checkIfNoSlotAvailable() {
  if (
    $(".search-box").parents(".t-body").find(".error-msg.regular-error:visible")
      .length
  ) {
    $(".v_viewotherctaArea").show();
  } else {
    $(".v_viewotherctaArea").hide();
  }
}
//*********************"Floating book a table" button*********************
function animateToWidget(e) {
  e.preventDefault();
  var elem = $(".table-widget-container");
  if (elem.length) {
    $("html, body")
      .stop()
      .animate({ scrollTop: elem.offset().top - 65 }, 500);
  }
  return false;
}
function checkMobileButton4277v1() {
  var chkIntv = setInterval(function () {
    if (
      !$(".bookATableBTN").length &&
      $(".btn-sticky-bottom a.btn-book-ticket").length
    ) {
      clearInterval(chkIntv);
      var clName = "";
      if ($(".main-nav .nav-button").hasClass("show")) {
        clName = "show";
      }
      if ($(".btn-sticky-bottom a.btn-book-ticket[href*='https://']").length) {
        $(".btn-sticky-bottom a.btn-book-ticket")
          .clone(true)
          .insertAfter(".main-nav .nav-button")
          .attr(
            "class",
            "btn btn-secondary nav-button bookATableBTN " + clName
          );
      } else {
        $(".main-nav .nav-button").after(
          '<a href="javascript:;" id="sevenRoomsMobile" target="" class="btn btn-secondary nav-button bookATableBTN show" onclick="return animateToWidget(event);">BOOK A TABLE</a>'
        );
      }
      $(".table_widget.section").insertBefore(".btn-sticky-bottom");
    }
  }, 100);
  setTimeout(function () {
    clearInterval(chkIntv);
  }, 15000);
}
