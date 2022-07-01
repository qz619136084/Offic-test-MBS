DYO.recommendationWidgetData(145354, {}, function (error, data) {
  var testKeywordArr = ["Italian", "Western", "Rooftop Restaurants"];
  var selectedData = data.slots.filter((item) => {
    return (
      $.inArray(item.survey_cuisine, testKeywordArr) > -1 &&
      $.inArray(item.survey_importance, testKeywordArr) > -1 &&
      $.inArray(item.survey_occasion, testKeywordArr) > -1
    );
  });
  return selectedData.slice(0, 3);
});
