$(function () {
  $("body").addClass("dy-thumbnail");
  //src data of thumbnails for all rooms type
  var roomInfo = [
    {
      roomName: "Deluxe Room - Lower Floor",
      thumbNail: [
        "/content/dam/booking/room-image/deluxe-room-lower-floor/1_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-lower-floor/2_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-lower-floor/3_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-lower-floor/4_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-lower-floor/5_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-lower-floor/6_large.jpg",
      ],
    },
    {
      roomName: "Deluxe Room - Garden View",
      thumbNail: [
        "/content/dam/booking/room-image/deluxe-room-garden-view/1_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-garden-view/2_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-garden-view/3_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-garden-view/4_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-garden-view/5_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-garden-view/6_large.jpg",
      ],
    },
    {
      roomName: "Deluxe Room - City View",
      thumbNail: [
        "/content/dam/booking/room-image/deluxe-room-city-view/1_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-city-view/2_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-city-view/3_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-city-view/4_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-city-view/5_large.jpg",
      ],
    },
    {
      roomName: "Deluxe Room - Sky View",
      thumbNail: [
        "/content/dam/booking/room-image/deluxe-room-sky-view/1_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-sky-view/2_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-sky-view/3_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-sky-view/4_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-sky-view/5_large.jpg",
      ],
    },
    {
      roomName: "Deluxe Room - Harbour View",
      thumbNail: [
        "/content/dam/booking/room-image/deluxe-room-harbour-view/1_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-harbour-view/2_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-harbour-view/3_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-harbour-view/4_large.jpg",
        "/content/dam/booking/room-image/deluxe-room-harbour-view/5_large.jpg",
      ],
    },
    {
      roomName: "Premier Room - Lower Floor",
      thumbNail: [
        "/content/dam/booking/room-image/premier-room-lower-floor/1_large.jpg",
        "/content/dam/booking/room-image/premier-room-lower-floor/2_large.jpg",
        "/content/dam/booking/room-image/premier-room-lower-floor/3_large.jpg",
        "/content/dam/booking/room-image/premier-room-lower-floor/4_large.jpg",
        "/content/dam/booking/room-image/premier-room-lower-floor/5_large.jpg",
        "/content/dam/booking/room-image/premier-room-lower-floor/6_large.jpg",
      ],
    },
    {
      roomName: "Premier Room - Garden View",
      thumbNail: [
        "/content/dam/booking/room-image/premier-room-garden-view/2_large.jpg",
        "/content/dam/booking/room-image/premier-room-garden-view/1_large.jpg",
        "/content/dam/booking/room-image/premier-room-garden-view/3_large.jpg",
        "/content/dam/booking/room-image/premier-room-garden-view/4_large.jpg",
        "/content/dam/booking/room-image/premier-room-garden-view/5_large.jpg",
        "/content/dam/booking/room-image/premier-room-garden-view/6_large.jpg",
      ],
    },
    {
      roomName: "Premier Room - City View",
      thumbNail: [
        "/content/dam/booking/room-image/premier-room-city-view/1_large.jpg",
        "/content/dam/booking/room-image/premier-room-city-view/2_large.jpg",
        "/content/dam/booking/room-image/premier-room-city-view/3_large.jpg",
        "/content/dam/booking/room-image/premier-room-city-view/4_large.jpg",
        "/content/dam/booking/room-image/premier-room-city-view/5_large.jpg",
        "/content/dam/booking/room-image/premier-room-city-view/6_large.jpg",
      ],
    },
    {
      roomName: "Premier Room - Sky View",
      thumbNail: [
        "/content/dam/booking/room-image/premier-room-sky-view/1_large.jpg",
        "/content/dam/booking/room-image/premier-room-sky-view/2_large.jpg",
        "/content/dam/booking/room-image/premier-room-sky-view/3_large.jpg",
        "/content/dam/booking/room-image/premier-room-sky-view/4_large.jpg",
        "/content/dam/booking/room-image/premier-room-sky-view/5_large.jpg",
      ],
    },
    {
      roomName: "Premier Room - Harbour View",
      thumbNail: [
        "/content/dam/booking/room-image/premier-room-harbour-view/1_large.jpg",
        "/content/dam/booking/room-image/premier-room-harbour-view/2_large.jpg",
        "/content/dam/booking/room-image/premier-room-harbour-view/3_large.jpg",
        "/content/dam/booking/room-image/premier-room-harbour-view/4_large.jpg",
        "/content/dam/booking/room-image/premier-room-harbour-view/5_large.jpg",
      ],
    },
    {
      roomName: "Family Room - Lower Floor",
      thumbNail: [
        "/content/dam/booking/room-image/family-room-lower-floor/1_large.jpg",
        "/content/dam/booking/room-image/family-room-lower-floor/2_large.jpg",
        "/content/dam/booking/room-image/family-room-lower-floor/3_large.jpg",
        "/content/dam/booking/room-image/family-room-lower-floor/4_large.jpg",
        "/content/dam/booking/room-image/family-room-lower-floor/5_large.jpg",
      ],
    },
    {
      roomName: "Family Studio - Lower Floor",
      thumbNail: [
        "/content/dam/booking/room-image/family-studio-lower-floor/1_large.jpg",
        "/content/dam/booking/room-image/family-studio-lower-floor/2_large.jpg",
        "/content/dam/booking/room-image/family-studio-lower-floor/3_large.jpg",
        "/content/dam/booking/room-image/family-studio-lower-floor/4_large.jpg",
        "/content/dam/booking/room-image/family-studio-lower-floor/5_large.jpg",
      ],
    },
    {
      roomName: "Family 1 Bedroom - Lower Floor",
      thumbNail: [
        "/content/dam/booking/room-image/family-1-bedroom-lower-floor/1_large.jpg",
        "/content/dam/booking/room-image/family-1-bedroom-lower-floor/2_large.jpg",
        "/content/dam/booking/room-image/family-1-bedroom-lower-floor/3_large.jpg",
        "/content/dam/booking/room-image/family-1-bedroom-lower-floor/4_large.jpg",
        "/content/dam/booking/room-image/family-1-bedroom-lower-floor/5_large.jpg",
      ],
    },
    {
      roomName: "Family 2 Bedroom - Harbour View",
      thumbNail: [
        "/content/dam/booking/room-image/family-2-bedroom-harbour-view/1_large.jpg",
        "/content/dam/booking/room-image/family-2-bedroom-harbour-view/2_large.jpg",
        "/content/dam/booking/room-image/family-2-bedroom-harbour-view/3_large.jpg",
        "/content/dam/booking/room-image/family-2-bedroom-harbour-view/4_large.jpg",
        "/content/dam/booking/room-image/family-2-bedroom-harbour-view/5_large.jpg",
      ],
    },
    {
      roomName: "Club Room - Lower Floor",
      thumbNail: [
        "/content/dam/booking/room-image/club-room-lower-floor/1_large.jpg",
        "/content/dam/booking/room-image/club-room-lower-floor/2_large.jpg",
        "/content/dam/booking/room-image/club-room-lower-floor/3_large.jpg",
        "/content/dam/booking/room-image/club-room-lower-floor/4_large.jpg",
        "/content/dam/booking/room-image/club-room-lower-floor/5_large.jpg",
      ],
    },
    {
      roomName: "Club Room - Garden View",
      thumbNail: [
        "/content/dam/booking/room-image/club-room-garden-view/1_large.jpg",
        "/content/dam/booking/room-image/club-room-garden-view/2_large.jpg",
        "/content/dam/booking/room-image/club-room-garden-view/3_large.jpg",
        "/content/dam/booking/room-image/club-room-garden-view/4_large.jpg",
        "/content/dam/booking/room-image/club-room-garden-view/5_large.jpg",
        "/content/dam/booking/room-image/club-room-garden-view/6_large.jpg",
        "/content/dam/booking/room-image/club-room-garden-view/7_large.jpg",
      ],
    },
    {
      roomName: "Club Room - City View",
      thumbNail: [
        "/content/dam/booking/room-image/club-room-city-view/1_large.jpg",
        "/content/dam/booking/room-image/club-room-city-view/2_large.jpg",
        "/content/dam/booking/room-image/club-room-city-view/3_large.jpg",
        "/content/dam/booking/room-image/club-room-city-view/4_large.jpg",
        "/content/dam/booking/room-image/club-room-city-view/5_large.jpg",
        "/content/dam/booking/room-image/club-room-city-view/6_large.jpg",
        "/content/dam/booking/room-image/club-room-city-view/7_large.jpg",
      ],
    },
    {
      roomName: "Grand Club Room - Garden View",
      thumbNail: [
        "/content/dam/booking/room-image/grand-club-room-garden-view/1_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-garden-view/2_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-garden-view/3_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-garden-view/4_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-garden-view/5_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-garden-view/6_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-garden-view/7_large.jpg",
      ],
    },
    {
      roomName: "Grand Club Room - City View",
      thumbNail: [
        "/content/dam/booking/room-image/grand-club-room-city-view/1_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-city-view/2_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-city-view/3_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-city-view/4_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-city-view/5_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-city-view/6_large.jpg",
        "/content/dam/booking/room-image/grand-club-room-city-view/7_large.jpg",
      ],
    },
    {
      roomName: "Orchid Suite - Garden View",
      thumbNail: [
        "/content/dam/booking/room-image/orchid-suite-garden-view/1_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-garden-view/2_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-garden-view/3_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-garden-view/4_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-garden-view/5_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-garden-view/6_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-garden-view/7_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-garden-view/8_large.jpg",
      ],
    },
    {
      roomName: "Orchid Suite - City View",
      thumbNail: [
        "/content/dam/booking/room-image/orchid-suite-city-view/1_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-city-view/2_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-city-view/3_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-city-view/4_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-city-view/5_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-city-view/6_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-city-view/7_large.jpg",
        "/content/dam/booking/room-image/orchid-suite-city-view/8_large.jpg",
      ],
    },
    {
      roomName: "Sands Suite - Garden View",
      thumbNail: [
        "/content/dam/booking/room-image/sands-suite-garden-view/1_large.jpg",
        "/content/dam/booking/room-image/sands-suite-garden-view/2_large.jpg",
        "/content/dam/booking/room-image/sands-suite-garden-view/3_large.jpg",
        "/content/dam/booking/room-image/sands-suite-garden-view/4_large.jpg",
        "/content/dam/booking/room-image/sands-suite-garden-view/5_large.jpg",
        "/content/dam/booking/room-image/sands-suite-garden-view/6_large.jpg",
        "/content/dam/booking/room-image/sands-suite-garden-view/7_large.jpg",
      ],
    },
    {
      roomName: "Bay Suite - Garden View",
      thumbNail: [
        "/content/dam/booking/room-image/bay-suite-garden-view/1_large.jpg",
        "/content/dam/booking/room-image/bay-suite-garden-view/2_large.jpg",
        "/content/dam/booking/room-image/bay-suite-garden-view/3_large.jpg",
        "/content/dam/booking/room-image/bay-suite-garden-view/4_large.jpg",
        "/content/dam/booking/room-image/bay-suite-garden-view/5_large.jpg",
        "/content/dam/booking/room-image/bay-suite-garden-view/6_large.jpg",
        "/content/dam/booking/room-image/bay-suite-garden-view/7_large.jpg",
      ],
    },
    {
      roomName: "Harbour Suite - Harbour View",
      thumbNail: [
        "/content/dam/booking/room-image/harbour-suite-harbour-view/1_large.jpg",
        "/content/dam/booking/room-image/harbour-suite-harbour-view/2_large.jpg",
        "/content/dam/booking/room-image/harbour-suite-harbour-view/3_large.jpg",
        "/content/dam/booking/room-image/harbour-suite-harbour-view/4_large.jpg",
        "/content/dam/booking/room-image/harbour-suite-harbour-view/5_large.jpg",
        "/content/dam/booking/room-image/harbour-suite-harbour-view/6_large.jpg",
        "/content/dam/booking/room-image/harbour-suite-harbour-view/7_large.jpg",
        "/content/dam/booking/room-image/harbour-suite-harbour-view/8_large.jpg",
      ],
    },
    {
      roomName: "Marina Suite - Harbour View",
      thumbNail: [
        "/content/dam/booking/room-image/marina-suite-harbour-view/1_large.jpg",
        "/content/dam/booking/room-image/marina-suite-harbour-view/2_large.jpg",
        "/content/dam/booking/room-image/marina-suite-harbour-view/3_large.jpg",
        "/content/dam/booking/room-image/marina-suite-harbour-view/4_large.jpg",
        "/content/dam/booking/room-image/marina-suite-harbour-view/5_large.jpg",
        "/content/dam/booking/room-image/marina-suite-harbour-view/6_large.jpg",
        "/content/dam/booking/room-image/marina-suite-harbour-view/7_large.jpg",
        "/content/dam/booking/room-image/marina-suite-harbour-view/8_large.jpg",
        "/content/dam/booking/room-image/marina-suite-harbour-view/9_large.jpg",
      ],
    },
    {
      roomName: "Skyline Suite - Sky View",
      thumbNail: [
        "/content/dam/booking/room-image/skyline-suite-sky-view/1_large.jpg",
        "/content/dam/booking/room-image/skyline-suite-sky-view/2_large.jpg",
        "/content/dam/booking/room-image/skyline-suite-sky-view/3_large.jpg",
        "/content/dam/booking/room-image/skyline-suite-sky-view/4_large.jpg",
        "/content/dam/booking/room-image/skyline-suite-sky-view/5_large.jpg",
        "/content/dam/booking/room-image/skyline-suite-sky-view/6_large.jpg",
        "/content/dam/booking/room-image/skyline-suite-sky-view/7_large.jpg",
        "/content/dam/booking/room-image/skyline-suite-sky-view/8_large.jpg",
      ],
    },
    {
      roomName: "Merlion Suite - Harbour View",
      thumbNail: [
        "/content/dam/booking/room-image/merlion-suite-harbour-view/1_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/3_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/4_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/5_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/6_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/7_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/8_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/9_large.jpg",
      ],
    },
    {
      roomName: "Straits Suite - Sky View",
      thumbNail: [
        "/content/dam/booking/room-image/straits-suite-sky-view/1_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/2_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/3_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/4_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/5_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/6_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/7_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/8_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/9_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/10_large.jpg",
        "/content/dam/booking/room-image/straits-suite-sky-view/11_large.jpg",
      ],
    },
    {
      roomName: "Presidential Suite - Harbour View",
      thumbNail: [
        "/content/dam/booking/room-image/presidential-suite/presidential-suite-1_1920x960.jpg",
      ],
    },
    {
      roomName: "Istana Suite - Lower Floor",
      thumbNail: [
        "/content/dam/booking/room-image/merlion-suite-harbour-view/1_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/2_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/3_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/4_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/5_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/6_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/7_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/8_large.jpg",
        "/content/dam/booking/room-image/merlion-suite-harbour-view/9_large.jpg",
      ],
    },
    {
      roomName: "Chairman Suite - Sky View",
      thumbNail: [
        "/content/dam/booking/room-image/chairman-suite/chairman-suite-1-1920x960.jpg",
      ],
    },
  ];
  addThumbnail();
  bindFilterClick();
  //setTimeout to let the binding run after "sticky filter" test; (Cause "sticky filter" test do changing on edit button)
  setTimeout(function () {
    if ($("body.dy-sticky-filter").length) {
      //bind edit button click when "sticky filter" test running;
      var bindEditClick = setInterval(function () {
        if ($(".booking_information_people #booking_information_edit").length) {
          $(".booking_information_people #booking_information_edit").click(
            function () {
              var bindSelectClick = setInterval(function () {
                if ($("#s_btn_view_rooms").length) {
                  $("#s_btn_view_rooms").click(function () {
                    addThumbnail();
                    bindFilterClick();
                  });
                  clearInterval(bindSelectClick);
                }
              }, 10);
            }
          );
          clearInterval(bindEditClick);
        }
      }, 10);
    } else {
      //bind edit button click;
      var bindEditClick = setInterval(function () {
        if ($(".booking_information+#booking_information_edit").length) {
          $(".booking_information+#booking_information_edit").click(
            function () {
              var bindSelectClick = setInterval(function () {
                if ($("#s_btn_view_rooms").length) {
                  $("#s_btn_view_rooms").click(function () {
                    addThumbnail();
                    bindFilterClick();
                  });
                  clearInterval(bindSelectClick);
                }
              }, 10);
            }
          );
          clearInterval(bindEditClick);
        }
      }, 10);
    }
  }, 500);

  //rendor function;
  function addThumbnail() {
    //render thumbnail gallery;
    var waitEl = setInterval(function () {
      if (
        $(".room_ImagePanel").length &&
        $("#loading").css("display") == "none"
      ) {
        if (!($(".dy-thumbnail-gallery").length || $(".err_div").length)) {
          $(".room_ImagePanel").each(function () {
            var thisImagePanel = $(this);
            thisImagePanel.append(
              "<div class='dy-thumbnail-gallery'> <button class='slick_slider_button slick_slider_button_prev slick-disabled'> <img src='/static/marinabaysands/bookinglibs/images/left.svg' /></button ><button class='slick_slider_button slick_slider_button_next'> <img src='/static/marinabaysands/bookinglibs/images/right-circle.svg' /> </button> <div class='dy-swiper-container'> <div class='dy-swiper-content'></div> </div> </div>"
            );
            var title = thisImagePanel
              .next(".room_ImageCenterPanel")
              .children(".txt-black-five");
            title =
              title.html().replace(/<span>.*<\/span>/gim, "") +
              $.trim(title.children("span").text());

            //render the images;
            for (let i = 0; i < roomInfo.length; i++) {
              var fitTitle = roomInfo[i].roomName;
              var thumbNailArr = roomInfo[i].thumbNail;
              if (title == fitTitle) {
                thisImagePanel.children("div:eq(0)").children("img").remove();
                for (let j = 0; j < thumbNailArr.length; j++) {
                  var thumbNailSrc = thumbNailArr[j];
                  thisImagePanel
                    .children("div:eq(0)")
                    .append(
                      "<img style='display:none;' src='" + thumbNailSrc + "'/>"
                    );
                  thisImagePanel
                    .children("div:eq(0)")
                    .children("img:eq(0)")
                    .show();
                  thisImagePanel
                    .children(".dy-thumbnail-gallery")
                    .children(".dy-swiper-container")
                    .children(".dy-swiper-content")
                    .append(
                      "<div class='card-image'> <img src='" +
                        thumbNailSrc +
                        "' alt='' /> </div>"
                    );
                }
                thisImagePanel.addClass("thumbnail-added");
                thisImagePanel
                  .children(".dy-thumbnail-gallery")
                  .find(".card-image:eq(0)")
                  .addClass("active");
              }
            }
            //bind click function of images;
            $(".dy-thumbnail-gallery .dy-swiper-content .card-image").click(
              function () {
                var src = $(this).children("img").attr("src");
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $(this)
                  .closest(".dy-thumbnail-gallery")
                  .prev("div")
                  .children("img")
                  .hide();
                $(this)
                  .closest(".dy-thumbnail-gallery")
                  .prev("div")
                  .children("img[src='" + src + "']")
                  .show();
              }
            );
            //bind Slider(Desktop);
            thisImagePanel
              .children(".dy-thumbnail-gallery")
              .children(".dy-swiper-container")
              .children(".dy-swiper-content")
              .on("mousedown", function (e) {
                e.preventDefault();
                $(document).on("mouseup", function (e) {
                  e.preventDefault();
                  $(document).off("mousemove");
                  var operatingGallery = $(".dy-thumbnail-gallery.operating");
                  var nowPosition =
                    operatingGallery.find(".dy-swiper-content").offset().left -
                    operatingGallery.offset().left;
                  var imgWidth =
                    operatingGallery
                      .find(".dy-swiper-content")
                      .children(".card-image")
                      .width() +
                    parseFloat(
                      operatingGallery
                        .find(".dy-swiper-content")
                        .children(".card-image")
                        .css("margin-right")
                    ) +
                    2;
                  var containerWidth = parseFloat(
                    operatingGallery.find(".dy-swiper-container").width()
                  );
                  var contentWitdh = parseFloat(
                    operatingGallery.find(".dy-swiper-content").width()
                  );
                  var maxDistance = contentWitdh - containerWidth;
                  var numOfhiddenPicture = nowPosition / imgWidth;
                  var imgNoSliderCanContain = containerWidth / imgWidth;
                  var imgTotalNo = operatingGallery
                    .find(".dy-swiper-content")
                    .children(".card-image").length;
                  var maxHiddenImgNo = imgTotalNo - imgNoSliderCanContain;
                  if (nowPosition >= 0) {
                    if (numOfhiddenPicture > 0) {
                      numOfhiddenPicture = 0;
                    }
                    operatingGallery.find(".dy-swiper-content").css({
                      transform:
                        "translate3d(" +
                        parseInt(numOfhiddenPicture) * imgWidth +
                        "px, 0px, 0px)",
                      transition: "transform 300ms ease 0s",
                    });
                    setTimeout(function () {
                      operatingGallery
                        .find(".dy-swiper-content")
                        .css("transition", "");
                    }, 300);
                  } else if (nowPosition < 0 && nowPosition > -maxDistance) {
                    operatingGallery.find(".dy-swiper-content").css({
                      transform:
                        "translate3d(" +
                        parseInt(numOfhiddenPicture) * imgWidth +
                        "px, 0px, 0px)",
                      transition: "transform 300ms ease 0s",
                    });
                    setTimeout(function () {
                      operatingGallery
                        .find(".dy-swiper-content")
                        .css("transition", "");
                    }, 300);
                  } else if (nowPosition <= -maxDistance) {
                    operatingGallery.find(".dy-swiper-content").css({
                      transform:
                        "translate3d(" + -maxDistance + "px, 0px, 0px)",
                      transition: "transform 300ms ease 0s",
                    });
                    setTimeout(function () {
                      operatingGallery
                        .find(".dy-swiper-content")
                        .css("transition", "");
                    }, 300);
                  }
                  //control prev/next buttons
                  if (nowPosition > -imgWidth) {
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_prev")
                      .addClass("slick-disabled");
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_next")
                      .removeClass("slick-disabled");
                  } else if (
                    nowPosition <= -imgWidth &&
                    nowPosition > -maxDistance
                  ) {
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_prev")
                      .removeClass("slick-disabled");
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_next")
                      .removeClass("slick-disabled");
                  } else if (nowPosition <= -maxDistance) {
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_prev")
                      .removeClass("slick-disabled");
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_next")
                      .addClass("slick-disabled");
                  }
                  operatingGallery.removeClass("operating");
                  $(document).off("mouseup");
                });
                var gallery = $(this).closest(".dy-thumbnail-gallery");
                gallery.addClass("operating");
                var containerWidth = parseFloat(
                  gallery.find(".dy-swiper-container").width()
                );
                var contentWitdh = parseFloat(
                  gallery.find(".dy-swiper-content").width()
                );
                var maxDistance = contentWitdh - containerWidth;
                var originPosition =
                  gallery.find(".dy-swiper-content").offset().left -
                  gallery.offset().left;
                var originMousePosition = e.pageX;
                $(document).on("mousemove", function (e) {
                  e.preventDefault();
                  var deltaX = e.pageX - originMousePosition;
                  var newPosition =
                    gallery.find(".dy-swiper-content").offset().left -
                    gallery.offset().left;
                  if (newPosition >= 0) {
                    gallery
                      .find(".dy-swiper-content")
                      .css(
                        "transform",
                        "translate3d(" +
                          (parseFloat(deltaX) + parseFloat(originPosition)) /
                            3 +
                          "px, 0px, 0px)"
                      );
                  } else if (newPosition < 0 && newPosition > -maxDistance) {
                    gallery
                      .find(".dy-swiper-content")
                      .css(
                        "transform",
                        "translate3d(" +
                          (parseFloat(deltaX) + parseFloat(originPosition)) +
                          "px, 0px, 0px)"
                      );
                  } else if (newPosition <= -maxDistance) {
                    var slideFromOverToIn =
                      -deltaX - (originPosition + maxDistance);
                    gallery
                      .find(".dy-swiper-content")
                      .css(
                        "transform",
                        "translate3d(" +
                          (parseFloat(-maxDistance) -
                            parseFloat(slideFromOverToIn) / 3) +
                          "px, 0px, 0px)"
                      );
                  }
                });
              });
            //bind Slider(Mobile);
            thisImagePanel
              .children(".dy-thumbnail-gallery")
              .children(".dy-swiper-container")
              .children(".dy-swiper-content")
              .on("touchstart", function (e) {
                $(document).on("touchend", function () {
                  $(document).off("touchmove");
                  var operatingGallery = $(".dy-thumbnail-gallery.operating");
                  var nowPosition =
                    operatingGallery.find(".dy-swiper-content").offset().left -
                    operatingGallery.offset().left;
                  var imgWidth =
                    operatingGallery
                      .find(".dy-swiper-content")
                      .children(".card-image")
                      .width() +
                    parseFloat(
                      operatingGallery
                        .find(".dy-swiper-content")
                        .children(".card-image")
                        .css("margin-right")
                    ) +
                    2;
                  var containerWidth = parseFloat(
                    operatingGallery.find(".dy-swiper-container").width()
                  );
                  var contentWitdh = parseFloat(
                    operatingGallery.find(".dy-swiper-content").width()
                  );
                  var maxDistance = contentWitdh - containerWidth;
                  var numOfhiddenPicture = nowPosition / imgWidth;
                  var imgNoSliderCanContain = containerWidth / imgWidth;
                  var imgTotalNo = operatingGallery
                    .find(".dy-swiper-content")
                    .children(".card-image").length;
                  var maxHiddenImgNo = imgTotalNo - imgNoSliderCanContain;
                  if (nowPosition >= 0) {
                    if (numOfhiddenPicture > 0) {
                      numOfhiddenPicture = 0;
                    }
                    operatingGallery.find(".dy-swiper-content").css({
                      transform:
                        "translate3d(" +
                        parseInt(numOfhiddenPicture) * imgWidth +
                        "px, 0px, 0px)",
                      transition: "transform 300ms ease 0s",
                    });
                    setTimeout(function () {
                      operatingGallery
                        .find(".dy-swiper-content")
                        .css("transition", "");
                    }, 300);
                  } else if (nowPosition < 0 && nowPosition > -maxDistance) {
                    operatingGallery.find(".dy-swiper-content").css({
                      transform:
                        "translate3d(" +
                        parseInt(numOfhiddenPicture) * imgWidth +
                        "px, 0px, 0px)",
                      transition: "transform 300ms ease 0s",
                    });
                    setTimeout(function () {
                      operatingGallery
                        .find(".dy-swiper-content")
                        .css("transition", "");
                    }, 300);
                  } else if (nowPosition <= -maxDistance) {
                    operatingGallery.find(".dy-swiper-content").css({
                      transform:
                        "translate3d(" + -maxDistance + "px, 0px, 0px)",
                      transition: "transform 300ms ease 0s",
                    });
                    setTimeout(function () {
                      operatingGallery
                        .find(".dy-swiper-content")
                        .css("transition", "");
                    }, 300);
                  }
                  //control prev/next buttons
                  if (nowPosition > -imgWidth) {
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_prev")
                      .addClass("slick-disabled");
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_next")
                      .removeClass("slick-disabled");
                  } else if (
                    nowPosition <= -imgWidth &&
                    nowPosition > -maxDistance
                  ) {
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_prev")
                      .removeClass("slick-disabled");
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_next")
                      .removeClass("slick-disabled");
                  } else if (nowPosition <= -maxDistance) {
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_prev")
                      .removeClass("slick-disabled");
                    thisImagePanel
                      .children(".dy-thumbnail-gallery")
                      .children(".slick_slider_button_next")
                      .addClass("slick-disabled");
                  }
                  operatingGallery.removeClass("operating");
                  $(document).off("touchend");
                });
                var gallery = $(this).closest(".dy-thumbnail-gallery");
                gallery.addClass("operating");
                var containerWidth = parseFloat(
                  gallery.find(".dy-swiper-container").width()
                );
                var contentWitdh = parseFloat(
                  gallery.find(".dy-swiper-content").width()
                );
                var maxDistance = contentWitdh - containerWidth;

                var originPosition =
                  gallery.find(".dy-swiper-content").offset().left -
                  gallery.offset().left;
                var originMousePosition = e.touches[0].clientX;
                $(document).on("touchmove", function (e) {
                  e.preventDefault();
                  var deltaX = e.touches[0].clientX - originMousePosition;
                  var newPosition =
                    gallery.find(".dy-swiper-content").offset().left -
                    gallery.offset().left;
                  if (newPosition >= 0) {
                    gallery
                      .find(".dy-swiper-content")
                      .css(
                        "transform",
                        "translate3d(" +
                          (parseFloat(deltaX) + parseFloat(originPosition)) /
                            3 +
                          "px, 0px, 0px)"
                      );
                  } else if (newPosition < 0 && newPosition > -maxDistance) {
                    gallery
                      .find(".dy-swiper-content")
                      .css(
                        "transform",
                        "translate3d(" +
                          (parseFloat(deltaX) + parseFloat(originPosition)) +
                          "px, 0px, 0px)"
                      );
                  } else if (newPosition <= -maxDistance) {
                    var slideFromOverToIn =
                      -deltaX - (originPosition + maxDistance);
                    gallery
                      .find(".dy-swiper-content")
                      .css(
                        "transform",
                        "translate3d(" +
                          (parseFloat(-maxDistance) -
                            parseFloat(slideFromOverToIn) / 3) +
                          "px, 0px, 0px)"
                      );
                  }
                });
              });

            //Next Button;
            thisImagePanel
              .children(".dy-thumbnail-gallery")
              .children(".slick_slider_button_next")
              .click(function () {
                var button = $(this);
                var gallery = $(this).closest(".dy-thumbnail-gallery");
                if (!gallery.find(".dy-swiper-content.sliding").length) {
                  thisImagePanel
                    .children(".dy-thumbnail-gallery")
                    .children(".slick_slider_button_prev")
                    .removeClass("slick-disabled");
                  var containerWidth = parseFloat(
                    gallery.find(".dy-swiper-container").width()
                  );
                  var contentWitdh = parseFloat(
                    gallery.find(".dy-swiper-content").width()
                  );
                  //"2" is the border (fix)
                  var imgWidth =
                    gallery
                      .find(".dy-swiper-content")
                      .children(".card-image")
                      .width() +
                    parseFloat(
                      gallery
                        .find(".dy-swiper-content")
                        .children(".card-image")
                        .css("margin-right")
                    ) +
                    2;
                  var originPosition =
                    gallery.find(".dy-swiper-content").offset().left -
                    gallery.offset().left;
                  var maxImgNoOnShow = (containerWidth / imgWidth).toFixed(0);
                  var leftImgNo = (contentWitdh + originPosition) / imgWidth;
                  gallery
                    .find(".dy-swiper-content")
                    .css({
                      transform:
                        "translate3d(" +
                        (originPosition - imgWidth) +
                        "px, 0px, 0px)",
                      transition: "transform 300ms ease",
                    })
                    .addClass("sliding");
                  setTimeout(function () {
                    gallery
                      .find(".dy-swiper-content")
                      .css("transition", "")
                      .removeClass("sliding");
                  }, 300);
                  if (leftImgNo - 1 <= maxImgNoOnShow) {
                    button.addClass("slick-disabled");
                  }
                }
              });

            //Prev Button;
            thisImagePanel
              .children(".dy-thumbnail-gallery")
              .children(".slick_slider_button_prev")
              .click(function () {
                var button = $(this);
                var gallery = $(this).closest(".dy-thumbnail-gallery");
                if (!gallery.find(".dy-swiper-content.sliding").length) {
                  thisImagePanel
                    .children(".dy-thumbnail-gallery")
                    .children(".slick_slider_button_next")
                    .removeClass("slick-disabled");
                  //"2" is the border (fix)
                  var imgWidth =
                    gallery
                      .find(".dy-swiper-content")
                      .children(".card-image")
                      .width() +
                    parseFloat(
                      gallery
                        .find(".dy-swiper-content")
                        .children(".card-image")
                        .css("margin-right")
                    ) +
                    2;
                  var containerWidth = parseFloat(
                    gallery.find(".dy-swiper-container").width()
                  );
                  var contentWitdh = parseFloat(
                    gallery.find(".dy-swiper-content").width()
                  );
                  var maxDistance = contentWitdh - containerWidth;
                  var originPosition =
                    gallery.find(".dy-swiper-content").offset().left -
                    gallery.offset().left;
                  var numOfHiddenImgNo = (-originPosition / imgWidth).toFixed(
                    0
                  );

                  if (originPosition == -maxDistance) {
                    gallery
                      .find(".dy-swiper-content")
                      .css({
                        transform:
                          "translate3d(" +
                          (numOfHiddenImgNo - 1) * -imgWidth +
                          "px, 0px, 0px)",
                        transition: "transform 300ms ease",
                      })
                      .addClass("sliding");
                  } else {
                    gallery
                      .find(".dy-swiper-content")
                      .css({
                        transform:
                          "translate3d(" +
                          (originPosition + imgWidth) +
                          "px, 0px, 0px)",
                        transition: "transform 300ms ease",
                      })
                      .addClass("sliding");
                  }
                  setTimeout(function () {
                    gallery
                      .find(".dy-swiper-content")
                      .css("transition", "")
                      .removeClass("sliding");
                  }, 300);
                  if ((-originPosition / imgWidth).toFixed(0) - 1 <= 0) {
                    button.addClass("slick-disabled");
                  }
                }
              });
          });
        }
        clearInterval(waitEl);
      }
    }, 100);
  }
  function bindFilterClick() {
    //bind filter click;
    var waitFilter = setInterval(function () {
      if (
        $(".room_views .dropdown_menu_item").length &&
        $(".room_types .dropdown_menu_item") &&
        $("#sort_by").length &&
        $("#loading").css("display") == "none"
      ) {
        //filter click to add thumbnail;
        $(".room_views .dropdown_menu_item").click(function () {
          addThumbnail();
        });
        $(".room_types .dropdown_menu_item").click(function () {
          addThumbnail();
        });
        $("#sort_by").click(function () {
          addThumbnail();
        });
        clearInterval(waitFilter);
      }
    }, 100);
  }
});
