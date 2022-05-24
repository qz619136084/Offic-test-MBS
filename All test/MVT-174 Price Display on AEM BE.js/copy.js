var priceText = $(this).text();
var priceStartFrom = priceText.match(/\d/).index;
var priceExcludeTax = priceText.substring(priceStartFrom);
var reg = new RegExp(priceExcludeTax, "gim");
var taxUnit = priceText.slice(0, priceText.match(/\d/).index);
var priceIncludeTax = 0;
if (/Rp/.test(taxUnit)) {
  priceIncludeTax = (priceExcludeTax.replace(/\./g, "") * 1.177).toFixed(0);
  priceIncludeTax = priceText.replace(reg, dotSeparateNumber(priceIncludeTax));
} else {
  priceIncludeTax = (priceExcludeTax.replace(/,/g, "") * 1.177).toFixed(2);
  priceIncludeTax = priceText.replace(
    reg,
    commaSeparateNumber(priceIncludeTax)
  );
}
$(this).text(priceIncludeTax);
