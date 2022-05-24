$(function () {
  var shopTitle = $(".details-block-title h1")
    .text()
    .trim()
    .toLowerCase()
    .replace("’", "'");
  if (shopTitle == "a|x armani exchange") {
    shopTitle = "armani exchange";
  } else if (shopTitle == "dolce&gabbana junior") {
    shopTitle = "dolce&gabbana";
  } else if (shopTitle == "fendi") {
    shopTitle = "fendi men";
  } else if (shopTitle == "le underground") {
    shopTitle = "le underground bayfront";
  } else if (shopTitle == "samsonite black label") {
    shopTitle = "samsonite";
  }
  $.getJSON(
    "https://shoppes.marinabaysands.com/search/suggest.json?callback=?&q=" +
      shopTitle +
      "&resources[type]=product&resources[options][fields]=vendor",
    function (res) {
      var data = res.resources.results.products;
      if (data.length) {
        var isAccurate = 0;
        //Increase the accurate of searching, because the querying of API is fuzzy matching
        var vendor = data[0].vendor.trim().toLowerCase().replace("’", "'");
        if (shopTitle == vendor) {
          isAccurate = 1;
        }
        if (isAccurate) {
          $(".offers.section:eq(0)").before(
            "<section class='dy-shopify-section section'> <!-- offers --> <div class='section-content'> <div class='section-content-title'> <div class='container'> <h2>Featured items</h2> </div> </div> <div class='section-content-body'> <div class='container'> <div class='swiper-container'> <!-- wrapper --> <div class='row swiper-wrapper'> </div> <!-- pagination --> <div class='swiper-pagination'></div> <!-- navigation buttons --> <div class='swiper-button-prev'></div> <div class='swiper-button-next'></div> </div> </div> </div> </div> </section>"
          );
          for (let i = 0; i < data.length; i++) {
            var url = data[i].url;
            var img = data[i].featured_image.url;
            var alt = data[i].featured_image.alt;
            var title = data[i].title;
            /* var tagArr = data[i].tags; */
            $(".dy-shopify-section .row.swiper-wrapper").append(
              "<div class='swiper-slide col-md-4 mb-3' index='" +
                i +
                "'> <a class='card card-box h-100' target='_blank' href='https://shoppes.marinabaysands.com" +
                url +
                "'> <div class='card-image'> <img src='" +
                img +
                "' data-src='" +
                img +
                "' class='card-img-top lazyloaded' width='600' height='450' alt='" +
                alt +
                "' /> </div> <div class='card-body'> <h5 class='card-title'>" +
                title +
                "</h5>  </div>  </a> </div>"
            );
            /* tagArr.map(function (v) {
                  var tag = v;
                  $(
                    ".dy-shopify-section .row.swiper-wrapper .swiper-slide[index='" +
                      i +
                      "'] .tags-list"
                  ).append(
                    "<li class='list-inline-item'><span>" + tag + "</span></li>"
                  );
                  return v;
                }); */
          }
          //Create slider
          var swiper = new Swiper(".dy-shopify-section .swiper-container", {
            effect: "slide",
            preloadImages: false,
            lazy: false,
            autoHeight: false,
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 0,
            pagination: {
              el: $(".dy-shopify-section .swiper-container").find(
                ".swiper-pagination:eq(0)"
              ),
              clickable: true,
            },
            navigation: {
              nextEl: $(".dy-shopify-section .swiper-button-next"),
              prevEl: $(".dy-shopify-section .swiper-button-prev"),
            },
            breakpoints: {
              768: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
            },
          });
        }
      }
    }
  );
});
