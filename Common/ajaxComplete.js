$(document).ajaxComplete(function (testEvent, testXHR, testOptions) {
  console.log("event: " + testEvent);
  console.log("xhr: " + testXHR);
  console.log("options: " + testOptions);
});
