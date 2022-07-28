var info = [];
$(".card").each(function () {
  var title = $(this).find(".card-title").text().trim();
  var url = $(this).attr("href");
  info.push({ title, url });
});
console.table(info);
