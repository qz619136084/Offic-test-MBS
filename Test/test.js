function ajaxRequest() {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: "https://cdn.getlocalmeasure.com/public/2c487b798290e72336606ff881cb35d404777a2ca0ea5911014ca07d20e0/data.js",
      dataType: "jsonp",
      jsonpCallback:
        "jsonCallback_2c487b798290e72336606ff881cb35d404777a2ca0ea5911014ca07d20e0",
      success: function (res) {
        resolve(res);
      },
    });
  });
}
async function getDate() {
  var a = await ajaxRequest();
  console.log(a);
}
getDate();
