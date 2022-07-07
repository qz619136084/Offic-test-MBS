$(function () {
  DYO.waitForElement(
    ".filter-result a.textlink",
    function () {
      $(".content_box").each(function () {
        var container = $(this);
        var text_link = container.next("p").find("a.textlink");
        var ticket_admission = container.find("p.ticket-requirement:has(a)");
        if (ticket_admission.length) {
          text_link.after(
            "<a href='/content/singapore/marinabaysands/en/main/index/museum/ticket.html' class='btn btn-primary' target='_blank' data-type='btn-primary' data-url='/content/singapore/marinabaysands/en/main/index/museum/ticket.html' style=''>Buy Tickets</a>"
          );
        }
      });
    },
    4,
    100
  );
});
