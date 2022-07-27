$(function () {
  var url = window.location.href;
  var replaceText = null;
  if (url.indexOf("zh.") > -1) {
    replaceText = "低层";
  } else if (url.indexOf("hk.") > -1) {
    replaceText = "低層";
  } else if (url.indexOf("jp.") > -1) {
    replaceText = "低層階";
  } else if (url.indexOf("ko.") > -1) {
    replaceText = "저층";
  } else if (url.indexOf("id.") > -1) {
    replaceText = "Lower Floor";
  } else {
    replaceText = "Lower Floor";
  }
  if (url.indexOf("/booking/rooms.html") > -1) {
    var waitComponentShow = setInterval(() => {
      var stepSelected = $(".inner_circle_step.shapeborder_selected_in");
      if (stepSelected.length == 2) {
        var getData = setInterval(() => {
          if (
            f_getSessionStorage() != undefined &&
            $("#loading").css("display") == "none"
          ) {
            updateInRoomList();
            bindFilterClick();
            observe_multiRoomBanner();
            bindRoomDetailClick();
            var bindEditClick1717 = setInterval(() => {
              if ($("#booking_information_edit").length) {
                $("#booking_information_edit").click(() => {
                  var currentDate = f_getSessionStorage().checkindate;
                  var currentLos = f_getSessionStorage().los;
                  var currentRooms = f_getSessionStorage().rooms;
                  var bindSelectClick = setInterval(() => {
                    if ($("#s_btn_view_rooms").length) {
                      $("#s_btn_view_rooms").click(() => {
                        var waitUpdatedSession = setInterval(() => {
                          if (
                            f_getSessionStorage() != undefined &&
                            $("#loading").css("display") == "none"
                          ) {
                            var calendarDate = $(".calendar_date_select")
                              .eq(0)
                              .attr("data-daydata");
                            var calendarLos =
                              $(".calendar_date_select_range").length + 1;
                            var calendarRooms = $(
                              "#rate_container_box .rate_item"
                            ).length;
                            if (
                              !(
                                currentDate == calendarDate &&
                                currentLos == calendarLos &&
                                currentRooms == calendarRooms
                              )
                            ) {
                              updateInRoomList();
                              bindFilterClick();
                              observe_multiRoomBanner();
                              bindRoomDetailClick();
                            }
                            clearInterval(waitUpdatedSession);
                          }
                        }, 100);
                      });
                      clearInterval(bindSelectClick);
                    }
                  }, 100);
                });
                clearInterval(bindEditClick1717);
              }
            }, 100);
            clearInterval(getData);
          }
        }, 100);
        clearInterval(waitComponentShow);
      }
    }, 100);
  } else if (url.indexOf("/booking/multirooms.html") > -1) {
    // waitPriceUpdate().then(() => {
    DYO.waitForElementAsync(".mulroom_card_right .vb+strong").then(() => {
      $(".mulroom_card_right .vb+strong:contains('" + replaceText + "')").each(
        function () {
          var text = $(this)
            .text()
            .replace("-" + replaceText, "");
          $(this).text(text);
        }
      );
    });
    // });
  } else if (url.indexOf("/booking/payment.html") > -1) {
    DYO.waitForElementAsync("#room_info .edit_txt").then(() => {
      $("#room_info .edit_txt").click(() => {
        DYO.waitForElementAsync("#s_btn_view_rooms").then(() => {
          $("#s_btn_view_rooms").click(() => {
            delayUpdate().then(() => {
              updatePaymentSidebar();
            });
          });
        });
      });
    });
    updatePayment();
  } else if (url.indexOf("/booking/confirmation.html") > -1) {
    DYO.waitForElementAsync(".data-card .txt-lg-lr").then(() => {
      $(".data-card .txt-lg-lr:contains('" + replaceText + "')").each(
        function () {
          var text = $(this)
            .text()
            .replace(" - " + replaceText, "");
          $(this).text(text);
        }
      );
    });
  }
  function delayUpdate() {
    return new Promise((resolve, reject) => {
      var check = setInterval(() => {
        if ($("#loading").css("display") == "none") {
          resolve();
          clearInterval(check);
        }
      }, 100);
    });
  }
  function observe_multiRoomBanner() {
    var roomsNo = getParaQuery("Rooms");
    if (roomsNo > 1) {
      updateInMultiRoomTab();
      var targetNode = document.getElementById("multiRoomBanner_outlet");
      var config = { attributes: true, childList: true, subtree: true };
      var callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
          if (mutation.type === "childList") {
            var addedNodes = mutation.addedNodes;
            var removedNodes = mutation.removedNodes;
            if (
              $.inArray($(".banner_card_outlet")[0], addedNodes) > -1 ||
              $.inArray($(".banner_card_outlet")[0], removedNodes) > -1
            ) {
              $("body").addClass("flicker370");
              setTimeout(() => {
                updateInRoomList();
                updateInMultiRoomTab();
                bindFilterClick();
                bindRoomDetailClick();
              }, 300);
            }
          }
        }
      };
      var observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }
  }
  function getParaQuery(para) {
    var paraString = window.location.search.substring(1);
    var paraArr = paraString.split("&");
    for (i = 0; i < paraArr.length; i++) {
      var name = paraArr[i].split("=")[0];
      var value = paraArr[i].split("=")[1];
      if (para == name) {
        return value;
      }
    }
  }
  function updateInRoomList() {
    $("body").addClass("flicker370");
    delayUpdate().then(() => {
      //filter
      $("li[roomview='" + replaceText + "']").hide();
      //room card
      $(".room_card .room_ImageCenterPanel .txt-black-five").each(function () {
        $(this)
          .find("span:contains('" + replaceText + "')")
          .hide();
        /* var text = $(this).text().trim();
          $(this).text(text); */
      });
      $("body").removeClass("flicker370");
    });
  }
  function updateInMultiRoomTab() {
    $("body").addClass("flicker370");
    delayUpdate().then(() => {
      //multi room tab
      $(".banner_card_title b:contains('" + replaceText + "')").each(
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
    $(".room_filters_dropdown:not(.dy-bath-filter) a+ul li").unbind(
      "click.hideLower"
    );
    $(".room_filters_dropdown.dy-bath-filter a+ul li input").unbind(
      "click.hideLower"
    );
    $(".currency_dropdown a+ul li").unbind("click.hideLower");
    $("#sort_by").unbind("click.hideLower");
    DYO.waitForElementAsync(
      ".room_filters_dropdown:not(.dy-bath-filter) a+ul li"
    ).then(() => {
      $(".room_filters_dropdown:not(.dy-bath-filter) a+ul li").bind(
        "click.hideLower",
        () => {
          updateInRoomList();
          bindRoomDetailClick();
        }
      );
    });
    DYO.waitForElementAsync(
      ".room_filters_dropdown.dy-bath-filter a+ul li input"
    ).then(() => {
      $(".room_filters_dropdown.dy-bath-filter a+ul li input").bind(
        "click.hideLower",
        () => {
          updateInRoomList();
          bindRoomDetailClick();
        }
      );
    });
    DYO.waitForElementAsync(".currency_dropdown a+ul li").then(() => {
      $(".currency_dropdown a+ul li").bind("click.hideLower", () => {
        updateInRoomList();
        bindRoomDetailClick();
      });
    });
    DYO.waitForElementAsync("#sort_by").then(() => {
      $("#sort_by").bind("click.hideLower", () => {
        updateInRoomList();
        bindRoomDetailClick();
      });
    });
  }
  function updatePayment() {
    updatePaymentSidebar();
    //update when first time triggered
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
            if (!$("#upgrade_dialog").hasClass("370showed")) {
              //update text
              $(".currentRoomName:contains('" + replaceText + "')").text(
                $(".currentRoomName:contains('" + replaceText + "')")
                  .text()
                  .replace(" - " + replaceText, "")
              );
              $(".roomName:contains('" + replaceText + "')").text(
                $(".roomName:contains('" + replaceText + "')")
                  .text()
                  .replace(" - " + replaceText, "")
              );
              //bind click on 'upgrade'
              if (!$("#upgrade").hasClass("370binded")) {
                $("#upgrade")
                  .addClass("370binded")
                  .click(() => {
                    updateUpgradeBox();
                  });
              }
              $("#upgrade_dialog").addClass("370showed");
            }
          } else {
            $("#upgrade_dialog").removeClass("370showed");
            updatePaymentSidebar();
            //bind undo button
            $(".undo_upgrade").click(() => {
              updatePaymentSidebar();
            });
          }
        }
      }
    };
    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
  function waitUpgradeBox() {
    return new Promise((resolve, reject) => {
      var check = setInterval(() => {
        if ($(".upgraded").css("display") != "none") {
          resolve();
          clearInterval(check);
        }
      }, 100);
    });
  }
  function updateUpgradeBox() {
    delayUpdate()
      .then(() => {
        return waitUpgradeBox();
      })
      .then(() => {
        $(".undo_title b:contains('" + replaceText + "')").text(
          $(".undo_title b:contains('" + replaceText + "')")
            .text()
            .replace(" - " + replaceText, "")
        );
      });
  }
  function updatePaymentSidebar() {
    DYO.waitForElementAsync(
      ".roomInfoBlock .panel_txt:not(.roomBlockTitle)"
    ).then(() => {
      $(
        ".roomInfoBlock .panel_txt:not(.roomBlockTitle):contains('" +
          replaceText +
          "')"
      ).each(function () {
        var text = $(this)
          .text()
          .replace(" - " + replaceText, "");
        $(this).text(text);
      });
    });
  }
  function bindRoomDetailClick() {
    delayUpdate().then(() => {
      $(".view_room_details_link").unbind("click.hideLower");
      $(".room_ImagePanel div").unbind("click.hideLower");
      $(".view_room_details_link").bind("click.hideLower", () => {
        console.log("link clicking");
        updateRoomDetailBanner();
      });
      $(".room_ImagePanel").each(function () {
        $(this)
          .children("div:eq(0)")
          .bind("click.hideLower", () => {
            console.log("image clicking");
            updateRoomDetailBanner();
          });
      });
    });
  }
  function updateRoomDetailBanner() {
    delayUpdate().then(() => {
      $("#view_room_details .modal_title:contains('" + replaceText + "')").text(
        $("#view_room_details .modal_title:contains('" + replaceText + "')")
          .text()
          .replace("" + replaceText, "")
          .trim()
      );
    });
  }
  function waitPriceUpdate() {
    return new Promise((resolve, reject) => {
      var check = setInterval(() => {
        if ($("body").hasClass("updatedPrice")) {
          resolve();
          clearInterval(check);
        }
      }, 100);
    });
  }
});
