$(function () {
  var content = null;
  //Get all audience ids which are on the page currently;
  var dy_audience_array = Object.values(DY.ServerUtil.getUserAudiences());
  //Audience ID target
  var future_world = 1357229;
  var attack_on_titan = 1370581;
  var radical_curiosity = 1370582;
  var hope_from_chaos = 1370583;
  if (ifAudienceIn(future_world)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/revamp/ASMrevamp/Ticket/future-world-162x162-1.jpg' alt='museum' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't miss this exhibition! </h6> <p style='margin: 0'> You're missing out on breathtaking digital interactive installations at <i>Future World</i>. </p> <a href='/museum/ticket.html' data-name='Future World: Where Art Meets Science' ><button class='btn btn-primary'>Buy tickets</button></a > </div> </div>";
  } else if (ifAudienceIn(attack_on_titan)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-205-asm-cart-abandonment/asm-attack-on-titan-167x167.jpg' alt='museum' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't miss this exhibition! </h6> <p style='margin: 0'> You're missing out on never-before-seen sketches and an immersive battle sequence at <i>Attack on Titan</i>. </p> <a href='/museum/ticket.html' data-name='Attack on Titan: The Exhibition' ><button class='btn btn-primary'>Buy tickets</button></a > </div> </div>";
  } else if (ifAudienceIn(radical_curiosity)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-205-asm-cart-abandonment/asm-radical-curiosity-162x162.jpg' alt='museum' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'> Don't miss this exhibition! </h6> <p style='margin: 0'> You're missing out on brilliant inventions and futuristic ideas at <i>Radical Curiosity</i>. </p> <a href='/museum/ticket.html' data-name='Radical Curiosity: In the Orbit of Buckminster Fuller' ><button class='btn btn-primary'>Buy tickets</button></a > </div> </div>";
  } else if (ifAudienceIn(hope_from_chaos)) {
    content =
      "<div class='dy-widget-container dy-notification'> <div class='dy-close-btn'>x</div> <div class='img-container' style='flex: 0 0 auto'> <img src='/content/dam/singapore/marinabaysands/master/main/images/DY-MVT-205-asm-cart-abandonment/asm-hope-from-chaos-167x167.jpg' alt='museum' /> </div> <div class='text-container'> <h6 style='color: #ac8c4c; font-weight: 700; margin: 0'>  Don't miss this exhibition! </h6> <p style='margin: 0'> You're missing out on evocative artworks about life in a global pandemic at <i>Hope from Chaos</i>. </p> <a href='/museum/ticket.html' data-name='Hope from Chaos: Pandemic Reflections' ><button class='btn btn-primary'>Buy tickets</button></a > </div> </div>";
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
