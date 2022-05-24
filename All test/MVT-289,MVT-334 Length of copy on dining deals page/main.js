$(function () {
  var data = [
    {
      title: "March Afternoon Specials",
      variant_1:
        "<p>Brighten up your March afternoons with delectable light bites and high tea sets, or indulge yourself in a tipple or two - all at irresistible prices.</p>",
      variant_2:
        "<p>Brighten up your March afternoons with delectable light bites and high tea sets, <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'> or indulge yourself in a tipple or two - all at irresistible prices.</span></p>",
    },
    {
      title: "Nibbles & Tipples: Monthly Pairings",
      variant_1:
        "<p>Each month, our talented chefs and bartenders come together to create unique food and cocktail pairings to tickle your taste buds at a great value.</p>",
      variant_2:
        "<p>Each month, our talented chefs and bartenders come together <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'> to create unique food and cocktail pairings to tickle your taste buds at a great value.</span></p>",
    },
    {
      title: "Easter Weekend Celebrations",
      variant_1:
        "<p>Celebrate the long weekend with your friends and family over scrumptious feasts and fun-filled activities such as decorating your own cookies.</p>",
      variant_2:
        "<p>Celebrate the long weekend with your friends and family over scrumptious feasts and <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'> fun-filled activities such as decorating your own cookies.</span></p>",
    },
    {
      title: "Mott 32 – Dim Sum & Drink Sum",
      variant_1:
        "<p>Snack on popular dim sum and starters such as the <i>Crispy Sugar Coated Peking Duck Bun and Scallop</i>, while drinking sum wines and cocktails.</p><ul><li>Daily, 5pm – 7pm at the Bar & Lounge</li></ul>",
      variant_2:
        "<p>Snack on popular dim sum and starters such as the Crispy Sugar Coated Peking Duck Bun, <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'> while drinking sum wines and cocktails like the Hong Kong Iced Tea.</span></p><ul class='collapse dy-read-more'><li>Daily, 5pm – 7pm at the Bar & Lounge</li></ul>",
    },
    {
      title: "Black Tap – Burger of the Month",
      variant_1:
        "<p>Celebrate Saint Patrick’s Day this March with the flavour-packed Reuben Burger. </p><ul><li>1-31 Mar</li><li>S$29++</li></ul>",
      variant_2:
        "<p>Celebrate Saint Patrick’s Day this March with the flavour-packed Reuben Burger <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'> – featuring a potato bun with prime beef, griddled corn beef brimming with bright peppery notes Swiss cheese, tangy sauerkraut, pickles and special sauce.</span></p><ul class='collapse dy-read-more'><li>1-31 Mar</li><li>S$29++</li></ul>",
    },
    {
      title: "Yardbird Southern Table & Bar – Yardbird’s Picnic Mat",
      variant_1:
        "<p>Enjoy a leisurely picnic at the waterfront promenade, all conveniently prepared by Yardbird. </p><ul><li>1 – 30 Apr, 11.30am – 9pm</li><li>S$170 nett</li></ul>",
      variant_2:
        "<p>Enjoy a leisurely picnic by the waterfront with the signature Lewellyn’s Fried Chicken <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>along with Honey Hot Sauce, Macaroni & Cheese and four soads, neatly packed together with a comfy and exclusive Yardbird picnic blanket.</span></p><ul class='collapse dy-read-more'><li> 1 – 30 Apr, 11.30am – 9pm</li><li>S$170 nett</li></ul>",
    },
    {
      title: "KOMA – Cherry Blossom Specials",
      variant_1:
        "<p>Take a piece of Japan with you in March - enjoy a Sakura Alaska Dessert with berry Sakura sorbet, vanilla bombe, almond biscuits, and white chocolate crunchy rice.</p><ul><li>Available for dinner only</li></ul>",
      variant_2:
        "<p>Take a piece of Japan with you in March - enjoy a Sakura Alaska Dessert <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'> with berry Sakura sorbet, vanilla bombe, almond biscuits, and white chocolate crunchy rice.</span></p><ul class='collapse dy-read-more'><li>Available for dinner only</li></ul>",
    },
    {
      title: "Origin + Bloom – Grab & Go Bundle",
      variant_1:
        "<p>Choose from four delicious sandwiches and pair it with a bottled drink.</p><ul><li>Now till 31 July&nbsp;</li><li>S$15 nett per set</li><li>Choice of Coca-Cola® Zero Sugar, Schweppes® Ginger Beer or Schweppes® Lemonade</li></ul>",
      variant_2:
        "<p>Enjoy a taste of Vietnam on the go <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>&nbsp;<i>The Great Nasi Lemak</i>,&nbsp;<i>Sichuan Braised Pork</i>&nbsp;or&nbsp;<i>The Alternative TiNDLE Wrap</i>&nbsp;— and pair it with a bottled drink.</span></p><ul class='collapse dy-read-more'><li>Now till 31 July&nbsp;</li><li>S$15 nett per set</li><li>Choice of Coca-Cola® Zero Sugar, Schweppes® Ginger Beer or Schweppes® Lemonade</li></ul>",
    },
    {
      title: "Mott 32 – Summer Specialities",
      variant_1:
        "<p>Savour the finest crop of this summer’s harvest through our seasonal specialities.</p><ul><li>1 Apr - 30 Jun</li></ul>",
      variant_2:
        "<p>Savour the finest crop of this summer’s harvest through our seasonal specialities, <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'> such as Braised Crab Casserole with Fresh Clams, Winter Melon and Luffa and White Asparagus with Crab Meat, Broccoli and Tomato.</span></p><ul class='collapse dy-read-more'><li>1 Apr - 30 Jun</li></ul>",
    },
    {
      title: "db Bistro & Oyster Bar – Black Truffle Celebration",
      variant_1:
        "<p>Enjoy a variety of specially composed dishes featuring 5 grams of Perigord Black Winter Truffles throughout the season.</p><ul><li>Menu items subject to availability</li></ul>",
      variant_2:
        "<p>Enjoy a variety of specially composed dishes featuring 5 grams of Perigord Black Winter Truffles throughout the season. <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'> Some signatures include Beef Rossini and Black Truffle Soup.</span></p><ul class='collapse dy-read-more'><li>Menu items subject to availability</li></ul>",
    },
    {
      title: "Black Tap – CrazyShakes to Go",
      variant_1:
        "<p>Grab any one of our towering milkshakes below today!</p><ul><li>Brooklyn Blackout | S$20+</li><li>Cotton Candy | S$24+</li><li>The Cookie Shake | S$21+</li><li>Cookies ‘N Cream Supreme | S$22+</li></ul>",
      variant_2:
        "<p>Grab any one of our towering milkshakes below today! <span>...<a href='#'>See more</a></span></p><ul class='collapse dy-read-more'><li>Brooklyn Blackout | S$20+</li><li>Cotton Candy | S$24+</li><li>The Cookie Shake | S$21+</li><li>Cookies ‘N Cream Supreme | S$22+</li></ul>",
    },
    {
      title: "Mother's Day Dining Treats",
      variant_1:
        "<p>This Mother’s Day, express your love by treating your mum to a delightful meal, which include home-cooked favourites and award-winning menus, here at Marina Bay Sands. </p>",
      variant_2:
        "<p>This Mother’s Day, express your love by treating mum to a delightful meal at Marina Bay Sands. <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>From home-cooked favourites to award-winning menus, there’s definitely something mum would approve.</span></p>",
    },
    {
      title: "Meatless May",
      variant_1:
        "<p>Going meatless has never been so delicious. Savour special menus featuring plant-based meats and fresh seasonal vegetables. Exclusively available from 1 May to 12 Jun, so book your table now!</p>",
      variant_2:
        "<p>Vegetarians rejoice! Going meatless has never been so delicious. Savour our chefs’ special menus, created using plant-based meats <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>and fresh seasonal vegetables. Exclusively available from 1 May to 12 Jun, so book your table now!</span></p>",
    },
    {
      title: "Black Tap – Burger of the Month",
      variant_1:
        "<p>Take a scrumptious bite into our juicy Spring Lamb Burger today!</p><ul><li>1 – 30 Apr</li><li>S$27++</li></ul>",
      variant_2:
        "<p>Bite into our juicy Spring Lamb Burger, made of tender spring lamb patty, Havarti cheese, <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>pickled onions, radish, watercress, mustard oil and Dijon aioli.</span></p><ul class='collapse dy-read-more'><li>1 – 30 Apr</li><li>S$27++</li></ul>",
    },
    {
      title: "Roberta’s – Two Pizzas to Go",
      variant_1:
        "<p>Enjoy two pizzas by takeaway at S$48 nett.</p><ul><li>Mon – Thu, 11am – 10pm</li><li>While stocks last</li></ul><p><small>Terms & Conditions apply.</small></p>",
      variant_2:
        "<p>For a limited period only, enjoy two pizzas for takeaway at S$48 nett. <span>...<a href='#'>See more</a></span></p><ul class='collapse dy-read-more'><li>Mon – Thu, 11am – 10pm</li><li>While stocks last</li></ul><p class='collapse dy-read-more'>Terms and Conditions apply.</p>",
    },
    {
      title: "CUT – Early CUTs",
      variant_1:
        "<p>Tuck into a 3-course menu featuring favourites such as Maryland Blue Crab Cake, Young Chicken with Potato Purée and Wild Field Mushrooms, and Warm Butterscotch Apple Crumble.</p><ul><li>Sun – Thu, 5pm – 6.30pm</li><li>Fri & Sat, 5pm – 6pm</li><li>From S$95++ per person</li></ul><p>*Not available on eve of and Public Holidays</p><p>Reservations encouraged, walk-ins permitted (up to restaurant discretion)</p>",
      variant_2:
        "<p>Tuck into an early evening meal with a 3-course menu featuring favourites such as Maryland Blue Crab Cake, <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>Young Chicken with Potato Purée and Wild Field Mushrooms, and Warm Butterscotch Apple Crumble.</span></p><ul class='collapse dy-read-more'><li>Sun – Thu, 5pm – 6.30pm</li><li>Fri & Sat, 5pm – 6pm</li><li>From S$95++ per person</li></ul><p class='collapse dy-read-more'>*Not available on eve of and Public Holidays</p><p class='collapse dy-read-more'>Reservations encouraged, walk-ins permitted (up to restaurant discretion)</p>",
    },
    {
      title: "Origin + Bloom – Try Our New Sandwiches",
      variant_1:
        "<p>Take your pick from five new sandwiches, with Singaporean flavours and vegan friendly options.</p><ul><li>Now available&nbsp;</li><li><i>Vietnamese Banh Mi, The Great Nasi Lemak, Sichuan Braised Pork, The Alternative TiNDLE Wrap and Lobster &amp; Prawn Roll with Black Truffle</i></li></ul>",
      variant_2:
        "<p>Take your pick from five exciting new sandwiches, <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>from uniquely Singaporean&nbsp;<i>The Great Nasi Lemak</i>, to vegan friendly&nbsp;<i>The Alternative TiNDLE Wrap</i>. Pop by and try them today!</span></p><ul class='collapse dy-read-more'><li>Now available&nbsp;</li><li><i>Vietnamese Banh Mi, The Great Nasi Lemak, Sichuan Braised Pork, The Alternative TiNDLE Wrap and Lobster &amp; Prawn Roll with Black Truffle</i></li></ul>",
    },
    {
      title: "LAVO Italian Restaurant & Rooftop Bar – Pizza Cookie",
      variant_1:
        "<p>Introducing&nbsp;<i>The Ultimate Pizza Cookie</i>&nbsp;- a pizza-sized cookie filled with delightful sweet treats!</p><ul><li>Every Sat, 5pm – 11pm</li><li>S$38++</li></ul>",
      variant_2:
        "<p>Introducing&nbsp;<i>The Ultimate Pizza Cookie</i>&nbsp;- a pizza-sized cookie filled with marshmallows, <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>brownies, raw cookie dough balls, dark and milk chocolate chips. Be sure to indulge in this delightful treat on your next visit!</span></p><ul class='collapse dy-read-more'><li>Every Sat, 5pm – 11pm</li><li>S$38++</li></ul>",
    },
    {
      title: "SweetSpot – Picnic Bundle Special",
      variant_1:
        "<p>Relax by the waterfront with our takeaway Picnic Bundle! Your choice of any two croissants, two muffins and two bottled beverages.</p><ul><li>Now till 31 Jul</li><li>S$18 nett per bundle</li><li>Choice of Coca-Cola® Zero Sugar, Schweppes® Ginger Beer or Schweppes® Lemonade</li><li>Choice of croissant excludes&nbsp;Ham &amp; Cheese.</li><li>Items are subject to availability</li></ul>",
      variant_2:
        "<p>Enjoy a leisurely picnic by the waterfront with our convenient takeaway Picnic Bundle! <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>Take your pick from any two croissants, two muffins and two bottled beverages.</span></p><ul class='collapse dy-read-more'><li>1 - 30 Apr</li><li>S$18 nett per bundle</li><li>Choice of Coca-Cola® Zero Sugar, Schweppes® Ginger Beer or Schweppes® Lemonade</li><li>Choice of croissant excludes&nbsp;Ham &amp; Cheese.</li><li>Items are subject to availability</li></ul>",
    },
    {
      title: "Mott 32 – Afternoon Tea Set Menu",
      variant_1:
        "<p>Enjoy your weekend afternoon with assorted appetisers and exquisite dim sum.</p><ul><li>Every Sat, Sun & Public Holiday, 3pm - 5pm</li><li>S$52++ per person (min. two guests)</li><li>Add on S$10 for your choice of Deluxe or Premium Tea</li></ul>",
      variant_2:
        "<p>Enjoy a carefree weekend afternoon with your family and friends over assorted appetisers and exquisite dim sum, <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>including the <i>Spot Prawn</i>, <i>Iberico Pork</i> and <i>Flying Fish Roe Siu Mai</i>.</span></p><ul class='collapse dy-read-more'><li>Now available</li><li>Every Sat, Sun &amp; Public Holiday, 3pm – 5pm</li><li>S$52++ per person (min. two guests)</li><li>Add on S$10 for your choice of Deluxe or Premium Tea</li></ul>",
    },
    {
      title: "Lunch & Earn 20% Rewards",
      variant_1:
        "<p>Dine on lunch specials from S$21++ and earn 20% (Usual:10%) rewards at selected restaurants on weekdays from 11am - 3.30pm</p>",
      variant_2:
        "<p>Ready for lunch? Dine on scrumptious lunches from S$21++ and earn 20% (Usual: 10%) rewards at selected restaurants, <span>...<a href='#'>See more</a></span><span class='collapse dy-read-more'>bistros and cafes on weekdays from 11am – 3:30pm.</span></p>",
    },
    {
      title: "Father’s Day 2022",
      variant_1:
        "<p>Spoil dad with juicy barbeque platters and whiskey tasting flights. Browse our special menus and book a table to avoid disappointment.</p>",
      variant_2: "",
    },
    {
      title: "Origin + Bloom – Artisanal Loaves to Go",
      variant_1:
        "<p>This May, enjoy 20% off large loaves from 7.30pm onwards daily. Savour freshly baked and carefully fermented gourmet breads.</p><ul><li>1 – 31 May</li></ul><p><small>Terms &amp; Conditions apply.</small></p>",
      variant_2: "",
    },
    {
      title: "Din Tai Fung – Almond Pudding Coated with Black Sesame",
      variant_1:
        "<p>For a limited time only, savour the silky-smooth Almond Pudding Coated with Black Sesame. This dessert is available at S$1 (worth S$5.50) with every S$68 spent.<ul><li>Now till 30 Jun</li><li>Exclusively for OCBC Cardmembers</li><li>While servings last</li></ul></p><p><small>Terms and Conditions apply.</small></p>",
      variant_2: "",
    },
  ];
  var current_variant = "${variable1}";
  DYO.waitForElement(
    "body.dy-layout, .card-box",
    function () {
      update_content();
      bind_filter_click();
    },
    1,
    100
  );
  function update_content() {
    DYO.waitForElement(
      ".card-box",
      function () {
        $(".card-box").each(function () {
          var card = $(this);
          var title = card.find(".card-title").text().trim();
          var title_html = card.find(".card-title").prop("outerHTML");
          for (let i in data) {
            if (title == data[i].title) {
              var new_content = null;
              for (let x in data[i]) {
                if (current_variant == x) {
                  new_content = data[i][x];
                }
              }
              card.find(".card-body").html(title_html + new_content);
            }
          }
        });
        //collapse function;
        if (current_variant == "variant_2") {
          $(".card-body a:contains(See more)").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).parent().hide();
            $(this)
              .closest(".card-body")
              .find(".dy-read-more")
              .toggleClass("collapse");
          });
        }
      },
      1,
      100
    );
  }
  function bind_filter_click() {
    //SetTimeout is to avoid conflict with MVT-213;
    $(".dropdown-menu-filter .checkbox input").click(function () {
      setTimeout(function () {
        update_content();
      }, 300);
    });
    $(".dropdown-menu-filter .filter-clear").click(function () {
      setTimeout(function () {
        update_content();
      }, 300);
    });
  }
});
