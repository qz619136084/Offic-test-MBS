
    //Reset body class;
    $(".dy-bath-filter .dy-title+ul li").each(function () {
        var title = $(this).attr("id");
        $("body").removeClass(title);
      });
      $(".dy-bath-filter input:checked").each(function () {
        var id = $(this).closest("li").attr("id");
        var title = $(this).closest("li").text().trim();
        checkedArr.push(title);
        //Updated the checked option to class name;
        $("body").addClass(id);
      });