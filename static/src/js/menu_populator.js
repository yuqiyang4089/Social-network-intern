var menuConfig;
var levelStyle = {
  0: "",
  1: "",
  2: "",
  3: ""
}

function populate_menu() {
  $.get("/menu", function (data) {
    menuConfig = data;
    // console.log(menuConfig);

  })
}

// key: current label needs to be populated
// level: current label level
// config: json configration object
function recusive_parse(key, level, config) {

}