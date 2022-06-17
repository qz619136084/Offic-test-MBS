$(".upgrade_view").click(() => {
  $(document).ajaxComplete(() => {
    $(".upgradeBlock:eq(1)").trigger("click");
  });
});
