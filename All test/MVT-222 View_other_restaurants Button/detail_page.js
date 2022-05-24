window.checkJq07080942 = setInterval(function () {
  if (typeof $ != "undefined") {
    $(function () {
      console.log("Detail Page");
      //Clear session first;
      sessionStorage.removeItem("SRSearchInfo");
      sessionStorage.removeItem("timeRange");
      sessionStorage.removeItem("availability_restaurants");
      sessionStorage.removeItem("dateSelected");
      var availabilityArr = [];
      $("body").on("click", ".v_viewotherctaArea", function (e) {
        e.preventDefault();
        $("#loading").show();
        var slotLength = $(".time-field span.displayed-text").text();
        //Store date and time range;
        sessionStorage.setItem("timeRange", slotLength);
        var dateSelected = $(
          ".dropdown-field:not(.party-size):not(.time-field) .displayed-text"
        )
          .text()
          .split(", ")[1];
        dateSelected = dateSelected.substring(0, dateSelected.length - 5);
        sessionStorage.setItem("dateSelected", dateSelected);
        //After testing, found that format of time require no blank: "7:00PM"✔ "7:00 PM"× --> get "undefined" from AJAX
        var dataStart = slotLength.split(" - ")[0].replace(" ", "");
        var dataEnd = slotLength.split(" - ")[1].replace(" ", "");
        var dt = joinTime3154V1(
          $(
            ".dropdown-field:not(.party-size):not(.time-field) .displayed-text"
          ).text(),
          "-"
        );
        var partySize = $(".displayed-text").eq(0).text().trim();
        sendAjax(dataStart, dataEnd, dt, partySize);
      });
      function sendAjax(dataStart, dataEnd, dt, partySize) {
        $.ajax({
          url: "/services/sr_request",
          type: "POST",
          contentType: "application/json;charset=UTF-8",
          data: JSON.stringify({
            url: "venue_groups/ahNzfnNldmVucm9vbXMtc2VjdXJlciELEhRuaWdodGxvb3BfVmVudWVHcm91cBiAgPCyrI3XCQw/availability",
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
            availabilityArr = res.data.availability;
            var updatedArr = JSON.stringify(
              availabilityArr
                .map(function (ele) {
                  return JSON.stringify(ele);
                })
                .join("~")
            );
            $(document).ajaxComplete(function () {
              setTimeout(function () {
                sessionStorage.setItem("availability_restaurants", updatedArr);
                //Obtain the value for "SRSearchInfo" session;
                var search_adult = $.trim(
                  $(".dropdown-field.party-size .displayed-text span").text()
                );
                var search_date_tx = $.trim(
                  $(
                    ".dropdown-field:not(.party-size):not(.time-field) .displayed-text"
                  ).text()
                );
                var SRSearchInfo = {
                  search_adult: search_adult,
                  search_date_tx: search_date_tx,
                  search_date: dt,
                  search_adult_tx: "Guest(s)",
                };
                //Create "SRSearchInfo" session;
                sessionStorage.setItem(
                  "SRSearchInfo",
                  JSON.stringify(SRSearchInfo)
                );
                window.location.href =
                  "https://www.marinabaysands.com/restaurants/view-all.html";
              }, 100);
              $(document).unbind("ajaxComplete");
            });
          },
          error: function (e) {
            sendAjax(dataStart, dataEnd, dt, partySize);
          },
        });
      }
      function joinTime3154V1(t, s) {
        var time = t ? new Date(t) : new Date();
        var a = [{ year: "numeric" }, { month: "numeric" }, { day: "numeric" }];
        function format(m) {
          var f = new Intl.DateTimeFormat("en", m);
          return f.format(time);
        }
        return a.map(format).join(s);
      }
    });
    clearInterval(window.checkJq07080942);
  }
}, 100);
