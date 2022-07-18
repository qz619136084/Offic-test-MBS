$(function () {
  var url = window.location.href;
  var replaceText = null;
  var positionText = null;
  if (url.indexOf("zh.") > -1) {
    replaceText = "低层景观";
    positionText = "2-9 层";
  } else if (url.indexOf("hk.") > -1) {
    replaceText = "低層景觀";
    positionText = "2 樓至 9 樓";
  } else if (url.indexOf("jp.") > -1) {
    replaceText = "低層階(窓ありビューなし)";
    positionText = "2階～9階";
  } else if (url.indexOf("ko.") > -1) {
    replaceText = "낮은층";
    positionText = "2층에서 9층";
  } else if (url.indexOf("id.") > -1) {
    replaceText = "Lantai Bawah";
    positionText = "Terletak di L2 hingga L9";
  } else {
    replaceText = "Lower Floor";
    positionText = "Located on L2 to L9";
  }
  if (url.indexOf("/RoomSelectionPage.aspx") > -1) {
    var waitComponentShow = setInterval(() => {
      var stepSelected = $(".inner_circle_step.shapeborder_selected_in");
      if (stepSelected.length == 2) {
        updateInRoomList();
        bindFilterClick();
        observe_multiRoomBanner();
        clearInterval(waitComponentShow);
      }
    }, 100);
  } else if (url.indexOf("/GuestInformationPage.aspx") > -1) {
    updatePaymentSidebar();
  } else if (url.indexOf("/BookingConfirmation.aspx") > -1) {
    DYO.waitForElementAsync(".rateCell").then(() => {
      $(".rateCell:contains('" + replaceText + "')").each(function () {
        var target = $(this).children("div");
        target.text(
          target
            .text()
            .replace(" - " + replaceText, "")
            .trim()
        );
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
    delayUpdate()
      .then(() => {
        return waitUpdate();
      })
      .then(() => {
        console.log("hiding lower floor");
        //bind click to update detail card
        bindRoomDetailClick();
        //filter
        $("#wtRoomViewDropdown option:contains(" + replaceText + ")").hide();
        //room card
        $(
          ".room_card .room_ImageCenterPanel:has(.txt-black-five:contains('" +
            replaceText +
            "')) .amenitiesDiv"
        ).each(function () {
          var target = $(this).find(".txt-lg-lr:last");
          target.text(positionText);
        });
        $(
          ".room_card .room_ImageCenterPanel .txt-black-five:contains('" +
            replaceText +
            "')"
        ).each(function () {
          var text = $(this)
            .html()
            .replace("&nbsp;-&nbsp;" + replaceText, "")
            .trim();
          $(this).html(text);
        });

        $("body").removeClass("flicker370");
      });
  }
  function updateInMultiRoomTab() {
    $("body").addClass("flicker370");
    delayUpdate().then(() => {
      //multi room tab
      $("#wtListRoomInfo .pl-1.pt-1.bold:contains('" + replaceText + "')").each(
        function () {
          var text = $(this)
            .text()
            .replace(" - " + replaceText, "");
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
            console.log("changing");
            $("#wtRoomListContainer").addClass("updating");
            updateInRoomList();
          }
        );
      }
    );
    DYO.waitForElementAsync("#wt78").then(() => {
      $("#wt78").bind("click.hideLower", () => {
        console.log("clicking");
        $("#wtRoomListContainer").addClass("updating");
        updateInRoomList();
      });
    });
  }
  function updatePaymentSidebar() {
    DYO.waitForElementAsync("#wtRoominfoWrapper .responsiveTable").then(() => {
      $(
        "#wtRoominfoWrapper .responsiveTable:contains('" + replaceText + "')"
      ).each(function () {
        var target = $(this).find("span:eq(0)");
        var text = target.text().replace(" - " + replaceText, "");
        target.text(text);
      });
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
      $(
        "#wtmodalRoomdetails .modal-head .h5:contains('" + replaceText + "')"
      ).text(
        $("#wtmodalRoomdetails .modal-head .h5:contains('" + replaceText + "')")
          .text()
          .replace("" + replaceText, "")
          .trim()
      );
      $(".accordion_card .ListRecords").each((i, v) => {
        if (i < 2) {
          $(v).find(".circle_bullet:last").text(positionText);
        }
      });
    });
  }
  function waitUpdate() {
    return new Promise((resolve) => {
      var check = setInterval(() => {
        if (!$("#wtRoomListContainer").hasClass("updating")) {
          console.log("updating done");
          resolve();
          clearInterval(check);
        }
      }, 100);
    });
  }
});
