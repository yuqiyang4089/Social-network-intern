function draw_tab2_head3(){
  $('#c_tab2_d3').append(
          "<div id ='c_tab2_head3'>"+
            '<div id = "cat_e_alltabItem2" >'+
            '</div>'+
            '<div id = "con_e_alltabItem2" width="100%">'+
            '</div>'+
          '</div>')
      // ==============categorical_filter==========
        for (let i in fil_e["cat"]){
          // console.log(2)
          let upper = i.substring(0,1).toUpperCase()+i.substring(1);
          $('#cat_e_alltabItem2').append(
            '<h6 style="padding:5px; margin-bottom:0px">'+upper+'</h6>'+
            '<div class="gap-line"></div>'+
            '<div class="ui multiple dropdown">'+
              '<input type="hidden" id =fil_cat_'+i+' name = '+i+' class="e_filters">'+
              '<i class="filter icon fil-post"></i>'+
              '<span class="text">Filter Posts</span>'+
               '<div class="menu ">'+
                '<div id = e_cat'+i+' class="scrolling menu fil">'+
                '</div>'+
               '</div>'
                      )
                      for(let j in fil_e['cat'][i]){
                        let each = fil_e["cat"][i][j];
                        $('#e_cat'+i).append(
                          '<div class="item fil-font" data-value="'+each+'">'+
                            each+
                        '</div>'
                        )
                         }
              }

   // ========slider filter=============
   for (let j in fil_e["con"]){
     let upper = j.substring(0,1).toUpperCase()+j.substring(1);
       max=Math.max.apply(null,fil_e["con"][j]);
       min=Math.min.apply(null,fil_e["con"][j]);
       $('#con_e_alltabItem2').append(
         '<div style="height:70px;" calss="e_fil_con">'+
         '<h6 style="padding:5px; margin-bottom:0px">'+upper+'</h6>'+
         '<div class="gap-line"></div>'+
             '<div style=" margin-left:40px;float:left;" class="slider" id="slider'+j+'">'+
             '</div>'+
             '<div class ="filter_font">'+
               '<p class="con_each_e" style="font-size:10px;" id ="value-range'+j+'">'+
               '</p>'+
             '</div>'+
         '</div>');

       slider_e[j]=d3
         .sliderBottom()
         .min(min)
         .max(max)
         .width(120)
         .default([min, max])
         .fill('#2196f3')
         .on('onchange', (val) => {
           // console.log(edge_curr)
            if (edge_curr != null){
              d3.select('p#value-range'+j).text(val.map(d3.format('d')).join('-'));
              getfil_e(edge_curr);
            }

         });

       gRange_e[j]=d3
       .select('div#slider'+j)
       .append('svg')
       .attr('width', 150)
       .attr('height', 30)
       .attr('class',j)
       .append('g')
       .attr('transform', 'translate(10,10)');

       gRange_e[j].call(slider_e[j]);
         d3.select('p#value-range'+j).attr('weight',50).text(
         slider_e[j]
           .value()
           .map(d3.format('d'))
           .join('-')
         );
     }

// ========extra event ==========
       $("#c_tab2_head3").attr("style","display:none;");
         // default_full_filter_e();
         $("#cat_e_alltabItem2 input[class='e_filters']").change(function(){
           if(edge_curr != null){
             getfil_e();
           }

           });


// ====== implement for node========






}
