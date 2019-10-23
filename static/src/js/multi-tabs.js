function newTab() {
    composeCount = composeCount + 1; //increment compose count
    let count = composeCount;
    currentID = "tab" + count; //this is id on tab content div where the
    track_status[currentID]={'mix':{'v_nu':new Object,'e_nu': new Object},'tabItem1':{"filter":new Object(),"head1": new Object()},'tabItem2':{"filter":new Object()},'tabItem3':{"dire":false}};
    $('.multi-link').removeClass("active show")
    $('.multi-pane').removeClass("active show")

    $('#new-tab').before(
        '<li class="nav-item multi-item" id="litab'+ count + '">'+
            '<a class="nav-link multi-link active show" data-toggle="tab" id="atab' + count +
            '" href="#' + currentID + '">'+
                '<button value="' + count + '" class="close" >×</button>Tab ' + count + '</a></li>');
    $('#multi-tabs-content').append('<div class="tab-pane multi-pane active show" id="' + currentID + '"> '+
    '<div class="tab-seprate pc-active" id="'+currentID+'_p"></div>'+
    '<div class="tab-seprate" id="'+currentID+'_c"></div>'+
    '</div>');
    $("input[type=checkbox]").prop("checked",true);
}

$('#new-tab').on("click", function (e) {
  if($("#Dataselect").val()!="0"){
    newTab();
    drawOnetab();
    hide_d_tab();
  }
})

$(document).on('click', '.multi-link', function(){

    currentID = $(this)[0].id.substring(1);
    if ($("#"+currentID+"_c").hasClass("pc-active")){
      display_d_tab();

      multi_reshow(currentID);
      // ============set curent==========
      tar_curr(currentID);
    }else{
      hide_d_tab();
    }
})

$(document).on('click', '.close', function(){
     let id = parseInt($(this).val());
     delete track_status["tab"+id];
     let index = $('#litab'+id).index(".multi-item");
     if($('#atab'+id).hasClass("active")) {
         $('#litab'+id).remove();
         $('#tab'+id).remove();
         var numOfTab = $('.multi-link').length;
         if(index == numOfTab) {
             $('.multi-link').last().addClass('active show');
             $('.multi-pane').last().addClass('active show');
         } else {
             $('.multi-link').eq(index).addClass('active show');
             $('.multi-pane').eq(index).addClass('active show');
         }
     } else {
         $('#litab'+id).remove();
         $('#tab'+id).remove();
     }
});
