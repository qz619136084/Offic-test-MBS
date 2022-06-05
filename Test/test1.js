var booking_rooms_content_data;
//当前选择的房间过滤条件
var curr_filter = {
  roomtype: "",
  roomview: "",
  sort: "Asc", //排序默认从小到大
};
var curr_availableRateplans = {}; //当前选择的房间的优惠数据
var multiRoom_curr_select_index = 1;
var wasDeleteOption = false;
var cur_img_slick_index = 1;
//初始化条件
function f_filterInit() {
  curr_filter = {
    roomtype: "",
    roomview: "",
    sort: "Asc",
  };
  f_setFlitersAfterChange();
}

window.addEventListener("pageshow", f_rooms_pageshow_init, false);
$(function () {
  if (!"onpageshow" in window) {
    f_rooms_pageshow_init();
  }
});
function f_rooms_pageshow_init() {
  booking_rooms_content_data = JSON.parse(
    $("#booking_rooms_content_data").html()
  );
  if ($("#rooms_list").length > 0) {
    var storeState = f_getSessionStorage();
    if (storeState.propertyInfo) {
      f_rooms_init();
    } else {
      //获取基本信息
      f_getPropertyInfo(function (data) {
        f_rooms_init();
      });
    }
  }

  //Browser back function listener
  window.addEventListener(
    "popstate",
    function (e) {
      var index = URLCurrencyList.length;
      if (index != 0) {
        var currency = URLCurrencyList[index - 1];
        f_onCurrencyChange(currency);
        URLCurrencyList.splice(index - 1, 1);
      } /*else{
    		window.history.go(-1);
    	}*/
    },
    false
  );
}

// Browser back function
function pushHistory() {
  var state = {
    title: document.title,
    url: "#",
  };
  window.history.pushState(state, "title", "#");
}

function f_deal_roomsPage_href_parameter() {
  var storeState = f_getSessionStorage();
  var routerSearch = getRouterSearch();
  if (!routerSearch.Rooms) {
    if (isModeEdit) return false;
    else {
      f_link_to_errPage();
    }
  }
  var checkin_Date = routerSearch.CheckinDate;
  if (!checkin_Date) {
    f_setStoreState("curr_errmsg", {
      code: "error_code_4000",
      errmsg: bookingEngine_global_data.global.errorArea["error_code_4000"],
    });
    var url_href =
      bookingEngine_global_data.global.pathArea.searchPath +
      ".html?" +
      location.href.substring(location.href.lastIndexOf("?"));
    if (routerSearch.iataNumber) {
      url_href += "&iataNumber=" + routerSearch.iataNumber;
    }
    window.location.href = url_href;
    return false;
  }
  var los = routerSearch.LOS
    ? parseInt(routerSearch.LOS) > 7
      ? 7
      : parseInt(routerSearch.LOS)
    : 1;
  //初始化设置sessionStorage
  // 房间信息相关数据
  var guests = [];
  var all_adult_count = 0;
  var all_children_count = 0;
  for (var r = 1; r <= routerSearch.Rooms; r++) {
    if (
      routerSearch["Adults_" + r] === undefined ||
      routerSearch["Children_" + r] === undefined
    ) {
      f_link_to_errPage();
      return;
    } else {
      var adult_count = parseInt(routerSearch["Adults_" + r]) || 1;
      if (adult_count > storeState.propertyInfo.maxNoOfAdultsPerRoom) {
        adult_count = storeState.propertyInfo.maxNoOfAdultsPerRoom;
      }
      var children_count = parseInt(routerSearch["Children_" + r]) || 0;
      if (
        children_count >
        storeState.propertyInfo.maximumOccupancyPerRoom - adult_count
      ) {
        children_count =
          storeState.propertyInfo.maximumOccupancyPerRoom - adult_count;
      }
      all_adult_count += adult_count;
      all_children_count += children_count;
      if (
        storeState.guests &&
        storeState.guests.length > 1 &&
        storeState.guests[r - 1].adults === adult_count &&
        storeState.guests[r - 1].children === children_count &&
        storeState.guests[r - 1].selectedRoom
      ) {
        guests.push({
          children: children_count,
          adults: adult_count,
          index: r,
          selectedRoom: storeState.guests[r - 1].selectedRoom,
        });
      } else {
        guests.push({
          children: children_count,
          adults: adult_count,
          index: r,
        });
      }
    }
  }
  var offerCodeSp = routerSearch.offerCode.split("#");
  if (offerCodeSp.length > 1) {
    curr_availableRateplans.roomCode = offerCodeSp[1].substring(
      0,
      offerCodeSp[1].lastIndexOf(",")
    );
  }
  storeState.checkindate = checkin_Date;
  storeState.checkoutdate = moment(checkin_Date)
    .add(los, "d")
    .format("YYYY-MM-DD");
  storeState.los = los;
  storeState.guests = guests;
  storeState.rooms = parseInt(routerSearch.Rooms);
  storeState.adult_count = all_adult_count;
  storeState.children_count = all_children_count;
  storeState.offerCode = offerCodeSp[0] || "";
  storeState.hideCookieDialog = storeState.hideCookieDialog || false;
  storeState.currency = routerSearch.Currency || "SGD";
  storeState.allRoomList = null;
  sessionStorage.setItem("storeState", JSON.stringify(storeState));
  //Tealium Init
  if (typeof t_init === "function") {
    t_init();
  }
  return true;
}

function f_rooms_init() {
  $("#booking_information_edit").html(
    bookingEngine_global_data.global.bodyArea.edit
  );
  if (!f_deal_roomsPage_href_parameter()) {
    loading_hide();
    return false;
  }
  var storeState = f_getSessionStorage();
  $(".currency_a").html(storeState.currency);
  f_get_currency_dropdown_menu();
  //获取可用房间列表

  f_availableRooms(multiRoom_curr_select_index);
  f_set_guest_duration();
  if (storeState.curr_errmsg) {
    f_shwo_pop_Bummer(storeState.curr_errmsg.errmsg);
    if (storeState.curr_errmsg.code == "error_code_3013") {
      var guests = f_getSessionStorage().guests;
      for (var i = 0; i < guests.length; i++) {
        f_onDeleteSelectRoom(i);
      }
    }
  }
}

function f_get_currency_dropdown_menu() {
  var currencies = f_getSessionStorage().propertyInfo.supportedCurrencies;
  for (var currency = 0; currency < currencies.length; currency++) {
    $(".currency_types").append(
      "<li currency='" +
        currencies[currency].code +
        "' class='dropdown_menu_item px-10' onclick='f_onCurrencyChange(\"" +
        currencies[currency].code +
        "\",true)'> " +
        currencies[currency].code +
        "(" +
        currencies[currency].symbol +
        ") </li>"
    );
  }
}

//设置当前的日期房间信息
function f_set_guest_duration() {
  var storeState = f_getSessionStorage();
  if (storeState) {
    var guest_checkinDate = f_getDateByDifferentLanguage(
      storeState.checkindate,
      false
    );
    var guest_checkoutDate = f_getDateByDifferentLanguage(
      storeState.checkoutdate,
      false
    );
    var guest_los = storeState.los;
    var str = f_getRooms_adults_children_description(
      storeState.guests.length,
      storeState.adult_count,
      storeState.children_count
    );
    $("#guest_checkinDate").html(guest_checkinDate);
    $("#guest_checkoutDate").html(guest_checkoutDate);
    $("#guest_los").html(
      guest_los +
        " " +
        (guest_los > 1
          ? bookingEngine_global_data.global.bodyArea.nights
          : bookingEngine_global_data.global.bodyArea.night)
    );
    $("#guest_adults_children").html(str);
  }
}

//获取可用客房列表
function f_availableRooms(index, isDelayRender) {
  var storeState = f_getSessionStorage();
  var crr_guests = storeState.guests.filter(function (item) {
    return index ? item.index && !item.selectedRoom : !item.selectedRoom;
  })[0];
  var numberOfAdults = crr_guests
    ? crr_guests.adults
    : storeState.guests[storeState.guests.length - 1].adults;
  var numberOfChildren = crr_guests
    ? crr_guests.children
    : storeState.guests[storeState.guests.length - 1].children;
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
      var dataRoom = data1.data.availableRooms;
      if (dataRoom.length === 0) {
        f_err_link_to_searchPage({
          code: "error_code_4000",
          errmsg: bookingEngine_global_data.global.errorArea.error_code_4000,
        });
        return;
      }
      f_fetch(url_roomsBooked, function (data2) {
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
                room_data_insert.totalBooked + dataRoomBooked[r].totalBooked;
            }
            room_data_insert.totalBooked = totalBooked;
            room_data_insert.timeSpan = dataRoomBooked[r].timeSpan;
          }
        }
        if (
          $("#room_types_a").text() ===
            $("#room_types_a").next(".room_types li").eq(0).text() &&
          $("#room_types_a").text() ===
            $("#room_views_a").next(".room_views li").eq(0).text()
        ) {
          f_filterInit();
        } else {
          curr_filter.sort = "Asc";
          f_setFlitersAfterChange(true);
        }

        var match_data = f_match_content_roomsData(dataRoom);
        f_setStoreState("availableRooms", match_data);
        var allRoomList = storeState.allRoomList || [];
        for (var ar = 0; ar < match_data.length; ar++) {
          if ($.inArray(match_data[ar], allRoomList) < 0) {
            allRoomList.push(match_data[ar]);
          }
        }
        f_setStoreState("allRoomList", allRoomList);
        f_set_guest_duration();
        f_resetRoomFliters();
        multiRoom_curr_select_index = crr_guests
          ? crr_guests.index
          : storeState.guests[storeState.guests.length - 1].index;
        f_setMultiRoomBanner();
        if (isDelayRender) {
          window.setTimeout(function () {
            f_renderRoomList();
          }, 300);
        } else {
          f_renderRoomList();
        }
        if (curr_availableRateplans.roomCode) {
          if (
            match_data.filter(function (item) {
              return item.code === curr_availableRateplans.roomCode;
            }).length > 0
          ) {
            f_onSelectRoom(curr_availableRateplans.roomCode);
            $("body,html").animate(
              { scrollTop: $("#select_room_container").parent().offset().top },
              300
            );
          } else {
            f_shwo_pop_Bummer(
              bookingEngine_global_data.global.errorArea["error_code_3013"],
              "",
              function () {
                curr_availableRateplans = {};
              }
            );
          }
        } else {
          f_roomSelectHide();
        }
        if (storeState.guests.length > 1) curr_availableRateplans = {};
      });
    },
    function (errRes) {
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

//渲染房间
function f_renderRoomList() {
  var storeState = f_getSessionStorage();
  var data = storeState.availableRooms;
  if (curr_filter.roomtype) {
    var rooms1 = [];
    for (var r = 0; r < data.length; r++) {
      //if (data[r].roomType === curr_filter.roomtype) {
      if (data[r].roomType.indexOf(curr_filter.roomtype) > -1) {
        rooms1.push(data[r]);
      }
    }
    data = rooms1;
  }
  if (curr_filter.roomview) {
    var rooms2 = [];
    for (var r = 0; r < data.length; r++) {
      if (data[r].roomView === curr_filter.roomview) {
        rooms2.push(data[r]);
      }
    }
    data = rooms2;
  }
  var rooms3 = [];
  for (var i = 0; i < data.length; i++) {
    var roomInventory = 0;
    for (var m = 0; m < data[i].bedTypes.length; m++) {
      roomInventory += data[i].bedTypes.filter(function (item) {
        return item;
      })[m].availableRooms;
    }
    for (var j = 0; j < storeState.guests.length; j++) {
      if (storeState.guests[j].selectedRoom) {
        if (data[i].code == storeState.guests[j].selectedRoom.code) {
          roomInventory--;
        }
      }
    }
    var isEmpty = false;
    if (roomInventory > 0) {
      isEmpty = true;
    }
    if (isEmpty) {
      rooms3.push(data[i]);
    }
  }
  data = rooms3;
  $("#rooms_list").html("");
  if (data.length === 0) {
    f_showErrMassage(
      bookingEngine_global_data.global.errorArea.error_code_4000
    );
    return;
  } else {
    f_hideErrMassage();
  }
  var currency = storeState.currency;
  var symbol = f_getCurrencyInfo().symbol;
  //排序
  data = data.sort(function (a, b) {
    var aPrice = f_getRoomPriceByCurrency(a).price;
    var bPrice = f_getRoomPriceByCurrency(b).price;
    if (aPrice > bPrice) {
      return curr_filter.sort === "Asc" ? 1 : -1;
    } else if (aPrice < bPrice) {
      return curr_filter.sort === "Asc" ? -1 : 1;
    } else {
      return 0;
    }
  });
  var class_disabled_room =
    storeState.guests.filter(function (item) {
      return !item.selectedRoom;
    }).length === 0
      ? "disabled_room"
      : "";
  for (var index = 0; index < data.length; index++) {
    var bookedDescription =
      bookingEngine_global_data.global.bodyArea.bookedDescription
        .replace("{roomCount}", data[index].totalBooked)
        .replace("{hour}", data[index].timeSpan);
    var item =
      "<li>" +
      "<div class='room_card card " +
      class_disabled_room +
      "' code='" +
      data[index].code +
      "'>" +
      "<div class='row'>" +
      "<div class='room_card_left'>" +
      "<div class='row'>" +
      "<div class='room_ImagePanel'>" +
      "<div style='position: relative;cursor: pointer' onclick='f_onRoomDetail(\"" +
      data[index].code +
      "\",this)'>" +
      "<img src='" +
      data[index].largeImageUrl +
      "' />";
    if (
      data[index].roomDetail.video360 &&
      data[index].roomDetail.video360.comp360IframeUrl
    ) {
      item += ' <div class="view-tip-360"></div>';
    }
    item +=
      "</div>" +
      "</div>" +
      "<div class='room_ImageCenterPanel'>" +
      "<div class='txt-x-lg-lb txt-black-five ls-1 lh-30'>" +
      "" +
      data[index].roomType +
      " <span> - " +
      data[index].roomView +
      " </span>" +
      "</div>";
    if (data[index].totalBooked) {
      item +=
        "<dv>" +
        "<p class='bookedRoomStatsColor'> " +
        bookedDescription +
        " </p>" +
        "</dv>";
    }
    var amenitiesList = "";
    var maxAmenitiesShown = storeState.propertyInfo.maxAmenitiesShown - 1;
    for (var an = 0; an < data[index].amenities.length; an++) {
      if (an > maxAmenitiesShown) break;
      amenitiesList +=
        "<li>" +
        "<div class='serviceDiv txt-lg-lr ls-sm'>" +
        "<img class='icon_service ' src='" +
        data[index].amenities[an].thumbnailImageUrl +
        "'>" +
        data[index].amenities[an].name +
        " " +
        "</div>" +
        "</li>";
    }
    item +=
      "<div class='guestNumberDiv'>" +
      "<p class='lh-30 txt-lg-lr ls-sm txt_black'> " +
      data[index].occupancyDescription +
      " </p>" +
      "</div>" +
      "<div class='amenitiesDiv'>" +
      "<ul class='noStyleForList '>" +
      amenitiesList +
      "</ul>" +
      "</div>";
    if (!data[index].isBaseRoom) {
      item +=
        "<div class='roomBookingUpdates txt-sm-lr ls-x-sm'>" +
        bookingEngine_global_data.global.bodyArea.notBaseRoomDescription +
        "</div>";
    }
    //进行ticket的价格查验
    var min_numberOfTickets = f_ticket_needRestPice();
    var priceByCurrency = f_getRoomPriceByCurrency(data[index]);
    var discountedAveragePriceByCurrency =
      priceByCurrency.discountedAveragePriceByCurrency;
    var averagePriceByCurrency = priceByCurrency.averagePriceByCurrency;
    var price = priceByCurrency.price;
    if (
      data[index].lowestUnitAddOnPrice &&
      data[index].lowestUnitAddOnPrice.length
    ) {
      var _lowestUnitAddOnPrice = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
        data[index].lowestUnitAddOnPrice
      ).guestCurrencyUnitPrice;
      var _totalDiscountedPriceByCurrency =
        f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
          data[index].totalDiscountedPriceByCurrency
        ).guestCurrencyUnitPrice;
      var _ticketPrice = f_doFixed(
        f_doFixed(_lowestUnitAddOnPrice) * min_numberOfTickets
      );
      var _tax = f_doFixed(_totalDiscountedPriceByCurrency * 0.177);
      var res_price =
        (f_doFixed(_totalDiscountedPriceByCurrency) + _tax + _ticketPrice) /
        storeState.los;
      price = f_math_operation(res_price);
      averagePriceByCurrency = f_math_operation(
        averagePriceByCurrency +
          (_lowestUnitAddOnPrice * min_numberOfTickets) / storeState.los
      );
    }
    var roomTips = "";
    if (data[index].bedTypes.length > 1) {
      roomTips = booking_rooms_content_data.twoBedAvailableDescription;
      for (var bt = 0; bt < data[index].bedTypes.length; bt++) {
        roomTips = roomTips.replace(
          "{bedType" + (bt + 1) + "}",
          data[index].bedTypes[bt].bedTypeName
        );
      }
    } else {
      roomTips = booking_rooms_content_data.oneBedAvailableDescription.replace(
        "{bedType}",
        data[index].bedTypes[0].bedTypeName
      );
    }
    item +=
      "<div class='view_room_details_link  '>" +
      "<a class='txt-lg-lr lh-30' onclick='f_onRoomDetail(\"" +
      data[index].code +
      "\",this)'> " +
      booking_rooms_content_data.viewRoomDetailsLabel +
      "</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "<div class='room_card_right'>" +
      "<div class='row justify-content-end room_card_closeBox'>" +
      "<button class='close_button' onclick='f_roomSelectHide()'>" +
      "<span>×</span>" +
      "</button>" +
      "</div>" +
      "<div class='pricePanel '>" +
      "<div class='lh-30 ls-sm txt-lg-lr txt_black d-sm-block mr-1'>" +
      booking_rooms_content_data.fromLabel +
      "</div>";
    if (discountedAveragePriceByCurrency) {
      item +=
        "<div class=' d-sm-block'>" +
        " <span class='original_price txt-lg-lr ls-x-sm lh-24 line-through'>" +
        symbol +
        "" +
        toMoney(averagePriceByCurrency, 0) +
        "</span>" +
        " </div>";
    }

    item +=
      "<div class=' d-sm-block'>" +
      "<strong class='room_price lh-30 txt_black'>" +
      symbol +
      "" +
      toMoney(price, 0) +
      "</strong>" +
      "<span class='lh-30 ls-x-sm txt-sm-lr'>/" +
      bookingEngine_global_data.global.bodyArea.allLowerNIght +
      "</span>" +
      "</div>" +
      "<div><small>" +
      (data[index].lowestUnitAddOnPrice &&
      data[index].lowestUnitAddOnPrice.length
        ? bookingEngine_global_data.global.bodyArea.InclusiveTS
        : bookingEngine_global_data.global.bodyArea.exclusiveTS) +
      "</small></div>" +
      "<div>" +
      "<span class='ls-x-sm txt-x-sm-lr'>" +
      roomTips +
      "</span>" +
      "</div>" +
      "<div>" +
      "<span class='ls-x-sm txt-x-sm-lr'>" +
      bookingEngine_global_data.global.bodyArea.changeDescription +
      "</span>" +
      "</div>" +
      "<br>" +
      "<button class='btn mbs_button_primary' type='button' onclick='f_onSelectRoom(\"" +
      data[index].code +
      "\")'> " +
      booking_rooms_content_data.selectButtonLabel +
      "</button>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</li>";
    $("#rooms_list").append(item);
  }
  f_page_default_scrollTop();
}
function f_resetRoomFliters() {
  $(".dropdown_menu,.dropdown_toggle").bind("click", function (e) {
    stopPropagation(e);
  });
  var flitersData = f_getSessionStorage().availableRooms;
  var roomviewsList = [];
  var roomtypesList = [];
  for (var i = 0; i < flitersData.length; i++) {
    if (
      roomviewsList.filter(function (v) {
        return v.name === flitersData[i].roomView;
      }).length === 0
    ) {
      var mact_room_view = bookingEngine_global_data.roomViewList.filter(
        function (item) {
          return flitersData[i].roomView === item.name;
        }
      )[0];
      mact_room_view && roomviewsList.push(mact_room_view);
    }
    if (
      roomtypesList.filter(function (t) {
        return t.name === flitersData[i].roomType;
      }).length === 0
    ) {
      var mact_room_type = bookingEngine_global_data.roomTypeList.filter(
        function (item) {
          return flitersData[i].roomType === item.name;
        }
      )[0];
      mact_room_type && roomtypesList.push(mact_room_type);
    }
  }

  roomviewsList.sort(function (a, b) {
    return a.order - b.order;
  });
  roomtypesList.sort(function (a, b) {
    return a.order - b.order;
  });
  $(".room_views").html("");
  $(".room_types").html("");
  $(".room_views").append(
    "<li roomview='' class='dropdown_menu_item' onclick='f_onchangeRoomview(this)'> " +
      booking_rooms_content_data.allRoomViewsLabel +
      " </li>"
  );
  $(".room_types").append(
    "<li roomtype='' class='dropdown_menu_item' onclick='f_onchangeRoomtype(this)'> " +
      booking_rooms_content_data.allRoomTypesLabel +
      " </li>"
  );
  for (var views = 0; views < roomviewsList.length; views++) {
    $(".room_views").append(
      "<li roomview='" +
        roomviewsList[views].name +
        "'  class='dropdown_menu_item' onclick='f_onchangeRoomview(this)'> " +
        roomviewsList[views].name +
        " </li>"
    );
  }
  for (var types = 0; types < roomtypesList.length; types++) {
    $(".room_types").append(
      "<li roomtype='" +
        roomtypesList[types].name +
        "' class='dropdown_menu_item' onclick='f_onchangeRoomtype(this)'> " +
        roomtypesList[types].name +
        " </li>"
    );
  }
}

function f_showFilterMoible() {
  var filter_moible_pop_body =
    "<div class='filter_moible_box'>" +
    "<div class='room_filters_dropdown'>" +
    "   <a class='room_types_a dropdown_toggle dropdown_a txt_md_lb border_normal ' onclick='f_dropdown_toggle(this)'>" +
    booking_rooms_content_data.allRoomTypesLabel +
    " </a>" +
    "   <ul class='room_types dropdown_menu'> </ul>" +
    "</div>" +
    "<div class='room_filters_dropdown  pt-10'>" +
    "    <a class='room_views_a dropdown_toggle dropdown_a txt_md_lb border_normal' onclick='f_dropdown_toggle(this)'>" +
    booking_rooms_content_data.allRoomViewsLabel +
    "</a>" +
    "   <ul class='room_views dropdown_menu'> </ul>" +
    "</div>" +
    "<div class='row pt-10 d-sm-flex'>" +
    "   <div class='currency mr-auto'>" +
    "       <div class='filter_box_right_title currency_label'>" +
    booking_rooms_content_data.currencyLabel +
    "</div>" +
    "       <div class='currency_dropdown'>" +
    "           <a class='currency_a dropdown_toggle dropdown_a txt_md_lb border_normal' onclick='f_dropdown_toggle(this)'></a>" +
    "           <ul class='currency_types dropdown_menu'></ul>" +
    "       </div>" +
    "   </div>" +
    "   <div class='sort_by ml-auto mt-3' onclick='f_roomSortChange(this)'>" +
    "       <div class='filter_box_right_title'>" +
    booking_rooms_content_data.sortByLabel +
    "</div>" +
    "       <div class='filter_box_right_title' style='padding-left:16px'><b>" +
    booking_rooms_content_data.priceLabel +
    "</b></div>" +
    "       <button class='sort_by_button'>" +
    "           <i class='sort_by_arrow sort_by_arrow_dowm'></i>" +
    "       </button>" +
    "   </div>" +
    "</div>" +
    "</div>";
  var filter_moible_pop_footer =
    "<div style='width: 100%'>" +
    "<button style='margin-top: 1em' class='btn mbs_button_primary' type='button' onclick='f_onFilterMobile()'>" +
    booking_rooms_content_data.doneLabel +
    "</button>" +
    "</div>";
  f_Pop_modal_show(
    "filter_moible",
    booking_rooms_content_data.popUpTitle,
    filter_moible_pop_body,
    filter_moible_pop_footer
  );
  f_resetRoomFliters();
  f_get_currency_dropdown_menu();
  f_setFlitersAfterChange();
}

function f_setFlitersAfterChange(onlySort) {
  if (onlySort == null) {
    $(".room_views_a").html(
      curr_filter.roomview || booking_rooms_content_data.allRoomViewsLabel
    );
    $(".room_types_a").html(
      curr_filter.roomtype || booking_rooms_content_data.allRoomTypesLabel
    );
  }
  if (curr_filter.sort === "Asc") {
    $(".sort_by_arrow")
      .removeClass("sort_by_arrow_up")
      .addClass("sort_by_arrow_dowm");
  } else {
    $(".sort_by_arrow")
      .removeClass("sort_by_arrow_dowm")
      .addClass("sort_by_arrow_up");
  }
  $(".currency_a").html(f_getSessionStorage().currency);
}
function f_onFilterMobile() {
  f_renderRoomList();
  f_setPriceByCurrency($("#filter_moible").find(".currency_a ").html());
  f_Pop_modal_hide();
  f_setFlitersAfterChange();
}
//roomview过滤
function f_onchangeRoomview(obj) {
  var roomview = $(obj).attr("roomview");
  $(".room_views_a").html(
    roomview || booking_rooms_content_data.allRoomViewsLabel
  );
  f_all_dropdown_menu_hide();
  curr_filter.roomview = roomview;
  if ($(window).width() >= 768) {
    f_renderRoomList();
  }
  if (typeof t_selectVieworType === "function") {
    t_selectVieworType();
  }
}
//roomtype过滤
function f_onchangeRoomtype(obj) {
  var roomtype = $(obj).attr("roomtype");
  $(".room_types_a ").html(
    roomtype || booking_rooms_content_data.allRoomTypesLabel
  );
  f_all_dropdown_menu_hide();
  curr_filter.roomtype = roomtype;
  if ($(window).width() >= 768) {
    f_renderRoomList();
  }
  if (typeof t_selectVieworType === "function") {
    t_selectVieworType();
  }
}
//排序
function f_roomSortChange(obj) {
  var sortLi = $(obj).find(".sort_by_arrow");
  if (sortLi.hasClass("sort_by_arrow_up")) {
    sortLi.removeClass("sort_by_arrow_up").addClass("sort_by_arrow_dowm");
  } else {
    sortLi.removeClass("sort_by_arrow_dowm").addClass("sort_by_arrow_up");
  }
  curr_filter.sort = curr_filter.sort === "Asc" ? "Desc" : "Asc";
  if ($(window).width() >= 768) {
    f_renderRoomList();
  }
  if (typeof t_sort === "function") {
    t_sort();
  }
}
var URLCurrencyList = [];
//改变币种
function f_onCurrencyChange(this_currency, isSet) {
  var storeState = f_getSessionStorage();
  if (storeState.currency != this_currency && isSet) {
    URLCurrencyList.push(storeState.currency);
    pushHistory();
  }

  $(".currency_a").html(this_currency);
  f_all_dropdown_menu_hide();
  if ($(window).width() >= 768) {
    f_setPriceByCurrency(this_currency);
  }
  //Tealium event
  if (typeof t_roomsCurrency === "function") {
    t_roomsCurrency(this_currency);
  }
  //    f_setStoreState("utag_data", utag_data);
}

//根据币种改变金额
function f_setPriceByCurrency(currency) {
  var storeState = f_getSessionStorage();
  f_setStoreState("currency", currency);
  var availableRooms = storeState.availableRooms;
  var symbol = f_getCurrencyInfo().symbol;
  $(".room_card").each(function (index) {
    var min_numberOfTickets = f_ticket_needRestPice();
    var code = $(this).attr("code");
    var crr_room = availableRooms.filter(function (room) {
      return room.code === code;
    })[0];
    var priceByCurrency = f_getRoomPriceByCurrency(crr_room);
    var discountedAveragePriceByCurrency =
      priceByCurrency.discountedAveragePriceByCurrency;
    var averagePriceByCurrency = priceByCurrency.averagePriceByCurrency;
    var price = priceByCurrency.price;
    if (crr_room.lowestUnitAddOnPrice && crr_room.lowestUnitAddOnPrice.length) {
      var _lowestUnitAddOnPrice = f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
        crr_room.lowestUnitAddOnPrice
      ).guestCurrencyUnitPrice;
      var _totalDiscountedPriceByCurrency =
        f_BE_get_unitPrice_and_guestCurrencyUnitPrice(
          crr_room.totalDiscountedPriceByCurrency
        ).guestCurrencyUnitPrice;
      var _ticketPrice = f_doFixed(
        f_doFixed(_lowestUnitAddOnPrice) * min_numberOfTickets
      );
      var _tax = f_doFixed(_totalDiscountedPriceByCurrency * 0.177);
      var res_price =
        (f_doFixed(_totalDiscountedPriceByCurrency) + _tax + _ticketPrice) /
        storeState.los;
      price = f_math_operation(res_price);
      averagePriceByCurrency = f_math_operation(
        averagePriceByCurrency +
          (_lowestUnitAddOnPrice * min_numberOfTickets) / storeState.los
      );
    }
    $(this)
      .find(".room_price")
      .html(symbol + toMoney(price, 0));
    if (discountedAveragePriceByCurrency) {
      $(this)
        .find(".original_price")
        .html(symbol + toMoney(averagePriceByCurrency, 0));
    }
  });
  $("#curr_roomcode")
    .find(".packageList_item")
    .each(function () {
      var curr_offerCode = $(this).attr("offerCode");
      var _curr_offer = curr_availableRateplans.offerList.filter(function (
        item
      ) {
        return item.code === curr_offerCode;
      })[0];
      var offer_priceArr = _curr_offer.rooms[0];
      var offer_priceByCurrency = f_getRoomPriceByCurrency(offer_priceArr);
      var price = offer_priceByCurrency.price;
      var averagePriceByCurrency = f_doFixed(
        offer_priceByCurrency.averagePriceByCurrency
      );
      if (
        _curr_offer.addonInfo &&
        _curr_offer.addonInfo.length &&
        _curr_offer.addonInfo[0].addOnType === "Ticketing addons"
      ) {
        var _totalPrice = f_getPriceInfoForTicket(_curr_offer, 0).total;
        price = f_doFixed(_totalPrice / storeState.los);
      }
      $(this)
        .find(".packagePrice")
        .html(symbol + toMoney(price));
      $(this)
        .find(".original_price ")
        .html(symbol + toMoney(averagePriceByCurrency));
    });
  var url_parameter = ""; //;
  var routerSearch = getRouterSearch();
  $.each(routerSearch, function (key, value) {
    //arrTmp数组数据
    url_parameter +=
      (url_parameter ? "&" : "?") +
      key +
      "=" +
      (key === "Currency" ? currency : value);
  });
  window.history.pushState({ status: 0 }, "", url_parameter);
  var pageStepUrl = storeState.pageStepUrl;
  pageStepUrl["step2"] = window.location.href;
  f_setStoreState("pageStepUrl", pageStepUrl);
}

//房间详情
function f_onRoomDetail(code, obj) {
  var VideoViewDescriptionDesktop360 =
    bookingEngine_global_data.global.bodyArea["360VideoViewDescriptionDesktop"];
  var VideoViewDescriptionMobile360 =
    bookingEngine_global_data.global.bodyArea["360VideoViewDescriptionMobile"];
  var ViewLabel360 = bookingEngine_global_data.global.bodyArea["360ViewLabel"];
  var videoViewDescription =
    screen.width > 768
      ? VideoViewDescriptionDesktop360
      : VideoViewDescriptionMobile360;

  var roomData = f_getSessionStorage().availableRooms.filter(function (item) {
    return item.code === code;
  })[0];
  var imageUrls = roomData.roomDetail.images || [];
  var video360 = roomData.roomDetail.video360;
  if (video360) {
    imageUrls.unshift({
      thumbnailImage: video360.image,
      largeImage: video360.image,
      comp360IframeUrl: video360.comp360IframeUrl || "",
      alt: video360.alt,
    });
  }
  var slick_slider_button_prev =
    imageUrls.length >= 4
      ? "<button class='slick_slider_button slick_slider_button_prev ' onclick='f_onSliderPrev(" +
        imageUrls.length +
        ")'><img src='/static/marinabaysands/bookinglibs/images/left.svg' /></button>"
      : "";
  var slick_slider_button_next =
    imageUrls.length >= 4
      ? "<button class='slick_slider_button slick_slider_button_next' onclick='f_onSliderNext(" +
        imageUrls.length +
        ")'><img src='/static/marinabaysands/bookinglibs/images/right-circle.svg' /></button>"
      : "";
  var pop_modal_body =
    "<div class='lightbox_contents row'>" +
    "<div class='details_left_panel'>" +
    "   <div id='roomLargeImage' class='roomLargeImage'></div>" +
    "   <div class='slick_slider'>" +
    slick_slider_button_prev +
    "       <div id='slick_list' class='slick_list'>" +
    "           <div id='slick_track' class='slick_track'></div>" +
    "       </div>" +
    slick_slider_button_next +
    "   </div>" +
    "</div>" +
    "<div id='details_right_panel' class='details_right_panel'></div>" +
    "</div>";
  f_Pop_modal_show(
    "view_room_details",
    roomData.roomType + "&nbsp;" + roomData.roomView,
    pop_modal_body
  );
  window.setTimeout(function () {
    $("#slick_track").css({ transform: "translate3d(0px, 0px, 0px)" });
    var _largeImageHtml =
      "<img  style='display: " +
      (imageUrls[0].comp360IframeUrl ? "none" : "block") +
      "' class='roomSelectedImage' src='" +
      imageUrls[0].largeImage +
      "'/>";
    if (imageUrls[0].comp360IframeUrl) {
      _largeImageHtml +=
        "<div id='viewWrap360' class='view-wrap-360'>" +
        "   <iframe src='" +
        imageUrls[0].comp360IframeUrl +
        '\' allowtransparency="true" class="harako_embed" name="harako_embed" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"  msallowfullscreen="true" id="harako_5" frameborder="0"></iframe>' +
        "   <div class='harako_control_board show'>" +
        "       <i>" +
        videoViewDescription +
        "</i>" +
        "   </div>" +
        "   <div id='close360' class='slideExpander'><div  class='slideExpanderBox'><div>×</div></div></div>" +
        "</div>";
    }
    $("#roomLargeImage").append(_largeImageHtml);
    var _harako_thumb_html =
      '<i class="harako_thumb_text"><span>' + ViewLabel360 + "</span></i>";
    if (imageUrls.length >= 4) {
      for (var i = imageUrls.length - 3; i < imageUrls.length; i++) {
        var _harako_thumb = "";
        if (imageUrls[i].comp360IframeUrl) {
          _harako_thumb = _harako_thumb_html;
        }
        $("#slick_track").append(
          "<div index='-" +
            i +
            "'  class='slick_slide_item' imgIndex='" +
            i +
            "'><img style='opacity: 1' class='slider_image' src='" +
            imageUrls[i].largeImage +
            "' />" +
            _harako_thumb +
            "</div>"
        );
      }
      $("#slick_track").append("<div class='slick_slide_item'></div>");
    }
    for (var img = 0; img < imageUrls.length; img++) {
      var _harako_thumb = "";
      if (imageUrls[img].comp360IframeUrl) {
        _harako_thumb = _harako_thumb_html;
      }
      var opacity = img === 0 ? 0.4 : 1;
      $("#slick_track").append(
        "<div index='" +
          (img + 1) +
          "' class='slick_slide_item' imgIndex='" +
          img +
          "'><img style='opacity: " +
          opacity +
          "' class='slider_image' src='" +
          imageUrls[img].largeImage +
          "'  />" +
          _harako_thumb +
          "</div>"
      );
    }
    $("#slick_track").append("<div class='slick_slide_item'></div>");
    if (imageUrls.length >= 4) {
      for (var img = 0; img < imageUrls.length; img++) {
        var _harako_thumb = "";
        if (imageUrls[img].comp360IframeUrl) {
          _harako_thumb = _harako_thumb_html;
        }
        $("#slick_track").append(
          "<div index='" +
            (img + 1) +
            "' class='slick_slide_item' imgIndex='" +
            img +
            "'><img style='opacity: 1' class='slider_image' src='" +
            imageUrls[img].largeImage +
            "' />" +
            _harako_thumb +
            "</div>"
        );
      }
      $("#slick_track").append("<div class='slick_slide_item'></div>");
    }
    set_slick_slide_item_width(imageUrls.length);
    for (var index = 0; index < roomData.roomDetail.features.length; index++) {
      f_renderFeatures(
        roomData.roomDetail.features[index].title,
        roomData.roomDetail.features[index].contentList,
        parseInt(index) === 0
      );
    }
    $(".slick_slide_item").bind("click touchend", function () {
      $(".slider_image").css("opacity", "1");
      $(this).find(".slider_image").css("opacity", "0.4");
      var currImg = imageUrls[parseInt($(this).attr("imgindex"))];
      if (currImg.comp360IframeUrl) {
        $("#roomLargeImage").find(".view-wrap-360").show();
        $("#roomLargeImage").find(".roomSelectedImage").hide();
      } else {
        if ($("#roomLargeImage").find(".view-wrap-360").length) {
          $("#roomLargeImage").find(".view-wrap-360").hide();
        }
        $("#roomLargeImage").find(".roomSelectedImage").show();
        $("#roomLargeImage")
          .find(".roomSelectedImage")
          .attr("src", currImg.largeImage);
      }
    });
    $(".harako_control_board").click(function () {
      $(this).hide();
      if (screen.width < 890) {
        // f_openFullscreen(document.getElementById('viewWrap360'));
        $(".modal_container").scrollTop(0);
        $(
          "#view_room_details .modal_body,#view_room_details .modal_content"
        ).css({ position: "initial" });
        $("#view_room_details .modal_dialog").css({ position: "absolute" });
        $("#viewWrap360").addClass("viewWrap360Fullscreen");
        $(".view-wrap-360 .slideExpander").show();
        $("#view_room_details .modal_dialog ").removeClass("fadeShow");
        $(".modal_container").css("overflow-y", "hidden");
      }
    });
    $("#close360").click(function () {
      $(".harako_control_board").show();
      $(".view-wrap-360 .slideExpander").hide();
      $(
        "#view_room_details .modal_body,#view_room_details .modal_content,#view_room_details .modal_dialog"
      ).css({ position: "relative" });
      $("#viewWrap360").removeClass("viewWrap360Fullscreen");
      $("#view_room_details .modal_dialog ").addClass("fadeShow");
      $(".modal_container").css("overflow-y", "auto");
    });
    cur_img_slick_index = 1;
    $("#slick_track").swipe(function (direction) {
      if (direction === "left") {
        f_onSliderNext(imageUrls.length);
      } else if (direction === "right") {
        f_onSliderPrev(imageUrls.length);
      }
    });
    $(window).resize(function () {
      set_slick_slide_item_width(imageUrls.length);
    });
  }, 150);

  //Tealium event
  if (typeof t_roomDetail === "function") {
    t_roomDetail(obj);
  }
}

function set_slick_slide_item_width(imageUrlsLeng) {
  $(".slick_slide_item").css("width", $("#slick_list").width() / 4);
  var l = 4 + (imageUrlsLeng + 1) * (imageUrlsLeng < 4 ? 1 : 2);
  $("#slick_track").css(
    "width",
    l * parseInt($(".slick_slide_item").css("width"))
  );
  $("#slick_track").css({
    transform:
      "translate3d(" +
      -4 * parseInt($(".slick_slide_item").css("width")) +
      "px, 0px, 0px)",
  });
  cur_img_slick_index = 1;
  if ($(".slider_image").length > 0) {
    var _h = $(".slider_image").get(0).height;
    var _w = $(".slider_image").get(0).width;
    $("#viewWrap360").css(
      "height",
      $("#roomLargeImage").width() * (_h / _w) - 1
    );
  }
}

function f_renderFeatures(lable, data, isfirst) {
  var display = isfirst ? "block" : "none";
  var classAccordionArrow = isfirst ? "fa-angle-up" : "fa-angle-down";
  var li = "";
  for (var index = 0; index < data.length; index++) {
    li +=
      "<li class='ls-sm txt-lg-lr lh-26 circle_bullet'> " +
      data[index] +
      " </li>";
  }
  var res =
    "<div >" +
    "<div class='accordion_card'>" +
    "  <div class='accordion_card_header' onclick='f_onAccordion(this)'>" +
    " <div class='accordion_card_title lh-30 ls-sm txt-lg-lb  '> " +
    lable +
    " <i class='pull-right glyphicon fa fa-angle-up " +
    classAccordionArrow +
    "'></i></div>" +
    " </div>" +
    "<div class='accordion_item' style='display:" +
    display +
    "'>" +
    "<div class='accordion_item_body'>" +
    "<ul>" +
    li +
    " </ul>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";
  $("#details_right_panel").append(res);
}
function f_onAccordion(obj) {
  var thisAccordion_item = $(obj).parent().find(".accordion_item");
  if (thisAccordion_item.is(":hidden")) {
    $(".accordion_item").hide();
    thisAccordion_item.show();
    $(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    $(obj).find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
  } else {
    $(".accordion_item").hide();
    $(obj).find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
  }
}

function f_onSliderNext(imageUrls_length) {
  var slick_slide_item = $(".slick_slide_item");
  var movePre = 0;
  if (imageUrls_length + 1 - cur_img_slick_index >= 8) {
    movePre = 4;
    cur_img_slick_index += movePre;
  } else {
    if (imageUrls_length + 1 - cur_img_slick_index < 4) {
      movePre = 4;
      cur_img_slick_index = 1;
    } else {
      movePre = imageUrls_length + 1 - cur_img_slick_index - 3;
      cur_img_slick_index += movePre;
    }
  }
  var tranLeft =
    parseInt($("#slick_track").position().left) -
    parseInt(slick_slide_item.width()) * movePre;
  $("#slick_track").css({
    transform: "translate3d(" + tranLeft + "px, 0px, 0px)",
    "transition-duration": "0.5s",
  });
  if (cur_img_slick_index === 1) {
    window.setTimeout(function () {
      $("#slick_track").css({
        transform:
          "translate3d(" + -(4 * slick_slide_item.width()) + "px, 0px, 0px)",
        "transition-duration": "0s",
      });
    }, 500);
  }
}

/////////////////////////////////////////////////////////////////
function f_onSliderPrev(imageUrls_length) {
  var slick_slide_item = $(".slick_slide_item");
  var movePre = 0;
  if (cur_img_slick_index === 1) {
    movePre = 4;
  } else {
    if (imageUrls_length + 1 - cur_img_slick_index < 4) {
      movePre = (cur_img_slick_index - 1) % 4 || 4;
    } else {
      movePre = 4;
    }
  }
  var tranLeft =
    parseInt(slick_slide_item.width()) * movePre +
    parseInt($("#slick_track").position().left);
  console.log(movePre, tranLeft);
  $("#slick_track").css({
    transform: "translate3d(" + tranLeft + "px, 0px, 0px)",
    "transition-duration": "0.5s",
  });
  if (cur_img_slick_index === 1) {
    cur_img_slick_index = imageUrls_length + 1 - 3;
    window.setTimeout(function () {
      $("#slick_track").css({
        transform:
          "translate3d(" +
          -((4 + cur_img_slick_index - 1) * slick_slide_item.width()) +
          "px, 0px, 0px)",
        "transition-duration": "0s",
      });
    }, 500);
  } else {
    cur_img_slick_index -= movePre;
  }
}

////////////////////////////////////////////////////////

function f_onSelectRoom(code) {
  var thisCodeDom = $(".room_card[code='" + code + "']");
  $(".room_card").addClass("disabled_room");
  thisCodeDom.removeClass("disabled_room");
  thisCodeDom.find(".room_card_closeBox").show();
  thisCodeDom.find(".pricePanel ").hide();
  var storeState = f_getSessionStorage();
  var _room = storeState.availableRooms.filter(function (i) {
    return i.code === code;
  })[0];
  var bedTypes = _room.bedTypes;
  var bedItem = "";
  for (var index = 0; index < bedTypes.length; index++) {
    var availableRooms = bedTypes[index].availableRooms;
    for (var j = 0; j < storeState.guests.length; j++) {
      if (storeState.guests[j].selectedRoom) {
        if (
          bedTypes[index].roomCode == storeState.guests[j].selectedRoom.roomCode
        ) {
          availableRooms = availableRooms - 1;
        }
      }
    }

    if (availableRooms > 0) {
      var style1 =
        _room.defaultBedType === bedTypes[index].bedTypeCode
          ? "radio_div_select"
          : "";
      bedItem +=
        "<div>" +
        "<div bedTypeCode='" +
        bedTypes[index].bedTypeCode +
        "'  class='radio_div  " +
        style1 +
        "' onclick='f_roomTypeChecked(this,\"" +
        bedTypes[index].roomCode +
        "\")'>" +
        "<div class=' radio_div_head lh-30'>" +
        "<span class='checkmark'></span>" +
        "<span class='txt-lg-lb ls-1'>" +
        bedTypes[index].bedTypeName +
        "</span>" +
        "</div>" +
        "<div class='radio_div_beds'>" +
        "<span>" +
        "<img src='" +
        bedTypes[index].bedTypeImageURL +
        "'>" +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
  }
  var bedsTypeDom =
    "<div id='select_room_container' class='select_room_container row'>" +
    "<div style='width:100%'>" +
    "<div class='viewRoomDetail'>" +
    "<div id='room_bed_" +
    code +
    "'>" +
    "<div class='room_bed_Box'>" +
    "<h5 class='txt-x-lg-lb'>" +
    booking_rooms_content_data.chooseBedTypeLabel +
    "</h5>" +
    "<div class='row '>" +
    bedItem;
  var selectIndex;
  if (storeState.guests.length > 1) {
    var roomNotSelect = storeState.guests.filter(function (i) {
      return !i.selectedRoom && i.index === multiRoom_curr_select_index;
    })[0];
    selectIndex = roomNotSelect.index;
    var str = f_getRooms_adults_children_description(
      "",
      roomNotSelect.adults | "",
      roomNotSelect.children || ""
    );
    bedsTypeDom +=
      "<div class= 'multiroom_book flex_center p-0'>" +
      "<div class= 'multiroom_book_inner '>" +
      "<div>" +
      "<button class= 'btn mbs_button_primary ' type= 'button' onclick= 'f_selectMultiRoom(this," +
      (roomNotSelect.index - 1) +
      ',"' +
      code +
      "\")'> " +
      booking_rooms_content_data.bookButton.ctaText +
      "</button>" +
      "</div>" +
      "<div>" +
      "<small>" +
      "<b>" +
      bookingEngine_global_data.global.bodyArea.room +
      " " +
      roomNotSelect.index +
      ":</b>" +
      "<span>&nbsp;" +
      str +
      "</span>" +
      "</small>" +
      " </div>" +
      "</div>" +
      "</div>";
  }
  bedsTypeDom += "</div></div></div></div></div></div>";
  thisCodeDom.append(bedsTypeDom);
  if (storeState.guests.length === 1) {
    var _roomcode = bedTypes.filter(function (_item) {
      return _item.bedTypeCode === _room.defaultBedType;
    })[0].roomCode;
    f_getRoomPackage(_roomcode);
  }
  curr_availableRateplans.roomCode = code;

  //update utag_data and store it to the session storage
  var storeState = f_getSessionStorage();
  var room = storeState.availableRooms.filter(function (i) {
    return i.code === code;
  })[0];
  var room_sub_types = [];
  room_sub_types.push(room.roomType + " - " + room.roomView);
  var room_types = [];
  room_types.push(room.roomType);
  var room_view_type = [];
  room_view_type.push(room.roomView);
  var room_types_sub = [];
  room_types_sub.push(room.roomType);
  //Tealium event
  if (typeof t_onSelectRoom === "function") {
    t_onSelectRoom(
      room_view_type,
      room_types_sub,
      room_sub_types,
      code,
      selectIndex
    );
  }
}

function f_getRoomPackage(roomcode) {
  var storeState = f_getSessionStorage();
  var roomIndex = 0;
  var roomOccupancy =
    roomcode +
    ":" +
    1 +
    ":" +
    storeState.guests[roomIndex].adults +
    ":" +
    storeState.guests[roomIndex].children;
  var url =
    url_availableRateplans +
    "roomCode=" +
    roomcode +
    "&arrivalDate=" +
    storeState.checkindate +
    "&departureDate=" +
    storeState.checkoutdate +
    "&offerCode=" +
    storeState.offerCode +
    "&roomOccupancy=" +
    roomOccupancy;
  f_fetch(
    url,
    function (data) {
      $(".package_box").remove();
      curr_availableRateplans.offerList = f_get_Offer_From_contentAPI(
        data.data
      );
      var lis = "";
      var symbol = f_getCurrencyInfo().symbol;
      for (var i = 0; i < curr_availableRateplans.offerList.length; i++) {
        var priceByCurrency = f_getRoomPriceByCurrency(
          curr_availableRateplans.offerList[i].rooms[0]
        );
        var discountedAveragePriceByCurrency =
          priceByCurrency.discountedAveragePriceByCurrency;
        var price = f_doFixed(priceByCurrency.price);
        var averagePriceByCurrency = Number(
          priceByCurrency.averagePriceByCurrency.toFixed(2)
        );
        var offerCode = curr_availableRateplans.offerList[i].code;
        if (
          curr_availableRateplans.offerList[i].addonInfo &&
          curr_availableRateplans.offerList[i].addonInfo.length &&
          curr_availableRateplans.offerList[i].addonInfo[0].addOnType ===
            "Ticketing addons"
        ) {
          var _totalPrice = f_getPriceInfoForTicket(
            curr_availableRateplans.offerList[i],
            0
          ).total;
          price = f_doFixed(_totalPrice / storeState.los);
        }
        lis +=
          "<li>" +
          "<div class='packageList_item row' offerCode='" +
          offerCode +
          "'>" +
          "<div class='txt-lg-lb ls-1 packageList_item_title'>" +
          curr_availableRateplans.offerList[i].name +
          "</div>" +
          "<div class=' packageList_item_description'>" +
          "<div class='txt-lg-lr ls-1'>" +
          curr_availableRateplans.offerList[i].description +
          "</div>" +
          "<a class='txt-lg-lr ls-1 packageDetailLink' onclick='f_onPackageDetail(\"" +
          offerCode +
          "\")'>" +
          booking_rooms_content_data.viewDetailsLabel +
          "</a>" +
          "</div>" +
          "<div class='packageList_item_pricing row'>" +
          "<div class='mr-auto px-0'>";
        if (discountedAveragePriceByCurrency) {
          lis +=
            "<div class=' d-sm-block'>" +
            " <span class='original_price txt-lg-lr ls-x-sm lh-24 line-through'>" +
            symbol +
            "" +
            toMoney(averagePriceByCurrency) +
            "</span>" +
            " </div>";
        }
        lis +=
          "<div>" +
          "<strong  class='txt-x-lg-lb ls-1 packagePrice'>" +
          symbol +
          toMoney(price) +
          "</strong>" +
          "<span class='txt-sm-lr ls-x-sm'>" +
          bookingEngine_global_data.global.bodyArea.avgNight +
          "</span>" +
          "<div class='shapeborder' onclick='f_showPackagePrice(this,\"" +
          offerCode +
          "\")'>i</div>" +
          "</div>" +
          "<div><small>" +
          (curr_availableRateplans.offerList[i].lowestUnitAddOnPrice &&
          curr_availableRateplans.offerList[i].lowestUnitAddOnPrice.length
            ? bookingEngine_global_data.global.bodyArea.InclusiveTS
            : bookingEngine_global_data.global.bodyArea.exclusiveTS) +
          "</small></div>" +
          "<div class='cancellationPolicy txt-x-sm-lr " +
          (curr_availableRateplans.offerList[i].noCancellationDate
            ? "freeCancellation"
            : "") +
          "' onclick='f_cancellationPolicy(this,\"" +
          curr_availableRateplans.offerList[i].policyCode +
          "\")'> " +
          (curr_availableRateplans.offerList[i].noCancellationDate
            ? bookingEngine_global_data.global.bodyArea.freeCancellation
            : bookingEngine_global_data.global.bodyArea.cancellationPolicy) +
          " </div>" +
          " </div>" +
          "<div class='p-0 book_buttom'>" +
          "<button class='btn mbs_button_primary' type='button' onclick='f_ChoosePackage(this,\"" +
          offerCode +
          "\")'>" +
          booking_rooms_content_data.bookButton.ctaText +
          "</button>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</li>";
      }
      var packageDom =
        "<div id='curr_roomcode' class='package_box' curr_roomCode=" +
        roomcode +
        ">" +
        "<h5 class='txt-x-lg-lb'>" +
        booking_rooms_content_data.chooseAPackageLabel +
        "</h5>" +
        "<div>" +
        "<ul class='packageList'>" +
        lis +
        "</ul>" +
        "</div>" +
        "</div>";
      $(".room_bed_Box").after(packageDom);
      //阻止事件冒泡
      $(".cancellationPolicy,.shapeborder").bind("click", function (e) {
        stopPropagation(e);
      });
    },
    function () {
      f_shwo_pop_Bummer(
        bookingEngine_global_data.global.errorArea["error_code_3013"]
      );
    }
  );
}

function f_roomSelectHide() {
  curr_availableRateplans = {};
  var guests = f_getSessionStorage().guests;
  var roomNotSelect = guests
    ? guests.filter(function (i) {
        return !i.selectedRoom;
      })[0]
    : true;
  if (roomNotSelect) {
    $(".room_card").removeClass("disabled_room");
  } else {
    $(".room_card").addClass("disabled_room");
  }
  $(".room_card_closeBox").hide();
  $(".select_room_container").remove();
  $(".pricePanel ").show();
}

function f_onPackageDetail(code) {
  var offerData = curr_availableRateplans.offerList.filter(function (item) {
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
  if (bookingEngine_global_data.global.bodyArea.tnCApply) {
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
  if (typeof t_viewOfferDetail === "function") {
    t_viewOfferDetail(code);
  }
}

function f_showPackagePrice(obj, code) {
  var _crrr_offer = curr_availableRateplans.offerList.filter(function (i) {
    return i.code === code;
  })[0];
  var rooms = _crrr_offer.rooms[0];
  var currency = f_getSessionStorage().currency;
  var contentHtml = "";
  var priceAdd = 0;
  var _priceRes =
    _crrr_offer.addonInfo &&
    _crrr_offer.addonInfo.length &&
    _crrr_offer.addonInfo[0].addOnType === "Ticketing addons"
      ? f_getPriceInfoForTicket(_crrr_offer, 0)
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

    var priceDate = f_convert_lowercase(
      f_getDateByDifferentLanguage(rooms.nightlyPrices[i].effectiveDate, true)
    );
    contentHtml +=
      "<div class='lh-1-5'><div class='row'>" +
      "<div class='txt-sm-lr txt-black-three ls-x-sm mr-auto'>" +
      priceDate +
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
      "<div class='txt-sm-lr txt-black-three ls-x-sm mr-auto'style='text-align: left;'>" +
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

function f_roomTypeChecked(obj, roomCode) {
  if (
    f_getSessionStorage().guests.length === 1 &&
    !$(obj).hasClass("radio_div_select")
  ) {
    f_getRoomPackage(roomCode);
  }
  $(".radio_div").removeClass("radio_div_select");
  $(obj).addClass("radio_div_select");
}

function f_getRommSelect(roomGuests) {
  var rooms = [];
  for (var i = 0; i < roomGuests.length; i++) {
    if (roomGuests[i].selectedRoom) {
      rooms.push(roomGuests[i]);
    }
  }
  return rooms;
}

//设置MultiRoomBanner
function f_setMultiRoomBanner() {
  $("#multiRoomBanner_outlet").html("");
  var guests = f_getSessionStorage().guests;
  if (guests.length > 1) {
    $("#multiRoomBanner").show();
    //当前已经选择的房间
    var roomSelectedArr = f_getRommSelect(guests);
    //第一个未选择的房间
    var roomNotSelect = guests.filter(function (i) {
      return !i.selectedRoom && i.index === multiRoom_curr_select_index;
    })[0];
    var insertHtml = "";
    var str = "";
    var styleCard = wasDeleteOption
      ? "banner_card_outlet row"
      : "banner_display";
    var styleCardContent = wasDeleteOption ? "reselection" : "";
    if (roomSelectedArr.length === 0) {
      str = f_getRooms_adults_children_description(
        "",
        roomNotSelect.adults || "",
        roomNotSelect.children || ""
      );
      insertHtml =
        "<div class='" +
        styleCard +
        "'>" +
        "<div class='card " +
        styleCardContent +
        "'>" +
        "<div><b>" +
        booking_rooms_content_data.selectRoomLabel +
        " " +
        roomNotSelect.index +
        "</b></div>" +
        "<div><span>" +
        str +
        "</span></div>" +
        "</div>" +
        "</div>";
    } else {
      for (var i = 0; i < roomSelectedArr.length; i++) {
        str = f_getRooms_adults_children_description(
          "",
          roomSelectedArr[i].adults,
          roomSelectedArr[i].children
        );
        insertHtml +=
          "<div class='banner_card_outlet row'>" +
          "<div class='card banner_card'>" +
          "<div class='v1'>" +
          "<div class='row'>" +
          "<div class='banner_card_title'><b>" +
          roomSelectedArr[i].selectedRoom.roomName +
          "</b></div>" +
          "<div class='ml-auto'>" +
          "<button class='close justify-content-end' type='button' onclick='f_onDeleteSelectRoom(" +
          (roomSelectedArr[i].index - 1) +
          ")'><span>×</span></button>" +
          "</div>" +
          "</div>" +
          "<div>" +
          "<small> " +
          roomSelectedArr[i].selectedRoom.bedTypeName +
          " | " +
          bookingEngine_global_data.global.bodyArea.room +
          " " +
          roomSelectedArr[i].index +
          ": " +
          str +
          " </small>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      }
      if (roomNotSelect) {
        str = f_getRooms_adults_children_description(
          "",
          roomNotSelect.adults,
          roomNotSelect.children
        );
        insertHtml +=
          "<div class='" +
          styleCard +
          "'>" +
          "<div class='card " +
          styleCardContent +
          "'>" +
          "<div><b>" +
          booking_rooms_content_data.selectRoomLabel +
          " " +
          roomNotSelect.index +
          "</b></div>" +
          "<div><span>" +
          str +
          "</span></div>" +
          "</div>" +
          "</div>";
        $("body,html").animate(
          { scrollTop: $("#booking_page_step_container").offset().top },
          300
        );
      } else {
        insertHtml +=
          "<div class='multiRoomBanner_buttom'>" +
          "<button class='btn mbs_button_primary' type='button' onclick='f_checkGuestSelectRoom()'> " +
          booking_rooms_content_data.viewAvailableOffersButton.ctaText +
          " </button>" +
          "</div>";
        $("body,html").animate(
          { scrollTop: $("#multiRoomBanner").offset().top },
          300
        );
      }
    }
    $("#multiRoomBanner_outlet").append(insertHtml);
  } else {
    $("#multiRoomBanner").hide();
  }
}

function f_selectMultiRoom(obj, roomIndex, code) {
  var storeState = f_getSessionStorage();
  var rooms = storeState.availableRooms.filter(function (i) {
    return i.code === code;
  })[0];
  var bedTypeCode = $(obj)
    .parent()
    .parent()
    .parent()
    .parent()
    .find(".radio_div_select")
    .attr("bedtypecode");
  var guests = storeState.guests;
  var selectedRoom = rooms.bedTypes.filter(function (b) {
    return b.bedTypeCode === bedTypeCode;
  })[0];
  selectedRoom.code = code;
  selectedRoom.roomType = rooms.roomType;
  selectedRoom.roomView = rooms.roomView;
  selectedRoom.roomName = rooms.roomType + " - " + rooms.roomView;
  selectedRoom.roomImg = rooms.largeImageUrl;
  guests[roomIndex].selectedRoom = selectedRoom;
  f_setStoreState("guests", guests);
  //查找当前顺序下的下一个没有选择的房间，如果找不到该数据，则获取当前第一个没有选择的数据
  curr_availableRateplans = {};
  var noSelectRoom = guests.filter(function (item) {
    return !item.selectedRoom && item.index > roomIndex;
  })[0];
  if (!noSelectRoom) {
    noSelectRoom = guests.filter(function (item) {
      return !item.selectedRoom;
    })[0];
  }
  var noSelectIndex = noSelectRoom ? noSelectRoom.index : 1;
  if (
    guests.filter(function (i) {
      return !i.selectedRoom;
    }).length === 0
  ) {
    multiRoom_curr_select_index = noSelectIndex;
    f_setMultiRoomBanner();
    f_roomSelectHide();
  } else f_availableRooms(noSelectIndex, true);

  //Tealium event
  if (typeof t_multiBook === "function") {
    t_multiBook(roomIndex, selectedRoom.roomCode);
  }
}

function f_ChoosePackage(obj, offerCode) {
  var storeState = f_getSessionStorage();
  var code = $(obj).parents(".room_card").attr("code");
  loading_show();
  var rooms = storeState.availableRooms.filter(function (i) {
    return i.code === code;
  })[0];
  var bedTypeCode = $(".radio_div_select").attr("bedtypecode");
  var guests = storeState.guests;
  var selectedRoom = rooms.bedTypes.filter(function (b) {
    return b.bedTypeCode === bedTypeCode;
  })[0];
  selectedRoom.code = code;
  selectedRoom.roomType = rooms.roomType;
  selectedRoom.roomView = rooms.roomView;
  selectedRoom.roomName = rooms.roomType + " - " + rooms.roomView;
  selectedRoom.roomImg = rooms.largeImageUrl;
  guests[0].selectedRoom = selectedRoom;
  f_setStoreState("guests", guests);
  //f_setStoreState("offerCode", offerCode);
  f_setStoreState("availableOffers", curr_availableRateplans.offerList);

  //Tealium event
  if (typeof t_ChoosePackage === "function") {
    t_ChoosePackage(offerCode, selectedRoom.roomCode);
  }
  var _currnOffer = curr_availableRateplans.offerList.filter(function (_item) {
    return _item.code === offerCode;
  })[0];
  var jumpToPaymentPage = function () {
    loading_show();
    var routerSearch = getRouterSearch();
    var url_href =
      bookingEngine_global_data.global.pathArea.paymentPath +
      ".html" +
      f_gatherParameters(selectedRoom.roomCode, bedTypeCode) +
      "&offerCode=" +
      offerCode +
      "&flow=tf&multi=" +
      routerSearch.multi;
    window.location.href = url_href;
  };
  if (
    _currnOffer &&
    _currnOffer.addonInfo &&
    _currnOffer.addonInfo.length > 0 &&
    _currnOffer.addonInfo[0].addOnType === "Ticketing addons"
  ) {
    f_addonPriceAndAvailability(
      _currnOffer,
      function () {
        if (typeof t_ChoosePackage_ticket === "function") {
          t_ChoosePackage_ticket(offerCode, code);
        }
        jumpToPaymentPage();
      },
      false,
      function () {
        guests[0].selectedRoom = null;
        f_setStoreState("guests", guests);
      },
      function (res) {
        guests[0].selectedRoom = null;
        f_setStoreState("guests", guests);
        var _errmsg =
          bookingEngine_global_data.global.errorArea["error_code_9000"] ||
          res.message;
        f_shwo_pop_Bummer(_errmsg, "", function () {
          f_availableRooms();
        });
        //然后要重新请求offer接口
      }
    );
  } else {
    f_setStoreState("ticketAddon", null);
    jumpToPaymentPage();
  }
}

function f_onDeleteSelectRoom(roomIndex) {
  var guests = f_getSessionStorage().guests;
  delete guests[roomIndex].selectedRoom;
  f_setStoreState("guests", guests);
  //$(".room_card").removeClass("disabled_room");
  var storeState = f_getSessionStorage();
  //如果是最后一个，需要重新load rooms 数据
  if (
    storeState.guests.filter(function (item) {
      return !item.selectedRoom;
    }).length === 1
  ) {
    f_availableRooms(roomIndex + 1);
    wasDeleteOption = true;
  } else {
    f_setMultiRoomBanner();
  }
}

//根据当前的币种获取数据中的各种价格（折扣价，实际价格,税率服务费）
function f_getRoomPriceByCurrency(data) {
  var currency = f_getSessionStorage().currency;
  var discountedAveragePriceByCurrency = data.discountedAveragePriceByCurrency
    .length
    ? data.discountedAveragePriceByCurrency.filter(function (disc) {
        return disc.currencyCode === currency;
      })[0].price
    : "";
  var averagePriceByCurrency = data.averagePriceByCurrency.filter(function (
    disc
  ) {
    return disc.currencyCode === currency;
  })[0].price;
  var price = discountedAveragePriceByCurrency || averagePriceByCurrency;
  return {
    discountedAveragePriceByCurrency: discountedAveragePriceByCurrency,
    averagePriceByCurrency: averagePriceByCurrency,
    price: price,
  };
}

// 判断当前选中guest中是否都选中了房型
function f_checkGuestSelectRoom() {
  var guests = f_getSessionStorage().guests;
  for (var i = 0; i < guests.length; i++) {
    if (f_isEmpty(guests[i].selectedRoom)) {
      return false;
    }
  }

  /*  //Tealium event
        if( typeof t_checkGuestSelectRoom === 'function' ){
            t_checkGuestSelectRoom();
        }*/
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
      loading_show();
      var curr_availableRateplans = f_get_Offer_From_contentAPI(data.data);
      f_setStoreState("availableOffers", curr_availableRateplans);
      var routerSearch = getRouterSearch();
      var url_href =
        bookingEngine_global_data.global.pathArea.mutiRoomPath +
        ".html" +
        f_gatherParameters() +
        "&offerCode=" +
        storeState.offerCode +
        "&flow=tf&multi=" +
        routerSearch.multi;
      window.location.href = url_href;
    } else {
      f_showErrMassage(
        bookingEngine_global_data.global.errorArea["error_code_6001"]
      );
    }
  });
}

function f_show_calendar_Pop_roomPge() {
  f_Pop_Calendar_show();
  $("#s_btn_view_rooms").bind("click", function () {
    f_getCalendarRes(false, function (data, url_href) {
      multiRoom_curr_select_index = 1;
      window.history.pushState(
        { status: 0 },
        "",
        window.location.href.substring(
          0,
          window.location.href.lastIndexOf("?")
        ) +
          "?" +
          url_href
      );
      f_setMultiRoomBanner();
      f_Pop_modal_hide();
      f_availableRooms();
      //var storeState=f_getSessionStorage();
      var pageStepUrl = f_getSessionStorage().pageStepUrl;
      pageStepUrl["step2"] = window.location.href;
      f_setStoreState("pageStepUrl", pageStepUrl);

      //Tealium View
      if (typeof t_roomsPageView === "function") {
        t_roomsPageView();
      }
    });
  });
  if (typeof t_edit === "function") {
    t_edit();
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

function f_ticket_needRestPice() {
  var storeState = f_getSessionStorage();
  var min_numberOfTickets =
    storeState.guests[multiRoom_curr_select_index - 1].children +
    storeState.guests[multiRoom_curr_select_index - 1].adults;
  if (bookingEngine_global_data.global.bodyArea.ticketSellInPairs) {
    //判断当前选择的人数是奇数还是偶数
    if (!min_numberOfTickets % 2 == 0) {
      return 2;
    }
  }
  return min_numberOfTickets;
}
