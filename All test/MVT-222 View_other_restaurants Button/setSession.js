//Example
var test = {
  search_adult: search_adult,
  search_time: "20:30",
  search_time_tx: "8:30PM",
  search_date: "2021-07-12",
  search_date_tx: search_date_tx,
  search_adult_tx: "Guest(s)",
  time_category: "Late Dinner",
  translate_time: "8:30PM",
  restaurant_name: "CUT by Wolfgang Puck",
};
sessionStorage.setItem("SRSearchInfo", JSON.stringify(test));

var search_adult = $.trim(
  $(".dropdown-field.party-size .displayed-text span").text()
);
var search_date_tx = $.trim(
  $(".dropdown-field:not(.party-size):not(.time-field) .displayed-text").text()
);
var time_category = timeToCategory(search_time);

