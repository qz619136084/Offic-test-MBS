//Ajax for every time range; In final version, just need one time range which was selected;
var slotLength = jQuery(".time-field span.item");
slotLength.each(function () {
  var dataStart = jQuery(this).attr("data-start");
  var dataEnd = jQuery(this).attr("data-end");
  var dt = joinTime3154V1(
    jQuery(".dropdown-field .displayed-text.selected").text(),
    "-"
  );
  var partySize = jQuery(".displayed-text").eq(0).text().trim();
  console.log("partySize: " + partySize);
  console.log("dt: " + dt);
  console.log("dataStart: " + dataStart);
  console.log("dataEnd: " + dataEnd);
  jQuery.ajax({
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
      console.log(res.data);
    },
    error: function (e) {
      console.log("Unable to get the data", e);
    },
  });
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
