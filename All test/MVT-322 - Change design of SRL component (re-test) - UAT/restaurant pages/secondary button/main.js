$(function () {
  var content = null;
  var url = window.location.href;
  if (url.indexOf("/restaurants/waku-ghin.html") > -1) {
    $(".col-lg-9:has(.notice-box-srl)").attr("class", "col-lg-12");
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-dine.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p><strong>Earn 10% instant Reward Dollars</strong></p> </div> <div class='sub-title'> <small >Redeem them with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small > </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p>  </div> </div> </div> </div>";
  } else if (url.indexOf("/restaurants/rise.html") > -1) {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-dine.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p><strong>Enjoy 10% off and earn 10% instant Reward Dollars</strong></p> </div> <div class='sub-title'> <small >Redeem them with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small > </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p> </div> </div> </div> </div>";
  } else if (url.indexOf("/nightlife/avenue-singapore.html") > -1) {
    $(".col-lg-9:has(.notice-box-srl)").attr("class", "col-lg-12");
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-dine.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p><strong>Earn 3% instant Reward Dollars</strong></p> </div> <div class='sub-title'> <small >Redeem them with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small > </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p> </div> </div> </div> </div>";
  } else {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-dine.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p><strong>Earn 10% instant Reward Dollars</strong></p> </div> <div class='sub-title'> <small >Redeem them with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small > </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p> </div> </div> </div> </div>";
  }
  $(".col-lg-12:has(.notice-box-srl)").html(content);
});
