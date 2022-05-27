$(function () {
  setTimeout(() => {
    $(".search-filters").after(
      '<div class="dy-filter-outer"> <div class="dy-filter-list"> <div class="dy-tips-explain">Trending Searches</div> <div class="dy-tips-list"> <div> <a href="/restaurants/rise.html"><span>RISE</span></a ><a href="/restaurants/bread-street-kitchen.html" ><span>Bread Street Kitchen</span></a ><a href="/restaurants/koma-singapore.html" ><span>KOMA</span></a > <a href="/restaurants/mott32.html"><span>Mott 32</span></a ><a href="/restaurants/spago.html" ><span>Spago Dining Room</span></a > </div> </div> </div> </div>'
    );
    $(".search-filters").focus(function () {
      $(this).next(".dy-filter-outer").show();
    });
    $(".search-filters").blur(function () {
      setTimeout(() => {
        $(this).next(".dy-filter-outer").hide();
      }, 100);
    });
  }, 500);
});
