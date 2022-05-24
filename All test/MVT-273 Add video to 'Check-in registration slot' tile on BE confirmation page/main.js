$(function () {
  $("body").append(
    "<div class='modal modal-gallery fade' id='dyVideoModal' tabindex='-1' role='dialog' aria-labelledby='videoModalLabel' style='padding-right: 17px' aria-modal='true' > <div class='modal-dialog modal-dialog-centered' role='document'> <div class='modal-content'> <button type='button' class='close' data-dismiss='modal' aria-label='Close' > <span aria-hidden='true'>×</span> </button> <div class='modal-body'> <div class='swiper-fullpage'> <div class='embed-responsive embed-responsive-16by9'> </div> <span class='swiper-notification' aria-live='assertive' aria-atomic='true' ></span> </div> </div> </div> </div> </div>"
  );
  //Wait src loaded;
  var waitSrc = setInterval(function () {
    if (
      $(".swiper-wrapper .swiper-slide:eq(0) .card-image:has(.lazyloaded)")
        .length
    ) {
      var src = $(".swiper-wrapper .swiper-slide:eq(0) .card-image img").attr(
        "src"
      );
      $(".swiper-wrapper .swiper-slide:eq(0) .card-image").prop(
        "outerHTML",
        "<div class='dy-video-wrap card-image' id='checkIn'> <img _ngcontent-c8='' alt='Card image cap' src='" +
          src +
          "' /><span class='icon-video-play'></span> </div>"
      );
    }
  }, 100);
  //bind click to show lightbox;
  $("body").on("click", "#checkIn", function () {
    var windowHeight = $(window).height();
    var iframeWrapHeight = windowHeight - 81.5;
    $("#dyVideoModal .swiper-fullpage").css("height", iframeWrapHeight);
    $("body").addClass("modal-open").css("padding-right", "17px");
    $("body").append("<div class='modal-backdrop fade'></div>");
    $("#dyVideoModal").show();
    setTimeout(function () {
      $(".modal-backdrop").addClass("show");
      $("#dyVideoModal").addClass("show");
    }, 10);
    setTimeout(function () {
      $("#dyVideoModal .swiper-fullpage")
        .addClass("swiper-container-initialized")
        .addClass("swiper-container-horizontal")
        .addClass("active");
      $("#dyVideoModal .embed-responsive").append(
        "<iframe src='https://play.vidyard.com/vx8cUfqmTLyCZ4Xb3AaZLP.html?' class='wistia_embed' name='wistia_embed' width='600' height='400' allowtransparency='true' frameborder='0' allowfullscreen='allowfullscreen' mozallowfullscreen='mozallowfullscreen' webkitallowfullscreen='webkitallowfullscreen' oallowfullscreen='oallowfullscreen' msallowfullscreen='msallowfullscreen' > </iframe>"
      );
    }, 160);
    //bind close button to hide lightbox;
    $("body").on("click", "#dyVideoModal .close", function () {
      $("#dyVideoModal").removeClass("show");
      $(".modal-backdrop").removeClass("show");
      setTimeout(function () {
        $("#dyVideoModal .swiper-fullpage")
          .removeClass("swiper-container-initialized")
          .removeClass("swiper-container-horizontal")
          .removeClass("active");
        $("body").removeClass("modal-open").css("padding-right", "");
        $("#dyVideoModal").hide().css("padding-right", "");
        $("#dyVideoModal iframe").remove();
        $(".modal-backdrop").remove();
      }, 150);
    });
  });
});
