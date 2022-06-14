DYO.waitForElementAsync(
  "#dy-recommendations-${dyVariationId} .dy-new-layout"
).then((elements) => {
  const tiles = elements;
  tiles.forEach((tile) => {
    setRedirectFunctionality(tile);
    setHoverFunctionality(tile);
  });
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
