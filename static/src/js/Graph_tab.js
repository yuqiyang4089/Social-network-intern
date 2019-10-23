function statisc(){
$("#tabItem3").append(
  '<div class="outline-box" id="tab3-content">'+
  '<h6 style="padding:5px;margin-bottom:0px">Statistics Info:</h6>'+
  '<div class="gap-line"></div>'+
  '<h5 style="padding:8px;margin-bottom:0px">Network:</h5>'+
  '<label class = "h1-l sta_label">Nodes:</label><label class = "h1-l" id = "n_count">-</label>'+
  '<label class = "h1-l sta_label">Edges:</label><label class = "h1-l" id = "e_count">-</label>'+
  // '<label class = "h1-l sta_label">Density:</label><label class = "h1-l" id = "g_density">-</label>'+
  '<h5 style="padding:8px;margin-bottom:0px">Clicked Node:</h5>'+
  '<label class = "h1-l sta_label">Name(id):</label><label class = "h1-l" id = "n_name">-</label>'+
  '<label class = "h1-l sta_label">In-degree:</label><label class = "h1-l" id = "n_in">-</label>'+
  '<label class = "h1-l sta_label">out-degree:</label><label class = "h1-l" id = "n_out">-</label>'+
  '<h5 style="padding:8px;margin-bottom:0px">Clicked Edge:</h5>'+
  '<label class = "h1-l sta_label">Name(id):</label><label class = "h1-l" id = "e_name">-</label>'+
  '<label class = "h1-l sta_label">weight:</label><label class = "h1-l" id = "e_weight">-</label>'+
  '</div>'
)

//==========infor=====



// =========extra event =============
$("#tab3-content").attr("style","display:none;");

}
// $('#directed').change(function(){
//   if ($(this).is(':checked')){
//     d3.select("." +currentID+"d_link").attr("marker-end","url(#arrow"+currentID+")");
//     track_status[currentID]['tabItem3']['dire']=true;
//   }else{
//     d3.select("." +currentID+"d_link").attr("marker-end",null);
//     track_status[currentID]['tabItem3']['dire']=false;
//   }
//
// })
//
// function reshow_dire(currentID){
//
//   let status=track_status[currentID]['tabItem3']['dire']
//   $("#directed").prop("checked",status)
// }
