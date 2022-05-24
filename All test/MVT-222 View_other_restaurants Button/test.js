var slotLength = $(".time-field span.displayed-text").text();
//After testing, found that format of time require no blank: "7:00PM"✔ "7:00 PM"× --> get "undefined" from AJAX
var dataStart = slotLength.split(" - ")[0].replace(" ", "");
var dataEnd = slotLength.split(" - ")[1].replace(" ", "");
var dt = joinTime3154V1(
  $(".dropdown-field:not(.party-size):not(.time-field) .displayed-text").text(),
  "-"
);
var partySize = $(".displayed-text").eq(0).text().trim();
console.log("partySize: " + partySize);
console.log("dt: " + dt);
console.log("dataStart: " + dataStart);
console.log("dataEnd: " + dataEnd);
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
    /* var updatedArr = JSON.stringify(
      availabilityArr
        .map(function (ele) {
          return JSON.stringify(ele);
        })
        .join("~")
    ); */
    $(document).ajaxComplete(function () {
      console.log("AJAX completed");
      console.log(availabilityArr);
      /* setTimeout(function () {
        sessionStorage.setItem("availability_restaurants", updatedArr);
      }, 100);
      var availability_restaurants = JSON.parse(
        sessionStorage.getItem("availability_restaurants")
      )
        .split("~")
        .map(function (ele) {
          return JSON.parse(ele);
        }); */ //Summarize the data of times;
      var availability_restaurants = availabilityArr;
      var availabilityList = [];
      for (let i = 0; i < availability_restaurants.length; i++) {
        var availability = availability_restaurants[i].availability.length;
        if (availability > 0) {
          var venue_name = availability_restaurants[i].venue_name;
          var timeArr = [];
          var timeList = availability_restaurants[i].availability[0].times;
          /* console.log(
            "venueName: " + venue_name + "-------" + "timeList: " + timeList
          ); */
          for (let k = 0; k < timeList.length; k++) {
            var type = timeList[k].type;
            var time = timeList[k].time;
            console.log(
              "venue_name: " +
                venue_name +
                "; " +
                "type: " +
                type +
                "; " +
                "time: " +
                time
            );
            if (type == "book") {
              /* console.log("index: " + i); */
              timeArr.push(time);
            }
          }
          if (timeArr.length > 0) {
            var availabilityObj = { name: venue_name, times: timeArr };
            availabilityList.push(availabilityObj);
          }
        } else {
          console.log("no availability");
        }
      }
      console.log(availabilityList);
      $(document).unbind("ajaxComplete");
    });
  },
  error: function (e) {
    console.log("Unable to get the data", e);
  },
});
function joinTime3154V1(t, s) {
  var time = t ? new Date(t) : new Date();
  var a = [{ year: "numeric" }, { month: "numeric" }, { day: "numeric" }];
  function format(m) {
    var f = new Intl.DateTimeFormat("en", m);
    return f.format(time);
  }
  return a.map(format).join(s);
}
