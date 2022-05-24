$(function () {
  //src Data
  var src_data = {
    items: [
      {
        name: "Marina Suite - Harbour View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Marina_Suite/Marina_Suite_EN/marinasuite.html",
      },
      {
        name: "Orchid Suite - Garden View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Orchid_Suite/Orchid_Suite_Gardenview/Orchid_Suite_Gardenview_EN/orchidsuitegardenview.html",
      },
      {
        name: "Orchid Suite - City View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Orchid_Suite/Orchid_Suite_Cityview/Orchid_Suite_Cityview_EN/orchidsuitecityview.html",
      },
      {
        name: "Deluxe Room - City View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Deluxe_Room/Deluxe_Cityview/Deluxe_Cityview_EN/deluxecityview.html",
      },
      {
        name: "Deluxe Room - Garden View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Deluxe_Room/Deluxe_Gardenview/Deluxe_Gardenview_EN/deluxegardenview.html",
      },
      {
        name: "Deluxe Room - Harbour View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Deluxe_Room/Deluxe_Harbourview/Deluxe_Harbourview_EN/deluxeharbourview.html",
      },
      {
        name: "Deluxe Room - Lower Floor",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Deluxe_Room/Deluxe_Lowerfloorcity/Deluxe_Lowerfloorcity_EN/deluxelowerfloorcity.html",
      },
      {
        name: "Deluxe Room - Sky View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Deluxe_Room/Deluxe_Skyview/Deluxe_Skyview_EN/deluxeskyview.html",
      },
      {
        name: "Club Room - City View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Club_Room/clubcityview/clubcityview_EN/clubcityview.html",
      },
      {
        name: "Club Room - Garden View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Club_Room/clubgardenview/clubgardenview_EN/clubgardenview.html",
      },
      {
        name: "Family 1 Bedroom - Lower Floor",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Family/family1bedroom/family1bedroom_EN/family1bedroom.html",
      },
      {
        name: "Family 2 Bedroom - Harbour View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Family/family2bedroom/family2bedroom.html",
      },
      {
        name: "Family Room - Lower Floor",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Family/familyroom/familyroom_EN/familyroom.html",
      },
      {
        name: "Family Studio - Lower Floor",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Family/familystudio/familystudio_EN/familystudio.html",
      },
      {
        name: "Grand Club Room - City View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Grand_Club/grandclubcityview/grandclubcityview_EN/grandclubcityview.html",
      },
      {
        name: "Grand Club Room - Garden View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Grand_Club/grandclubgardenview/grandclubgardenview_EN/grandclubgardenview.html",
      },
      {
        name: "Harbour Suite - Harbour View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Harbour_Suite/Harbour_Suite_EN/harboursuite.html",
      },
      {
        name: "Merlion Suite - Harbour View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Merlion_Suite/Merlion_Suite_EN/merlionsuite.html",
      },
      {
        name: "Premier Room - City View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Premiere/premiercityview/premiercityview_EN/premiercityview.html",
      },
      {
        name: "Premier Room - Garden View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Premiere/premiergardenview/premiergardenview_EN/premiergardenview.html",
      },
      {
        name: "Premier Room - Harbour View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Premiere/premierharbourview/premierharbourview_EN/premierharbourview.html",
      },
      {
        name: "Premier Room - Lower Floor",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Premiere/premierlowerfloorcity/premierlowerfloorcity_EN/premierlowerfloorcity.html",
      },
      {
        name: "Premier Room - Sky View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Premiere/premierskyview/premierskyview_EN/premierskyview.html",
      },
      {
        name: "Sands Suite - Garden View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Sands_Suite/Sands_Suite_EN/sandssuitegardenview.html",
      },
      {
        name: "Skyline Suite - Sky View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Skyline_Suite/Skyline_Suite_EN/skylinesuite.html",
      },
      {
        name: "Straits Suite - Sky View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Straits_Suite/Straits_Suite_EN/straitssuite.html",
      },
      {
        name: "Bay Suite - Garden View",
        src: "https://assets.sands.com/MBS/Wistia/360_VirtualTourVideo_BookingEngine/Bay_Suite/Bay_Suite_EN/baysuite.html",
      },
    ],
  };
  //wait element then do updating;
  var waitEl = setInterval(function () {
    if (
      $(".view_room_details_link").length &&
      $(".shapeborder_selected_in:contains(2)").length &&
      $(".room_ImagePanel").length /*  &&
          $("select.room_filters_dropdown.dropdown_toggle").length &&
          $(".room_filters_dropdown.border_normal:gt(1)").length */
    ) {
      //adjust iframe and overlay when size of window changed;
      $(window).resize(function () {
        setStyleForIframeAndOverlay();
      });
      //bind click at the beginning;
      bindClick();
      //bind click when dropdown toggled;
      $("select.room_filters_dropdown:lt(2)").change(function () {
        bindClick();
      });
      //bind click when sort-filter clicked;
      $(".room_filters_dropdown.border_normal:gt(1)").click(function () {
        bindClick();
      });
      clearInterval(waitEl);
    }
  }, 300);

  //create function binding click for link and image which can open room-detail popout window;
  function bindClick() {
    var waitLink = setInterval(function () {
      if ($(".view_room_details_link a:not(.binded)").length) {
        $(".view_room_details_link a")
          .addClass("binded")
          .click(function () {
            var clickedEl = $(this);
            var scrollDisWhenClick = $(window).scrollTop();
            clickToUpdate(clickedEl, scrollDisWhenClick);
          });
        clearInterval(waitLink);
      }
    }, 100);
    //update "360-view" tip on images;
    var waitImageLink = setInterval(function () {
      if ($(".room_ImagePanel a:not(binded)").length) {
        $(".room_ImagePanel a").after("<div class='view-tip'></div>");
        $(".view-tip").closest(".room_ImagePanel").css("position", "relative");
        $(".room_ImagePanel a")
          .addClass("binded")
          .click(function () {
            var clickedEl = $(this);
            var scrollDisWhenClick = $(window).scrollTop();
            clickToUpdate(clickedEl, scrollDisWhenClick);
          });
        clearInterval(waitImageLink);
      }
    }, 100);
  }

  //create function to fix original bug: scroll to bottom when click room-detail link;
  function fixScrollBug(scrollDisWhenClick) {
    setTimeout(function () {
      $(window).scrollTop(scrollDisWhenClick);
    }, 10);
  }
  //create function to set style for iFrame and overlay tips;
  function setStyleForIframeAndOverlay() {
    var windowWidth = $(window).width();
    if (windowWidth >= 992) {
      $(".harako_control_board i").text(
        "Click/tap and then drag to move around"
      );
      $(".harako_control_board i").css("font-size", "1.5rem");
      $(".harako_thumb_text").css("font-size", "1.5rem");
    } else {
      $(".harako_control_board i").text(
        "Use finger to navigate around and see the different angles"
      );
      $(".harako_control_board i").css("font-size", "1rem");
      $(".harako_thumb_text").css("font-size", "0.7rem");
    }
    var viewWidth = $(".dy-360-iframe").width();
    var viewHeight = viewWidth * 0.5733;
    $(".dy-360-iframe").css("height", viewHeight + "px");
    $(".harako_control_board").css("height", viewHeight + "px");
    $(".roomLargeImage").css("height", viewHeight + "px");
  }
  //create click function when opening popout;
  function clickToUpdate(clickedEl, scrollDisWhenClick) {
    var waitLoadingDone = setInterval(function () {
      if (
        $(".loading-icon").css("display") == "none" &&
        $("#wtmodalRoomdetails").css("display") != "none" &&
        $(".slick-list").length &&
        $(".CardWhite").length &&
        $(".slick-prev").length &&
        $(".slick-next").length &&
        $(".close").length
      ) {
        var roomName = clickedEl
          .closest(".room_card_left")
          .find(".room_ImageCenterPanel")
          .children(".txt-black-five")
          .html()
          .replaceAll("&nbsp;", " ");
        $(".close").click(function () {
          $(".slick-list").off("mousedown").off("touchstart");
          $(document)
            .off("mousemove")
            .off("mouseup")
            .off("touchmove")
            .off("touchend");
          $(".slick-prev").unbind("click");
          $(".slick-next").unbind("click");
          fixScrollBug(scrollDisWhenClick);
        });
        updatePopoutModule(roomName);
        setStyleForIframeAndOverlay();
        createSliding();
        clearInterval(waitLoadingDone);
      }
    }, 100);
  }
  //create sliding function;
  function createSliding() {
    //SLIDING
    //a. desktop sliding
    $(".slick-list").on("mousedown", function (e) {
      e.preventDefault();
      var originImgPosition = $(".slick-list .slick-track")
        .css("-webkit-transform")
        .split(/[()]/)[1]
        .split(",")[4];
      var originMousePosition = e.pageX;
      var maxDis =
        $(".slick-list").width() -
        $(".CardWhite").length * parseInt($(".CardWhite").css("width"));

      $(document).on("mousemove", function (e) {
        e.preventDefault();
        var deltaX = e.pageX - originMousePosition;
        dySlide(1, originImgPosition, deltaX, maxDis);
      });
    });
    $(document).on("mouseup", function (e) {
      e.preventDefault();
      if ($("#wtmodalRoomdetails").css("display") != "none") {
        var target = $(e.target);
        if (!target.is(".slick-arrow")) {
          $(document).off("mousemove");
          var nowPosition = $(".slick-list .slick-track")
            .css("-webkit-transform")
            .split(/[()]/)[1]
            .split(",")[4];
          var maxDis =
            $(".slick-list").width() -
            $(".CardWhite").length * parseInt($(".CardWhite").css("width"));
          adJustSlider(nowPosition, maxDis);
        }
      }
    });
    //b. mobile sliding
    $(".slick-list").on("touchstart", function (e) {
      var originImgPosition = $(".slick-list .slick-track")
        .css("-webkit-transform")
        .split(/[()]/)[1]
        .split(",")[4];
      var originMousePosition = e.touches[0].clientX;
      var maxDis =
        $(".slick-list").width() -
        $(".CardWhite").length * parseInt($(".CardWhite").css("width"));

      $(document).on("touchmove", function (e) {
        var deltaX = e.touches[0].clientX - originMousePosition;
        dySlide(1, originImgPosition, deltaX, maxDis);
      });
    });
    $(document).on("touchend", function (e) {
      if ($("#wtmodalRoomdetails").css("display") != "none") {
        var target = $(e.target);
        if (!target.is(".slick-arrow")) {
          $(document).off("mousemove");
          var nowPosition = $(".slick-list .slick-track")
            .css("-webkit-transform")
            .split(/[()]/)[1]
            .split(",")[4];
          var maxDis =
            $(".slick-list").width() -
            $(".CardWhite").length * parseInt($(".CardWhite").css("width"));
          adJustSlider(nowPosition, maxDis);
        }
      }
    });

    //sliding when click Prev/Next button;
    $(".slick-prev").click(function () {
      var originImgPosition = $(".slick-list .slick-track")
        .css("-webkit-transform")
        .split(/[()]/)[1]
        .split(",")[4];
      var maxDis =
        $(".slick-list").width() -
        $(".CardWhite").length * parseInt($(".CardWhite").css("width"));
      var slidingDistance = parseInt($(".CardWhite").css("width"));
      dySlide(0, originImgPosition, slidingDistance, maxDis);
      //control the enable/disable of button;
      var newPosition = $(".slick-list .slick-track")
        .css("-webkit-transform")
        .split(/[()]/)[1]
        .split(",")[4];
      var imgWidth = parseInt($(".CardWhite").css("width"));
      var imgTotalNo = $(".CardWhite").length;
      var numOfHiddenImgNo = -newPosition / imgWidth;
      var imgNoSliderCanContain = parseInt($(".slick-list").width() / imgWidth);
      var maxHiddenImgNo = imgTotalNo - imgNoSliderCanContain;
      if (numOfHiddenImgNo == maxHiddenImgNo) {
        $(".slick-prev")
          .removeClass("slick-disabled")
          .css("pointer-events", "");
        $(".slick-next")
          .removeClass("slick-disabled")
          .css("pointer-events", "");
      } else if (numOfHiddenImgNo == 1) {
        $(".slick-prev")
          .addClass("slick-disabled")
          .css("pointer-events", "none");
        $(".slick-next")
          .removeClass("slick-disabled")
          .css("pointer-events", "");
      }
    });
    $(".slick-next").click(function () {
      var originImgPosition = $(".slick-list .slick-track")
        .css("-webkit-transform")
        .split(/[()]/)[1]
        .split(",")[4];
      var maxDis =
        $(".slick-list").width() -
        $(".CardWhite").length * parseInt($(".CardWhite").css("width"));
      var slidingDistance = -parseInt($(".CardWhite").css("width"));
      dySlide(0, originImgPosition, slidingDistance, maxDis);
      //control the enable/disable of button;
      var newPosition = $(".slick-list .slick-track")
        .css("-webkit-transform")
        .split(/[()]/)[1]
        .split(",")[4];
      var imgWidth = parseInt($(".CardWhite").css("width"));
      var imgTotalNo = $(".CardWhite").length;
      var numOfHiddenImgNo = -newPosition / imgWidth;
      var imgNoSliderCanContain = parseInt($(".slick-list").width() / imgWidth);
      var maxHiddenImgNo = imgTotalNo - imgNoSliderCanContain;
      if (numOfHiddenImgNo == 0) {
        $(".slick-prev")
          .removeClass("slick-disabled")
          .css("pointer-events", "");
        $(".slick-next")
          .removeClass("slick-disabled")
          .css("pointer-events", "");
      } else if (numOfHiddenImgNo == maxHiddenImgNo - 1) {
        $(".slick-prev")
          .removeClass("slick-disabled")
          .css("pointer-events", "");
        $(".slick-next")
          .addClass("slick-disabled")
          .css("pointer-events", "none");
      }
    });
  }
  //create module update function;
  function updatePopoutModule(roomName) {
    //unbind origin function of module;
    $(".slick-list").unbind();
    $(".CardWhite").unbind("click");
    $(".slick-prev").unbind("click");
    $(".slick-next").unbind("click");

    //get 360 iframe src via roomName;
    var iframeSrc = null;
    var srcArr = src_data.items;
    for (let i = 0; i < srcArr.length; i++) {
      var fitName = srcArr[i].name;
      var fitSrc = srcArr[i].src;
      if (roomName == fitName) {
        iframeSrc = fitSrc;
      }
    }
    //add hiding 360 iframe and it's overlay;
    $(".roomLargeImage").append(
      "<iframe class='dy-360-iframe' src='" +
        iframeSrc +
        "' width='750' height='430' style='display:none;width:100%' frameborder='0'></iframe><div class='harako_control_board'> <i style='font-size: 1.5rem'>Click/tap and then drag to move around</i> </div>"
    );
    //add 360 image;
    var copyImgSrc = $(".CardWhite:eq(0) img").attr("src");
    $(".CardWhite:eq(0)").before(
      "<div class='dy-360-img CardWhite slick-slide slick-current slick-active' data-slick-index='0' aria-hidden='false' tabindex='-1' role='option' aria-describedby='slick-slide20' > <img src='" +
        copyImgSrc +
        "' /> <i class='harako_thumb_text 360-view' style='font-size: 1.5rem' ><span>360 view</span></i ></div>"
    );
    //bind click function of 360 image
    $(".dy-360-img").click(function () {
      $(".roomLargeImage .roomSelectedImage").hide();
      $(".roomLargeImage .dy-360-iframe").show();
      $(".harako_control_board").show();
    });
    //bind click function of normal image
    $(".CardWhite:not(.dy-360-img) img").click(function () {
      $(".roomLargeImage .roomSelectedImage").show();
      $(".roomLargeImage .dy-360-iframe").hide();
      $(".harako_control_board").hide();
    });
    //bind click function of overlay
    $(".harako_control_board").click(function () {
      $(this).hide();
    });
    //trigger 360 first when open the room-detail popout;
    $(".dy-360-img").trigger("click");
  }
  //create slide function;
  function dySlide(drag, originPosition, slidingDistance, maxDistance) {
    var newPosition = $(".slick-list .slick-track")
      .css("-webkit-transform")
      .split(/[()]/)[1]
      .split(",")[4];
    if (drag == 0) {
      if (!$(".slick-list.sliding").length) {
        $(".slick-list").addClass("sliding");
        $(".slick-list .slick-track").css({
          transform:
            "translate3d(" +
            (parseFloat(originPosition) + parseFloat(slidingDistance)) +
            "px, 0px, 0px)",
          transition: "transform 300ms ease 0s",
        });
        setTimeout(function () {
          $(".slick-list").removeClass("sliding");
        }, 300);
      }
    } else {
      $(".slick-list .slick-track").css("transition", "");
      if (newPosition >= 0) {
        $(".slick-list .slick-track").css(
          "transform",
          "translate3d(" +
            (parseFloat(slidingDistance) + parseFloat(originPosition)) / 3 +
            "px, 0px, 0px)"
        );
      } else if (newPosition < 0 && newPosition > maxDistance) {
        $(".slick-list .slick-track").css(
          "transform",
          "translate3d(" +
            (parseFloat(originPosition) + parseFloat(slidingDistance)) +
            "px, 0px, 0px)"
        );
      } else if (newPosition <= maxDistance) {
        var slideFromOverToIn =
          -slidingDistance - (originPosition - maxDistance);
        $(".slick-list .slick-track").css(
          "transform",
          "translate3d(" +
            (parseFloat(maxDistance) - parseFloat(slideFromOverToIn) / 3) +
            "px, 0px, 0px)"
        );
      }
    }
  }
  //create function to adjust the slider;
  function adJustSlider(nowPosition, maxDistance) {
    var imgWidth = parseInt($(".CardWhite").css("width"));
    var numOfhiddenPicture = nowPosition / imgWidth;
    var imgNoSliderCanContain = parseInt($(".slick-list").width() / imgWidth);
    var imgTotalNo = $(".CardWhite").length;
    var maxHiddenImgNo = imgTotalNo - imgNoSliderCanContain;
    if (nowPosition >= 0) {
      $(".slick-list .slick-track").css({
        transform: "translate3d(0px, 0px, 0px)",
        transition: "transform 300ms ease 0s",
      });
    } else if (nowPosition < 0 && nowPosition > maxDistance) {
      $(".slick-list .slick-track").css({
        transform:
          "translate3d(" +
          parseInt(numOfhiddenPicture) * imgWidth +
          "px, 0px, 0px)",
        transition: "transform 300ms ease 0s",
      });
    } else if (nowPosition <= maxDistance) {
      $(".slick-list .slick-track").css({
        transform:
          "translate3d(" +
          parseInt(-maxHiddenImgNo) * imgWidth +
          "px, 0px, 0px)",
        transition: "transform 300ms ease 0s",
      });
    }
    controlButtonWhenDrag(maxDistance);
    //judge the status and change the enable/disable buttons;
  }
  //create control-Button function when drag;
  function controlButtonWhenDrag(maxDistance) {
    var newPosition = $(".slick-list .slick-track")
      .css("-webkit-transform")
      .split(/[()]/)[1]
      .split(",")[4];
    var imgWidth = parseInt($(".CardWhite").css("width"));
    if (newPosition >= -imgWidth) {
      $(".slick-prev").addClass("slick-disabled").css("pointer-events", "none");
      $(".slick-next").removeClass("slick-disabled").css("pointer-events", "");
    } else if (newPosition < -imgWidth && newPosition > maxDistance) {
      $(".slick-prev").removeClass("slick-disabled").css("pointer-events", "");
      $(".slick-next").removeClass("slick-disabled").css("pointer-events", "");
    } else if (newPosition <= maxDistance) {
      $(".slick-prev").removeClass("slick-disabled").css("pointer-events", "");
      $(".slick-next").addClass("slick-disabled").css("pointer-events", "none");
    }
  }
});
