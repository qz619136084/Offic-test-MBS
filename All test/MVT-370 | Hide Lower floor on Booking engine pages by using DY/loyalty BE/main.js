$(function () {
  var url = window.location.href;
  if (url.indexOf("/RoomSelectionPage.aspx") > -1) {
    var waitComponentShow = setInterval(() => {
      var stepSelected = $(".inner_circle_step.shapeborder_selected_in");
      if (stepSelected.length == 2) {
        updateInRoomList();
        bindFilterClick();
        observe_multiRoomBanner();
        bindRoomDetailClick();
        clearInterval(waitComponentShow);
      }
    }, 100);
  } else if (url.indexOf("/GuestInformationPage.aspx") > -1) {
    updatePaymentSidebar();
  } else if (url.indexOf("/BookingConfirmation.aspx") > -1) {
    DYO.waitForElementAsync(".rateCell").then(() => {
      $(".rateCell:contains(Lower Floor)").each(function () {
        var target = $(this).children("div");
        target.text(target.text().replace(" - Lower Floor", "").trim());
      });
    });
  }
  function delayUpdate() {
    return new Promise((resolve, reject) => {
      var check = setInterval(() => {
        if ($(".loading-icon").css("display") == "none") {
          resolve();
          clearInterval(check);
        }
      }, 100);
    });
  }
  function observe_multiRoomBanner() {
    var multi = $("#wtSelectionContainer").css("display");
    if (multi != "none") {
      updateInMultiRoomTab();
      var targetNode = document.getElementById("wtSelectionContainer");
      var config = { attributes: true, childList: true, subtree: true };
      var callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
          if (mutation.type === "childList") {
            console.log("multi changing");
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
    }
  }
  function updateInRoomList() {
    $("body").addClass("flicker370");
    delayUpdate().then(() => {
      //filter
      $("#wtRoomViewDropdown option[value='Lower Floor']").hide();
      //room card
      setTimeout(() => {
        $(
          ".room_card .room_ImageCenterPanel .txt-black-five:contains(Lower Floor)"
        ).each(function () {
          var text = $(this)
            .html()
            .replace("&nbsp;-&nbsp;Lower Floor", "")
            .trim();
          $(this).html(text);
        });
        $(
          ".room_card .room_ImageCenterPanel .amenitiesDiv:contains(Lower Floor)"
        ).each(function () {
          var target = $(this).find(".txt-lg-lr:last");
          target.text("Located on L2 to L9");
        });
        $("body").removeClass("flicker370");
      }, 600);
    });
  }
  function updateInMultiRoomTab() {
    $("body").addClass("flicker370");
    delayUpdate().then(() => {
      //multi room tab
      $("#wtListRoomInfo .pl-1.pt-1.bold:contains(Lower Floor)").each(
        function () {
          var text = $(this).text().replace(" - Lower Floor", "");
          $(this).text(text);
        }
      );
      $("body").removeClass("flicker370");
    });
  }
  function bindFilterClick() {
    $("#wtfilters select.room_filters_dropdown").unbind("change.hideLower");
    $("#wt78").unbind("click.hideLower");
    DYO.waitForElementAsync("#wtfilters select.room_filters_dropdown").then(
      () => {
        $("#wtfilters select.room_filters_dropdown").bind(
          "change.hideLower",
          () => {
            updateInRoomList();
            bindRoomDetailClick();
          }
        );
      }
    );
    DYO.waitForElementAsync("#wt78").then(() => {
      $("#wt78").bind("click.hideLower", () => {
        updateInRoomList();
        bindRoomDetailClick();
      });
    });
  }
  function updatePaymentSidebar() {
    DYO.waitForElementAsync("#wtRoominfoWrapper .responsiveTable").then(() => {
      $("#wtRoominfoWrapper .responsiveTable:contains('Lower Floor')").each(
        function () {
          var target = $(this).find("span:eq(0)");
          var text = target.text().replace(" - Lower Floor", "");
          target.text(text);
        }
      );
    });
  }
  function bindRoomDetailClick() {
    delayUpdate().then(() => {
      $(".view_room_details_link a").unbind("click.hideLower");
      $(".room_ImagePanel a").unbind("click.hideLower");
      $(".view_room_details_link a").bind("click.hideLower", () => {
        console.log("link clicking");
        updateRoomDetailBanner();
      });
      $(".room_ImagePanel").each(function () {
        $(this)
          .children("a")
          .bind("click.hideLower", () => {
            console.log("image clicking");
            updateRoomDetailBanner();
          });
      });
    });
  }
  function updateRoomDetailBanner() {
    delayUpdate().then(() => {
      $("#wtmodalRoomdetails .modal-head .h5:contains(Lower Floor)").text(
        $("#wtmodalRoomdetails .modal-head .h5:contains(Lower Floor)")
          .text()
          .replace("Lower Floor", "")
          .trim()
      );
      $(".accordion_card .ListRecords").each(function () {
        var target = $(this).find(".circle_bullet:contains(Lower Floor)");
        target.text("Located on L2 to L9");
      });
    });
  }
});
