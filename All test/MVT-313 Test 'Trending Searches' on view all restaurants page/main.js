$(function () {
  setTimeout(() => {
    $(".search-filters").after(
      '<div class="dy-filter-outer" /* style="display:none" */> <div class="dy-filter-list"> <div class="dy-tips-explain">Trending Searches</div> <div class="dy-tips-list"> <div> <a href="/restaurants/koma-singapore.html" ><span>KOMA Singapore</span></a ><a href="/restaurants/lavo.html" ><span>LAVO Italian Restaurant & Rooftop Bar</span></a ><a href="/restaurants/spago.html" ><span>Spago Dining Room by Wolfgang Puck</span></a > </div> </div> </div> </div>'
    );
    $(".search-filters").focus(function () {
      $(this).next(".dy-filter-outer").show();
    });
    $(".search-filters").blur(function () {
      $(this).next(".dy-filter-outer").hide();
    });
  }, 500);
});
