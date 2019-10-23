function draw_tab2_head4(edge_curr,e_label){

  // $(document).ready( function() {
  //   $('.ui.dropdown')
  //     .dropdown({
  //       allowAdditions: true
  //     });
  //

  //
  //   });

  $('#c_tab2_d4').append(
    '<div id = "c_tab2_head4">'+
    '<h6 style="padding:10px;margin-bottom:0px">Select property shown on label:</h6>'+
    '<select name="edge_label" multiple="" class="ui fluid dropdown" id = "e_mul_label">'+
            '<optgroup class ="e_con_property_la opt-g-font" label="Numerical Property">'+
            '</optgroup>'+
            '<optgroup class ="e_cat_property_la opt-g-font" label="Categorical Property">'+
            '</optgroup>'+
    '<select>'+
    '<div style = "padding:10px;">'+
      '<h6 style="padding:2px;margin-bottom:0px;">Click Edge to see Label:</h6>'+
      '<div style = "margin-left:px">'+
       '<table class = "tooltip_click_display" id = "e_label_display">'+
       '</table>'+
      '</div>'+
    '</div>'+
    '</div>'
  )
  let htm;
  for(let j in fil_e['con']){
    htm+='<option value='+j+'>'+j+'</option>'
  }
  $('.e_con_property_la').append(htm);
  // ==========
  let htm_cat;
  for(let j in fil_e['cat']){
    htm_cat+='<option value='+j+'>'+j+'</option>'
  }
  $('.e_cat_property_la').append(htm_cat);

  $('#e_mul_label').change(function(){
       select_label_e = $(this).val();
  });
//==========extra-vent=======
$('#c_tab2_head4').attr("style","display:none;")

}
