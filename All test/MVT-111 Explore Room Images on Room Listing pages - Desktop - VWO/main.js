$(function () {
  var modalData = {
    items: [
      {
        title: "Deluxe Room",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/deluxe-room/deluxe-1_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/deluxe-room/deluxe-2_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/deluxe-room/deluxe-3_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/deluxe-room/deluxe-4_1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Deluxe_Room/Deluxe_Room_EN/deluxe/deluxe.html",
      },
      {
        title: "Premier Room",
        content: [
          /* {
              src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/premier-room/premiere 1_1920x960.jpg",
            }, */
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/premier-room/premiere 2_1920x960.jpg",
          },
          /* {
              src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/premier-room/premier-3-1920x960.jpg",
            }, */
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/premier-room/premier-4-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Premier_Room/Premier_Room_EN/Premier%20Room/premier.html",
      },
      {
        title: "Family Room",
        content: [
          /* {
              src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/family-room/family-1-1920x960.jpg",
            },
            {
              src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/family-room/family-2-1920x960.jpg",
            },
            {
              src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/family-room/family-3-1920x960.jpg",
            }, */
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/family-room/family-4-1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/roberto-cavalli-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Family_Room/Family_Room_EN/family/family.html",
      },
      {
        title: "Club Room",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/club-room/club-room%201-_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/club-room/club-room%202-_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/club-room/club-room%203-_1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/roberto-cavalli-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Club_Room/Club_Room_EN/Club Room/club.html",
      },
      {
        title: "Grand Club Room",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/grand-club-room/grand-club-room%201_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/grand-club-room/grand-club-room%202_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/grand-club-room/grand-club-room-3_1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/roberto-cavalli-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Grand_Club_Room/Grand_Club_Room_EN/Grand%20Club%20Room/grandclub.html",
      },
      {
        title: "Orchid Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/orchid-suite/orchid-1_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/orchid-suite/orchid-2_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/orchid-suite/orchid-suite-3_1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/roberto-cavalli-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Orchid_Suite/Orchid_Suite_EN/Orchid%20Suite/orchid.html",
      },
      {
        title: "Sands Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/sands-suite/sands-suite-1_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/sands-suite/sands-suite-2_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/sands-suite/sands-suite-3_1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/hermes-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Sands_Suite/Sands_Suite_EN/Sands%20Suite/sands.html",
      },
      {
        title: "Bay Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/bay-suite-1-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/bay-suite-2-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/bay-suite-3-1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/hermes-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Bay_Suite/Bay_Suite_EN/Bay%20Suite/bay.html",
      },
      {
        title: "Harbour Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/harbour-suite-1-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/harbour-suite-2-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/harbour-suite-3-1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/hermes-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Harbour_Suite/Harbour_Suite_EN/Harbour%20Suite/harbour.html",
      },
      {
        title: "Marina Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/marina-suite-1-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/marina-suite-2-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/marina-suite-3-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/marina-suite-4-1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/hermes-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Marina_Suite/Marina_Suite_EN/Marina%20Suite/marina.html",
      },
      {
        title: "Skyline Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/skyline-suite-1-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/skyline-suite-2-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/skyline-suite-3-1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/hermes-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Skyline_Suite/Skyline_Suite_EN/Skyline%20Suite/skyline.html",
      },
      {
        title: "Merlion Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/merlion-suite-1-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/merlion-suite-2-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/merlion-suite-3-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/merlion-suite-4-1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/hermes-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Merlion_Suite/Merlion_Suite_EN/Merlion%20Suite/merlion.html",
      },
      {
        title: "Straits Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/straits-suite/Straits-suite-1-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/straits-suite/Straits-suite-2-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/straits-suite/Straits-suite-3-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/straits-suite/Straits-suite-4-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/straits-suite/Straits-suite-5-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/straits-suite/Straits-suite-6-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/straits-suite/Straits-suite-7-1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/hermes-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Straits_Suite/Straits_Suite_EN/Straits%20Suite/straits.html",
      },
      {
        title: "Presidential Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/presidential-suite/presidential-suite-1_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/presidential-suite/presidential-suite-2_1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/presidential-suite/presidential-suite-3_1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/hermes-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Presidential_Suite/Presidential_Suite_EN/Presidential%20Suite/presidential.html",
      },
      {
        title: "Chairman Suite",
        content: [
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/chairman-suite/chairman-suite-1-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/chairman-suite/chairman-suite-2-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/chairman-suite/chairman-suite-3-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/chairman-suite/chairman-suite-4-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/chairman-suite/chairman-suite-5-1920x960.jpg",
          },
          {
            src: "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/chairman-suite/chairman-suite-6-1920x960.jpg",
          },
          {
            src: "/content/dam/revamp/hotel/rooms/hermes-1920x960.jpg",
          },
        ],
        view: "https://assets.sands.com/MBS/Wistia/360_Virtual_Tour_Video/Chairman_Suite/Chairman_Suite_EN/Chairman%20Suite/chairman.html",
      },
    ],
  };
  var imageData = {
    items: [
      {
        title: "Deluxe Room",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/deluxe/deluxe-room_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/deluxe/deluxe-room-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/deluxe/deluxe-room-3_500x375.jpg",
        },
      },
      {
        title: "Premier Room",
        src: {
          /* first:
              "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/premier/premier-room_500x375.jpg", */
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/premier/premier-room-2_500x375.jpg",
          /* third:
              "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/premier/premier-room-3_500x375.jpg", */
        },
      },
      {
        title: "Family Room",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/family/family-room_500x375.jpg",
          /* second:
              "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/family/family-room-2_500x375.jpg",
            third:
              "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/family/family-room-3_500x375.jpg", */
        },
      },
      {
        title: "Club Room",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/club/club-room_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/club/club-room-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/club/club-room-3_500x375.jpg",
        },
      },
      {
        title: "Grand Club Room",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/grand-club/grand-club-room_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/grand-club/grand-club-room-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/grand-club/grand-club-room-3_500x375.jpg",
        },
      },
      {
        title: "Orchid Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/orchid/orchid-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/orchid/orchid-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/orchid/orchid-suite-3_500x375.jpg",
        },
      },
      {
        title: "Sands Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/sands/sands-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/sands/sands-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/sands/sands-suite-3_500x375.jpg",
        },
      },
      {
        title: "Bay Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/bay/bay-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/bay/bay-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/bay/bay-suite-3_500x375.jpg",
        },
      },
      {
        title: "Harbour Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/harbour/harbour-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/harbour/harbour-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/harbour/harbour-suite-3_500x375.jpg",
        },
      },
      {
        title: "Marina Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/marina/marina-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/marina/marina-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/marina/marina-suite-3_500x375.jpg",
        },
      },
      {
        title: "Skyline Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/skyline/skyline-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/skyline/skyline-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/skyline/skyline-suite-3_500x375.jpg",
        },
      },
      {
        title: "Merlion Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/merlion/merlion-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/merlion/merlion-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/merlion/merlion-suite-3_500x375.jpg",
        },
      },
      {
        title: "Straits Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/straits/straits-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/straits/straits-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/straits/straits-suite-3_500x375.jpg",
        },
      },
      {
        title: "Presidential Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/presidential/presidential-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/presidential/presidential-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/presidential/presidential-suite-3_500x375.jpg",
        },
      },
      {
        title: "Chairman Suite",
        src: {
          first:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/chairman/chairman-suite_500x375.jpg",
          second:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/chairman/chairman-suite-2_500x375.jpg",
          third:
            "/content/dam/singapore/marinabaysands/master/main/home/hotel/rooms-suites/mvt111vwo/chairman/chairman-suite-3_500x375.jpg",
        },
      },
    ],
  };
  var modalContentWidth = $(window).width() * 0.85;
  var modalContentHeight = $(window).height();
  $("footer").append(
    "<div id='cboxOverlay' style='opacity: 0.7; cursor: pointer; visibility: visible;' class='ex-scroller-modal'></div><div class='imagebox'><div class='main-content-wrap' style='width: " +
      modalContentWidth +
      "px;height: " +
      modalContentHeight +
      "px;position: relative'><div class='for-mobile-layout'><div class='big-image'><div class='slick-list'><div class='slick-track' style='opacity: 1;display:flex;'></div></div><div class='switchbtn prev-btn'></div><div class='switchbtn next-btn'></div><button type='button' id='cboxClose'></button></div><div class='small-image'></div></div></div></div>"
  );
  $(".prev-btn").click(function () {
    var index = $(".slick-slide.slick-active").attr("index");
    var maxIndex = $(".slick-slide").length - 1;
    index -= 1;
    if (index < 0) {
      index = maxIndex;
    }
    setStyleByIndex(index);
  });
  $(".next-btn").click(function () {
    var index = parseInt($(".slick-slide.slick-active").attr("index"));
    var maxIndex = $(".slick-slide").length - 1;
    index += 1;
    if (index > maxIndex) {
      index = 0;
    }
    setStyleByIndex(index);
  });
  $("#cboxClose").click(function () {
    $("#cboxOverlay,.imagebox").fadeOut(500);
  });
  $(".ui-selectmenu-menu").click(function () {
    if (checkJsPart) {
      clearInterval(checkJsPart);
    }
    if (!$(".image-show-wrap").length) {
      creatIntervalForSetting();
    }
  });
  creatIntervalForSetting();
  function creatIntervalForSetting() {
    checkJsPart = setInterval(function () {
      if ($(".mod.modCnt_ref_details_1.cnt_ref_details_1.first").length) {
        $(".teaserDescription tr").each(function () {
          if (!$(this).find("img").length) {
            if (!$(this).find("a").length) {
              $(this).addClass("willHide");
            }
          }
        });
        $(".imageWrapper").each(function () {
          var imgSrc = $(this).children("a").children("img").attr("src");
          var height = $(this).width() * 0.75;
          $(this).children("a").remove();
          $(this).append(
            "<div class='image-show-wrap'><img class='js-show' style='width:100%; height:" +
              height +
              "px' src='" +
              imgSrc +
              "'></div>"
          );
          var items = imageData["items"];
          var roomTitle = $(this)
            .parents(".listContentWrapper")
            .find(".listpage-title")
            .find("a")
            .text();
          for (i = 0; i < items.length; i++) {
            var fitText = items[i].title;
            if (roomTitle.indexOf(fitText) == 0) {
              var src = items[i].src;
              console.log(src);
              var imageArr = [];
              $.each(src, function (i, val) {
                imageArr.push(val);
              });
              console.log(imageArr);
            }
          }
          $(this).append(
            "<div class='gallery-wrap'><div class='mini-image view' style='position:relative;'><img src='" +
              imageArr[0] +
              "'><i class='harako_thumb_text'><span>360 view</span></i><div class='harako_thumb_board'></div></div></div><div class='slideExpander'></div>"
          );
          for (let i = 0; i < imageArr.length; i++) {
            if (i == 0) {
              $(this)
                .find(".mini-image.view")
                .before(
                  "<div class='mini-image active' index='" +
                    i +
                    "'><img src='" +
                    imageArr[i] +
                    "'></div>"
                );
            } else {
              $(this)
                .find(".mini-image.view")
                .before(
                  "<div class='mini-image' index='" +
                    i +
                    "'><img src='" +
                    imageArr[i] +
                    "'></div>"
                );
            }
          }
          //special dealing(delete thumbnail gallery) for Premier Room and Family Room (keep updating)
          if (roomTitle == "Premier Room" || roomTitle == "Family Room") {
            $(this).find(".gallery-wrap").remove();
          }
        });
        $(".mini-image").click(function () {
          $(this)
            .parents(".gallery-wrap")
            .children(".mini-image")
            .removeClass("active");
          $(this).addClass("active");
          if ($(this).children(".harako_thumb_text").length) {
            var items = modalData["items"];
            var roomTitle = $(this)
              .parents(".listContentWrapper")
              .find(".listpage-title")
              .find("a")
              .text();
            for (i = 0; i < items.length; i++) {
              var fitText = items[i].title;
              if (roomTitle.indexOf(fitText) == 0) {
                var viewUrl = items[i].view;
              }
            }
            if (
              $(this)
                .parents(".imageWrapper")
                .children(".image-show-wrap")
                .children("img").length
            ) {
              var height = $(this).parents(".imageWrapper").width() * 0.75;
              $(this)
                .parents(".imageWrapper")
                .children(".image-show-wrap")
                .children("img")
                .remove();
              $(this)
                .parents(".imageWrapper")
                .children(".image-show-wrap")
                .append(
                  "<iframe class='js-show' src='" +
                    viewUrl +
                    "' frameborder='0' allowtransparency='true' allowfullscreen='' mozallowfullscreen='' webkitallowfullscreen='' oallowfullscreen='' msallowfullscreen='' style='width:100%;height:" +
                    height +
                    "px'></iframe>"
                );
              $(this)
                .parents(".imageWrapper")
                .children(".image-show-wrap")
                .css("height", height);
            }
          } else {
            var height = $(this).parents(".imageWrapper").width() * 0.75;
            var clickSrc = $(this).children("img").attr("src");
            if (
              $(this)
                .parents(".imageWrapper")
                .children(".image-show-wrap")
                .children("iframe").length
            ) {
              $(this)
                .parents(".imageWrapper")
                .children(".image-show-wrap")
                .children("iframe")
                .remove();
              $(this)
                .parents(".imageWrapper")
                .children(".image-show-wrap")
                .append(
                  "<img class='js-show' style='width:100%;height:" +
                    height +
                    "px' src='" +
                    clickSrc +
                    "'>"
                );
            } else {
              $(this)
                .parents(".imageWrapper")
                .children(".image-show-wrap")
                .children("img")
                .attr("src", clickSrc);
            }
          }
        });
        $(".imageWrapper").on("click", ".js-show,.slideExpander", function () {
          /*点击渲染*/
          var windowWidth = $(window).width();
          if (windowWidth > 1041) {
            var modalContentWidth = $(window).width() * 0.85;
            var modalContentHeight = $(window).height();
          } else {
            var modalContentWidth = $(window).width();
            var modalContentHeight = $(window).height();
          }
          console.log(modalContentWidth);
          $(".main-content-wrap").css({
            width: modalContentWidth + "px",
            height: modalContentHeight + "px",
          });
          $(".imagebox").css("display", "flex");
          $("#cboxOverlay").show();
          $(".slick-track,.small-image").html("");
          var items = modalData["items"];
          var roomTitle = $(this)
            .parents(".listContentWrapper")
            .find(".listpage-title")
            .find("a")
            .text();
          for (i = 0; i < items.length; i++) {
            var fitText = items[i].title;
            if (roomTitle.indexOf(fitText) == 0) {
              var content = items[i]["content"];
              var viewLeftDis = -(content.length * modalContentWidth);
              for (x = 0; x < content.length; x++) {
                var src = content[x].src;
                var leftDis = -(x * modalContentWidth);
                $(".slick-track").css(
                  "width",
                  (content.length + 1) * modalContentWidth
                );
                $(".slick-track").append(
                  "<div class='slick-slide' style='width:" +
                    modalContentWidth +
                    "px;position: relative; left: " +
                    leftDis +
                    "px;top: 0;display:inline-block;' index='" +
                    x +
                    "'><img style='width:100%' src='" +
                    src +
                    "'></div>"
                );
                $(".small-image").append(
                  "<div><img src='" + src + "' index='" + x + "'></div>"
                );
              }
              var iframeHeight = modalContentWidth / 2;
              $(".slick-track").append(
                "<div class='slick-slide' style='width:" +
                  modalContentWidth +
                  "px; height:" +
                  iframeHeight +
                  "px; position: relative; left: " +
                  viewLeftDis +
                  "px;top: 0;display:inline-block;' index='" +
                  content.length +
                  "'><iframe class='js-show' src='" +
                  items[i].view +
                  "' frameborder='0' allowtransparency='true' allowfullscreen='' mozallowfullscreen='' webkitallowfullscreen='' oallowfullscreen='' msallowfullscreen='' style='width:100%;height:" +
                  iframeHeight +
                  "px'></iframe><div class='modal harako_control_board'><i>Click and hold on the mouse to navigate around and see the different angles</i></div></div>"
              );
              $(".small-image").append(
                "<div><img class='tab' src='" +
                  content[0].src +
                  "' index='" +
                  content.length +
                  "'><i class='harako_thumb_text'><span>360 View</span></i></div>"
              );
              //显示对应大图
              var activeIndex = $(this)
                .closest(".imageWrapper")
                .children(".gallery-wrap")
                .children(".mini-image.active")
                .attr("index");
              if (activeIndex < 3) {
                $(
                  ".slick-track .slick-slide[index='" + activeIndex + "']"
                ).addClass("slick-active");
                $(".slick-track .slick-slide[index='" + activeIndex + "']").css(
                  {
                    opacity: "1",
                    "z-index": "900",
                  }
                );
                $(".small-image div:eq(" + activeIndex + ")").addClass(
                  "active"
                );
              } else {
                $(".slick-track .slick-slide:last").addClass("slick-active");
                $(".slick-track .slick-slide:last").css({
                  opacity: "1",
                  "z-index": "900",
                });
                $(".small-image div:last").addClass("active");
              }
            }
          }
          if ($(window).width() > 784) {
            $(".harako_control_board i").text(
              "Click and hold on the mouse to navigate around and see the different angles"
            );
          } else {
            $(".harako_control_board i").text(
              "Use finger to navigate around and see the different angles"
            );
          }
          $(".imagebox").click(function () {
            $("#cboxOverlay,.imagebox").fadeOut(500);
          });
          $(".imagebox")
            .children()
            .click(function (e) {
              e.stopPropagation();
            });
          $(".modal.harako_control_board").click(function () {
            $(this).hide();
          });
          $(".small-image")
            .find("div")
            .click(function () {
              $(".small-image").find("div").removeClass("active");
              $(this).addClass("active");
              var index = $(this).find("img").attr("index");
              $(".slick-slide").removeClass("slick-active");
              $(".slick-slide").css({
                opacity: "0",
                "z-index": "800",
              });
              $(".slick-slide[index='" + index + "']").addClass("slick-active");
              $(".slick-slide[index='" + index + "']").css({
                opacity: "1",
                "z-index": "900",
              });
            });
          //special dealing (Deleting 360 view) for Premier room and Family room;
          if (roomTitle == "Premier Room" || roomTitle == "Family Room") {
            $(".small-image div:eq(0)").trigger("click");
            $(".small-image div:has(.harako_thumb_text)").remove();
          }
        });
        setImageByWindow();
        clearInterval(checkJsPart);
      }
    }, 10);
  }
  function setStyleByIndex(index) {
    $(".slick-slide").removeClass("slick-active");
    $(".slick-slide").css({
      opacity: "0",
      "z-index": "800",
    });
    $(".slick-slide[index='" + index + "']").addClass("slick-active");
    $(".slick-slide[index='" + index + "']").css({
      opacity: "1",
      "z-index": "900",
    });
    $(".small-image div").removeClass("active");
    $(".small-image div:eq(" + index + ")").addClass("active");
  }
  function setImageByWindow() {
    $(window).resize(function () {
      $(".imageWrapper").each(function () {
        var height = $(this).find(".js-show").width() * 0.75;
        $(this).css("height", height + "px");
        $(this)
          .find(".js-show")
          .css("height", height + "px");
      });
      if ($(window).width() > 784) {
        $(".harako_control_board i").text(
          "Click and hold on the mouse to navigate around and see the different angles"
        );
      } else {
        $(".harako_control_board i").text(
          "Use finger to navigate around and see the different angles"
        );
      }
    });
  }
});
