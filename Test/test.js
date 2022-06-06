$(function () {
  DYO.waitForElementAsync(".inner_circle_step.shapeborder_selected_in", 2)
    .then(() => {
      return new Promise((resolve, reject) => {
        if (
          f_getSessionStorage() != undefined &&
          $("#loading").css("display") == "none"
        ) {
          resolve();
        }
      });
    })
    .then(() => {
      onDataReady();
    });
  function onDataReady() {}
});
