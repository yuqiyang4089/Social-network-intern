
function cleanForDetail() {
    // var oldID = currentID.slice();
    $("#"+currentID+"_p").removeClass("pc-active");
    $("#"+currentID+"_c").addClass("pc-active");
    detailData[currentID] = {};
    // Object.assign(detailData[currentID], selData[oldID]["items"])
    Object.assign(detailData[currentID], selData[currentID]["items"])
    $('#' + currentID+'_c')
    .append('<button type="button" class="btn btn-primary back" id="back' + currentID + '">Back To Overview</button>'+
    '<div class = "tooltip" id = "n_tooltip">'+
    '</div>'+
    '<div class = "tooltip" id = "e_tooltip">'+
    '</div>'
  );
    // $('#' + currentID)
    // .append('<div class="alert alert-info alert-dismissible" style="margin:20px;">' +
    //     '<button class="close" type="button" data-dismiss="alert">×</button>' +
    //     '<strong>Zoom In!</strong> To see more details of the network.' +
    // '</div>')

    drawDetail();



}

function submit(){
    cleanForDetail();
    default_full_filter_n();
    default_full_filter_e();
    display_d_tab();

}

$(document).on('click', '.back', function(){
    $("#"+currentID+"_c").children().remove();
    $("#"+currentID+"_c").removeClass("pc-active");
    $("#"+currentID+"_p").addClass("pc-active");
    hide_d_tab();
})
