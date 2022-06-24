$("#upgrade_dialog")
  .find(".upgrade_body")
  .on("click", ".upgradeBlock", function () {
    console.log("click");
  });
var targetNode = document.getElementById("upgrade_dialog");
var config = { attributes: true, childList: true, subtree: true };
var callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (
      mutation.type == "attributes" &&
      mutation.attributeName == "style" &&
      mutation.target == targetNode
    ) {
      if ($("#upgrade_dialog").css("display") == "block") {
        if (!$("#upgrade_dialog").hasClass("showed")) {
          //bind click on 'upgrade'
          if (!$("#upgrade").hasClass("binded")) {
            $("#upgrade")
              .addClass("binded")
              .click(() => {
                console.log("clicked");
              });
          }

          $("#upgrade_dialog").addClass("showed");
        }
      } else {
        $("#upgrade_dialog").removeClass("showed");
      }
    }
  }
};
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);
