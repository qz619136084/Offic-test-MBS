$(function () {
  //add survey box
  $(".announceComponent").after(
    '<section class="component-section"> <div class="section-content"> <div class="container"> <div id="dy-restaurant-survey-box"> <div class="survey-container"> <div class="text-container"> <h5>Let us inspire you</h5> <p>It takes only 5-minutes to complete the quiz.</p> </div> <button class="nohover_a btn btn-primary">Take the quiz</button> </div> </div> </div> </div> </section>'
  );
  $("body").append(
    "<div id='dy-survey-lightbox'> <div class='survey-lightbox-container'> <p class='survey-title'>Let us inspire you!</p> <div class='survey-steps'> <div class='each-step' style='position: relative'> <div class='step-no'><span>1</span></div> <div class='strike-through-line'></div> </div> <div class='each-step' style='position: relative'> <div class='step-no'><span>1</span></div> <div class='strike-through-line'></div> </div> <div class='each-step' style='position: relative'> <div class='step-no'><span>1</span></div> <div class='strike-through-line'></div> </div> </div> <h3>What's important to you?</h3> <div class='survey-options-container'> <div class='each-option'> <div class='option-body'> <img src='https://www.marinabaysands.com/content/dam/revamp/restaurants/restaurant-details/the-coffee-bean-and-tea-leaf-beanstro/beanstro-signature-dish-600x450.jpg' alt='' /> </div> <div class='option-footer'> <label class='checkbox ng-binding'> <input type='checkbox' /> <span style='border-radius: 50%'></span>Celebrity Chef restaurants</label > </div> </div> <div class='each-option'> <div class='option-body'> <img src='https://www.marinabaysands.com/content/dam/revamp/restaurants/restaurant-details/the-coffee-bean-and-tea-leaf-beanstro/beanstro-signature-dish-600x450.jpg' alt='' /> </div> <div class='option-footer'> <label class='checkbox ng-binding'> <input type='checkbox' /> <span style='border-radius: 50%'></span>Celebrity Chef restaurants</label > </div> </div> <div class='each-option'> <div class='option-body'> <img src='https://www.marinabaysands.com/content/dam/revamp/restaurants/restaurant-details/the-coffee-bean-and-tea-leaf-beanstro/beanstro-signature-dish-600x450.jpg' alt='' /> </div> <div class='option-footer'> <label class='checkbox ng-binding'> <input type='checkbox' /> <span style='border-radius: 50%'></span>Celebrity Chef restaurants</label > </div> </div> <div class='each-option'> <div class='option-body'> <img src='https://www.marinabaysands.com/content/dam/revamp/restaurants/restaurant-details/the-coffee-bean-and-tea-leaf-beanstro/beanstro-signature-dish-600x450.jpg' alt='' /> </div> <div class='option-footer'> <label class='checkbox ng-binding'> <input type='checkbox' /> <span style='border-radius: 50%'></span>Celebrity Chef restaurants</label > </div> </div> </div> <button class='nohover_a btn btn-primary'>Submit</button ><a href='#'>Back to Cuisine</a> </div> </div>"
  );
  function openLightbox(eleName) {
    $("body").addClass("modal-open").css("padding-right", "17px");
    $("body").append("<div class='modal-backdrop fade'></div>");
    eleName.show();
    setTimeout(function () {
      eleName.addClass("show");
      $(".modal-backdrop").addClass("show");
    }, 10);
  }
  function closeLightbox(eleName) {
    eleName.removeClass("show");
    $(".modal-backdrop").removeClass("show");
    setTimeout(function () {
      $("body").removeClass("modal-open").css("padding-right", "");
      eleName.hide();
    }, 150);
  }
});
