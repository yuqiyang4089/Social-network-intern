function draw_tab1_head1(){
  $('#c_tab1_d1').append(
    // '<input class="jscolor" value="FF0000">'+
     '<div id ="c_tab1_head1" class= "ui input" style="padding-left:10px">'+
        '<label class= "h1-l" ">Node Size:</label>'+
          '<input value="2" id="nz-in" type="text" class="h1-ip" style="margin-left:62px"/>'+
            '<button id="nz-b" type="button" class="ui button h1-b">Apply</button>'+
// ===================
        '<label class= "h1-l" ">Node Color:</label>'+
          '<input id="nc-in" class="jscolor h1-ip" value="FF0000" style="margin-left:56px">'+
            '<button id="nc-b" type="button" class="ui button h1-b">Apply</button>'+
// =========================
        '<label class= "h1-l" ">Node Opacity:</label>'+
          '<input value="100" id="opa-in" type="text" class="h1-ip" style="margin-left:44px"/>'+
            '<button id="opa-b" type="button" class="ui button h1-b">Apply</button>'+
// ================
        '<label class= "h1-l" ">Node Border-width:</label>'+
          '<input value="0" id="bw-in" type="text" class="h1-ip" style="margin-left:14px" />'+
            '<button id="bw-b" type="button" class="ui button h1-b">Apply</button>'+
// ==================
        '<label class= "h1-l" ">Node Border-Color:</label>'+
          '<input id="bc-in" class="jscolor h1-ip" style="margin-left:14px" value="000000">'+
            '<button id="bc-b" type="button" class="ui button h1-b">Apply</button>'+
      '</div>'
  )
    $("#c_tab1_head1").attr("style","display:none;");
    // ===========event
    $("#nz-b").click(function(){
      let sz = $("#nz-in").val();
      node_curr.attr("r",sz);
    })
    // ===============
    $("#nc-b").click(function(){
      let co = "#"+$("#nc-in").val();
      node_curr.attr("fill",co);
    })
    // ================
    $("#opa-b").click(function(){
      let opa = $("#opa-in").val();
      node_curr.style("opacity",opa/100);
    })
    // ===============
    $("#bw-b").click(function(){
      let bw = $("#bw-in").val();
      let bc = "#"+$("#bc-in").val();
      node_curr.attr("stroke-width",bw).attr("stroke",bc);
    })
    // ==============
    $("#bc-b").click(function(){
      let bc = "#"+$("#bc-in").val();
      let bw = $("#bw-in").val();
      node_curr.attr("stroke",bc).attr("stroke-width",bw);
    })
}
