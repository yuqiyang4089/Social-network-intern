function draw_tab1_head4(){



  $('#c_tab1_d4').append(
    '<div id = "c_tab1_head4">'+
    '<h6 style="padding:10px;margin-bottom:0px">Select property shown on label:</h6>'+
    '<select name="node_label" multiple="" class="ui fluid dropdown" id = "n_mul_label">'+
            '<optgroup class ="con_property_la opt-g-font" label="Numerical Property">'+
            '</optgroup>'+
            '<optgroup class ="cat_property_la opt-g-font" label="Categorical Property">'+
            '</optgroup>'+
    '<select>'+
    '<div style = "padding:10px;">'+
      '<h6 style="padding:2px;margin-bottom:0px;">Click node to see Label:</h6>'+
      '<div style = "margin-left:px">'+
       '<table class = "tooltip_click_display" id = "n_label_display">'+

       '</table>'+
      '</div>'+
    '</div>'+
    '</div>'
  )
  let htm;
  for(let j in fil_v['con']){
    htm+='<option value='+j+'>'+j+'</option>'
  }
  $('.con_property_la').append(htm);
  // ==========
  let htm_cat;
  for(let j in fil_v['cat']){
    htm_cat+='<option value='+j+'>'+j+'</option>'
  }
  $('.cat_property_la').append(htm_cat);


  $('#n_mul_label').change(function(){
       select_label_n = $(this).val();
  });

  // ============extra-event==========
  $('#c_tab1_head4').attr("style","display:none;")
}
