$("#tabItem1").append('<div class="accordion" id="accor_tab1">'+
  '<div class="nidea">'+
    '<div class="card-header" id="tab1_head1">'+
      '<h2 class="mb-0">'+
        '<button class="btn" type="button" data-toggle="collapse" data-target="#c_tab1_d1" aria-expanded="false" aria-controls="c_tab1_d1">'+
          'Global Scale Setting'+
        '</button>'+
      '</h2>'+
    '</div>'+
    '<div id="c_tab1_d1" class="collapse c_body" aria-labelledby="tab1_head1" data-toggle="collapse">'+
    '</div>'+
  '</div>'+
  '<div class="nidea">'+
    '<div class="card-header" id="tab1_head2">'+
      '<h2 class="mb-0">'+
        '<button class="btn collapsed" type="button" data-toggle="collapse" data-target="#c_tab1_d2" aria-expanded="false" aria-controls="c_tab1_d2">'+
          'Node Channels'+
        '</button>'+
      '</h2>'+
    '</div>'+
    '<div id="c_tab1_d2" class="collapse c_body" aria-labelledby="tab1_head2" data-toggle="collapse">'+
    '</div>'+
  '</div>'+
  '<div class="nidea">'+
    '<div class="card-header" id="tab1_head3">'+
      '<h2 class="mb-0">'+
        '<button class="btn collapsed" type="button" data-toggle="collapse" data-target="#c_tab1_d3" aria-expanded="false" aria-controls="c_tab1_d3">'+
          'Node Filter'+
        '</button>'+
      '</h2>'+
    '</div>'+
    '<div id="c_tab1_d3" class="collapse c_body" aria-labelledby="tab1_head3" data-toggle="collapse">'+
    '</div>'+
  '</div>'+
  '<div class="nidea">'+
    '<div class="card-header" id="tab1_head4">'+
      '<h2 class="mb-0">'+
        '<button class="btn collapsed" type="button" data-toggle="collapse" data-target="#c_tab1_d4" aria-expanded="false" aria-controls="c_tab1_d4">'+
          'Node Lable Setting'+
        '</button>'+
      '</h2>'+
    '</div>'+
    '<div id="c_tab1_d4" class="collapse c_body" aria-labelledby="tab1_head4" data-toggle="collapse">'+
      // '<div class="card-body">'+
      //     'Keep trying! Coming soon!'+
      // '</div>'+
    '</div>'+
  '</div>'+
'</div>'
);
// ==================tab1_head1======================
function scale(fil_v){
// ============type===========
  $('#c_tab1_d1').append(
 '<div id ="c_tab1_head1" style="padding-left:10px">'+
      '<h6 style="padding:5px; margin-bottom:0px">Node Size:</h6>'+
      '<div class="gap-line"></div>'+
      '<div>'+
            '<label style="margin:2px;margin-left:7px">Scale Type:</label>'+
            '<select class=" scale h1_sc" id ="sz_scale_sc">'+
              '<option  value="default">Select</option>'+
              '<option  value="liScale">Linear scales</option>'+
              '<option  value="logScale">Logarithmic scales</option>'+
              '<option  value="powScale">Power scales</option>'+
            '</select>'+
       '</div>'+
       '<div>'+
            '<label style="margin:3px;margin-left:7px">Property:</label>'+
            '<select class="con_property h1_sc" id = "sz_sc">'+
            '</select>'+
       '</div>'+
  '<div class = "sls-sz">'+
       '<div class="domain form-inline">'+
             '<label style="margin:3px;margin-left:7px">Domain:</label>'+
             '<div class = "sl_d" id = "sl_d_si">'+
             '</div>'+
       '</div>'+
       '<div class="range form-inline">'+
            '<label style="margin:3px;margin-left:7px">Range:</label>'+
            '<div class = "sl_r">'+
                  '<div class="g_active" style = "width:240px;height:30px;float:left;padding-top:5px">'+
                     '<div style=" float:left;" class="slider" id="sli_n_s">'+
                     '</div>'+
                     '<div class ="filter_font">'+
                         '<p class="sz_scale_v_r" style="font-size:10px;" id ="value-range-n-s"></p>'+
                     '</div>'+
                  '</div>'+
            '</div>'+
       '</div>'+
  "</div>"+
      // ===========done with size=========
      '<h6 style="padding:5px;margin-bottom:0px">Node Transparency:</h6>'+
      '<div class="gap-line"></div>'+
      '<div>'+
            '<label style="margin:3px;margin-left:7px">Scale Type:</label>'+
            '<select class="h1_sc scale" id ="trs_scale_sc">'+
              '<option value="default">Select</option>'+
              '<option value="liScale">Linear scales</option>'+
              '<option value="logScale">Logarithmic scales</option>'+
              '<option value="powScale">Power scales</option>'+
            '</select>'+
       '</div>'+
       '<div>'+
            '<label style="margin:3px;margin-left:7px">Property:</label>'+
            '<select class="con_property h1_sc" id="trs_sc">'+
            '</select>'+
       '</div>'+
"<div class= 'sls-trs'>"+
       '<div class="domain form-inline">'+
            '<label style="margin:3px;margin-left:7px">Domain:</label>'+
            '<div class = "sl_d" id = "sl_d_trs">'+
            '</div>'+
       '</div>'+
       '<div class="range form-inline">'+
              '<label style="margin:3px;margin-left:7px">Range:</label>'+
              '<div class = "sl_r">'+
                    '<div class="g_active" style = "width:240px;height:30px;float:left;padding-top:5px">'+
                       '<div style=" float:left;" class="slider" id="sli_n_trs">'+
                       '</div>'+
                       '<div class ="filter_font">'+
                           '<p class="trs_scale_v_r" style="font-size:10px;" id ="value-range-n-trs"></p>'+
                       '</div>'+
                    '</div>'+
              '</div>'+
       '</div>'+
"</div>"+
             // ===========done with transparency=========
      '<h6 style="padding:5px;margin-bottom:0px">Node Border:</h6>'+
      '<div class="gap-line"></div>'+
      '<div>'+
          '<label style="margin:3px;margin-left:7px">Scale Type:</label>'+
          '<select class=" scale h1_sc" id ="bor_scale_sc">'+
            '<option value="default">Select</option>'+
            '<option value="liScale">Linear scales</option>'+
            '<option value="logScale">Logarithmic scales</option>'+
            '<option value="powScale">Power scales</option>'+
          '</select>'+
       '</div>'+
       '<div>'+
          '<label style="margin:3px;margin-left:7px">Property:</label>'+
          '<select class="h1_sc con_property" id="bor_sc">'+
          '</select>'+
       '</div>'+
"<div class = 'sls-bor'>"+
       '<div class="domain form-inline">'+
          '<label style="margin:3px;margin-left:7px">Domain:</label>'+
          '<div class = "sl_d" id = "sl_d_bor">'+
          '</div>'+
       '</div>'+
       '<div class="range form-inline">'+
          '<label style="margin:3px;margin-left:7px">Range:</label>'+
            '<div class = "sl_r" >'+
                  '<div class="g_active" style = "width:240px;height:30px;float:left;padding-top:5px">'+
                     '<div style=" float:left;" class="slider" id="sli_n_b">'+
                     '</div>'+
                     '<div class ="filter_font">'+
                         '<p class="bor_scale_v_r" style="font-size:10px;" id ="value-range-n-b"></p>'+
                     '</div>'+
                  '</div>'+
            '</div>'+
       '</div>'+
  "</div>"+
 '<div>'
  )
  // =======dynamic option=====
  let htm='<option value="default">Select</option>';
  for(let j in fil_v['con']){
    htm+='<option value='+j+'>'+j+'</option>'
  }
  $('.con_property').append(htm);
// ======= slider of dm=============================
  for (let j in fil_v["con"]){
      max=Math.max.apply(null,fil_v["con"][j])
      min=Math.min.apply(null,fil_v["con"][j])
      let p = "sz_"+j;
      let k = "trs_"+j;
      let l= "bor_"+j;
// ==========size=============
       $('#sl_d_si')
       .append(
       '<div  class="g_none" id='+p+' style = "width:240px;height:30px;float:left;padding-top:5px">'+
          '<div style=" float:left;" class="slider" id="sli'+p+'">'+
          '</div>'+
          '<div class ="filter_font">'+
              '<p class="sz_scale_v_do" style="font-size:10px;" id ="value-range'+p+'"></p>'+
          '</div>'+
       '</div>')

       slider_exc[p]=d3
        .sliderBottom()
        .min(min)
        .max(max)
        .width(120)
        .default([min, max])
        .fill('#2196f3')
        .on('onchange', (val) => {
        d3.select('p#value-range'+p).text(val.map(d3.format('d')).join('-'));
        size_do_sli(currentID);
        });

        gRange_exc[p]=d3
        .select('div#sli'+p)
        .append('svg')
        .attr('width', 180)
        .attr('height', 30)
        .attr('class','s_no')
        .append('g')
        .attr('transform', 'translate(10,10)');

        gRange_exc[p].call(slider_exc[p]);
          d3.select('p#value-range'+p).attr('weight',50).text(
          slider_exc[p]
            .value()
            .map(d3.format('d'))
            .join('-')
        );


    // ==========trs=============
       $('#sl_d_trs')
       .append(
       '<div  class="g_none" id='+k+' style = "width:240px;height:30px;float:left;padding-top:5px">'+
          '<div style=" float:left;" class="slider" id="sli'+k+'">'+
          '</div>'+
          '<div class ="filter_font">'+
              '<p class="trs_scale_v_do" style="font-size:10px;" id ="value-range'+k+'"></p>'+
          '</div>'+
       '</div>')

       slider_exc[k]=d3
        .sliderBottom()
        .min(min)
        .max(max)
        .width(120)
        .default([min, max])
        .fill('#2196f3')
        .on('onchange', (val) => {
        d3.select('p#value-range'+k).text(val.map(d3.format('d')).join('-'));
            trs_do_sli(currentID);
        });

        gRange_exc[k]=d3
        .select('div#sli'+k)
        .append('svg')
        .attr('width', 180)
        .attr('height', 30)
        .attr('class','s_no')
        .append('g')
        .attr('transform', 'translate(10,10)');

        gRange_exc[k].call(slider_exc[k]);
          d3.select('p#value-range'+k).attr('weight',50).text(
          slider_exc[k]
            .value()
            .map(d3.format('d'))
            .join('-')
        );
// ================border=====
          $('#sl_d_bor')
          .append(
          '<div  class="g_none" id='+l+' style = "width:240px;height:30px;float:left;padding-top:5px">'+
             '<div style=" float:left;" class="slider" id="sli'+l+'">'+
             '</div>'+
             '<div class ="filter_font">'+
                 '<p class="bor_scale_v_do" style="font-size:10px;" id ="value-range'+l+'"></p>'+
             '</div>'+
          '</div>')

          slider_exc[l]=d3
           .sliderBottom()
           .min(min)
           .max(max)
           .width(120)
           .default([min, max])
           .fill('#2196f3')
           .on('onchange', (val) => {
           d3.select('p#value-range'+l).text(val.map(d3.format('d')).join('-'));
              bor_do_sli(currentID);
           });

           gRange_exc[l]=d3
           .select('div#sli'+l)
           .append('svg')
           .attr('width', 180)
           .attr('height', 30)
           .attr('class','s_no')
           .append('g')
           .attr('transform', 'translate(10,10)');

           gRange_exc[l].call(slider_exc[l]);
             d3.select('p#value-range'+l).attr('weight',50).text(
             slider_exc[l]
               .value()
               .map(d3.format('d'))
               .join('-')
           );


      }
// ===========slider of range Size==========
      slider_exc["s_no"]=d3
           .sliderBottom()
           .min(1)
           .max(5)
           .width(120)
           .default([3, 3])
           .fill('#2196f3')
           .on('onchange', (val) => {
           d3.select('p#value-range-n-s').text(val.map(d3.format('d')).join('-'));
           size_ra_sli(currentID);
           });

       gRange_exc["s_no"]=d3
           .select('div#sli_n_s')
           .append('svg')
           .attr('width', 190)
           .attr('height', 30)
           .attr('class',"s_no_r")
           .append('g')
           .attr('transform', 'translate(10,10)');

       gRange_exc["s_no"].call(slider_exc["s_no"]);
         d3.select('p#value-range-n-s').attr('weight',50).text(
         slider_exc["s_no"]
           .value()
           .map(d3.format('d'))
           .join('-')
       );


               // ===========slider of range trs==========
               slider_exc["tras_no"]=d3
                .sliderBottom()
                .min(0)
                .max(100)
                .width(120)
                .default([100, 100])
                .fill('#2196f3')
                .on('onchange', (val) => {
                d3.select('p#value-range-n-trs').text(val.map(d3.format('d')).join('-'));
                trs_ra_sli(currentID);
                });

                gRange_exc["tras_no"]=d3
                .select('div#sli_n_trs')
                .append('svg')
                .attr('width', 190)
                .attr('height', 30)
                .attr('class',"s_no_r")
                .append('g')
                .attr('transform', 'translate(10,10)');

                gRange_exc["tras_no"].call(slider_exc["tras_no"]);
                  d3.select('p#value-range-n-trs').attr('weight',50).text(
                  slider_exc["tras_no"]
                    .value()
                    .map(d3.format('d'))
                    .join('-')
                );

                // ===========slider of range border==========
                slider_exc["bor_no"]=d3
                 .sliderBottom()
                 .min(0)
                 .max(4)
                 .width(120)
                 .default([0, 0])
                 .fill('#2196f3')
                 .on('onchange', (val) => {
                 d3.select('p#value-range-n-b').text(val.map(d3.format('d')).join('-'));
                 bor_ra_sli(currentID);
                 });
                 gRange_exc["bor_no"]=d3
                 .select('div#sli_n_b')
                 .append('svg')
                 .attr('width', 190)
                 .attr('height', 30)
                 .attr('class',"s_no_r")
                 .append('g')
                 .attr('transform', 'translate(10,10)');

                 gRange_exc["bor_no"].call(slider_exc["bor_no"]);
                   d3.select('p#value-range-n-b').attr('weight',50).text(
                   slider_exc["bor_no"]
                     .value()
                     .map(d3.format('d'))
                     .join('-')
                 );



// =========event====select correspond=================
    //===========size==========
      // =======scale=======
      $('#sz_scale_sc').change(function(){
        let scale = $(this).children('option:selected').val();
        let si = $("#sz_sc").val();
        track_status[currentID]['tabItem1']['head1']['sc'][0]=scale;
        if(si!= "default"){
            let temp_sca = eval(scale);
            let temp_d = ($("#value-rangesz_"+si).text().split("-")).map(Number);
            let temp_r = ($("#value-range-n-s").text().split("-")).map(Number);
            temp_sca.domain(temp_d).range(temp_r);
            node_curr.attr("r",function(d){
              return temp_sca(d[si])});
        }else{
             $("#sz_sc").find("option:eq(1)").prop("selected",true);
             $("#sz_sc").trigger("change");
        }


      });
      // ============property==============================
      $("#sz_sc").change(function(){
        $("#sl_d_si").children().removeClass("g_active");
        let si=$(this).val();
        track_status[currentID]['tabItem1']['head1']['sc'][1]=si;
        $("#sz_"+si).addClass('g_active');
        let scale = $("#sz_scale_sc").val();
        if(scale != "default"){
            slider_exc['s_no'].value(track_status[currentID]['tabItem1']['head1']['sl']["sz_"+si]['r']);
            let temp_sca = eval(scale);
            let temp_d = ($("#value-rangesz_"+si).text().split("-")).map(Number);
            let temp_r = ($("#value-range-n-s").text().split("-")).map(Number);
            temp_sca.domain(temp_d).range(temp_r);
            node_curr.attr("r",function(d){return temp_sca(d[si])});
        }else{
          $("#sz_scale_sc").find("option:eq(1)").prop("selected",true);
          $("#sz_scale_sc").trigger("change");
        }

      })
      // ======slider====== Size domain && range==================
        function size_do_sli(currentID){
          let scale = $("#sz_scale_sc").val();
          let si = $("#sz_sc").val();
          if(si != "default" && scale != "default"){
            let temp_sca = eval(scale);
            let temp_d = ($("#value-rangesz_"+si).text().split("-")).map(Number);
            let temp_r = ($("#value-range-n-s").text().split("-")).map(Number);
            track_status[currentID]['tabItem1']['head1']['sl']["sz_"+si]['d']=temp_d;
            // track_status[currentID]['tabItem1']['head1']['sl']["sz_"+si]['r']=temp_r;
            temp_sca.domain(temp_d).range(temp_r);
            // console.log([temp_sca.domain(),temp_sca.range(),temp_sca(1990)])
            node_curr.attr("r",function(d){

              return temp_sca(d[si])});

          }
        }
        function size_ra_sli(currentID){
          let scale = $("#sz_scale_sc").val();
          let si = $("#sz_sc").val();
          if(si != "default" && scale != "default"){
            let temp_sca = eval(scale);
            let temp_d = ($("#value-rangesz_"+si).text().split("-")).map(Number);
            let temp_r = ($("#value-range-n-s").text().split("-")).map(Number);
            // track_status[currentID]['tabItem1']['head1']['sl']["sz_"+si]['d']=temp_d;
            track_status[currentID]['tabItem1']['head1']['sl']["sz_"+si]['r']=temp_r;
            temp_sca.domain(temp_d).range(temp_r);
            node_curr.attr("r",function(d){return temp_sca(d[si])});
          }
        }
    // ====================transparency======================
       //+=============== scale=========
       $('#trs_scale_sc').change(function(){
         let scale = $(this).children('option:selected').val();
         let trs = $("#trs_sc").val();
         track_status[currentID]['tabItem1']['head1']['sc'][2]=scale;
         if(trs!= "default"){
             let temp_sca = eval(scale);
             let temp_d = ($("#value-rangetrs_"+trs).text().split("-")).map(Number);
             let temp_r = ($("#value-range-n-trs").text().split("-")).map(Number);

             temp_sca.domain(temp_d).range(temp_r);
             node_curr.style("opacity",function(d){return temp_sca(d[trs])});
         }else{
           $("#trs_sc").find("option:eq(1)").prop("selected",true);
           $("#trs_sc").trigger("change");

         }
       });
        // =================property
       $("#trs_sc").change(function(){
         $("#sl_d_trs").children().removeClass("g_active");
         let trs=$(this).children('option:selected').val();
         track_status[currentID]['tabItem1']['head1']['sc'][3]=trs;
         $("#trs_"+trs).addClass('g_active');
         let scale = $("#trs_scale_sc").val();
         if(scale != "default"){
             slider_exc['tras_no'].value(track_status[currentID]['tabItem1']['head1']['sl']["trs_"+trs]['r'])
             let temp_sca = eval(scale);
             let temp_d = ($("#value-rangetrs_"+trs).text().split("-")).map(Number);
             let temp_r = ($("#value-range-n-trs").text().split("-")).map(Number);
             temp_sca.domain(temp_d).range(temp_r);
             node_curr.style("opacity",function(d){return temp_sca(d[trs])});
         }else{
           $("#trs_scale_sc").find("option:eq(1)").prop("selected",true);
           $("#trs_scale_sc").trigger("change");
         }

       });

       // ======slider====== transparency domain &&range==================
       function trs_do_sli(currentID){
         let scale = $("#trs_scale_sc").val();
         let trs = $("#trs_sc").val();
         if( trs != "default" && scale != "default"){
           let temp_sca = eval(scale);
           let temp_d = ($("#value-rangetrs_"+trs).text().split("-")).map(Number);
           let temp_r = ($("#value-range-n-trs").text().split("-")).map(Number);
           track_status[currentID]['tabItem1']['head1']['sl']["trs_"+trs]['d']=temp_d;
           // track_status[currentID]['tabItem1']['head1']['sl']["trs_"+trs]['r']=temp_r;///// be careful
           temp_sca.domain(temp_d).range(temp_r);
           node_curr.style("opacity",function(d){ return temp_sca(d[trs])/100});

         }
       }
       function trs_ra_sli(currentID){
         let scale = $("#trs_scale_sc").val();
         let trs = $("#trs_sc").val();
         if( trs != "default" && scale != "default"){
           let temp_sca = eval(scale);
           let temp_d = ($("#value-rangetrs_"+trs).text().split("-")).map(Number);
           let temp_r = ($("#value-range-n-trs").text().split("-")).map(Number);
           // track_status[currentID]['tabItem1']['head1']['sl']["trs_"+trs]['d']=temp_d;
           track_status[currentID]['tabItem1']['head1']['sl']["trs_"+trs]['r']=temp_r;
           temp_sca.domain(temp_d).range(temp_r);
           node_curr.style("opacity",function(d){ return temp_sca(d[trs])/100});

         }
       }
       // =====slider ============
    // ==============border=============
              //+===============scale========
              $('#bor_scale_sc').change(function(){
                let scale = $(this).children('option:selected').val();
                let bor = $("#bor_sc").val();
                track_status[currentID]['tabItem1']['head1']['sc'][4]=scale;
                if(bor!= "default"){
                    let temp_sca = eval(scale);
                    let temp_d = ($("#value-rangebor_"+bor).text().split("-")).map(Number);
                    let temp_r = ($("#value-range-n-b").text().split("-")).map(Number);
                    temp_sca.domain(temp_d).range(temp_r);
                    node_curr.attr("stroke","black").attr("stroke-width",function(d){return temp_sca(d[bor])});
                }else{
                  $("#bor_sc").find("option:eq(1)").prop("selected",true);
                  $("#bor_sc").trigger("change");
                }
                // ==========record in history===========

              });
     // ============property

             $("#bor_sc").change(function(){
               $("#sl_d_bor").children().removeClass("g_active");
               let bor=$(this).children('option:selected').val();
                track_status[currentID]['tabItem1']['head1']['sc'][5]=bor;
               $("#bor_"+bor).addClass('g_active');
               let scale = $("#bor_scale_sc").val();
               if(scale != "default"){
                   slider_exc['bor_no'].value(track_status[currentID]['tabItem1']['head1']['sl']["bor_"+bor]['r'])
                   let temp_sca = eval(scale);
                   let temp_d = ($("#value-rangebor_"+bor).text().split("-")).map(Number);
                   let temp_r = ($("#value-range-n-b").text().split("-")).map(Number);
                   temp_sca.domain(temp_d).range(temp_r);
                   node_curr.attr("stroke","black").attr("stroke-width",function(d){return temp_sca(d[bor])});
               }else{
                 $("#bor_scale_sc").find("option:eq(1)").prop("selected",true);
                 $("#bor_scale_sc").trigger("change");
               }
             });

             // ==slider========== border domain and range==================
             function bor_do_sli(currentID){
               let scale = $("#bor_scale_sc").val();
               let bor = $("#bor_sc").val();
               if(bor != "default" && scale != "default"){
                 let temp_sca = eval(scale);
                 let temp_d = ($("#value-rangebor_"+bor).text().split("-")).map(Number);
                 let temp_r = ($("#value-range-n-b").text().split("-")).map(Number);
                 track_status[currentID]['tabItem1']['head1']['sl']["bor_"+bor]['d']=temp_d;
                 // track_status[currentID]['tabItem1']['head1']['sl']["bor_"+bor]['r']=temp_r;
                 temp_sca.domain(temp_d).range(temp_r);
                 node_curr.attr("stroke","black").attr("stroke-width",function(d){return temp_sca(d[bor])});
               }
             }

             function bor_ra_sli(currentID){
               let scale = $("#bor_scale_sc").val();
               let bor = $("#bor_sc").val();
               if(bor != "default" && scale != "default"){
                 let temp_sca = eval(scale);
                 let temp_d = ($("#value-rangebor_"+bor).text().split("-")).map(Number);
                 let temp_r = ($("#value-range-n-b").text().split("-")).map(Number);
                 // track_status[currentID]['tabItem1']['head1']['sl']["bor_"+bor]['d']=temp_d;
                 track_status[currentID]['tabItem1']['head1']['sl']["bor_"+bor]['r']=temp_r;
                 temp_sca.domain(temp_d).range(temp_r);
                 node_curr.attr("stroke","black").attr("stroke-width",function(d){return temp_sca(d[bor])});
               }
             }


//===========extra correction=========
$("#c_tab1_head1").attr("style","display:none;");


// ==================== correspond result in graph========================







}
