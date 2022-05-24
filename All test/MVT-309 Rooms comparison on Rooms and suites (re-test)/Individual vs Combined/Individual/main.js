$(function () {
  /* Data */
  var roomList = [
    "Deluxe Room",
    "Premier Room",
    "Family Room",
    /* "Club Room",
          "Grand Club Room", */
  ];
  var suiteList = [
    "Orchid Suite",
    /* "Bay Suite", */
    "Sands Suite",
    "Marina Suite",
    "Merlion Suite",
    "Straits Suite",
    "Presidential Suite",
    "Chairman Suite",
  ];
  /* room data */
  var comparisonData = [
    {
      roomName: "Deluxe Room",
      url: "/hotel/rooms-suites/deluxe-room.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Lower Floor<br/>Garden View<br/>Harbour View<br/>City View<br/>Sky View",
        },
        {
          id: "room-size",
          name: "Room Size",
          info: "From 30sqm",
        },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "1 King or 2 Single beds",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "Additional charges apply for a rollaway bed.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Interactive flatscreen TV with cable channels</li><li>Executive work desk</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Breakfast is not included for this room type unless included in the selected package.",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary selections of minibar items</li><li>24 hour in-room dining service</li>",
        },
      ],
    },
    {
      roomName: "Premier Room",
      url: "/hotel/rooms-suites/premier-room.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Lower Floor<br/>Garden View<br/>City View",
        },
        {
          id: "room-size",
          name: "Room Size",
          info: "From 42sqm",
        },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "1 King or 2 Single beds",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "Additional charges apply for a rollaway bed.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower<br/>Deep-soaking bathtub",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Interactive flatscreen TV with cable channels</li><li>Executive work desk</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Breakfast is not included for this room type unless included in the selected package.",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary selections of minibar items</li><li>24 hour in-room dining service</li>",
        },
      ],
    },
    {
      roomName: "Family Room",
      url: "/hotel/rooms-suites/family-room.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Lower Floor",
        },
        { id: "room-size", name: "Room Size", info: "From 101sqm" },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "2 bedrooms, each with 1 King bed",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "No extra bed available for this room type.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower<br/>Deep-soaking bathtub",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Separate living room (with dining area)</li><li>Interactive flatscreen TV with cable channels</li><li>Executive work desk</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Breakfast is not included for this room type.",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary selections of minibar items</li><li>24 hour in-room dining service</li>",
        },
      ],
    },
    /* {
          roomName: "Club Room",
          details: [
            {
              id: "choice-of-views",
              name: "Choice of views",
              info: "Garden View<br/>City View",
            },
            { id: "room-size", name: "Room Size", info: "From 44sqm" },
            {
              id: "bedroom",
              name: "Bedroom",
              info: "1 King bed",
            },
            {
              id: "additional-bed",
              name: "Additional bed",
              info: "Additional charges apply for a rollaway bed.",
            },
            {
              id: "bath-amenities",
              name: "Bath amenities",
              info: "Glass-enclosed shower<br/>Deep-soaking bathtub",
            },
            {
              id: "room-features",
              name: "Room features",
              info: "Gourmet tea selections<br/>Interactive flatscreen TV with cable channels<br/>Executive work desk<br/>iPod/iPhone docking station with alarm and radio",
            },
            {
              id: "breakfast",
              name: "Breakfast",
              info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
            },
            {
              id: "exclusive-privileges-all-room",
              name: "Included with your stay",
              info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
            },
            {
              id: "exclusive-privileges",
              name: "Exclusive privileges",
              info: "Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55<br/>Complimentary selections of minibar items<br/>Complimentary laundry, dry cleaning or pressing of 1 pieces/day<br/>24 hour in-room dining service",
            },
          ],
        }, */
    /* {
          roomName: "Grand Club Room",
          details: [
            {
              id: "choice-of-views",
              name: "Choice of views",
              info: "Garden View<br/>City View",
            },
            { id: "room-size", name: "Room Size", info: "From 62sqm" },
            {
              id: "bedroom",
              name: "Bedroom",
              info: "1 King bed",
            },
            {
              id: "additional-bed",
              name: "Additional bed",
              info: "Additional charges apply for a rollaway bed.",
            },
            {
              id: "bath-amenities",
              name: "Bath amenities",
              info: "Glass-enclosed shower<br/>Deep-soaking bathtub",
            },
            {
              id: "room-features",
              name: "Room features",
              info: "Gourmet tea selections<br/>Interactive flatscreen TV with cable channels<br/>Executive work desk<br/>iPod/iPhone docking station with alarm and radio",
            },
            {
              id: "breakfast",
              name: "Breakfast",
              info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
            },
            {
              id: "exclusive-privileges-all-room",
              name: "Included with your stay",
              info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
            },
            {
              id: "exclusive-privileges",
              name: "Exclusive privileges",
              info: "Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55<br/>Complimentary selections of minibar items<br/>Complimentary laundry, dry cleaning or pressing of 1 pieces/day<br/>24 hour in-room dining service",
            },
          ],
        }, */
    {
      roomName: "Orchid Suite",
      url: "/hotel/rooms-suites/orchid-suite.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Garden View<br/>City View",
        },
        { id: "room-size", name: "Room Size", info: "71sqm" },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "1 bedroom with 1 King bed",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "Additional charges apply for a rollaway bed.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower<br/>Deep-soaking bathtub",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Separate living room</li><li>Flatscreen TVs in bedroom and living room</li><li>All room features afforded to lower tier rooms</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55</li><li>Complimentary selections of minibar items</li><li>Complimentary laundry, dry cleaning or pressing of 1 pieces/day</li><li>24 hour in-room dining service</li>",
        },
      ],
    },
    /* {
          roomName: "Bay Suite",
          details: [
            {
              id: "choice-of-views",
              name: "Choice of views",
              info: "Garden View",
            },
            { id: "room-size", name: "Room Size", info: "101sqm" },
            {
              id: "bedroom",
              name: "Bedroom",
              info: "2 bedrooms, each with 1 King bed",
            },
            {
              id: "additional-bed",
              name: "Additional bed",
              info: "No extra bed available for this room type.",
            },
            {
              id: "bath-amenities",
              name: "Bath amenities",
              info: "Glass-enclosed shower<br/>Deep-soaking bathtub",
            },
            {
              id: "room-features",
              name: "Room features",
              info: "Separate living room<br/>Flatscreen TVs in bedroom and living room<br/>All room features afforded to lower tier rooms",
            },
            {
              id: "breakfast",
              name: "Breakfast",
              info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
            },
            {
              id: "exclusive-privileges-all-room",
              name: "Included with your stay",
              info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
            },
            {
              id: "exclusive-privileges",
              name: "Exclusive privileges",
              info: "Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55<br/>In-suite check-in<br/>24-hour butler service<br/>Complimentary laundry, dry cleaning or pressing of 1 pieces/day",
            },
          ],
        }, */
    {
      roomName: "Sands Suite",
      url: "/hotel/rooms-suites/sands-suite.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Garden View",
        },
        { id: "room-size", name: "Room Size", info: "136sqm" },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "1 bedroom with King bed",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "Additional charges apply for a rollaway bed.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower<br/>Deep-soaking bathtub",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Separate living room</li><li>Dining table</li><li>Room with pool table OR media room</li><li>Flatscreen TVs in bedroom and living room</li><li>All room features afforded to lower tier rooms</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55</li><li>In-suite check-in</li><li>24-hour butler service</li><li>Complimentary laundry, dry cleaning or pressing of 1 pieces/day</li>",
        },
      ],
    },
    {
      roomName: "Marina Suite",
      url: "/hotel/rooms-suites/marina-suite.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Harbour View",
        },
        { id: "room-size", name: "Room Size", info: "139sqm" },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "1 bedroom with King bed",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "No extra bed available for this room type.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower<br/>Jacuzzi",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Separate living room</li><li>Dining table</li><li>Private gym room OR billiards room with pool table</li><li>Flatscreen TVs in bedroom and living room</li><li>All room features afforded to lower tier rooms</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55</li><li>In-suite check-in</li><li>24-hour butler service</li><li>A welcome amenity</li><li>One round-trip limousine to/from airport</li><li>One complimentary, pre-selected cocktail per paying guest</li><li>Complimentary laundry, dry cleaning or pressing of 2 pieces/day</li>",
        },
      ],
    },
    {
      roomName: "Merlion Suite",
      url: "/hotel/rooms-suites/merlion-suite.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Harbour View",
        },
        { id: "room-size", name: "Room Size", info: "387sqm" },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "2 bedrooms, one with 1 King Bed and other with 2 Queen Beds",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "No extra bed available for this room type.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower<br/>Jacuzzi",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Walk-in wardrobe in master bedroom</li><li>Separate living room</li><li>Dining table</li><li>Massage room</li><li>Flatscreen TVs in all bedrooms, living room and gym</li><li>Fully equipped private gym</li><li>All room features afforded to lower tier rooms</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55</li><li>In-suite check-in</li><li>24-hour butler service</li><li>A welcome amenity</li><li>Complimentary Banyan Tree massage for two per stay</li><li>One round-trip limousine to/from airport</li><li>One complimentary, pre-selected cocktail per paying guest</li><li>Complimentary laundry, dry cleaning or pressing of 2 pieces/day</li>",
        },
      ],
    },
    {
      roomName: "Straits Suite",
      url: "/hotel/rooms-suites/straits-suite.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Sky View",
        },
        { id: "room-size", name: "Room Size", info: "330sqm" },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "2 bedrooms, one with 1 King Bed and other with 2 Queen Beds",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "No extra bed available for this room type.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower<br/>Jacuzzi",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Walk-in closet in master bedroom</li><li>Luxury bed linens and pillow menu</li><li>Powder room with salon</li><li>Living room with baby grand piano</li><li>Dining table</li><li>Kitchenette</li><li>Media room with karaoke</li><li>Flatscreen TVs in all bedrooms, living room and media room</li><li>Private gym room with exercise equipment</li><li>Massage room</li><li>Study room</li><li>All room features afforded to lower tier rooms</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55</li><li>In-suite check-in</li><li>24-hour butler service</li><li>A welcome amenity</li><li>Complimentary Banyan Tree massage for two per stay</li><li>One round-trip limousine to/from airport</li><li>One complimentary, pre-selected cocktail per paying guest</li><li>Complimentary laundry, dry cleaning or pressing of 2 pieces/day</li>",
        },
      ],
    },
    {
      roomName: "Presidential Suite",
      url: "/hotel/rooms-suites/presidential-suite.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Harbour View<br/>Sky View",
        },
        { id: "room-size", name: "Room Size", info: "509sqm" },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "3 bedrooms including master bedroom with His and Hers bathrooms",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "No extra bed available for this room type.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower<br/>Jacuzzi",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Luxury linens and pillow menu</li><li>Powder room with salon</li><li>3 furnished balconies</li><li>2 living rooms including 1 with baby grand piano</li><li>Dining table</li><li>Kitchenette</li><li>Media room with karaoke</li><li>Flatscreen TVs in all bedrooms, living room, media room and salon</li><li>Gym room with fitness equipment</li><li>Massage room</li><li>Steam and sauna facilities</li><li>Study room</li><li>All room features afforded to lower tier rooms</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55</li><li>In-suite check-in</li><li>24-hour butler service</li><li>A welcome amenity</li><li>Complimentary Banyan Tree massage for two per stay</li><li>One round-trip limousine to/from airport</li><li>One complimentary, pre-selected cocktail per paying guest</li><li>Complimentary laundry, dry cleaning or pressing of 2 pieces/day</li>",
        },
      ],
    },
    {
      roomName: "Chairman Suite",
      url: "/hotel/rooms-suites/chairman-suite.html",
      details: [
        {
          id: "choice-of-views",
          name: "Choice of views",
          info: "Harbour View<br/>Sky View",
        },
        { id: "room-size", name: "Room Size", info: "600sqm" },
        {
          id: "bedroom",
          name: "Bedroom",
          info: "4 bedrooms including master bedroom with His and Hers bathrooms",
        },
        {
          id: "additional-bed",
          name: "Additional bed",
          info: "No extra bed available for this room type.",
        },
        {
          id: "bath-amenities",
          name: "Bath amenities",
          info: "Glass-enclosed shower<br/>Jacuzzi",
        },
        {
          id: "room-features",
          name: "Room features",
          info: "<li>Luxury bed linens and pillow menu</li><li>Powder room with salon</li><li>3 furnished balconies</li><li>2 living rooms including 1 with baby grand piano</li><li>Dining table</li><li>Kitchenette </li><li>Media room with karaoke</li><li>Flatscreen TVs in all bedrooms, living rooms and media room</li><li>Billiards room with pool table</li><li>Fully equipped private gym</li><li>Massage room </li><li>Steam and sauna facilities</li><li>Study room</li><li>All room features afforded to lower tier rooms</li>",
        },
        {
          id: "breakfast",
          name: "Breakfast",
          info: "Complimentary breakfast at Club55, Spago or Rise (and The Club at Renku from Fri – Mon)",
        },
        {
          id: "exclusive-privileges-all-room",
          name: "Included with your stay",
          info: "<li>Complimentary high-speed Wi-Fi</li><li>Access to the stunning Sands SkyPark Infinity Pool</li><li>Entry to award-winning Banyan Tree Fitness Club</li>",
        },
        {
          id: "exclusive-privileges",
          name: "Exclusive privileges",
          info: "<li>Complimentary breakfast, afternoon tea, and evening drinks & canapés at Club55</li><li>In-suite check-in</li><li>24-hour butler service</li><li>A welcome amenity</li><li>Complimentary Banyan Tree massage for two per stay</li><li>One round-trip limousine to/from airport</li><li>One complimentary, pre-selected cocktail per paying guest</li><li>Complimentary laundry, dry cleaning or pressing of 2 pieces/day</li>",
        },
      ],
    },
  ];

  /* Comparison Lightbox Frame */
  $("body").append(
    "<div class='modal fade dy-roomsComparison-lightbox' style='display: none'> <!-- <div class='modal-dialog modal-dialog-centered modal-lg' role='document'> --> <div class='modal-content'> <button type='button' class='close'> <span aria-hidden='true'>×</span> </button> </div> <!-- </div> --> </div>"
  );
  $(".filter_bar").after(
    "<button class='rooms-comparison-btn'>compare rooms</button>"
  );
  renderCompareBox(roomList, suiteList);
  $(".rooms-comparison-btn").click(function () {
    openLightbox($(".option-box-container"));
  });
  $(window).resize(function () {
    adjustTableCss();
  });
  //close function
  $(document).on("mousedown", function (e) {
    var target = $(e.target);
    var closeTarget = null;
    var ifBindMouseup = 0;
    if (target.is($(".option-box"))) {
      closeTarget = $(".option-box-container");
      ifBindMouseup = 1;
    }
    if (target.is($(".dy-roomsComparison-lightbox"))) {
      closeTarget = $(".dy-roomsComparison-lightbox");
      ifBindMouseup = 1;
    }
    if (ifBindMouseup) {
      $(document).on("mouseup", function () {
        closeLightbox(closeTarget);
        $(document).off("mouseup");
      });
    }
  });
  $(".dy-roomsComparison-lightbox .close").click(function () {
    closeLightbox($(".dy-roomsComparison-lightbox"));
  });

  function renderCompareBox(roomArr, suiteArr) {
    //setTimeout is in order to avoid some conflict with the original js on the page;
    setTimeout(function () {
      $("body").append(
        "<div class='option-box-container fade'> <div class='option-box'> <div class='option-content'> <h2 class='title'>compare rooms</h2> <div class='option-list'> <ul class='rooms'> <b style='font-size: 14px'>Rooms</b> </ul> <ul class='suites'> <b style='font-size: 14px'>Suites</b> </ul> </div> <div class='button-container'> <button class='dy-btn remove-btn'>remove all</button ><button class='dy-btn compare-btn'>compare</button> </div> <button type='button' class='close'> <span aria-hidden='true'>×</span> </button> </div> </div> </div>"
      );
      for (let i = 0; i < roomArr.length; i++) {
        var room = roomArr[i];
        $(".option-box .rooms").append(
          "<li> <label> <input type='checkbox' /> <span>" +
            room +
            "</span></label> </li>"
        );
      }
      for (let i = 0; i < suiteArr.length; i++) {
        var suite = suiteArr[i];
        $(".option-box .suites").append(
          "<li> <label> <input type='checkbox' /> <span>" +
            suite +
            "</span></label> </li>"
        );
      }
      //remove button;
      $(".option-box .remove-btn").click(function () {
        $(".option-box input:checked").prop("checked", false);
      });
      //compare button;
      $(".option-box .compare-btn").click(function () {
        renderCompareLightbox();
      });
      //close button;
      $(".option-box .close").click(function () {
        closeLightbox($(".option-box-container"));
      });
    }, 500);
  }
  function renderCompareLightbox() {
    var compareList = [];
    $(".option-box li:has(input:checked)").each(function () {
      var title = $(this).find("span").text().trim();
      compareList.push(title);
    });
    var compareNo = compareList.length;
    if (compareNo > 0) {
      $(".dy-roomsComparison-lightbox .modal-content").append(
        "<div class='modal-body'> <button class='next-btn show'></button><button class='prev-btn'></button> <h2>compare rooms</h2> <div class='table-container'> <table class='table-responsive table-details details-block-body table tb2' cellspacing='0' cellpadding='0' border='0' > <tbody> <tr class='roomName'> <th valign='bottom' style='width: 99px'><p>Room type</p></th> </tr> </tbody> </table> <table class='table-responsive table-details details-block-body table tb3' cellspacing='0' cellpadding='0' border='0' > <tbody> <tr> <th valign='bottom'><p>Choice of views</p></th> </tr> <tr> <th valign='bottom'><p>Room Size</p></th> </tr> <tr> <th valign='bottom'><p>Bedroom</p></th> </tr> <tr> <th valign='bottom'><p>Additional bed</p></th> </tr> <tr> <th valign='bottom'><p>Bath amenities</p></th> </tr> <tr> <th valign='bottom'><p>Room features</p></th> </tr> <tr> <th valign='bottom'><p>Breakfast</p></th> </tr> <tr> <th valign='bottom'><p>Included with your stay</p></th> </tr> <tr> <th valign='bottom'><p>Exclusive privileges</p></th> </tr> </tbody> </table> <table class='table-responsive table-details details-block-body table tb4' cellspacing='0' cellpadding='0' border='0' > <tbody> <tr id='choice-of-views'></tr> <tr id='room-size'></tr> <tr id='bedroom'></tr> <tr id='additional-bed'></tr> <tr id='bath-amenities'></tr> <tr id='room-features'></tr> <tr id='breakfast'></tr> <tr id='exclusive-privileges-all-room'></tr> <tr id='exclusive-privileges'></tr> </tbody> </table> </div> </div>"
      );
      for (let i = 0; i < comparisonData.length; i++) {
        var roomName = comparisonData[i].roomName;
        var url = comparisonData[i].url;
        if ($.inArray(roomName, compareList) > -1) {
          $(".dy-roomsComparison-lightbox .roomName").append(
            "<th valign='bottom'> <p><a href='" +
              url +
              "' target='_blank' style='text-decoration: none'>" +
              roomName +
              "</a></p> </th>"
          );
          for (let x = 0; x < comparisonData[i].details.length; x++) {
            var id = comparisonData[i].details[x].id;
            var detailInfo = comparisonData[i].details[x].info;
            $(".dy-roomsComparison-lightbox .tb4 tr#" + id + "").append(
              "<td valign='bottom'><p>" + detailInfo + "</p></td>"
            );
          }
        }
      }
      openLightbox($(".dy-roomsComparison-lightbox"));
      //Combine common line;
      /* var toCombineList = [
          "choice-of-views",
          "room-size",
          "bedroom",
          "additional-bed",
          "bath-amenities",
          "room-features",
          "breakfast",
          "exclusive-privileges-all-room",
          "exclusive-privileges",
        ];
        combineTable(toCombineList); */
      //adjust css for table;
      adjustTableCss();
      //bind click for "next button";
      scrollBtn_Mobile();
      //bind scroll;
      scroll_Mobile();
      //slide function for table;
      $(".dy-roomsComparison-lightbox .table-container").on(
        "mousedown",
        function (e) {
          $(document).on("mouseup", function () {
            $(document).off("mousemove");
            $(document).off("mouseup");
          });
          e.preventDefault();
          var table = $(this);
          var originPositionX = table.scrollLeft();
          var originPositionY = table.scrollTop();
          var originMousePositionX = e.pageX;
          var originMousePositionY = e.pageY;
          $(document).on("mousemove", function (e) {
            e.preventDefault();
            var deltaX = e.pageX - originMousePositionX;
            var deltaY = e.pageY - originMousePositionY;
            var newPositionX = originPositionX - deltaX;
            var newPositionY = originPositionY - deltaY;
            table.scrollLeft(newPositionX);
            table.scrollTop(newPositionY);
          });
        }
      );
    }
  }
  function openLightbox(eleName) {
    eleName.show();
    setTimeout(function () {
      eleName.addClass("show");
    }, 10);
  }
  function closeLightbox(eleName) {
    eleName.removeClass("show");
    setTimeout(function () {
      eleName.hide();
      if (eleName.is($(".dy-roomsComparison-lightbox"))) {
        $(".dy-roomsComparison-lightbox .modal-content .modal-body").remove();
      }
    }, 150);
  }
  /* function combineTable(combineDetailnameArr) {
      for (let i = 0; i < combineDetailnameArr.length; i++) {
        var detailName = combineDetailnameArr[i];
        var tr = $("tr#" + detailName + "");
        var targetUnit = tr.children("td");
        var equalNo = 0;
        for (let x = 0; x < targetUnit.length; x++) {
          var firstText = targetUnit.eq(x).text();
          var lastText = targetUnit.eq(x + 1).text();
          if (firstText == lastText) {
            equalNo += 1;
          } else {
            var finalEqual = equalNo;
            if (finalEqual > 0) {
              var modifiedUnit = targetUnit.eq(x - finalEqual);
              var text = modifiedUnit.html();
              modifiedUnit.attr("colspan", finalEqual + 1).html(text);
              modifiedUnit.find("p").css("text-align", "center");
              for (let y = x - finalEqual + 1; y < x + 1; y++) {
                modifiedUnit.next().remove();
              }
            }
            equalNo = 0;
          }
        }
      }
    } */
  function scrollBtn_Mobile() {
    $(".next-btn").click(function () {
      var everyScrollDis = parseInt($(".roomName th:gt(0)").outerWidth());
      var originPosition = $(".table-container").scrollLeft();
      var newPosition = originPosition + everyScrollDis;
      $(".table-container").animate({ scrollLeft: newPosition }, 300);
    });
    $(".prev-btn").click(function () {
      var everyScrollDis = parseInt($(".roomName th:gt(0)").outerWidth());
      var originPosition = $(".table-container").scrollLeft();
      var newPosition = originPosition - everyScrollDis;
      $(".table-container").animate({ scrollLeft: newPosition }, 300);
    });
  }
  function scroll_Mobile() {
    var maxScrollDis =
      $(".dy-roomsComparison-lightbox .tb4").outerWidth() -
      $(".dy-roomsComparison-lightbox .tb4 td:not([colspan])").outerWidth() *
        2 -
      2;
    $(".table-container").scroll(function () {
      var scrollDis = $(this).scrollLeft();
      if (scrollDis < maxScrollDis && scrollDis > 0) {
        $(".dy-roomsComparison-lightbox .next-btn").addClass("show");
        $(".dy-roomsComparison-lightbox .prev-btn").addClass("show");
      } else if (scrollDis <= 0) {
        $(".dy-roomsComparison-lightbox .next-btn").addClass("show");
        $(".dy-roomsComparison-lightbox .prev-btn").removeClass("show");
      } else {
        $(".dy-roomsComparison-lightbox .next-btn").removeClass("show");
        $(".dy-roomsComparison-lightbox .prev-btn").addClass("show");
      }
    });
  }
  function adjustTableCss() {
    //adjust the height of the first column;
    //adjust table 1 (height);
    /* setCommonHeight(
          $(".dy-roomsComparison-lightbox .tb1 tr:eq(0)"),
          $(".dy-roomsComparison-lightbox .tb2 tr:eq(0)")
        );
        var height = $(".dy-roomsComparison-lightbox .tb2").outerHeight();
        $(".dy-roomsComparison-lightbox .tb4").css("top", height + "px"); */
    //adjust table 3 (height);
    for (let i = 0; i < $(".dy-roomsComparison-lightbox .tb3 tr").length; i++) {
      var firstColumn = $(".dy-roomsComparison-lightbox .tb3 tr:eq(" + i + ")");
      var secondColumn = $(
        ".dy-roomsComparison-lightbox .tb4 tr:eq(" + i + ")"
      );
      setCommonHeight(firstColumn, secondColumn);
      //adjust table 2 (width);
      var roomNo = $(".roomName th:gt(0)").length;
      var windowWidth = $(window).width();
      var limitedNo = null;
      if (windowWidth < 500) {
        limitedNo = 2;
        //adjust arrow css;
        var top =
          parseInt(
            $(".dy-roomsComparison-lightbox .modal-body").css("padding-top")
          ) +
          53 +
          $(".dy-roomsComparison-lightbox .tb2 tr").outerHeight() / 2 -
          10;
        $(".dy-roomsComparison-lightbox .next-btn").css("top", top);
        $(".dy-roomsComparison-lightbox .prev-btn").css("top", top);
        //compare the "top" with "offset" cause when "top = 0", position of arrow is different, wierd; If not the same, should adjust the position again;
        var offset =
          $(".dy-roomsComparison-lightbox .modal-body .next-btn").offset().top -
          $(".dy-roomsComparison-lightbox .modal-body").offset().top;
        if (top != offset) {
          $(".dy-roomsComparison-lightbox .next-btn").css("top", top + 10);
          $(".dy-roomsComparison-lightbox .prev-btn").css("top", top + 10);
        }
      } else {
        limitedNo = 5;
      }
      if (roomNo < limitedNo) {
        setCommonWidth(
          $(".dy-roomsComparison-lightbox .tb2 th:gt(0)"),
          $(".dy-roomsComparison-lightbox .tb4 td:not([colspan]")
        );
      } else {
        var commonWidth =
          ($(".table-container").outerWidth() -
            $(".dy-roomsComparison-lightbox .tb1").outerWidth()) /
          limitedNo;
        $(".dy-roomsComparison-lightbox .tb2 th:gt(0)").css(
          "width",
          commonWidth + "px"
        );
        $(".dy-roomsComparison-lightbox .tb4 td:not([colspan])").css(
          "width",
          commonWidth + "px"
        );
      }
      /* setCombinedTab(commonWidth); */
    }
  }
  function setCommonHeight(column_1, column_2) {
    var height_1 = column_1.outerHeight();
    var height_2 = column_2.outerHeight();
    var result = height_1 - height_2;
    var common = null;
    if (result > 0) {
      common = height_1;
    } else {
      common = height_2;
    }
    column_1.css("height", common + "px");
    column_2.css("height", common + "px");
  }
  function setCommonWidth(row_1, row_2) {
    var width_1 = row_1.outerWidth();
    var width_2 = row_2.outerWidth();
    var result = width_1 - width_2;
    var common = null;
    if (result > 0) {
      common = width_1;
    } else {
      common = width_2;
    }
    row_1.css("width", common + "px");
    row_2.css("width", common + "px");
  }
  /* function setCombinedTab(originalWidth) {
      //adjust common tab with 'colspan';
      var commonTab = $(".dy-roomsComparison-lightbox td[colspan]");
      commonTab.each(function () {
        var spanNo = $(this).attr("colspan");
        var updatedWidth = originalWidth * spanNo;
        $(this).css("width", updatedWidth);
      });
    } */
});
