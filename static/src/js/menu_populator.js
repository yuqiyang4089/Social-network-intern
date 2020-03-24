var menuConfig;

function populate_menu() {
  $.get("/menu", function (data) {
    menuConfig = $.parseJSON(data);
    console.log(menuConfig);
  })
}