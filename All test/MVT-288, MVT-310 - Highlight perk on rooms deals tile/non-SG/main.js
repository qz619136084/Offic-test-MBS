$(function () {
  $("body").addClass("highlight-perk");
  var waitEl = setInterval(function () {
    if ($(".dy-new-layout").length) {
      addHighlightPerk();
      $(".dropdown-menu-filter .checkbox input").click(function () {
        addHighlightPerk();
      });
      $(".dropdown-menu-filter .filter-clear").click(function () {
        addHighlightPerk();
      });
      function addHighlightPerk() {
        $(".dy-new-layout").each(function () {
          var card = $(this);
          var hlLabel = card.find("dy-hlLabel");
          if (!hlLabel.length) {
            var title = $.trim(card.find(".card-title").text());
            if (title == "Marina Bay Sands Reimagine") {
              var ele = card.find(".card-footer .card-text");
              ele.after(
                "<div class='dy-hlLabel' style=' width: 105px; background: #bf9b41; padding: 0 5px; border-radius: 3px; color: white; ' > <small>Free&nbsp;Breakfast</small> </div>"
              );
            }
          }
        });
      }
      clearInterval(waitEl);
    }
  }, 100);
});
