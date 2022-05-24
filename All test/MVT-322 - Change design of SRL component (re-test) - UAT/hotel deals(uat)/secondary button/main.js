$(function () {
  var content = null;
  var url = window.location.href;
  if (url.indexOf("/sandsational-staycation.html") > -1) {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-stay.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p> <strong >All Sands Rewards members receive <a class='card-link' href='#complimentaryExperiences' target='_self' data-toggle='modal' >S$70 Dining Credits</a > and more!</strong > </p> </div> <div class='sub-title'> <small >Redeem with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small > </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p>  </div> </div> </div> </div>";
  } else {
    content =
      "<div class='dy-srl-component mvt-266'> <div class='dy-card dy-cardLeft'> <img class='srl-icon' src='https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-266-SRL-Component-Icon/icon-stay.svg' alt='' /> </div> <div class='dy-card dy-cardRight'> <div class='dy-cardRight-content'> <div class='srl-label' style='display: none'> <span>Limited Offer</span> </div> <div class='text-content'> <div class='title'> <p> <strong >Earn 6% Resort dollars on your stay and up to 10% when you dine</strong > </p> </div> <div class='sub-title'> <small >Redeem with your FREE <a href='/sands-rewards-lifestyle.html' >Sands Rewards membership</a ></small > </div> </div> <div class='cta-content'> <p> <a href='/sands-rewards-lifestyle/sign-up.aspx' class='btn btn-secondary btn-block' >Join&nbsp;for&nbsp;free</a > </p>  </div> </div> </div> </div>";
  }
  $(".col-lg-9:has(.notice-box-srl)").attr("class", "col-lg-12").html(content);
});
