$(function () {
  var waitDyApi = setInterval(() => {
    if (DY.ServerUtil != undefined) {
      var content = null;
      var dy_audience_array = Object.values(DY.ServerUtil.getUserAudiences());
      var hotel = 1300101;
      var restaurants = 1300102;
      var museum = 1300103;
      var shows = 1408984;
      var attractions = 1300095;
      if (ifAudienceIn(hotel, dy_audience_array)) {
        content =
          "Complete your sign up to earn 6% Resort dollars on your stay!";
      } else if (ifAudienceIn(restaurants, dy_audience_array)) {
        content =
          "Complete your sign up to earn up to 10% instant Reward Dollars when you dine with us!";
      } else if (ifAudienceIn(museum, dy_audience_array)) {
        content =
          "Complete your sign up to enjoy 30% off single exhibition tickets at ArtScience Museum!";
      } else if (ifAudienceIn(shows, dy_audience_array)) {
        content =
          "Complete your sign up to earn 3% instant Reward Dollars on shows!";
      } else if (ifAudienceIn(attractions, dy_audience_array)) {
        content =
          "Complete your sign up to enjoy 30% off standard tickets on attractions!";
      }
      $(".signupForm").before(
        "<div class='dy-srl-component mvt-321' style=''> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-shop.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='text-content'> <p style='margin: 0; color:#D0AF6D'><strong>" +
          content +
          "</strong></p> </div> </div> </div> </div>"
      );
      clearInterval(waitDyApi);
    }
  }, 300);

  function ifAudienceIn(limitedId, dy_audience_array) {
    return $.inArray(limitedId, dy_audience_array) > -1;
  }
});
