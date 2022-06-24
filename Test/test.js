$("#room_info .edit_txt").click(() => {
  DYO.waitForElementAsync("#s_btn_view_rooms").then(() => {
    $("#s_btn_view_rooms").click(() => {
      console.log("click");
    });
  });
});
