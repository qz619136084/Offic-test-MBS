window.checkJq10211005 = setInterval(function () {
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
            {
              id: "rates-from",
              name: "Rates from",
              info: "S$399/night",
            },
            {
              id: "resort-dollars",
              name: "Resort Dollars (only for Sands Rewards members)",
              info: "Earn 6% Resort Dollars from your stay",
            },
            {
              id: "included-with-your-stay",
              name: "Included with your stay",
              info: "- High-speed Wi-Fi<br/>- Entry to SkyPark Observation Deck & Infinity Pool<br/>- Up to 30% off spa treatments",
            },
            {
              id: "stay-period",
              name: "Stay period",
              info: "All-year long excluding black-out dates",
            },
            {
              id: "minium-no-of-nights",
              name: "Minimum no. of nights",
              info: "N/A",
            },
            {
              id: "advance-booking-period",
              name: "Advance booking period",
              info: "2 days in advance",
            },
            {
              id: "flexible-cancellation",
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 2 days prior to arrival.",
            },
            {
              id: "additional-privileges",
              name: "Additional privileges",
              info: "N/A",
            },
            {
              id: "club-rooms-and-suites",
              name: "Club Rooms and Suites",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Breakfast at RISE, Spago or Club55<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            {
              id: "member-privileges",
              name: "Member privileges",
              info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            {
              id: "additional-perks",
              name: "Additional perks (only for Sands Rewards members)",
              info: "20% off total bill at RISE Restaurant",
            },
          ],
        },
        {
          offerName: "Flexible Rate",
          url: "/deals/rooms/flexible-rate.html",
          button:
            "<p><a href='/deals/rooms/flexible-rate.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDBAR2'>Book a room</a></p>",
          details: [
            {
              id: "rates-from",
              name: "Rates from",
              info: "S$419/night",
            },
            {
              id: "resort-dollars",
              name: "Resort Dollars (only for Sands Rewards members)",
              info: "Earn 6% Resort Dollars from your stay",
            },
            {
              id: "included-with-your-stay",
              name: "Included with your stay",
              info: "- High-speed Wi-Fi<br/>- Entry to SkyPark Observation Deck & Infinity Pool<br/>- Up to 30% off spa treatments",
            },
            {
              id: "stay-period",
              name: "Stay period",
              info: "All-year long excluding black-out dates",
            },
            {
              id: "minium-no-of-nights",
              name: "Minimum no. of nights",
              info: "N/A",
            },
            {
              id: "advance-booking-period",
              name: "Advance booking period",
              info: "1 day in advance",
            },
            {
              id: "flexible-cancellation",
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 1 day prior to arrival.",
            },
            {
              id: "additional-privileges",
              name: "Additional privileges",
              info: "N/A",
            },
            {
              id: "club-rooms-and-suites",
              name: "Club Rooms and Suites",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Breakfast at RISE, Spago or Club55<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            {
              id: "member-privileges",
              name: "Member privileges",
              info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            {
              id: "additional-perks",
              name: "Additional perks (only for Sands Rewards members)",
              info: "<li>Sands Rewards LifeStyle Prestige members enjoy 10% off</li><li>Sands Rewards LifeStyle Elite members 15% off</li><li>20% off total bill at RISE Restaurant</li>",
            },
          ],
        },
        {
          offerName: "Luxe Suite Savings",
          url: "/deals/rooms/luxe-suite-savings.html",
          button:
            "<p><a href='/deals/rooms/luxe-suite-savings.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDADLUX'>Book a room</a></p>",
          details: [
            {
              id: "rates-from",
              name: "Rates from",
              info: "S$1,775.55/night",
            },
            {
              id: "resort-dollars",
              name: "Resort Dollars (only for Sands Rewards members)",
              info: "Earn 6% Resort Dollars from your stay",
            },
            {
              id: "included-with-your-stay",
              name: "Included with your stay",
              info: "- High-speed Wi-Fi<br/>- Entry to SkyPark Observation Deck & Infinity Pool<br/>- Up to 30% off spa treatments",
            },
            {
              id: "stay-period",
              name: "Stay period",
              info: "All-year long excluding black-out dates",
            },
            {
              id: "minium-no-of-nights",
              name: "Minimum no. of nights",
              info: "N/A",
            },
            {
              id: "advance-booking-period",
              name: "Advance booking period",
              info: "2 days in advance",
            },
            {
              id: "flexible-cancellation",
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 5 days prior to arrival.",
            },
            {
              id: "additional-privileges",
              name: "Additional privileges",
              info: "- In-suite Check-in<br/>- Limousine Transfer<br/>- 24-hour Butler Service<br/>- La Mer privileges<br/>- Banyan Tree Spa massages (for Merlion or Straits Suites only)",
            },
            {
              id: "club-rooms-and-suites",
              name: "Club Rooms and Suites",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Breakfast at RISE, Spago or Club55<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            {
              id: "member-privileges",
              name: "Member privileges",
              info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            {
              id: "additional-perks",
              name: "Additional perks (only for Sands Rewards members)",
              info: "20% off total bill at RISE Restaurant",
            },
          ],
        },
        /*         {
                  offerName: "Staycation Escape",
                  url: "/deals/rooms/staycation-escape.html",
                  button:
                    "<p><a href='/deals/rooms/staycation-escape.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDESC20'>Book a room</a></p>",
                  details: [
                    { id:"rates-from",name: "Rates from", info: "S$359 /night" },
                    {
                      id:"resort-dollars",name: "Resort Dollars",
                      info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional $20 Resort Dollars",
                    },
                    { id:"stay-period",name: "Stay period", info: "1 Mar - 31 Aug 2021" },
                    { id:"minium-no-of-nights",name: "Minimum no. of nights", info: "N/A" },
                    { id:"advance-booking-period",name: "Advance booking period", info: "1 day in advance" },
                    {
                      id:"flexible-cancellation",name: "Flexible Cancellation",
                      info: "Reservation is cancellable and amendable 2 days prior to arrival.",
                    },
                    { id:"additional-privileges",name: "Additional privileges", info: "✓" },
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
                      id:"club-rooms-and-suites",name: "Club Rooms and Suites",
                      info: "<b>When you book a Club Room or Suite:</b><br/>- Breakfast at RISE, Spago or Club55<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
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
                  {
                    id:"member-privileges",name: "Member privileges",
                    info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
                  },],
                }, */
        /*         {
                  offerName: "Stay Longer by the Bay",
                  url: "/deals/rooms/stay-longer-by-the-bay.html",
                  button:
                    "<p><a href='/deals/rooms/stay-longer-by-the-bay.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDBAY60'>Book a room</a></p>",
                  details: [
                    { id:"rates-from",name: "Rates from", info: "S$299 /night" },
                    {
                      id:"resort-dollars",name: "Resort Dollars",
                      info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional $120 Resort Dollars ($60 per night)",
                    },
                    { id:"stay-period",name: "Stay period", info: "1 Mar - 31 Aug 2021" },
                    { id:"minium-no-of-nights",name: "Minimum no. of nights", info: "2 nights" },
                    { id:"advance-booking-period",name: "Advance booking period", info: "1 day in advance" },
                    {
                      id:"flexible-cancellation",name: "Flexible Cancellation",
                      info: "Reservation is cancellable and amendable 2 days prior to arrival.",
                    },
                    { id:"additional-privileges",name: "Additional privileges", info: "✓" },
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
                      id:"club-rooms-and-suites",name: "Club Rooms and Suites",
                      info: "<b>When you book a Club Room or Suite:</b><br/>- Breakfast at RISE, Spago or Club55<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
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
                  {
                    id:"member-privileges",name: "Member privileges",
                    info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
                  },],
                }, */
        /*         {
                  offerName: "STAR WARS™ Identities x MBS",
                  url: "/deals/rooms/star-wars-identities.html",
                  button:
                    "<p><a href='/deals/rooms/star-wars-identities.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDSTARW'>Book a room</a></p>",
                  details: [
                    { id:"rates-from",name: "Rates from", info: "S$319 /night" },
                    {
                      id:"resort-dollars",name: "Resort Dollars",
                      info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional $120 Resort Dollars ($60 per night)",
                    },
                    { id:"stay-period",name: "Stay period", info: "11 Mar – 25 Jul 2021" },
                    { id:"minium-no-of-nights",name: "Minimum no. of nights", info: "2 nights" },
                    { id:"advance-booking-period",name: "Advance booking period", info: "2 days in advance" },
                    {
                      id:"flexible-cancellation",name: "Flexible Cancellation",
                      info: "Reservation is non-cancellable, non-amendable and non-refundable.",
                    },
                    { id:"additional-privileges",name: "Additional privileges", info: "✓" },
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
                      id:"club-rooms-and-suites",name: "Club Rooms and Suites",
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
                  {
                    id:"member-privileges",name: "Member privileges",
                    info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
                  },],
                }, */

        /*         {
                  offerName: "Marina Bay Sands Indulgence",
                  url: "/deals/rooms/reimagine-package.html",
                  button:
                    "<p><a href='/deals/rooms/indulgence-package.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDRVIP2'>Book a room</a></p>",
                  details: [
                    { id:"rates-from",name: "Rates from", info: "S$1,273.02 /night" },
                    {
                      id:"resort-dollars",name: "Resort Dollars",
                      info: "- Earn 6% Resort Dollars from your stay<br/>- Get additional S$20 Reward Dollars per night (from the 3rd night, S$50 Reward Dollars per night)<br/>- Accompanying guest gets S$20 Reward Dollars (one-time redemption for new member only)",
                    },
                    { id:"stay-period",name: "Stay period", info: "TBC" },
                    { id:"minium-no-of-nights",name: "Minimum no. of nights", info: "2 nights" },
                    { id:"advance-booking-period",name: "Advance booking period", info: "2 days in advance" },
                    {
                      id:"flexible-cancellation",name: "Flexible Cancellation",
                      info: "Reservation is cancellable and amendable 2 days prior to arrival.",
                    },
                    { id:"additional-privileges",name: "Additional privileges", info: "N/A" },
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
                      id:"club-rooms-and-suites",name: "Club Rooms and Suites",
                      info: "<b>When you book a Club Room or Suite:</b><br/>- Breakfast at RISE, Spago or Club55<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
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
                  {
                    id:"member-privileges",name: "Member privileges",
                    info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
                  },],
                }, */
        {
          offerName: "Sandsational Staycation",
          url: "/deals/rooms/sandsational-staycation.html",
          button:
            "<p><a href='/deals/rooms/sandsational-staycation.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDSAND2'>Book a room</a></p>",
          details: [
            {
              id: "rates-from",
              name: "Rates from",
              info: "S$399/night",
            },
            {
              id: "resort-dollars",
              name: "Resort Dollars (only for Sands Rewards members)",
              info: "Earn 6% Resort Dollars from your stay",
            },
            {
              id: "included-with-your-stay",
              name: "Included with your stay",
              info: "- High-speed Wi-Fi<br/>- Entry to SkyPark Observation Deck & Infinity Pool<br/>- Up to 30% off spa treatments",
            },
            {
              id: "stay-period",
              name: "Stay period",
              info: "25 Aug 2021 – 30 Apr 2022",
            },
            {
              id: "minium-no-of-nights",
              name: "Minimum no. of nights",
              info: "2 nights",
            },
            {
              id: "advance-booking-period",
              name: "Advance booking period",
              info: "1 days in advance",
            },
            {
              id: "flexible-cancellation",
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 2 days prior to arrival.",
            },
            {
              id: "additional-privileges",
              name: "Additional privileges",
              info: "- Complimentary room upgrade<br/>- Early check-in (subject to room availability)<br/>- Complimentary self-parking",
            },
            {
              id: "club-rooms-and-suites",
              name: "Club Rooms and Suites",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Breakfast at RISE, Spago or Club55<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            {
              id: "member-privileges",
              name: "Member privileges",
              info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            {
              id: "additional-perks",
              name: "Additional perks (only for Sands Rewards members)",
              info: "<li style='list-style:none;'><u>Choose one experience with each night of stay:</u></p><li>Breakfast for 2 adults & 1 child at RISE Restaurant or Spago Bar & Lounge</li><li>Attraction tickets for 2 adults & 1 child at Future World, Sampan Rides & Digital Light Canvas</li><li>S$70 nett dining credit valid at RISE Restaurant, DB Bistro, Bread Street Kitchen or In-Room Dining.</li><li>Scent creation experience for 1 at Maison21G</li>",
            },
          ],
        },
        {
          offerName: "Marina Bay Sands Reimagine",
          url: "/deals/rooms/reimagine-package.html",
          button:
            "<p><a href='/deals/rooms/reimagine-package.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TDREIM2'>Book a room</a></p>",
          details: [
            {
              id: "rates-from",
              name: "Rates from",
              info: "S$469/night",
            },
            {
              id: "resort-dollars",
              name: "Resort Dollars (only for Sands Rewards members)",
              info: "Complimentary $20 Resort Dollars per night",
            },
            {
              id: "included-with-your-stay",
              name: "Included with your stay",
              info: "- High-speed Wi-Fi<br/>- Entry to SkyPark Observation Deck & Infinity Pool<br/>- Up to 30% off spa treatments",
            },
            {
              id: "stay-period",
              name: "Stay period",
              info: "20 Oct 2021 – 31 Mar 2022",
            },
            {
              id: "minium-no-of-nights",
              name: "Minimum no. of nights",
              info: "2 nights",
            },
            {
              id: "advance-booking-period",
              name: "Advance booking period",
              info: "2 days in advance",
            },
            {
              id: "flexible-cancellation",
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 2 days prior to arrival.",
            },
            {
              id: "additional-privileges",
              name: "Additional privileges",
              info: "N/A",
            },
            {
              id: "club-rooms-and-suites",
              name: "Club Rooms and Suites",
              info: "<b>When you book a Club Room or Suite:</b><br/>- Breakfast at RISE, Spago or Club55<br/>- Complimentary afternoon tea, amenities and evening drinks & canapés at Club55",
            },
            {
              id: "member-privileges",
              name: "Member privileges",
              info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            {
              id: "additional-perks",
              name: "Additional perks (only for Sands Rewards members)",
              info: "<li>Membership price for COVID-19 swab and serology tests at KBL Healthcare</li> <li>Complimentary Resort Dollars per night (T&Cs apply)</li> <li>Complimentary Sands Rewards LifeStyle Prestige tier upgrade</li> <li style='list-style:none;'><u>Choose one experience with each night of stay: </u></p> <li>Breakfast for 2 at RISE Restaurant or Spago Bar & Lounge</li> <li>Weekday lunch for 2 at RISE Restaurant</li> <li>Sunset Aperitivo for 2 at CÉ LA VI SkyBar & Sky Lounge </li> <li>ArtScience Museum All-Access Pass for 2</li> <li>Infinity Pool professional photoshoot</li>",
            },
          ],
        },
        /*   {
                offerName: "Show and Stay - La Clique",
                url: "/deals/rooms/show-and-stay-la-clique.html",
                button:
                  "<p><a href='/deals/rooms/show-and-stay-la-clique.html'>View deal</a></p><p><a href='/booking/search.html?offerCode=TPSLACL'>Book a room</a></p>",
                details: [
                  {
                    id: "rates-from",
                    name: "Rates from",
                    info: "S$644.22 /night",
                  },
                  {
                    id: "resort-dollars",
                    name: "Resort Dollars (only for Sands Rewards members)",
                    info: "- Earn 6% Resort Dollars from your stay",
                  },
                  {
                    id: "included-with-your-stay",
                    name: "Included with your stay",
                    info: "- High-speed Wi-Fi<br/>- Entry to SkyPark Observation Deck & Infinity Pool<br/>- Up to 30% off spa treatments",
                  },
                  {
                    id: "stay-period",
                    name: "Stay period",
                    info: "28 Sep – 7 Nov 2021",
                  },
                  { id: "minium-no-of-nights", name: "Minimum no. of nights", info: "N/A" },
                  {
                    id: "advance-booking-period",
                    name: "Advance booking period",
                    info: "5 days in advance",
                  },
                  {
                    id: "flexible-cancellation",
                    name: "Flexible Cancellation",
                    info: "Reservations require full pre-payment and are non-cancellable, non-amendable and non-refundable. ",
                  },
                  {
                    id: "additional-privileges",
                    name: "Additional privileges",
                    info: "N/A",
                  },
                  {
                    id: "club-rooms-and-suites",
                    name: "Club Rooms and Suites",
                    info: "N/A",
                  },
                  {
                    id: "member-privileges",
                    name: "Member privileges",
                    info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
                  },
                  {
                    id: "additional-perks",
                    name: "Additional perks (only for Sands Rewards members)",
                    info: "N/A",
                  },
                ],
              }, */
        {
          offerName: "Stay Longer and Save",
          details: [
            {
              id: "rates-from",
              name: "Rates from",
              info: "S$385/night",
            },
            {
              id: "resort-dollars",
              name: "Resort Dollars (only for Sands Rewards members)",
              info: "Earn 6% Resort Dollars from your stay",
            },
            {
              id: "included-with-your-stay",
              name: "Included with your stay",
              info: "- High-speed Wi-Fi<br/>- Entry to SkyPark Observation Deck & Infinity Pool<br/>- Up to 30% off spa treatments",
            },
            {
              id: "stay-period",
              name: "Stay period",
              info: "29 Nov 2021 – 30 Jun 2022",
            },
            {
              id: "minium-no-of-nights",
              name: "Minimum no. of nights",
              info: "3 nights",
            },
            {
              id: "advance-booking-period",
              name: "Advance booking period",
              info: "7 days in advance",
            },
            {
              id: "flexible-cancellation",
              name: "Flexible Cancellation",
              info: "Reservation is cancellable and amendable 2 days prior to arrival.",
            },
            {
              id: "additional-privileges",
              name: "Additional privileges",
              info: "N/A",
            },
            {
              id: "club-rooms-and-suites",
              name: "Club Rooms and Suites",
              info: "N/A",
            },
            {
              id: "member-privileges",
              name: "Member privileges",
              info: "<b>More perks when you join Sands Rewards membership:</b><br/>- Earn up to 10% Resort Dollars when you dine and shop at participating outlets<br/>- Earn 10% Resort Dollars at Banyan Tree Spa",
            },
            {
              id: "additional-perks",
              name: "Additional perks (only for Sands Rewards members)",
              info: "N/A",
            },
          ],
        },
      ];

      //Append Compare Plugin;
      $("body").append(
        "<!-- Comparison Lightbox Frame--> <div class='modal fade dy-comparison-lightbox' style='display: none'> <div class='modal-content'> <button type='button' class='close'> <span aria-hidden='true'>×</span> </button> </div> </div>"
      );
      //bind "close" function (including "X" and white space clicking) on comparison-lightbox
      $(".dy-comparison-lightbox .close").click(function () {
        var ele = $(".dy-comparison-lightbox");
        closeLightbox(ele);
      });
      $(document).on("mousedown", function (e) {
        var target = $(e.target);
        var closeTarget = null;
        var ifBindMouseup = 0;
        if (target.is($(".dy-comparison-lightbox"))) {
          closeTarget = $(".dy-comparison-lightbox");
          ifBindMouseup = 1;
        }
        if (ifBindMouseup) {
          $(document).on("mouseup", function () {
            closeLightbox(closeTarget);
            $(document).off("mouseup");
          });
        }
      });
      $(window).resize(function () {
        adjustTableCss();
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
                //setTimeout to let the binding run after "sticky filter" test; (Cause "sticky filter" test do changing on edit button)
                setTimeout(function () {
                  if ($("body.dy-sticky-filter").length) {
                    //bind edit button click when "sticky filter" test running;
                    var bindEditClick = setInterval(function () {
                      if (
                        $(
                          ".booking_information_people #booking_information_edit"
                        ).length
                      ) {
                        $(
                          ".booking_information_people #booking_information_edit"
                        ).click(function () {
                          var bindSelectClick = setInterval(function () {
                            if ($("#s_btn_view_rooms").length) {
                              $("#s_btn_view_rooms").click(function () {
                                $("body").removeClass("compare-button-added");
                                addCompareBtn();
                              });
                              clearInterval(bindSelectClick);
                            }
                          }, 10);
                        });
                        clearInterval(bindEditClick);
                      }
                    }, 10);
                  } else {
                    //bind edit button click;
                    var bindEditClick = setInterval(function () {
                      if (
                        $(".booking_information+#booking_information_edit")
                          .length
                      ) {
                        $(
                          ".booking_information+#booking_information_edit"
                        ).click(function () {
                          var bindSelectClick = setInterval(function () {
                            if ($("#s_btn_view_rooms").length) {
                              $("#s_btn_view_rooms").click(function () {
                                $("body").removeClass("compare-button-added");
                                addCompareBtn();
                              });
                              clearInterval(bindSelectClick);
                            }
                          }, 10);
                        });
                        clearInterval(bindEditClick);
                      }
                    }, 10);
                  }
                }, 500);
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
                });
              });
              $(".room_card .btn.mbs_button_primary").each(function () {
                $(this).bind("click.comparison", function () {
                  addButtonSingleNight();
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
              var txtHtml = $(".pick_txt").prop("outerHTML");
              $(".pick_txt").remove();
              $(".back_link").after(
                "<div class='dy-btn-container'>" +
                  txtHtml +
                  "<button class='dy-comparison-btn'>compare packages</button></div>"
              );
              bindCompareBtn();
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
              if (!$(".dy-comparison-btn").length) {
                $(".viewRoomDetail").after(
                  "<button class='dy-comparison-btn'>compare packages</button>"
                );
                bindCompareBtn();
              }
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
        if (window.checkMultiRoomBtn) {
          clearInterval(window.checkMultiRoomBtn);
        }
      }
      function bindCompareBtn() {
        //bind "compare" button
        $(".dy-comparison-btn").click(function () {
          var compareList = [];
          var url = window.location.href;
          if (url.indexOf("/booking/multirooms.html") > -1) {
            $(".card_title").each(function () {
              var title = $.trim($(this).text());
              compareList.push(title);
            });
          } else {
            $(".packageList_item_title").each(function () {
              var title = $.trim($(this).text());
              compareList.push(title);
            });
          }
          // render and open comparison lightbox;
          $(".dy-comparison-lightbox .modal-content").append(
            "<div class='modal-body'> <button class='next-btn show'></button><button class='prev-btn'></button> <h2>compare packages</h2> <div class='table-container'> <table class='table-responsive table-details details-block-body table tb1' cellspacing='0' cellpadding='0' border='0' > <thead> <tr> <th valign='bottom'><p>Deal</p></th> </tr> </thead> </table> <table class='table-responsive table-details details-block-body table tb2' cellspacing='0' cellpadding='0' border='0' > <tbody> <tr class='offerName'></tr> </tbody> </table> <table class='table-responsive table-details details-block-body table tb3' cellspacing='0' cellpadding='0' border='0' > <tbody> <tr> <th valign='bottom'><p>Rates from</p></th> </tr> <tr> <th valign='bottom'> <p>Resort Dollars (only for Sands Rewards members)</p> </th> </tr> <tr> <th valign='bottom'><p>Included with your stay</p></th> </tr> <tr> <th valign='bottom'><p>Stay period</p></th> </tr> <tr> <th valign='bottom'><p>Minimum no. of nights</p></th> </tr> <tr> <th valign='bottom'><p>Advance booking period</p></th> </tr> <tr> <th valign='bottom'><p>Flexible Cancellation</p></th> </tr> <tr> <th valign='bottom'><p>Additional privileges</p></th> </tr> <tr> <th valign='bottom'><p>Club Rooms and Suites</p></th> </tr> <tr> <th valign='bottom'><p>Member privileges</p></th> </tr> <tr> <th valign='bottom'> <p>Additional perks (only for Sands Rewards members)</p> </th> </tr> </tbody> </table> <table class='table-responsive table-details details-block-body table tb4' cellspacing='0' cellpadding='0' border='0' > <tbody> <tr id='rates-from'></tr> <tr id='resort-dollars'></tr> <tr id='included-with-your-stay'></tr> <tr id='stay-period'></tr> <tr id='minium-no-of-nights'></tr> <tr id='advance-booking-period'></tr> <tr id='flexible-cancellation'></tr> <tr id='additional-privileges'></tr> <tr id='club-rooms-and-suites'></tr> <tr id='member-privileges'></tr> <tr id='additional-perks'></tr> </tbody> </table> </div> </div>"
          );
          for (let i = 0; i < comparisonData.length; i++) {
            var offerName = comparisonData[i].offerName;
            if ($.inArray(offerName, compareList) > -1) {
              $(".dy-comparison-lightbox .offerName").append(
                "<th><p>" + offerName + "</p></th>"
              );
              for (let x = 0; x < comparisonData[i].details.length; x++) {
                var id = comparisonData[i].details[x].id;
                var detailInfo = comparisonData[i].details[x].info;
                $(".dy-comparison-lightbox .tb4 tr#" + id + "").append(
                  "<td valign='bottom'><p>" + detailInfo + "</p></td>"
                );
              }
            }
          }
          openLightbox($(".dy-comparison-lightbox"));
          //combine the same details(which in array) into one unit for some special option;
          var toCombineList = [
            "rates-from",
            "resort-dollars",
            "included-with-your-stay",
            "stay-period",
            "minium-no-of-nights",
            "advance-booking-period",
            "flexible-cancellation",
            "additional-privileges",
            "club-rooms-and-suites",
            "member-privileges",
            "additional-perks",
          ];
          combineTable(toCombineList);
          //adjust layout for the table;
          adjustTableCss();
          //bind click for "next button";
          scrollBtn_Mobile();
          //bind scroll;
          scroll_Mobile();
          //slide function for table;
          $(".dy-comparison-lightbox .table-container").on(
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
      function scrollBtn_Mobile() {
        $(".next-btn").click(function () {
          var everyScrollDis = parseInt($(".offerName th:gt(0)").outerWidth());
          var originPosition = $(".table-container").scrollLeft();
          var newPosition = originPosition + everyScrollDis;
          $(".table-container").animate({ scrollLeft: newPosition }, 300);
        });
        $(".prev-btn").click(function () {
          var everyScrollDis = parseInt($(".offerName th:gt(0)").outerWidth());
          var originPosition = $(".table-container").scrollLeft();
          var newPosition = originPosition - everyScrollDis;
          $(".table-container").animate({ scrollLeft: newPosition }, 300);
        });
      }
      function scroll_Mobile() {
        var maxScrollDis =
          $(".dy-comparison-lightbox .tb4").outerWidth() -
          $(".dy-comparison-lightbox .tb4 td:not([colspan])").outerWidth() * 2 -
          2;
        $(".table-container").scroll(function () {
          var scrollDis = $(this).scrollLeft();
          if (scrollDis < maxScrollDis && scrollDis > 0) {
            $(".dy-comparison-lightbox .next-btn").addClass("show");
            $(".dy-comparison-lightbox .prev-btn").addClass("show");
          } else if (scrollDis <= 0) {
            $(".dy-comparison-lightbox .next-btn").addClass("show");
            $(".dy-comparison-lightbox .prev-btn").removeClass("show");
          } else {
            $(".dy-comparison-lightbox .next-btn").removeClass("show");
            $(".dy-comparison-lightbox .prev-btn").addClass("show");
          }
        });
      }
      function adjustTableCss() {
        //adjust table 3 (height);
        for (let i = 0; i < $(".dy-comparison-lightbox .tb3 tr").length; i++) {
          var firstColumn = $(".dy-comparison-lightbox .tb3 tr:eq(" + i + ")");
          var secondColumn = $(".dy-comparison-lightbox .tb4 tr:eq(" + i + ")");
          setCommonHeight(firstColumn, secondColumn);
          //adjust table 2 (width);
          var roomNo = $(".offerName th").length;
          var windowWidth = $(window).width();
          var limitedNo = null;
          if (windowWidth < 500) {
            limitedNo = 2;
            //adjust arrow css;
            var top =
              parseInt(
                $(".dy-comparison-lightbox .modal-body").css("padding-top")
              ) +
              parseFloat(
                $(".dy-comparison-lightbox h2")[0].getBoundingClientRect()
                  .height
              ) +
              $(".dy-comparison-lightbox .tb2 tr").outerHeight() / 2 -
              10;
            $(".dy-comparison-lightbox .next-btn").css("top", top);
            $(".dy-comparison-lightbox .prev-btn").css("top", top);
            //compare the "top" with "offset" cause when "top = 0", position of arrow is different, wierd; If not the same, should adjust the position again;
            var offset =
              $(".dy-comparison-lightbox .modal-body .next-btn").offset().top -
              $(".dy-comparison-lightbox .modal-body").offset().top;
            if (top != offset) {
              $(".dy-comparison-lightbox .next-btn").css("top", top + 10);
              $(".dy-comparison-lightbox .prev-btn").css("top", top + 10);
            }
          } else {
            limitedNo = 5;
          }
          if (roomNo < limitedNo) {
            setCommonWidth(
              $(".dy-comparison-lightbox .tb2 th"),
              $(".dy-comparison-lightbox .tb4 td:not([colspan]")
            );
          } else {
            var commonWidth =
              ($(".modal-body").width() -
                $(".dy-comparison-lightbox .tb1").outerWidth()) /
              limitedNo;
            var padding = parseFloat(
              $(".dy-comparison-lightbox th").css("padding-left")
            );
            $(".dy-comparison-lightbox .tb2 th p").css(
              "width",
              commonWidth - padding * 2 + "px"
            );
            $(".dy-comparison-lightbox .tb4 td:not([colspan]) p").css(
              "width",
              commonWidth - padding * 2 + "px"
            );
          }
          setCombinedTab(limitedNo);
          //adjust table 1 (height);
          setCommonHeight(
            $(".dy-comparison-lightbox .tb1 tr:eq(0)"),
            $(".dy-comparison-lightbox .tb2 tr:eq(0)")
          );
          var height = $(".dy-comparison-lightbox .tb2").outerHeight();
          $(".dy-comparison-lightbox .tb4").css("top", height + "px");
          //set Height for $(".table-container");
          var x =
            $(".dy-comparison-lightbox h2").outerHeight() +
            parseFloat($(".dy-comparison-lightbox h2").css("margin-bottom"));
          $(".dy-comparison-lightbox .table-container").css(
            "height",
            "calc(100% - " + x + "px)"
          );
          //set Width for table;
          if (
            $(".dy-comparison-lightbox .tb1").outerWidth() +
              $(".dy-comparison-lightbox .tb2").outerWidth() -
              1 <
            $(".dy-comparison-lightbox .table-container").outerWidth()
          ) {
            var tb1Width = $(".dy-comparison-lightbox .tb1").outerWidth();
            $(".dy-comparison-lightbox .tb2").css(
              "width",
              "calc(100% - " + tb1Width + "px)"
            );
            $(".dy-comparison-lightbox .tb4").css(
              "width",
              "calc(100% - " + tb1Width + "px)"
            );
          }
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
        var width_1 = row_1.find("p").width();
        var width_2 = row_2.find("p").width();
        var result = width_1 - width_2;
        var common = null;
        if (result > 0) {
          common = width_1;
        } else {
          common = width_2;
        }
        row_1.find("p").css("width", common + "px");
        row_2.find("p").css("width", common + "px");
        row_1.find("li").css("width", common + "px");
        row_2.find("li").css("width", common + "px");
      }
      function setCombinedTab(limitedNo) {
        //adjust common tab with 'colspan';
        var originalWidth = $(".dy-comparison-lightbox .tb2 th").outerWidth();
        var commonTab = $(".dy-comparison-lightbox td[colspan]");
        var padding = parseFloat(
          $(".dy-comparison-lightbox th").css("padding-left")
        );
        commonTab.each(function () {
          var spanNo = $(this).attr("colspan");
          //Calculate sum width of span tab (reduce border and padding);
          var updatedWidth =
            originalWidth * spanNo - padding * 2 - (spanNo - 1);
          $(this).find("p").css("width", updatedWidth);
          $(this).find("li").css("width", updatedWidth);
        });
      }
      function combineTable(combineDetailnameArr) {
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
      }
    });
    clearInterval(window.checkJq10211005);
  }
}, 100);
