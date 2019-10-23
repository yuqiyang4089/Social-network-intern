function draw_tab2_head1(){
  $('#c_tab2_d1').append(
     '<div id ="c_tab2_head1">'+
        '<label class= "h1-l" ">Edge Width:</label>'+
         '<div class = "ui input">'+
          '<input value="0.2" id="ew-in" type="text" class="h1-ip" style="margin-left:50px"/>'+
         '</div>'+
            '<button id="ew-b" type="button" class="ui button h1-b">Apply</button>'+
// ===================
        '<label class= "h1-l" ">Edge Color:</label>'+
         '<div class = "ui input">'+
          '<input id="ec-in" class="jscolor h1-ip" value="000000" style="margin-left:53px">'+
          '</div>'+
            '<button id="ec-b" type="button" class="ui button h1-b">Apply</button>'+
// =========================
        '<label class= "h1-l" ">Edge Opacity:</label>'+
         '<div class = "ui input">'+
          '<input value="100" id="e-opa-in" type="text" class="h1-ip" style="margin-left:39px"/>'+
           '</div>'+
            '<button id="e-opa-b" type="button" class="ui button h1-b">Apply</button>'+
// ================
      '<div style = "padding-bottom:11px">'+
        '<label style = "float:left" class= "h1-l" ">Edge Shape:</label>'+
            '<div id="es-in" class="ui fluid selection dropdown h1-ip" style="padding:7px;padding-left:11px;margin-top:7px;font-size:12px;min-height:0px;height:24px;width:80px;float:left;margin-left:48px">'+
              '<input id ="edge_shape"  type="hidden" name="edge-shape">'+
              '<i class="dropdown icon"></i>'+
              '<div class="default text">Select</div>'+
              '<div class="menu">'+
                '<div class="item" data-value="fl">'+
                  '<img class="ui mini avatar image" src="/static/src/rcs/full-line.png">'+
                '</div>'+
                '<div class="item" data-value="dl">'+
                  '<img class="ui mini avatar image" src="/static/src/rcs/dash-line.png">'+
                '</div>'+
                '<div class="item" data-value="al">'+
                  '<img class="ui mini avatar image" src="/static/src/rcs/arrow-line.png">'+
                '</div>'+
                '<div class="item" data-value="adl">'+
                  '<img class="ui mini avatar image" src="/static/src/rcs/arrow-dash-line.png">'+
                '</div>'+
              '</div>'+
            '</div padding-bottom:11px>'+
            '<button id="es-b" type="button" style = "margin-top:7px" class="ui button h1-b">Apply</button>'+
            '</div>'+
          '</div>'


  )
    $("#c_tab2_head1").attr("style","display:none;");
    // ===========event
    $("#ew-b").click(function(){
      let wt = $("#ew-in").val();
      edge_curr.style("stroke-width",wt);
    })
    // ===============
    $("#ec-b").click(function(){
      let co = "#"+$("#ec-in").val();
      edge_curr.style("stroke",co);
    })
    // ================
    $("#e-opa-b").click(function(){
      let opa = $("#e-opa-in").val();
      edge_curr.style("opacity",opa/100);
    })
    // ===============
    $("#es-b").click(function(){
      let es = $("#edge_shape").val();
      console.log(es)
      if(es == 'fl'){
        edge_curr.attr("marker-end",null);
        edge_curr.style("stroke-dasharray",null);
      }else if(es == 'dl'){
        edge_curr.attr("marker-end",null);
        edge_curr.style("stroke-dasharray","4.4");
      }else if(es == 'adl'){
        edge_curr.style("stroke-dasharray","4.4");
        edge_curr.attr("marker-end","url(#arrow"+currentID+")");
        // track_status[currentID]['tabItem3']['dire']=true;
      }else{
        edge_curr.style("stroke-dasharray",null);
        edge_curr.attr("marker-end","url(#arrow"+currentID+")");
      }

    })

}
