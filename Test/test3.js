f_getSessionStorage().upgradeRooms[0][0].discountedAveragePrice.filter(
  (item) => {
    return f_getSessionStorage().currency == item.currencyCode;
  }
)[0].price;
