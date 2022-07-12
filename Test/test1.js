var targetNode = document.getElementById("wtListRoomInfo");
var config = { attributes: true, childList: true, subtree: true };
var callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      $("body").addClass("flicker370");
      setTimeout(() => {
        updateInRoomList();
        updateInMultiRoomTab();
        bindFilterClick();
        bindRoomDetailClick();
      }, 300);
    }
  }
};
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);
