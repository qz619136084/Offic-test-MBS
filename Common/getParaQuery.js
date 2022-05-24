function getParaQuery(para) {
  var paraString = window.location.search.substring(1);
  var paraArr = paraString.split("&");
  for (i = 0; i < paraArr.length; i++) {
    var name = paraArr[i].split("=")[0];
    var value = paraArr[i].split("=")[1];
    if (para == name) {
      return value;
    }
  }
}
