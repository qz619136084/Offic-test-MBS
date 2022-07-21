var data = [];
$(".card").each(function () {
  var card = $(this);
  var proCard = card.find(".promotion-card");
  if (proCard.length) {
    var name = card.find(".card-title").text().trim();
    var url = card.attr("href");
    var eachObject = { name, url };
    data.push(eachObject);
  }
});
console.table(data)