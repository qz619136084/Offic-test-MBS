$(function () {
  setTimeout(function () {
    $(".component-section.section:has(.announcement-box)").after(
      "<div class='listing-tools dy-search-box'> <ul class='list-inline text-center'> <li class='list-inline-item'> <input type='text' class='form-control search-filters' placeholder='Search by restaurant name' /><button> <img width='27' height='27' src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-210-Search-Box/search-icon.svg' /> </button> </li> </ul> </div>"
    );
    $(document).keyup(function (e) {
      if (e.keyCode == 13) {
        if ($(".search-filters").is(":focus")) {
          redirect();
        }
      }
    });
    $(".dy-search-box button").click(function () {
      redirect();
    });
  }, 100);

  function redirect() {
    var inputText = $.trim($(".dy-search-box input").val());
    if (inputText.length > 0) {
      var targetUrl = "/restaurants/view-all.html?search=" + inputText;
      window.location.href = targetUrl;
    }
  }
});
