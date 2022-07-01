$(function () {
  //add survey box
  /*   
    Tip: 1. .each-option --> .checked
         2. .survey-lightbox-container button.btn-primary --> .last-step
         3. .survey-lightbox-container .step-no --> .selected
   */
  var questionData = [
    {
      title: "What's the occasion?",
      options: [
        {
          name: "Date night",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q1-date-night.jpg",
        },
        {
          name: "Family gathering",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q1-family-gathering.jpg",
        },
        {
          name: "Catch up with friends",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q1-friends.jpg",
        },
        {
          name: "Business meeting",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q1-business.jpg",
        },
      ],
      symbol: "occasion",
    },
    {
      title: "Which cuisines are you interested in?",
      options: [
        {
          name: "Chinese",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q2-chinese.jpg",
        },
        {
          name: "Italian",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q2-italian.jpg",
        },
        {
          name: "Japanese",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q2-japanese.jpg",
        },
        {
          name: "Western",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q2-western.jpg",
        },
        {
          name: "Others",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q2-others.jpg",
        },
      ],
      symbol: "cuisine",
    },
    {
      title: "What's important to you?",
      options: [
        {
          name: "Instagram-worthy restaurants",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q3-instagram.jpg",
        },
        {
          name: "Celebrity chef restaurants",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q3-celebrity.jpg",
        },
        {
          name: "Local favourites",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q3-local-favourites.jpg",
        },
        {
          name: "Affordable options",
          image:
            "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/images/dy-restaurant-survey/q3-affordable.jpg",
        },
      ],
      symbol: "importance",
    },
  ];
  $(".announceComponent").after(
    '<section class="component-section"> <div class="section-content"> <div class="container"> <div id="dy-restaurant-survey-box"> <div class="survey-container"> <div class="text-container"> <h5>Let us inspire you</h5> <p>It takes only 5-minutes to complete the quiz.</p> </div> <button class="nohover_a btn btn-primary"> Take the quiz </button> </div> </div> </div> </div> </section>'
  );
  renderLightbox(questionData);
  var windowWidth = $(window).width();
  if (windowWidth < 500) {
    $("#dy-survey-lightbox").addClass("mobile");
  }

  //function
  $("#dy-restaurant-survey-box button").click(() => {
    openLightbox($("#dy-survey-lightbox"));
  });
  $("#dy-survey-lightbox .each-option").click(function () {
    $(".survey-lightbox-container .error-tip").removeClass("show");
    $(this).siblings().removeClass("checked");
    $(this).toggleClass("checked");
    if ($(this).closest("#dy-survey-lightbox").hasClass("mobile")) {
      $(".survey-footer button.btn-primary").trigger("click");
    }
  });
  $(document).click((e) => {
    var target = $(e.target);
    if (
      target.is($("#dy-survey-lightbox")) ||
      target.is($(".survey-lightbox-container button.close span")) ||
      target.is($(".result-footer .btn-secondary")) ||
      target.is($(".no-result-tip button.close span"))
    ) {
      closeLightbox($("#dy-survey-lightbox"));
    }
  });
  $(".survey-footer button.btn-primary").click(function () {
    changeStatusLayout("next");
    switchToQuestion();
  });
  $(".survey-footer a.prev-step").click((e) => {
    e.preventDefault();
    $(".survey-lightbox-container .error-tip").removeClass("show");
    changeStatusLayout("prev");
    switchToQuestion();
  });
  $("#dy-survey-lightbox .restart-btn").click((e) => {
    e.preventDefault();
    resetSurvey();
  });
  $(".no-result-tip .btn-secondary").click((e) => {
    e.preventDefault();
    resetSurvey();
  });

  function renderLightbox(questionData) {
    //render common frame
    $("body").append(
      "<div id='dy-survey-lightbox' class='modal fade'> <div class='survey-lightbox-container'> <p class='survey-title'><b>Let us inspire you!</b></p> <div class='survey-steps'> <div class='strike-through-line'></div> </div> <div class='survey-footer'> <div class='main-btn-container'> <div class='error-tip fade'> <span>Choose an option to proceed.</span> </div> <button class='nohover_a btn btn-primary'> <span class='next'>Next Question</span ><span class='submit'>Submit</span> </button> </div> <a class='prev-step' href='#'>Back to Cuisine</a> </div> <div class='result-footer'> <a class='btn btn-secondary' href='#'>View More Restaurants</a> <a class='restart-btn' href='#'>Restart the quiz</a> </div> <button type='button' class='close'><span>×</span></button> </div> <div class='no-result-tip fade'> <div class='tip-content'> <p><b>We couldn’t find any suitable picks for your choices.</b></p> <p>Try changing some options and we’ll find what you need.</p> </div> <div class='button-container'> <a class='btn btn-secondary' href='#'>Restart the quiz</a> </div> <button type='button' class='close'><span>×</span></button> </div> </div>"
    );
    var optionNumber = questionData.length;
    //render survey-step
    for (var i = 0; i < optionNumber; i++) {
      var el = null;
      if (i == 0) {
        //first step
        el =
          "<div class='each-step'> <div class='step-no active' data-step='" +
          i +
          "'> <span class='number'>" +
          (+i + 1) +
          "</span><span class='tick'>✓</span> </div> </div>";
      } else {
        //other steps
        el =
          "<div class='each-step'> <div class='step-no' data-step='" +
          i +
          "'> <span class='number'>" +
          (+i + 1) +
          "</span><span class='tick'>✓</span> </div> </div>";
      }
      $(".survey-lightbox-container .survey-steps").append(el);
    }
    //render options
    for (var x = 0; x <= optionNumber; x++) {
      var el = null;
      if (questionData[x]) {
        //normal options container
        var title = questionData[x].title;
        var optionArr = questionData[x].options;
        var symbol = questionData[x].symbol;
        if (x == 0) {
          //first option container
          el =
            "<div class='survey-options fade show' symbol='" +
            symbol +
            "' data-question='" +
            x +
            "' style='display: block'> <h3><b>" +
            title +
            "</b></h3> <ul class='survey-options-container'></ul> </div>";
        } else {
          //other option containers
          el =
            "<div class='survey-options fade' symbol='" +
            symbol +
            "' data-question='" +
            x +
            "'> <h3><b>" +
            title +
            "</b></h3> <ul class='survey-options-container'></ul> </div>";
        }
      } else {
        //result card frame
        el =
          "<div class='survey-options fade survey-result'> <h3><b>Here are our picks for you!</b></h3> <p> These <b>[answer 1- occasion]</b> are perfect for a <b>[answer2- important]</b> with <b>[answer3- cuisine]</b> food. </p> <ul class='survey-options-container'></ul> </div>";
      }
      $(".survey-lightbox-container .survey-footer").before(el);
      //render each option of each option container
      for (var y = 0; y < optionArr.length; y++) {
        var optionName = optionArr[y].name;
        var optionImage = optionArr[y].image;
        $(
          ".survey-lightbox-container .survey-options[data-question=" +
            x +
            "] .survey-options-container"
        ).append(
          "<li class='each-option'> <div class='option-body'> <img src='" +
            optionImage +
            "' alt='' /> </div> <div class='option-footer'> <div class='option-title'> <i class='check-icon'></i><b>" +
            optionName +
            "</b> </div> </div> </li>"
        );
      }
    }
  }
  function renderResultCard() {
    var selectedArr = [];
    $(".each-option.checked .option-title b").each(function () {
      selectedArr.push($(this).text().trim());
    });
    //render title
    $(".survey-options.survey-result h3+p").html(
      "These <b>" +
        selectedArr[2] +
        "</b> are perfect for a <b>" +
        selectedArr[0] +
        "</b> with <b>" +
        (selectedArr[1] == "Others" ? "delicious" : selectedArr[1]) +
        "</b> food."
    );
    //render main content role
    var selectedData = DYO.recommendationWidgetData(
      145354,
      {},
      function (error, data) {
        var testKeywordArr = ["Italian", "Western", "Rooftop Restaurants"];
        var selectedData = data.slots.filter((item) => {
          return (
            $.inArray(item.survey_cuisine, testKeywordArr) > -1 &&
            $.inArray(item.survey_importance, testKeywordArr) > -1 &&
            $.inArray(item.survey_occasion, testKeywordArr) > -1
          );
        });
        return selectedData.slice(0, 3);
      }
    );
    if (selectedData.length) {
      for (let i = 0; i < selectedData.length; i++) {
        var url = selectedData[i].url;
        var image_url = selectedData[i].image_url;
        var name = selectedData[i].name;
        var content = selectedData[i].Cuisine;
        $(".survey-options-container").append(
          "<li class='result-card'> <a class='card bg-transparent h-100-percent' href='" +
            url +
            "' target='_self' > <div class='card-image'> <img src='" +
            image_url +
            "' data-src='" +
            image_url +
            "' class='card-img-top ls-is-cached lazyloaded' width='600' height='450' alt='" +
            name +
            "' /> </div> <div class='card-body'> <h5 class='card-title'>" +
            name +
            "</h5> <p class='card-text'> <object>" +
            content +
            "</object> </p> </div> <div class='card-footer'><p class='card-link'>Book Now</p></div> </a> </li>"
        );
      }
    } else {
      toggleNoResult();
    }
  }
  function changeStatusLayout(direction) {
    var totalSteps = $(".step-no").length;
    var selectedSteps = $(".step-no.selected").length;
    if (direction == "next") {
      //show error tip if continue with no selection
      if (!$(".survey-options.show .each-option.checked").length) {
        $(".survey-lightbox-container .error-tip").addClass("show");
      } else {
        if (selectedSteps < totalSteps) {
          $(".step-no.active").addClass("selected").removeClass("active");
          $(".step-no:not(.selected):eq(0)").addClass("active");
          if (selectedSteps == totalSteps - 1) {
            //Submit (to result card)
            $(".survey-lightbox-container").addClass("result");
            //Render result card
            renderResultCard();
          }
        }
      }
    } else if (direction == "prev") {
      if (selectedSteps) {
        var activeStep = $(".step-no.active").attr("data-step");
        $(
          ".survey-options[data-question=" + activeStep + "] .each-option"
        ).removeClass("checked");
        $(".step-no.active").removeClass("active");
        var selectedStep = $(".step-no.selected:last").attr("data-step");
        $(
          ".survey-options[data-question=" + selectedStep + "] .each-option"
        ).removeClass("checked");
        $(".step-no.selected:last").addClass("active").removeClass("selected");
      }
    }
    totalSteps = $(".step-no").length;
    selectedSteps = $(".step-no.selected").length;
    if (selectedSteps == totalSteps - 1) {
      $(".survey-lightbox-container button.btn-primary").addClass("last-step");
    } else {
      $(".survey-lightbox-container button.btn-primary").removeClass(
        "last-step"
      );
    }
    if (!selectedSteps) {
      $(".survey-lightbox-container a.prev-step").hide();
    } else {
      $(".survey-lightbox-container a.prev-step").show();
    }
    //update text of prev-button
    var prevSymbol = $(
      ".survey-options[data-question=" +
        $(".step-no.selected:last").attr("data-step") +
        "]"
    ).attr("symbol");
    $(".survey-lightbox-container a.prev-step").text("Back to " + prevSymbol);
  }
  function switchToQuestion() {
    if ($(".step-no.active").length) {
      var stepNumber = $(".step-no.active").attr("data-step");
      $(".survey-options:not([data-question=" + stepNumber + "])").removeClass(
        "show"
      );
      $(".survey-options:not([data-question=" + stepNumber + "])").hide();
      $(".survey-options[data-question=" + stepNumber + "]").show();
      setTimeout(() => {
        $(".survey-options[data-question=" + stepNumber + "]").addClass("show");
      }, 10);
    } else {
      //To result card
      $(".survey-options").removeClass("show");
      $(".survey-options").hide();
      $(".survey-options.survey-result").show();
      setTimeout(() => {
        $(".survey-options.survey-result").addClass("show");
      }, 10);
    }
  }
  function resetSurvey() {
    $(".survey-lightbox-container.result").removeClass("result");
    $(".survey-steps").css("display", "flex");
    $(".step-no").removeClass("active selected");
    $(".step-no:eq(0)").addClass("active");
    switchToQuestion();
    $(".each-option").removeClass("checked");
    $(".error-tip").removeClass("show");
    $(".survey-lightbox-container a.prev-step").hide();
    if ($(".no-result-tip").css("display") == "block") {
      toggleNoResult();
    }
  }
  function toggleNoResult() {
    if ($(".survey-lightbox-container").css("display") == "block") {
      $(".survey-lightbox-container").hide();
      $(".survey-lightbox-container").removeClass("show");
      $(".no-result-tip").show();
      setTimeout(() => {
        $(".no-result-tip").addClass("show");
      }, 10);
    } else {
      $(".no-result-tip").hide();
      $(".no-result-tip").removeClass("show");
      $(".survey-lightbox-container").show();
    }
  }

  function openLightbox(eleName) {
    $("body").append("<div class='modal-backdrop fade'></div>");
    eleName.show();
    setTimeout(function () {
      eleName.addClass("show");
      $(".modal-backdrop").addClass("show");
      $("body").addClass("modal-open").css("padding-right", "17px");
    }, 10);
  }
  function closeLightbox(eleName) {
    eleName.removeClass("show");
    $(".modal-backdrop").removeClass("show");
    $("body").removeClass("modal-open").css("padding-right", "");
    setTimeout(function () {
      eleName.hide();
      resetSurvey();
      $(".modal-backdrop").remove();
    }, 150);
  }
});
