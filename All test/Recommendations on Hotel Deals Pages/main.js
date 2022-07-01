DYO.waitForElementAsync(
  "#dy-recommendations-${dyVariationId} .dy-new-layout"
).then((elements) => {
  const tiles = elements;
  tiles.forEach((tile) => {
    setRedirectFunctionality(tile);
    setHoverFunctionality(tile);
  });
  //Bryant Added;
  bindFilterClick();
  $(".vwo-icon-part").click((e) => {
    e.stopPropagation();
  });
  $(".listing-content-item:not(.row)").append(
    "<div style='width: 100%' class='footerAnnotation'> <p><small>*Not applicable during blackout dates</small></p><p><small>**Only available for specific hotel deal and room type</small></p> </div>"
  );
});

function setRedirectFunctionality(node) {
  const href = node.querySelector("a").getAttribute("href");
  node.addEventListener("click", () => {
    window.location.href = href;
  });
}

function setHoverFunctionality(node) {
  const targetEls = node.querySelectorAll(".icon-content img");
  targetEls.forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      const event = e;
      event.target.nextElementSibling.style.display = "block";
      setTimeout(() => {
        event.target.nextElementSibling.classList.add("show");
      }, 10);
    });

    el.addEventListener("mouseout", (event) => {
      const e = event;
      e.target.nextElementSibling.classList.remove("show");
      setTimeout(() => {
        e.target.nextElementSibling.style.display = "none";
      }, 150);
    });
  });
}
function bindFilterClick() {
  $(".dropdown-menu-filter .checkbox input").click(function () {
    var selectedArr = [];
    $(".dropdown-menu-filter label:has(input:checked)").each(function () {
      var selectedPerk = $(this).text().trim();
      selectedArr.push(selectedPerk);
    });
    console.log("selectedArr:", selectedArr);
    adjustLayout(selectedArr);
  });
  $(".dropdown-menu-filter .filter-clear").click(function () {
    $(".dy-new-layout").show();
  });
}
function adjustLayout(arr) {
  if (arr.length) {
    $(".dy-new-layout").each(function () {
      var _this = $(this);
      var perksArr = [];
      var canShow = 1;
      _this.find(".icon-content").each(function () {
        var perk = $(this)
          .find(".tip-content")
          .text()
          .trim()
          .replaceAll("*", "");
        if ($(this).css("display") != "none") {
          perksArr.push(perk);
        }
      });
      //compare info with filter for each tile;
      console.log(perksArr);
      arr.forEach((v) => {
        if ($.inArray(v, perksArr) == -1) {
          canShow = 0;
          console.log("can't show");
        }
      });
      //control show/hide for each tile with filter
      if (canShow) {
        _this.show();
      } else {
        _this.hide();
      }
    });
  } else {
    $(".dy-new-layout").show();
  }
}
