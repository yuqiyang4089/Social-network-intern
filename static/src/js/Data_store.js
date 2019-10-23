// $('#L_data').attr('method','post').attr("action","/Select_Local");
 $(".navbar-nav").addClass("form-inline");
 $(".navbar-nav").append("<div class='form-group'><label style='color:gray;margin-right:7px;font-size:12px'>Data:</label><select class='custom-select' style='height:25px;width:100px;font-size:9px' id='Dataselect'><option value=0>Select</option><option value=1>FB-Data</option><option value=2>Bully-Data</option></select></div>");

$('#Dataselect').change(function(){

  if ($("#Dataselect").val()==1){
    $('.close').click();
    change_data="fb";
    $('#new-tab').click();
    get_data();
    $("#Dataselect").css("background","#fff");
    $('#Dataselect').attr("disabled","disabled");
}
  if ($("#Dataselect").val()==2){
    $('.close').click();
    change_data="bully";
    get_data();
    $('#new-tab').click();
    $("#Dataselect").css("background","#fff");
    $('#Dataselect').attr("disabled","disabled");
  }

  statisc();
  layout();

});
