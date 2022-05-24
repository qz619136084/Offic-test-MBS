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
    typeof jQuery === "function" &&
    !document.querySelector(".marina4383v1") &&
    document.querySelector(".dropdown-list .item") &&
    typeof sevenrooms_venueID != "undefined" &&
    typeof sevenrooms_token != "undefined" &&
    el &&
    el.innerText > 0
  ) {
    applyChanges4383V1();
    if (!jQuery(".imageLoading").length) {
      jQuery("body").append(
        '<div class="imageLoading"><img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/176372/images/06d41ac4dff347ac8c07809505287e6f_loading-img2.gif" alt="" /></div>'
      );
    }
    document.documentElement.classList.add("marina4383v1");
  } else if (!document.getElementsByClassName("marina4383v1").length) {
    window.requestAnimationFrame(marina4383v1);
  }
};
window.marina4383v1();
function applyChanges4383V1() {
  var setInter = setInterval(function () {
    if (!document.querySelector(".running4383")) {
      document.documentElement.classList.add("running4383");
      //jQuery('.cur-month.cur-day.date-item').trigger('click');
      //makeSlotChanges4383V1();
      jQuery(".cur-month.cur-day.date-item").trigger("click");
      addDateClick4383V1();
      jQuery(
        ".table-widget-container .calendar-filter-box .arrow-next, .table-widget-container .calendar-filter-box .arrow-prev"
      ).on("click", function () {
        addDateClick4383V1();
      });
      jQuery(".time-field .dropdown-list span.item").on("click", function () {
        setTimeout(function () {
          addSelectedSlotAvailability3254V1();
        }, 100);
      });
      jQuery(".table-widget-container .dropdown-field.time-field").on(
        "click",
        function (e) {
          console.log("clicking");
          var clickedField = $(this);
          if (!jQuery(this).hasClass("hasCompleted")) {
            e.preventDefault();
            timeLineClicked++;
            makeSlotChanges4383V1(slotCount, timeLineClicked, clickedField);
            jQuery(this).removeClass("active");
            return false;
          }
        }
      );
    }
    clearInterval(setInter);
    setTimeout(function () {
      clearInterval(setInter);
    }, 5000);
  }, 100);
}
function addDateClick4383V1() {
  jQuery(".date-item, .party-size span.item, .btn-book-ticket").on(
    "click",
    function () {
      var clickedField = $(this)
        .closest(".table-widget-body")
        .find(".dropdown-field.time-field");
      setTimeout(function () {
        jQuery(
          ".table-widget-container .dropdown-field.time-field"
        ).removeClass("hasCompleted");
      }, 100);
      slotCount = 0;
      timeLineClicked = 0;
      makeSlotChanges4383V1(slotCount, timeLineClicked, clickedField);
    }
  );
}
function makeSlotChanges4383V1(slotCount, timeLineClicked, clickedEl) {
  clickedEl.parent().addClass("processing");
  clickedEl.find("span.displayed-text").attr("slot-data", "");
  var slotLength = clickedEl.find("span.item");
  slotLength.each(function () {
    var dataStart = jQuery(this).attr("data-start");
    var dataEnd = jQuery(this).attr("data-end");
    console.log(
      "time: " +
        clickedEl
          .closest(".table-widget-body")
          .find(".displayed-text.selected")
          .text()
    );
    var dt = joinTime4383V1(
      clickedEl
        .closest(".table-widget-body")
        .find(".displayed-text.selected")
        .text(),
      "-"
    );
    console.log("dt: " + dt);
    var partySize = clickedEl
      .closest(".table-widget-body")
      .find(".displayed-text")
      .eq(0)
      .text()
      .trim();
    var that = jQuery(this);
    var dtStart = dataStart.replace("AM", " AM").replace("PM", " PM");
    var dtEnd = dataEnd.replace("AM", " AM").replace("PM", " PM");
    dtStart = get24HourFormatTime3254V1(dtStart);
    dtEnd = get24HourFormatTime3254V1(dtEnd);
    jQuery.ajax({
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
          addSelectedSlotAvailability3254V1();
          clickedEl.addClass("hasCompleted");
          if (slotCount == 0 && timeLineClicked != 0) {
            var chkClickIntv = setInterval(function () {
              if (!clickedEl.parent().hasClass("processing")) {
                clickedEl.click();
                clearInterval(chkClickIntv);
              }
            }, 100);
            slotCount++;
          }
        }
      },
      error: function (e) {
        clickedEl.parent().addClass("processing");
        console.log("Unable to get the data", e);
      },
    });
  });
  setTimeout(function () {
    clickedEl.parent().removeClass("processing");
  }, 1500);
  jQuery(".v_viewotherctaArea a").text("View other restaurants");
}
function checkSlot4383V1(slot) {
  return slot.type == "request";
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
function addSelectedSlotAvailability3254V1() {
  var slotText = jQuery(
    ".dropdown-field.time-field span.displayed-text"
  ).text();
  slotText = slotText.trim();
  var cnt = 0;
  jQuery(".time-field .dropdown-list span.item").each(function () {
    if (
      jQuery(this).hasClass("slotBooked") &&
      jQuery(this).text().trim() == slotText
    ) {
      jQuery(".dropdown-field.time-field span.displayed-text").attr(
        "slot-data",
        "Slot unavailable"
      );
      cnt++;
    } else {
      if (cnt == 0) {
        jQuery(".dropdown-field.time-field span.displayed-text").attr(
          "slot-data",
          "Available"
        );
      }
    }
  });
}
function changeTimeFormat3254V1(time) {
  time = time
    .replace("AM", " AM")
    .replace("am", " am")
    .replace("PM", " PM")
    .replace("pm", " pm");
  var hours = Number(time.match(/^(\d+)/)[1]);
  var minutes = Number(time.match(/:(\d+)/)[1]);
  var AMPM = time.match(/\s(.*)$/)[1].toLowerCase();
  if (AMPM == "pm" && hours < 12) hours = hours + 12;
  if (AMPM == "am" && hours == 12) hours = hours - 12;
  var sHours = hours.toString();
  var sMinutes = minutes.toString();
  if (hours < 10) sHours = "0" + sHours;
  if (minutes < 10) sMinutes = "0" + sMinutes;
  return sHours + ":" + sMinutes;
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
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (timeOutFn) {
    return setTimeout(timeOutFn, 1000 / 60);
  };
window["marinabaysands_respdp_3148_v1"] = function () {
  if (
    typeof jQuery !== typeof undefined &&
    jQuery(".search-box").length &&
    !document.querySelectorAll(".marinabaysands_respdp_3148_v1").length
  ) {
    updateChanges_marinabaysands_respdp_3148_v1();
    document
      .querySelector("body")
      .classList.add("marinabaysands_respdp_3148_v1");
  } else if (
    !document.getElementsByClassName("marinabaysands_respdp_3148_v1").length
  ) {
    window.requestAnimationFrame(marinabaysands_respdp_3148_v1);
  }
};
window.marinabaysands_respdp_3148_v1();
function updateChanges_marinabaysands_respdp_3148_v1() {
  addViewOtherCta();
  fixDateDropdown();
  checkIfNoSlotAvailable();
  jQuery(document).click(function () {
    checkIfNoSlotAvailable();
  });
  jQuery(".dropdown-field, .dropdown-list .item, .date-table").click(
    function () {
      checkIfNoSlotAvailable();
    }
  );
  jQuery(document).ajaxComplete(function () {
    checkIfNoSlotAvailable();
    jQuery("body.v_dateSelected").removeClass("v_dateSelected");
    setTimeout(function () {
      if (!jQuery("body.v_dateSelected").length) {
        fixDateDropdown();
      }
    }, 200);
  });
}
function addViewOtherCta() {
  if (!jQuery(".v_viewotherctaArea").length) {
    jQuery(".search-box")
      .parents(".t-body")
      .append(
        '<div class="v_viewotherctaArea"><a href="https://www.marinabaysands.com/restaurants/view-all.html">View other restaurants</a></div>'
      );
  }
}
function fixDateDropdown() {
  var dateText = jQuery(".dropdown-list.table-calendar")
    .parents(".dropdown-field")
    .find(".displayed-text");
  if (dateText && !dateText.text().length) {
    // dateText.text('Select Date');
    jQuery(".cur-month.cur-day.date-item").click();
    jQuery("body").addClass("v_dateSelected");
  }
}
function checkIfNoSlotAvailable() {
  if (
    jQuery(".search-box")
      .parents(".t-body")
      .find(".error-msg.regular-error:visible").length
  ) {
    jQuery(".v_viewotherctaArea").show();
  } else {
    jQuery(".v_viewotherctaArea").hide();
  }
}
