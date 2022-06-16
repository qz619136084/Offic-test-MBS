/**
 * Created by LeoZhuo on 2019/5/28.
 */
var mpgs_errTimes = 0;
function f_boody_style_reset() {
  $("html").css({ overflow: "auto" });
  $("body").css({ height: "auto", position: "relative" });
  // window.Checkout=null;
  // $("iframe[title='Hosted Checkout']").remove();
  // if(document.getElementById('MPGSScript')){
  // 	document.getElementById('MPGSScript').parentNode.removeChild(document.getElementById('MPGSScript'));
  // }
}
function errorCallback(error) {
  loading_show();
  if (mpgs_errTimes < 2) {
    mpgs_errTimes += 1;
    setTimeout(function () {
      Checkout_configure(f_getSessionStorage().session.mpgsSessionId);
    }, 1000);
  } else {
    f_boody_style_reset();
    f_showErrMassage(
      bookingEngine_global_data.global.errorArea.mpgs_error_alert
    );
    //f_link_to_errPage();
  }
}
function cancelCallback() {
  loading_show();
  f_fetch(
    url_mpgs_transaction + "?orderId=" + f_getSessionStorage().session.orderId,
    function (res) {
      var errorCode = "error_code_" + res.data.statusCode;
      for (var p in bookingEngine_global_data.global.errorArea) {
        if (p.toString() === errorCode) {
          var elem = $("#main_container").find(".paymentIssue");
          elem.text(bookingEngine_global_data.global.errorArea[p]);
          elem.show();
        }
      }
      loading_hide();
      f_boody_style_reset();
    },
    function (errRes) {
      f_boody_style_reset();
      if (errRes.ttCode === "5004") {
        return true;
      }
    }
  );
  //window['MPGScancel']();
}
var _isMPGScomplete = false;
function completeCallback(resultIndicator, sessionVersion) {
  if (_isMPGScomplete) return;
  //get MPGS pay result
  loading_show();
  _isMPGScomplete = true;
  var storeState = f_getSessionStorage();
  //post url_booking api
  var bookingPostData = {
    orderId: storeState.session.orderId,
    successIndicator: resultIndicator,
  };
  var requestDate = moment().format();
  f_fetch(
    url_booking,
    function (bookingRes) {
      loading_show();
      f_setStoreState("guestPaymentResult", bookingRes.data);
      var routerSearch = getRouterSearch();
      var url_href =
        bookingEngine_global_data.global.pathArea.confirmationPath +
        ".html?confirmation_code=" +
        bookingRes.data[0].confirmationCode +
        "&offerCode=" +
        f_getOfferCodeFromURL("offerCode") +
        "&flow=tf&multi=" +
        routerSearch.multi;
      window.location.href = url_href;
      //var guestInfo=bookingRes.
    },
    function (res, resDate) {
      var bookigErrorDynatrace = {
        value: res ? "Booking Api Business Error" : "Booking Api Network Error",
        hint:
          requestDate +
          "," +
          (resDate ? moment(resDate).format() : "") +
          "," +
          storeState.session.orderId +
          "," +
          (res ? res.ttCode : "") +
          "," +
          (res ? res.message : ""),
        //			hint:requestDate+','+(resDate?moment(resDate).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'):'')+','+storeState.session.orderId+','+(res?res.ttCode:'')+','+(res?res.message:'')
      };
      f_setStoreState("bookigErrorDynatrace", bookigErrorDynatrace);
      f_boody_style_reset();
      f_link_to_errPage();
    },
    bookingPostData,
    false,
    true,
    60000
  );
}

var booking_payment_content_data = JSON.parse(
  $("#booking_payment_content_data").html()
);
var paymentMethod_content_data = JSON.parse(
  $("#paymentMethod_content_data").html()
);
var upgradeView_content_data = JSON.parse(
  $("#upgradeView_content_data").html()
);
var intl;
//window.scrollTo (0, document.getElementById("booking_page_step_container").offsetTop);

//If user input link directly
function f_isDirect() {
  var storeState = f_getSessionStorage();
  if (isModeEdit) {
    loading_hide();
    $("#UpgradeBox").show();
  } else if (!storeState.availableOffers && !isModeEdit) {
    //		window.location.href = bookingEngine_global_data.global.pathArea.searchPath + ".html";
  }
}

//Init
function f_initRoomInfo(reRender) {
  try {
    var storeState = f_getSessionStorage();
    var checkin = storeState.checkindate;
    var checkin_year = moment(checkin).format("YYYY");
    var checkin_mont_num = moment(checkin).format("M");
    var checkin_month =
      bookingEngine_global_data.global.DateArea.roomMonth[checkin_mont_num - 1];
    var checkin_day = moment(checkin).format("D");
    var checkout = storeState.checkoutdate;
    var checkout_year = moment(checkout).format("YYYY");
    var checkout_month_num = moment(checkout).format("M");
    var checkout_month =
      bookingEngine_global_data.global.DateArea.roomMonth[
        checkout_month_num - 1
      ];
    var checkout_day = moment(checkout).format("D");

    var stringAdults, totalPrice;
    var array = [];
    var chargeTips = 0;
    var taxTotalPrice = 0;
    var insertRoom = "";
    var insertHtml = "";
    var totalSGDOfferPrice = 0;
    var totalSGDTaxPrice = 0;
    var currencyPrice = 0;
    var symbol = storeState.propertyInfo.supportedCurrencies.filter(function (
      symbol
    ) {
      return symbol.code === storeState.currency;
    })[0].symbol;
    var SGD_symbol = storeState.propertyInfo.supportedCurrencies.filter(
      function (symbol) {
        return symbol.code === "SGD";
      }
    )[0].symbol;
    $("#room_info")
      .find(".checkin")
      .text(
        bookingEngine_global_data.global.DateArea.roomDateFormat.format(
          "year",
          checkin_year,
          "month",
          checkin_month,
          "day",
          checkin_day
        )
      );
    $("#room_info")
      .find(".checkout")
      .text(
        bookingEngine_global_data.global.DateArea.roomDateFormat.format(
          "year",
          checkout_year,
          "month",
          checkout_month,
          "day",
          checkout_day
        )
      );
    var nightName;
    var roomName;

    //		utag_data values
    avg_room_rate = [];
    foreign_avg_room_rate = [];
    var bed_type = [];
    room_sub_types = [];
    room_types = [];
    var num_of_adults = [];
    var num_of_children = [];
    var occupancy_detail = [];
    var currencyPerRoomPrice = [];

    if (storeState.los > 1) {
      nightName = bookingEngine_global_data.global.bodyArea.nights;
    } else {
      nightName = bookingEngine_global_data.global.bodyArea.night;
    }
    if (storeState.rooms > 1) {
      roomName = bookingEngine_global_data.global.bodyArea.rooms;
    } else {
      roomName = bookingEngine_global_data.global.bodyArea.room;
    }
    $("#room_info")
      .find(".night_room")
      .html(
        storeState.los +
          " " +
          nightName +
          " | " +
          storeState.rooms +
          " " +
          roomName
      );
    var selectedOffer = storeState.availableOffers.filter(function (offer) {
      return offer.code === f_getOfferCodeFromURL("offerCode");
    })[0];
    // if(!selectedOffer.mpgsAlertText === false){
    // 	$("#card_alert_MPGS").text(selectedOffer.mpgsAlertText);
    // }
    // if(!selectedOffer.alipayAlertText === false){
    // 	$("#card_alert_Alipay").text(selectedOffer.alipayAlertText);
    // }
    if (!selectedOffer.noCancellationDate === false) {
      var cancellTxt = bookingEngine_global_data.global.DateArea.roomDateFormat;
      var cancellDate = selectedOffer.noCancellationDate;
      var year = moment(cancellDate).format("YYYY");
      var month_num = moment(cancellDate).format("M");
      var month = titleCase(
        bookingEngine_global_data.global.DateArea.roomMonth[month_num - 1]
      );
      var day = moment(cancellDate).format("DD");
      cancellTxt = cancellTxt.format("year", year, "month", month, "day", day);
      var originalTxt = paymentMethod_content_data.cancelYourBooking;
      $("#ProceedDiv")
        .find(".offerAlert")
        .text(originalTxt.format("availableCancellationDate", cancellTxt));
    } else if (selectedOffer.guaranteePercentage === 100) {
      $("#ProceedDiv")
        .find(".offerAlert")
        .text(paymentMethod_content_data.payAndStayCancellationMessage);
    } else {
      $("#ProceedDiv")
        .find(".offerAlert")
        .text(paymentMethod_content_data.noCancellationMessage);
    }
    $("#ProceedDiv")
      .find(".marketingConsent")
      .html(paymentMethod_content_data.terms2Field.description);
    $("#viewDetails_dialog")
      .find(".viewDetails_body")
      .html(selectedOffer.termsAndConditions);
    for (var i = 0; i < storeState.guests.length; i++) {
      var offerTotalPrice = 0;
      var SGD_total = 0;
      var taxPrice = 0;

      //			Data Push
      avg_room_rate.push(
        f_doFixed(
          Number(
            selectedOffer.rooms[i].averagePriceByCurrency.filter(function (
              price
            ) {
              return price.currencyCode === "SGD";
            })[0].price
          ),
          true
        )
      );
      foreign_avg_room_rate.push(
        f_doFixed(
          Number(
            selectedOffer.rooms[i].averagePriceByCurrency.filter(function (
              price
            ) {
              return price.currencyCode === storeState.currency;
            })[0].price
          )
        )
      );
      bed_type.push(storeState.guests[i].selectedRoom.bedTypeName);
      room_sub_types.push(storeState.guests[i].selectedRoom.roomName);
      room_types.push(storeState.guests[i].selectedRoom.roomType);
      num_of_adults.push(storeState.guests[i].adults);
      num_of_children.push(storeState.guests[i].children);
      occupancy_detail.push(
        storeState.guests[i].adults + storeState.guests[i].children
      );

      for (var j = 0; j < storeState.los; j++) {
        if (
          selectedOffer.rooms[i].nightlyPrices[j].discountedPriceByCurrency
            .length > 0
        ) {
          offerTotalPrice += f_doFixed(
            Number(
              selectedOffer.rooms[i].nightlyPrices[
                j
              ].discountedPriceByCurrency.filter(function (price) {
                return price.currencyCode === storeState.currency;
              })[0].price
            )
          );
        } else {
          offerTotalPrice += f_doFixed(
            Number(
              selectedOffer.rooms[i].nightlyPrices[j].priceByCurrency.filter(
                function (price) {
                  return price.currencyCode === storeState.currency;
                }
              )[0].price
            )
          );
        }
        if (
          selectedOffer.rooms[i].nightlyPrices[j].discountedPriceByCurrency
            .length > 0
        ) {
          totalSGDOfferPrice += f_doFixed(
            Number(
              selectedOffer.rooms[i].nightlyPrices[
                j
              ].discountedPriceByCurrency.filter(function (price) {
                return price.currencyCode === "SGD";
              })[0].price
            ),
            true
          );
        } else {
          totalSGDOfferPrice += f_doFixed(
            Number(
              selectedOffer.rooms[i].nightlyPrices[j].priceByCurrency.filter(
                function (price) {
                  return price.currencyCode === "SGD";
                }
              )[0].price
            ),
            true
          );
        }
      }
      currencyPerRoomPrice.push(offerTotalPrice);
      //判断ticket addon
      if (storeState.ticketAddon) {
        var _ticketAddonPrice = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
          storeState.ticketAddon.priceArr
        );
        offerTotalPrice +=
          f_doFixed(_ticketAddonPrice.guestCurrencyUnitPrice) *
          storeState.ticketAddon.countData[i];
        totalSGDOfferPrice +=
          f_doFixed(_ticketAddonPrice.unitPrice) *
          storeState.ticketAddon.countData[i];
      }
      taxPrice = f_doFixed(
        Number(
          selectedOffer.rooms[i].taxesAndServiceChargesByCurrency.filter(
            function (price) {
              return price.currencyCode === storeState.currency;
            }
          )[0].price
        )
      );
      totalSGDTaxPrice += f_doFixed(
        Number(
          selectedOffer.rooms[i].taxesAndServiceChargesByCurrency.filter(
            function (price) {
              return price.currencyCode === "SGD";
            }
          )[0].price
        ),
        true
      );
      taxTotalPrice += taxPrice;
      if (storeState.guests[i].adults > 1) {
        stringAdults =
          storeState.guests[i].adults +
          " " +
          bookingEngine_global_data.global.bodyArea.adults;
      } else if (storeState.guests[i].adults === 1) {
        stringAdults =
          storeState.guests[i].adults +
          " " +
          bookingEngine_global_data.global.bodyArea.adult;
      }

      if (storeState.guests[i].children > 1) {
        stringAdults +=
          ", " +
          storeState.guests[i].children +
          " " +
          bookingEngine_global_data.global.bodyArea.children;
      } else if (storeState.guests[i].children === 1) {
        stringAdults +=
          ", " +
          storeState.guests[i].children +
          " " +
          bookingEngine_global_data.global.bodyArea.child;
      }
      insertRoom += "<div class='roomInfoBlock'>";
      if (storeState.guests.length > 1) {
        insertRoom +=
          "<div class='panel_txt txt-black-three ls-x-sm mt_30 f_700 font_lato roomBlockTitle curp'> " +
          bookingEngine_global_data.global.bodyArea.allUpperRoom +
          " " +
          (i + 1) +
          ": " +
          "<span>" +
          stringAdults +
          "</span> <i class='icon_angle_up fr expand'></i></div>";
      } else {
        insertRoom +=
          "<div class='panel_txt txt-black-three ls-x-sm mt_30 f_700 font_lato roomBlockTitle'> " +
          bookingEngine_global_data.global.bodyArea.allUpperRoom +
          " " +
          (i + 1) +
          ": " +
          "<span>" +
          stringAdults +
          "</span></div>";
      }
      insertRoom +=
        "<hr class='panel_hr'>" +
        "<div class='d_none'>" +
        "	<img src='" +
        storeState.guests[i].selectedRoom.roomImg +
        "'>" +
        "</div>" +
        "<div class='d_none'>" +
        "	<div class='row py_10'>" +
        "	<div class='mr_auto pl0 pr0'>" +
        "		<span class='panel_txt txt-black-three ls-x-sm f_700 font_lato'>" +
        storeState.guests[i].selectedRoom.roomName +
        "</span><br>" +
        "		<span class='ls-x-sm f_400 txt-black-three'>(" +
        storeState.guests[i].selectedRoom.bedTypeName +
        ")</span>" +
        "	</div>" +
        "	<div class='ml_auto'>" +
        "		<a class='fr ls-x-sm txt_underline f_400 link_dark editRooms' onclick='f_editRooms(this)'>" +
        bookingEngine_global_data.global.bodyArea.edit +
        "</a>" +
        "	</div>" +
        "</div>" +
        "<div class='row pt_10 txt-black-three ls-x-sm'>" +
        "	<div class='mr_auto'>" +
        "		<span>" +
        selectedOffer.name +
        "</span>";
      if (storeState.ticketAddon && $("#BookingUniversal_AddonModel").length) {
        var _BookingUniversal_AddonModel = JSON.parse(
          $("#BookingUniversal_AddonModel").html()
        );
        if (_BookingUniversal_AddonModel) {
          insertRoom +=
            "<div>" +
            storeState.ticketAddon.category +
            " " +
            "(" +
            storeState.ticketAddon.countData[i] +
            (storeState.ticketAddon.countData[i] +
              storeState.ticketAddon.countData[i] >
            1
              ? _BookingUniversal_AddonModel.tickets
              : _BookingUniversal_AddonModel.ticket) +
            ")" +
            "</div>";
          insertRoom +=
            "<div>" +
            f_getDateByDifferentLanguage(
              storeState.ticketAddon.dateTime,
              false,
              true,
              true
            ) +
            "</div>";
        }
      }
      insertRoom +=
        "	</div>" +
        "	<div class='ml_auto f_700 txt-black-three ls-x-sm font_lato offertotal'>" +
        "" +
        symbol +
        f_isInt(
          f_doFixed(offerTotalPrice) + (storeState.ticketAddon ? taxPrice : 0)
        ) +
        " " +
        "	</div>" +
        "	</div>";
      if (storeState.guests.length > 1) {
        insertRoom += "<hr class='panel_hr'></div></div>";
      } else {
        insertRoom += "</div></div>";
      }
      stringAdults = "";
      chargeTips += Number(offerTotalPrice) + Number(taxPrice);
      if (
        !selectedOffer.rooms[i].discountedAveragePriceByCurrency === false &&
        selectedOffer.rooms[i].discountedAveragePriceByCurrency.length != 0
      ) {
        currencyPrice = Number(
          selectedOffer.rooms[i].discountedAveragePriceByCurrency.filter(
            function (price) {
              return price.currencyCode === storeState.currency;
            }
          )[0].price
        );
      } else {
        currencyPrice = Number(
          selectedOffer.rooms[i].averagePriceByCurrency.filter(function (
            price
          ) {
            return price.currencyCode === storeState.currency;
          })[0].price
        );
      }
      array.push(f_availableUpgrade(currencyPrice, i));
      f_setStoreState("symbol", symbol);
    }

    var offerTotal = new Object();
    offerTotal.tax = taxTotalPrice.toFixed(2);
    offerTotal.total = chargeTips.toFixed(2);
    offerTotal.taxSGD = totalSGDTaxPrice.toFixed(2);
    offerTotal.totalSGD = (totalSGDOfferPrice + totalSGDTaxPrice).toFixed(2);
    offerTotal.currencyPerRoomPrice = currencyPerRoomPrice;
    f_setStoreState("offerTotalPrice", offerTotal);

    if (storeState.guests.length > 1) {
      insertRoom += "<div class='row pb_10 txt-black-three ls-x-sm'>";
    } else {
      insertRoom += "<div class='row pt_20 pb_10 txt-black-three ls-x-sm'>";
    }
    if (taxTotalPrice == 0 || storeState.ticketAddon) {
      insertRoom +=
        "	<div class='mr_auto'>" +
        bookingEngine_global_data.global.bodyArea.InclusiveTS +
        "	</div>" +
        "</div>";
    } else {
      insertRoom +=
        "	<div class='mr_auto'>" +
        bookingEngine_global_data.global.bodyArea.TSCharge +
        "	</div>" +
        "	<div class='ml_auto f_700 txt-black-three ls-x-sm font_lato taxtotal'>" +
        "		  " +
        symbol +
        f_isInt(f_doFixed(taxTotalPrice)) +
        " " +
        "	</div>" +
        "</div>";
    }

    insertRoom +=
      "<div style='border-bottom: 2px solid #ccc;'></div>" +
      "<div class='row py_10'>" +
      "	<div class='mr_auto f_700 txt-black-three ls-x-sm font_lato' style='display: flex;align-items: center;'>" +
      bookingEngine_global_data.global.bodyArea.total.toUpperCase();
    if (
      !isPayandStay() &&
      yearUnder2024() &&
      bookingEngine_global_data.global.bodyArea["taxChangeReminder"]
    ) {
      insertRoom +=
        "	<div class='shapeborder' style='margin: 0 0 0 3px;background-color: #f4f4f4;' onclick='f_showTaxTips(this)'>i</div></div>";
    } else {
      insertRoom += "	</div>";
    }
    insertRoom +=
      "	<div  class='ml_auto f_700 txt-black-three ls-x-sm font_lato offerstotal'><span>" +
      "		" +
      symbol +
      f_isInt(f_doFixed(chargeTips)) +
      "</span>  ";
    if (storeState.currency != "SGD") {
      insertRoom +=
        "<div class='SGDTxt'>" +
        SGD_symbol +
        f_isInt(totalSGDOfferPrice + totalSGDTaxPrice, true);
    } else {
      insertRoom +=
        "<div class='SGDTxt' style='display:none'>" +
        SGD_symbol +
        f_isInt(totalSGDOfferPrice + totalSGDTaxPrice, true);
    }
    insertRoom +=
      "</div>" +
      "	</div>" +
      "</div>" +
      "</div>" +
      "<div class='font_12 txt-black-three'>" +
      "	<div class='fr toolTips curp cancellationPolicy' href='#'>" +
      bookingEngine_global_data.global.bodyArea.paymentCancellationPolicy +
      "</div>" +
      "	<br><div class='fr pt_10'> " +
      bookingEngine_global_data.global.bodyArea.changeDescription +
      "  </div>" +
      "	<div style='clear:both'></div>" +
      "</div>";
    var elem = $("#payment_block").find(".chargeTips");
    if (storeState.currency != "SGD") {
      elem.text(symbol + f_isInt(f_doFixed(chargeTips)));
      elem.show();
    } else {
      elem.text(
        SGD_symbol + f_isInt(totalSGDOfferPrice + totalSGDTaxPrice, true)
      );
    }
    $("#payment_block")
      .find(".chargeTipsSGD")
      .text(SGD_symbol + f_isInt(totalSGDOfferPrice + totalSGDTaxPrice, true));
    $("#room_info").find(".roonInfoList").html(insertRoom);

    if (!storeState.availableOffersOld && !reRender) {
      $.ajaxSettings.async = false;
      f_fetch(
        url_availableUpgrade,
        function (data) {
          var isEmpty = true;
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i] === null) {
            } else {
              isEmpty = false;
            }
          }
          if (isEmpty) {
          } else {
            var upgradeRooms = data.data;
            f_resetUpgradeBox(upgradeRooms, false);
            var elem = $("#upgrade_dialog");
            elem
              .find(".dialog_header h5")
              .text(upgradeView_content_data.dialogTitle);
            elem
              .find(".selectedRoomTxt")
              .text(upgradeView_content_data.dialogSelectedUpgrade);
            elem
              .find(".upgradeCostTxt")
              .text(upgradeView_content_data.dialogCostDescription);
            elem
              .find(".upgrade_body>p")
              .eq(0)
              .text(upgradeView_content_data.dialogDescription);
            elem
              .find(".upgrade_body>p")
              .eq(1)
              .find("span")
              .eq(0)
              .text(upgradeView_content_data.dialogYourCurrentRoom);
            elem
              .find(".upgradeListBox>p")
              .find("b")
              .eq(0)
              .text(upgradeView_content_data.dialogChooseAnUpgrade);
            elem
              .find(".upgrade_rcontent_items .mbs_button_primary")
              .text(upgradeView_content_data.dialogUpgradeNowButtonLabel);
            elem
              .find(".upgrade_rcontent small span")
              .text(upgradeView_content_data.dialogTips);
          }
        },
        function () {},
        array,
        true
      );
      $.ajaxSettings.async = true;
    }
    if (storeState.ticketAddon && $("#BookingUniversal_AddonModel").length) {
      var _all_count = 0;
      storeState.ticketAddon.countData.forEach(function (c) {
        _all_count += c;
      });
      var _BookingUniversal_AddonModel = JSON.parse(
        $("#BookingUniversal_AddonModel").html()
      );
      $("#BEshowTicketBox .ticketCountAndType").html(
        _all_count +
          " " +
          (_all_count > 1
            ? _BookingUniversal_AddonModel.tickets
            : _BookingUniversal_AddonModel.ticket) +
          ", " +
          storeState.ticketAddon.category
      );
      $("#BEshowTicketBox .ticketDatetime").html(
        f_getDateByDifferentLanguage(
          storeState.ticketAddon.dateTime,
          false,
          true,
          true
        )
      );
    }
    $("#upgrade_rcontent_items_tax_tips").html(
      storeState.ticketAddon
        ? bookingEngine_global_data.global.bodyArea.InclusiveTS
        : bookingEngine_global_data.global.bodyArea.exclusiveTS
    );
    if (reRender) {
      $("#room_info").find(".roomInfoBlock").eq(0).find("div").show();
    }
  } catch (err) {
    window.location.replace(
      bookingEngine_global_data.global.pathArea.roomPath +
        ".html" +
        window.location.search
    );
  }
}

function f_guestPreferences() {
  var storeState = f_getSessionStorage();
  var roomList = new Array();
  for (var i = 0; i < storeState.guests.length; i++) {
    var seletedRoom = storeState.allRoomList.filter(function (roomType) {
      return (
        roomType.code.indexOf(storeState.guests[i].selectedRoom.roomCode) > -1
      );
    })[0];
    var room = {
      roomType: seletedRoom.roomType,
      roomView: seletedRoom.roomView,
    };
    roomList.push(room);
  }

  var dataRequest = {
    arrivalDate: storeState.checkindate,
    roomList: roomList,
    optionList: booking_payment_content_data.optionList,
    questionList: booking_payment_content_data.questionList,
  };
  f_fetch(
    url_guestPreferences,
    function (data) {
      f_setStoreState("Preferences", data.data);
      f_setPreferencesData(data.data, true);
    },
    function () {},
    dataRequest,
    false
  );

  //Tealium Init
  if (typeof t_init === "function") {
    t_init();
  }
}

function f_paymentMethods() {
  var storeState = f_getSessionStorage();
  var payMethodNow = ["VS", "MC", "AX", "CUP", "AL", "JCB"];
  var insertHtml = "";
  var url =
    url_paymentMethods + "rateCode=" + f_getOfferCodeFromURL("offerCode");
  f_fetch(url, function (data) {
    for (var i = 0; i < data.data.length; i++) {
      var payMethod = data.data[i];
      for (var j = 0; j < payMethodNow.length; j++) {
        if (payMethod.code === payMethodNow[j]) {
          /*					if(payMethod.code == "CUP"&&navigator.userAgent.indexOf('miniProgram')<0){
           }else{*/
          insertHtml +=
            "<label class='mbs-radio-primary form-check form-check-inline cursor-pointer curp " +
            payMethod.code +
            "' data-type='" +
            payMethod.code +
            "'><input class='form-check-input ng-untouched ng-pristine payMethod payOption' name='inlineRadioOptions' type='radio'><span class='radio mr-1'></span><img class='form-check-label payment-option' src='" +
            payMethod.thumbnailImageURL +
            "'></label>";
          /*					}*/
        }
      }
    }
    $("#PaymentMethodDiv").find(".payment-icons").append(insertHtml);
    $(
      "#PaymentMethodDiv .payLabel .payment-option, #PaymentMethodDiv .payOption"
    ).click(function (e) {
      var paymentMethod = $(this).parent().attr("data-type");
      f_set_payCurrency(paymentMethod);
      stopPropagation(e);
    });
    f_setStoreState("paymentMethods", data.data);
  });
  $("#ProceedDiv")
    .find("a")
    .each(function () {
      if (
        $(this).attr("href") &&
        $(this).attr("href").indexOf("#") === 0 &&
        !$(this).attr("data-toggle")
      ) {
        $(this).attr("data-toggle", "modal");
        $(this).click(function () {
          $("body").css("overflow-y", "hidden");
        });
      }
    });
  if ($(".modal.fade").length) {
    $(".modal.fade")
      .find(".close")
      .click(function () {
        $("body").css("overflow-y", "auto");
      });
    $(".modal.fade").click(function () {
      $("body").css("overflow-y", "auto");
    });
    //阻止事件冒泡
    $(".modal-body").bind("click", function (e) {
      stopPropagation(e);
    });
  }
}

function f_setPreferencesData(data, version) {
  var storeState = f_getSessionStorage();
  var insertHtml = "";
  var isEmpty = true;
  var isMultiRoomsIsSame = true;
  for (var i = 1; i < storeState.guests.length; i++) {
    if (
      storeState.guests[i].selectedRoom.roomCode !==
      storeState.guests[0].selectedRoom.roomCode
    ) {
      isMultiRoomsIsSame = false;
      break;
    }
  }
  for (var i = 0; i < data.length; i++) {
    var preferencesList = data[i];
    if (preferencesList.preferences.length > 0) {
      insertHtml +=
        "<div class='preferenceBlock preference" +
        i +
        "'><h4 class='mt-30 col-form-label txt-lg-lb txt-black-five ls-x-sm p-0'>" +
        booking_payment_content_data.roomPreference.format(
          "roomNumber",
          i + 1
        ) +
        "<br><small class='required control-label'>" +
        booking_payment_content_data.preferenceFieldsTips +
        "</small></h4><div>";
      for (var j = 0; j < preferencesList.preferences.length; j++) {
        var preferences = preferencesList.preferences[j];
        if (preferences.questionType === "arrivalTime") {
          var defaultTime = preferences.question.options.filter(function (
            option
          ) {
            return option.default === true;
          })[0];
          insertHtml +=
            "<div class='form-group row'>" +
            "<label class='col-sm-4 p0-15'>" +
            preferences.question.questionText;
          if (preferences.required === true) {
            insertHtml += "<span class='required'>*</span>";
          }
          insertHtml += "</label>" + "<div class='col-sm-8 p0-15'>";
          if (!defaultTime) {
            var defaultTime = preferences.question.options[0];
            insertHtml += "<div class='col-sm-3 timeselectDiv defaultTime'>";
          } else {
            insertHtml += "<div class='col-sm-3 timeselectDiv'>";
          }
          insertHtml += "<div class='timeSelect' tabindex='0'>";
          if (version) {
            insertHtml +=
              "<div class='time_dropdown_selected time" +
              i +
              "' data-question='" +
              preferences.question.questionId +
              "' data-option='" +
              defaultTime.optionId +
              "'>" +
              defaultTime.hour +
              ":" +
              defaultTime.minute +
              "</div>";
          } else {
            insertHtml += $(".time" + i)
              .closest(".timeSelect")
              .html();
          }
          insertHtml +=
            "</div>" + "<ul class='dropdown_select timeSelectLi w_100 mo'>";
          for (var k = 0; k < preferences.question.options.length; k++) {
            var time =
              preferences.question.options[k].hour +
              ":" +
              preferences.question.options[k].minute;
            insertHtml +=
              "<li data-option='" +
              preferences.question.options[k].optionId +
              "'>" +
              time +
              "</li>";
          }
          insertHtml +=
            "</ul>" +
            "</div>" +
            "<div class='col-sm-7 plr0 arriveText'>" +
            "<small>" +
            preferences.question.extraInformation +
            "</small>" +
            "</div>" +
            "</div>" +
            "</div>";
        }
        if (
          preferences.multiRoomsDisplaySettings === "ALL_MULTIROOMS" ||
          (isMultiRoomsIsSame &&
            preferences.multiRoomsDisplaySettings ===
              "SAME_SUB_VIEW_TYPE_MULTIROOMS")
        ) {
          if (
            preferences.questionType === "single" &&
            !preferences.preQuestion === false &&
            !preferences.roomQuestion === false
          ) {
            var show = false;
            insertHtml +=
              "<div class='form-group row'>" +
              "<label class='col-sm-4 p0-15'>" +
              preferences.preQuestion.questionText;
            insertHtml +=
              "</label><div class='col-sm-8 p0-15 plr0 celebrate' data-question='" +
              preferences.preQuestion.questionId +
              "'>";
            for (
              var q = 0;
              q < preferences.preQuestion.preOptions.length;
              q++
            ) {
              var option = preferences.preQuestion.preOptions[q];
              insertHtml +=
                "<span class='celebrateRadio'><label data-option='" +
                option.optionId +
                "' tabindex='0'><input type='radio'";
              if (option.default === true) {
                insertHtml += "checked";
                if (option.isPreQuestionOptionToShowMainQuestion === true) {
                  show = true;
                }
              }
              insertHtml +=
                " data-value='" +
                option.isPreQuestionOptionToShowMainQuestion +
                "'><span class='radio'></span><span>" +
                option.optionValue +
                "</span></label></span>";
            }
            if (show) {
              insertHtml +=
                "</div></div><div class='form-group row occasionDiv' style='display:flex'>";
            } else {
              insertHtml +=
                "</div></div><div class='form-group row occasionDiv'>";
            }
            if (preferences.roomQuestion != null) {
              insertHtml +=
                "<label class='col-sm-4 p0-15'>" +
                preferences.roomQuestion.questionText;
            }
            if (preferences.required === true) {
              insertHtml += "<span class='required'>*</span>";
            }
            if (preferences.roomQuestion != null) {
              var defaultOption = preferences.roomQuestion.options.filter(
                function (option) {
                  return option.isDefault === true;
                }
              )[0];
              insertHtml +=
                "</label><div class='col-sm-6 p0-15 occasion' style='padding: 0;margin: 0 15px;'>" +
                "<div class='occasionDropDown' data-question='" +
                preferences.roomQuestion.questionId +
                "'>";
            }
            if (!defaultOption) {
              insertHtml +=
                "<span class='defaltText'>" +
                booking_payment_content_data.noPreference +
                "</span>";
            } else {
              insertHtml +=
                "<span class='defaltText' data-option='" +
                defaultOption.optionId +
                "'>" +
                defaultOption.optionValue +
                "</span>";
            }
            insertHtml +=
              "<span class='dropdown-down'>" +
              "<span></span>" +
              "</span>" +
              "</div>" +
              "<div class='dropdown_select occasionList w_100 mo'>" +
              "<ul>";
            if (preferences.roomQuestion != null) {
              for (
                var p = 0;
                p < preferences.roomQuestion.options.length;
                p++
              ) {
                var option = preferences.roomQuestion.options[p];
                insertHtml +=
                  "<li data-option='" +
                  option.optionId +
                  "'>" +
                  option.optionValue +
                  "</li>";
              }
            }
            insertHtml += "</ul>" + "</div>" + "</div>" + "</div>";
          }
          if (
            preferences.questionType === "single" &&
            !preferences.preQuestion
          ) {
            insertHtml +=
              "<div class='form-group row'>" +
              "<label class='col-sm-4 p0-15'>" +
              preferences.roomQuestion.questionText;
            if (preferences.required === true) {
              insertHtml += "<span class='required'>*</span>";
            }
            var defaultOption = preferences.roomQuestion.options.filter(
              function (option) {
                return option.isDefault === true;
              }
            )[0];
            insertHtml +=
              "</label><div class='col-sm-6 p0-15 occasion' style='padding: 0;margin: 0 15px;'>" +
              "<div class='occasionDropDown' data-question='" +
              preferences.roomQuestion.questionId +
              "'>";
            if (!defaultOption) {
              insertHtml +=
                "<span class='defaltText'>" +
                booking_payment_content_data.noPreference +
                "</span>";
            } else {
              insertHtml +=
                "<span class='defaltText' data-option='" +
                defaultOption.optionId +
                "'>" +
                defaultOption.optionValue +
                "</span>";
            }
            insertHtml +=
              "<span class='dropdown-down'>" +
              "<span></span>" +
              "</span>" +
              "</div>" +
              "<div class='dropdown_select occasionList w_100 mo'>" +
              "<ul>";
            for (var o = 0; o < preferences.roomQuestion.options.length; o++) {
              var option = preferences.roomQuestion.options[o];
              insertHtml +=
                "<li data-option='" +
                option.optionId +
                "'>" +
                option.optionValue +
                "</li>";
            }
            insertHtml += "</ul>" + "</div>" + "</div>" + "</div>";
          }
          if (
            preferences.questionType === "multiple" &&
            !preferences.preQuestion
          ) {
            insertHtml +=
              "<div class='form-group row'>" +
              "<label class='col-sm-4 p0-15'>" +
              preferences.roomQuestion.questionText;
            if (preferences.required === true) {
              insertHtml += "<span class='required'>*</span>";
            }
            var defaultOption = preferences.roomQuestion.options.filter(
              function (option) {
                return option.isDefault === true;
              }
            )[0];
            insertHtml +=
              "</label><div class='col-sm-6 p0-15 preferences' style='padding: 0;margin: 0 15px;' tabindex='0'>" +
              "<div class='preferencesDropDown dropList'>";
            if (!defaultOption) {
              insertHtml +=
                "<span class='defaltText'>" +
                booking_payment_content_data.noPreference +
                "</span>";
            } else {
              insertHtml +=
                "<span class='selectedrp' data-item='" +
                defaultOption.optionId +
                "'>" +
                defaultOption.optionValue +
                "<span class='itemClose'> x</span></span>" +
                "<span class='defaltText' data-option='" +
                defaultOption.optionId +
                "'>" +
                defaultOption.optionValue +
                "</span>";
            }
            insertHtml +=
              "<span class='dropdown-down'>" +
              "<span></span>" +
              "</span>" +
              "</div>" +
              "<div class='dropdown_select roomPreferences w_100 mo'>" +
              "<ul>";
            for (var n = 0; n < preferences.roomQuestion.options.length; n++) {
              var option = preferences.roomQuestion.options[n];
              insertHtml +=
                "<li data-option='" +
                option.optionId +
                "'><input type='checkbox'><div>" +
                option.optionValue +
                "</div></li>";
            }
            insertHtml += "</ul>" + "</div>" + "</div>" + "</div>";
          }
          if (
            preferences.questionType === "multiple" &&
            !preferences.preQuestion === false &&
            !preferences.roomQuestion === false
          ) {
            var show = false;
            insertHtml +=
              "<div class='form-group row'>" +
              "<label class='col-sm-4 p0-15'>" +
              preferences.preQuestion.questionText;
            insertHtml +=
              "</label><div class='col-sm-8 p0-15 plr0 celebrate' data-question='" +
              preferences.preQuestion.questionId +
              "'>";
            for (
              var m = 0;
              m < preferences.preQuestion.preOptions.length;
              m++
            ) {
              var option = preferences.preQuestion.preOptions[m];
              insertHtml +=
                "<span class='celebrateRadio'><label data-option='" +
                option.optionId +
                "' tabindex='0'><input type='radio'";
              if (option.default === true) {
                insertHtml += "checked";
                if (option.isPreQuestionOptionToShowMainQuestion === true) {
                  show = true;
                }
              }
              insertHtml +=
                " data-value='" +
                option.isPreQuestionOptionToShowMainQuestion +
                "'><span class='radio'></span><span>" +
                option.optionValue +
                "</span></label></span>";
            }
            if (show) {
              insertHtml +=
                "</div></div><div class='form-group row occasionDiv' style='display:flex'>";
            } else {
              insertHtml +=
                "</div></div><div class='form-group row occasionDiv'>";
            }
            insertHtml +=
              "<label class='col-sm-4 p0-15'>" +
              preferences.roomQuestion.questionText;
            if (preferences.required === true) {
              insertHtml += "<span class='required'>*</span>";
            }
            var defaultOption = preferences.roomQuestion.options.filter(
              function (option) {
                return option.isDefault === true;
              }
            )[0];
            insertHtml +=
              "</label><div class='col-sm-6 p0-15 preferences' style='padding: 0;margin: 0 15px;' tabindex='0'>" +
              "<div class='preferencesDropDown dropList'>";
            if (!defaultOption) {
              insertHtml +=
                "<span class='defaltText'>" +
                booking_payment_content_data.noPreference +
                "</span>";
            } else {
              insertHtml +=
                "<span class='selectedrp' data-item='" +
                defaultOption.optionId +
                "'>" +
                defaultOption.optionValue +
                "<span class='itemClose'> x</span></span>" +
                "<span class='defaltText' data-option='" +
                defaultOption.optionId +
                "'>" +
                defaultOption.optionValue +
                "</span>";
            }
            insertHtml +=
              "<span class='dropdown-down'>" +
              "<span></span>" +
              "</span>" +
              "</div>" +
              "<div class='dropdown_select roomPreferences w_100 mo'>" +
              "<ul>";
            for (var l = 0; l < preferences.roomQuestion.options.length; l++) {
              var option = preferences.roomQuestion.options[l];
              insertHtml +=
                "<li data-option='" +
                option.optionId +
                "'><input type='checkbox'><div>" +
                option.optionValue +
                "</div></li>";
            }
            insertHtml += "</ul>" + "</div>" + "</div>" + "</div>";
          }
        }
      }
      insertHtml +=
        "<div class='form-group row'>" +
        "<label class='col-sm-4 p0-15'></label>" +
        "<div class='col-sm-6 p0-15 bestText'>" +
        "<small>" +
        booking_payment_content_data.guestPreferenceDisclaimer +
        "</small>" +
        "</div>" +
        "</div></div></div>";
      isEmpty = false;
    }
  }
  if (isEmpty) {
    $("#preferencesDiv").hide();
  } else {
    $("#preferencesDiv").html(insertHtml);
  }
}

//Find available view upgrade
function f_availableUpgrade(currencyPrice, index) {
  var postModel;
  var guests = f_getSessionStorage().guests;
  var storeState = f_getSessionStorage();
  var _priceTicket = 0;
  if (storeState.ticketAddon) {
    _priceTicket = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
      storeState.ticketAddon.priceArr
    ).guestCurrencyUnitPrice;
    currencyPrice +=
      (_priceTicket * storeState.ticketAddon.countData[index]) / storeState.los;
  }
  var roomCodeSelected = storeState.guests[index].selectedRoom.roomCode;
  var guest = storeState.guests[index];
  if (f_isEmpty(guests[index].selectedRoom)) {
    return false;
  } else {
    postModel = {
      roomCode: roomCodeSelected,
      rateCode: f_getOfferCodeFromURL("offerCode"),
      arrivalDate: storeState.checkindate,
      departureDate: storeState.checkoutdate,
      numberOfAdults: guest.adults,
      numberOfChildren: guest.children,
      currencyPrice: currencyPrice,
      currencyCode: storeState.currency,
      ticketAddOnInfo: storeState.ticketAddon
        ? storeState.ticketAddon.optionId +
          ":" +
          storeState.ticketAddon.countData[index].toString()
        : "",
    };
    return postModel;
  }
}

function f_upgradeView(roomIndex, index) {
  var storeState = f_getSessionStorage();
  var selectedRoom = storeState.upgradeRooms[roomIndex];
  var selectedUpgradeRoom = selectedRoom[index];
  /*	var originRoomCode = storeState.guests[roomIndex].selectedRoom.roomCode;
   var originRoomName = storeState.guests[roomIndex].selectedRoom.roomName;*/
  var url =
    url_upgradeView +
    "roomCode=" +
    selectedUpgradeRoom.roomCode +
    "&rateCode=" +
    selectedUpgradeRoom.rateCode +
    "&arrivalDate=" +
    storeState.checkindate +
    "&departureDate=" +
    storeState.checkoutdate +
    "&numberOfAdults=" +
    storeState.guests[roomIndex].adults +
    "&numberOfChildren=" +
    storeState.guests[roomIndex].children;
  f_fetch(
    url,
    function (data) {
      var storeState = f_getSessionStorage();
      if (f_isEmpty(data.data)) {
        return false;
      } else {
        var OfferList = storeState.availableOffers;
        if (!storeState.availableOffersOld) {
          f_setStoreState("availableOffersOld", OfferList);
        }
        OfferList.filter(function (offer) {
          return offer.code === f_getOfferCodeFromURL("offerCode");
        })[0].rooms[roomIndex] = data.data[0].rooms[0];
        f_setStoreState("availableOffers", OfferList);

        var guestsList = storeState.guests;
        if (!storeState.guestsListOld) {
          f_setStoreState("guestsListOld", guestsList);
        }
        guestsList[roomIndex].selectedRoom.roomCode =
          data.data[0].rooms[0].roomCode;

        for (var i = 0; i < storeState.allRoomList.length; i++) {
          var room = storeState.allRoomList[i];
          if (room.code.indexOf(data.data[0].rooms[0].roomCode) >= 0) {
            guestsList[roomIndex].selectedRoom.code = room.code;
          }
        }

        var arr = new Array();
        var status = false;
        for (var i = 0; i < storeState.allRoomList.length; i++) {
          arr = storeState.allRoomList[i].code.split(",");
          for (var j = 0; j < arr.length; j++) {
            if (arr[j] === data.data[0].rooms[0].roomCode) {
              guestsList[roomIndex].selectedRoom.roomImg =
                storeState.allRoomList[i].largeImageUrl;
              guestsList[roomIndex].selectedRoom.roomName =
                storeState.allRoomList[i].roomType +
                " - " +
                storeState.allRoomList[i].roomView;
              guestsList[roomIndex].selectedRoom.roomType =
                storeState.allRoomList[i].roomType;
              guestsList[roomIndex].selectedRoom.roomView =
                storeState.allRoomList[i].roomView;
              status = true;
              break;
            }
          }
          if (status) {
            break;
          }
        }
        f_setStoreState("guests", guestsList);
        f_initRoomInfo();
        f_resetPreferences();
        var elem = $("#room_info");
        elem.find(".roomBlockTitle").eq(0).addClass("d_actived");
        elem.find(".roomInfoBlock").eq(0).find("div").show();
        $("#upgrade_dialog").hide();
        $("#modal_backdrop").hide();
        var elem1 = $("#upgradeList");
        elem1.find(".no_upgrade" + roomIndex).hide();
        elem1.find(".upgraded" + roomIndex).show();
        elem1
          .find(".upgradeItem" + roomIndex + " .undo_title")
          .html(
            upgradeView_content_data.upgradedDescription.format(
              "upgradedRoom",
              storeState.guests[roomIndex].selectedRoom.roomName
            )
          );
        var _costOfUpgradePrice =
          storeState.upgradeRooms[roomIndex][index]
            .upgradePriceByDefaultCurrency;
        if (storeState.ticketAddon) {
          _costOfUpgradePrice = _costOfUpgradePrice * 1.177;
        }
        elem1
          .find(".upgradeItem" + roomIndex + " .upgradedPrice")
          .html(
            storeState.symbol +
              f_isInt(f_doFixed(_costOfUpgradePrice) * storeState.los)
          );
        var originalRoom = storeState.originalRoom;
        storeState.originalRoom[roomIndex].totalUpgradePrice =
          _costOfUpgradePrice * storeState.los;
        f_setStoreState("originalRoom", originalRoom);
        loading_hide();
        var upgradedTotalPrice = f_isInt(
          f_doFixed(
            storeState.upgradeRooms[roomIndex][index].totalPrice.filter(
              function (price) {
                return price.currencyCode === storeState.currency;
              }
            )[0].price
          )
        );
        var upgradedPrice;
        var isDiscount = false;
        if (
          data.data[0].rooms[0].discountedAveragePriceByCurrency != null &&
          data.data[0].rooms[0].discountedAveragePriceByCurrency.length != 0
        ) {
          upgradedPrice = f_isInt(
            f_doFixed(
              data.data[0].rooms[0].discountedAveragePriceByCurrency.filter(
                function (price) {
                  return price.currencyCode === storeState.currency;
                }
              )[0].price * storeState.los
            )
          );
          isDiscount = true;
        } else {
          upgradedPrice = f_isInt(
            f_doFixed(
              data.data[0].rooms[0].averagePriceByCurrency.filter(function (
                price
              ) {
                return price.currencyCode === storeState.currency;
              })[0].price * storeState.los
            )
          );
        }
        if (upgradedPrice != upgradedTotalPrice) {
          var errcode = bookingEngine_global_data.global.errorArea;
          var message = errcode["error_code_3012"].format(
            "currency",
            storeState.symbol,
            "originalAmount",
            upgradedTotalPrice,
            "currency",
            storeState.symbol,
            "updatedAmount",
            upgradedPrice
          );
          f_shwo_pop_Bummer(message);
          var _costOfUpgradePrice =
            storeState.upgradeRooms[roomIndex][index]
              .upgradePriceByDefaultCurrency;
          if (storeState.ticketAddon) {
            _costOfUpgradePrice = _costOfUpgradePrice * 1.177;
          }
          if (isDiscount) {
            elem1.find(".upgradeItem" + roomIndex + " .upgradedPrice").html(
              storeState.symbol +
                f_isInt(
                  f_doFixed(
                    _costOfUpgradePrice +
                      (data.data[0].rooms[0].discountedAveragePriceByCurrency.filter(
                        function (price) {
                          return price.currencyCode === storeState.currency;
                        }
                      )[0].price -
                        storeState.upgradeRooms[roomIndex][
                          index
                        ].discountedAveragePrice.filter(function (price) {
                          return price.currencyCode === storeState.currency;
                        })[0].price)
                  ) * storeState.los
                )
            );
          } else {
            elem1.find(".upgradeItem" + roomIndex + " .upgradedPrice").html(
              storeState.symbol +
                f_isInt(
                  f_doFixed(
                    _costOfUpgradePrice +
                      (data.data[0].rooms[0].averagePriceByCurrency.filter(
                        function (price) {
                          return price.currencyCode === storeState.currency;
                        }
                      )[0].price -
                        storeState.upgradeRooms[roomIndex][
                          index
                        ].averagePrice.filter(function (price) {
                          return price.currencyCode === storeState.currency;
                        })[0].price)
                  ) * storeState.los
                )
            );
          }
          elem1
            .find(".upgradeItem" + roomIndex + " .undo_upgrade")
            .addClass("resend");
          elem1
            .find(".upgradeItem" + roomIndex + " .undo_upgrade")
            .addClass("resend" + roomIndex);
          //				$(".upgradeItem"+roomIndex+" .undo_upgrade").attr('data-roomcode',data.data[0].rooms[0].roomCode);

          //Refresh the latest upgrade room data
          /*				var upgradeRoomsRefresh = storeState.upgradeRooms;
         upgradeRoomsRefresh[roomIndex][index].averagePrice=data.data[0].rooms[0].averagePriceByCurrency;
         upgradeRoomsRefresh[roomIndex][index].discountedAveragePriceByCurrency=data.data[0].rooms[0].discountedAveragePriceByCurrency;
         f_setStoreState("upgradeRooms", upgradeRoomsRefresh);*/
        }
      }
      //Update URL Parameters
      f_pushURLData();

      //Tealium event
      if (typeof t_Upgrade === "function") {
        var storeState = f_getSessionStorage();
        var originRoomCode = storeState.guests[roomIndex].selectedRoom.roomCode;
        var originRoomName = storeState.guests[roomIndex].selectedRoom.roomName;
        t_Upgrade(originRoomCode, originRoomName);
      }
    },
    function (data) {
      if (data.ttCode === "6001") {
        $("#modal_backdrop").hide();
        var errcode = bookingEngine_global_data.global.errorArea;
        var errmsg = errcode["room_upgrade_error"];
        f_shwo_pop_Bummer(errmsg);
        //			f_clearUpgradeBox(roomIndex,message);
        var array = [];
        var storeState = f_getSessionStorage();

        var selectedOffer = storeState.availableOffers.filter(function (offer) {
          return offer.code === f_getOfferCodeFromURL("offerCode");
        })[0];

        if (
          selectedOffer.rooms[roomIndex].discountedAveragePriceByCurrency !=
            null &&
          selectedOffer.rooms[roomIndex].discountedAveragePriceByCurrency
            .length != 0
        ) {
          currencyPrice = Number(
            selectedOffer.rooms[
              roomIndex
            ].discountedAveragePriceByCurrency.filter(function (price) {
              return price.currencyCode === storeState.currency;
            })[0].price
          );
        } else {
          currencyPrice = Number(
            selectedOffer.rooms[roomIndex].averagePriceByCurrency.filter(
              function (price) {
                return price.currencyCode === storeState.currency;
              }
            )[0].price
          );
        }
        array.push(f_availableUpgrade(currencyPrice, roomIndex));
        $.ajaxSettings.async = false;
        f_fetch(
          url_availableUpgrade,
          function (data) {
            var isEmpty = true;
            var elem = $("#upgradeList");
            for (var i = 0; i < data.data.length; i++) {
              if (data.data[i] === null) {
                if (
                  elem
                    .find(".upgradeItem" + roomIndex)
                    .prev()
                    .hasClass("upgradeNum")
                ) {
                  elem
                    .find(".upgradeItem" + roomIndex)
                    .prev()
                    .remove();
                  elem.find(".upgradeItem" + roomIndex).remove();
                } else {
                  elem.find(".upgradeItem" + roomIndex).remove();
                }
                if (elem.find(".upgradeView").length === 0) {
                  $("#UpgradeBox").hide();
                }
              } else {
                isEmpty = false;
              }
            }
            if (isEmpty) {
            } else {
              var upgradeRooms = data.data[0];
              f_resetUpgradeBox(upgradeRooms, roomIndex);
              //					f_setStoreState("upgradeRooms", upgradeRooms);
            }
          },
          function () {},
          array
        );
        $.ajaxSettings.async = true;
        $("#upgrade_dialog").hide();
        loading_hide();
      } else if (data.code === "9999") {
        f_link_to_errPage();
      } else if (data.code === "0103") {
        errmsg = errcode["error_code_" + data.ttCode]
          ? errcode["error_code_" + data.ttCode]
          : data.message;
        f_showErrMassage(errmsg);
        loading_hide();
      } else {
        f_link_to_errPage();
      }
      //Tealium event
      if (typeof t_Upgrade === "function") {
        var storeState = f_getSessionStorage();
        var originRoomCode = storeState.guests[roomIndex].selectedRoom.roomCode;
        var originRoomName = storeState.guests[roomIndex].selectedRoom.roomName;
        t_Upgrade(originRoomCode, originRoomName);
      }
    },
    false,
    true
  );
  $("body").css("overflow-y", "scroll");
}

function f_undoUpgrade(obj) {
  var index = $(obj).closest(".upgraded").attr("data-item");
  var storeState = f_getSessionStorage();
  var originOffer = storeState.availableOffers;
  var coverOffer = storeState.availableOffersOld;
  originOffer.filter(function (offer) {
    return offer.code === f_getOfferCodeFromURL("offerCode");
  })[0].rooms[index] = coverOffer.filter(function (offer) {
    return offer.code === f_getOfferCodeFromURL("offerCode");
  })[0].rooms[index];
  f_setStoreState("availableOffers", originOffer);
  var guests = storeState.guests;
  var coverguests = storeState.guestsListOld;
  guests[index] = coverguests[index];
  f_setStoreState("guests", guests);
  f_initRoomInfo();
  loading_hide();
  var elem = $("#room_info");
  elem.find(".roomBlockTitle").eq(0).addClass("d_actived");
  elem.find(".roomInfoBlock").eq(0).find("div").show();
  var elem1 = $("#upgradeList");
  elem1.find(".no_upgrade" + index).show();
  elem1.find(".upgraded" + index).hide();
  var originalRoom = storeState.originalRoom;
  storeState.originalRoom[index].totalUpgradePrice = null;
  f_setStoreState("originalRoom", originalRoom);
  f_setPreferencesData(storeState.Preferences, false);
  if ($(obj).hasClass("resend")) {
    upgradeBlockUpdate(index, false);
  }

  //Update URL Parameters
  f_pushURLData();
  //Tealium event
  if (typeof t_undoUpgrade === "function") {
    var storeState = f_getSessionStorage();
    var temp = storeState.guests[index];
    t_undoUpgrade(temp.selectedRoom.roomCode, temp.selectedRoom.roomName);
  }
}

function f_isInt(num, doIt) {
  var re = /\B(?=(\d{3})+(?!\d))/g;
  var currency = f_getSessionStorage().currency;
  if (currency === "IDR" || currency === "KRW" || currency === "JPY") {
  } else {
    num = parseFloat(num).toFixed(2);
  }
  if (doIt) {
    num = parseFloat(num).toFixed(2);
    return (num || 0)
      .toString()
      .replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
  }
  if (currency === "IDR") {
    return parseFloat(num).toFixed().toString().replace(re, ".");
  }
  return (num || 0).toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
}

//Pay Method
function payCheck() {
  f_storeInfoToSession();
  var elem = $("#PaymentMethodDiv");
  elem.find(".paymentIssue").hide();
  f_hideErrMassage();
  if (validate()) {
    loading_show();
    var get_pay = function () {
      f_setPrefereces();
      var payCardType;
      for (var i = 0; i < elem.find(".payOption").length; i++) {
        if (elem.find(".payOption").eq(i).is(":checked")) {
          f_setStoreState(
            "guestCountrySelect",
            $("#guest_card").find(".country-select-content").text().trim()
          );
          f_setStoreState(
            "guestCountrySelectTwoCode",
            $("#country").attr("data-two")
          );
          payCardType = elem
            .find(".payOption")
            .eq(i)
            .closest("label")
            .attr("data-type");
          f_setStoreState("cardType", payCardType);
          if (
            payCardType === "VS" ||
            payCardType === "MC" ||
            payCardType === "AX" ||
            payCardType === "JCB"
          ) {
            /*					//update utag_data
                                             f_sendPaymentInfo(payCardType);*/
            f_loadMPGSJavaScript(payCardType);
          } else if (payCardType === "CUP") {
            /*					//update utag_data
                                             f_sendPaymentInfo('China Union Pay');*/
            f_CUPPay();
          } else if (payCardType === "AL") {
            /*					//update utag_data
                                             f_sendPaymentInfo('alipay');*/
            f_aliPay();
          }
        }
      }
      //Tealium event
      if (typeof t_proceed === "function") {
        t_proceed();
      }
    };

    var _phone = "";
    var storeState = f_getSessionStorage();
    if (
      storeState.memberStatus &&
      JSON.parse(sessionStorage.getItem("patronProfile")).phoneNumber
    ) {
      _phone = $("#phone").val();
    } else {
      _phone = $("#guest_card")
        .find(".iti__selected-dial-code")
        .text()
        .replace("+", "");
    }
    var _email = $("#Email").val();
    if (
      bookingEngine_global_data.global.configurationArea &&
      bookingEngine_global_data.global.configurationArea.enableBlockList
    ) {
      f_fetch(
        url_checkblock + "phone=" + _phone + "&email=" + _email,
        function (res_data) {
          if (res_data.result) {
            get_pay();
          } else {
            f_setStoreState("isBlackList", true);
            f_link_to_errPage();
          }
        }
      );
    } else {
      get_pay();
    }
  } else {
    if ($(".error_line").length > 0) {
      $("html,body").animate(
        {
          scrollTop:
            $(".error_line")
              .filter(function () {
                return $(this).is(":visible");
              })
              .offset().top -
            $(window).height() / 2,
        },
        1000
      );
    } else if (
      $("#PaymentMethodDiv").find(".cardSelect .error_msg").is(":visible")
    ) {
      $("html,body").animate(
        {
          scrollTop:
            $("#PaymentMethodDiv")
              .find(".cardSelect .error_msg")
              .filter(function () {
                return $(this).is(":visible");
              })
              .offset().top -
            $(window).height() / 2,
        },
        1000
      );
    } else if (
      $("#ProceedDiv").find(".TermsAndConditions .error_msg").is(":visible")
    ) {
      $("html,body").animate(
        {
          scrollTop:
            $("#ProceedDiv")
              .find(".TermsAndConditions .error_msg")
              .filter(function () {
                return $(this).is(":visible");
              })
              .offset().top -
            $(window).height() / 2,
        },
        1000
      );
    }
  }
}

function f_loadMPGSJavaScript(payCardType) {
  var scriptUrl;
  var array = [];
  var storeState = f_getSessionStorage();
  for (var i = 0; i < storeState.guests.length; i++) {
    var _postData = f_sessionIdParameter(storeState.guests[i], payCardType, i);
    if (_postData) {
      array.push(_postData);
    } else {
      return false;
    }
  }
  if (payCardType === "VS" || payCardType === "MC" || payCardType === "JCB") {
    scriptUrl =
      "https://ap-gateway.mastercard.com/checkout/version/48/checkout.js";
  } else if (payCardType === "AX") {
    scriptUrl =
      "https://gateway-japa.americanexpress.com/checkout/version/49/checkout.js";
  }
  f_loadScript(
    {
      id: "MPGSScript",
      src: scriptUrl,
      isAsync: !1,
      isDefer: !1,
    },
    function () {
      $.ajaxSettings.async = true;
      f_fetch(
        url_mpgsSessionId,
        function (data) {
          f_setStoreState("session", data.data);
          // 将sessionId传入Checkout_configure初始化数据
          Checkout_configure(data.data.mpgsSessionId);
        },
        function (data) {
          var storeState = f_getSessionStorage();
          var errcode = bookingEngine_global_data.global.errorArea;
          if (data.ttCode === "3012") {
            f_resetAvailableOffers(data);
          } else if (data.ttCode === "3013") {
            f_setStoreState("curr_errmsg", {
              code: "error_code_3013",
              errmsg: errcode["error_code_3013"],
            });
            window.location.href = storeState.pageStepUrl.step2;
          } else if (data.code === "9999") {
            f_link_to_errPage();
          } else if (data.ttCode === "9000") {
            f_setStoreState("curr_errmsg", {
              code: "error_code_9000",
              errmsg: errcode["error_code_9000"],
            });
            window.location.replace(
              (window.location.href =
                bookingEngine_global_data.global.pathArea.roomPath +
                ".html" +
                window.location.search)
            );
          } else if (data.code === "0103") {
            errmsg = errcode["error_code_" + data.ttCode]
              ? errcode["error_code_" + data.ttCode]
              : data.message;
            if (data.ttCode == "3004" || data.ttCode == "3003") {
              var elem = $("#PaymentMethodDiv").find(".paymentIssue");
              elem.text(errmsg);
              elem.show();
            } else {
              f_showErrMassage(errmsg);
              loading_hide();
            }
          } else {
            f_link_to_errPage();
          }
        },
        array,
        true
      );
    }
  );
}

function Checkout_configure(sessionId) {
  try {
    var storeState = f_getSessionStorage();
    Checkout.configure({
      merchant: storeState.session.merchantId,
      order: {
        amount: function () {
          //Dynamic calculation of amount
          if (
            storeState.availableOffers.filter(function (offer) {
              return offer.code === f_getOfferCodeFromURL("offerCode");
            })[0].guaranteePercentage === 0
          ) {
            return 1;
          } else {
            return storeState.offerTotalPrice.totalSGD;
          }
        },
        currency: storeState.currency,
        description: "Ordered goods",
        id: storeState.session.orderId,
      },
      session: {
        id: sessionId,
      },
      interaction: {
        merchant: {
          name: storeState.session.merchantName,
          address: {
            line1: storeState.session.addressLine1,
            line2: storeState.session.addressLine2,
          },
        },
        displayControl: {
          billingAddress: "HIDE",
          customerEmail: "HIDE",
          orderSummary: "SHOW",
          shipping: "HIDE",
        },
      },
    });
    loading_hide();
    Checkout.showLightbox();
  } catch (e) {
    loading_hide();
    //f_showErrMassage(bookingEngine_global_data.global.errorArea.mpgs_error_alert);
  }
}

//CUPPay
function f_CUPPay() {
  var elem = $("#CUPCard");
  var CUPCardInfoArray = {
    cardHolderName: $("#cardName").val(),
    cardNumber: $("#cardNum").val(),
    cardType: "CUP",
    expMonth: elem.find(".expMon").text(),
    expYear: elem.find(".expYear").text(),
    securityCode: 0,
  };

  f_fetch(
    url_CUPToken,
    function (CUPdata) {
      var array = [];
      var storeState = f_getSessionStorage();
      for (var i = 0; i < storeState.guests.length; i++) {
        var _postData = f_CUPParameter(
          storeState.guests[i],
          i,
          CUPdata.data.uuid
        );
        if (_postData) {
          array.push(_postData);
        } else {
          return false;
        }
      }
      f_setStoreState("CUPArray", array);
      f_fetch(
        url_reservations,
        function (data) {
          loading_show();
          f_setStoreState("guestPaymentResult", data.data);
          var routerSearch = getRouterSearch();
          var url_href =
            bookingEngine_global_data.global.pathArea.confirmationPath +
            ".html?confirmation_code=" +
            data.data[0].confirmationCode +
            "&offerCode=" +
            f_getOfferCodeFromURL("offerCode") +
            "&flow=tf&multi=" +
            routerSearch.multi;
          window.location.href = url_href;
        },
        function (res) {
          if (data.ttCode === "9000") {
            f_setStoreState("curr_errmsg", {
              code: "error_code_9000",
              errmsg:
                bookingEngine_global_data.global.errorArea["error_code_9000"],
            });
            window.location.replace(
              (window.location.href =
                bookingEngine_global_data.global.pathArea.roomPath +
                ".html" +
                window.location.search)
            );
          }
        },
        array
      );
    },
    function () {},
    CUPCardInfoArray
  );
}

//CUP ArrayList
function f_CUPParameter(guest, index, uuid) {
  var marketingConsent;
  if (!$("#allowBox").is(":checked")) {
    marketingConsent = "NO";
  } else {
    marketingConsent = "YES";
  }
  f_setMarketingConsent(marketingConsent);
  var storeState = f_getSessionStorage();
  var currency;
  if ($("#PaymentMethodDiv").find(".payCurrency").is(":visible")) {
    currency = storeState.currency;
  } else {
    currency = "SGD";
  }

  var nightPrice = [];
  var preTaxAmount = 0;
  var guestCurrencyPreTaxAmount = 0;
  if (f_isEmpty(guest.selectedRoom)) {
    return false;
  } else {
    var selectedOffer = storeState.availableOffers.filter(function (offer) {
      return offer.code === f_getOfferCodeFromURL("offerCode");
    })[0];
    for (var i = 0; i < selectedOffer.rooms[index].nightlyPrices.length; i++) {
      var price;
      var guestCurrencyPrice;
      if (
        selectedOffer.rooms[index].nightlyPrices[i].discountedPriceByCurrency
          .length > 0
      ) {
        price = selectedOffer.rooms[index].nightlyPrices[
          i
        ].discountedPriceByCurrency.filter(function (price) {
          return price.currencyCode === "SGD";
        })[0].price;
        guestCurrencyPrice = selectedOffer.rooms[index].nightlyPrices[
          i
        ].discountedPriceByCurrency.filter(function (price) {
          return price.currencyCode === currency;
        })[0].price;
      } else {
        price = selectedOffer.rooms[index].nightlyPrices[
          i
        ].priceByCurrency.filter(function (price) {
          return price.currencyCode === "SGD";
        })[0].price;
        guestCurrencyPrice = selectedOffer.rooms[index].nightlyPrices[
          i
        ].priceByCurrency.filter(function (price) {
          return price.currencyCode === currency;
        })[0].price;
      }
      var array = {
        effectiveDate:
          selectedOffer.rooms[index].nightlyPrices[i].effectiveDate,
        guestCurrencyPrice: guestCurrencyPrice,
        price: price,
      };
      nightPrice.push(array);
      preTaxAmount += price;
      guestCurrencyPreTaxAmount += guestCurrencyPrice;
    }

    //判断ticket addon
    if (storeState.ticketAddon) {
      var _ticketAddonPrice = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
        storeState.ticketAddon.priceArr
      );
      guestCurrencyPreTaxAmount +=
        _ticketAddonPrice.guestCurrencyUnitPrice *
        storeState.ticketAddon.countData[index];
      preTaxAmount +=
        _ticketAddonPrice.unitPrice * storeState.ticketAddon.countData[index];
      storeState.ticketAddon.count = storeState.ticketAddon.countData[index];
      storeState.ticketAddon.priceArr = null;
      storeState.ticketAddon.guestCurrencyUnitPrice =
        _ticketAddonPrice.guestCurrencyUnitPrice;
      storeState.ticketAddon.unitPrice = _ticketAddonPrice.unitPrice;
    } else if (
      selectedOffer.addonInfo &&
      selectedOffer.addonInfo.length &&
      selectedOffer.addonInfo[0].addOnType === "Ticketing addons"
    ) {
      f_setStoreState("curr_errmsg", {
        code: "ticketsNotSelectedError",
        errmsg:
          bookingEngine_global_data.global.errorArea["ticketsNotSelectedError"],
      });
      window.location.replace(
        (window.location.href =
          bookingEngine_global_data.global.pathArea.roomPath +
          ".html?" +
          f_getSearchWithoutOfferCode())
      );
      return false;
    }
    var guestRoomPreferences = f_guestPreferenceArray(guest, index);
    var originalRoomCode = null;
    if (storeState.originalRoom[index].totalUpgradePrice != null) {
      originalRoomCode = storeState.originalRoom[index].originalRoomCode;
    }
    var paymentCurrencyType = "SGD";
    var guestCurrencyPreTaxAmountNum = 0;
    var guestCurrencyTaxAndServices = selectedOffer.rooms[
      index
    ].taxesAndServiceChargesByCurrency.filter(function (price) {
      return price.currencyCode === currency;
    })[0].price;
    var guestCurrencyTaxAndServicesNum = 0;
    /*		if($(".payCurrency").is(':visible')){
       paymentCurrencyType = currency;
       guestCurrencyPreTaxAmountNum = guestCurrencyPreTaxAmount;
       guestCurrencyTaxAndServicesNum = guestCurrencyTaxAndServices;
       f_setStoreState("paymentCurrencyType", paymentCurrencyType);
     }else{
       guestCurrencyPreTaxAmountNum = guestCurrencyPreTaxAmount;
       guestCurrencyTaxAndServicesNum = guestCurrencyTaxAndServices;
       f_setStoreState("paymentCurrencyType", 'SGD');
     }*/
    guestCurrencyPreTaxAmountNum = guestCurrencyPreTaxAmount;
    guestCurrencyTaxAndServicesNum = guestCurrencyTaxAndServices;
    f_setStoreState("paymentCurrencyType", "SGD");
    var iata_number =
      getRouterSearch().iataNumber ||
      (storeState.iataNumber ? storeState.iataNumber.number : "");
    postModel = {
      langCode: storeState.locale,
      roomIndex: index,
      propertyCode: "MBS",
      numberOfAdults: guest.adults,
      numberOfChildren: guest.children,
      arrivalDate: storeState.checkindate,
      departureDate: storeState.checkoutdate,
      roomCode: selectedOffer.rooms[index].roomCode,
      rateCode: selectedOffer.code,
      dprCode: selectedOffer.dprCode,
      searchTransactionId: selectedOffer.rooms[index].searchTransactionId,
      marketingConsent: marketingConsent,
      nightlyPrices: nightPrice,
      packages: storeState.ticketAddon ? [storeState.ticketAddon] : [],
      paymentCurrencyType: paymentCurrencyType,
      preTaxAmount: preTaxAmount,
      guestCurrencyPreTaxAmount: guestCurrencyPreTaxAmountNum,
      taxAndServices: selectedOffer.rooms[
        index
      ].taxesAndServiceChargesByCurrency.filter(function (price) {
        return price.currencyCode === "SGD";
      })[0].price,
      guestCurrencyTaxAndServices: guestCurrencyTaxAndServicesNum,
      guestRoomPreferences: guestRoomPreferences,
      guestInfo: {
        salutation: $("#guest_card")
          .find(".positionR .dropdown_selected")
          .text()
          .trim(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        countryCode: $("#country").attr("data-two"),
        phoneNumber:
          storeState.memberStatus &&
          JSON.parse(sessionStorage.getItem("patronProfile")).phoneNumber
            ? $("#phone").val()
            : $("#guest_card")
                .find(".iti__selected-dial-code")
                .text()
                .replace("+", "") + $("#phone").val(),
        emailAddress: $("#Email").val(),
        countryName: replaceString(
          $("#country").attr("data-english"),
          "-",
          " "
        ),
      },
      successCallbackUrl:
        window.location.protocol +
        "//" +
        window.location.host +
        bookingEngine_global_data.global.pathArea.confirmationPath +
        ".html?" +
        "offerCode=" +
        f_getOfferCodeFromURL("offerCode"),
      errorCallbackUrl:
        window.location.protocol +
        "//" +
        window.location.host +
        bookingEngine_global_data.global.pathArea.errorPath +
        ".html?",
      originalRoomCode: originalRoomCode,
      totalUpgradePrice: storeState.originalRoom[index].totalUpgradePrice,
      policyCode: selectedOffer.policyCode,
      guaranteePercentage: selectedOffer.guaranteePercentage,
      uuid: uuid,
      iataNumber: iata_number,
    };
    if (
      !$("#preferencesDiv")
        .find(".time" + index)
        .attr("data-option") === false
    ) {
      postModel.arrivalTimeInfo = $("#preferencesDiv")
        .find(".time" + index)
        .text()
        .trim();
    }
    return postModel;
  }
}

//AliPay
function f_aliPay() {
  var array = [];
  var storeState = f_getSessionStorage();
  for (var i = 0; i < storeState.guests.length; i++) {
    var _postData = f_alipayParameter(storeState.guests[i], i);
    if (_postData) {
      array.push(_postData);
    } else {
      return false;
    }
  }
  f_setStoreState("alipayArray", array);
  f_fetch(
    url_aliPay,
    function (data) {
      f_setStoreState("alipayURL", data.data.stitchedUrl);
      window.location.replace(
        bookingEngine_global_data.global.pathArea.alipayPath + ".html?"
      );
    },
    function (data) {
      var errmsg = "";
      var errcode = bookingEngine_global_data.global.errorArea;
      if (data.ttCode === "3012") {
        f_resetAvailableOffers(data);
      } else if (data.ttCode === "3013") {
        f_setStoreState("curr_errmsg", {
          code: "error_code_3013",
          errmsg: errcode["error_code_3013"],
        });
        window.location.href = storeState.pageStepUrl.step2;
      } else if (data.code === "9999") {
        f_link_to_errPage();
      } else if (data.ttCode === "9000") {
        f_setStoreState("curr_errmsg", {
          code: "error_code_9000",
          errmsg: errcode["error_code_9000"],
        });
        window.location.replace(
          (window.location.href =
            bookingEngine_global_data.global.pathArea.roomPath +
            ".html" +
            window.location.search)
        );
      } else if (data.code === "0103") {
        errmsg = errcode["error_code_" + data.ttCode]
          ? errcode["error_code_" + data.ttCode]
          : data.message;
        f_showErrMassage(errmsg);
        loading_hide();
      } else {
        f_link_to_errPage();
      }
    },
    array
  );
}

function f_alipayParameter(guest, index) {
  var postModel;
  var storeState = f_getSessionStorage();
  var guestCurrencyPreTaxAmount = 0;
  var nightPrice = [];
  var preTaxAmount = 0;
  var marketingConsent;
  if ($("#allowBox").is(":checked")) {
    marketingConsent = "YES";
  } else {
    marketingConsent = "NO";
  }
  f_setMarketingConsent(marketingConsent);
  var currency;
  if ($("#PaymentMethodDiv").find(".payCurrency").is(":visible")) {
    currency = storeState.currency;
  } else {
    currency = "SGD";
  }
  if (f_isEmpty(guest.selectedRoom)) {
    return false;
  } else {
    var guestRoomPreferences = f_guestPreferenceArray(guest, index);
    var selectedOffer = storeState.availableOffers.filter(function (offer) {
      return offer.code === f_getOfferCodeFromURL("offerCode");
    })[0];
    for (var i = 0; i < selectedOffer.rooms[index].nightlyPrices.length; i++) {
      var price;
      var guestCurrencyPrice;
      if (
        selectedOffer.rooms[index].nightlyPrices[i].discountedPriceByCurrency
          .length > 0
      ) {
        price = selectedOffer.rooms[index].nightlyPrices[
          i
        ].discountedPriceByCurrency.filter(function (price) {
          return price.currencyCode === "SGD";
        })[0].price;
        guestCurrencyPrice = selectedOffer.rooms[index].nightlyPrices[
          i
        ].discountedPriceByCurrency.filter(function (price) {
          return price.currencyCode === currency;
        })[0].price;
      } else {
        price = selectedOffer.rooms[index].nightlyPrices[
          i
        ].priceByCurrency.filter(function (price) {
          return price.currencyCode === "SGD";
        })[0].price;
        guestCurrencyPrice = selectedOffer.rooms[index].nightlyPrices[
          i
        ].priceByCurrency.filter(function (price) {
          return price.currencyCode === currency;
        })[0].price;
      }
      var array = {
        effectiveDate:
          selectedOffer.rooms[index].nightlyPrices[i].effectiveDate,
        guestCurrencyPrice: guestCurrencyPrice,
        price: price,
      };
      nightPrice.push(array);
      preTaxAmount += price;
      guestCurrencyPreTaxAmount += guestCurrencyPrice;
    }
    //判断ticket addon
    if (storeState.ticketAddon) {
      var _ticketAddonPrice = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
        storeState.ticketAddon.priceArr
      );
      guestCurrencyPreTaxAmount +=
        _ticketAddonPrice.guestCurrencyUnitPrice *
        storeState.ticketAddon.countData[index];
      preTaxAmount +=
        _ticketAddonPrice.unitPrice * storeState.ticketAddon.countData[index];
      storeState.ticketAddon.count = storeState.ticketAddon.countData[index];
      storeState.ticketAddon.priceArr = null;
      storeState.ticketAddon.guestCurrencyUnitPrice =
        _ticketAddonPrice.guestCurrencyUnitPrice;
      storeState.ticketAddon.unitPrice = _ticketAddonPrice.unitPrice;
    } else if (
      selectedOffer.addonInfo &&
      selectedOffer.addonInfo.length &&
      selectedOffer.addonInfo[0].addOnType === "Ticketing addons"
    ) {
      f_setStoreState("curr_errmsg", {
        code: "ticketsNotSelectedError",
        errmsg:
          bookingEngine_global_data.global.errorArea["ticketsNotSelectedError"],
      });
      window.location.replace(
        (window.location.href =
          bookingEngine_global_data.global.pathArea.roomPath +
          ".html?" +
          f_getSearchWithoutOfferCode())
      );
      return false;
    }
    var originalRoomCode = null;
    if (storeState.originalRoom[index].totalUpgradePrice != null) {
      originalRoomCode = storeState.originalRoom[index].originalRoomCode;
    }
    var paymentCurrencyType = "";
    var guestCurrencyPreTaxAmountNum = 0;
    var guestCurrencyTaxAndServices = selectedOffer.rooms[
      index
    ].taxesAndServiceChargesByCurrency.filter(function (price) {
      return price.currencyCode === currency;
    })[0].price;
    var guestCurrencyTaxAndServicesNum = 0;
    paymentCurrencyType = currency;
    guestCurrencyPreTaxAmountNum = guestCurrencyPreTaxAmount;
    guestCurrencyTaxAndServicesNum = guestCurrencyTaxAndServices;
    f_setStoreState("paymentCurrencyType", "SGD");
    var iata_number =
      getRouterSearch().iataNumber ||
      (storeState.iataNumber ? storeState.iataNumber.number : "");

    postModel = {
      langCode: storeState.locale,
      // "deviceType": "d",
      roomIndex: index,
      propertyCode: "MBS",
      numberOfAdults: guest.adults,
      numberOfChildren: guest.children,
      arrivalDate: storeState.checkindate,
      departureDate: storeState.checkoutdate,
      roomCode: selectedOffer.rooms[index].roomCode,
      rateCode: selectedOffer.code,
      dprCode: selectedOffer.dprCode,
      searchTransactionId: selectedOffer.rooms[index].searchTransactionId,
      marketingConsent: marketingConsent,
      nightlyPrices: nightPrice,
      packages: storeState.ticketAddon ? [storeState.ticketAddon] : [],
      paymentCurrencyType: "SGD",
      preTaxAmount: preTaxAmount,
      guestCurrencyPreTaxAmount: guestCurrencyPreTaxAmountNum,
      taxAndServices: selectedOffer.rooms[
        index
      ].taxesAndServiceChargesByCurrency.filter(function (price) {
        return price.currencyCode === "SGD";
      })[0].price,
      guestCurrencyTaxAndServices: guestCurrencyTaxAndServicesNum,
      guestRoomPreferences: guestRoomPreferences,
      guestInfo: {
        salutation: $("#guest_card")
          .find(".positionR .dropdown_selected")
          .text()
          .trim(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        countryCode: $("#country").attr("data-two"),
        phoneNumber:
          storeState.memberStatus &&
          JSON.parse(sessionStorage.getItem("patronProfile")).phoneNumber
            ? $("#phone").val()
            : $("#guest_card")
                .find(".iti__selected-dial-code")
                .text()
                .replace("+", "") + $("#phone").val(),
        emailAddress: $("#Email").val(),
        countryName: replaceString(
          $("#country").attr("data-english"),
          "-",
          " "
        ),
      },
      successCallbackUrl:
        window.location.protocol +
        "//" +
        window.location.host +
        bookingEngine_global_data.global.pathArea.confirmationPath +
        ".html?" +
        "offerCode=" +
        f_getOfferCodeFromURL("offerCode"),
      errorCallbackUrl:
        window.location.protocol +
        "//" +
        window.location.host +
        bookingEngine_global_data.global.pathArea.errorPath +
        ".html?",
      originalRoomCode: originalRoomCode,
      totalUpgradePrice: storeState.originalRoom[index].totalUpgradePrice,
      policyCode: selectedOffer.policyCode,
      guaranteePercentage: selectedOffer.guaranteePercentage,
      iataNumber: iata_number,
    };
    if (
      !$("#preferencesDiv")
        .find(".time" + index)
        .attr("data-option") === false
    ) {
      postModel.arrivalTimeInfo = $("#preferencesDiv")
        .find(".time" + index)
        .text()
        .trim();
    }
    return postModel;
  }
}

function f_sessionIdParameter(guest, cardType, index) {
  var marketingConsent;
  if (!$("#allowBox").is(":checked")) {
    marketingConsent = "NO";
  } else {
    marketingConsent = "YES";
  }
  f_setMarketingConsent(marketingConsent);
  var storeState = f_getSessionStorage();
  var currency;
  if ($("#PaymentMethodDiv").find(".payCurrency").is(":visible")) {
    currency = storeState.currency;
  } else {
    currency = "SGD";
  }

  var nightPrice = [];
  var preTaxAmount = 0;
  var guestCurrencyPreTaxAmount = 0;
  if (f_isEmpty(guest.selectedRoom)) {
    return false;
  } else {
    var selectedOffer = storeState.availableOffers.filter(function (offer) {
      return offer.code === f_getOfferCodeFromURL("offerCode");
    })[0];
    for (var i = 0; i < selectedOffer.rooms[index].nightlyPrices.length; i++) {
      var price;
      var guestCurrencyPrice;
      if (
        selectedOffer.rooms[index].nightlyPrices[i].discountedPriceByCurrency
          .length > 0
      ) {
        price = selectedOffer.rooms[index].nightlyPrices[
          i
        ].discountedPriceByCurrency.filter(function (price) {
          return price.currencyCode === "SGD";
        })[0].price;
        guestCurrencyPrice = selectedOffer.rooms[index].nightlyPrices[
          i
        ].discountedPriceByCurrency.filter(function (price) {
          return price.currencyCode === currency;
        })[0].price;
      } else {
        price = selectedOffer.rooms[index].nightlyPrices[
          i
        ].priceByCurrency.filter(function (price) {
          return price.currencyCode === "SGD";
        })[0].price;
        guestCurrencyPrice = selectedOffer.rooms[index].nightlyPrices[
          i
        ].priceByCurrency.filter(function (price) {
          return price.currencyCode === currency;
        })[0].price;
      }
      var array = {
        effectiveDate:
          selectedOffer.rooms[index].nightlyPrices[i].effectiveDate,
        guestCurrencyPrice: guestCurrencyPrice,
        price: price,
      };
      nightPrice.push(array);
      preTaxAmount += price;
      guestCurrencyPreTaxAmount += guestCurrencyPrice;
    }
    //判断ticket addon
    if (storeState.ticketAddon) {
      var _ticketAddonPrice = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
        storeState.ticketAddon.priceArr
      );
      guestCurrencyPreTaxAmount +=
        _ticketAddonPrice.guestCurrencyUnitPrice *
        storeState.ticketAddon.countData[index];
      preTaxAmount +=
        _ticketAddonPrice.unitPrice * storeState.ticketAddon.countData[index];
      storeState.ticketAddon.count = storeState.ticketAddon.countData[index];
      storeState.ticketAddon.priceArr = null;
      storeState.ticketAddon.guestCurrencyUnitPrice =
        _ticketAddonPrice.guestCurrencyUnitPrice;
      storeState.ticketAddon.unitPrice = _ticketAddonPrice.unitPrice;
    } else if (
      selectedOffer.addonInfo &&
      selectedOffer.addonInfo.length &&
      selectedOffer.addonInfo[0].addOnType === "Ticketing addons"
    ) {
      f_setStoreState("curr_errmsg", {
        code: "ticketsNotSelectedError",
        errmsg:
          bookingEngine_global_data.global.errorArea["ticketsNotSelectedError"],
      });
      window.location.replace(
        (window.location.href =
          bookingEngine_global_data.global.pathArea.roomPath +
          ".html?" +
          f_getSearchWithoutOfferCode())
      );
      return false;
    }
    var guestRoomPreferences = f_guestPreferenceArray(guest, index);
    var originalRoomCode = null;
    if (storeState.originalRoom[index].totalUpgradePrice != null) {
      originalRoomCode = storeState.originalRoom[index].originalRoomCode;
    }
    var paymentCurrencyType = "";
    var guestCurrencyPreTaxAmountNum = 0;
    var guestCurrencyTaxAndServices = selectedOffer.rooms[
      index
    ].taxesAndServiceChargesByCurrency.filter(function (price) {
      return price.currencyCode === currency;
    })[0].price;
    var guestCurrencyTaxAndServicesNum = 0;
    var paymentCurrencyInfo = [];
    if ($("#PaymentMethodDiv").find(".payCurrency").is(":visible")) {
      paymentCurrencyType = currency;
      guestCurrencyPreTaxAmountNum = guestCurrencyPreTaxAmount;
      guestCurrencyTaxAndServicesNum = guestCurrencyTaxAndServices;
      f_setStoreState("paymentCurrencyType", paymentCurrencyType);
    } else {
      f_setStoreState("paymentCurrencyType", "SGD");
    }
    var iata_number =
      getRouterSearch().iataNumber ||
      (storeState.iataNumber ? storeState.iataNumber.number : "");
    postModel = {
      langCode: storeState.locale,
      roomIndex: index,
      propertyCode: "MBS",
      numberOfAdults: guest.adults,
      numberOfChildren: guest.children,
      arrivalDate: storeState.checkindate,
      departureDate: storeState.checkoutdate,
      roomCode: selectedOffer.rooms[index].roomCode,
      rateCode: selectedOffer.code,
      dprCode: selectedOffer.dprCode,
      searchTransactionId: selectedOffer.rooms[index].searchTransactionId,
      marketingConsent: marketingConsent,
      nightlyPrices: nightPrice,
      packages: storeState.ticketAddon ? [storeState.ticketAddon] : [],
      paymentCurrencyType: paymentCurrencyType,
      preTaxAmount: preTaxAmount,
      guestCurrencyPreTaxAmount: guestCurrencyPreTaxAmountNum,
      taxAndServices: selectedOffer.rooms[
        index
      ].taxesAndServiceChargesByCurrency.filter(function (price) {
        return price.currencyCode === "SGD";
      })[0].price,
      guestCurrencyTaxAndServices: guestCurrencyTaxAndServicesNum,
      guestRoomPreferences: guestRoomPreferences,
      guestInfo: {
        salutation: $("#guest_card")
          .find(".positionR .dropdown_selected")
          .text()
          .trim(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        countryCode: $("#country").attr("data-two"),
        phoneNumber:
          storeState.memberStatus &&
          JSON.parse(sessionStorage.getItem("patronProfile")).phoneNumber
            ? $("#phone").val()
            : $("#guest_card")
                .find(".iti__selected-dial-code")
                .text()
                .replace("+", "") + $("#phone").val(),
        emailAddress: $("#Email").val(),
        countryName: replaceString(
          $("#country").attr("data-english"),
          "-",
          " "
        ),
      },
      creditCardDetails: {
        cardHolderName: "",
        cardNumber: "",
        cardType: "" + cardType,
        securityCode: 0,
      },
      successCallbackUrl:
        window.location.protocol +
        "//" +
        window.location.host +
        bookingEngine_global_data.global.pathArea.confirmationPath +
        ".html?" +
        "offerCode=" +
        f_getOfferCodeFromURL("offerCode"),
      errorCallbackUrl:
        window.location.protocol +
        "//" +
        window.location.host +
        bookingEngine_global_data.global.pathArea.errorPath +
        ".html?",
      cardType: "" + cardType,
      originalRoomCode: originalRoomCode,
      totalUpgradePrice: storeState.originalRoom[index].totalUpgradePrice,
      policyCode: selectedOffer.policyCode,
      guaranteePercentage: selectedOffer.guaranteePercentage,
      iataNumber: iata_number,
    };
    if (
      !$("#preferencesDiv")
        .find(".time" + index)
        .attr("data-option") === false
    ) {
      postModel.arrivalTimeInfo = $("#preferencesDiv")
        .find(".time" + index)
        .text()
        .trim();
    }
    return postModel;
  }
}

function f_guestPreferenceArray(guest, index) {
  var storeState = f_getSessionStorage();
  if (!storeState.Preferences) return null;
  var guestRoomPreferences = new Array();
  if (storeState.Preferences[index].preferences.length > 0) {
    var Preference = storeState.Preferences[index].preferences;
    for (var j = 0; j < Preference.length; j++) {
      if (Preference[j].questionType === "arrivalTime") {
        var array = {};
        var optionId = [];
        array.question_id = Preference[j].question.questionId;
        var elem = $("#preferencesDiv")
          .find(".preference" + index)
          .find(".time_dropdown_selected");
        optionId.push(elem.attr("data-option"));
        if (elem.attr("data-option")) {
          array.option_ids = optionId;
          guestRoomPreferences.push(array);
        }
      } else if (Preference[j].questionType === "single") {
        var array = {};
        var optionId = [];
        var preQuestionOptionId = [];
        if (
          !Preference[j].preQuestion === false &&
          Preference[j].roomQuestion != null
        ) {
          array.question_id = Preference[j].roomQuestion.questionId;
          var elem = $("#preferencesDiv")
            .find(".preference" + index)
            .find(".celebrateRadio");
          for (var k = 0; k < elem.length; k++) {
            var radio = elem.eq(k);
            if (radio.find("input").eq(0).is(":checked")) {
              preQuestionOptionId.push(
                radio.find("label").eq(0).attr("data-option")
              );
            }
          }
          array.preQuestionOptionIds = preQuestionOptionId;
          var elem1 = $("#preferencesDiv")
            .find(".preference" + index)
            .find(".occasionDropDown");
          if (elem1.is(":visible")) {
            if (!elem1.attr("data-option")) {
              guestRoomPreferences.push(array);
            } else {
              optionId.push(elem1.attr("data-option"));
              array.option_ids = optionId;
              guestRoomPreferences.push(array);
            }
          } else {
            guestRoomPreferences.push(array);
          }
        } else {
          if (Preference[j].roomQuestion != null) {
            array.question_id = Preference[j].roomQuestion.questionId;
            optionId.push(
              $("#preferencesDiv")
                .find(".preference" + index)
                .find(".occasionDropDown")
                .attr("data-option")
            );
            array.option_ids = optionId;
            guestRoomPreferences.push(array);
          }
        }
      } else if (Preference[j].questionType === "multiple") {
        var array = {};
        var optionId = [];
        if (
          !Preference[j].preQuestion === false &&
          Preference[j].roomQuestion != null
        ) {
          array.question_id = Preference[j].roomQuestion.questionId;
          var elem = $("#preferencesDiv")
            .find(".preference" + index)
            .find(".celebrateRadio");
          for (var l = 0; l < elem.length; l++) {
            var radio = elem.eq(l);
            if (radio.find("input").eq(0).is(":checked")) {
              preQuestionOptionId.push(
                radio.find("label").eq(0).attr("data-option")
              );
            }
          }
          array.preQuestionOptionIds = preQuestionOptionId;
          var elem1 = $("#preferencesDiv").find(".preference" + index);
          if (elem1.find(".preferencesDropDown").is(":visible")) {
            for (
              var m = 0;
              m < elem1.find(".preferencesDropDown>.selectedrp").length;
              m++
            ) {
              optionId.push(
                elem1
                  .find(".preferencesDropDown>.selectedrp")
                  .eq(m)
                  .attr("data-item")
              );
            }
            array.option_ids = optionId;
            guestRoomPreferences.push(array);
          } else {
            guestRoomPreferences.push(array);
          }
        } else {
          if (Preference[j].roomQuestion != null) {
            array.question_id = Preference[j].roomQuestion.questionId;
            var elem = $("#preferencesDiv")
              .find(".preference" + index)
              .find(".preferencesDropDown>.selectedrp");
            for (var m = 0; m < elem.length; m++) {
              optionId.push(elem.eq(m).attr("data-item"));
            }
            if (optionId.length > 0) {
              array.option_ids = optionId;
            }
            guestRoomPreferences.push(array);
          }
        }
      }
    }
  }
  return guestRoomPreferences;
}

function validate() {
  var status = true;
  var checkPayMethod = false;
  var checkFirstName = name_validate($("#firstName"));
  var checkLastName = name_validate($("#lastName"));
  var checkPhone = phone_validate($("#phone"));
  if (!(checkFirstName && checkLastName && checkPhone)) {
    status = false;
  }
  //Email
  if (!email_validate()) {
    status = false;
  }

  //Pay Method
  $("#PaymentMethodDiv")
    .find(".payMethod")
    .each(function () {
      if ($(this).prop("checked")) {
        checkPayMethod = true;
      }
    });
  if (!checkPayMethod) {
    status = false;
    $("#PaymentMethodDiv").find(".cardSelect .error_msg").show();
  }
  if (!$("#acceptBox").is(":checked")) {
    status = false;
    $("#ProceedDiv").find(".TermsAndConditions .error_msg").show();
  }
  if ($("#CUPCard").is(":visible")) {
    var checkCardName = name_validate($("#cardName"), true);
    var checkCardNum = cardNum_validate($("#cardNum"));
    if (!(checkCardName && checkCardNum)) {
      status = false;
    }
    f_checkExpirationDate(true);
    if ($("#CUPCard").find(".expirationDate .error_msg").is(":visible")) {
      status = false;
    }
  }
  if (status) {
    $(".error_line").removeClass("error_line");
    $(".error_msg").hide();
    return true;
  } else {
    return false;
  }
}

function checkValue(obj) {
  if ($(obj).val() === "") {
    $(obj).next(".error_msg").show();
    $(obj).addClass("error_line");
    return false;
  } else {
    return true;
  }
}

function email_validate() {
  var regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var elem = $("#guest_card");
  $("#Email").val($("#Email").val().trim());
  if ($("#Email").val() === "") {
    $("#Email").addClass("error_line");
    elem.find(".invalidate_Email").hide();
    elem.find(".noneEn_Email").hide();
    elem.find(".empty_Email").show();
    return false;
  } else if (checkIshanzi($("#Email").val())) {
    $("#Email").val(
      $("#Email")
        .val()
        .replace(/[^\u0000-\u007F]+/g, "")
    );
    $("#Email").addClass("error_line");
    elem.find(".invalidate_Email").hide();
    elem.find(".empty_Email").hide();
    elem.find(".noneEn_Email").show();
    return false;
  } else if (!regEmail.test($("#Email").val())) {
    $("#Email").addClass("error_line");
    elem.find(".empty_Email").hide();
    elem.find(".noneEn_Email").hide();
    elem.find(".invalidate_Email").show();
    return false;
  } else {
    $("#Email").removeClass("error_line");
    elem.find(".empty_Email").hide();
    elem.find(".invalidate_Email").hide();
    elem.find(".noneEn_Email").hide();
    return true;
  }
}

function name_validate(obj, isCard) {
  var regName;
  regName = /^([a-zA-Z])[a-zA-Z ]*$/;
  if (!isCard) {
    if (obj.val() === "") {
      obj.addClass("error_line");
      obj.next().next(".invalidate").hide();
      obj.next(".error_msg").show();
      return false;
    } else if (!regName.test(obj.val())) {
      obj.addClass("error_line");
      obj.next(".error_msg").hide();
      obj.next().next(".invalidate").show();
      return false;
    } else {
      obj.removeClass("error_line");
      obj.next(".error_msg").hide();
      obj.next().next(".invalidate").hide();
      return true;
    }
  } else {
    if (obj.val() === "" || !regName.test(obj.val())) {
      obj.addClass("error_line");
      obj.next(".error_msg").show();
      return false;
    } else {
      obj.removeClass("error_line");
      obj.next(".error_msg").hide();
      return true;
    }
  }
}

function phone_validate(obj) {
  var regPhone = /^[0-9]*$/;
  if (obj.val() === "") {
    obj.addClass("error_line");
    obj.next().next(".invalidate").hide();
    obj.next(".error_msg").show();
    return false;
  } else if (!regPhone.test(obj.val())) {
    obj.addClass("error_line");
    obj.next(".error_msg").hide();
    obj.next().next(".invalidate").show();
    return false;
  } else {
    obj.removeClass("error_line");
    obj.next(".error_msg").hide();
    obj.next().next(".invalidate").hide();
    return true;
  }
}

function cardNum_validate(obj) {
  var account = obj
    .val()
    .replace(/(^\s+)|(\s+$)/g, "")
    .replace(/\s/g, "");
  var regCardNum = /^[0-9]*$/;
  if (
    account == "" ||
    account.length < 16 ||
    account.length > 19 ||
    !regCardNum.test(account)
  ) {
    obj.addClass("error_line");
    obj.next(".error_msg").show();
    return false;
  } else {
    obj.removeClass("error_line");
    obj.next(".error_msg").hide();
    return true;
  }
}

function f_loadScript(t, callback) {
  try {
    loading_show();
    if (document.getElementById(t.id)) {
      if ($("#" + t.id).attr("src") !== t.src) {
        window.Checkout = null;
        $("iframe[title='Hosted Checkout']").remove();
        document
          .getElementById("MPGSScript")
          .parentNode.removeChild(document.getElementById("MPGSScript"));
      } else {
        callback && callback();
        return true;
      }
    }
    var scriptLoadTimeOut = window.setTimeout(function () {
      f_MPGS_scriptLoadTimeOut();
    }, 30000);
    $.ajaxSettings.async = false;
    var e = null;
    e =
      void 0 !== t.location && "head" === t.location
        ? document.head
        : document.body;
    var n = document.createElement("script");
    void 0 !== t.id && (n.id = t.id);
    void 0 !== t.type && (n.type = t.type);
    void 0 !== t.src && (n.src = t.src);
    void 0 !== t.innerHTML && (n.innerHTML = t.innerHTML);
    t.isAsync && (n.async = t.isAsync);
    t.isDefer && (n.defer = t.isDefer);
    n.setAttribute("data-cancel", "cancelCallback");
    n.setAttribute("data-complete", "completeCallback");
    n.setAttribute("data-error", "errorCallback");
    e.appendChild(n);
    n.onload = function () {
      window.clearTimeout(scriptLoadTimeOut);
      callback && callback();
    };
  } catch (err) {
    loading_hide();
    console.error(err);
  }
}

function f_MPGS_scriptLoadTimeOut() {
  loading_hide();
  f_showErrMassage(bookingEngine_global_data.global.errorArea.mpgs_error_alert);
}

function f_editRooms(obj) {
  f_storeInfoToSession();
  var storeState = f_getSessionStorage();
  var index = $("#room_info").find(".editRooms").index($(obj));
  var iataNum = "";
  if (storeState.iataNumber) {
    iataNum = "&iataNumber=" + storeState.iataNumber.number;
  }
  var url =
    bookingEngine_global_data.global.pathArea.roomPath +
    ".html?Rooms=" +
    storeState.guests.length +
    "&CheckinDate=" +
    storeState.checkindate +
    "&LOS=" +
    storeState.los +
    iataNum;
  for (var i = 0; i < storeState.guests.length; i++) {
    url +=
      "&Adults_" +
      (i + 1) +
      "=" +
      storeState.guests[i].adults +
      "&Children_" +
      (i + 1) +
      "=" +
      storeState.guests[i].children;
  }
  url += "&Currency=" + storeState.currency + "&flow=tf";
  if (storeState.guests.length > 1) {
    url += "&multi=true";
  } else {
    url += "&multi=false";
  }
  url +=
    "&offerCode=" +
    storeState.offerCode +
    "#" +
    storeState.guests[index].selectedRoom.code +
    "," +
    f_getOfferCodeFromURL("offerCode");
  delete storeState.guests[index]["selectedRoom"];
  sessionStorage.setItem("storeState", JSON.stringify(storeState));
  //Tealium event
  if (typeof t_roomEdit === "function") {
    t_roomEdit();
  }
  window.location.replace(url);
}

function f_resetPreferences() {
  var storeState = f_getSessionStorage();
  f_setPreferencesData(storeState.Preferences, false);
}

function dropDownClose() {
  $("#main_container .dropdown-up").addClass("dropdown-down");
  $("#main_container .dropdown-up").removeClass("dropdown-up");
  $(
    "#main_container .dropdown_select_salutation,#guest_card .countryList,#guest_card .timeSelectLi,#guest_card .roomPreferences,#guest_card .occasionList"
  ).hide();
  $("#guest_card .time_dropdown_selected").removeClass("open");
}

function f_setPrefereces() {
  var array = [];
  var storeState = f_getSessionStorage();
  var elem = $("#guest_card");
  for (var i = 0; i < elem.find(".preferenceBlock").length; i++) {
    var preference = elem.find(".preference" + i);
    var time = "";
    var multi = { title: "", datalist: [] };
    var single = { title: "", datalist: [] };
    var elem1 = $("#preferencesDiv");
    if (
      !elem1.find(".time" + i).length === false &&
      elem1.find(".time" + i).is(":visible")
    ) {
      var index = elem1.find(".time" + i).attr("data-option");
      time = storeState.Preferences[
        i
      ].arrivalTimeGuestPreferences[0].question.options.filter(function (
        option
      ) {
        return option.optionId === index;
      })[0].optionValue;
    }
    var multiele = preference.find(".preferencesDropDown");
    if (!multiele.length === false && multiele.is(":visible")) {
      for (var j = 0; j < multiele.find(".selectedrp").length; j++) {
        multi.title = multiele
          .closest(".form-group.row")
          .find(".col-sm-4.p0-15")
          .text();
        multi.datalist.push(
          multiele
            .find(".selectedrp")
            .eq(j)
            .text()
            .replace($(".itemClose").eq(0).text(), "")
        );
      }
    }
    var singleele = preference.find(".occasion");
    if (!singleele.length === false && singleele.is(":visible")) {
      single.title = singleele
        .closest(".occasionDiv")
        .find(".col-sm-4.p0-15")
        .text();
      single.datalist.push(singleele.find(".occasionList li.active").text());
    }
    var arr = { checkintime: time, room_preferences: multi, occasion: single };
    array.push(arr);
  }
  f_setStoreState("guestsPreferences", array);
}

function f_show_calendar_Pop_paymentPge() {
  f_storeInfoToSession();
  f_Pop_Calendar_show();
  $("#s_btn_view_rooms").bind("click", function () {
    var storeState = f_getSessionStorage();
    f_getCalendarRes(
      false,
      function (data, url, isDateChange, roomsIsChange, guestIsChange) {
        if (roomsIsChange || guestIsChange) {
          window.location.replace(
            bookingEngine_global_data.global.pathArea.roomPath + ".html?" + url
          );
        } else if (isDateChange) {
          storeState = f_getSessionStorage();
          if (storeState.ticketAddon) {
            if (
              moment(storeState.ticketAddon.dateTime).isBefore(
                storeState.checkindate
              ) ||
              moment(storeState.ticketAddon.dateTime).isAfter(
                storeState.checkoutdate
              )
            ) {
              window.location.replace(
                bookingEngine_global_data.global.pathArea.roomPath +
                  ".html?" +
                  url
              );
            }
          }
          //Offer data can match
          var urlOffer =
            url_availableRateplans +
            "roomCode=" +
            f_spliceRoomCode() +
            "&arrivalDate=" +
            storeState.checkindate +
            "&departureDate=" +
            storeState.checkoutdate +
            "&roomOccupancy=" +
            f_spliceRoomOccupancy() +
            "&offerCode=" +
            f_getOfferCodeFromURL("offerCode");
          f_fetch(
            urlOffer,
            function (dataoffer) {
              f_matchRoom(dataoffer, url);
            },
            function (dataoffer) {
              f_matchRoom(dataoffer, url);
            },
            false,
            true
          );

          //Tealium View
          if (typeof t_paymentPageView === "function") {
            t_paymentPageView();
          }
        }
      }
    );
  });

  //Tealium event
  if (typeof t_edit === "function") {
    t_edit();
  }
}

function f_matchRoom(dataoffer, url) {
  var storeState = f_getSessionStorage();
  var offerMatch = false;
  var offerRoomMatch = false;
  var newOfferList;
  var count = [];
  // var allRoomCode=[];
  if (!dataoffer.data === false) {
    for (var k = 0; k < dataoffer.data.length; k++) {
      var offer = dataoffer.data[k];

      if (offer.code === f_getOfferCodeFromURL("offerCode")) {
        newOfferList = dataoffer.data;
        offerMatch = true;
        for (var l = 0; l < offer.rooms.length; l++) {
          var roomCode = offer.rooms[l].roomCode;
          for (var m = 0; m < storeState.guests.length; m++) {
            if (roomCode === storeState.guests[m].selectedRoom.roomCode) {
              count.push("1");
            }
          }
          if (count.length === storeState.guests.length) {
            offerRoomMatch = true;
          }
          // allRoomCode.push(roomCode);
        }
      }
    }
  }

  //Room data match
  var allRoomList = [];
  var num = [];
  var cal = [];
  runGuest(
    0,
    url,
    cal,
    allRoomList,
    num,
    offerMatch,
    newOfferList,
    offerRoomMatch
  );
}

function runGuest(
  numGuest,
  url,
  cal,
  allRoomList,
  num,
  offerMatch,
  newOfferList,
  offerRoomMatch
) {
  var storeState = f_getSessionStorage();
  var guests = storeState.guests[numGuest];
  var ulrRoom =
    url_availableRooms +
    "arrivalDate=" +
    storeState.checkindate +
    "&departureDate=" +
    storeState.checkoutdate +
    "&numberOfAdults=" +
    guests.adults +
    "&numberOfChildren=" +
    guests.children +
    "&offerCode=";
  f_fetch(
    ulrRoom,
    function (dataroom) {
      f_matchRoomCheck(
        dataroom,
        url,
        cal,
        allRoomList,
        num,
        numGuest,
        offerMatch,
        newOfferList,
        offerRoomMatch
      );
    },
    function (dataroom) {
      f_matchRoomCheck(
        dataroom,
        url,
        cal,
        allRoomList,
        num,
        numGuest,
        offerMatch,
        newOfferList,
        offerRoomMatch
      );
    },
    false,
    cal.length === storeState.guests.length
  );
}

function f_matchRoomCheck(
  dataroom,
  url,
  cal,
  allRoomList,
  num,
  numGuest,
  offerMatch,
  newOfferList,
  offerRoomMatch
) {
  var roomMatch = false;
  var roomSelectMatch = false;
  var storeState = f_getSessionStorage();
  cal.push("1");
  var guests = storeState.guests[numGuest];

  if (!dataroom.data) {
  } else {
    if (!dataroom.data.availableRooms.length === false) {
      for (var j = 0; j < dataroom.data.availableRooms.length; j++) {
        var room = dataroom.data.availableRooms[j];
        if (room.code.indexOf(guests.selectedRoom.roomCode) > -1) {
          num.push("1");
          var dataRoom = dataroom.data.availableRooms;
          var match_data = f_match_content_roomsData(dataRoom);
          for (var ar = 0; ar < match_data.length; ar++) {
            if ($.inArray(match_data[ar], allRoomList) < 0) {
              allRoomList.push(match_data[ar]);
            }
          }
        }
      }
      roomMatch = true;
    }
  }

  if (cal.length === storeState.guests.length) {
    if (num.length === storeState.guests.length) {
      roomSelectMatch = true;
    }
    var errcode = bookingEngine_global_data.global.errorArea;
    if (roomSelectMatch && offerRoomMatch) {
      var elem = $("#room_info");
      f_setStoreState(
        "availableOffers",
        f_get_Offer_From_contentAPI(newOfferList)
      );
      f_setStoreState("allRoomList", allRoomList);
      f_setStoreState("upgradeRooms", "");
      f_setStoreState("guestsPreferences", "");
      f_setStoreState("availableOffersOld", "");
      f_setStoreState("guestsListOld", "");
      f_setStoreState("alipayArray", "");
      f_setStoreState("alipayURL", "");
      f_initRoomInfo();
      f_guestPreferences();
      elem.find(".roomBlockTitle ").eq(0).addClass("d_actived");
      elem.find(".roomInfoBlock").eq(0).find("div").show();
      f_Pop_modal_hide();

      //Update URL Parameters
      f_pushURLData();
    } else if (offerRoomMatch === false && roomSelectMatch === true) {
      f_setStoreState("curr_errmsg", {
        code: "error_code_3001",
        errmsg: errcode["error_code_3001"],
      });
      if (f_clearRoomSelect()) {
        //				url = url.replace(storeState.offerCode,"");

        window.location.replace(
          bookingEngine_global_data.global.pathArea.roomPath + ".html?" + url
        );
      }
    } else if (
      (roomSelectMatch === false &&
        offerRoomMatch === true &&
        roomMatch === true) ||
      (roomSelectMatch === false &&
        offerRoomMatch === false &&
        roomMatch === true)
    ) {
      f_setStoreState("curr_errmsg", {
        code: "error_code_3000",
        errmsg: errcode["error_code_3000"],
      });
      if (f_clearRoomSelect()) {
        //				url = url.replace(storeState.offerCode,"");

        window.location.replace(
          bookingEngine_global_data.global.pathArea.roomPath + ".html?" + url
        );
      }
    } else {
      if (f_clearRoomSelect()) {
        //				url = url.replace(storeState.offerCode,"");
        f_err_link_to_searchPage(
          { code: "error_code_4000", errmsg: errcode["error_code_4000"] },
          "?" + url
        );
      }
    }
  }
  if (numGuest < storeState.guests.length - 1) {
    numGuest++;
    runGuest(
      numGuest,
      url,
      cal,
      allRoomList,
      num,
      offerMatch,
      newOfferList,
      offerRoomMatch
    );
  }
  var payType = $(':radio[name="inlineRadioOptions"]:checked')
    .parent(".curp")
    .attr("data-type");
  f_set_payCurrency(payType);
}

function f_clearRoomSelect() {
  var storeState = f_getSessionStorage();
  var guests = storeState.guests;
  for (var i = 0; i < guests.length; i++) {
    var guest = guests[i];
    if (!guest.selectedRoom === false) {
      delete guests[i]["selectedRoom"];
    }
  }
  //	var pageStepUrl = storeState.pageStepUrl;
  //	pageStepUrl["step1"] = pageStepUrl["step1"].replace(storeState.offerCode,"");
  //	pageStepUrl["step2"] = pageStepUrl["step2"].replace(storeState.offerCode,"");
  //	pageStepUrl["step3"] = pageStepUrl["step3"].replace(storeState.offerCode,"");
  f_setStoreState("guests", guests);
  //	f_setStoreState("pageStepUrl", pageStepUrl);
  //	f_setStoreState("offerCode", "");

  return true;
}

function f_resetAvailableOffers(data) {
  var storeState = f_getSessionStorage();
  var offerSelected = [];
  var offer = storeState.availableOffers.filter(function (offer) {
    return offer.code === f_getOfferCodeFromURL("offerCode");
  })[0];
  for (var i = 0; i < data.data.reservationDetails.length; i++) {
    var room = data.data.reservationDetails[i];
    var roomCode = room.roomCode;
    for (var j = 0; j < offer.rooms.length; j++) {
      if (
        offer.rooms[j].roomCode === roomCode &&
        !room.latestAveragePriceByCurrency === false
      ) {
        offer.rooms[j].averagePriceByCurrency =
          room.latestAveragePriceByCurrency;
        offer.rooms[j].discountedAveragePriceByCurrency =
          room.latestDiscountedAveragePriceByCurrency;
        offer.rooms[j].nightlyPrices = room.latestNightlyPrices;
        offer.rooms[j].taxesAndServiceChargesByCurrency =
          room.latestTaxesAndServiceChargesByCurrency;
      }
    }
  }
  var _ticketPriceArr = [];
  if (
    data.data.reservationDetails[0].latestAddonPrices[
      storeState.ticketAddon.addOnId
    ].price
  ) {
    for (var _key in data.data.reservationDetails[0].latestAddonPrices[
      storeState.ticketAddon.addOnId
    ].price) {
      _ticketPriceArr.push({
        currencyCode: _key,
        price:
          data.data.reservationDetails[0].latestAddonPrices[
            storeState.ticketAddon.addOnId
          ].price[_key],
      });
    }
  }
  if (_ticketPriceArr.length) {
    storeState.ticketAddon.priceArr = _ticketPriceArr;
  }
  offerSelected.push(offer);
  f_setStoreState("availableOffers", offerSelected);
  f_setStoreState("ticketAddon", storeState.ticketAddon);
  f_BE_resetPrice(data.ttCode);
}
function f_BE_resetPrice(errorNum) {
  var storeState = f_getSessionStorage();
  var array = [];
  var chargeTips = 0;
  var taxTotalPrice = 0;
  var totalSGDOfferPrice = 0;
  var totalSGDTaxPrice = 0;
  var currencyPrice = 0;
  var symbol = storeState.symbol;
  var SGD_symbol = storeState.propertyInfo.supportedCurrencies.filter(function (
    symbol
  ) {
    return symbol.code === "SGD";
  })[0].symbol;
  var currencyPerRoomPrice = [];
  var selectedOffer = storeState.availableOffers.filter(function (offer) {
    return offer.code === f_getOfferCodeFromURL("offerCode");
  })[0];
  for (var i = 0; i < storeState.guests.length; i++) {
    var offerTotalPrice = 0;
    var SGD_total = 0;
    var taxPrice = 0;
    for (var j = 0; j < storeState.los; j++) {
      if (
        selectedOffer.rooms[i].nightlyPrices[j].discountedPriceByCurrency
          .length > 0
      ) {
        offerTotalPrice += f_doFixed(
          Number(
            selectedOffer.rooms[i].nightlyPrices[
              j
            ].discountedPriceByCurrency.filter(function (price) {
              return price.currencyCode === storeState.currency;
            })[0].price
          )
        );
      } else {
        offerTotalPrice += f_doFixed(
          Number(
            selectedOffer.rooms[i].nightlyPrices[j].priceByCurrency.filter(
              function (price) {
                return price.currencyCode === storeState.currency;
              }
            )[0].price
          )
        );
      }
      if (
        selectedOffer.rooms[i].nightlyPrices[j].discountedPriceByCurrency
          .length > 0
      ) {
        totalSGDOfferPrice += f_doFixed(
          Number(
            selectedOffer.rooms[i].nightlyPrices[
              j
            ].discountedPriceByCurrency.filter(function (price) {
              return price.currencyCode === "SGD";
            })[0].price
          ),
          true
        );
      } else {
        totalSGDOfferPrice += f_doFixed(
          Number(
            selectedOffer.rooms[i].nightlyPrices[j].priceByCurrency.filter(
              function (price) {
                return price.currencyCode === "SGD";
              }
            )[0].price
          ),
          true
        );
      }
    }
    currencyPerRoomPrice.push(offerTotalPrice);
    //判断ticket addon
    if (storeState.ticketAddon) {
      var _ticketAddonPrice = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
        storeState.ticketAddon.priceArr
      );
      offerTotalPrice +=
        f_doFixed(_ticketAddonPrice.guestCurrencyUnitPrice) *
        storeState.ticketAddon.countData[i];
      totalSGDOfferPrice +=
        f_doFixed(_ticketAddonPrice.unitPrice) *
        storeState.ticketAddon.countData[i];
    }
    taxPrice = f_doFixed(
      Number(
        selectedOffer.rooms[i].taxesAndServiceChargesByCurrency.filter(
          function (price) {
            return price.currencyCode === storeState.currency;
          }
        )[0].price
      )
    );
    totalSGDTaxPrice += f_doFixed(
      Number(
        selectedOffer.rooms[i].taxesAndServiceChargesByCurrency.filter(
          function (price) {
            return price.currencyCode === "SGD";
          }
        )[0].price
      ),
      true
    );
    taxTotalPrice += taxPrice;

    $("#room_info")
      .find(".offertotal")
      .eq(i)
      .text(
        symbol +
          f_isInt(
            f_doFixed(offerTotalPrice) + (storeState.ticketAddon ? taxPrice : 0)
          )
      );

    chargeTips += Number(offerTotalPrice) + Number(taxPrice);
    if (
      !selectedOffer.rooms[i].discountedAveragePriceByCurrency === false &&
      selectedOffer.rooms[i].discountedAveragePriceByCurrency.length != 0
    ) {
      currencyPrice = Number(
        selectedOffer.rooms[i].discountedAveragePriceByCurrency.filter(
          function (price) {
            return price.currencyCode === storeState.currency;
          }
        )[0].price
      );
    } else {
      currencyPrice = Number(
        selectedOffer.rooms[i].averagePriceByCurrency.filter(function (price) {
          return price.currencyCode === storeState.currency;
        })[0].price
      );
    }
    array.push(f_availableUpgrade(currencyPrice, i));
  }
  var offerTotal = new Object();
  offerTotal.tax = taxTotalPrice.toFixed(2);
  offerTotal.total = chargeTips.toFixed(2);
  offerTotal.taxSGD = totalSGDTaxPrice.toFixed(2);
  offerTotal.totalSGD = (totalSGDOfferPrice + totalSGDTaxPrice).toFixed(2);
  offerTotal.currencyPerRoomPrice = currencyPerRoomPrice;
  f_setStoreState("offerTotalPrice", offerTotal);

  var elem = $("#room_info");
  elem.find(".taxtotal").text(symbol + f_isInt(f_doFixed(taxTotalPrice)));
  elem.find(".offerstotal span").text(symbol + f_isInt(f_doFixed(chargeTips)));

  if (!errorNum === false) {
    var bodyContent = "error_code_" + errorNum;
    var errcode = bookingEngine_global_data.global.errorArea;
    // var message = errcode[bodyContent].format('1',SGD_symbol,'3',$("#payment_block .chargeTipsSGD").text().replace(SGD_symbol,""),'1',SGD_symbol,'4',f_isInt((totalSGDOfferPrice + totalSGDTaxPrice).toFixed(2)));
    var message = errcode[bodyContent].format(
      "currency",
      symbol,
      "originalAmount",
      $("#payment_block .chargeTips").text().replace(symbol, ""),
      "currency",
      symbol,
      "updatedAmount",
      f_isInt(f_doFixed(chargeTips))
    );
    if (storeState.currency != "SGD") {
      $(".SGDTxt").text(
        SGD_symbol + f_isInt(totalSGDOfferPrice + totalSGDTaxPrice, true)
      );
      $("#payment_block .chargeTips").text(
        symbol + f_isInt(f_doFixed(chargeTips))
      );
      $("#payment_block .chargeTips").show();
    } else {
      $("#payment_block .chargeTips").text(
        SGD_symbol + f_isInt(totalSGDOfferPrice + totalSGDTaxPrice, true)
      );
    }
    $("#payment_block .chargeTipsSGD").text(
      SGD_symbol + f_isInt(totalSGDOfferPrice + totalSGDTaxPrice, true)
    );
    f_shwo_pop_Bummer(
      message,
      paymentMethod_content_data.proceedButtonLabel,
      function () {
        payCheck();
      }
    );

    $.ajaxSettings.async = false;
    f_fetch(
      url_availableUpgrade,
      function (data) {
        var isEmpty = true;
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i] === null) {
          } else {
            isEmpty = false;
          }
        }
        if (isEmpty) {
        } else {
          var upgradeRooms = data.data;
          f_resetUpgradeBox(upgradeRooms, false);
        }
      },
      function () {},
      array
    );
    $.ajaxSettings.async = true;
  } else {
    var elem = $("#room_info");
    elem
      .find(".SGDTxt")
      .text(SGD_symbol + f_isInt(totalSGDOfferPrice + totalSGDTaxPrice, true));
    $("#payment_block .chargeTips").text(
      symbol + f_isInt(f_doFixed(chargeTips))
    );

    if (storeState.currency === "SGD") {
      $("#payment_block .chargeTipsSGD,.SGDTxt").hide();
    } else {
      $("#payment_block .chargeTipsSGD,.SGDTxt").show();
    }

    var upgradeRooms = storeState.upgradeRooms;
    for (var k = 0; k < upgradeRooms.length; k++) {
      if (!upgradeRooms[k] === false) {
        var upgradeList = upgradeRooms[k];
        var upgradeListIndex = $("#upgrade_dialog")
          .find(".upgradeBlockSelected")
          .attr("data-index");
        var costOfUpgradePrice;
        var costOfUpgradePriceOriginal = upgradeList[0].costOfUpgrade.filter(
          function (price) {
            return price.currencyCode === storeState.currency;
          }
        )[0].price;
        if (upgradeListIndex != undefined) {
          var _costOfUpgrade = upgradeList[
            upgradeListIndex
          ].costOfUpgrade.filter(function (price) {
            return price.currencyCode === storeState.currency;
          })[0].price;
          if (storeState.ticketAddon) {
            _costOfUpgrade = _costOfUpgrade * 1.177;
          }
          if (
            $(".resend").length > 0 &&
            $(".resend" + k).length > 0 &&
            upgradeList[upgradeListIndex].discountedAveragePrice.length > 0
          ) {
            costOfUpgradePrice =
              f_doFixed(
                selectedOffer.rooms[k].discountedAveragePriceByCurrency.filter(
                  function (price) {
                    return price.currencyCode === storeState.currency;
                  }
                )[0].price
              ) -
              f_doFixed(
                upgradeList[upgradeListIndex].discountedAveragePrice.filter(
                  function (price) {
                    return price.currencyCode === storeState.currency;
                  }
                )[0].price
              ) +
              f_doFixed(_costOfUpgrade);
          } else if (
            $(".resend").length > 0 &&
            $(".resend" + k).length > 0 &&
            upgradeList[upgradeListIndex].averagePrice.length > 0
          ) {
            costOfUpgradePrice =
              f_doFixed(
                selectedOffer.rooms[k].averagePriceByCurrency.filter(function (
                  price
                ) {
                  return price.currencyCode === storeState.currency;
                })[0].price
              ) -
              f_doFixed(
                upgradeList[upgradeListIndex].averagePrice.filter(function (
                  price
                ) {
                  return price.currencyCode === storeState.currency;
                })[0].price
              ) +
              f_doFixed(_costOfUpgrade);
          } else {
            costOfUpgradePrice = _costOfUpgrade;
          }
        } else {
          costOfUpgradePrice = costOfUpgradePriceOriginal;
        }
        var elem1 = $("#upgradeList");
        if (storeState.ticketAddon) {
          costOfUpgradePriceOriginal = costOfUpgradePriceOriginal * 1.177;
        }
        var _upgradeDescription = storeState.ticketAddon
          ? upgradeView_content_data.upgradeDescriptionIncludeTax ||
            upgradeView_content_data.upgradeDescription
          : upgradeView_content_data.upgradeDescription;
        elem1
          .find(".no_upgrade" + k + ">p")
          .html(
            _upgradeDescription.format(
              "upgradeCost",
              symbol + f_isInt(f_doFixed(costOfUpgradePriceOriginal))
            )
          );
        elem1
          .find(".upgradeItem" + k + " .upgradedPrice")
          .html(
            symbol + f_isInt(f_doFixed(costOfUpgradePrice) * storeState.los)
          );
      }
    }
  }
}

function f_isOnScreen(obj) {
  var a = $(window).height();
  var b = $(obj).offset().top;
  var c = $(document).scrollTop();
  var d = $(obj).height();
  var elem = $("#room_info");
  if (a - d - (b - c) < 0) {
    $(obj).addClass("tips_static_down");
    $(obj).removeClass("tips_static");
    elem
      .find(".tips_static_down")
      .css(
        "cssText",
        "bottom:40px !important;top:auto;" +
          "left:" +
          Number(
            $(".toolTips").closest(".font_12").width() -
              $(".toolTips").width() / 2 -
              $(".tips").width() / 2
          ) +
          "px !important"
      );
  } else if (a - d - (b - c) > d) {
    $(obj).addClass("tips_static");
    $(obj).removeClass("tips_static_down");
    elem
      .find(".tips_static")
      .css(
        "cssText",
        "bottom:auto;left:" +
          Number(
            $(".toolTips").closest(".font_12").width() -
              $(".toolTips").width() / 2 -
              $(".tips").width() / 2
          ) +
          "px !important;top:" +
          ($(".toolTips").height() + 8) +
          "px"
      );
  }

  if (
    $(obj).width() +
      elem.find(".toolTips").closest(".font_12").width() -
      elem.find(".toolTips").width() / 2 -
      elem.find(".tips").width() / 2 +
      35 >
    $(window).width()
  ) {
    var cssText =
      $(obj).attr("style") +
      ";width:" +
      Number(elem.find(".toolTips").closest(".font_12").width() * 0.8) +
      "px !important;left:" +
      Number(
        $(".toolTips").closest(".font_12").width() -
          elem.find(".toolTips").width() / 2 -
          Number(elem.find(".toolTips").closest(".font_12").width() * 0.8) / 2
      ) +
      "px !important";
    $(obj).css("cssText", cssText);
    $(obj).find(".arrow").css("left", "70%");
  }
}

function titleCase(str) {
  str = str[0].toUpperCase() + str.substring(1, str.length).toLowerCase();
  return str;
}

function f_resetUpgradeBox(upgradeRooms, isCorrect) {
  var index;
  var insertHtml = "";
  var storeState = f_getSessionStorage();
  var symbol = storeState.propertyInfo.supportedCurrencies.filter(function (
    symbol
  ) {
    return symbol.code === storeState.currency;
  })[0].symbol;
  var _currnOffer = f_get_current_offer_data();
  var _upgradeDescription = storeState.ticketAddon
    ? upgradeView_content_data.upgradeDescriptionIncludeTax ||
      upgradeView_content_data.upgradeDescription
    : upgradeView_content_data.upgradeDescription;
  if (isCorrect !== false) {
    index = isCorrect;
    var upgradeRoomsNew = storeState.upgradeRooms;
    upgradeRoomsNew[index] = upgradeRooms;
    f_setStoreState("upgradeRooms", upgradeRoomsNew);
    var elem = $("#upgradeList");
    if (!upgradeRooms === false) {
      //new Upgrade
      var upgradeList = upgradeRooms;
      var costOfUpgradePrice = upgradeList[0].upgradePriceByDefaultCurrency;
      if (storeState.ticketAddon) {
        costOfUpgradePrice = costOfUpgradePrice * 1.177;
      }
      /*					if(upgradeRoomsNew.length > 1){
             insertHtml += "<div class='row'><p class='col-sm-4 p0-15 f_700 card_title'>"+bookingEngine_global_data.global.bodyArea.allUpperRoom +" "+(index+1) +"</p></div>"
           };*/
      insertHtml +=
        "<div class='row upgradeView upgradeItem" +
        index +
        "'>" +
        "<label class='col-sm-4 p0-15 f_700 card_title'> " +
        upgradeView_content_data.upgradeYourViewLabel +
        "</label>" +
        "<div class='row col-sm-8 p0-15 payLabel payment-icons flex-column flex-row no_upgrade no_upgrade" +
        index +
        "' data-item='" +
        index +
        "'>" +
        "<p class='txt-lg-lr txt-black-three ls-x-sm mt_0'>" +
        _upgradeDescription.format(
          "upgradeCost",
          symbol + f_isInt(f_doFixed(costOfUpgradePrice))
        ) +
        "</p>" +
        "<div class='txt_l'><button class='upgrade_view' index=" +
        index +
        ">" +
        upgradeView_content_data.upgradeButtonLabel +
        " </button></div>" +
        "</div>" +
        "<div class='row col-sm-8 p0-15 payLabel payment-icons flex-column flex-row upgraded upgraded" +
        index +
        "' data-item='" +
        index +
        "'>" +
        "<p class='txt-lg-lr txt-black-three ls-x-sm mt_0 undo_title'>" +
        "</p>" +
        "<p class='txt-lg-lr txt-black-three ls-x-sm mt_0'>" +
        upgradeView_content_data.dialogTotalCostDescription +
        "<b class='upgradedPrice'>" +
        symbol +
        f_isInt(f_doFixed(costOfUpgradePrice * storeState.los)) +
        "</b></p>" +
        "<small>" +
        upgradeView_content_data.preferencesResetDescription +
        "</small>" +
        "<div class='txt_l'><button class='undo_upgrade' onclick='f_undoUpgrade(this)'>" +
        upgradeView_content_data.undoUpgradeVar +
        " </button></div>" +
        "</div>" +
        "</div>";
      elem.find(".upgradeItem" + index).replaceWith(insertHtml);
    } else {
      if (
        elem
          .find(".upgradeItem" + index)
          .prev()
          .hasClass("upgradeNum")
      ) {
        elem
          .find(".upgradeItem" + index)
          .prev()
          .remove();
        elem.find(".upgradeItem" + index).remove();
      } else {
        elem.find(".upgradeItem" + index).remove();
      }

      if (elem.find(".upgradeView").length == 0) {
        $("#UpgradeBox").hide();
      }
    }
  } else {
    $("#UpgradeBox").show();
    f_setStoreState("upgradeRooms", upgradeRooms);
    for (var i = 0; i < upgradeRooms.length; i++) {
      if (!upgradeRooms[i] === false) {
        //new Upgrade
        var upgradeList = upgradeRooms[i];
        var costOfUpgradePrice = upgradeList[0].upgradePriceByDefaultCurrency;
        if (storeState.ticketAddon) {
          costOfUpgradePrice = costOfUpgradePrice * 1.177;
        }
        if (upgradeRooms.length > 1) {
          insertHtml +=
            "<div class='row upgradeNum'><p class='col-sm-4 p0-15 f_700 card_title'>" +
            bookingEngine_global_data.global.bodyArea.allUpperRoom +
            " " +
            (i + 1) +
            "</p></div>";
        }
        insertHtml +=
          "<div class='row upgradeView upgradeItem" +
          i +
          "'>" +
          "<label class='col-sm-4 p0-15 f_700 card_title'> " +
          upgradeView_content_data.upgradeYourViewLabel +
          "</label>" +
          "<div class='row col-sm-8 p0-15 payLabel payment-icons flex-column flex-row no_upgrade no_upgrade" +
          i +
          "' data-item='" +
          i +
          "'>" +
          "<p class='txt-lg-lr txt-black-three ls-x-sm mt_0'>" +
          _upgradeDescription.format(
            "upgradeCost",
            symbol + f_isInt(f_doFixed(costOfUpgradePrice))
          ) +
          "</p>" +
          "<div class='txt_l'><button class='upgrade_view' index=" +
          i +
          ">" +
          upgradeView_content_data.upgradeButtonLabel +
          " </button></div>" +
          "</div>" +
          "<div class='row col-sm-8 p0-15 payLabel payment-icons flex-column flex-row upgraded upgraded" +
          i +
          "' data-item='" +
          i +
          "'>" +
          "<p class='txt-lg-lr txt-black-three ls-x-sm mt_0 undo_title'>" +
          "</p>" +
          "<p class='txt-lg-lr txt-black-three ls-x-sm mt_0'>" +
          upgradeView_content_data.dialogTotalCostDescription +
          "<b class='upgradedPrice'>" +
          symbol +
          f_isInt(f_doFixed(costOfUpgradePrice * storeState.los)) +
          "</b></p>" +
          "<small>" +
          upgradeView_content_data.preferencesResetDescription +
          "</small>" +
          "<div class='txt_l'><button class='undo_upgrade' onclick='f_undoUpgrade(this)'>" +
          upgradeView_content_data.undoUpgradeVar +
          " </button></div>" +
          "</div>" +
          "</div>";
      }
    }
    $("#upgradeList").html(insertHtml);
  }
}

function checkIshanzi(s) {
  var patrn = /[^\u0000-\u007f]/;
  if (!patrn.exec(s)) return false;
  return true;
}

function replaceString(str, replaceWord, toWord) {
  eval("var reg=/" + replaceWord + "/g;");
  if (str === "Guinea-Bissau") {
    return str;
  }
  return str.replace(reg, toWord);
}

function upgradeBlockUpdate(index, isShowLightBox) {
  var insertHtml = "";
  var array = [];
  var storeState = f_getSessionStorage();

  var selectedOffer = storeState.availableOffers.filter(function (offer) {
    return offer.code === f_getOfferCodeFromURL("offerCode");
  })[0];

  if (
    selectedOffer.rooms[index].discountedAveragePriceByCurrency != null &&
    selectedOffer.rooms[index].discountedAveragePriceByCurrency.length != 0
  ) {
    currencyPrice = Number(
      selectedOffer.rooms[index].discountedAveragePriceByCurrency.filter(
        function (price) {
          return price.currencyCode === storeState.currency;
        }
      )[0].price
    );
  } else {
    currencyPrice = Number(
      selectedOffer.rooms[index].averagePriceByCurrency.filter(function (
        price
      ) {
        return price.currencyCode === storeState.currency;
      })[0].price
    );
  }
  array.push(f_availableUpgrade(currencyPrice, index));

  $.ajaxSettings.async = false;
  f_fetch(
    url_availableUpgrade,
    function (data) {
      var isEmpty = true;
      for (var i = 0; i < data.data.length; i++) {
        if (data.data[i] === null) {
          var errcode = bookingEngine_global_data.global.errorArea;
          var errmsg = errcode["error_code_5003"];
          f_shwo_pop_Bummer(errmsg);
          var elem = $("#upgradeList");
          if (
            elem
              .find(".upgradeItem" + index)
              .prev()
              .hasClass("upgradeNum")
          ) {
            elem
              .find(".upgradeItem" + index)
              .prev()
              .remove();
            elem.find(".upgradeItem" + index).remove();
          } else {
            elem.find(".upgradeItem" + index).remove();
          }
          if (elem.find(".upgradeView").length === 0) {
            $("#UpgradeBox").hide();
          }
          loading_hide();
        } else {
          isEmpty = false;
        }
      }
      if (isEmpty) {
      } else {
        var upgradeRooms = data.data[0];
        f_resetUpgradeBox(upgradeRooms, index);
        var storeState = f_getSessionStorage();
        //New Upgrade
        for (var i = 0; i < storeState.upgradeRooms[index].length; i++) {
          var upgradeBlock = storeState.upgradeRooms[index][i];
          var _costOfUpgrade = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
            upgradeBlock.costOfUpgrade
          ).guestCurrencyUnitPrice;
          if (storeState.ticketAddon) {
            _costOfUpgrade = _costOfUpgrade * 1.177;
          }
          var costOfUpgradePricePerNight = f_isInt(f_doFixed(_costOfUpgrade));
          var totalUpgradeCost = Number(
            costOfUpgradePricePerNight * storeState.los
          );
          var roomCode = upgradeBlock.roomCode;
          var room = storeState.allRoomList.filter(function (room) {
            return room.code.indexOf(roomCode) > -1;
          })[0];
          var roomTotalName = "";
          var roomImgSrc = room.largeImageUrl;
          var guestNumber = room.occupancyDescription;
          var roomsBookedNumber;
          var roomsBooked = "";
          if (
            !storeState.roomsBooked.filter(function (room) {
              return room.roomCode === roomCode;
            })[0] === false
          ) {
            roomsBookedNumber = storeState.roomsBooked.filter(function (room) {
              return room.roomCode === roomCode;
            })[0].totalBooked;
            roomsBooked =
              bookingEngine_global_data.global.bodyArea.bookedDescription.format(
                "roomCount",
                roomsBookedNumber,
                "hour",
                24
              );
          }
          for (var k = 0; k < bookingEngine_global_data.roomList.length; k++) {
            if (bookingEngine_global_data.roomList[k].primaryArea) {
              for (var l in bookingEngine_global_data.roomList[k].primaryArea) {
                if (l == roomCode) {
                  roomTotalName =
                    bookingEngine_global_data.roomList[k].primaryArea.roomType
                      .value +
                    " - " +
                    bookingEngine_global_data.roomList[k].primaryArea.roomView
                      .value;
                }
              }
            }
          }
          var roomFeaturesList = "";
          var maxAmenitiesShown = storeState.propertyInfo.maxAmenitiesShown - 1;
          for (var m = 0; m < room.amenities.length; m++) {
            if (m > maxAmenitiesShown) {
              break;
            }
            roomFeaturesList +=
              "<li><div class='lh-24'><img src='" +
              room.amenities[m].thumbnailImageUrl +
              "'><span>" +
              room.amenities[m].name +
              "</span></div></li>";
          }
          insertHtml +=
            "<div class='row upgradeBlock' data-index='" +
            i +
            "' data-room='" +
            index +
            "'><div class='col-md-9 p10 row'><div class='imgPanel'><label class='imgPanelLabel mbs-radio-primary'><input type='radio' class='form-check-input ng-untouched ng-pristine'><span class='radio'></span><img src='" +
            roomImgSrc +
            "'></label></div><div class='roomInfoPanel'><div class='roomName lh-24'>" +
            roomTotalName +
            "</div><div class='roomsBooked lh-24'>" +
            roomsBooked +
            "<p><span></span></p></div><div class='guestNumber'><p class='lh-24'>" +
            guestNumber +
            "</p></div><div class='amenities'><ul>" +
            roomFeaturesList +
            "</ul></div>";
          if (!upgradeBlock.isBaseRoom) {
            insertHtml += "<div class='roomBookingUpdates'></div>";
          }
          insertHtml +=
            "</div></div><div class='col-md-3 p10'><span>+" +
            storeState.symbol +
            costOfUpgradePricePerNight +
            "</span><span>/" +
            bookingEngine_global_data.global.bodyArea.allLowerNIght +
            "</span></div></div>";
        }
        var elem1 = $("#upgrade_dialog");
        elem1.find(".upgradeListDiv").html(insertHtml);
        elem1
          .find(".roomBookingUpdates")
          .html(
            bookingEngine_global_data.global.bodyArea.notBaseRoomDescription
          );
        elem1.find(".upgradeBlock").eq(0).addClass("upgradeBlockSelected");
        elem1
          .find(".upgradeBlock")
          .eq(0)
          .find(".imgPanelLabel input[type='radio']")
          .prop("checked", true);
        elem1
          .find(".selectedRoomName")
          .text(elem1.find(".upgradeBlockSelected .roomName ").text());
        elem1
          .find(".upgradeCostNum")
          .text(
            elem1
              .find(".upgradeBlockSelected .col-md-3")
              .find("span")
              .eq(0)
              .text() +
              "/" +
              bookingEngine_global_data.global.bodyArea.allLowerNIght
          );
        elem1
          .find(".currentRoomName")
          .text(storeState.guests[index].selectedRoom.roomName);
        if (storeState.los < 2) {
          elem1
            .find(".upgrade_rcontent_items span")
            .eq(0)
            .text(
              upgradeView_content_data.dialogUpdatedPriceNightDescription.format(
                "nightNumber",
                storeState.los
              )
            );
        } else {
          elem1
            .find(".upgrade_rcontent_items span")
            .eq(0)
            .text(
              upgradeView_content_data.dialogUpdatedPriceNightsDescription.format(
                "nightNumber",
                storeState.los
              )
            );
        }
        var offerChangingPrice = storeState.upgradeRooms[index][
          Number($(".upgradeBlockSelected").attr("data-index"))
        ].totalPrice.filter(function (price) {
          return price.currencyCode === storeState.currency;
        })[0].price;
        if (storeState.ticketAddon) {
          var _changeTotaltax = f_doFixed(offerChangingPrice * 0.177);
          var _tickeTotalPrice =
            f_doFixed(
              f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
                storeState.ticketAddon.priceArr
              ).guestCurrencyUnitPrice
            ) * storeState.ticketAddon.countData[index];
          offerChangingPrice += f_math_operation(
            _changeTotaltax + _tickeTotalPrice
          );
        }
        elem1
          .find(".upgrade_rcontent_items span")
          .eq(1)
          .find("b")
          .text(storeState.symbol + f_isInt(f_doFixed(offerChangingPrice)));
        if (isShowLightBox) {
          $("body").css("overflow-y", "hidden");
          $("#modal_backdrop").fadeIn(100, function () {
            $("#upgrade_dialog").slideDown(0, function () {
              $("#upgrade_dialog .dialog_contentainer ").addClass("fadeShow");
            });
          });
        }
        loading_hide();
      }
    },
    function () {},
    array,
    true
  );
  $.ajaxSettings.async = true;
}

function currencyDropdown() {
  $(
    "#guest_card .preferencesDropDown .dropdown-up,#guest_card .occasionDropDown .dropdown-up"
  ).addClass("dropdown-down");
  $(
    "#guest_card .preferencesDropDown .dropdown-up,#guest_card .occasionDropDown .dropdown-up"
  ).removeClass("dropdown-up");
  $(
    "#main_container .dropdown_select_salutation,#guest_card .timeSelectLi,#guest_card .roomPreferences,#guest_card .occasionList"
  ).hide();
  $(
    "#guest_card .time_dropdown_selected,#guest_card .positionR.plr0 .dropdown_selected"
  ).removeClass("open");
  $("#PaymentMethodDiv .currency_dropdown input").focus();
}

function displayResult() {
  var elem = $("#PaymentMethodDiv");
  elem.find(".currency_dropdown span").text("");
  var search_input = elem.find(".currency_dropdown input");
  var search_content = elem.find(".currency_dropdown ul");
  for (var k = 0; k < $(".currency_dropdown li").length; k++) {
    if (
      elem
        .find(".currency_dropdown li")
        .eq(k)
        .text()
        .toLowerCase()
        .indexOf(search_input.val().toLowerCase()) >= 0
    ) {
      elem.find(".currency_dropdown li").eq(k).show();
    } else {
      elem.find(".currency_dropdown li").eq(k).hide();
    }
  }
  $(search_content).show();
  elem.find(".currency_dropdown .dropdown_selected").addClass("open");
  if (elem.find(".currency_dropdown li:visible").length == 0) {
    bookingEngine_global_data.global.bodyArea.noInput;
    elem.find(".currencyInputNone").show();
  } else {
    elem.find(".currencyInputNone").hide();
  }
}

function setCurrencyInput(index) {
  var elem = $("#PaymentMethodDiv");
  var _this = elem.find(".cardSelect .payCurrency li").eq(index);
  elem.find(".cardSelect .payCurrency li").removeClass("d_none_impor");
  _this.addClass("d_none_impor");
  var selected = elem.find(".cardSelect .payCurrency .dropdown_selected");
  var cyrrencyCode = _this.attr("data-type");
  selected.text(cyrrencyCode);
  f_setStoreState("currency", cyrrencyCode);
  f_setStoreState("symbol", _this.attr("data-symbol"));
  f_BE_resetPrice();
  selected.removeClass("open");
  $("#main_container .dropdown_select_salutation").hide();
  var storeState = f_getSessionStorage();
  if (storeState.currency != "SGD") {
    $("#room_info .SGDTxt").show();
  } else {
    $("#room_info .SGDTxt").hide();
  }
}

//获取光标位置
function getCursortPosition(textDom) {
  var cursorPos = 0;
  if (document.selection) {
    // IE Support
    textDom.focus();
    var selectRange = document.selection.createRange();
    selectRange.moveStart("character", -textDom.value.length);
    cursorPos = selectRange.text.length;
  } else if (textDom.setSelectionRange) {
    // webkit support
    textDom.focus();
    cursorPos = textDom.selectionStart;
  }
  return cursorPos;
}
// 设置光标位置
function setCaretPosition(textDom, pos) {
  if (textDom.setSelectionRange) {
    textDom.focus();
    textDom.setSelectionRange(pos, pos);
  } else if (textDom.createTextRange) {
    // IE Support
    var range = textDom.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

function f_checkExpirationDate(isCheck) {
  var elem = $("#CUPCard");
  var expMon = elem.find(".expMon").text();
  var expYear = elem.find(".expYear").text();
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (!isCheck == false) {
    if (expMon.trim() == "MM" || expYear.trim() == "YYYY") {
      elem.find(".expirationDate .error_msg").show();
    }
  } else if (expYear <= year && expMon <= month) {
    elem.find(".expirationDate .error_msg").show();
  } else {
    elem.find(".expirationDate .error_msg").hide();
  }
}

function f_storeInfoToSession(data) {
  //data comes from the mobile app data
  var elem = $("#guest_card"),
    isCountryMatch = false,
    matchCountry = "",
    matchTitle = "";
  if (data) {
    data = JSON.parse(data);
    var storeState = f_getSessionStorage();
    //Country Name Match
    storeState.countriesList.forEach((item) => {
      if (item.country.toLowerCase() == data.countryName.toLowerCase()) {
        isCountryMatch = true;
        matchCountry = item.country;
      }
    });
    if (!matchCountry) {
      var matchList = {
          Anguilla: "ANGUILLA - ST",
          "Bosnia-and-Herzegovina": "BOSNIA",
          "British-Indian-Ocean-Territory": "BRITISH INDIAN",
          "British-Virgin-Islands": "BRITISH VIRGIN",
          "Cocos-Islands": "COCOS (KEELING) ISLANDS",
          Comoros: "COMOROS ISLAND",
          "Democratic-Republic-of-the-Congo": "CONGO, DEMOCRATIC REP",
          "Republic-of-the-Congo": "CONGO, PEOPLE'S REPUBLIC",
          "Dominican-Republic": "DOMINICAN REBUBLIC",
          "Faroe-Islands": "FAEROE ISLANDS",
          "Falkland-Islands": "FALKLAND ISLAND",
          Fiji: "FIJI ISLANDS",
          "French-Polynesia": "FRENCH POLYNESI",
          "Guinea-Bissau": "GUINEA BISSAU",
          "Hong-Kong": "HONG KONG S.A.R.",
          "North-Korea": "KOREA, DEMOCRATIC",
          "South-Korea": "KOREA, REPUBLIC",
          Macau: "MACAU S.A.R.",
          "Marshall-Islands": "MARSHALL ISLAND",
          Palestine: "PALESTINIAN TERRITORY",
          Pitcairn: "PITCAIRN ISLAND",
          Reunion: "REUNION ISLAND",
          "Saint-Kitts-and-Nevis": "SAINT KITTS",
          "Saint-Martin": "SAINT MARTIN (FRENCH PART)",
          Samoa: "SAMOA INDEP STATE",
          "Sao-Tome-and-Principe": "SAO TOME AND PR",
          Seychelles: "SEYCHELLES ISLAND",
          "Sint-Maarten": "SINT MAARTEN (DUTCH PART)",
          "Saint-Pierre-and-Miquelon": "ST. PIERRE ET M",
          "Saint-Vincent-and-the-Grenadines": "ST. VINCENT - T",
          "Svalbard-and-Jan-Mayen": "SVALBARD & JAN",
          "Trinidad-and-Tobago": "TRINIDAD",
          "Turks-and-Caicos-Islands": "TURKS AND CAICO",
          "U.S.-Virgin-Islands": "US VIRGIN ISLANDS",
          Vatican: "VATICAN CITY",
          "U.S.-Virgin-Islands": "VIRGIN ISLANDS",
          "Wallis-and-Futuna": "WALLIS AND FUTURE",
        },
        specialCountryNameMatch = false;
      for (item in matchList) {
        if (matchList[item] == data.countryName && !specialCountryNameMatch) {
          specialCountryNameMatch = true;
          matchCountry = item;
          isCountryMatch = true;
        }
      }
    }
    //Title Match
    if (
      data.title.toLowerCase() == "MS".toLowerCase() ||
      data.title.toLowerCase() == "MS.".toLowerCase()
    ) {
      matchTitle = "Ms.";
    } else if (data.title.toLowerCase() == "DR".toLowerCase()) {
      matchTitle = "Dr.";
    } else if (data.title.toLowerCase() == "MRS".toLowerCase()) {
      matchTitle = "Mrs.";
    }
  }
  var firstNameVal = data ? data.firstName : $("#firstName").val();
  var lastNameVal = data ? data.lastName : $("#lastName").val();
  var salutationVal = data
    ? matchTitle == ""
      ? elem.find(".positionR.plr0 .dropdown_selected").text().trim()
      : matchTitle
    : elem.find(".positionR.plr0 .dropdown_selected").text().trim();
  var countryCodeVal = $("#country").attr("data-two");
  var countryNameVal =
    data && isCountryMatch
      ? matchCountry
      : elem.find(".country-select-content").text();
  var callingCodeVal = data
    ? data.countryCode
    : elem.find(".iti__selected-dial-code").text();
  var phoneNumberVal = data ? data.phoneNumber : $("#phone").val();
  var emailAddressVal = data ? data.emailAddress : $("#Email").val();
  var guestInfo = {
    firstName: firstNameVal,
    lastName: lastNameVal,
    phoneNumber: phoneNumberVal,
    emailAddress: emailAddressVal,
    countryCode: countryCodeVal,
    salutation: salutationVal,
    callingCode: callingCodeVal,
    countryName: countryNameVal,
  };
  f_setStoreState("guestInfo", guestInfo);
  if (!data) {
    var arrivalTime = [];
    for (var i = 0; i < $(".time_dropdown_selected").length; i++) {
      arrivalTime.push(elem.find(".time_dropdown_selected").eq(i).text());
    }
    f_setStoreState("arrivalTime", arrivalTime);
  }
}

function f_drawInfoFromSession() {
  var elem = $("#guest_card");
  var storeState = f_getSessionStorage();
  var guestInfo = storeState.guestInfo;
  if (!guestInfo == false) {
    $("#firstName").val(guestInfo.firstName);
    name_validate($("#firstName"));
    $("#lastName").val(guestInfo.lastName);
    name_validate($("#lastName"));
    elem.find(".positionR.plr0 .dropdown_selected").text(guestInfo.salutation);
    if (sessionStorage.getItem("patronProfile")) {
      f_setCountryNameAndCode(
        $("[data-english='" + guestInfo.countryName.split(" ").join("-") + "']")
      );
    } else {
      f_setCountryNameAndCode($("[data-two='" + guestInfo.countryCode + "']"));
    }
    $("#phone").val(guestInfo.phoneNumber);
    phone_validate($("#phone"));
    $("#Email").val(guestInfo.emailAddress);
    email_validate();
    /*for(var i = 0;i < $(".error_msg:not(.invalidate)").length;i++){
       if($(".error_msg:not(.invalidate)").eq(i).is(':visible')){
         $(".error_msg:not(.invalidate)").eq(i).closest("div").find("input").removeClass('error_line');
       }
     }*/
    for (var i = 0; i < $(".error_line").length; i++) {
      if (!$(".error_line").eq(i).next().next(".invalidate").is(":visible")) {
        $(".error_line").eq(i).addClass("remove");
      }
    }
    $(".error_line.remove").removeClass("error_line");
    $("input.remove").removeClass("remove");
    $(".error_msg:not(.invalidate)").hide();

    //if loyalty session storage data exist, then hide the phone country number code
    if (
      storeState.memberStatus &&
      JSON.parse(sessionStorage.getItem("patronProfile")).phoneNumber
    ) {
      $(".iti").closest(".col-sm-2").hide();
      $(".iti").closest(".col-sm-2").addClass("phoneHide");
      $(".iti")
        .closest(".col-sm-2")
        .next("div")
        .removeClass("col-sm-4")
        .addClass("col-sm-6");
    }
  } else {
    return false;
  }
}

function f_setCountryNameAndCode(obj) {
  var elem = $("#guest_card");
  elem.find(".countryList li").removeClass("countryListSelected");
  elem.find(".country-select-content").text($(obj).text());
  $("#country").attr("data-default", $(obj).text());
  $("#country").attr("data-three", $(obj).attr("data-three"));
  $("#country").attr("data-two", $(obj).attr("data-two"));
  $("#country").attr("data-english", $(obj).attr("data-english"));
  $(obj).addClass("countryListSelected");
  intl.setCountry("" + $(obj).attr("data-two"));
  elem.find(".countryList").hide();
}

//Reset Dropdown
function f_resetDropDown() {
  $(
    "#main_container .dropdown_select,#main_container .tips_static,#main_container .tips_static_down"
  ).hide();
  $("#main_container .dropdown-up").addClass("dropdown-down");
  $("#main_container .dropdown-up").removeClass("dropdown-up");
  $(
    "#main_container .dropdown_select_salutation,#guest_card .countryList,#guest_card .timeSelectLi,#guest_card .roomPreferences,#main_container .occasionList"
  ).hide();
  $(
    "#main_container .time_dropdown_selected,#main_container .currency_dropdown .dropdown_selected"
  ).removeClass("open");
  $("#main_container .dropdown_selected").removeClass("open");
  var elem = $("#CUPCard");
  elem.find(".cardInput .open").removeClass("open");
  elem.find(".expYear").next(".dropdown_select").hide();
  elem.find(".expMon").next(".dropdown_select").hide();
}

//Marketing Consent Status
function f_setMarketingConsent(marketingConsent) {
  if (marketingConsent == "YES") {
    f_setStoreState("marketingConsent", true);
  } else {
    f_setStoreState("marketingConsent", false);
  }
}

//Enter Payment Page Directly
function f_enterPageDirectly() {
  var _urlParameter = getRouterSearch();
  var storeState = f_getSessionStorage();
  if (isModeEdit && !storeState.guests && !_urlParameter.CheckinDate) {
    loading_hide();
    $("#UpgradeBox").show();
    $("#BEshowTicketBox").show();
  } else if (
    (storeState.guests && !storeState.guests[0].selectedRoom) ||
    (!_urlParameter.Rooms && !isModeEdit)
  ) {
    var errcode = bookingEngine_global_data.global.errorArea;
    f_setStoreState("curr_errmsg", {
      code: "error_code_3000",
      errmsg: errcode["error_code_3000"],
    });

    window.location.replace(
      (window.location.href =
        bookingEngine_global_data.global.pathArea.roomPath +
        ".html" +
        window.location.search)
    );
  } else if (!storeState.rooms && !storeState.availableOffers) {
    var guests = [];
    var all_adult_count = 0;
    var all_children_count = 0;
    var roomNum = getQueryVariable("Rooms");
    for (var i = 0; i < roomNum; i++) {
      try {
        var numberOfAdults = Number(getQueryVariable("Adults_" + (i + 1)));
        var numberOfChildren = Number(getQueryVariable("Children_" + (i + 1)));
        guests.push({
          children: numberOfChildren,
          adults: numberOfAdults,
          index: i + 1,
        });
        all_adult_count += parseInt(numberOfAdults);
        all_children_count += parseInt(numberOfChildren);
        var roomLos = getQueryVariable("LOS");
        var checkinDate = getQueryVariable("CheckinDate");
        var departureDate = moment(checkinDate)
          .add(roomLos, "d")
          .format("YYYY-MM-DD");
        //Pulling Guest Data to Sessionstorage by Using URL Parameters
        storeState.rooms = Number(getQueryVariable("Rooms"));
        storeState.offerCode = getQueryVariable("offerCode");
        storeState.checkindate = checkinDate;
        storeState.checkoutdate = departureDate;
        storeState.los = Number(roomLos);
        storeState.guests = guests;
        storeState.currency = getQueryVariable("Currency") || "SGD";
        storeState.adult_count = Number(all_adult_count);
        storeState.children_count = Number(all_children_count);
        storeState.curr_errmsg = null;
        sessionStorage.setItem("storeState", JSON.stringify(storeState));
        f_getRoomsAndOffer(i + 1);
      } catch (err) {
        var errcode = bookingEngine_global_data.global.errorArea;
        f_setStoreState("curr_errmsg", {
          code: "error_code_3000",
          errmsg: errcode["error_code_3000"],
        });
        window.location.replace(
          (window.location.href =
            bookingEngine_global_data.global.pathArea.roomPath +
            ".html" +
            window.location.search)
        );
      }
    }
  } else {
    f_paymentPageInit();
  }
}

//Accoring the URL Parameters to Get the Rooms and Offers Data
function f_getRoomsAndOffer(index) {
  var errcode = bookingEngine_global_data.global.errorArea;
  var storeState = f_getSessionStorage();
  var crr_guests = storeState.guests[index - 1];
  var numberOfAdults = crr_guests.adults;
  var numberOfChildren = crr_guests.children;
  var url =
    url_availableRooms +
    "arrivalDate=" +
    storeState.checkindate +
    "&departureDate=" +
    storeState.checkoutdate +
    "&numberOfAdults=" +
    numberOfAdults +
    "&numberOfChildren=" +
    numberOfChildren +
    "&offerCode=" +
    storeState.offerCode;
  f_fetch(
    url,
    function (data1) {
      var storeState = f_getSessionStorage();
      var dataRoom = data1.data.availableRooms;
      if (dataRoom.length === 0) {
        f_err_link_to_searchPage({
          code: "error_code_4000",
          errmsg: bookingEngine_global_data.global.errorArea.error_code_4000,
        });
        return;
      }
      if (index == storeState.guests.length) {
        f_fetch(url_roomsBooked, function (data2) {
          try {
            var dataRoomBooked = data2.data;
            f_setStoreState("roomsBooked", dataRoomBooked);
            for (var r = 0; r < dataRoomBooked.length; r++) {
              var room_data_insert = dataRoom.filter(function (d) {
                return d.code.indexOf(dataRoomBooked[r].roomCode) > -1;
              })[0];
              if (room_data_insert) {
                var totalBooked = 0;
                if (!room_data_insert.totalBooked) {
                  totalBooked = dataRoomBooked[r].totalBooked;
                } else {
                  totalBooked =
                    room_data_insert.totalBooked +
                    dataRoomBooked[r].totalBooked;
                }
                room_data_insert.totalBooked = totalBooked;
                room_data_insert.timeSpan = dataRoomBooked[r].timeSpan;
              }
            }
          } catch (err) {
            window.location.href =
              bookingEngine_global_data.global.pathArea.searchPath + ".html";
          }
        });
      }
      try {
        var match_data = f_match_content_roomsData(dataRoom);
        f_setStoreState("availableRooms", match_data);
        var storeState = f_getSessionStorage();
        var allRoomList = storeState.allRoomList || [];
        for (var ar = 0; ar < match_data.length; ar++) {
          if ($.inArray(match_data[ar], allRoomList) < 0) {
            allRoomList.push(match_data[ar]);
          }
        }
        // All Room Data to Sessionstorage
        f_setStoreState("allRoomList", allRoomList);

        var storeState = f_getSessionStorage();
        var roomNum = getQueryVariable("Rooms");
        var code = getQueryVariable("roomCode_" + index);
        var rooms = storeState.allRoomList.filter(function (i) {
          return i.code.indexOf(code) > -1;
        })[0];
        var bedTypeCode = getQueryVariable("bedTypeCode_" + index);
        var guests = storeState.guests;
        var selectedRoom = rooms.bedTypes.filter(function (b) {
          return b.bedTypeCode === bedTypeCode;
        })[0];
        selectedRoom.code = rooms.code;
        selectedRoom.roomType = rooms.roomType;
        selectedRoom.roomView = rooms.roomView;
        selectedRoom.roomName = rooms.roomType + " - " + rooms.roomView;
        selectedRoom.roomImg = rooms.largeImageUrl;
        guests[index - 1].selectedRoom = selectedRoom;
        f_setStoreState("guests", guests);
        if (roomNum == index) {
          f_getPropertyInfo(function (data) {
            f_setStoreState("supportCurrencies", data.supportedCurrencies);
            var storeState = f_getSessionStorage();
            var url =
              url_availableRateplans +
              "roomCode=" +
              f_spliceRoomCode() +
              "&arrivalDate=" +
              storeState.checkindate +
              "&departureDate=" +
              storeState.checkoutdate +
              "&roomOccupancy=" +
              f_spliceRoomOccupancy() +
              "&offerCode=" +
              storeState.offerCode;
            f_fetch(url, function (data) {
              if (data.data && data.data.length > 0) {
                curr_availableRateplans = f_get_Offer_From_contentAPI(
                  data.data
                );
                f_setStoreState("availableOffers", curr_availableRateplans);
                try {
                  var _crrr_offer = f_get_current_offer_data();
                  if (
                    _crrr_offer.addonInfo.length &&
                    _crrr_offer.addonInfo[0].addOnType === "Ticketing addons"
                  ) {
                    window.location.replace(
                      (window.location.href =
                        bookingEngine_global_data.global.pathArea.roomPath +
                        ".html" +
                        window.location.search)
                    );
                  }
                  f_paymentPageInit();
                } catch (err) {
                  f_setStoreState("curr_errmsg", {
                    code: "error_code_3001",
                    errmsg: errcode["error_code_3001"],
                  });
                }
              } else {
                f_setStoreState("curr_errmsg", {
                  code: "error_code_3001",
                  errmsg: errcode["error_code_3001"],
                });
                window.location.replace(
                  (window.location.href =
                    bookingEngine_global_data.global.pathArea.roomPath +
                    ".html" +
                    window.location.search)
                );
              }
            });
          });
        }
      } catch (err) {
        f_setStoreState("curr_errmsg", {
          code: "error_code_3000",
          errmsg: errcode["error_code_3000"],
        });
        window.location.replace(
          (window.location.href =
            bookingEngine_global_data.global.pathArea.roomPath +
            ".html" +
            window.location.search)
        );
      }
    },
    function (errRes) {
      //Back to the Search Page When Rooms are Error
      var errcode = bookingEngine_global_data.global.errorArea;
      f_err_link_to_searchPage({
        code: errRes.ttCode,
        errmsg: errcode["error_code_" + errRes.ttCode]
          ? errcode["error_code_" + errRes.ttCode]
          : errRes.message,
      });
    },
    "",
    true
  );
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      if (variable == "LOS" && (pair[1] < 1 || pair[1] == null)) {
        pair[1] = 1;
      }
      return pair[1];
    }
  }
  return false;
}

function f_paymentPageInit() {
  var elem = $("#room_info");
  elem.find(".edit_txt").text(bookingEngine_global_data.global.bodyArea.edit);
  f_setStoreState("upgradeRooms", "");
  f_setStoreState("guestsPreferences", "");
  f_setStoreState("availableOffersOld", "");
  f_setStoreState("guestsListOld", "");
  f_setStoreState("alipayArray", "");
  f_setStoreState("alipayURL", "");
  f_setStoreState("emarsys", false);
  f_initRoomInfo();
  f_paymentMethods();
  f_guestPreferences();
  elem.find(".roomBlockTitle ").eq(0).addClass("d_actived");
  elem.find(".roomInfoBlock").eq(0).find("div").show();
  $("#viewDetails_dialog h5").text(
    paymentMethod_content_data.terms1Field.label
  );
  $(
    "#ProceedDiv .viewDetails a,#viewDetails_dialog .dialog_contentainer"
  ).click(function (event) {
    $("body").css("overflow-y", "hidden");
    $("#modal_backdrop").fadeIn(100, function () {
      $("#viewDetails_dialog").slideDown(0, function () {
        $("#viewDetails_dialog .dialog_contentainer").addClass("fadeShow");
      });
    });
    event.stopPropagation();
  });
  var storeState = f_getSessionStorage();
  var originalRoom = [];
  for (var roomIndex = 0; roomIndex < storeState.rooms; roomIndex++) {
    originalRoom.push({
      originalRoomCode: storeState.guests[roomIndex].selectedRoom.roomCode,
      totalUpgradePrice: null,
    });
  }
  f_setStoreState("originalRoom", originalRoom);
  var elem1 = $("#guest_card");
  var search_input = $("#country");
  var search_content = elem1.find(".countryList");
  $(search_input).on("input", function () {
    elem1.find(".country-select-content").hide();
  });
  $(search_input).on("keyup", function () {
    if (search_input.val() === search_input.attr("data-default")) {
    } else {
      for (var k = 0; k < $(".countryList li").length; k++) {
        if (
          elem1
            .find(".countryList li")
            .eq(k)
            .text()
            .toLowerCase()
            .indexOf(search_input.val().toLowerCase()) >= 0
        ) {
          elem1.find(".countryList li").eq(k).show();
        } else {
          elem1.find(".countryList li").eq(k).hide();
        }
      }
      $(search_content).show();
      $(this).next().addClass("dropdown-up");
      $(this).next().removeClass("dropdown-down");
    }
  });
  $(".dropdown_selected").click(function (event) {
    $("#main_container .dropdown-up").addClass("dropdown-down");
    $("#main_container .dropdown-up").removeClass("dropdown-up");
    $(
      "#guest_card .countryList,#guest_card .timeSelectLi,#guest_card .roomPreferences,#main_container .occasionList"
    ).hide();
    $("#guest_card .time_dropdown_selected").removeClass("open");
    $(this).next(".dropdown_select").toggle();
    var elem = $("#CUPCard");
    if ($(this).hasClass("expMon")) {
      if (elem.find(".expYear").hasClass("open")) {
        elem.find(".expYear").removeClass("open");
        elem.find(".expYear").next(".dropdown_select").hide();
      }
    } else if ($(this).hasClass("expYear")) {
      if (elem.find(".expMon").hasClass("open")) {
        elem.find(".expMon").removeClass("open");
        elem.find(".expMon").next(".dropdown_select").hide();
      }
    } else {
      elem.find(".cardInput .open").removeClass("open");
      elem.find(".expYear").next(".dropdown_select").hide();
      elem.find(".expMon").next(".dropdown_select").hide();
    }
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
    }
    event.stopPropagation();
  });
  $("#PaymentMethodDiv")
    .find(".cardSelect")
    .on("click", ".dropdown_selected.supportCurrency", function (event) {
      $(
        "#guest_card .preferencesDropDown .dropdown-up,#main_container .occasionDropDown .dropdown-up,#guest_card .country-drop .dropdown-up"
      ).addClass("dropdown-down");
      $(
        "#guest_card .preferencesDropDown .dropdown-up,#main_container .occasionDropDown .dropdown-up,#guest_card .country-drop .dropdown-up"
      ).removeClass("dropdown-up");
      $(
        "#guest_card .countryList,#guest_card .timeSelectLi,#guest_card .roomPreferences,#main_container .occasionList"
      ).hide();
      $("#guest_card").find(".time_dropdown_selected").removeClass("open");
      var elem = $("#guest_card");
      for (var k = 0; k < $(".countryList li").length; k++) {
        if (
          elem
            .find(".countryList li")
            .eq(k)
            .text()
            .toLowerCase()
            .indexOf(search_input.val().toLowerCase()) >= 0
        ) {
          elem.find(".countryList li").eq(k).show();
        } else {
          elem.find(".countryList li").eq(k).hide();
        }
      }
      $(this).next(".dropdown_select").toggle();
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
      } else {
        $(this).addClass("open");
      }
      event.stopPropagation();
    });
  $("#PaymentMethodDiv")
    .find(".cardSelect")
    .on("mousedown", ".payCurrency .dropdown_select li", function (event) {
      setCurrencyInput($(this).index());
      event.stopPropagation();
    });
  $("#CUPCard")
    .find(".expirationDate")
    .on("click", ".dropdown_select li", function (event) {
      $(this)
        .closest(".cardInput")
        .find(".dropdown_selected")
        .text($(this).text());
      $("#main_container .dropdown_selected").removeClass("open");
      f_checkExpirationDate();
      event.stopPropagation();
    });
  $("#PaymentMethodDiv")
    .find(".cardSelect")
    .on("blur", ".payCurrency .currency_dropdown input", function (event) {
      var elem = $("#PaymentMethodDiv");
      elem.find(".currencyInputNone").hide();
      var search_input = elem.find(".currency_dropdown input");
      search_input.val("");
      elem.find(".currency_dropdown li").show();
      elem.find(".currency_dropdown span").text($(".d_none_impor").text());
      event.stopPropagation();
    });
  $("#guest_card")
    .find(".country-drop")
    .click(function (event) {
      $(
        "#guest_card .preferencesDropDown .dropdown-up,#main_container .occasionDropDown .dropdown-up"
      ).addClass("dropdown-down");
      $(
        "#guest_card .preferencesDropDown .dropdown-up,#main_container .occasionDropDown .dropdown-up"
      ).removeClass("dropdown-up");
      $(
        "#main_container .dropdown_select_salutation,#guest_card .timeSelectLi,#guest_card .roomPreferences,#main_container .occasionList"
      ).hide();
      $(
        ".time_dropdown_selected,.positionR.plr0 .dropdown_selected"
      ).removeClass("open");
      $("#country").focus();
      $("#guest_card").find(".countryList").toggle();
      var dropdown;
      if (!$("#guest_card").find(".country-drop").find(".dropdown-up").length) {
        dropdown = $(this).find(".dropdown-down");
        dropdown.addClass("dropdown-up");
        dropdown.removeClass("dropdown-down");
      } else {
        dropdown = $(this).find(".dropdown-up");
        dropdown.addClass("dropdown-down");
        dropdown.removeClass("dropdown-up");
      }
      event.stopPropagation();
    });
  $("#guest_card")
    .find(".countryList")
    .on("mousedown", "li", function (event) {
      f_setCountryNameAndCode($(this));
    });
  $("#main_container .dropdown_select_salutation").on(
    "click",
    "li",
    function (event) {
      var selected = $(this)
        .closest(".positionR.plr0")
        .find(".dropdown_selected");
      selected.text($(this).text());
      selected.removeClass("open");
      $("#main_container .dropdown_select_salutation").hide();
    }
  );
  $("#preferencesDiv").on(
    "click",
    ".dropdown_select_salutation li",
    function (event) {
      $(this)
        .closest(".positionR")
        .find(".dropdown_selected")
        .text($(this).text());
      $(this).closest(".dropdown_select_salutation").hide();
    }
  );
  $("#preferencesDiv").on("click", ".timeSelect", function (event) {
    f_resetDropDown();
    $(
      "#guest_card .preferencesDropDown .dropdown-up,#main_container .occasionDropDown .dropdown-up,#guest_card .country-drop .dropdown-up"
    ).addClass("dropdown-down");
    $(
      "#guest_card .preferencesDropDown .dropdown-up,#main_container .occasionDropDown .dropdown-up,#guest_card .country-drop .dropdown-up"
    ).removeClass("dropdown-up");
    $(
      "#main_container .dropdown_select_salutation,#guest_card .countryList,#guest_card .roomPreferences,#main_container .occasionList"
    ).hide();
    $(
      "#guest_card .time_dropdown_selected,#guest_card .positionR.plr0 .dropdown_selected"
    ).removeClass("open");
    $(this).next(".timeSelectLi").toggle();
    var selected = $(this).find(".time_dropdown_selected");
    if (selected.hasClass("open")) {
      selected.removeClass("open");
    } else {
      selected.addClass("open");
    }
    event.stopPropagation();
  });
  $("#preferencesDiv").on("click", ".timeSelectLi li", function (event) {
    var selected = $(this)
      .closest(".timeselectDiv")
      .find(".time_dropdown_selected");
    selected.text($(this).text());
    selected.removeClass("open");
    selected.attr("data-option", $(this).attr("data-option"));
    $(this).closest(".timeSelectLi").hide();
  });
  $("#preferencesDiv").on("click", ".occasionDropDown", function (event) {
    $(
      "#guest_card .preferencesDropDown .dropdown-up,#guest_card .country-drop .dropdown-up"
    ).addClass("dropdown-down");
    $(
      "#guest_card .preferencesDropDown .dropdown-up,#guest_card .country-drop .dropdown-up"
    ).removeClass("dropdown-up");
    $(
      "#main_container .dropdown_select_salutation,#guest_card .countryList,#guest_card .timeSelectLi,#guest_card .roomPreferences"
    ).hide();
    $(
      "#guest_card .time_dropdown_selected,#guest_card .positionR.plr0 .dropdown_selected"
    ).removeClass("open");
    $(this).next(".occasionList").toggle();
    var dropdown;
    if (!$(this).find(".dropdown-down").length) {
      dropdown = $(this).find(".dropdown-up");
      dropdown.addClass("dropdown-down");
      dropdown.removeClass("dropdown-up");
    } else {
      dropdown = $(this).find(".dropdown-down");
      dropdown.addClass("dropdown-up");
      dropdown.removeClass("dropdown-down");
    }
    event.stopPropagation();
  });
  $("#preferencesDiv").on("click", ".occasionList li", function (event) {
    for (
      var i = 0;
      i < $(this).closest(".occasionList").find("li").length;
      i++
    ) {
      $(this).closest(".occasionList").find("li").eq(i).removeClass("active");
    }
    $(this).addClass("active");
    var elem = $(this).closest(".occasion").find(".occasionDropDown");
    elem.html(
      $(this).text() + "<span class='dropdown-down'><span></span></span>"
    );
    elem.attr("data-option", $(this).data("option"));
    $(this).closest(".occasionList").hide();
  });
  $("#preferencesDiv").on("click", ".preferencesDropDown", function (event) {
    f_resetDropDown();
    $(
      "#main_container .occasionDropDown .dropdown-up,#guest_card .country-drop .dropdown-up"
    ).addClass("dropdown-down");
    $(
      "#main_container .occasionDropDown .dropdown-up,#guest_card .country-drop .dropdown-up"
    ).removeClass("dropdown-up");
    $(
      "#main_container .dropdown_select_salutation,#guest_card .countryList,#guest_card .timeSelectLi,#main_container .occasionList"
    ).hide();
    $(
      "#guest_card .time_dropdown_selected,#guest_card .positionR.plr0 .dropdown_selected"
    ).removeClass("open");
    $(this).next(".roomPreferences").toggle();
    var dropdown = $(this).find(".dropdown-down");
    var dropup = $(this).find(".dropdown-up");
    if (dropdown.length > 0) {
      dropdown.addClass("dropdown-up");
      dropdown.removeClass("dropdown-down");
    } else {
      dropup.addClass("dropdown-down");
      dropup.removeClass("dropdown-up");
    }
    event.stopPropagation();
  });
  $("#preferencesDiv").on("click", ".roomPreferences li", function (event) {
    var index = $(this).attr("data-option");
    var insertHtml =
      "<span class='selectedrp' data-item='" +
      index +
      "'>" +
      $(this).text() +
      "<span class='itemClose'> x</span></span>";
    var preferences = $(this).closest(".preferences");
    if ($(this).find("input")[0].checked) {
      preferences.find(".selectedrp[data-item=" + index + "]").remove();
      $(this).find("input")[0].checked = false;
    } else {
      $(this).find("input")[0].checked = true;
      preferences.find(".dropdown-up").before(insertHtml);
    }
    if (preferences.find(".selectedrp").length === 0) {
      preferences.find(".preferencesDropDown .defaltText").show();
    } else {
      preferences.find(".preferencesDropDown .defaltText").hide();
    }
    event.stopPropagation();
  });
  $("#preferencesDiv").on("click", ".itemClose", function (event) {
    $("#main_container .dropdown-up").addClass("dropdown-down");
    $("#main_container .dropdown-up").removeClass("dropdown-up");
    var preferences = $(this).closest(".preferences");
    preferences.find(".roomPreferences").hide();
    var index = $(this).closest(".selectedrp").attr("data-item");
    for (var i = 0; i < preferences.find(".roomPreferences li").length; i++) {
      if (
        preferences.find(".roomPreferences li").eq(i).attr("data-option") ===
        index
      ) {
        preferences
          .find(".roomPreferences li")
          .eq(i)
          .find("input")[0].checked = false;
      }
    }
    $(this).closest(".selectedrp").remove();
    if (preferences.find(".selectedrp").length === 0) {
      preferences.find(".preferencesDropDown .defaltText").show();
    }
    event.stopPropagation();
  });
  $("#room_info").on("click", ".roomBlockTitle", function () {
    var elem = $("#room_info");
    if (storeState.guests.length > 1) {
      if (!$(this).hasClass("d_actived")) {
        elem.find(".roomBlockTitle.d_actived").nextAll("div").hide();
        elem.find(".roomBlockTitle.d_actived").removeClass("d_actived");
        $(this).addClass("d_actived");
      } else {
        $(this).removeClass("d_actived");
      }
      $(this).nextAll("div").toggle();
    }
  });

  var input = $("#guest_card").find(".be-tel-input")[0];
  storeState = f_getSessionStorage();
  intl = window.BE_intlTelInput(input, {
    separateDialCode: true,
    autoPlaceholder: "off",
    preferredCountries: ["" + storeState.countryCode],
  });

  $("#room_info").on("click", ".toolTips", function (event) {
    var elem = $("#room_info");
    if (elem.find(".tips").is(":visible")) {
      elem.find(".tips").hide();
    } else {
      elem.find(".tips").show();
      elem
        .find(".tips_static")
        .css(
          "cssText",
          "bottom:auto;left:" +
            Number(
              elem.find(".toolTips").closest(".font_12").width() -
                elem.find(".toolTips").width() / 2 -
                $(".tips").width() / 2
            ) +
            "px !important;top:" +
            (elem.find(".toolTips").height() + 8) +
            "px"
        );
      //f_isOnScreen($(".tips"));
      var selectedOffer = f_getSessionStorage().availableOffers.filter(
        function (offer) {
          return offer.code === f_getOfferCodeFromURL("offerCode");
        }
      )[0];
      f_cancellationPolicy($(this), selectedOffer.policyCode);
    }
    event.stopPropagation();
  });

  var barTop = $("#mySticky").offset().top;
  var rowTop = $("#main_container>.row>.col-lg-4").offset().top;
  $(window).scroll(function () {
    var rowHeight = $("#main_container>.row>.col-lg-4").height();
    var barHeight = $("#mySticky").height();
    var scrollTop = $(document).scrollTop();
    if (scrollTop >= barTop && scrollTop + barHeight < rowHeight + rowTop) {
      $("#mySticky").addClass("p_fixed");
      $("#mySticky").removeClass("p_static");
      $("#mySticky").removeClass("p_bottom");
    } else if (
      scrollTop >= barTop &&
      scrollTop + barHeight >= rowHeight + rowTop
    ) {
      $("#mySticky").addClass("p_bottom");
      $("#mySticky").removeClass("p_fixed");
      $("#mySticky").removeClass("p_static");
    } else {
      $("#mySticky").addClass("p_static");
      $("#mySticky").removeClass("p_fixed");
      $("#mySticky").removeClass("p_bottom");
    }

    // if($("#room_info").find(".tips_static").is(':visible')){
    // 	f_isOnScreen($("#room_info").find(".tips"));
    // }
    // if($("#room_info").find(".tips_static_down").is(':visible')){
    // 	f_isOnScreen($("#room_info").find(".tips"));
    // }
  });
  $("#preferencesDiv").on("click", ".celebrateRadio", function (event) {
    $(this).closest(".celebrate").find("input:radio").prop("checked", false);
    $(this).find("input").prop("checked", true);
    var occasionDiv = $(this).closest(".form-group").next(".occasionDiv");
    if ($(this).find("input").eq(0).attr("data-value") == "true") {
      occasionDiv.css("display", "flex");
    } else {
      occasionDiv.css("display", "none");
    }
  });
  $("#firstName,#lastName").blur(function () {
    name_validate($(this));
  });
  $("#cardName").blur(function () {
    name_validate($(this), true);
  });
  $("#phone").blur(function () {
    $(".tel-input").val($(this).val());
    phone_validate($(this));
  });
  $("#cardNum").blur(function () {
    cardNum_validate($(this));
  });
  $("#Email").keydown(function () {
    if (checkIshanzi($(this).val())) {
      var elem = $("#guest_card");
      $(this).val(
        $(this)
          .val()
          .replace(/[^\u0000-\u007F]+/g, "")
      );
      $("#Email").addClass("error_line");
      elem.find(".invalidate_Email,.empty_Email").hide();
      elem.find(".noneEn_Email").show();
    }
  });
  $("#Email").blur(function () {
    email_validate();
  });
  $("#upgradeList").on("click", ".upgrade_view", function (event) {
    var index = $(this).attr("index");
    upgradeBlockUpdate(index, true);
    event.stopPropagation();

    //Tealium event
    if (typeof t_upgradeButton === "function") {
      t_upgradeButton(index);
    }
  });
  $("#upgrade_dialog")
    .find(".upgrade_body")
    .on("click", ".upgradeBlock", function (event) {
      var elem = $("#upgrade_dialog");
      var storeState = f_getSessionStorage();
      elem.find(".upgradeBlock").removeClass("upgradeBlockSelected");
      elem.find(".imgPanelLabel input[type='radio']").prop("checked", false);
      $(this).addClass("upgradeBlockSelected");
      $(this).find(".imgPanelLabel input[type='radio']").prop("checked", true);
      elem
        .find(".selectedRoomName")
        .text(elem.find(".upgradeBlockSelected .roomName").text());
      elem
        .find(".upgradeCostNum")
        .text(
          elem
            .find(".upgradeBlockSelected .col-md-3")
            .find("span")
            .eq(0)
            .text() +
            "/" +
            bookingEngine_global_data.global.bodyArea.allLowerNIght
        );
      var index = Number($(".upgradeBlockSelected").attr("data-room"));
      var offerChangingPrice = storeState.upgradeRooms[index][
        Number(elem.find(".upgradeBlockSelected").attr("data-index"))
      ].totalPrice.filter(function (price) {
        return price.currencyCode === storeState.currency;
      })[0].price;
      if (storeState.ticketAddon) {
        var _changeTotaltax = f_doFixed(offerChangingPrice * 0.177);
        var _tickeTotalPrice =
          f_doFixed(
            f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
              storeState.ticketAddon.priceArr
            ).guestCurrencyUnitPrice
          ) * storeState.ticketAddon.countData[index];
        offerChangingPrice += f_math_operation(
          _changeTotaltax + _tickeTotalPrice
        );
      }
      elem
        .find(".upgrade_rcontent_items span")
        .eq(1)
        .find("b")
        .text(storeState.symbol + f_isInt(f_doFixed(offerChangingPrice)));
      event.stopPropagation();
    });
  $("#upgrade_dialog .dialog_contentainer").click(function (event) {
    event.stopPropagation();
  });
  $("#upgradeList").on("click", ".upgraded a", function () {
    var index = $(this).closest(".upgraded").attr("data-item");
    var scrollOffset = $(".preference" + index).offset();

    $("body,html").animate({
      scrollTop: scrollOffset.top,
    });
  });
  $("#upgrade_dialog .close_button,#upgrade_dialog").click(function (event) {
    $("body").css("overflow-y", "scroll");
    $("#upgrade_dialog .dialog_contentainer").removeClass("fadeShow");
    $("#upgrade_dialog").fadeOut(300, function () {
      $("#modal_backdrop").fadeOut(300);
    });
    event.stopPropagation();
  });
  $("#viewDetails_dialog .close_button,#viewDetails_dialog").click(function (
    event
  ) {
    $("body").css("overflow-y", "scroll");
    $("#viewDetails_dialog .dialog_contentainer").removeClass("fadeShow");
    $("#viewDetails_dialog").fadeOut(300, function () {
      $("#modal_backdrop").fadeOut(300);
    });
    event.stopPropagation();
  });
  $(document).click(function (event) {
    f_resetDropDown();
  });
  /*    document.onkeydown = function (e) {
         e = e || window.event;
         switch (e.keyCode) {
             case 38:f_countryLiChange('Up'); break;//上
             case 40:f_countryLiChange('Down'); break;//下
         }
     }*/
  $("#country").blur(function () {
    if ($("#country").attr("data-default") != $("#country").val()) {
      var elem = $("#guest_card");
      elem
        .find(".country-select-content")
        .text($("#country").attr("data-default"));
      elem.find(".countryList li").show();
    }
    $("#country").val("");
    dropDownClose();
    elem.find(".country-select-content").show();
  }) -
    //Set Country List to Session Storage
    f_setStoreState(
      "countriesList",
      booking_payment_content_data.countriesList
    );

  for (var i = 0; i < booking_payment_content_data.countriesList.length; i++) {
    var elem = $("#guest_card");
    $(".countryList").append(
      "<li data-two='" +
        booking_payment_content_data.countriesList[i].twoLetterCode +
        "' data-three='" +
        booking_payment_content_data.countriesList[i].threeLetterCode +
        "' data-english='" +
        booking_payment_content_data.countriesList[i].country +
        "'>" +
        booking_payment_content_data.countriesList[i].countryName +
        "</li>"
    );
    if (
      booking_payment_content_data.countriesList[i].twoLetterCode ===
      storeState.countryCode
    ) {
      elem
        .find(".country-select-content")
        .text(booking_payment_content_data.countriesList[i].countryName);
      $("#country").attr(
        "data-default",
        booking_payment_content_data.countriesList[i].countryName
      );
      $("#country").attr(
        "data-three",
        booking_payment_content_data.countriesList[i].threeLetterCode
      );
      $("#country").attr(
        "data-two",
        booking_payment_content_data.countriesList[i].twoLetterCode
      );
      $("#country").attr(
        "data-english",
        booking_payment_content_data.countriesList[i].country
      );
      elem.find(".countryList li").eq(i).addClass("countryListSelected");
    }
  }
  $("#ProceedDiv")
    .find(".viewDetails")
    .click(function () {
      $("#ProceedDiv").find(".TermsAndConditions .error_msg").hide();
    });
  $("#upgrade").click(function (event) {
    var elem = $("#upgrade_dialog");
    f_upgradeView(
      Number(elem.find(".upgradeBlockSelected").attr("data-room")),
      Number(elem.find(".upgradeBlockSelected").attr("data-index"))
    );
    event.stopPropagation();
  });
  $("#cardNum").bind("input propertychange", function () {
    //获取当前光标的位置
    var caret = this.selectionStart; //获取当前的value
    var value = this.value; //从左边沿到坐标之间的空格数
    var sp = (value.slice(0, caret).match(/\s/g) || []).length; //去掉所有空格
    var nospace = value.replace(/\s/g, ""); //重新插入空格
    var curVal = (this.value = nospace
      .replace(/\D+/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()); //从左边沿到原坐标之间的空格数
    var curSp = (curVal.slice(0, caret).match(/\s/g) || []).length; //修正光标位置
    this.selectionEnd = this.selectionStart = caret + curSp - sp;
  });
  //check loyalty session storage data
  if (!storeState.guestInfo && sessionStorage.getItem("patronProfile")) {
    f_storeInfoToSession(sessionStorage.getItem("patronProfile"));
    f_setStoreState("memberStatus", true);
  }
  f_drawInfoFromSession();
  if (storeState.ticketAddon && $("#BookingUniversal_AddonModel").length) {
    $("#BEshowTicketBox").show();
    var _BookingUniversal_AddonModel = JSON.parse(
      $("#BookingUniversal_AddonModel").html()
    );
    if (_BookingUniversal_AddonModel) {
      var _addonlistKey = _.keys(_BookingUniversal_AddonModel.addonsList)[0];
      var ticketAddonList =
        _BookingUniversal_AddonModel.addonsList[_addonlistKey].items ||
        _BookingUniversal_AddonModel.addonsList[_addonlistKey].categories;
      if (ticketAddonList) {
        var _currnAddonContent = ticketAddonList.filter(function (item) {
          return (
            item.ticketAddonArea &&
            item.ticketAddonArea.addonCode === storeState.ticketAddon.addOnCode
          );
        })[0].ticketAddonArea;
        $("#howTicketBoxLabel").html(
          _BookingUniversal_AddonModel.ticketsToAddon.format(
            "addonName",
            _currnAddonContent.name
          )
        );
        $("#editBEshowTicket").click(function () {
          var _currnOffer = f_get_current_offer_data();
          f_addonPriceAndAvailability(
            _currnOffer,
            function () {
              f_initRoomInfo(true);
              f_Pop_modal_hide();
            },
            true,
            null,
            function () {
              f_setStoreState("curr_errmsg", {
                code: "error_code_9000",
                errmsg:
                  bookingEngine_global_data.global.errorArea["error_code_9000"],
              });
              window.location.replace(
                bookingEngine_global_data.global.pathArea.roomPath +
                  ".html" +
                  window.location.search
              );
            }
          );
          if (typeof t_addonTicketEdit === "function") {
            t_addonTicketEdit();
          }
        });
      }
    }
  }
}

function f_set_payCurrency(paymentMethod) {
  if (!paymentMethod) return false;
  var storeState = f_getSessionStorage();
  var PaymentMethods = storeState.paymentMethods;
  var payMethod = PaymentMethods.filter(function (paymethod) {
    return paymethod.code === paymentMethod;
  })[0];
  var currencyNow = storeState.currency;
  var storeState = f_getSessionStorage();

  var selectedOffer = storeState.availableOffers.filter(function (offer) {
    return offer.code === f_getOfferCodeFromURL("offerCode");
  })[0];
  var preAlert = selectedOffer.guaranteePercentage;
  var elem = $("#PaymentMethodDiv");
  elem.find(".paymentIssue").hide();
  $("#main_container .error_line").removeClass("error_line");
  elem.find(".cardSelect .error_msg").hide();
  if (preAlert === 0) {
    if (
      paymentMethod === "VS" ||
      paymentMethod === "MC" ||
      paymentMethod === "AX" ||
      paymentMethod === "JCB"
    ) {
      $("#card_alert_MPGS,#payment_block .stayPay").show();
      $("#card_alert_Alipay,#CUPCard").hide();
    } else if (paymentMethod === "CUP") {
      $("#CUPCard").show();
      $("#payment_block .stayPay").show();
      $("#card_alert_MPGS,#card_alert_Alipay").hide();
    } else if (paymentMethod === "AL") {
      $("#card_alert_Alipay").show();
      $("#card_alert_MPGS,#payment_block .stayPay,#CUPCard").hide();
    } else {
      $("#payment_block .stayPay").hide();
      $("#card_alert_MPGS,#CUPCard").hide();
      $("#card_alert_Alipay").hide();
    }
  } else if (preAlert === 100) {
    if (paymentMethod === "AL") {
      $("#card_alert_Alipay").show();
      $("#card_alert_MPGS,#payment_block .stayPay,#CUPCard").hide();
    } else if (paymentMethod === "CUP") {
      $("#CUPCard").show();
      $("#card_alert_MPGS,#card_alert_Alipay,#payment_block .stayPay").hide();
    } else {
      $(
        "#card_alert_MPGS,#CUPCard,#card_alert_Alipay,#payment_block .stayPay"
      ).hide();
    }
  }
  if (payMethod.supportedCurrencies.length > 1 && preAlert != 0) {
    if (elem.find(".payCurrency").length > 0) {
      if (currencyNow === "SGD") {
        elem.find("#payment_block .chargeTipsSGD,.SGDTxt").hide();
        elem.find("#payment_block .chargeTips").show();
      }
      var needInnit = true;
      for (var _i = 0; _i < elem.find(".currency_dropdown li").length; _i++) {
        var text = elem.find(".currency_dropdown li").eq(_i).attr("data-type");
        if (currencyNow == text) {
          setCurrencyInput(_i);
          needInnit = false;
        }
      }
      if (needInnit) {
        f_setStoreState("currency", "SGD");
        f_setStoreState("symbol", "S$");
        f_BE_resetPrice();
      }
      var $chargeTips = $("#payment_block .chargeTips");
      var $chargeTipsSGD = $("#payment_block .chargeTipsSGD");
      $chargeTips.insertBefore($chargeTipsSGD);
      var elem1 = $("#payment_block");
      elem1.find(".chargeTips").addClass("bigPrices");
      elem1.find(".chargeTipsSGD").removeClass("bigPrices");
      elem.find(".payCurrency").show();
    } else {
      var insertHtml =
        "<div class='payCurrency row'><label class='col-sm-4 p0 f_700 card_title'>" +
        paymentMethod_content_data.preferredCurrencyLabel +
        "</label><div><div class='currency_dropdown' onclick='currencyDropdown()'><span class='dropdown_selected supportCurrency' style='position: absolute;width: 100%;'>SGD</span><ul class='dropdown_select w_100 mo' style='display: none;margin-top: 38px !important;'>";
      var needInnit = true;
      var selectHtml = "";

      for (var i = 0; i < payMethod.supportedCurrencies.length; i++) {
        if (currencyNow === payMethod.supportedCurrencies[i].code) {
          insertHtml =
            "<div class='payCurrency row'><label class='col-sm-4 p0 f_700 card_title'>" +
            paymentMethod_content_data.preferredCurrencyLabel +
            "</label><div><div class='currency_dropdown' onclick='currencyDropdown()'><span class='dropdown_selected supportCurrency' style='position: absolute;width: 100%;'>" +
            currencyNow +
            "</span><ul class='dropdown_select w_100 mo' style='display: none;margin-top: 38px !important;'>";
          needInnit = false;
        }
        if (payMethod.supportedCurrencies[i].code === currencyNow) {
          selectHtml +=
            "<li data-type='" +
            payMethod.supportedCurrencies[i].code +
            "' data-symbol='" +
            payMethod.supportedCurrencies[i].symbol +
            "'>" +
            payMethod.supportedCurrencies[i].code +
            "</li>";
        } else {
          selectHtml +=
            "<li data-type='" +
            payMethod.supportedCurrencies[i].code +
            "' data-symbol='" +
            payMethod.supportedCurrencies[i].symbol +
            "'>" +
            payMethod.supportedCurrencies[i].code +
            "</li>";
        }
      }
      insertHtml += selectHtml;
      insertHtml +=
        "<div style='display:none' class='currencyInputNone'>" +
        bookingEngine_global_data.global.bodyArea.noInput +
        "</div></ul><input type='text' onkeyup='displayResult()'></div></div></div>";
      elem.find(".cardSelect>.row:not(#CUPCard)").after(insertHtml);

      var $chargeTips = $("#payment_block .chargeTips");
      var $chargeTipsSGD = $("#payment_block .chargeTipsSGD");
      $chargeTips.insertBefore($chargeTipsSGD);
      var elem1 = $("#payment_block");
      elem1.find(".chargeTips").addClass("bigPrices");
      elem1.find(".chargeTipsSGD").removeClass("bigPrices");
      if (currencyNow === "SGD") {
        elem1.find(".chargeTipsSGD").hide();
        elem1.find(".chargeTips").show();
      }
    }
  } else {
    elem.find(".payCurrency").hide();
    var elem1 = $("#payment_block");
    var $chargeTips = elem1.find(".chargeTips");
    var $chargeTipsSGD = elem1.find(".chargeTipsSGD");
    $chargeTipsSGD.insertBefore($chargeTips);
    elem1.find(".chargeTips").removeClass("bigPrices");
    elem1.find(".chargeTipsSGD").addClass("bigPrices");
    if (currencyNow === "SGD") {
      elem1.find(".chargeTipsSGD").show();
      elem1.find(".chargeTips").hide();
    }
  }
  var _cancellationPolicy = f_get_cancellationPolicy_Data(
    selectedOffer.policyCode
  );
  if (_cancellationPolicy.policyText) {
    $("#payment_block").find(".stayPay").text(_cancellationPolicy.policyText);
  }
  elem.find(".payMethoded").show();
}

function f_getSearchWithoutOfferCode() {
  var _router = getRouterSearch();
  var _search = "";
  for (var key in _router) {
    if (key !== "offerCode") {
      _search += key + "=" + _router[key] + "&";
    } else {
      _search += key + "=" + "&";
    }
  }
  return _.trimEnd(_search, "&");
}

window.addEventListener("pageshow", f_payment_pageshow_init, false);
$(function () {
  if (!"onpageshow" in window) {
    f_payment_pageshow_init();
  }
});
function f_payment_pageshow_init() {
  loading_show();
  //	f_isDirect();
  $("#main_container").show();
  f_enterPageDirectly();
}
