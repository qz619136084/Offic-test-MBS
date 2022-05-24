// time_category
function timeToCategory(time) {
  var category;
  var hour = time.split(":")[0];
  var minutes = time.split(":")[1];

  if (
    (parseInt(hour) >= 6 && parseInt(hour) <= 10) ||
    (parseInt(hour) == 11 && parseInt(minutes) < 30)
  ) {
    category = "Breakfast";
  } else if (
    (parseInt(hour) == 11 && parseInt(minutes) >= 30) ||
    (parseInt(hour) >= 12 && parseInt(hour) < 15)
  ) {
    category = "Lunch";
  } else if (parseInt(hour) >= 15 && parseInt(hour) < 18) {
    category = "Tea";
  } else if (
    (parseInt(hour) >= 18 && parseInt(hour) < 20) ||
    (parseInt(hour) == 20 && parseInt(minutes) < 30)
  ) {
    category = "Early Dinner";
  } else if (
    (parseInt(hour) == 20 && parseInt(minutes) >= 30) ||
    (parseInt(hour) >= 21 && parseInt(hour) < 24)
  ) {
    category = "Late Dinner";
  } else {
    category = "Nightlife";
  }

  return category;
}
