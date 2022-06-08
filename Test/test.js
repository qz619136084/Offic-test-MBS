
          //in single Room Card
          var packageTitle = _this
            .closest(".packageList_item")
            .find(".packageList_item_title")
            .text()
            .trim();
          var currency = f_getCurrencyInfo().code;
          var discountedAveragePriceByCurrency =
            curr_availableRateplans.offerList.filter((item) => {
              return item.name === packageTitle;
            })[0].rooms[0].discountedAveragePriceByCurrency;
          currencySymbol = f_getCurrencyInfo().symbol;
          if (discountedAveragePriceByCurrency.length) {
            //have discount
            priceWithoutTax = discountedAveragePriceByCurrency.filter(
              (item) => {
                return item.currencyCode === currency;
              }
            )[0].price;
            priceWithTax = toMoney(priceWithoutTax * 1.177, true);
            //set up for origin price;
            var originPriceTarget = _this
              .closest(".packageList_item_pricing")
              .find(".original_price");
            var originPriceWithoutTax = curr_availableRateplans.offerList
              .filter((item) => {
                return item.name === packageTitle;
              })[0]
              .rooms[0].averagePriceByCurrency.filter((item) => {
                return item.currencyCode === currency;
              })[0].price;
            var originPriceWithTax = toMoney(
              originPriceWithoutTax * 1.177,
              true
            );
            originPriceTarget.text(currencySymbol + originPriceWithTax);
          } else {
            //no discount
            priceWithoutTax = curr_availableRateplans.offerList
              .filter((item) => {
                return item.name === packageTitle;
              })[0]
              .rooms[0].averagePriceByCurrency.filter((item) => {
                return item.currencyCode === currency;
              })[0].price;
            priceWithTax = toMoney(priceWithoutTax * 1.177, true);
          }