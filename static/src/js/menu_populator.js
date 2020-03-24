var menuConfig;

function populate_menu() {
  $.get("/menu", function (data) {
    menuConfig = data;
    console.log(menuConfig);
  })
}