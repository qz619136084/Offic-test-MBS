$(function () {
  $("p:empty:eq(0)").before(
    '<div class="row"> <div class="col-md-6"> <div class="tripadvisor-review-small mt-4 mt-md-0"> <div class="tripadvisor-review-image"> <img src="https://media-cdn.tripadvisor.com/media/photo-t/15/2f/f8/fc/rakhi-p.jpg" data-src="https://media-cdn.tripadvisor.com/media/photo-t/15/2f/f8/fc/rakhi-p.jpg" width="50" height="50" class="ls-is-cached lazyloaded" alt="" /> </div> <div class="tripadvisor-review-content"> <h5>"Fantastic experience! Highly recommended!"</h5> <p class="collapse"> This was our second stay in MBS, however, I couldn\'t post a review previously as we had to cut our stay short due to my baby falling sick. This time, <span class="view-more-collapse" >... <a target="_blank" href="https://www.tripadvisor.com.sg/ShowUserReviews-g294265-d1770798-r835103445-Marina_Bay_Sands-Singapore.html?m=16157#review835103445" class="external" >View more</a ></span > </p> <a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="true" style="font-size: 1.2rem; line-height: 2" > <span class="collapse-item-collapsed">Show more</span> <span class="collapse-item-show">Show less</span> <span class="icon-collapse-toggle"></span> </a> <p><span class="tripadvisor-user-signoff"> - Rakhi07priya</span></p> </div> </div> </div> <div class="col-md-6"> <div class="tripadvisor-review-small mt-4 mt-md-0"> <div class="tripadvisor-review-image"> <img src="https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e5/2b/default-avatar-2020-52.jpg" data-src="https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e5/2b/default-avatar-2020-52.jpg" width="50" height="50" class="ls-is-cached lazyloaded" alt="" /> </div> <div class="tripadvisor-review-content"> <h5>"MBS a "must stay" destination"</h5> <p class="collapse"> Our 20th yr. anniversary, we wanted to "go big" and chose Dubai and Singapore to stay. Both places were great, but MBS outshined everything we hoped for. <span class="view-more-collapse" >... <a class="external" href="https://www.tripadvisor.com.sg/ShowUserReviews-g294265-d1770798-r834561262-Marina_Bay_Sands-Singapore.html?m=16157#review834561262" target="_blank" >View more</a ></span > </p> <a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="true" style="font-size: 1.2rem; line-height: 2" > <span class="collapse-item-collapsed">Show more</span> <span class="collapse-item-show">Show less</span> <span class="icon-collapse-toggle"></span> </a> <p><span class="tripadvisor-user-signoff"> - Wanderer236522</span></p> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 mt-3"> <p> <a href="https://www.tripadvisor.com/Hotel_Review-g294265-d1770798-Reviews-Marina_Bay_Sands-Singapore.html#REVIEWS" id="tripadvisor-more-reviews" target="_self" data-toggle="anchor-scroll" class="tripadvisor-more-reviews" >View more reviews</a > </p> </div> </div>'
  );
  setTimeout(function () {
    $(".tripadvisor-review-small .collapse-toggle").unbind();
    $(".tripadvisor-review-small .collapse-toggle").click(function () {
      var container = $(this).parents(".tripadvisor-review-small");
      if (container.find(".collapse-toggle.collapsed").length) {
        container.find(".collapse").slideDown(300);
        $(this).removeClass("collapsed");
      } else {
        container.find(".collapse").slideUp(300);
        $(this).addClass("collapsed");
      }
    });
  }, 150);
});
