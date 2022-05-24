window.checkJq03041558 = setInterval(function () {
  if (typeof jQuery != "undefined") {
    $(function () {
      $("body").addClass("dy-comparison-test");
      var comparisionData = [
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
              name: "Spa Treatments",
              info: "Up to 50% off at Banyan Tree Spa",
            },
            { name: "Museum", info: "Free entry to selected exhibitions" },
            { name: "Others", info: "N/A" },
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
            { name: "Advance booking period", info: "N/A" },
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
              info: "Sands Rewards LifeStyle Prestige and Elite tier members enjoy 10% and 15% respectively",
            },
            {
              name: "Spa Treatments",
              info: "Up to 50% off at Banyan Tree Spa",
            },
            { name: "Museum", info: "Free entry to selected exhibitions" },
            { name: "Others", info: "N/A" },
          ],
        },
        {
          offerName: "Luxe Suite Savings",
          url: "/deals/rooms/luxe-suite-savings.html",
          button:
            "<p><a href='/deals/rooms/luxe-suite-savings.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDADLUX'>Book a room</a></p>",
          details: [
            { name: "Rates from", info: "S$1,585 /night" },
            {
              name: "Resort Dollars",
              info: "- Earn 6% Resort Dollars from your stay",
            },
            {
              name: "Stay period",
              info: "All-year long excluding black-out dates",
            },
            { name: "Minimum no. of nights", info: "N/A" },
            { name: "Advance booking period", info: "5 days in advance" },
            {
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 5 days prior to arrival.",
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
              name: "Spa Treatments",
              info: "Up to 50% off at Banyan Tree Spa",
            },
            { name: "Museum", info: "Free entry to selected exhibitions" },
            { name: "Others", info: "N/A" },
          ],
        },
        {
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
            { name: "Stay period", info: "1 Mar - 30 Jun 2021" },
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
            { name: "Museum", info: "Free entry to selected exhibitions" },
            { name: "Others", info: "N/A" },
          ],
        },
        {
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
            { name: "Stay period", info: "1 Mar - 30 Jun 2021" },
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
            { name: "Museum", info: "Free entry to selected exhibitions" },
            {
              name: "Others",
              info: "Complimentary gift",
            },
          ],
        },
        {
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
            { name: "Stay period", info: "11 Mar – 13 Jun 2021" },
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
              info: "- Tickets for 2 to STAR WARS™ Identities: The Exhibition<br/>- Free entry to other selected exhibitions",
            },
            {
              name: "Others",
              info: "STAR WARS™  3D Wood Puzzle collectible",
            },
          ],
        },
        {
          offerName: "Marina Bay Sands Reimagine",
          url: "/deals/rooms/reimagine-package.html",
          button:
            "<p><a href='/deals/rooms/reimagine-package.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDREIM2'>Book a room</a></p>",
          details: [
            { name: "Rates from", info: "S$471 /night" },
            {
              name: "Resort Dollars",
              info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional S$20 Reward Dollars per night (from the 3rd night, S$50 Reward Dollars per night)<br/>- Accompanying guest gets S$10 Reward Dollars (one-time redemption for new members only)",
            },
            { name: "Stay period", info: "26 May - 31 Oct 2021" },
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
              info: "Up to 30% off at Banyan Tree Spa",
            },
            {
              name: "Museum",
              info: "N/A",
            },
            {
              name: "Others",
              info: "- Free upgrade to Prestige membership<br/>- Choose 1 of 4 per night of stay: <br/>(1) Breakfast buffet at RISE restaurant <br/>(2) Lunch buffet at RISE Restaurant <br/>(3) High tea at Renku Bar & Lounge, and <br/>(4) ArtScience Museum All-Access Pass",
            },
          ],
        },
        {
          offerName: "Marina Bay Sands Indulgence",
          url: "/deals/rooms/reimagine-package.html",
          button:
            "<p><a href='/deals/rooms/indulgence-package.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDRVIP2'>Book a room</a></p>",
          details: [
            { name: "Rates from", info: "S$1,273.02 /night" },
            {
              name: "Resort Dollars",
              info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional S$20 Reward Dollars per night (from the 3rd night, S$50 Reward Dollars per night)<br/>- Accompanying guest gets S$10 Reward Dollars (one-time redemption for new members only)",
            },
            { name: "Stay period", info: "26 May - 31 Oct 2021" },
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
              name: "Others",
              info: "- Free upgrade to Prestige membership<br/>- Choose 1 of 4 per night of stay:<br/>(1) Lunch buffet at RISE restaurant<br/>(2) Dinner at DB, Blossom, and Lavo<br/>(3) 30 mins Banyan Tree SPA, and<br/>(4) ArtScience Museum All-Access Pass",
            },
          ],
        },
      ];
      var checkEl = setInterval(function () {
        if ($(".listing-content-item").length) {
          //add comparision button and check button
          $("body").append(
            "<div class='comparision-plugin fade desktop' style='display:none'> <p class='remove-button'>REMOVE ALL</p> <div class='compare-button'> <p>COMPARE</p> <span class='added-sum fade'>2</span> </div> </div>"
          );
          addCheckboxAndBindClick();
          $("body").on("click", ".checkbox.ng-binding input", function () {
            addCheckboxAndBindClick();
            hideNum();
          });
          $("body").on("click", ".filter-clear", function () {
            addCheckboxAndBindClick();
            hideNum();
          });
          //control a).show,hide b).position of comparision button when scroll
          $(window).scroll(function () {
            adjustPositionForPlugin();
          });
          //remain the position for comparision button when resize window
          adjustPositionForPlugin();
          $(window).resize(function () {
            var width = $(window).width() + 17;
            if (width < 992) {
              $(".comparision-plugin")
                .addClass("mobile")
                .removeClass("desktop")
                .css("bottom", "10px");
            } else {
              $(".comparision-plugin")
                .removeClass("mobile")
                .addClass("desktop");
            }
            adjustPositionForPlugin();
          });
          //bind "remove all" button
          $(".remove-button").click(function () {
            $(".comparision-checkbox input").prop("checked", false);
            hideNum();
          });
          //add "comparision lightbox" frame and "error-lightbox"
          $("main").append(
            "<div class='modal fade dy-comparision-lightbox' style='display: none'> <div class='modal-dialog modal-dialog-centered modal-lg' role='document'> <div class='modal-content'> <button type='button' class='close'> <span aria-hidden='true'>×</span> </button> </div> </div> </div> <!-- error-lightbox --> <div class='error-lightbox' style='display: none'> <div class='lightbox-content'> <p>Please select up to 3 deals for comparision</p> <button class='btn btn-primary' style='height: 35px; line-height: 35px !important; margin-top: 0.5rem' > Close </button> </div> </div>"
          );
          //bind "close" button on error-lightbox
          $(".error-lightbox button.btn").click(function () {
            var ele = $(".error-lightbox");
            closeLightbox(ele);
          });
          //bind "close" function (including "X" and white space clicking) on comparision-lightbox
          $(".dy-comparision-lightbox .close").click(function () {
            var ele = $(".dy-comparision-lightbox");
            closeLightbox(ele);
          });
          $("body").click(function (e) {
            var target = $(e.target);
            var ele = $(".dy-comparision-lightbox");
            if (target.is($(".dy-comparision-lightbox.show"))) {
              closeLightbox(ele);
            }
          });

          //bind "compare" button
          $(".compare-button").click(function () {
            var compareList = [];
            $(".comparision-checkbox input:checked").each(function () {
              compareList.push($(this).attr("id"));
            });
            var compareNo = compareList.length;
            if (compareNo > 3) {
              // if "No. of comparision deals" > 3, show error-lightbox;
              var ele = $(".error-lightbox");
              openLightbox(ele);
            } else if (compareNo > 0) {
              // if "No. of comparision deals" <= 3, render and open comparision lightbox;
              $(".dy-comparision-lightbox .modal-content").append(
                "<div class='modal-body'> <div> <table class='table-responsive table-details details-block-body table-container table' cellspacing='0' cellpadding='0' border='0' > <tbody> <tr class='offerName'> <th width='20%' valign='bottom' style='background: #f5f5f5'> <p>Deal</p> </th> </tr> <tr> <th valign='bottom'><p>Rates from</p></th> </tr> <tr> <th valign='bottom'> <p> Resort Dollars<br /><small style='font-size: 0.8rem' >(only for Sands Rewards members)</small > </p> </th> </tr> <tr> <td colspan='" +
                  (compareNo + 1) +
                  "'> <p style='text-align: center'> <b>All deals include:</b><br />- High-speed Wi-Fi<br />- Entry to SkyPark Observation Deck &amp; Infinity Pool </p> </td> </tr> <tr> <th valign='bottom'><p>Stay period</p></th> </tr> <tr> <th valign='bottom'><p>Minimum no. of nights</p></th> </tr> <tr> <th valign='bottom'><p>Advance booking period</p></th> </tr> <tr> <th valign='bottom'><p>Flexible Cancellation</p></th> </tr> <tr> <th valign='bottom'><p>Complimentary room upgrade</p></th> </tr> <tr> <th valign='bottom'> <p> Early check-in <small style='font-size: 0.8rem' >(subject to room availability and booked registration time)</small > </p> </th> </tr> <tr> <th valign='bottom'> <p>Complimentary valet parking/self-parking</p> </th> </tr> <tr> <th valign='bottom'><p>Luxe Suite Privileges</p></th> </tr> <tr class='common'> <th valign='bottom' style='display: none'> <p><b>When you book a Club Room or Suite:</b></p> </th> </tr> <tr class='common'> <th valign='bottom' colspan='" +
                  (compareNo + 1) +
                  "'> <p style='text-align: center'> <b>More perks when you join Sands Rewards membership:</b> </p> </th> </tr> <tr> <th valign='bottom'><p>Additional discounts</p></th> </tr> <tr> <th valign='bottom'><p>Spa Treatments</p></th> </tr> <tr> <th valign='bottom'><p>Museum</p></th> </tr> <tr> <th valign='bottom'><p>Others</p></th> </tr> <tr class='button-line'> <th valign='bottom'><p></p></th> </tr> </tbody> </table> </div> </div>"
              );
              for (let i = 0; i < comparisionData.length; i++) {
                var offerName = comparisionData[i].offerName;
                var url = comparisionData[i].url;
                var buttonInfo = comparisionData[i].button;
                if ($.inArray(offerName, compareList) > -1) {
                  $(".dy-comparision-lightbox .offerName").append(
                    "<th><p><a href='" +
                      url +
                      "'>" +
                      offerName +
                      "</a></p></th>"
                  );
                  $(".dy-comparision-lightbox .button-line").append(
                    "<td>" + buttonInfo + "</td>"
                  );
                  for (let x = 0; x < comparisionData[i].details.length; x++) {
                    var detailName = comparisionData[i].details[x].name;
                    var detailInfo = comparisionData[i].details[x].info;
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
                $(".dy-comparision-lightbox .common:eq(0) td:eq(0)").hide();
              }
              var ele = $(".dy-comparision-lightbox");
              openLightbox(ele);
            }
          });

          clearInterval(checkEl);
        }
      }, 10);
      function showPlugin() {
        $(".comparision-plugin").show();
        setTimeout(function () {
          $(".comparision-plugin").addClass("show");
        }, 10);
      }
      function hidePlugin() {
        $(".comparision-plugin").removeClass("show");
        setTimeout(function () {
          $(".comparision-plugin").hide();
        }, 150);
      }
      function addCheckboxAndBindClick() {
        var waitCard = setInterval(function () {
          if (
            $(".card-title:contains(Staycation Escape)").length ||
            $(".card-title:contains(Book Direct and Save S$20)").length
          ) {
            $(".comparision-checkbox").remove();
            $(".card-title.ng-binding").each(function () {
              var title = $(this).text();
              $(this)
                .closest(".card-body")
                .append(
                  "<label class='comparision-checkbox checkbox'> <input type='checkbox' id='" +
                    title +
                    "' /> <span></span>Compare deals</label>"
                );
            });
            //interaction between checkbox and comparision button
            $(".comparision-checkbox input").click(function () {
              updateComparisionButton();
            });
            clearInterval(waitCard);
          }
        }, 10);
      }
      function updateComparisionButton() {
        var num = $(".comparision-checkbox input:checked").length;
        $(".added-sum").text(num);
        if (num > 0) {
          showNum();
        } else {
          hideNum();
        }
      }
      function adjustPositionForPlugin() {
        var windowWidth = $(window).width();
        var containerMargin = $(".tab-content-container .container").offset()
          .left;
        if (windowWidth > 1183) {
          $(".comparision-plugin").css("right", containerMargin + 48.5 + "px");
        } else {
          $(".comparision-plugin").css("right", containerMargin - 22.5 + "px");
        }
        var cardHeight = $(".card.ng-scope").height();
        var cardMargin = parseInt($(".card.ng-scope:eq(1)").css("margin-top"));
        var listPadding = parseInt($(".listing-content").css("padding"));
        var windowHeight = $(window).height();
        var firstCardOnBottom =
          $(".listing-content").offset().top -
          (windowHeight - cardHeight - cardMargin - listPadding);
        var scrollTop = $(window).scrollTop();
        var lastCardOnTop =
          $(".card.ng-scope:last").offset().top -
          $(".navbar.fixed-top").height();
        //control show/hide (desktop version)
        /* if (scrollTop >= firstCardOnBottom && scrollTop <= lastCardOnTop) {
          $(".comparision-plugin.desktop").addClass("show");
        } else {
          $(".comparision-plugin.desktop").removeClass("show");
        } */
        //control show/hide (mobile version)
        //Problem: Filter sometimes hide sometimes show
        var lastImgOnTop = 0;
        if ($(".daterangepicker-container.fixed-top").length) {
          lastImgOnTop =
            $(".card.ng-scope:last img.card-img-top").offset().top +
            $(".card.ng-scope:last img.card-img-top").height() -
            $(".navbar.fixed-top").height() -
            $(".daterangepicker-container.fixed-top").height();
        } else {
          lastImgOnTop =
            $(".card.ng-scope:last img.card-img-top").offset().top +
            $(".card.ng-scope:last img.card-img-top").height() -
            $(".navbar.fixed-top").height();
        }
        /* if (scrollTop >= firstCardOnBottom && scrollTop <= lastImgOnTop) {
          $(".comparision-plugin.mobile").addClass("show");
        } else {
          $(".comparision-plugin.mobile").removeClass("show");
        } */

        //control the position(only apply on desktop)
        var listHeight = parseInt(
          $(".listing-content-item").offset().top +
            $(".listing-content-item").height() -
            scrollTop
        );
        var listDisToBottom = parseInt(windowHeight - listHeight);
        if (listDisToBottom >= 30) {
          $(".comparision-plugin.desktop").css(
            "bottom",
            listDisToBottom + "px"
          );
        } else {
          $(".comparision-plugin.desktop").css("bottom", "30px");
        }
      }
      function showNum() {
        showPlugin();
        $(".comparision-plugin .added-sum").show();
        setTimeout(function () {
          $(".comparision-plugin .added-sum").addClass("show");
        }, 5);
      }
      function hideNum() {
        $(".comparision-plugin .added-sum").removeClass("show");
        setTimeout(function () {
          $(".comparision-plugin .added-sum").hide();
          hidePlugin();
        }, 150);
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
          if (eleName.is($(".dy-comparision-lightbox"))) {
            $(".dy-comparision-lightbox .modal-content .modal-body").remove();
          }
        }, 150);
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
    });
    clearInterval(window.checkJq03041558);
  }
}, 10);
