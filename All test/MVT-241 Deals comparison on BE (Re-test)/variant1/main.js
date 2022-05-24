window.checkJq06020901 = setInterval(function () {
  if (typeof $ != "undefined") {
    $(function () {
      //Data
      var comparisonData = [
        {
          offerName: "Book Direct and Save S$20",
          url: "/deals/rooms/book-direct-and-save.html",
          button:
            "<p><a href='/deals/rooms/book-direct-and-save.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDBOOK'>Book a room</a></p>",
          details: [
            { name: "Rates from", info: "S$399 /night" },
            {
              name: "Resort Dollars",
              info: "- Earn 6% Resort Dollars from your stay",
            },
            {
              name: "Stay period",
              info: "All-year long excluding black-out dates",
            },
            { name: "Minimum no. of nights", info: "N/A" },
            { name: "Advance booking period", info: "2 days in advance" },
            {
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 2 days prior to arrival.",
            },
            { name: "Complimentary room upgrade", info: "N/A" },
            {
              name: "Early check-in (subject to room availability and booked registration time)",
              info: "N/A",
            },
            { name: "Complimentary valet parking/self-parking", info: "N/A" },
            { name: "Luxe Suite Privileges", info: "N/A" },
            {
              name: "When you book a Club Room or Suite:",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Buffet breakfast<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            { name: "Additional discounts", info: "N/A" },
            {
              name: "F&B",
              info: "20% off total bill at RISE Restaurant<br />Up to 10% Resort Dollars when you dine",
            },
            { name: "Retail", info: "3% Resort Dollars when you shop" },
            {
              name: "Spa Treatments",
              info: "Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            { name: "Museum", info: "N/A" },
            { name: "Complimentary Gift", info: "N/A" },
          ],
        },
        {
          offerName: "Flexible Rate",
          url: "/deals/rooms/flexible-rate.html",
          button:
            "<p><a href='/deals/rooms/flexible-rate.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDBAR2'>Book a room</a></p>",
          details: [
            { name: "Rates from", info: "S$419 /night" },
            {
              name: "Resort Dollars",
              info: "- Earn 6% Resort Dollars from your stay",
            },
            {
              name: "Stay period",
              info: "All-year long excluding black-out dates",
            },
            { name: "Minimum no. of nights", info: "N/A" },
            { name: "Advance booking period", info: "1 day in advance" },
            {
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 1 day prior to arrival.",
            },
            { name: "Complimentary room upgrade", info: "N/A" },
            {
              name: "Early check-in (subject to room availability and booked registration time)",
              info: "N/A",
            },
            { name: "Complimentary valet parking/self-parking", info: "N/A" },
            { name: "Luxe Suite Privileges", info: "N/A" },
            {
              name: "When you book a Club Room or Suite:",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Buffet breakfast<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            {
              name: "Additional discounts",
              info: "<li>Sands Rewards LifeStyle Prestige members enjoy 10% off</li><li>Sands Rewards LifeStyle Elite members 15% off</li>",
            },
            {
              name: "F&B",
              info: "20% off total bill at RISE Restaurant<br />Up to 10% Resort Dollars when you dine",
            },
            {
              name: "Retail",
              info: "3% Resort Dollars when you shop",
            },
            {
              name: "Spa Treatments",
              info: "Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            { name: "Museum", info: "N/A" },
            { name: "Complimentary Gift", info: "N/A" },
          ],
        },
        {
          offerName: "Luxe Suite Savings",
          url: "/deals/rooms/luxe-suite-savings.html",
          button:
            "<p><a href='/deals/rooms/luxe-suite-savings.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDADLUX'>Book a room</a></p>",
          details: [
            { name: "Rates from", info: "S$1,775.55 /night" },
            {
              name: "Resort Dollars",
              info: "- Earn 6% Resort Dollars from your stay",
            },
            {
              name: "Stay period",
              info: "All-year long excluding black-out dates",
            },
            { name: "Minimum no. of nights", info: "N/A" },
            { name: "Advance booking period", info: "2 days in advance" },
            {
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 2 days prior to arrival.",
            },
            { name: "Complimentary room upgrade", info: "N/A" },
            {
              name: "Early check-in (subject to room availability and booked registration time)",
              info: "N/A",
            },
            { name: "Complimentary valet parking/self-parking", info: "N/A" },
            {
              name: "Luxe Suite Privileges",
              info: "- In-suite Check-in<br/>- Limousine Transfer<br/>- 24-hour Butler Service<br/>- La Mer privileges<br/>- Banyan Tree Spa<br/>massages (for Merlion or Straits Suites only)",
            },
            {
              name: "When you book a Club Room or Suite:",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Buffet breakfast<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            {
              name: "Additional discounts",
              info: "N/A",
            },
            {
              name: "F&B",
              info: "20% off total bill at RISE Restaurant<br />Up to 10% Resort Dollars when you dine",
            },
            {
              name: "Retail",
              info: "3% Resort Dollars when you shop",
            },
            {
              name: "Spa Treatments",
              info: "Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            { name: "Museum", info: "N/A" },
            { name: "Complimentary Gift", info: "N/A" },
          ],
        },
        /*         {
            offerName: "Staycation Escape",
            url: "/deals/rooms/staycation-escape.html",
            button:
              "<p><a href='/deals/rooms/staycation-escape.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDESC20'>Book a room</a></p>",
            details: [
              { name: "Rates from", info: "S$359 /night" },
              {
                name: "Resort Dollars",
                info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional $20 Resort Dollars",
              },
              { name: "Stay period", info: "1 Mar - 31 Aug 2021" },
              { name: "Minimum no. of nights", info: "N/A" },
              { name: "Advance booking period", info: "1 day in advance" },
              {
                name: "Flexible Cancellation",
                info: "Reservation is cancellable and amendable 2 days prior to arrival.",
              },
              { name: "Complimentary room upgrade", info: "✓" },
              {
                name: "Early check-in (subject to room availability and booked registration time)",
                info: "✓",
              },
              { name: "Complimentary valet parking/self-parking", info: "✓" },
              {
                name: "Luxe Suite Privileges",
                info: "N/A",
              },
              {
                name: "When you book a Club Room or Suite:",
                info: "<b>When you book a Club Room or Suite:</b><br/>- Buffet breakfast<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
              },
              {
                name: "Additional discounts",
                info: "N/A",
              },
              {
                name: "Spa Treatments",
                info: "Up to 50% off at Banyan Tree Spa",
              },
              { name: "Museum", info: "N/A" },
              { name: "Complimentary Gift", info: "N/A" },
            ],
          }, */
        /*         {
            offerName: "Stay Longer by the Bay",
            url: "/deals/rooms/stay-longer-by-the-bay.html",
            button:
              "<p><a href='/deals/rooms/stay-longer-by-the-bay.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDBAY60'>Book a room</a></p>",
            details: [
              { name: "Rates from", info: "S$299 /night" },
              {
                name: "Resort Dollars",
                info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional $120 Resort Dollars ($60 per night)",
              },
              { name: "Stay period", info: "1 Mar - 31 Aug 2021" },
              { name: "Minimum no. of nights", info: "2 nights" },
              { name: "Advance booking period", info: "1 day in advance" },
              {
                name: "Flexible Cancellation",
                info: "Reservation is cancellable and amendable 2 days prior to arrival.",
              },
              { name: "Complimentary room upgrade", info: "✓" },
              {
                name: "Early check-in (subject to room availability and booked registration time)",
                info: "✓",
              },
              { name: "Complimentary valet parking/self-parking", info: "✓" },
              {
                name: "Luxe Suite Privileges",
                info: "N/A",
              },
              {
                name: "When you book a Club Room or Suite:",
                info: "<b>When you book a Club Room or Suite:</b><br/>- Buffet breakfast<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
              },
              {
                name: "Additional discounts",
                info: "N/A",
              },
              {
                name: "Spa Treatments",
                info: "Up to 50% off at Banyan Tree Spa",
              },
              { name: "Museum", info: "N/A" },
              {
                name: "Complimentary Gift",
                info: "Complimentary gift",
              },
            ],
          }, */
        /*         {
            offerName: "STAR WARS™ Identities x MBS",
            url: "/deals/rooms/star-wars-identities.html",
            button:
              "<p><a href='/deals/rooms/star-wars-identities.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDSTARW'>Book a room</a></p>",
            details: [
              { name: "Rates from", info: "S$319 /night" },
              {
                name: "Resort Dollars",
                info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional $120 Resort Dollars ($60 per night)",
              },
              { name: "Stay period", info: "11 Mar – 25 Jul 2021" },
              { name: "Minimum no. of nights", info: "2 nights" },
              { name: "Advance booking period", info: "2 days in advance" },
              {
                name: "Flexible Cancellation",
                info: "Reservation is non-cancellable, non-amendable and non-refundable.",
              },
              { name: "Complimentary room upgrade", info: "✓" },
              {
                name: "Early check-in (subject to room availability and booked registration time)",
                info: "✓",
              },
              { name: "Complimentary valet parking/self-parking", info: "✓" },
              {
                name: "Luxe Suite Privileges",
                info: "N/A",
              },
              {
                name: "When you book a Club Room or Suite:",
                info: "N/A",
              },
              {
                name: "Additional discounts",
                info: "N/A",
              },
              {
                name: "Spa Treatments",
                info: "Up to 50% off at Banyan Tree Spa",
              },
              {
                name: "Museum",
                info: "- Tickets for 2 to STAR WARS™ Identities: The Exhibition",
              },
              {
                name: "Complimentary Gift",
                info: "STAR WARS™  3D Wood Puzzle collectible",
              },
            ],
          }, */
        {
          offerName: "Marina Bay Sands Reimagine",
          url: "/deals/rooms/reimagine-package.html",
          button:
            "<p><a href='/deals/rooms/reimagine-package.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDREIM2'>Book a room</a></p>",
          details: [
            { name: "Rates from", info: "S$469" },
            {
              name: "Resort Dollars",
              info: "- Earn 6% Resort Dollars from your stay",
            },
            {
              name: "Stay period",
              info: "20 Oct 2021 – 31 Mar 2022",
            },
            { name: "Minimum no. of nights", info: "2 nights" },
            { name: "Advance booking period", info: "2 days in advance" },
            {
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 2 days prior to arrival except 28 - 31 Dec 21 & 1 - 4 Jan 22 which is non-cancellable & non-refundable.",
            },
            { name: "Complimentary room upgrade", info: "N/A" },
            {
              name: "Early check-in (subject to room availability and booked registration time)",
              info: "N/A",
            },
            {
              name: "Complimentary valet parking/self-parking",
              info: "N/A",
            },
            {
              name: "Luxe Suite Privileges",
              info: "N/A",
            },
            {
              name: "When you book a Club Room or Suite:",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Buffet breakfast<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            {
              name: "Additional discounts",
              info: "<p style='margin: 16px 0'> <u>Package inclusion is an option on one of the following per night (Guest must be a SRL member):</u> </p> <li>Breakfast for 2 adults at RISE Restaurant</li> <li>Weekday lunch for 2 adults at RISE Restaurant</li> <li>High tea for 2 adults at db Bistro & Oyster Bar</li> <li>ArtScience Museum All-Access Pass for 2</li> <li>Infinity Pool professional photoshoot</li> <p style='margin: 16px 0'>All members enjoy:</p> <li>Membership price for COVID-19 swab and serology tests at KBL Healthcare</li> <li>Complimentary Reward Dollars per night (T&C apply)</li> <li>Complimentary Sands Rewards LifeStyle Prestige tier upgrade</li>",
            },
            {
              name: "F&B",
              info: "Up to 10% Resort Dollars when you dine",
            },
            {
              name: "Retail",
              info: "3% Resort Dollars when you shop",
            },
            {
              name: "Spa Treatments",
              info: "Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            {
              name: "Museum",
              info: "N/A",
            },
            {
              name: "Complimentary Gift",
              info: "N/A",
            },
          ],
        },
        /*         {
            offerName: "Marina Bay Sands Indulgence",
            url: "/deals/rooms/reimagine-package.html",
            button:
              "<p><a href='/deals/rooms/indulgence-package.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDRVIP2'>Book a room</a></p>",
            details: [
              { name: "Rates from", info: "S$1,273.02 /night" },
              {
                name: "Resort Dollars",
                info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional S$20 Reward Dollars per night (from the 3rd night, S$50 Reward Dollars per night)<br/>- Accompanying guest gets S$20 Reward Dollars (one-time redemption for new member only)",
              },
              { name: "Stay period", info: "TBC" },
              { name: "Minimum no. of nights", info: "2 nights" },
              { name: "Advance booking period", info: "2 days in advance" },
              {
                name: "Flexible Cancellation",
                info: "Reservation is cancellable and amendable 2 days prior to arrival.",
              },
              { name: "Complimentary room upgrade", info: "N/A" },
              {
                name: "Early check-in (subject to room availability and booked registration time)",
                info: "N/A",
              },
              { name: "Complimentary valet parking/self-parking", info: "N/A" },
              {
                name: "Luxe Suite Privileges",
                info: "- Limousine Transfer<br/>- 24-hour Butler Service",
              },
              {
                name: "When you book a Club Room or Suite:",
                info: "<b>When you book a Club Room or Suite:</b><br/>- Buffet breakfast<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
              },
              {
                name: "Additional discounts",
                info: "N/A",
              },
              {
                name: "Spa Treatments",
                info: "Up to 30% off at Banyan Tree Spa",
              },
              {
                name: "Museum",
                info: "N/A",
              },
              {
                name: "Complimentary Gift",
                info: "- Free upgrade to Prestige membership<br/>- Choose 1 of 5 per night of stay:<br/>(1) Lunch buffet at RISE restaurant<br/>(2) Dinner at DB, Blossom, and Lavo<br/>(3) 30 mins Banyan Tree SPA, and<br/>(4) ArtScience Museum All-Access Pass (2+2)<br/>(5) Photoshoot at Infinity Pool, Sky Park and Sampan Ride",
              },
            ],
          }, */
        {
          offerName: "Sandsational Staycation",
          url: "/deals/rooms/sandsational-staycation.html",
          button:
            "<p><a href='/deals/rooms/sandsational-staycation.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDSAND2'>Book a room</a></p>",
          details: [
            { name: "Rates from", info: "S$399/night" },
            {
              name: "Resort Dollars",
              info: "N/A",
            },
            {
              name: "Stay period",
              info: "25 Aug - 31 Dec 2021 (excluding 31 Dec)",
            },
            { name: "Minimum no. of nights", info: "2 nights" },
            { name: "Advance booking period", info: "2 days in advance" },
            {
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 2 days prior to arrival except Year End/ New Year period (28 Dec 21 - 4 Jan 22) which is non-cancellable & non-refundable.",
            },
            { name: "Complimentary room upgrade", info: "✓" },
            {
              name: "Early check-in (subject to room availability and booked registration time)",
              info: "✓",
            },
            {
              name: "Complimentary valet parking/self-parking",
              info: "✓ (Self parking)",
            },
            {
              name: "Luxe Suite Privileges",
              info: "N/A",
            },
            {
              name: "When you book a Club Room or Suite:",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Buffet breakfast<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            {
              name: "Additional discounts",
              info: "<p style='margin: 16px 0'> <u>Package inclusion is an option on one of the following per night (Guest must be a SRL member):</u> </p> <li>Breakfast for 2 adults & 1 child at RISE Restaurant</li> <li> Attraction tickets for 2 adults & 1 child at Future World, Sampan Rides & Digital Light Canvas </li> <li> $70 nett dining credit valid at RISE Restaurant, DB Bistro or Bread Street Kitchen. (In-room dining credits available if restaurants are not open due to regulations) </li> <li>Scent creation experience at Maison21G</li>",
            },
            {
              name: "F&B",
              info: "Up to 10% Resort Dollars when you dine",
            },
            {
              name: "Retail",
              info: "3% Resort Dollars when you shop",
            },
            {
              name: "Spa Treatments",
              info: "Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            { name: "Museum", info: "N/A" },
            {
              name: "Complimentary Gift",
              info: "N/A",
            },
          ],
        },
        {
          offerName: "Show and Stay - La Clique",
          url: "/deals/rooms/show-and-stay-la-clique.html",
          button:
            "<p><a href='/deals/rooms/show-and-stay-la-clique.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TPSLACL'>Book a room</a></p>",
          details: [
            { name: "Rates from", info: "S$644.22" },
            {
              name: "Resort Dollars",
              info: "- Earn 6% Resort Dollars from your stay",
            },
            {
              name: "Stay period",
              info: "28 Sep – 7 Nov 2021",
            },
            { name: "Minimum no. of nights", info: "N/A" },
            { name: "Advance booking period", info: "5 days in advance" },
            {
              name: "Flexible Cancellation",
              info: "Reservations require full pre-payment and are non-cancellable, non-amendable and non-refundable. ",
            },
            { name: "Complimentary room upgrade", info: "N/A" },
            {
              name: "Early check-in (subject to room availability and booked registration time)",
              info: "N/A",
            },
            {
              name: "Complimentary valet parking/self-parking",
              info: "N/A",
            },
            {
              name: "Luxe Suite Privileges",
              info: "N/A",
            },
            {
              name: "When you book a Club Room or Suite:",
              info: "N/A",
            },
            {
              name: "Additional discounts",
              info: "N/A",
            },
            {
              name: "F&B",
              info: "Up to 10% Resort Dollars when you dine",
            },
            {
              name: "Retail",
              info: "3% Resort Dollars when you shop",
            },
            {
              name: "Spa Treatments",
              info: "Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            { name: "Museum", info: "N/A" },
            {
              name: "Complimentary Gift",
              info: "N/A",
            },
          ],
        },
      ];
      //Append Compare Plugin;
      $("body").append(
        "<!-- Compare Plugin --> <div class='comparison-plugin fade desktop' style='display: none'> <p class='remove-button'>REMOVE ALL</p> <div class='compare-button'> <p>COMPARE</p> <span class='added-sum fade'></span> </div> </div> <!-- Comparison Lightbox Frame--> <div class='modal fade dy-comparison-lightbox' style='display: none'> <div class='modal-dialog modal-dialog-centered modal-lg' role='document'> <div class='modal-content'> <button type='button' class='close'> <span aria-hidden='true'>×</span> </button> </div> </div> </div> <!-- error-lightbox --> <div class='error-lightbox' style='display: none'> <div class='lightbox-content'> <p>Please select up to 3 deals for comparison</p> <button class='btn btn-primary'  > Close </button> </div> </div>"
      );
      bindComparePlugin();
      //bind "close" button on error-lightbox
      $(".error-lightbox button.btn").click(function () {
        var ele = $(".error-lightbox");
        closeLightbox(ele);
      });
      //bind "close" function (including "X" and white space clicking) on comparison-lightbox
      $(".dy-comparison-lightbox .close").click(function () {
        var ele = $(".dy-comparison-lightbox");
        closeLightbox(ele);
      });
      $("body").click(function (e) {
        var target = $(e.target);
        var ele = $(".dy-comparison-lightbox");
        if (target.is($(".dy-comparison-lightbox.show"))) {
          closeLightbox(ele);
        }
      });
      var url = window.location.href;
      var waitComponentShow = setInterval(function () {
        var stepSelected = $(
          ".inner_circle_step.shapeborder_selected_in"
        ).length;
        if (stepSelected == 2) {
          var getDate = setInterval(function () {
            var checkin = f_getSessionStorage().checkindate;
            var checkout = f_getSessionStorage().checkoutdate;
            if (!(checkin == undefined || checkout == undefined)) {
              addCompareBtn();
              if (url.indexOf("/multirooms.html") == -1) {
                var bindEditClick = setInterval(function () {
                  if ($("#booking_information_edit").length) {
                    $("#booking_information_edit").click(function () {
                      var bindSelectClick = setInterval(function () {
                        if ($("#s_btn_view_rooms").length) {
                          $("#s_btn_view_rooms").click(function () {
                            $("body").removeClass("compare-button-added");
                            addCompareBtn();
                          });
                          clearInterval(bindSelectClick);
                        }
                      });
                    });
                    clearInterval(bindEditClick);
                  }
                });
              }

              clearInterval(getDate);
            }
          }, 100);
          clearInterval(waitComponentShow);
        }
      }, 100);
      function addCompareBtn() {
        clearT();
        var url = window.location.href;
        if (url.indexOf("/rooms.html") > -1) {
          addButtonSingleNight();
          var checkEl = setInterval(function () {
            if (
              $(".room_card .btn.mbs_button_primary").length &&
              $("#loading").css("display") == "none" &&
              $(".close_button").length
            ) {
              $(".close_button").each(function () {
                $(this).bind("click.comparison", function () {
                  $("body").removeClass("compare-button-added");
                  //reset Plugin;
                  hideNum();
                });
              });
              $(".room_card .btn.mbs_button_primary").each(function () {
                $(this).bind("click.comparison", function () {
                  addButtonSingleNight();
                  bindRadioButton();
                });
              });
              clearInterval(checkEl);
            }
          }, 100);
        } else if (url.indexOf("/multirooms.html") > -1) {
          window.checkMultiRoomBtn = setInterval(function () {
            if (
              $(".mulroom_card_left").length &&
              $("#loading").css("display") == "none"
            ) {
              $(".mulroom_card_left").each(function () {
                var title = $.trim($(this).children(".card_title").text());
                $(this).append(
                  "<label class='comparison-checkbox multirooms checkbox'> <input type='checkbox' id='" +
                    title +
                    "' /> <span>Compare deals</span></label >"
                );
              });
              bindCompareCheckbox();
              clearInterval(window.checkMultiRoomBtn);
            }
          }, 100);
        }
      }
      function addButtonSingleNight() {
        var checkSingleRoomBtn = setInterval(function () {
          if (
            $(".packageList_item_title").length &&
            $("#loading").css("display") == "none"
          ) {
            if (!$("body.compare-button-added").length) {
              $("body").addClass("compare-button-added");
              if (!$(".comparison-checkbox").length) {
                $(".packageList_item_title").each(function () {
                  var title = $.trim($(this).text());
                  $(this).append(
                    "<label class='comparison-checkbox checkbox'> <input type='checkbox' id='" +
                      title +
                      "' /> <span>Compare deals</span></label >"
                  );
                });
              }
              bindCompareCheckbox();
            }
            if ($("#select_room_container").length) {
              bindRadioButton();
            }
            clearInterval(checkSingleRoomBtn);
          }
        }, 100);
      }
      function clearT() {
        $(".room_card .btn.mbs_button_primary").each(function () {
          $(this).unbind("click.comparison");
        });
        $(".close_button").each(function () {
          $(this).unbind("click.comparison");
        });
        hideNum();
        if (window.checkMultiRoomBtn) {
          clearInterval(window.checkMultiRoomBtn);
        }
      }
      function updateComparisonButton() {
        var num = $(".comparison-checkbox input:checked").length;
        $(".added-sum").text(num);
        if (num > 0) {
          showNum();
        } else {
          hideNum();
        }
      }
      function showNum() {
        showPlugin();
        $(".comparison-plugin .added-sum").show();
        setTimeout(function () {
          $(".comparison-plugin .added-sum").addClass("show");
        }, 5);
      }
      function hideNum() {
        $(".comparison-plugin .added-sum").removeClass("show");
        setTimeout(function () {
          $(".comparison-plugin .added-sum").hide();
          hidePlugin();
        }, 150);
      }
      function showPlugin() {
        $(".comparison-plugin").show();
        setTimeout(function () {
          $(".comparison-plugin").addClass("show");
        }, 10);
      }
      function hidePlugin() {
        $(".comparison-plugin").removeClass("show");
        setTimeout(function () {
          $(".comparison-plugin").hide();
        }, 150);
      }
      function bindCompareCheckbox() {
        var waitCompareCheckbox = setInterval(function () {
          if (
            $(".comparison-checkbox input").length &&
            $("#loading").css("display") == "none"
          ) {
            $(".comparison-checkbox input").click(function () {
              updateComparisonButton();
            });
            clearInterval(waitCompareCheckbox);
          }
        }, 100);
      }
      function bindRadioButton() {
        var checkRadio = setInterval(function () {
          if (
            $(".room_bed_Box .radio_div").length &&
            $("#loading").css("display") == "none"
          ) {
            $(".room_bed_Box .radio_div")
              .unbind("click.comparison")
              .bind("click.comparison", function () {
                $("body").removeClass("compare-button-added");
                addButtonSingleNight();
                //reset compare-plugin;
                hideNum();
              });
            clearInterval(checkRadio);
          }
        }, 100);
      }
      function bindComparePlugin() {
        $(".remove-button").click(function () {
          $(".comparison-checkbox input").prop("checked", false);
          hideNum();
        });
        //bind "compare" button
        $(".compare-button").click(function () {
          var compareList = [];
          $(".comparison-checkbox input:checked").each(function () {
            compareList.push($(this).attr("id"));
          });
          var compareNo = compareList.length;
          if (compareNo > 3) {
            // if "No. of comparison deals" > 3, show error-lightbox;
            var ele = $(".error-lightbox");
            openLightbox(ele);
          } else if (compareNo > 0) {
            // if "No. of comparison deals" <= 3, render and open comparison lightbox;
            $(".dy-comparison-lightbox .modal-content").append(
              "<div class='modal-body'> <div> <table class='table-responsive table-details details-block-body table-container table' cellspacing='0' cellpadding='0' border='0' > <tbody> <tr class='offerName'> <th width='20%' valign='bottom'> <p>Deal</p> </th> </tr> <tr> <th valign='bottom'><p>Rates from</p></th> </tr> <tr> <th valign='bottom'> <p> Resort Dollars<br /><small style='font-size: 0.8rem' >(only for Sands Rewards members)</small > </p> </th> </tr> <tr> <td colspan='" +
                (compareNo + 1) +
                "'> <p style='text-align: center'> <b>All deals include:</b><br />- High-speed Wi-Fi<br />- Entry to SkyPark Observation Deck &amp; Infinity Pool<br />- Up to 30% off spa treatments </p> </td> </tr> <tr> <th valign='bottom'><p>Stay period</p></th> </tr> <tr> <th valign='bottom'><p>Minimum no. of nights</p></th> </tr> <tr> <th valign='bottom'><p>Advance booking period</p></th> </tr> <tr> <th valign='bottom'><p>Flexible Cancellation</p></th> </tr> <tr> <th valign='bottom'><p>Complimentary room upgrade</p></th> </tr> <tr> <th valign='bottom'> <p> Early check-in <small style='font-size: 0.8rem' >(subject to room availability and booked registration time)</small > </p> </th> </tr> <tr> <th valign='bottom'> <p>Complimentary valet parking/self-parking</p> </th> </tr> <tr> <th valign='bottom'><p>Luxe Suite Privileges</p></th> </tr> <tr class='common'> <th valign='bottom' style='display: none'> <p><b>When you book a Club Room or Suite:</b></p> </th> </tr> <tr class='common'> <th valign='bottom' colspan='" +
                (compareNo + 1) +
                "'> <p style='text-align: center'> <b>More perks when you join Sands Rewards membership:</b> </p> </th> </tr> <tr> <th valign='bottom'><p>Additional discounts</p></th> </tr> <tr> <th valign='bottom'><p>Spa Treatments</p></th> </tr> <tr> <th valign='bottom'><p>Museum</p></th> </tr> <tr> <th valign='bottom'><p>Complimentary Gift</p></th> </tr>  </tbody> </table> </div> </div>"
            );
            for (let i = 0; i < comparisonData.length; i++) {
              var offerName = comparisonData[i].offerName;
              var url = comparisonData[i].url;
              var buttonInfo = comparisonData[i].button;
              if ($.inArray(offerName, compareList) > -1) {
                $(".dy-comparison-lightbox .offerName").append(
                  "<th><p>" + offerName + "</p></th>"
                );
                /* $(".dy-comparison-lightbox .button-line").append(
                      "<td>" + buttonInfo + "</td>"
                    ); */
                for (let x = 0; x < comparisonData[i].details.length; x++) {
                  var detailName = comparisonData[i].details[x].name;
                  var detailInfo = comparisonData[i].details[x].info;
                  $("th:contains(" + detailName + ")")
                    .closest("tr")
                    .append("<td><p>" + detailInfo + "</p></td>");
                }
              }
            }
            //combine the same details(which in array) into one unit for some special
            var toCombineList = [
              "Stay period",
              "Museum",
              "Resort Dollars",
              "Spa Treatments",
              "When you book a Club Room or Suite:",
            ];
            combineTable(toCombineList);
            //special deal to Starwars
            if (
              $.inArray("STAR WARS™ Identities x MBS", compareList) > -1 &&
              compareList.length == 1
            ) {
              $(".dy-comparison-lightbox .common:eq(0) td:eq(0)").hide();
            }
            var ele = $(".dy-comparison-lightbox");
            openLightbox(ele);
          }
        });
      }
      function combineTable(combineDetailnameArr) {
        for (let i = 0; i < combineDetailnameArr.length; i++) {
          var detailName = combineDetailnameArr[i];
          var targetUnit = $("th:contains(" + detailName + ")")
            .closest("tr")
            .children("td");
          var equalNo = 0;
          for (let x = 0; x < targetUnit.length; x++) {
            var firstText = targetUnit.eq(x).text();
            var lastText = targetUnit.eq(x + 1).text();
            if (firstText == lastText) {
              equalNo += 1;
            } else {
              var finalEqual = equalNo;
              if (detailName == "When you book a Club Room or Suite:") {
                var modifiedUnit = targetUnit.eq(x - finalEqual);
                var text = modifiedUnit.html();
                modifiedUnit.attr("colspan", finalEqual + 2).html(text);
                modifiedUnit.find("p").css("text-align", "center");
                for (let y = x - finalEqual + 1; y < x + 1; y++) {
                  modifiedUnit.next().remove();
                }
              } else {
                if (finalEqual > 0) {
                  var modifiedUnit = targetUnit.eq(x - finalEqual);
                  var text = modifiedUnit.html();
                  modifiedUnit.attr("colspan", finalEqual + 1).html(text);
                  modifiedUnit.find("p").css("text-align", "center");
                  for (let y = x - finalEqual + 1; y < x + 1; y++) {
                    modifiedUnit.next().remove();
                  }
                }
              }
              equalNo = 0;
            }
          }
        }
      }
      function openLightbox(eleName) {
        $("body").addClass("modal-open").css("padding-right", "17px");
        $("body").append("<div class='modal-backdrop fade'></div>");
        eleName.show();
        setTimeout(function () {
          eleName.addClass("show");
          $(".modal-backdrop").addClass("show");
        }, 10);
      }
      function closeLightbox(eleName) {
        eleName.removeClass("show");
        $(".modal-backdrop").removeClass("show");
        setTimeout(function () {
          $("body").removeClass("modal-open").css("padding-right", "");
          eleName.hide();
          $(".modal-backdrop").remove();
          if (eleName.is($(".dy-comparison-lightbox"))) {
            $(".dy-comparison-lightbox .modal-content .modal-body").remove();
          }
        }, 150);
      }
    });
    clearInterval(window.checkJq06020901);
  }
}, 100);
