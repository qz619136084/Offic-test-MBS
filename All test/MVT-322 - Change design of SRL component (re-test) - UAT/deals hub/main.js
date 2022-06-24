$(function () {
  var content = null;
  var url = window.location.href;
  if (url.indexOf("/rooms.html") > -1) {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-stay.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p> <strong >Earn 6% Resort dollars on your stay and up to 10% when you dine</strong > </p> </div> <div class='sub-title'> <small >Redeem with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small > </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p>  </div> </div> </div> </div>";
  } else if (url.indexOf("/restaurants.html") > -1) {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-dine.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p><strong>Earn up to 10% instant Reward Dollars</strong></p> </div> <div class='sub-title'> <small >Redeem them with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small > </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p>  </div> </div> </div> </div>";
  } else if (url.indexOf("/shoppes.html") > -1) {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-shop.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p> <strong>Earn up to 3% instant Reward Dollars</strong> </p> </div> <div class='sub-title'> <small >Redeem them with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small > </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p> </div> </div> </div> </div>";
  } else if (url.indexOf("/shows.html") > -1) {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-ticket.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p> <strong>Earn 3% instant Reward Dollars on ticket purchases at Marina Bay Sands Box Office</strong> </p> </div> <div class='sub-title'> <small>Redeem with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small> </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p> </div> </div> </div> </div>";
  } else if (url.indexOf("/attractions.html") > -1) {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-ticket.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p> <strong>Enjoy 30% off standard tickets and earn 3% Reward Dollars</strong> </p> </div> <div class='sub-title'> <small>Redeem with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small> </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p> </div> </div> </div> </div>";
  } else if (url.indexOf("/museum.html") > -1) {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-ticket.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p> <strong>Enjoy 30% off Adult Standard and Concession Standard ticket for Single Exhibition only</strong> </p> </div> <div class='sub-title'> <small>With your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small> </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p> </div> </div> </div> </div>";
  } else if (url.indexOf("/members-only.html") > -1) {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-shop.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p> <strong>Gain access to exclusive offers, privileges and more!</strong> </p> </div> <div class='sub-title'> <small>With your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small> </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p> </div> </div> </div> </div>";
  }
  DYO.waitForElementAsync("#Loyalty-Sign-Up-Prompt-Box").then(() => {
    $("#Loyalty-Sign-Up-Prompt-Box").prop("outerHTML", content);
  });
});