$(function () {
  $("body").addClass("banner-test");
  setTimeout(function () {
    $("body").append(
      "<div class='dy-modal-container dy-act-overlay'> <div class='dy-modal-backdrop lb_overlay js_lb_overlay' style='background-color: black; opacity: 0.6' ></div> <div class='dy-modal-wrapper'> <div class='dy-modal-contents' style='visibility: visible'> <div class='dy-lb-close'></div> <div class='dy_unit dy_smart_object_1039925 dyother dyMonitor' data-dy-exp-id='1039925' data-dy-var-id='1039925' data-dy-ver-data='50166109::0:1593500586982:15799:80823:1:0:0' data-dy-att-method='0' data-dy-att-seq='80823' data-adid='smart_object_1039925||605|||' > <div id='dytmpl-100113765'> <div class='img_100113765'><img src='${Image Link}' alt='' /></div> <div class='content_100113765'> <div class='title_100113765'>${Header}</div> <div class='secondary_text_100113765'>${Body}</div> <a class='button_100113765' href='${Button Link}'>${Button}</a> </div> </div> </div> </div> </div> </div>"
    );
    $(".dy-lb-close").click(function () {
      $(".dy-modal-container").fadeOut();
    });
    $(".dy-modal-wrapper").click(function (e) {
      var target = $(e.target);
      if (target.is(".dy-modal-wrapper")) {
        $(".dy-modal-container").fadeOut();
      }
    });
  }, 15000);
});
