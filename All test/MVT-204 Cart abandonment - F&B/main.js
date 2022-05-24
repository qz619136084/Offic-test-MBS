$(function () {
  var content = null;
  //Get all audience ids which are on the page currently;
  var dy_audience_array = Object.values(DY.ServerUtil.getUserAudiences());
  //Audience ID target
  var black_tap = 1399730;
  var cut = 1398989;
  var bread_street_kitchen = 1399733;
  var db_bistro = 1399743;
  var koma = 1399748;
  var lavo = 1399777;
  var mott32 = 1399779;
  var rise = 1399794;
  var spago_bar = 1399798;
  var spago_dining_room = 1399800;
  var yardbird = 1399809;
  if (ifAudienceIn(koma)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/koma-162x162.jpg' alt='koma' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on a next-level dining experience at KOMA. </p> <a href='/restaurants/koma-singapore.html' data-name='KOMA' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(spago_dining_room)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/spago-dining-room-1-162x162.jpg' alt='spago dining room' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on Californian cuisine at Spago Dining Room.</p> <a href='/restaurants/spago.html' data-name='Spago Dining Room' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(spago_bar)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/spago-bar-1-162x162.jpg' alt='spago bar' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'>  You're missing out on artisanal cocktails at Spago Bar & Lounge.</p> <a href='/restaurants/spago-bar-and-lounge.html' data-name='Spago Bar' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(rise)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/rise-162x162.jpg' alt='rise' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on an elevated buffet experience at RISE. </p> <a href='/restaurants/rise.html' data-name='rise' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(bread_street_kitchen)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/bsk-162x162.jpg' alt='Bread Street Kitchen' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on traditional British fare at Bread Street Kitchen. </p> <a href='/restaurants/bread-street-kitchen.html' data-name='Bread Street Kitchen' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(lavo)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/lavo-162x162.jpg' alt='lavo' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on stunning rooftop views of the city at LAVO. </p> <a href='/restaurants/lavo.html' data-name='lavo' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(cut)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/cut-1-162x162.jpg' alt='cut' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on the finest range of beef selections at CUT.</p> <a href='/restaurants/cut.html' data-name='CUT' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(mott32)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/mott32-162x162.jpg' alt='mott 32' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on authentic Chinese cuisine at Mott32. </p> <a href='/restaurants/mott32.html' data-name='mott32' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(yardbird)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/yardbird-162x162.jpg' alt='Yardbird' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on traditional American cuisine at Yardbird.</p> <a href='/restaurants/yardbird-southern-table-and-bar.html' data-name='Yardbird' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(black_tap)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/black-tap-162x162.jpg' alt='black tap' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on gourmet burgers and craft beers at Black Tap. </p> <a href='/restaurants/black-tap.html' data-name='Black Tap' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  } else if (ifAudienceIn(db_bistro)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-186-FB-Exit-Intent/db-bistro-1-162x162.jpg' alt='Db bistro' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't forget your table! </h6> <p style='margin: 0'> You're missing out on authentic French classics at db Bistro. </p> <a href='/restaurants/db-bistro-and-oyster-bar.html' data-name='db bistro' ><button class='btn btn-primary'>Complete reservation</button></a > </div> </div>";
  }
  if (getCookie("notification") != "off") {
    var ua = navigator.userAgent.toUpperCase();
    if (ua.indexOf("MBS-ANDROID") == -1 && ua.indexOf("MBS-IOS") == -1) {
      $("body").append(content);
      $(".dy-widget-container .dy-close-btn").click(function () {
        $(".dy-widget-container").fadeOut(300);
        setCookie("notification", "off");
      });
      $(".dy-widget-container a").click(function () {
        var name = $(this).attr("data-name");
        sessionStorage.setItem("selectedASM", name);
      });
    }
  }
  function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
  }
  function getCookie(c_name) {
    var cookieArr = document.cookie.split("; ");
    for (i = 0; i < cookieArr.length; i++) {
      var name = cookieArr[i].split("=")[0];
      var value = cookieArr[i].split("=")[1];
      if (name == c_name) {
        return value;
      }
    }
  }
  function ifAudienceIn(limitedId) {
    return $.inArray(limitedId, dy_audience_array) > -1;
  }
});
