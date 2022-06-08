/**
 * Created by LeoZhuo on 2019/5/28.
 */

//货币类型名称
var curr_availableRateplans = f_getSessionStorage().availableOffers; //当前选择的房间的优惠数据

window.addEventListener("pageshow", f_multiroom_pageshow_init, false);
$(function () {
  if (!"onpageshow" in window) {
    f_multiroom_pageshow_init();
  }
});
function f_multiroom_pageshow_init() {
  loading_hide();
  //Tealium Init
  if (typeof t_init === "function") {
    t_init();
  }

  var storeState = f_getSessionStorage();
  if (!isModeEdit || storeState.allRoomList) {
    if (!storeState.guests) {
      window.location.href =
        bookingEngine_global_data.global.pathArea.searchPath + ".html";
    } else {
      f_availableMultiRooms();
      $(".backSearch").attr("href", storeState.pageStepUrl.step2);
      $(".close_mask,.mask").bind("click", function () {
        $("body").css("overflow-y", "scroll");
        $(".mask,.mask_bg").fadeOut(200);
      });
      $(".mask_size").bind("click", function (e) {
        stopPropagation(e);
      });
    }
  }
}

//初始化
function f_availableMultiRooms() {
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
  var booking_rooms_content_data = JSON.parse(
    $("#booking_rooms_content_data").html()
  );
  f_setStoreState("availableOffers", curr_availableRateplans);
  var item = "";
  for (var i = 0; i < curr_availableRateplans.length; i++) {
    var datalayer = curr_availableRateplans[i];
    var _totalPriceIfTicket = 0;
    item +=
      "<li><div class='room_card card card_space'>" +
      "                            <div class='row'>" +
      "                                <div class='mulroom_card_left'>" +
      "                                    <div class='ls-1 card_title txt-lg-lr'>" +
      datalayer.name +
      "</div>" +
      "                                    <div class='txt-lg-lr txt-black-five ls-1'>" +
      datalayer.description +
      "                                    </ul></div>" +
      "                                    <div class='pt-10'>" +
      "  <a class='txt-lg-lr ls-1 viewDetails hyl_black' onclick='f_onPackageDetail(\"" +
      datalayer.code +
      "\")'>" +
      booking_rooms_content_data.viewDetailsLabel +
      "</a>" +
      "                                    </div>" +
      "                                </div>" +
      "                               <div class='mulroom_card_right'>" +
      "                                    <ul>";
    for (var j = 0; j < datalayer.rooms.length; j++) {
      var roomDataLayer = datalayer.rooms[j];
      item +=
        "  <li>" +
        "      <div class='row'>" +
        "          <div class='col-md-5 px-0 px_1r'>" +
        "              <div class='vb'></div>" +
        "                  <strong>" +
        datalayer.rooms[j].roomName +
        "</strong><br>" +
        "                  <small class='text-muted'>" +
        datalayer.rooms[j].bedTypeName +
        "</small>" +
        "          </div>" +
        "          <div class='col-sm-3 px-0 px_1r'>" +
        "              <p class='text-muted'>" +
        f_getGuestsInfo(f_getSessionStorage().guests[j]) +
        "</p>" +
        "          </div>";
      var originalNum = 0;
      var discountedNum = 0;
      var _symbol = f_getCurrencyInfo().symbol;
      if (
        datalayer.addonInfo &&
        datalayer.addonInfo.length &&
        datalayer.addonInfo[0].addOnType === "Ticketing addons"
      ) {
        var _totalOfferPrice = f_getPriceInfoForTicket(datalayer, j).total;
        var _avgOfferPrice = f_doFixed(_totalOfferPrice / storeState.los);
        _totalPriceIfTicket += _avgOfferPrice;
        originalNum = _symbol + toMoney(_avgOfferPrice);
      } else {
        originalNum = f_getCurrencyNumber(
          f_getSessionStorage().currency,
          roomDataLayer.averagePriceByCurrency
        );
        discountedNum = f_getCurrencyNumber(
          f_getSessionStorage().currency,
          roomDataLayer.discountedAveragePriceByCurrency
        );
      }
      if (discountedNum) {
        item +=
          "<div class='col-sm-4 px-0 px_1r'>" +
          "          <del class='del_txt'>" +
          originalNum +
          "</del>" +
          "          <div>" +
          "              <strong class='ls-1 multi_number'>" +
          discountedNum +
          "</strong>" +
          "              <span class='multi_avg'>" +
          bookingEngine_global_data.global.bodyArea.avgNight +
          "</span>" +
          "              <div class='shapeborder' onclick='f_showPackagePrice(this,\"" +
          datalayer.code +
          '","' +
          roomDataLayer.roomCode +
          '","' +
          j +
          "\")'>i</div>" +
          "               <div><small>" +
          (datalayer.lowestUnitAddOnPrice &&
          datalayer.lowestUnitAddOnPrice.length
            ? bookingEngine_global_data.global.bodyArea.InclusiveTS
            : bookingEngine_global_data.global.bodyArea.exclusiveTS) +
          "</small></div>" +
          "          </div>" +
          "          </div>" +
          "      </div>" +
          "      <hr>" +
          "  </li>";
      } else {
        item +=
          "          <div class='col-sm-4 px-0 px_1r'>" +
          "          <div>" +
          "              <strong class='ls-1 multi_number'>" +
          originalNum +
          "</strong>" +
          "              <span class='multi_avg'>" +
          bookingEngine_global_data.global.bodyArea.avgNight +
          "</span>" +
          "              <div class='shapeborder' onclick='f_showPackagePrice(this,\"" +
          datalayer.code +
          '","' +
          roomDataLayer.roomCode +
          '","' +
          j +
          "\")'>i</div>" +
          "              <div> <small>" +
          (datalayer.lowestUnitAddOnPrice &&
          datalayer.lowestUnitAddOnPrice.length
            ? bookingEngine_global_data.global.bodyArea.InclusiveTS
            : bookingEngine_global_data.global.bodyArea.exclusiveTS) +
          "</small></div>" +
          "          </div>" +
          "          </div>" +
          "      </div>" +
          "      <hr>" +
          "  </li>";
      }
    }

    item +=
      "                                    </ul>" +
      "                                    <div class='row'>" +
      "  <div class='col-sm-4 px-0 px_1r'>" +
      "      <span class='pl-0 px_1r'><strong>" +
      bookingEngine_global_data.global.bodyArea.total +
      "</strong></span>" +
      "  </div>" +
      "  <div class='col-sm-4 col-sm-offset-4 px-0 px_1r'>" +
      "      <div class='rate_cal_counter'>" +
      "          <strong class='ls-1 multi_number'>" +
      (_totalPriceIfTicket
        ? _symbol + toMoney(_totalPriceIfTicket)
        : f_addNum(datalayer.rooms)) +
      "</strong>" +
      "          <span class='multi_avg'>" +
      bookingEngine_global_data.global.bodyArea.avgNight +
      "</span><br>" +
      "          <div><small>" +
      (datalayer.lowestUnitAddOnPrice && datalayer.lowestUnitAddOnPrice.length
        ? bookingEngine_global_data.global.bodyArea.InclusiveTS
        : bookingEngine_global_data.global.bodyArea.exclusiveTS) +
      "</small></div>" +
      "          <small class='TooltipCP txt-x-sm-lr " +
      (datalayer.noCancellationDate ? "freeCancellation" : "") +
      "'  onclick='f_cancellationPolicy(this,\"" +
      datalayer.policyCode +
      "\")'>" +
      (datalayer.noCancellationDate
        ? bookingEngine_global_data.global.bodyArea.freeCancellation
        : bookingEngine_global_data.global.bodyArea.cancellationPolicy) +
      "</small>" +
      "          <div class='pt-20'><button class='btn mbs_button_primary w100' id='m_btn_book' onclick='f_payment(\"" +
      datalayer.code +
      "\",this)'> " +
      booking_rooms_content_data.bookButton.ctaText +
      " </button></div>" +
      "      </div>" +
      "  </div>" +
      "                                    </div>" +
      "                                </div>" +
      "                            </div>" +
      "                        </div>" +
      "                    </li>";
  }
  $("#multiroom_list").append(item);
  $(".TooltipCP,.shapeborder").on("click", function (e) {
    stopPropagation(e);
  });
  f_page_default_scrollTop();
}

// 获取当前货币金额数值,拼接显示
function f_getCurrencyNumber(currency, priceByCurrency) {
  for (var j = 0; j < priceByCurrency.length; j++) {
    if (priceByCurrency[j].currencyCode === currency) {
      return f_getCurrencyInfo().symbol + toMoney(priceByCurrency[j].price);
    }
  }
  return "";
}

// 订单金额相加显示
function f_addNum(rooms) {
  var total = 0;
  for (var i = 0; i < rooms.length; i++) {
    if (rooms[i].discountedAveragePriceByCurrency.length > 0) {
      var _price = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
        rooms[i].discountedAveragePriceByCurrency
      ).guestCurrencyUnitPrice;
      total += f_doFixed(_price);
    } else {
      var _price = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
        rooms[i].averagePriceByCurrency
      ).guestCurrencyUnitPrice;
      total += f_doFixed(_price);
    }
  }
  total = f_doFixed(total);
  return f_getCurrencyInfo().symbol + toMoney(total);
}

// 拼接人员字符
function f_getGuestsInfo(guest) {
  var adultsNum = guest.adults;
  var childrenNum = guest.children;
  var adultsString = "";
  if (adultsNum == 1) {
    adultsString =
      adultsNum + " " + bookingEngine_global_data.global.bodyArea.adult;
  } else {
    adultsString =
      adultsNum + " " + bookingEngine_global_data.global.bodyArea.adults;
  }
  if (childrenNum == 1) {
    return (
      adultsString +
      ", " +
      childrenNum +
      " " +
      bookingEngine_global_data.global.bodyArea.child
    );
  }
  if (childrenNum > 1) {
    return (
      adultsString +
      ", " +
      childrenNum +
      " " +
      bookingEngine_global_data.global.bodyArea.children
    );
  } else {
    return adultsString;
  }
}
function f_onPackageDetail(code) {
  var offerData = curr_availableRateplans.filter(function (item) {
    return item.code === code;
  })[0];
  var modalBody =
    "<div class='offerDetail-description txt-lg-lr txt-black-three ls-x-sm mb-2'>";
  if (offerData.detailedDescription.description != null) {
    modalBody += offerData.detailedDescription.description;
  }
  if (offerData.detailedDescription.additionalPrivileges.length) {
    modalBody +=
      "<div class='popUpFolder'><div><span>" +
      offerData.detailedDescription.additionalPrivilegesName +
      "</span></div><div class='row'><div class='left-side-panel'>";
    var leftBlock = "";
    var rightBlock = "";
    for (
      var i = 0;
      i < offerData.detailedDescription.additionalPrivileges.length;
      i++
    ) {
      if (i === 0) {
        leftBlock +=
          "<div class='box selected' onclick='f_popUpSwitch(this," +
          i +
          ")'><div>" +
          offerData.detailedDescription.additionalPrivileges[i].category +
          "</div><div class='arrow'></div></div>";
        rightBlock +=
          "<div class='content content" +
          i +
          "' style='display:block'>" +
          offerData.detailedDescription.additionalPrivileges[i].details +
          "</div>";
      } else {
        leftBlock +=
          "<div class='box' onclick='f_popUpSwitch(this," +
          i +
          ")'><div>" +
          offerData.detailedDescription.additionalPrivileges[i].category +
          "</div><div class='arrow' style='display:none'></div></div>";
        rightBlock +=
          "<div class='content content" +
          i +
          "'>" +
          offerData.detailedDescription.additionalPrivileges[i].details +
          "</div>";
      }
    }
    modalBody +=
      leftBlock +
      "</div><div class='right-side-panel'>" +
      rightBlock +
      "</div></div></div>";
    modalBody +=
      "<div class='m_popUpFolder'><div><span>" +
      offerData.detailedDescription.additionalPrivilegesName +
      "</span></div>";
    for (
      var j = 0;
      j < offerData.detailedDescription.additionalPrivileges.length;
      j++
    ) {
      if (j === 0) {
        modalBody +=
          "<div class='m_box'><div class='title' onclick='f_m_popUpSwitch(this)'>" +
          offerData.detailedDescription.additionalPrivileges[j].category +
          "<i class='fa fa-angle-up'></i></div><div class='content' style='display:block'>" +
          offerData.detailedDescription.additionalPrivileges[j].details +
          "</div></div>";
      } else {
        modalBody +=
          "<div class='m_box'><div class='title' onclick='f_m_popUpSwitch(this)'>" +
          offerData.detailedDescription.additionalPrivileges[j].category +
          "<i class='fa fa-angle-down'></i></div><div class='content'>" +
          offerData.detailedDescription.additionalPrivileges[j].details +
          "</div></div>";
      }
    }
    modalBody += "</div>";
    //    	modalBody += offerData.detailedDescription.description;
  }
  if (bookingEngine_global_data.global.bodyArea.tnCApply != null) {
    modalBody +=
      "<div class='tcApply'>" +
      bookingEngine_global_data.global.bodyArea.tnCApply +
      "</div>";
  }
  modalBody += "</div>";
  f_Pop_modal_show(
    "package_details",
    "<div class='txt-xxx-lg-jb'>" + offerData.name + "</div>",
    modalBody,
    "",
    "modal_dialog_md"
  );

  //Tealium event
  if (typeof t_viewDetail === "function") {
    t_viewDetail(code);
  }
}

function f_popUpSwitch(obj, index) {
  $(".left-side-panel .arrow,.right-side-panel .content").hide();
  $(".left-side-panel .box").removeClass("selected");
  $(obj).addClass("selected");
  $(obj).find(".arrow").show();
  $(".content" + index).show();
}

function f_m_popUpSwitch(obj) {
  if ($(obj).next(".content").is(":visible")) {
    $(obj).next(".content").hide();
  } else {
    $(".m_popUpFolder .content").hide();
    $(".m_popUpFolder i").removeClass("fa-angle-up");
    $(".m_popUpFolder i").addClass("fa-angle-down");
    $(obj).next(".content").show();
  }
  if ($(obj).find("i").hasClass("fa-angle-up")) {
    $(obj).find("i").removeClass("fa-angle-up");
    $(obj).find("i").addClass("fa-angle-down");
  } else {
    $(obj).find("i").removeClass("fa-angle-down");
    $(obj).find("i").addClass("fa-angle-up");
  }
}

function f_showPackagePrice(obj, code, roomCode, roomIndex) {
  var _crrr_offer = curr_availableRateplans.filter(function (i) {
    return i.code === code;
  })[0];
  var roomsOffer = _crrr_offer.rooms;
  var rooms = roomsOffer.filter(function (i) {
    return i.roomCode === roomCode;
  })[0];
  var currency = f_getSessionStorage().currency;
  var contentHtml = "";
  var priceAdd = 0;
  var _priceRes =
    _crrr_offer.addonInfo &&
    _crrr_offer.addonInfo.length &&
    _crrr_offer.addonInfo[0].addOnType === "Ticketing addons"
      ? f_getPriceInfoForTicket(_crrr_offer, roomIndex)
      : null;
  for (var i = 0; i < rooms.nightlyPrices.length; i++) {
    var symbol = f_getCurrencyInfo().symbol;
    var discountedPriceByCurrency = rooms.nightlyPrices[i]
      .discountedPriceByCurrency.length
      ? rooms.nightlyPrices[i].discountedPriceByCurrency.filter(function (
          disc
        ) {
          return disc.currencyCode === currency;
        })[0].price
      : "";
    var priceByCurrency = rooms.nightlyPrices[i].priceByCurrency.filter(
      function (disc) {
        return disc.currencyCode === currency;
      }
    )[0].price;
    var price = discountedPriceByCurrency || priceByCurrency;
    priceAdd += Number(toMoney(price, "", true));
    var priceDate = f_getDateByDifferentLanguage(
      rooms.nightlyPrices[i].effectiveDate,
      true
    );
    contentHtml +=
      "<div class='lh-1-5'><div class='row'>" +
      "<div class='txt-sm-lr txt-black-three ls-x-sm mr-auto'>" +
      f_convert_lowercase(priceDate) +
      "</div>" +
      "<div class='txt-sm-lb txt-black-three ls-x-sm  float-right ml-auto'>" +
      symbol +
      "&nbsp;" +
      (_priceRes ? toMoney(_priceRes.nightlyPrices[i]) : toMoney(price)) +
      "</div>" +
      "</div>";
  }
  var taxesAndService =
    rooms.taxesAndServiceChargesByCurrency && !_priceRes
      ? rooms.taxesAndServiceChargesByCurrency.filter(function (disc) {
          return disc.currencyCode === currency;
        })[0].price
      : 0;

  contentHtml += "<div class='row border-bottom'>";
  if (taxesAndService) {
    contentHtml +=
      "<div class='txt-sm-lr txt-black-three ls-x-sm mr-auto w-50' style='text-align: left;'>" +
      bookingEngine_global_data.global.bodyArea.TSCharge +
      "</div>" +
      "<div class='txt-sm-lb txt-black-three ls-x-sm  float-right ml-auto row align-items-end'><span>" +
      symbol +
      "&nbsp;" +
      toMoney(taxesAndService) +
      "</span></div>";
  } else {
    contentHtml +=
      "<div class='txt-sm-lr txt-black-three ls-x-sm mr-auto' style='text-align: left;'>" +
      bookingEngine_global_data.global.bodyArea.InclusiveTS +
      "</div>";
  }
  contentHtml += "</div>";
  contentHtml +=
    "<div class='row'>" +
    "<div class='txt-lg-lb txt-black-three ls-x-sm mr-auto'>" +
    bookingEngine_global_data.global.bodyArea.total +
    "</div>" +
    "<div class='txt-lg-lb txt-black-three ls-x-sm  float-right ml-auto'>" +
    symbol +
    "&nbsp;" +
    (_priceRes
      ? toMoney(_priceRes.total)
      : toMoney(priceAdd + taxesAndService)) +
    "</div>" +
    "</div></div>";
  f_show_tips_popover($(obj), contentHtml);
}

function f_payment(code, obj) {
  loading_show();
  //f_setStoreState("offerCode", code);
  var routerSearch = getRouterSearch();
  var storeState = f_getSessionStorage();
  var _currnOffer = storeState.availableOffers.filter(function (_item) {
    return _item.code === code;
  })[0];

  //Tealium event
  if (typeof t_book === "function") {
    t_book(obj);
  }
  var url_href =
    bookingEngine_global_data.global.pathArea.paymentPath +
    ".html" +
    f_gatherParameters() +
    "&offerCode=" +
    code +
    "&flow=tf&multi=" +
    routerSearch.multi;
  if (
    _currnOffer &&
    _currnOffer.addonInfo &&
    _currnOffer.addonInfo.length > 0 &&
    _currnOffer.addonInfo[0].addOnType === "Ticketing addons"
  ) {
    f_addonPriceAndAvailability(
      _currnOffer,
      function () {
        loading_show();
        if (typeof t_book_with_ticket === "function") {
          t_book_with_ticket(obj);
        }
        window.location.href = url_href;
      },
      false,
      null,
      function () {
        f_setStoreState("curr_errmsg", {
          code: "error_code_9000",
          errmsg: bookingEngine_global_data.global.errorArea["error_code_9000"],
        });
        window.history.back();
      }
    );
  } else {
    f_setStoreState("ticketAddon", null);
    window.location.href = url_href;
  }
}
