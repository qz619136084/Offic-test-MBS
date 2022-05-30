$(function () {
  $("body").addClass("dy-layout");
  var url = window.location.href;
  if (url.indexOf("deals/rooms.html") > -1) {
    //Icon info;
    var filter_data = [
      {
        name: "Stay Longer, Save More",
        filter: [
          "Free cancellation & pay later*",
          "Free room upgrade",
          "Free credit",
          "Early check-in",
          "Free parking",
        ],
      },
      {
        name: "Sands Staycation",
        filter: [
          "Free cancellation & pay later*",
          "No minimum stay required",
          "Free room upgrade",
          "Free credit",
          "Early check-in",
          "Free parking",
        ],
      },
      {
        name: "Workation Package",
        filter: [
          "Free cancellation & pay later*",
          "No minimum stay required",
          "Free credit",
          "Early check-in",
          "Free parking",
        ],
      },
      {
        name: "Luxe Suite Savings",
        filter: [
          "Free cancellation & pay later*",
          "No minimum stay required",
          "Free breakfast**",
        ],
      },
      {
        name: "Book Direct and Save S$20",
        filter: [
          "Free cancellation & pay later*",
          "No minimum stay required",
          "Free breakfast**",
        ],
      },
      {
        name: "Flexible Rate",
        filter: [
          "Free cancellation & pay later*",
          "No minimum stay required",
          "Free breakfast**",
        ],
      },
      {
        name: "Festive Staycation",
        filter: [
          "Free cancellation & pay later*",
          "No minimum stay required",
          "Free room upgrade",
          "Free credit",
          "Early check-in",
          "Free parking",
        ],
      },
      {
        name: "Joyous Family Staycation",
        filter: [
          "Free cancellation & pay later*",
          "Free room upgrade",
          "Free credit",
          "Early check-in",
          "Free parking",
        ],
      },
      {
        name: "By-invite-only Staycation Offer",
        filter: [
          "Free cancellation & pay later*",
          "Free room upgrade",
          "Free credit",
          "Early check-in",
          "Free parking",
        ],
      },
      {
        name: "Staycation Escape",
        filter: [
          "Free cancellation & pay later*",
          "Free room upgrade",
          "Free credit",
          "Early check-in",
          "Free parking",
          "No minimum stay required",
        ],
      },
      {
        name: "Stay Longer by the Bay",
        filter: [
          "Free cancellation & pay later*",
          "Free room upgrade",
          "Free credit",
          "Early check-in",
          "Free parking",
        ],
      },
      {
        name: "STAR WARS™ Identities x MBS",
        filter: [
          "Free room upgrade",
          "Free credit",
          "Early check-in",
          "Free parking",
        ],
      },
      {
        name: "Marina Bay Sands Reimagine",
        filter: ["Free cancellation & pay later*", "Free credit"],
      },
      {
        name: "Marina Bay Sands Indulgence",
        filter: [
          "Free cancellation & pay later*",
          "Free credit",
          "Free breakfast**",
        ],
      },
      {
        name: "Sandsational Staycation",
        filter: [
          "Free cancellation & pay later*",
          "Free room upgrade",
          "Free credit",
          "Early check-in",
          "Free parking",
          "Free breakfast**",
        ],
      },
      {
        name: "Show and Stay - La Clique",
        filter: ["No minimum stay required"],
      },
      {
        name: "Stay Longer and Save",
        filter: ["Free cancellation & pay later*"],
      },
      {
        name: "Sands Wellness Retreat",
        filter: ["Free cancellation & pay later*", "Free credit"],
      },
    ];
    var icon_data = [
      {
        name: "Free cancellation & pay later*",
        srl: "/content/dam/revamp/offers/vwoicontest/Free%20Cancellation%20And%20Pay%20Later.svg",
      },
      {
        name: "No minimum stay required",
        srl: "/content/dam/revamp/offers/vwoicontest/No%20minimum%20night%20stay%20required.svg",
      },
      {
        name: "Free room upgrade",
        srl: "/content/dam/revamp/offers/vwoicontest/Free%20Room%20Upgrade.svg",
      },
      {
        name: "Free credit",
        srl: "/content/dam/revamp/offers/vwoicontest/Free%20Credit.svg",
      },
      {
        name: "Early check-in",
        srl: "/content/dam/revamp/offers/vwoicontest/Early%20CheckIn.svg",
      },
      {
        name: "Free parking",
        srl: "/content/dam/revamp/offers/vwoicontest/Free%20Parking.svg",
      },
      {
        name: "Free breakfast**",
        srl: "/content/dam/revamp/offers/vwoicontest/Free%20Breakfast.svg",
      },
    ];
    //Relative info;
    var info = JSON.parse($("script#list_content").html());
    var srlText = $(
      ".listing-sidebar-block.section:has(.card[href='/sands-rewards-lifestyle.html']) .card-title"
    )
      .text()
      .trim();
    srlText = srlText.substring(0, srlText.indexOf("Sands Rewards"));
    var srlContent =
      "<strong >" +
      srlText +
      "<a href='/sands-rewards-lifestyle.html'>Sands Rewards</a> membership.&nbsp;</strong >";
    //Sidebar info
    var sidebarContent = "";
    for (let i = 0; i < 2; i++) {
      $(".listing-sidebar-block.section:eq(" + i + ")")
        .find(".mt-5")
        .removeClass("mt-5");
      $(".listing-sidebar-block.section:eq(" + i + ")")
        .find(".card-image")
        .remove();
      $(".listing-sidebar-block.section:eq(" + i + ")").addClass("col-12");
      sidebarContent += $(".listing-sidebar-block.section:eq(" + i + ")").prop(
        "outerHTML"
      );
    }
    //Get countryCode;
    var countryCode = null;
    $.ajax({
      type: "GET",
      url: "/services/country-api",
      data: "data",
      success: function (response) {
        countryCode = response.countryCode;
        $("body").addClass("ajaxCompleted");
      },
    });
    //Operation after AJAX;
    var waitAjax = setInterval(function () {
      if ($("body.ajaxCompleted").length) {
        //Change layout;
        $(".listing-content").removeClass("bg-white");
        $(".listing-content-item").addClass("row").removeClass("col-12");
        $(".tab-pane>.tab-pane-inner>.row:last .col-12.col-lg-9")
          .removeClass("col-lg-9")
          .addClass("col-lg-12");
        $(".tab-pane>.tab-pane-inner>.row:last .col-12.col-lg-3").remove();
        $(".listing-sidebar.listing-sidebar-top").remove();
        //Adding sidebar section to bottom;
        $(".tab-pane-inner").append(
          "<div class='row dy-sidebar col-12 col-lg-12'>" +
            sidebarContent +
            "</div>"
        );
        $(".dy-sidebar .listing-sidebar-block.section:eq(0)").addClass(
          "col-lg-8"
        );
        $(".dy-sidebar .listing-sidebar-block.section:eq(1)").addClass(
          "col-lg-4"
        );
        //Update sidebar section(bottom)
        $(".listing-sidebar-block.section").each(function () {
          $(this).find(".mt-5").removeClass("mt-5");
          $(this).find(".card-image").remove();
          $(this).addClass("col-12");
          if ($(this).find(".card-link").length) {
            var href = $(this).find(".card").attr("href");
            var linkName = $(this).find(".card-link").text().trim();
            var linkHtml = $(this).find(".card-link").prop("outerHTML");
            var linkWrap = $(this)
              .find(".card")
              .html()
              .replace(
                linkHtml,
                "<a href='" +
                  href +
                  "'><p class='card-link card'>" +
                  linkName +
                  "</p></a>"
              );
            $(this).find(".card").remove();
            $(this).append(linkWrap);
          }
        });
        //Adding SRL component;
        $(".row:has(.listing-tools)").before(
          "<div class='row'> <div class='col-lg-9 mb-5'> <div class='notice-box'> <p>" +
            srlContent +
            "</p> </div> </div> </div>"
        );
        //Change width of SRL-box & text above
        $(".tab-pane-inner .col-lg-9")
          .removeClass("col-lg-9")
          .addClass("col-lg-7");
        adjustLayout();
        $(".dropdown-menu-filter .checkbox input").click(function () {
          adjustLayout();
        });
        $(".dropdown-menu-filter .filter-clear").click(function () {
          adjustLayout();
        });
        clearInterval(waitAjax);
      }
    }, 100);

    function update(titleArr) {
      //Clear the origin list;
      $(".listing-content-item").html("");
      //Reset the update list;
      $(".dy-new-layout").remove();
      for (let i = 0; i < info.length; i++) {
        if (
          (info[i].allowedCountries == null ||
            $.inArray(countryCode, info[i].allowedCountries) > -1) &&
          $.inArray(info[i].title, titleArr) > -1
        ) {
          var title = info[i].title;
          var label =
            info[i].promotion != null
              ? "<div class='card-label'> " + info[i].promotion + " </div>"
              : "";
          var targetUrl = info[i].mainLink;
          var imageSrc = info[i].image;
          var main_content = info[i].description;
          var price =
            info[i].price != null
              ? "<p class='card-text'> From <br /> <span class='big'><strong>" +
                info[i].price +
                "</strong></span> <small>/night</small> <br />" +
                (info[i].taxDescription != null
                  ? "<small>" + info[i].taxDescription + "</small>"
                  : "") +
                " </p>"
              : "";
          $(".listing-content-item").append(
            "<div class='dy-new-layout col-md-6 col-lg-4'> <div class='card card-box h-100'>" +
              label +
              " <div class='card-image'> <img class='card-img-top ls-is-cached lazyloaded' width='600' height='450' src='" +
              imageSrc +
              "' /> </div> <div class='card-body'> <h5 class='card-title'>" +
              title +
              "</h5><p>" +
              main_content +
              "</p> </div> <div class='card-footer' style='min-height: 131.562px'>" +
              price +
              "<a href='" +
              targetUrl +
              "'>View details</a></div> </div> </div>"
          );
        }
      }
      //Deal with link clicking
      $(".dy-new-layout").click(function () {
        var link = $(this).find("a:last").attr("href");
        window.open(link);
      });
      $(".dy-new-layout a").click(function (e) {
        e.stopPropagation();
      });
      //Add perks icons
      addIcon();
    }
    function adjustLayout() {
      //Sort out country and tag infomation into an array;
      var titleArr = [];
      var tagArr = [];
      for (let i = 0; i < info.length; i++) {
        if (
          info[i].allowedCountries == null ||
          $.inArray(countryCode, info[i].allowedCountries) > -1
        ) {
          tagArr.push(
            info[i].tags.map(function (n, i) {
              return n.value;
            })
          );
          titleArr.push(info[i].title);
        }
      }
      //Wait the correct offer loading, then do the operation -- (filter on/filter off);
      var checkedBoxNo = $(".dropdown-menu-filter input:checked").length;
      if (checkedBoxNo) {
        var checkedArr = [];
        var deleteIndexArr = [];
        var deleteTitleArr = [];
        $(".dropdown-menu-filter label:has(input:checked)").each(function () {
          checkedArr.push($(this).text().trim());
        });
        $.each(tagArr, function (i, n) {
          var ifFit = 1;
          var arr = n;
          $.each(checkedArr, function (i, n) {
            if ($.inArray(n, arr) == -1) {
              ifFit = 0;
            }
          });
          if (!ifFit) {
            deleteIndexArr.push(i);
            deleteTitleArr.push(titleArr[i]);
          }
        });
        $.each(deleteTitleArr, function (i, n) {
          titleArr.splice($.inArray(n, titleArr), 1);
        });
      }
      update(titleArr);
    }
    function addIcon() {
      //Tell if "highlight-perk" test running, if so, do not add icons;
      if (!$("body.highlight-perk").length) {
        $(".dy-new-layout").each(function () {
          var icon = $(this).find(".vwo-icon-part");
          if (!icon.length) {
            var title = $.trim($(this).find(".card-title").text());
            var srl_list = [];
            var filter_list = [];
            var filter_items = filter_data;
            for (var x = 0; x < filter_items.length; x++) {
              var offer_name = filter_items[x].name;
              var filter_name = filter_items[x].filter;
              if (offer_name == title) {
                var icon_items = icon_data;
                for (var y = 0; y < icon_items.length; y++) {
                  var icon_name = icon_items[y].name;
                  var srl_detail = icon_items[y].srl;
                  var ifIn = $.inArray(icon_name, filter_name);
                  if (ifIn > -1) {
                    filter_list.push(icon_name);
                    srl_list.push(srl_detail);
                  }
                }
              }
            }
            var ele = $(this).find(".card-footer .card-text");
            ele.after("<p class='vwo-icon-part'></p>");
            var ele_1 = $(this).find(".vwo-icon-part");
            for (var i = 0; i < filter_list.length; i++) {
              var filterNameToUse = filter_list[i];
              var srlToUse = srl_list[i];
              ele_1.append(
                "<div class='icon-content'> <img src='" +
                  srlToUse +
                  "' alt='" +
                  filterNameToUse +
                  "' /> <div class='tip fade'> <div class='arrow'></div> <div class='tip-content'>" +
                  filterNameToUse +
                  "</div> </div> </div>"
              );
            }
            $(".vwo-icon-part .icon-content img").mouseenter(function () {
              var tip = $(this).next(".tip");
              tip.show();
              setTimeout(function () {
                tip.addClass("show");
              }, 10);
            });
            $(".vwo-icon-part .icon-content img").mouseleave(function () {
              var tip = $(this).next(".tip");
              tip.removeClass("show");
              setTimeout(function () {
                tip.hide();
              }, 150);
            });
          }
        });
      }
      if (!$(".vwo-tip").length) {
        $(".tab-pane-inner .row:eq(5)").append(
          "<div class='vwo-tip' style='padding: 0 15px'> <p>*Not applicable during blackout dates</p> <p>**Only available for specific hotel deal and room type</p> </div>"
        );
      }
    }
  } else {
    var museum_member = 0;
    var shorter_height = 0;
    if (
      url.indexOf("deals/museum.html") > -1 ||
      url.indexOf("deals/members-only.html") > -1
    ) {
      museum_member = 1;
    } else {
      if (url.indexOf("deals/restaurants.html") == -1) {
        shorter_height = 1;
      }
    }
    //Relative info;
    var info = JSON.parse($("script#list_content").html());
    var srlText = $(
      ".listing-sidebar-block.section:has(.card[href='/sands-rewards-lifestyle.html']) .card-title"
    )
      .text()
      .trim();
    srlText = srlText.substring(0, srlText.indexOf("Sands Rewards"));
    var srlContent =
      "<strong >" +
      srlText +
      "<a href='/sands-rewards-lifestyle.html'>Sands Rewards</a> membership.&nbsp;</strong >";
    //Get countryCode;
    var countryCode = null;
    $.ajax({
      type: "GET",
      url: "/services/country-api",
      data: "data",
      success: function (response) {
        countryCode = response.countryCode;
        $("body").addClass("ajaxCompleted");
      },
    });
    //Operation after AJAX;
    var waitAjax = setInterval(function () {
      if ($("body.ajaxCompleted").length) {
        //Change layout;
        $(".listing-content").removeClass("bg-white");
        $(".listing-content-item").addClass("row").removeClass("col-12");
        $(".tab-pane>.tab-pane-inner>.row:last .col-12.col-lg-9")
          .removeClass("col-lg-9")
          .addClass("col-lg-12");
        $(".tab-pane>.tab-pane-inner>.row:last .col-12.col-lg-3").remove();
        $(".listing-sidebar.listing-sidebar-top").remove();
        //Adding SRL component;
        $(".tab-pane-inner .row:first").after(
          "<div class='row'> <div class='col-lg-9 mb-5'> <div class='notice-box'> <p>" +
            srlContent +
            "</p> </div> </div> </div>"
        );
        //Change width of SRL-box & text above
        $(".tab-pane-inner .col-lg-9")
          .removeClass("col-lg-9")
          .addClass("col-lg-7");
        adjustLayout();
        $(".dropdown-menu-filter .checkbox input").click(function () {
          adjustLayout();
        });
        $(".dropdown-menu-filter .filter-clear").click(function () {
          adjustLayout();
        });
        clearInterval(waitAjax);
      }
    }, 100);

    function update(titleArr) {
      //Clear the origin list;
      $(".listing-content-item").html("");
      //Reset the update list;
      $(".dy-new-layout").remove();
      for (let i = 0; i < info.length; i++) {
        if (
          (info[i].allowedCountries == null ||
            $.inArray(countryCode, info[i].allowedCountries) > -1) &&
          $.inArray(info[i].title, titleArr) > -1
        ) {
          var title = info[i].title;
          var imageSrc = info[i].image;
          var main_content = info[i].description;
          var href = info[i].mainLink;
          var index_of_p_with_a = null;
          var main_description = null;
          var sub_description = null;
          var min_height = null;
          //For museum page & members_only page;
          if (museum_member) {
            if (main_content.indexOf("<a") > -1) {
              index_of_p_with_a = main_content.indexOf("<a") - 3;
              main_description = main_content.substring(0, index_of_p_with_a);
              if (
                (main_content.indexOf(href) > -1 ||
                  main_content.indexOf("View") > -1) &&
                main_content.indexOf("terms &amp; conditions") == -1 &&
                main_content.indexOf("terms &amp; conditions") == -1
              ) {
                sub_description = main_content.substring(index_of_p_with_a);
              } else {
                sub_description =
                  main_content.substring(index_of_p_with_a) +
                  "<a href='" +
                  href +
                  "'>View details</a>";
              }
            } else {
              main_description = main_content;
              sub_description = "<a href='" + href + "'>View details</a>";
            }
          } else {
            if (main_content.indexOf("<a") > -1) {
              index_of_p_with_a = main_content.indexOf("<a") - 3;
              main_description = main_content.substring(0, index_of_p_with_a);
              sub_description = main_content.substring(index_of_p_with_a);
            } else {
              main_description = main_content;
              sub_description = "<a href='" + href + "'>View details</a>";
            }
          }
          if (shorter_height) {
            min_height = "53px";
          } else {
            min_height = "110px";
          }
          $(".listing-content-item").append(
            "<div class='dy-new-layout col-md-6 col-lg-4'> <div class='card card-box h-100'><div class='card-image'> <img class='card-img-top ls-is-cached lazyloaded' width='600' height='450' src='" +
              imageSrc +
              "' /> </div> <div class='card-body'> <h5 class='card-title'>" +
              title +
              "</h5>" +
              main_description +
              "</div> <div class='card-footer' style='min-height: " +
              min_height +
              "'>" +
              sub_description +
              "</div></div>  </div>"
          );
        }
      }
      //Deal with link clicking
      $(".dy-new-layout").click(function () {
        var link = $(this).find("a:last").attr("href");
        window.open(link);
      });
      $(".dy-new-layout a").click(function (e) {
        e.stopPropagation();
      });

      //Special operation: 1. iQiyi;
      $(
        ".card:contains(Redeem your Ad-Free VIP Membership Access on iQiyi) .card-footer a:contains(View details)"
      ).remove();
    }
    function adjustLayout() {
      //Sort out country and tag infomation into an array;
      var titleArr = [];
      var tagArr = [];
      for (let i = 0; i < info.length; i++) {
        if (
          info[i].allowedCountries == null ||
          $.inArray(countryCode, info[i].allowedCountries) > -1
        ) {
          tagArr.push(
            info[i].tags.map(function (n, i) {
              return n.value;
            })
          );
          titleArr.push(info[i].title);
        }
      }
      //Wait the correct offer loading, then do the operation -- (filter on/filter off);
      var checkedBoxNo = $(".dropdown-menu-filter input:checked").length;
      if (checkedBoxNo) {
        var checkedArr = [];
        var deleteIndexArr = [];
        var deleteTitleArr = [];
        $(".dropdown-menu-filter label:has(input:checked)").each(function () {
          checkedArr.push($(this).text().trim());
        });
        $.each(tagArr, function (i, n) {
          var ifFit = 1;
          var arr = n;
          $.each(checkedArr, function (i, n) {
            if ($.inArray(n, arr) == -1) {
              ifFit = 0;
            }
          });
          if (!ifFit) {
            deleteIndexArr.push(i);
            deleteTitleArr.push(titleArr[i]);
          }
        });
        $.each(deleteTitleArr, function (i, n) {
          titleArr.splice($.inArray(n, titleArr), 1);
        });
      }
      update(titleArr);
    }
  }
});
