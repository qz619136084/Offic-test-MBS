//update when first time triggered
const targetNode = document.getElementById("upgrade_dialog");
const config = { attributes: true, childList: true, subtree: true };
const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type == "attributes" && mutation.attributeName == "style") {
      console.log(mutation.target);
      console.log(mutation.target == targetNode);
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
