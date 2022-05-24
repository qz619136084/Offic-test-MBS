var bindCurrencyClick1027 = setInterval(function () {
    if (
      $(".currency_types .dropdown_menu_item").length &&
      $("#loading").css("display") == "none"
    ) {
      $(".currency_types .dropdown_menu_item").click(
        function () {
          $(".tax-tip").prev("br").remove();
          $(".tax-tip").remove();
          $(".tileVerbiage").closest("p").remove();
          addTaxTip();
        }
      );
      clearInterval(bindCurrencyClick1027);
    }
  }, 50);