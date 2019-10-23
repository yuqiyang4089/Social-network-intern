function layout(){
$("#tabItem4").append(
  '<div class="outline-box" id="tab4-content">'+
  '<h6 style="padding:5px;margin-bottom:0px">By Prominence Index:</h6>'+
  '<div class="gap-line"></div>'+

  '<label class = "h1-l" style="margin:3px;margin-left:7px">Index:</label>'+
  '<select style = "margin-left:35px;width:150px! important" class="custom-select h2-sc" id = "layout_pro_index">'+
  '<option class = "opt-g-font" value="default" selected>Select</option>'+
  // '<option class = "opt-g-font" value="DeC" >Degree Centrality</option>'+
  '<option class = "opt-g-font" value="BetC" >Betweenness Centrality</option>'+
  '<option class = "opt-g-font" value="CloC" >Closeness Centrality</option>'+
  // '<option class = "opt-g-font" value="EigenveC" >Eigenvector Centrality</option>'+
  // '<option class = "opt-g-font" value="KatzC" >Katz Centrality</option>'+
  // '<option class = "opt-g-font" value="EigentrustC" >Eigentrust Centrality</option>'+

  '</select>'+

  '<label class = "h1-l" style="margin:3px;margin-left:7px">Type:</label>'+
  '<select style="margin-left:38px;width:150px! important" class="custom-select h2-sc" id = "layout_pro_type">'+
  '<option class = "opt-g-font" value="default" selected>Select</option>'+
  '<option class = "opt-g-font" value="0" >Radial</option>'+
  '<option class = "opt-g-font" value="1" >Node Size</option>'+
  '<option class = "opt-g-font" value="2" >Node Color</option>'+
  '</select>'+
  '<button style = "margin-left:100px! important;width:150px! important" id="lay_index_app" type="button" class="ui button h1-b">Apply</button>'+
  '<h6 style="padding:5px;margin-bottom:0px">By Force-Directed Mondel:</h6>'+
  '<div class="gap-line"></div>'+
  '<label class = "h1-l" style="margin:3px;margin-left:7px">Model:</label>'+
  '<select style = "width:150px! important" class="custom-select h2-sc" id = "layout_fd_model">'+
  '<option class = "opt-g-font" value="default" selected>Select</option>'+
  '<option class = "opt-g-font" value="FR" >Fruchterman Reingold</option>'+
  // '<option class = "opt-g-font" value="Ran" >Random</option>'+
  // '<option class = "opt-g-font" value="ARF" >ARF Spring-block</option>'+
  '</select>'+
  '<label class = "h1-l" style="margin:3px;margin-left:7px">Setting:</label>'+
  '<label class = "layout-para-font" style = "margin-left: 21px">Relative strength of repulsive forces:</label>'+
  '<div style = "margin-left: 14px" class="row">'+
    '<div style = "margin-left: 86px" ><div id="slider-simple-C"></div></div>'+
    '<div class=" layout-para-font"><p id="value-simple-C"></p></div>'+
  '</div>'+
  '<label class = "layout-para-font" style = "margin-left: 97px">Repulsive force exponent:</label>'+

  '<div style = "margin-left: 14px" class="row">'+
    '<div style = "margin-left: 86px" ><div id="slider-simple-P"></div></div>'+
    '<div class=" layout-para-font"><p id="value-simple-P"></p></div>'+
  '</div>'+

  '<button style = "margin-left:100px! important;width:150px! important" id="lay_fd_app" type="button" class="ui button h1-b">Apply</button>'+
  '</div>'
)

//=======================slider FOR C==================

  slider_layout['C'] = d3
    .sliderBottom()
    .min(0.1)
    .max(1)
    .width(120)
    .tickFormat(d3.format('.2f'))
    // .ticks(5)
    .default(0.2)
    .on('onchange', val => {
      d3.select('p#value-simple-C').text(d3.format('.2f')(val));
    });

  gRange_layout["C"] = d3
    .select('div#slider-simple-C')
    .append('svg')
    .attr('width', 150)
    .attr('height', 30)
    .append('g')
    .attr('transform', 'translate(10,10)');

  gRange_layout["C"].call(slider_layout["C"]);

  d3.select('p#value-simple-C').text(d3.format('.2f')(slider_layout["C"].value()));


  //=======================slider FOR P==================

    slider_layout['P'] = d3
      .sliderBottom()
      .min(0.1)
      .max(5)
      .width(120)
      .tickFormat(d3.format('.2f'))
      // .ticks(5)
      .default(2)
      .on('onchange', val => {
        d3.select('p#value-simple-P').text(d3.format('.2f')(val));
      });

    gRange_layout["P"] = d3
      .select('div#slider-simple-P')
      .append('svg')
      .attr('width', 150)
      .attr('height', 30)
      .append('g')
      .attr('transform', 'translate(10,10)');

    gRange_layout["P"].call(slider_layout["P"]);

    d3.select('p#value-simple-P').text(d3.format('.2f')(slider_layout["P"].value()));





$('#lay_fd_app').click(function(){
  let selected = $('#layout_fd_model').val();
   change_layout([selected,2]);
})

$('#lay_index_app').click(function(){
  let ind = $('#layout_pro_index').val();
  let type = $('#layout_pro_type').val();
  let pos = $('#layout_fd_model').val();
  let selected =[ind,type,pos]
  // console.log(selected)
  change_layout([ind,1,type]);

})

//==========infor=====



//=========extra event =============
$("#tab4-content").attr("style","display:none;");

}
