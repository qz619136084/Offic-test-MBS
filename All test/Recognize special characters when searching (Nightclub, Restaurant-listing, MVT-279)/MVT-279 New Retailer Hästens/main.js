$(function () {
  var url = window.location.href;
  var content = null;
  if (url.indexOf("zh.") > -1) {
    content =
      "<div class='col-md-6 col-lg-3 listing-content-item ng-scope dy-listing-item' ng-repeat='shop in filteredShoppes = (shoppes | checkFilters:shopFilters:this | filter: search | limitTo: limit)'> <a class='card card-box h-100' ng-href='https://zh.marinabaysands.com/shopping/hastens.html' href='https://zh.marinabaysands.com/shopping/hastens.html'> <!-- ngIf: shop.promotion --> <div class='card-image'> <img ng-src='https://zh.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg' class='card-img-top lazyloaded' width='600' height='450' alt='Hästens' src='https://zh.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg'> </div> <div class='card-body'> <h5 class='card-title ng-binding'>Hästens</h5> </div> <div class='card-footer' style='min-height: 142.391px;'> <p class='card-text card-text-icon icon-location ng-binding'> B1-52, The Shoppes </p> <p class='card-text card-text-icon icon-operating-hr ng-binding'> 上午 11:00 至晚上 10:00 </p> <p class='card-text card-text-icon icon-carpark ng-binding'> 北区（绿色区域） </p> </div> </a> </div>";
  } else if (url.indexOf("hk.") > -1) {
    content =
      "<div class='col-md-6 col-lg-3 listing-content-item ng-scope dy-listing-item' ng-repeat='shop in filteredShoppes = (shoppes | checkFilters:shopFilters:this | filter: search | limitTo: limit)'> <a class='card card-box h-100' ng-href='https://hk.marinabaysands.com/shopping/hastens.html' href='https://hk.marinabaysands.com/shopping/hastens.html'> <!-- ngIf: shop.promotion --> <div class='card-image'> <img ng-src='https://hk.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg' class='card-img-top ls-is-cached lazyloaded' width='600' height='450' alt='Hästens' src='https://hk.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg'> </div> <div class='card-body'> <h5 class='card-title ng-binding'>Hästens</h5> </div> <div class='card-footer' style='min-height: 142.391px;'> <p class='card-text card-text-icon icon-location ng-binding'> B1-52, The Shoppes </p> <p class='card-text card-text-icon icon-operating-hr ng-binding'> 上午 11:00 至晚上 10:00 </p> <p class='card-text card-text-icon icon-carpark ng-binding'> 北區（綠色區域） </p> </div> </a> </div>";
  } else if (url.indexOf("jp.") > -1) {
    content =
      "<div class='col-md-6 col-lg-3 listing-content-item ng-scope dy-listing-item' ng-repeat='shop in filteredShoppes = (shoppes | checkFilters:shopFilters:this | filter: search | limitTo: limit)'> <a class='card card-box h-100' ng-href='https://jp.marinabaysands.com/shopping/hastens.html' href='https://jp.marinabaysands.com/shopping/hastens.html'> <!-- ngIf: shop.promotion --> <div class='card-image'> <img ng-src='https://jp.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg' class='card-img-top lazyload' width='600' height='450' alt='Hästens' src='https://jp.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg'> </div> <div class='card-body'> <h5 class='card-title ng-binding'>Hästens</h5> </div> <div class='card-footer' style='min-height: 137px;'> <p class='card-text card-text-icon icon-location ng-binding'> B1-52, The Shoppes </p> <p class='card-text card-text-icon icon-operating-hr ng-binding'> 午前11時～午後10時 </p> <p class='card-text card-text-icon icon-carpark ng-binding'> 北(グリーンゾーン) </p> </div> </a> </div>";
  } else if (url.indexOf("ko.") > -1) {
    content =
      "<div class='col-md-6 col-lg-3 listing-content-item ng-scope dy-listing-item' ng-repeat='shop in filteredShoppes = (shoppes | checkFilters:shopFilters:this | filter: search | limitTo: limit)'> <a class='card card-box h-100' ng-href='https://ko.marinabaysands.com/shopping/hastens.html' href='https://ko.marinabaysands.com/shopping/hastens.html'> <!-- ngIf: shop.promotion --> <div class='card-image'> <img ng-src='https://ko.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg' class='card-img-top lazyload' width='600' height='450' alt='Hästens' src='https://ko.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg'> </div> <div class='card-body'> <h5 class='card-title ng-binding'>Hästens</h5> </div> <div class='card-footer' style='min-height: 142.391px;'> <p class='card-text card-text-icon icon-location ng-binding'> B1-52, The Shoppes </p> <p class='card-text card-text-icon icon-operating-hr ng-binding'> 오전 11:00-오후 10:00 </p> <p class='card-text card-text-icon icon-carpark ng-binding'> 북쪽(그린 존) </p> </div> </a> </div>";
  } else if (url.indexOf("id.") > -1) {
    content =
      "<div class='col-md-6 col-lg-3 listing-content-item ng-scope dy-listing-item' ng-repeat='shop in filteredShoppes = (shoppes | checkFilters:shopFilters:this | filter: search | limitTo: limit)'> <a class='card card-box h-100' ng-href='https://id.marinabaysands.com/shopping/hastens.html' href='https://id.marinabaysands.com/shopping/hastens.html'> <!-- ngIf: shop.promotion --> <div class='card-image'> <img ng-src='https://id.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg' class='card-img-top lazyload' width='600' height='450' alt='Hästens' src='https://id.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg'> </div> <div class='card-body'> <h5 class='card-title ng-binding'>Hästens</h5> </div> <div class='card-footer' style='min-height: 131.562px;'> <p class='card-text card-text-icon icon-location ng-binding'> B1-52, The Shoppes </p> <p class='card-text card-text-icon icon-operating-hr ng-binding'> 11.00 - 22.00 </p> <p class='card-text card-text-icon icon-carpark ng-binding'> North (Green zone) </p> </div> </a> </div>";
  } else {
    content =
      "<div class='col-md-6 col-lg-3 listing-content-item ng-scope dy-listing-item' ng-repeat='shop in filteredShoppes = (shoppes | checkFilters:shopFilters:this | filter: search | limitTo: limit)' > <a class='card card-box h-100' ng-href='https://www.marinabaysands.com/shopping/hastens.html' href='https://www.marinabaysands.com/shopping/hastens.html' > <!-- ngIf: shop.promotion --> <div class='card-image'> <img ng-src='https://www.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg' class='card-img-top lazyloaded' width='600' height='450' alt='Hästens' src='https://www.marinabaysands.com/content/dam/revamp/shoppes/shoppes-details/hastens/hastens-Website-600x450-Hastens.jpg' /> </div> <div class='card-body'> <h5 class='card-title ng-binding'>Hästens</h5> </div> <div class='card-footer'> <p class='card-text card-text-icon icon-location ng-binding'> B1-52, The Shoppes </p> <p class='card-text card-text-icon icon-operating-hr ng-binding'> 11:00am - 10:00pm </p> <p class='card-text card-text-icon icon-carpark ng-binding'> North (Green zone) </p> </div> </a> </div>";
  }
  var waitCard = setInterval(function () {
    if ($(".listing-content .listing-content-item").length >= 8) {
      $(".listing-content .row").append(content);
      clearInterval(waitCard);
    }
  }, 100);
  $(".search-filters").bind("input propertychange", function () {
    var inputMsg = $.trim($(this).val().toLowerCase());
    var fitName = "hastens";
    if (fitName.indexOf(inputMsg) > -1 && inputMsg.indexOf("a") > -1) {
      $(".dy-listing-item").show();
      $(".listing-content-empty").addClass("dy-hide");
    } else {
      $(".dy-listing-item").hide();
      $(".listing-content-empty").removeClass("dy-hide");
    }
  });
});
